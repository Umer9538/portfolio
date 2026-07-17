"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Recording } from "@/data/site";

const LINE_CLASS: Record<string, string> = {
  pass: "text-term-pass",
  fail: "text-term-fail",
  amber: "text-term-amber",
  prompt: "text-term-prompt",
  muted: "text-term-prompt",
};

/**
 * Recorded, not typed: a deterministic replay of a committed recording.
 * ALL lines are always in the DOM (selectable, crawlable, printable) —
 * the replay only fades them in. Layout height never changes: zero CLS.
 * Plays once at 50% visibility, holds the final frame.
 */
export function TermReplay({
  recording,
  className = "",
}: {
  recording: Recording;
  className?: string;
}) {
  const total = recording.lines.length;
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    if (reduced) {
      setShown(total);
      return;
    }
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, total]);

  useEffect(() => {
    if (!started) return;
    recording.lines.forEach((line, index) => {
      // ~2x recorded speed.
      timers.current.push(setTimeout(() => setShown(index + 1), line.t / 2));
    });
    return () => timers.current.forEach(clearTimeout);
  }, [started, recording]);

  const progress = total === 0 ? 1 : shown / total;

  return (
    <div
      ref={rootRef}
      className={`min-w-0 overflow-hidden rounded-xl border border-term-border bg-term-bg shadow-[0_16px_40px_rgba(27,30,35,0.18)] ${className}`}
    >
      <div className="term-chrome flex items-center gap-3 border-b border-term-border bg-term-chrome px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-term-border" />
          <i className="h-2.5 w-2.5 rounded-full bg-term-border" />
          <i className="h-2.5 w-2.5 rounded-full bg-term-border" />
        </span>
        <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-term-prompt">
          {recording.title}
        </span>
        {/* Scrubber: replay progress where a VCR counter would sit. */}
        <span
          aria-hidden
          className="term-scrubber hidden h-1 w-16 overflow-hidden rounded-full bg-term-border sm:block"
        >
          <i
            className="block h-full bg-term-pass transition-[width] duration-200"
            style={{ width: `${progress * 100}%` }}
          />
        </span>
        <a
          href={recording.verifyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-[11px] text-term-pass hover:underline"
        >
          verify ↗
        </a>
      </div>
      <div className="term-scroll overflow-x-auto px-4 py-3.5">
        <pre className="min-w-max font-mono text-[12.5px] leading-[1.7] sm:text-[13px]">
          {recording.lines.map((line, index) => (
            <div
              key={index}
              className={`term-line whitespace-pre transition-opacity duration-200 ${
                index < shown ? "opacity-100" : "opacity-0"
              } ${LINE_CLASS[line.c ?? ""] ?? "text-term-text"}`}
            >
              {line.text}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
