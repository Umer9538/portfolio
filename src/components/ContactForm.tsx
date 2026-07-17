"use client";

import { useState } from "react";

const FIELD =
  "w-full rounded-md border border-rule bg-white px-3.5 py-2.5 font-mono text-[13px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-verify";

/** Formspree-backed form: works on machines with no mail client configured. */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mbdzaelp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-md border border-verify/40 bg-verify/5 px-4 py-3 font-mono text-[13px] text-verify">
        ✓ Message delivered — expect a reply within 24h.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      <label className="sr-only" htmlFor="cf-name">
        Name
      </label>
      <input id="cf-name" name="name" required placeholder="Your name" className={FIELD} />
      <label className="sr-only" htmlFor="cf-email">
        Email
      </label>
      <input
        id="cf-email"
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className={FIELD}
      />
      <label className="sr-only" htmlFor="cf-message">
        Message
      </label>
      <textarea
        id="cf-message"
        name="message"
        required
        rows={4}
        placeholder="Role, project, or question…"
        className={`${FIELD} sm:col-span-2`}
      />
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-verify px-5 py-2.5 font-mono text-[13px] font-medium text-white transition-colors hover:bg-verify-hover disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <span className="ml-4 font-mono text-[12px] text-undecided">
            Delivery failed — email me directly instead.
          </span>
        )}
      </div>
    </form>
  );
}
