import { Context } from "npm:hono";
import { supabase } from "../lib/supabase.tsx";

export async function updateEvent(c: Context) {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    console.log(`Updating event ${id}`);

    const updateData: any = {};
    if (body.eventTitle !== undefined) updateData.event_title = body.eventTitle;
    if (body.eventDate !== undefined) updateData.event_date = body.eventDate;
    if (body.eventDescription !== undefined) updateData.description = body.eventDescription;
    if (body.type !== undefined) updateData.event_type = String(body.type).toLowerCase();
    if (body.link !== undefined) updateData.event_link = body.link;
    if (body.organizerId !== undefined) updateData.organizer_id = body.organizerId;

    const { data, error } = await supabase
      .from('running_event')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) {
      console.error("❌ Update error:", error);
      return c.json({ error: "Failed to update event", details: error.message }, 500);
    }

    console.log("✅ Event updated");
    return c.json({ event: data?.[0] });
  } catch (error) {
    console.error("❌ Exception:", error);
    return c.json({ error: "Failed to update event", details: String(error) }, 500);
  }
}
