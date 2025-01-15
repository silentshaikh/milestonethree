import { createClient, SupabaseClient } from '@supabase/supabase-js';
const SUPABASE_URL = "https://tvhfevxuvyvocotaptic.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2aGZldnh1dnl2b2NvdGFwdGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2NDg0MzEsImV4cCI6MjA1MTIyNDQzMX0.rH62sfE15wKz7tb9HczJ-y_WkeSd5hKJb2Tpo9Eic90";
if(!SUPABASE_URL || !SUPABASE_ANON_KEY){
    throw new Error('Supabase URL or Anon Key is missing in the environment variables.');
}
export const supabase:SupabaseClient = createClient(SUPABASE_URL,SUPABASE_ANON_KEY)