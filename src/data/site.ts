/**
 * All site content in one place. Every terminal recording below reproduces
 * output published in the projects' own repositories (README demo blocks and
 * committed capture files, which were themselves generated from real runs).
 * Every register entry links to the artifact that backs the claim.
 */

export const LINKS = {
  github: "https://github.com/Umer9538",
  linkedin: "https://www.linkedin.com/in/muhammadumer2521",
  email: "muhammadumer7574@gmail.com",
  underfootSite: "https://umer9538.github.io/underfoot/",
  repos: {
    golden_lens: "https://github.com/Umer9538/golden_lens",
    vouch: "https://github.com/Umer9538/vouch",
    underfoot: "https://github.com/Umer9538/underfoot",
    unswayed: "https://github.com/Umer9538/unswayed",
    unswayedJs: "https://github.com/Umer9538/unswayed-js",
  },
  pub: {
    golden_lens: "https://pub.dev/packages/golden_lens",
    llm_replay_eval: "https://pub.dev/packages/llm_replay_eval",
    redact: "https://pub.dev/packages/redact",
    vouch: "https://pub.dev/packages/vouch",
  },
  npm: { unswayed: "https://www.npmjs.com/package/unswayed" },
} as const;

export type TermLine = {
  /** milliseconds from recording start */
  t: number;
  text: string;
  c?: "pass" | "fail" | "amber" | "prompt" | "muted";
};

export type Recording = {
  title: string;
  verifyHref: string;
  lines: TermLine[];
};

