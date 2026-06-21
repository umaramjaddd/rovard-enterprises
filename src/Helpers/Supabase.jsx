import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://andnenafditpqozxlqmk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZG5lbmFmZGl0cHFvenhscW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NTAzMjIsImV4cCI6MjA4NjAyNjMyMn0.ovnEPFTSbDmlEDttTPPGmndial1Vi49Tsrz43hcmUwU';

export const supabase = createClient(supabaseUrl, supabaseKey);
