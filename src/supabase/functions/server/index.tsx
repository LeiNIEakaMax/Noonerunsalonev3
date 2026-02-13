import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { getEvents } from "./get-events.tsx";
import { createEvent } from "./create-event.tsx";
import { updateEvent } from "./update-event.tsx";
import { deleteEvent } from "./delete-event.tsx";
import { subscribeNewsletter } from "./subscribe-newsletter.tsx";

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

// Event routes
app.get("/make-server-8ddba6eb/events", getEvents);
app.post("/make-server-8ddba6eb/events", createEvent);
app.put("/make-server-8ddba6eb/events/:id", updateEvent);
app.delete("/make-server-8ddba6eb/events/:id", deleteEvent);
app.post("/make-server-8ddba6eb/newsletter", subscribeNewsletter);

// Health check endpoint
app.get("/make-server-8ddba6eb/health", (c) => {
  return c.json({ status: "ok", version: "3.0" });
});

Deno.serve(app.fetch);
