import { Context } from "npm:hono";
import { supabase } from "../lib/supabase.tsx";

export async function deleteEvent(c: Context) {
  try {
    const id = c.req.param('id');
    console.log(`Deleting event ${id}`);

    const { error } = await supabase
      .from('running_event')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("❌ Delete error:", error);
      return c.json({ error: "Failed to delete event", details: error.message }, 500);
    }

    console.log("✅ Event deleted");
    return c.json({ success: true });
  } catch (error) {
    console.error("❌ Exception:", error);
    return c.json({ error: "Failed to delete event", details: String(error) }, 500);
  }
}
