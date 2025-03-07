import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://bzgqtabfmxdqubtdvwge.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6Z3F0YWJmbXhkcXVidGR2d2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDI1MzUsImV4cCI6MjA1NTg3ODUzNX0.FN6nvh-N1I_koz9z5M7d-oN5tD7UF90Q8tZ7VfYVDfI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
