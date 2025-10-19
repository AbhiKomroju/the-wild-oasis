import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://udueypjreqvrhowqiiyk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkdWV5cGpyZXF2cmhvd3FpaXlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxNzM1MDcsImV4cCI6MjA3NTc0OTUwN30.qRtQkoXPKfgArLvH__Fw9xPQa6t4-kLHIBuioN0zFz4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
