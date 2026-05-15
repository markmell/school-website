import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://jpajvrqaciuljtrtytlz.supabase.co"

const supabaseKey = "sb_publishable_DYNkXlxMv72LTb76B8drXA_9ugTBTSR"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)