export const RECORDINGS: Record<string, Recording> = {
  unswayedHero: {
    title: "unswayed — recorded on macOS 26.5.1 · fm 1.5.2",
    verifyHref: LINKS.repos.unswayed,
    lines: [
      { t: 0, text: "$ unswayed compare captures/apple-fm-greedy… captures/apple-fm-temp1…", c: "prompt" },
      { t: 220, text: 'unswayed: "unswayed-core" v1 — apple-fm (greedy) → apple-fm (temperature 1.0)' },
      { t: 380, text: "  28 checks compared · 8 equivalent · 1 regressed · 19 undecided" },
      { t: 540, text: "  ✗ REGRESSED one-word-ready · oneWord", c: "fail" },
      { t: 700, text: "      pass rate 100% → 40%  (Δ 95% CI [-0.88, -0.03])", c: "fail" },
      { t: 860, text: '      "Ready." → "Here\'s your reply:\\n\\nReady."' },
      { t: 1020, text: "  ? undecided ×19 — n=5 cannot certify equivalence (Δ CI ±0.43)", c: "amber" },
      { t: 1180, text: "PARITY: FAILED — the model failed parity with itself.", c: "fail" },
    ],
  },
  underfoot: {
    title: "underfoot — drift observatory · live findings",
    verifyHref: LINKS.underfootSite,
    lines: [
      { t: 0, text: "$ underfoot diff 25F80 → 23D8133", c: "prompt" },
      { t: 200, text: "macOS 26.5.1 (fm 1.5.2): 140/140 ok · 100% deterministic", c: "pass" },
      { t: 380, text: "iOS-sim 26.3.1 (fm 1.1.7): availability = .available", c: "pass" },
      { t: 560, text: "  → then ALL 140 generations fail (ModelManagerError 1026)", c: "fail" },
      { t: 740, text: "  [refusalFlip] summary-council: benign city-council summary", c: "fail" },
      { t: 900, text: '      fm 1.5.2 passes 5/5 → fm 1.1.7 refuses: "May contain unsafe content"' },
      { t: 1080, text: "└─ the guardrail layer drifts independently of the model", c: "muted" },
    ],
  },
  vouch: {
    title: "vouch — model-swap regression gate",
    verifyHref: LINKS.pub.vouch,
    lines: [
      { t: 0, text: "$ flutter test  # after swapping the on-device model", c: "prompt" },
      { t: 220, text: 'vouch: "support-bot" vs baseline fake-slm 1 (q4) — REGRESSED', c: "fail" },
      { t: 400, text: "  1 regressed · 1 drifted · 1 stable" },
      { t: 560, text: "  ✗ REGRESSED refund-policy — is valid JSON: PASS → FAIL", c: "fail" },
      { t: 720, text: '      "{"refundDays": 30, …}" → "Sure! Our refund policy lasts 30 days…"' },
      { t: 900, text: "release blocked before users saw it.", c: "muted" },
    ],
  },
  golden_lens: {
    title: "golden_lens — agent-legible golden tests",
    verifyHref: LINKS.pub.golden_lens,
    lines: [
      { t: 0, text: "$ flutter test  # golden mismatch", c: "prompt" },
      { t: 220, text: "golden_lens: parity 96.2% — 1 region changed", c: "amber" },
      { t: 400, text: "  #1 Card (shadow) — lib/widgets/card.dart:42", c: "fail" },
      { t: 560, text: "  report: golden_lens/card.report.json  ← an AI agent can act on this" },
      { t: 720, text: "  the agent fixed line 42; rerun green.", c: "pass" },
    ],
  },
  llm_replay_eval: {
    title: "llm_replay_eval — deterministic record/replay",
    verifyHref: LINKS.pub.llm_replay_eval,
    lines: [
      { t: 0, text: "$ flutter test  # ReplayMode.replay", c: "prompt" },
      { t: 220, text: "cassette: support-bot.cassette.json (sha256 ✓)", c: "pass" },
      { t: 400, text: "  12 prompts replayed byte-identically — zero network, zero flakes" },
      { t: 560, text: "  LlmJudge verdicts replayed from cassette (deterministic CI)", c: "pass" },
      { t: 720, text: "All tests passed — offline.", c: "pass" },
    ],
  },
  redact: {
    title: "redact — on-device PII redaction",
    verifyHref: LINKS.pub.redact,
    lines: [
      { t: 0, text: '$ redactor.redact("Card 4111 1111 1111 1111, ali.raza@example.com")', c: "prompt" },
      { t: 240, text: '→ "Card [CARD_1], [EMAIL_1]"  # sent to the LLM', c: "pass" },
      { t: 440, text: "$ session.restore(llmResponse)", c: "prompt" },
      { t: 640, text: "→ original values restored locally — PII never left the device", c: "pass" },
    ],
  },
  hireEmail: {
    title: "contact",
    verifyHref: "mailto:muhammadumer7574@gmail.com",
    lines: [
      { t: 0, text: "$ open mailto:muhammadumer7574@gmail.com", c: "prompt" },
      { t: 250, text: "→ replies within 24h — remote (any tz overlap) or relocation", c: "pass" },
    ],
  },
};

