import { Context } from "npm:hono";
import { supabase } from "./supabase.tsx";

export async function subscribeNewsletter(c: Context) {
  try {
    const body = await c.req.json();
    const { email } = body;
    
    if (!email || typeof email !== 'string') {
      return c.json({ error: "Invalid email" }, 400);
    }
    
    console.log(`Subscribing email: ${email}`);
    
    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Try to insert into 'newsletter_subscribers' first, then 'newsletter' if that fails
    // We only insert 'email' to avoid "column does not exist" errors for optional fields
    const tables = ['newsletter_subscribers', 'newsletter'];
    let lastError = null;
    let success = false;

    for (const table of tables) {
      try {
        // Check for existing email first
        const { data: existing } = await supabase
          .from(table)
          .select('id')
          .eq('email', normalizedEmail)
          .maybeSingle();

        if (existing) {
          console.log(`Email already exists in ${table}`);
          success = true;
          break;
        }

        // Insert
        const { error } = await supabase
          .from(table)
          .insert({ email: normalizedEmail });

        if (!error) {
          success = true;
          break;
        }
        
        lastError = error;
        // If error is about the table not existing, try the next table
        if (error.message && error.message.includes('relation') && error.message.includes('does not exist')) {
          continue;
        }
        
        // If it's another error (like column missing), we stop
        console.error(`Error inserting into ${table}:`, error);
        break;

      } catch (err) {
        lastError = err;
        console.error(`Exception accessing ${table}:`, err);
      }
    }

    if (success) {
      console.log("✅ Subscription successful");
      return c.json({ success: true });
    }

    console.error("❌ Subscribe error:", lastError);
    return c.json({ 
      error: "Failed to subscribe", 
      details: lastError?.message || String(lastError) || "Unknown database error" 
    }, 500);

  } catch (error) {
    console.error("❌ Subscribe error:", error);
    return c.json({ error: "Failed to subscribe", details: String(error) }, 500);
  }
}
