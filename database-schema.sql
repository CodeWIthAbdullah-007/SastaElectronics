-- SastaElectronics Supabase Database Schema

create table profiles (
  id uuid references auth.users on delete cascade primary key,
  first_name text not null,
  last_name text not null,
  phone text,
  address text,
  city text,
  postal_code text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table categories (
  id text primary key,
  name text not null,
  icon text,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table products (
  id text primary key,
  name text not null,
  category text references categories(id),
  brand text not null,
  price numeric not null,
  original_price numeric,
  image text,
  description text,
  specs jsonb default '{}'::jsonb,
  rating numeric default 0,
  reviews_count integer default 0,
  stock integer default 0,
  sku text unique,
  badge text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table cart_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  product_id text references products(id) on delete cascade not null,
  quantity integer not null default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, product_id)
);

create table orders (
  id text primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  status text not null default 'pending',
  total numeric not null,
  shipping_first_name text not null,
  shipping_last_name text not null,
  shipping_email text not null,
  shipping_phone text not null,
  shipping_address text not null,
  shipping_city text not null,
  shipping_postal_code text,
  payment_method text not null default 'cod',
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table order_items (
  id uuid default gen_random_uuid() primary key,
  order_id text references orders(id) on delete cascade not null,
  product_id text references products(id) not null,
  quantity integer not null,
  price numeric not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table reviews (
  id uuid default gen_random_uuid() primary key,
  product_id text references products(id) on delete cascade not null,
  user_id uuid references profiles(id) on delete cascade not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(product_id, user_id)
);

create table wishlists (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  product_id text references products(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, product_id)
);

-- Row Level Security
alter table profiles enable row level security;
alter table products enable row level security;
alter table categories enable row level security;
alter table cart_items enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table reviews enable row level security;
alter table wishlists enable row level security;

-- Policies
create policy "Public profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);

create policy "Products are viewable by everyone" on products for select using (true);
create policy "Categories are viewable by everyone" on categories for select using (true);

create policy "Users can view own cart" on cart_items for select using (auth.uid() = user_id);
create policy "Users can manage own cart" on cart_items for all using (auth.uid() = user_id);

create policy "Users can view own orders" on orders for select using (auth.uid() = user_id);
create policy "Users can create own orders" on orders for insert with check (auth.uid() = user_id);
create policy "Users can view own order items" on order_items for select using (auth.uid() in (select user_id from orders where id = order_items.order_id));

create policy "Reviews are viewable by everyone" on reviews for select using (true);
create policy "Authenticated users can create reviews" on reviews for insert with check (auth.uid() = user_id);
create policy "Users can update own reviews" on reviews for update using (auth.uid() = user_id);

create policy "Users can view own wishlist" on wishlists for select using (auth.uid() = user_id);
create policy "Users can manage own wishlist" on wishlists for all using (auth.uid() = user_id);

-- Functions
create function handle_new_user() returns trigger as $$
begin
  insert into profiles (id, first_name, last_name, phone)
  values (new.id, new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name', new.raw_user_meta_data->>'phone');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created after insert on auth.users for each row execute procedure handle_new_user();
