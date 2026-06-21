import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://andnenafditpqozxlqmk.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZG5lbmFmZGl0cHFvenhscW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NTAzMjIsImV4cCI6MjA4NjAyNjMyMn0.ovnEPFTSbDmlEDttTPPGmndial1Vi49Tsrz43hcmUwU';


const supabaseUrl = 'https://sxqlqovtxxsftlbwzbhh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWxxb3Z0eHhzZnRsYnd6YmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNDQ4NzgsImV4cCI6MjA5NzYyMDg3OH0.qNrWa6J7dbaktUKLeon_9Is5DMfBCXgTy7r7EW6xafQ';


export const supabase = createClient(supabaseUrl, supabaseKey);
