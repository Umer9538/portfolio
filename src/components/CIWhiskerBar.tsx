"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A drawn confidence-interval whisker for the parity finding: baseline tick
 * at 0, whiskers expanding to [lo, hi], point estimate dot. The whole
 * interval sits below zero — that is the certification, drawn.
 */
export function CIWhiskerBar({
  lo = -0.88,
  hi = -0.03,
  point = -0.6,
}: {
  lo?: number;
  hi?: number;
  point?: number;
}) {
  const reduced = useReducedMotion();
  // Map [-1, +0.25] to [0, 100] viewBox units.
  const x = (v: number) => ((v + 1) / 1.25) * 100;

  return (
    <figure className="mt-4">
      <div className="rounded-lg border border-term-border bg-term-bg px-4 py-3">
        <svg viewBox="0 0 100 26" className="block w-full" role="img" aria-label={`Confidence interval from ${lo} to ${hi}, entirely below zero`}>
          {/* axis */}
          <line x1="0" y1="18" x2="100" y2="18" stroke="#30363d" strokeWidth="0.5" />
          {[-1, -0.75, -0.5, -0.25, 0, 0.25].map((tick) => (
            <g key={tick}>
              <line x1={x(tick)} y1="16.5" x2={x(tick)} y2="19.5" stroke="#30363d" strokeWidth="0.5" />
              <text x={x(tick)} y="24.5" textAnchor="middle" fontSize="3.2" fill="#7d8590" fontFamily="ui-monospace, SF Mono, monospace">
                {tick === 0 ? "0" : tick.toFixed(2)}
              </text>
            </g>
          ))}
          {/* zero line — parity */}
          <line x1={x(0)} y1="3" x2={x(0)} y2="18" stroke="#7d8590" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
          <text x={x(0) + 1.5} y="5.5" fontSize="3.2" fill="#7d8590" fontFamily="ui-monospace, SF Mono, monospace">
            parity
          </text>
          {/* whisker */}
          <motion.g
            initial={reduced ? undefined : { scaleX: 0 }}
            whileInView={reduced ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            style={{ transformOrigin: `${x(point)}px 10px` }}
          >
            <line x1={x(lo)} y1="10" x2={x(hi)} y2="10" stroke="#f85149" strokeWidth="1.4" />
            <line x1={x(lo)} y1="7" x2={x(lo)} y2="13" stroke="#f85149" strokeWidth="1.4" />
            <line x1={x(hi)} y1="7" x2={x(hi)} y2="13" stroke="#f85149" strokeWidth="1.4" />
          </motion.g>
          <circle cx={x(point)} cy="10" r="1.6" fill="#f85149" />
        </svg>
        <figcaption className="mt-1 flex items-center justify-between font-mono text-[11px] text-term-prompt">
          <span>Δ pass rate, 95% CI [{lo.toFixed(2)}, {hi.toFixed(2)}] — entirely below parity</span>
          <span className="rounded border border-term-fail px-1.5 py-0.5 text-term-fail">FAIL</span>
        </figcaption>
      </div>
    </figure>
  );
}