export type Project = {
  index: string;
  tag: "TEST" | "REPLAY" | "REDACT" | "GATE" | "OBSERVE";
  name: string;
  thesis: string;
  meta: { label: string; href: string }[];
  recording: keyof typeof RECORDINGS;
  exhibits: string[];
  anchor: string;
  twin?: string;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    tag: "TEST",
    name: "golden_lens",
    thesis: "Golden tests that tell AI agents which widget and line broke.",
    meta: [
      { label: "dart · flutter", href: LINKS.pub.golden_lens },
      { label: "pub.dev ↗", href: LINKS.pub.golden_lens },
      { label: "repo ↗", href: LINKS.repos.golden_lens },
    ],
    recording: "golden_lens",
    exhibits: ["e11"],
    anchor: "golden-lens",
  },
  {
    index: "02",
    tag: "REPLAY",
    name: "llm_replay_eval",
    thesis: "The VCR that HTTP tools can't be: deterministic record/replay + evals for in-process, on-device LLMs.",
    meta: [
      { label: "dart · flutter", href: LINKS.pub.llm_replay_eval },
      { label: "pub.dev ↗", href: LINKS.pub.llm_replay_eval },
    ],
    recording: "llm_replay_eval",
    exhibits: ["e8"],
    anchor: "llm-replay-eval",
  },
  {
    index: "03",
    tag: "REDACT",
    name: "redact",
    thesis: "On-device PII redaction around every LLM call. 164 tests, zero dependencies.",
    meta: [
      { label: "pure dart", href: LINKS.pub.redact },
      { label: "pub.dev ↗", href: LINKS.pub.redact },
    ],
    recording: "redact",
    exhibits: ["e6"],
    anchor: "redact",
  },
  {
    index: "04",
    tag: "GATE",
    name: "vouch",
    thesis: "Freeze an eval baseline. Fail CI on silent model-swap regressions. 85 tests.",
    meta: [
      { label: "dart · flutter", href: LINKS.pub.vouch },
      { label: "pub.dev ↗", href: LINKS.pub.vouch },
      { label: "repo ↗", href: LINKS.repos.vouch },
    ],
    recording: "vouch",
    exhibits: ["e7"],
    anchor: "vouch",
  },
  {
    index: "05",
    tag: "OBSERVE",
    name: "underfoot",
    thesis: "A public drift observatory: what Apple's and Google's OS updates silently change in on-device models.",
    meta: [
      { label: "live site ↗", href: LINKS.underfootSite },
      { label: "repo ↗", href: LINKS.repos.underfoot },
    ],
    recording: "underfoot",
    exhibits: ["e5"],
    anchor: "underfoot",
  },
  {
    index: "06",
    tag: "GATE",
    name: "unswayed — Swift",
    thesis: "Statistical parity gate: Wilson/Newcombe intervals, honest UNDECIDED verdicts, certified regressions only.",
    meta: [
      { label: "swift", href: LINKS.repos.unswayed },
      { label: "repo ↗", href: LINKS.repos.unswayed },
    ],
    recording: "unswayedHero",
    exhibits: ["e4", "e9"],
    anchor: "unswayed-swift",
  },
  {
    index: "07",
    tag: "GATE",
    name: "unswayed — npm",
    thesis: "The TypeScript twin: same capture format, second ecosystem — capture in Swift, judge in Node. Reaches React Native on-device models through one Vercel AI SDK adapter.",
    meta: [
      { label: "typescript", href: LINKS.repos.unswayedJs },
      { label: "npm ↗", href: LINKS.npm.unswayed },
      { label: "repo ↗", href: LINKS.repos.unswayedJs },
    ],
    recording: "unswayedHero",
    exhibits: ["e3"],
    anchor: "unswayed-npm",
    twin: "TWIN ⇄ 06",
  },
];

export type RegisterEntry = {
  id: string;
  no: string;
  claim: string;
  artifact: string;
  href: string;
  linkLabel: string;
};

