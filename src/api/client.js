import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
    'https://uhhpxrydhbzktznkfszl.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoaHB4cnlkaGJ6a3R6bmtmc3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMjc4NzcsImV4cCI6MjAwMDYwMzg3N30.yriuAfma0dHFGGeakOEGymOjKfePH84zmJbZgo8W_NY'
)

export default supabase