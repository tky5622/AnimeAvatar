import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseUrl = 'https://wuyspkxtjxjlklqkchxr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1eXNwa3h0anhqbGtscWtjaHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MDIwMTIsImV4cCI6MTk5OTI3ODAxMn0.t-KoM175UyI6yUMUgN4g3F6-Lz3W-KWUAFO2hGkkgN8'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

const supabase = createBrowserSupabaseClient();

export default supabase;

