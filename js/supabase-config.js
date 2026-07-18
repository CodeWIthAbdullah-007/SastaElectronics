const SUPABASE_URL = 'https://azvxxqstxjellvlpurup.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_oONvwSEgNCiYVtXACT75TQ_p5qJTMsj';

const SupabaseConfig = {
  initialized: false,
  client: null,

  init() {
    if (typeof supabase === 'undefined') return false;
    this.client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    this.initialized = true;
    return true;
  },

  async signUp(email, password, metadata) {
    if (!this.initialized) return null;
    const { data, error } = await this.client.auth.signUp({
      email, password, options: { data: metadata }
    });
    return { data, error };
  },

  async signIn(email, password) {
    if (!this.initialized) return null;
    const { data, error } = await this.client.auth.signInWithPassword({ email, password });
    return { data, error };
  },

  async signOut() {
    if (!this.initialized) return;
    await this.client.auth.signOut();
  },

  async getUser() {
    if (!this.initialized) return null;
    const { data: { user } } = await this.client.auth.getUser();
    return user;
  },

  async getProducts() {
    if (!this.initialized) return [];
    const { data } = await this.client.from('products').select('*');
    return data || [];
  },

  async getProductById(id) {
    if (!this.initialized) return null;
    const { data } = await this.client.from('products').select('*').eq('id', id).single();
    return data;
  },

  async addToCart(userId, productId, qty) {
    if (!this.initialized) return null;
    const { data, error } = await this.client.from('cart_items').upsert({
      user_id: userId, product_id: productId, quantity: qty
    });
    return { data, error };
  },

  async getCartItems(userId) {
    if (!this.initialized) return [];
    const { data } = await this.client.from('cart_items')
      .select('*, products(*)').eq('user_id', userId);
    return data || [];
  },

  async placeOrder(userId, orderData) {
    if (!this.initialized) return null;
    const { data, error } = await this.client.from('orders').insert({
      user_id: userId, ...orderData
    }).select();
    return { data, error };
  },

  async getOrders(userId) {
    if (!this.initialized) return [];
    const { data } = await this.client.from('orders')
      .select('*, order_items(*, products(*))').eq('user_id', userId).order('created_at', { ascending: false });
    return data || [];
  },

  async addReview(productId, userId, rating, comment) {
    if (!this.initialized) return null;
    const { data, error } = await this.client.from('reviews').insert({
      product_id: productId, user_id: userId, rating, comment
    });
    return { data, error };
  },

  async getReviews(productId) {
    if (!this.initialized) return [];
    const { data } = await this.client.from('reviews')
      .select('*, profiles(first_name, last_name)').eq('product_id', productId).order('created_at', { ascending: false });
    return data || [];
  },

  async toggleWishlist(userId, productId) {
    if (!this.initialized) return null;
    const { data: existing } = await this.client.from('wishlists')
      .select('id').eq('user_id', userId).eq('product_id', productId).single();
    if (existing) {
      await this.client.from('wishlists').delete().eq('id', existing.id);
      return false;
    } else {
      await this.client.from('wishlists').insert({ user_id: userId, product_id: productId });
      return true;
    }
  }
};
