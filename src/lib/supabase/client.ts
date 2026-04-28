import { createClient } from '@supabase/supabase-js';

// This client uses the ANON key - safe for server-side API routes (Build Safety V2)
// It respects RLS policies, ensuring security is enforced at the DB level
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