export const REGISTER: RegisterEntry[] = [
  { id: "e1", no: "E1", claim: "~500 tests passing across the seven projects", artifact: "CI runs + test suites per repo", href: LINKS.github, linkLabel: "github.com/Umer9538" },
  { id: "e2", no: "E2", claim: "Seven open-source projects shipped in 2026", artifact: "GitHub profile / pub.dev / npm", href: LINKS.github, linkLabel: "github.com/Umer9538" },
  { id: "e3", no: "E3", claim: "One capture format, two ecosystems — Swift captures judged identically by the npm twin", artifact: "cross-ecosystem test + committed fixtures", href: LINKS.repos.unswayedJs, linkLabel: "unswayed-js: fixtures + engine.test.ts" },
  { id: "e4", no: "E4", claim: "Apple's on-device model failed parity with itself: one-word compliance 100% → 40%, Δ 95% CI [-0.88, -0.03]", artifact: "committed captures (greedy vs temperature 1.0)", href: LINKS.repos.unswayed, linkLabel: "unswayed: captures/" },
  { id: "e5", no: "E5", claim: "Availability API reports .available, then every generation fails (ModelManagerError 1026); guardrail verdicts differ across framework versions", artifact: "live observatory findings + committed captures", href: LINKS.underfootSite, linkLabel: "underfoot observatory" },
  { id: "e6", no: "E6", claim: "redact: 164 tests, zero runtime dependencies", artifact: "test suite + pubspec", href: LINKS.pub.redact, linkLabel: "pub.dev/packages/redact" },
  { id: "e7", no: "E7", claim: "vouch: 85 tests across package + offline example; CI gate on model swaps", artifact: "test suites + CI workflow", href: LINKS.repos.vouch, linkLabel: "vouch repo" },
  { id: "e8", no: "E8", claim: "Deterministic replay of in-process on-device inference (cassettes, sha-256 fingerprints)", artifact: "package + committed example cassette", href: LINKS.pub.llm_replay_eval, linkLabel: "pub.dev/packages/llm_replay_eval" },
  { id: "e9", no: "E9", claim: "Wilson + Newcombe statistics implemented twice (Swift & TypeScript) against shared literature fixtures", artifact: "Stats.swift / stats.ts + matching test values", href: LINKS.repos.unswayed, linkLabel: "unswayed: Sources/ParityCore" },
  { id: "e10", no: "E10", claim: "Adversarial audit rounds with executable probes; dozens of confirmed defects fixed and locked as regression tests", artifact: "commit history: audit-fix commits per repo", href: LINKS.github, linkLabel: "audit commits" },
  { id: "e11", no: "E11", claim: "golden_lens attributes a visual diff to the owning widget and source line", artifact: "attribution engine + report schema", href: LINKS.pub.golden_lens, linkLabel: "pub.dev/packages/golden_lens" },
  { id: "e12", no: "E12", claim: "3+ years shipping production mobile apps (fintech, healthcare/NFC, SaaS)", artifact: "client work & app record", href: LINKS.linkedin, linkLabel: "LinkedIn" },
];

export const METHOD_ROWS = [
  { project: "golden_lens", tests: "36", audits: "1", notes: "z-order attribution engine" },
  { project: "llm_replay_eval", tests: "70", audits: "1", notes: "cassette engine + judge" },
  { project: "redact", tests: "164", audits: "2", notes: "19 confirmed defects fixed in round 2" },
  { project: "vouch", tests: "85", audits: "2", notes: "21 confirmed defects fixed" },
  { project: "underfoot", tests: "17", audits: "1", notes: "+ 2 committed OS-build captures" },
  { project: "unswayed (Swift)", tests: "40", audits: "2", notes: "7 confirmed defects fixed" },
  { project: "unswayed (npm)", tests: "28", audits: "ported", notes: "cross-ecosystem verdict test" },
];

export const EXPERIENCE = [
  {
    period: "2024 — 2026",
    role: "Senior Full-Stack Engineer",
    org: "Vireon Solutions",
    line: "Two investor-acquired products: an AI learning app (LangChain/OpenAI RAG) and a maternity chatbot — full lifecycle, mobile + backend.",
    badge: "Flutter · RN · AI",
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Developer",
    org: "Healthcare / IoT client",
    line: "NFC medical profiles for first responders: offline encrypted wristband data, biometric auth + 2FA, AWS/PostgreSQL backend, RBAC dashboard.",
    badge: "Flutter · native NFC",
  },
  {
    period: "2022 — 2024",
    role: "Lead Flutter Developer",
    org: "Construction SaaS client",
    line: "Construction management platform: live budget tracking, milestone-based Stripe payments, contractor marketplace, multi-role collaboration.",
    badge: "Flutter · Stripe",
  },
  {
    period: "2022 — 2023",
    role: "Mobile Developer",
    org: "Travel client",
    line: "AI travel companion for Saudi Arabia — Gemini-generated itineraries, offline maps, multi-language support.",
    badge: "Flutter · Gemini",
  },
];
