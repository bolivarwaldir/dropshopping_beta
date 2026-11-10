// Supabase client configuration
const SUPABASE_URL = 'https://hazqujsnrdgqkvhewenx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_tImaSnbKH9xQCySjPKgvpw_wMEsS2Sr';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Auth helpers
async function getCurrentUser() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user;
}

async function signOut() {
  await supabaseClient.auth.signOut();
  window.location.href = '/index.html';
}
