// SastaElectronics - Supabase Configuration
// Fixed: No infinite loop, proper error handling

const SUPABASE_URL = 'https://azvxxqstxjellvlpurup.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_oONvwSEgNCiYVtXACT75TQ_p5qJTMsj';

// Initialize Supabase client
window.supabaseClient = null;

if (typeof supabase === 'undefined') {
  console.error('❌ Supabase CDN not loaded! Check your internet connection.');
  console.error('Please add: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"><\/script>');
} else {
  try {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase connected successfully!');
  } catch (error) {
    console.error('❌ Failed to create Supabase client:', error);
  }
}
