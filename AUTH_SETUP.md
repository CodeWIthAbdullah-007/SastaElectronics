# Supabase Authentication Setup Guide

## Step 1: Update Supabase Credentials

Open `js/supabase-config.js` and replace the placeholder values with your actual Supabase credentials:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

### How to get these:
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy **Project URL** and **anon public key**

---

## Step 2: Enable Email Authentication

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Configure email settings:
   - **Site URL**: Your website URL (e.g., `http://localhost:5500` or your domain)
   - **Redirect URL**: `http://localhost:5500/reset-password.html` (or your domain)

---

## Step 3: Configure Email Templates

1. Go to **Authentication** → **Email Templates**
2. Customize these templates:
   - **Confirm signup**: Email verification
   - **Reset password**: Password reset link
   - **Magic link**: Optional

### Example Email Template (Confirm Signup):
```
<h2>Welcome to SastaElectronics!</h2>
<p>Click the link below to verify your email:</p>
<a href="{{ .ConfirmationURL }}">Verify Email</a>
```

---

## Step 4: Create Profiles Table

Run this SQL in Supabase SQL Editor:

```sql
-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  first_name text,
  last_name text,
  phone text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using (true);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

-- Create trigger to auto-create profile on signup
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, first_name, last_name, phone)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    new.raw_user_meta_data->>'phone'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

---

## Step 5: Test Authentication

### Test Signup:
1. Open `signup.html`
2. Fill in the form
3. Click "Create Account"
4. Check your email for verification link
5. Click the link to verify

### Test Login:
1. Open `login.html`
2. Enter your email and password
3. Click "Sign In"
4. You should be redirected to dashboard

### Test Forgot Password:
1. Open `forgot-password.html`
2. Enter your email
3. Click "Send Reset Link"
4. Check email for reset link
5. Click link and set new password

---

## Step 6: Check Users in Supabase

1. Go to **Authentication** → **Users**
2. You should see all registered users
3. Click on a user to see their details

---

## Troubleshooting

### Issue: "Supabase not connected"
**Solution:** 
- Make sure you included the Supabase CDN script in HTML
- Check that credentials are correct in `supabase-config.js`

### Issue: "Email not received"
**Solution:**
- Check spam folder
- Verify email provider is enabled in Supabase
- Check email templates are configured
- Verify redirect URLs are correct

### Issue: "Profile not created"
**Solution:**
- Make sure you ran the SQL to create profiles table
- Check the trigger is working
- Check browser console for errors

### Issue: "Login not working"
**Solution:**
- Verify email is confirmed (check email for verification link)
- Check password is correct
- Check browser console for errors

---

## Security Notes

1. **Never expose your Supabase service role key** - only use anon key
2. **Enable Row Level Security (RLS)** on all tables
3. **Use strong passwords** - enforce minimum 6 characters
4. **Enable email confirmation** - prevents fake accounts
5. **Rate limiting** - configure in Supabase to prevent abuse

---

## Features Implemented

✅ User signup with email verification  
✅ User login with session management  
✅ Forgot password with email reset  
✅ User profile creation and management  
✅ Auth state persistence (stays logged in)  
✅ Protected routes (dashboard requires login)  
✅ Logout functionality  
✅ Password update  
✅ Profile update  

---

## Next Steps

1. Add social login (Google, Facebook, etc.)
2. Add two-factor authentication (2FA)
3. Add role-based access control
4. Add user avatar upload
5. Add email preferences

---

**Need help?** Check [Supabase Documentation](https://supabase.com/docs/guides/auth)
