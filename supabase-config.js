// supabase-config.js
// Replace these with your actual Supabase credentials
const SUPABASE_URL = 'https://erixafnalqakldvkscue.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyaXhhZm5hbHFha2xkdmtzY3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0NzE3MDAsImV4cCI6MjA4NDA0NzcwMH0.S42M4MvFYiI8ns_p60GIpbPD7N5yi7mdOGsmx78QqCc';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);