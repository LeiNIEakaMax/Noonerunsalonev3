import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { getEvents } from "./routes/get-events.tsx";
import { createEvent } from "./routes/create-event.tsx";
import { updateEvent } from "./routes/update-event.tsx";
import { deleteEvent } from "./routes/delete-event.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-36165629/health", (c) => {
  return c.json({ status: "ok", version: "3.0" });
});

// Event routes
app.get("/make-server-36165629/events", getEvents);
app.post("/make-server-36165629/events", createEvent);
app.put("/make-server-36165629/events/:id", updateEvent);
app.delete("/make-server-36165629/events/:id", deleteEvent);

Deno.serve(app.fetch);
