import { Context } from "npm:hono";
import { supabase } from "./supabase.tsx";

export async function getEvents(c: Context) {
  try {
    // Log start of request
    console.log("✅ Fetching events from running_event_with_city view");
    
    const { data, error } = await supabase
      .from('running_event_with_city')
      .select('*')
      .ilike('Status', 'approved')
      .order('Event Date', { ascending: true });

    if (error) {
      console.error("❌ Supabase error:", error);
      return c.json({ 
        error: "Failed to fetch events from database", 
        details: error.message 
      }, 500);
    }

    console.log(`✅ Found ${data?.length || 0} events`);
    console.log('Sample event with city:', JSON.stringify(data?.[0], null, 2));
    return c.json({ events: data || [] });
  } catch (error) {
    console.error("❌ Exception:", error);
    return c.json({ 
      error: "Failed to fetch events", 
      details: String(error) 
    }, 500);
  }
}
