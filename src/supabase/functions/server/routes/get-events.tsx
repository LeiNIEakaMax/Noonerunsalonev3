import { Context } from "npm:hono";
import { supabase } from "../lib/supabase.tsx";

export async function getEvents(c: Context) {
  try {
    console.log("✅ Fetching events from running_event table");
    
    const { data, error } = await supabase
      .from('running_event')
      .select('*')
      .ilike('status', 'approved')
      .order('event_date', { ascending: true });

    if (error) {
      console.error("❌ Supabase error:", error);
      return c.json({ 
        error: "Failed to fetch events from database", 
        details: error.message 
      }, 500);
    }

    console.log(`✅ Found ${data?.length || 0} events`);
    return c.json({ events: data || [] });
  } catch (error) {
    console.error("❌ Exception:", error);
    return c.json({ 
      error: "Failed to fetch events", 
      details: String(error) 
    }, 500);
  }
}
