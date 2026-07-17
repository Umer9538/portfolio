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
      { t: 250, text: "→ replies within 24h", c: "pass" },
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
  { id: "e13", no: "E13", claim: "14 client apps shipped 2022–2026; the AI learning platform and maternity-care bot were acquired by investors (built at DriftMeta)", artifact: "app briefs in Section 07 + work history", href: LINKS.linkedin, linkLabel: "LinkedIn" },
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
    period: "2025 — present",
    role: "Senior Mobile App Developer",
    org: "Infinitiv.AI",
    loc: "Lahore",
    line: "Production mobile apps with Flutter, React Native, and native modules — BLE, WebSocket, speech-to-text — deployed on AWS with Docker.",
    badge: "Flutter · RN · AWS · BLE",
  },
  {
    period: "2025 — 2026",
    role: "App Developer",
    org: "DriftMeta",
    loc: "Remote",
    line: "Built two investor-acquired products end to end: an AI learning platform (LangChain/OpenAI, live WebRTC classrooms, AI code evaluation) and a maternity-care AI chatbot.",
    badge: "Flutter · LangChain · OpenAI",
  },
  {
    period: "2024 — 2025",
    role: "Senior Full Stack Engineer",
    org: "Vireon Solutions",
    loc: "Islamabad",
    line: "AI-driven apps with TensorFlow, PyTorch and LangChain — NLP, speech recognition, and RAG architectures in production.",
    badge: "TensorFlow · PyTorch · RAG",
  },
  {
    period: "2023 — 2024",
    role: "Associate Full Stack Engineer",
    org: "Vireon Solutions",
    loc: "Islamabad",
    line: "Web and mobile apps with Flutter, React Native and React.js — AI integration and performance optimization.",
    badge: "Flutter · RN · React.js",
  },
];

export type ClientApp = {
  year: string;
  name: string;
  cat: string;
  role: string;
  desc: string;
  full: string;
  features: string[];
  tech: string[];
  github?: string;
  acquired?: boolean;
};

