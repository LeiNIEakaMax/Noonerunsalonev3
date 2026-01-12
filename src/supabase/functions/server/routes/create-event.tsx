import { Context } from "npm:hono";
import { supabase } from "../lib/supabase.tsx";

export async function createEvent(c: Context) {
  try {
    const body = await c.req.json();
    console.log("Creating event:", body);

    const { data, error } = await supabase
      .from('running_event')
      .insert([{
        event_title: body.eventTitle,
        event_date: body.eventDate,
        description: body.eventDescription,
        event_type: String(body.type).toLowerCase(),
        event_link: body.link,
        organizer_id: body.organizerId,
        status: 'pending',
      }])
      .select();

    if (error) {
      console.error("❌ Create error:", error);
      return c.json({ error: "Failed to create event", details: error.message }, 500);
    }

    console.log("✅ Event created");
    return c.json({ event: data?.[0] }, 201);
  } catch (error) {
    console.error("❌ Exception:", error);
    return c.json({ error: "Failed to create event", details: String(error) }, 500);
  }
}