export const CLIENT_APPS: ClientApp[] = [
  { year: "2025", name: "First Air Tag", cat: "Healthcare / IoT", role: "Full Stack Developer", desc: "NFC medical profiles for first responders — offline encrypted data via wristbands.", full: "A life-saving NFC platform storing encrypted health profiles on wristbands. First responders tap devices to access allergies, blood type, and medications — offline, without internet. HIPAA-compliant with QR fallback.", features: ["NFC read/write with encrypted medical data", "Offline-first emergency architecture", "Admin dashboard (Next.js) with RBAC", "Biometric auth + 2FA + JWT sessions", "AWS EC2 backend with PostgreSQL", "QR code fallback for non-NFC devices"], tech: ["React Native", "Next.js", "PostgreSQL", "NFC", "AWS"], github: "https://github.com/Umer9538/NFCAPP" },
  { year: "2024", name: "AI Learning Platform", cat: "EdTech / AI", role: "Full Stack Developer", desc: "AI courseware with real-time coding evaluation.", full: "AI education platform adapting to each student: real-time code evaluation, live video classrooms, gamification. Acquired after strong beta engagement.", features: ["Adaptive learning paths", "AI code evaluation", "Live WebRTC classrooms", "Progress analytics", "Auto quiz generation", "Gamified leaderboards"], tech: ["Flutter", "LangChain", "OpenAI", "WebRTC"], acquired: true },
  { year: "2024", name: "Maternity Care Bot", cat: "Healthcare / AI", role: "Full Stack Developer", desc: "AI medical assistant for expecting mothers.", full: "AI chatbot for pregnant mothers — health advice, symptom tracking, appointments, and community, built for an emerging-market healthcare gap.", features: ["Maternal health AI chatbot", "Pregnancy milestone tracking", "Symptom severity alerts", "Doctor appointments", "Meal planning", "Community forum"], tech: ["Flutter", "Node.js", "Firebase"], acquired: true },
  { year: "2024", name: "BuildBuddy", cat: "Construction / SaaS", role: "Lead Flutter Developer", desc: "Construction management with live budgets, Stripe payments, and multi-role collaboration.", full: "All-in-one construction app for homeowners and contractors: budgets, milestones, a contractor marketplace, and Stripe payments with role-based dashboards.", features: ["Real-time budget tracking", "Contractor marketplace", "Milestone-based Stripe payments", "Photo progress docs", "Google Maps integration", "Push notification alerts"], tech: ["Flutter", "Firebase", "Stripe", "Maps"], github: "https://github.com/Umer9538/budgetBot" },
  { year: "2024", name: "Mershad", cat: "Travel / AI", role: "Mobile Developer", desc: "AI travel companion for Saudi Arabia — Gemini itineraries and offline maps.", full: "Intelligent travel companion for Saudi Arabia using Gemini 1.5 Flash: personalized itineraries, hotel booking, an AI chatbot, and offline navigation across 5 cities.", features: ["Gemini AI itineraries", "Hotel & experience booking", "Offline maps with navigation", "Multi-language support", "Emergency SOS", "Cultural recommendations"], tech: ["Flutter", "Gemini API", "Google Maps"] },
  { year: "2024", name: "CloudKey", cat: "Hospitality", role: "Backend Developer", desc: "Hotel management with NFC digital keys and multi-language support.", full: "Cloud hotel management replacing physical keys with NFC/barcode digital keys — automated check-in, reservation management, Docker deployment.", features: ["NFC/barcode digital keys", "Reservation management", "Multi-factor auth", "Multi-language support", "Payment processing", "Docker deployment"], tech: ["Cloud", "NFC", "Docker", "REST APIs"], github: "https://github.com/Umer9538/CloudKey" },
  { year: "2024", name: "ServiceMate", cat: "SaaS", role: "Full Stack Developer", desc: "White-label booking SaaS for salons, clinics, and studios.", full: "White-label booking SaaS: custom booking pages, automated reminders, payments, and CRM.", features: ["Custom booking pages", "Automated reminders", "Staff scheduling", "Invoicing", "CRM with history", "Revenue analytics"], tech: ["TypeScript", "Next.js", "SaaS"], github: "https://github.com/Umer9538/ServiceMate" },
  { year: "2024", name: "GroceryMate", cat: "Lifestyle", role: "Flutter Developer", desc: "Smart grocery list with barcode scanning and family sharing.", full: "Scan barcodes, compare prices, share lists with family in real time, with AI suggestions from purchase history.", features: ["Barcode scanning", "Family list sharing", "Price comparison", "Spending analytics", "Smart suggestions", "Aisle categorization"], tech: ["Flutter", "Firebase", "Barcode API"] },
  { year: "2023", name: "SecurePay", cat: "FinTech", role: "Mobile Developer", desc: "Encrypted payments with Stripe and biometric auth.", full: "Secure payment app with end-to-end encryption, spending analytics, Stripe integration, budgets, and biometric login.", features: ["E2E encrypted payments", "Stripe integration", "Category analytics", "Budget alerts", "CSV/PDF export", "Biometric auth"], tech: ["Flutter", "Firebase", "Stripe"] },
  { year: "2023", name: "HealthSync", cat: "Healthcare", role: "Flutter Developer", desc: "Health tracker with AI insights and telemedicine.", full: "Health management combining fitness tracking, medication management, and telemedicine with AI analysis.", features: ["AI fitness insights", "Medication tracking", "Video telemedicine", "Health dashboard", "Wearable integration", "Shareable reports"], tech: ["Flutter", "AI", "Firebase"] },
  { year: "2023", name: "AI Chatbot", cat: "AI", role: "Mobile Developer", desc: "GPT-powered assistant with specialized modes.", full: "GPT-powered chatbot with multi-turn conversations; code, writing, and research modes; customizable personality; export.", features: ["Multi-turn dialogue", "Code/writing/research modes", "History search", "Custom personality", "Syntax highlighting", "PDF export"], tech: ["Flutter", "OpenAI API", "NLP"] },
  { year: "2023", name: "Insaf", cat: "LegalTech", role: "React Native Developer", desc: "Legal platform connecting citizens with lawyers in Pakistan.", full: "Legal tech connecting citizens and lawyers: find lawyers, book consultations, track cases.", features: ["Lawyer directory", "Consultation booking", "Case tracking", "Secure messaging", "Legal resources", "Rating system"], tech: ["TypeScript", "React Native"], github: "https://github.com/Umer9538/insaf" },
  { year: "2023", name: "CJE", cat: "EdTech", role: "Flutter Developer", desc: "School community platform for parents and teachers.", full: "School community platform — announcements, events, attendance, grades, and parent-teacher messaging.", features: ["Real-time announcements", "Event RSVP", "Attendance tracking", "Grade portal", "Messaging system", "Fee management"], tech: ["Flutter", "Firebase"], github: "https://github.com/Umer9538/CJE" },
  { year: "2022", name: "Mundial Manager", cat: "Sports", role: "Flutter Developer", desc: "FIFA World Cup fantasy game with live scores.", full: "World Cup fantasy — build teams, compete on leaderboards, live scores, dynamic scoring, player trading.", features: ["Fantasy team building", "Live scores & stats", "Global leaderboards", "Dynamic scoring", "Player trading", "Goal notifications"], tech: ["Flutter", "REST APIs"], github: "https://github.com/Umer9538/Mundial-Manager" },
];

export const SKILLS = [
  { group: "Mobile", tags: ["Flutter", "React Native", "Kotlin", "Swift", "Java", "Dart", "Expo"] },
  { group: "Frontend", tags: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Zustand", "GSAP", "Framer Motion"] },
  { group: "Backend", tags: ["Node.js", "Express", "FastAPI", "Django", "Laravel", "GraphQL", "REST APIs", "Socket.io", "Prisma"] },
  { group: "AI / ML", tags: ["LangChain", "OpenAI", "Gemini", "TensorFlow", "PyTorch", "RAG", "FAISS", "ChromaDB", "NLP", "Hugging Face"] },
  { group: "Database", tags: ["PostgreSQL", "Firebase", "MongoDB", "MySQL", "Redis", "SQLite", "Supabase", "DynamoDB"] },
  { group: "Cloud / DevOps", tags: ["AWS EC2", "AWS S3", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel", "Nginx", "Linux"] },
];
