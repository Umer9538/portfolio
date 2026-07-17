import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { TermReplay } from "@/components/TermReplay";
import { Reveal, RevealNow, RuleDraw } from "@/components/Reveal";
import { CIWhiskerBar } from "@/components/CIWhiskerBar";
import {
  CLIENT_APPS,
  EXPERIENCE,
  LINKS,
  METHOD_ROWS,
  PROJECTS,
  RECORDINGS,
  REGISTER,
  SKILLS,
} from "@/data/site";

/** Legal-brief exhibit citation — always a real anchor into the register. */
function E({ id }: { id: string }) {
  return (
    <a
      href={`#${id}`}
      className="ml-0.5 rounded px-0.5 align-super font-mono text-[0.625rem] text-verify transition-colors hover:bg-verify/10"
      aria-label={`⟨${id.toUpperCase()}⟩ — view evidence in the register`}
    >
      ⟨{id.toUpperCase()}⟩
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:py-20">
      <RuleDraw />
      <Reveal className="mt-10">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

const TAG_STYLE =
  "rounded border border-rule px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-muted";

export default function Page() {
  return (
    <div id="top">
      <Header />
      <main id="main">
        {/* 01 · COVER */}
        <section className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-20">
          <div className="grid items-start gap-10 lg:grid-cols-[58fr_42fr]">
            <div className="min-w-0">
              <p className="eyebrow mb-5">
                Dossier — Muhammad Umer · Mobile engineering &amp; on-device AI evals · 2026
              </p>
              <h1 className="text-[2.5rem] font-medium leading-[1.08] tracking-[-0.015em] sm:text-6xl">
                On-device AI fails quietly. I&nbsp;build the tools that catch&nbsp;it.
              </h1>
              <p className="prose-measure mt-6 text-[1.0625rem] leading-[1.7] text-muted">
                Muhammad Umer — mobile engineer, 3+ years shipping Flutter, React
                Native, and native apps. In 2026: seven open-source projects
                <E id="e2" /> forming the testing &amp; safety layer for on-device
                models. ~500 tests<E id="e1" />, two ecosystems, one capture
                format<E id="e3" />. Before that: 14 client apps shipped, two acquired by
                investors<E id="e13" /> — and every number on this page is a citation.
              </p>
              <RevealNow delay={0.06} className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ledger"
                  className="rounded-md bg-verify px-5 py-2.5 font-mono text-[13px] font-medium text-white transition-colors hover:bg-verify-hover"
                >
                  View the ledger ↓
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-rule px-5 py-2.5 font-mono text-[13px] text-ink transition-colors hover:border-verify hover:text-verify"
                >
                  GitHub ↗
                </a>
              </RevealNow>
            </div>
            <RevealNow delay={0.1} className="min-w-0">
              <TermReplay recording={RECORDINGS.unswayedHero} />
            </RevealNow>
          </div>
        </section>

        {/* 02 · FINDINGS */}
        <Section id="findings" eyebrow="Section 02 — Findings · 3 confirmed" title="Findings from the field">
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal className="flex flex-col rounded-xl border border-rule p-6">
              <blockquote className="text-xl leading-snug">
                “The availability API says <i>available</i> — then every
                generation fails.”<E id="e5" />
              </blockquote>
              <p className="mt-4 border-t border-rule pt-3 font-mono text-[11px] leading-relaxed text-muted">
                caught by: underfoot drift observatory ·{" "}
                <a className="verify-link" href={LINKS.underfootSite} target="_blank" rel="noopener noreferrer">
                  live site ↗
                </a>
              </p>
            </Reveal>
            <Reveal delay={0.05} className="flex flex-col rounded-xl border border-rule p-6 lg:col-span-2">
              <blockquote className="text-xl leading-snug">
                “Apple&apos;s on-device model failed parity with <i>itself</i> —
                one-word compliance fell 100% → 40% between greedy and
                temperature&nbsp;1.0.”<E id="e4" />
              </blockquote>
              <CIWhiskerBar />
              <p className="mt-4 border-t border-rule pt-3 font-mono text-[11px] leading-relaxed text-muted">
                caught by: unswayed · Wilson/Newcombe intervals ·{" "}
                <a className="verify-link" href={LINKS.repos.unswayed} target="_blank" rel="noopener noreferrer">
                  verify ↗
                </a>
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col rounded-xl border border-rule p-6 lg:col-span-3">
              <blockquote className="text-xl leading-snug">
                “A model swap nobody announced, failing CI before it failed
                users.”<E id="e7" />
              </blockquote>
              <p className="mt-4 border-t border-rule pt-3 font-mono text-[11px] text-muted">
                caught by: vouch frozen baseline · 85 tests ·{" "}
                <a className="verify-link" href={LINKS.pub.vouch} target="_blank" rel="noopener noreferrer">
                  pub.dev ↗
                </a>
              </p>
            </Reveal>
          </div>
        </Section>

        {/* 03 · LEDGER */}
        <Section id="ledger" eyebrow="Section 03 — The ledger · 07 shipped 2026" title="The ledger: seven tools, one layer">
          <div className="mt-10">
            {PROJECTS.map((project) => (
              <Reveal key={project.index}>
                <article id={project.anchor} className="scroll-mt-24 border-b border-rule py-8 first:border-t">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    <span className="font-mono text-[13px] text-muted">{project.index}</span>
                    <span className={TAG_STYLE}>{project.tag}</span>
                    {project.twin && <span className={`${TAG_STYLE} text-verify`}>{project.twin}</span>}
                    <h3 className="text-[1.375rem] font-medium tracking-tight">{project.name}</h3>
                  </div>
                  <p className="prose-measure mt-2 text-[1.0625rem] leading-[1.7] text-muted">
                    {project.thesis}
                    {project.exhibits.map((id) => (
                      <E key={id} id={id} />
                    ))}
                  </p>
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-muted">
                    {project.meta.map((meta) => (
                      <a
                        key={meta.label}
                        className="verify-link"
                        href={meta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {meta.label}
                      </a>
                    ))}
                  </p>
                  {project.index !== "06" && project.index !== "07" && (
                    <div className="mt-5 max-w-2xl">
                      <TermReplay recording={RECORDINGS[project.recording]} />
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 04 · ARCHITECTURE */}
        <Section id="architecture" eyebrow="Section 04 — Architecture" title="One capture format, two ecosystems">
          <Reveal className="mt-8 max-w-3xl">
            <p className="prose-measure text-[1.0625rem] leading-[1.7] text-muted">
              The Swift and npm gates read and write the same capture file —
              record on one platform, verify on the other.<E id="e3" /> The npm
              package&apos;s test suite judges captures recorded by the Swift CLI
              and locks the identical verdict, down to the interval bounds.
            </p>
            <div className="term-scroll mt-6 overflow-x-auto rounded-xl border border-term-border bg-term-bg px-5 py-4 font-mono text-[13px] leading-[1.8] text-term-text">
              <div>
                <span className="text-term-pass">Swift (unswayed)</span>
                <span className="text-term-prompt"> ⇄ </span>
                <span className="text-term-amber">capture.json</span>
                <span className="text-term-prompt"> ⇄ </span>
                <span className="text-term-pass">npm (unswayed)</span>
              </div>
              <div className="mt-2 text-term-prompt">
                {"{"} &quot;tool&quot;: &quot;unswayed&quot;, &quot;suiteSha256&quot;: &quot;3fd1…&quot;,
              </div>
              <div className="text-term-prompt">
                &nbsp;&nbsp;&quot;provider&quot;: {"{"} &quot;id&quot;: &quot;apple-fm&quot; {"}"}, &quot;results&quot;: […] {"}"}
              </div>
            </div>
          </Reveal>
        </Section>

        {/* 05 · METHOD */}
        <Section id="method" eyebrow="Section 05 — Method · ~500 tests passing" title="Method: how the numbers were audited">
          <Reveal className="mt-8">
            <p className="prose-measure text-[1.0625rem] leading-[1.7] text-muted">
              I attack my own code before you have to. Each project went through
              adversarial audit rounds — independent probes written against the
              implementation, every confirmed defect fixed and locked as a
              regression test.<E id="e10" />
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse font-mono text-[13px]">
                <thead>
                  <tr className="border-b border-rule text-left text-[11px] uppercase tracking-wider text-muted">
                    <th className="py-2.5 pr-4 font-medium">Project</th>
                    <th className="py-2.5 pr-4 font-medium">Tests</th>
                    <th className="py-2.5 pr-4 font-medium">Audit rounds</th>
                    <th className="py-2.5 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {METHOD_ROWS.map((row) => (
                    <tr key={row.project} className="border-b border-rule transition-colors hover:bg-rule/30">
                      <td className="py-2.5 pr-4">{row.project}</td>
                      <td className="py-2.5 pr-4">{row.tests}</td>
                      <td className="py-2.5 pr-4">{row.audits}</td>
                      <td className="py-2.5 text-muted">{row.notes}</td>
                    </tr>
                  ))}
                  <tr className="text-verify">
                    <td className="py-2.5 pr-4">aggregate</td>
                    <td className="py-2.5 pr-4">~500</td>
                    <td className="py-2.5 pr-4">9</td>
                    <td className="py-2.5">dozens of confirmed defects fixed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>

        {/* 06 · PRIOR RECORD */}
        <Section id="record" eyebrow="Section 06 — Prior record · 2022–2026" title="Prior record: 3+ years shipping">
          <div className="mt-8">
            {EXPERIENCE.map((item) => (
              <Reveal key={item.line}>
                <article className="grid gap-2 border-b border-rule py-6 first:border-t sm:grid-cols-[140px_1fr]">
                  <p className="font-mono text-[12px] text-muted">{item.period}</p>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-medium">{item.role}</h3>
                      <span className="text-muted">· {item.org} — {item.loc}</span>
                      <span className={TAG_STYLE}>{item.badge}</span>
                    </div>
                    <p className="prose-measure mt-1.5 leading-[1.7] text-muted">{item.line}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal>
              <p className="mt-5 font-mono text-[12px] text-muted">
                FAST NUCES — Dean&apos;s List (top 10%) · Teaching assistant, 600+ students · FCAP Club admin head, 100+ members<E id="e12" />
              </p>
            </Reveal>
          </div>
        </Section>


        {/* 07 · SHIPPED APPS */}
        <Section id="apps" eyebrow="Section 07 — Shipped apps · 14 delivered · 2 acquired" title="Shipped apps, 2022–2026">
          <Reveal className="mt-6">
            <p className="prose-measure text-[1.0625rem] leading-[1.7] text-muted">
              The client record behind the research: fourteen production apps
              across healthcare, fintech, construction, travel, legal, and
              education — two of them acquired by investors.<E id="e13" /> Tap
              any row for the full brief.
            </p>
          </Reveal>
          <div className="mt-8">
            {CLIENT_APPS.map((app) => (
              <Reveal key={app.name}>
                <details className="group border-b border-rule first:border-t">
                  <summary className="flex min-h-[44px] cursor-pointer list-none flex-wrap items-baseline gap-x-3 gap-y-1 py-4 transition-colors hover:bg-rule/30 [&::-webkit-details-marker]:hidden">
                    <span className="font-mono text-[12px] text-muted">{app.year}</span>
                    <h3 className="text-lg font-medium">{app.name}</h3>
                    {app.acquired && (
                      <span className="rounded bg-verify px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wider text-white">
                        ACQUIRED
                      </span>
                    )}
                    <span className={TAG_STYLE}>{app.cat}</span>
                    <span className="hidden font-mono text-[11px] text-muted sm:inline">{app.role}</span>
                    <span className="ml-auto font-mono text-[12px] text-muted transition-transform group-open:rotate-90">›</span>
                    <span className="w-full text-[15px] leading-relaxed text-muted sm:w-auto sm:flex-1 sm:basis-full">
                      {app.desc}
                    </span>
                  </summary>
                  <div className="grid gap-6 pb-6 pt-1 sm:grid-cols-[1.5fr_1fr]">
                    <div>
                      <p className="prose-measure leading-[1.7] text-muted">{app.full}</p>
                      <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                        {app.features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-[14px] leading-relaxed text-muted">
                            <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-verify" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="flex flex-wrap gap-1.5">
                        {app.tech.map((tech) => (
                          <span key={tech} className={TAG_STYLE}>{tech}</span>
                        ))}
                      </p>
                      {app.github && (
                        <p className="mt-4">
                          <a className="verify-link font-mono text-[12px]" href={app.github} target="_blank" rel="noopener noreferrer">
                            repo ↗
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 08 · CAPABILITIES */}
        <Section id="skills" eyebrow="Section 08 — Capabilities" title="The stack, in full">
          <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((group) => (
              <Reveal key={group.group}>
                <h3 className="eyebrow mb-2.5">{group.group}</h3>
                <p className="flex flex-wrap gap-1.5">
                  {group.tags.map((tag) => (
                    <span key={tag} className={TAG_STYLE}>{tag}</span>
                  ))}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 09 · HIRE */}
        <Section id="contact" eyebrow="Section 09 — Contact" title="Let\u2019s work together">
          <Reveal className="mt-8 max-w-2xl">
            <p className="prose-measure text-[1.0625rem] leading-[1.7] text-muted">
              I take on mobile app development end to end — Flutter, React
              Native, and native iOS/Android — plus full-stack web and AI
              features. Fourteen shipped client apps say I deliver; if your
              team is building on-device AI or evals infrastructure, that is
              my specialty on top. Either way, I work the way this page
              reads: claims first, evidence attached.
            </p>
            <p className="mt-4 font-mono text-[12px] text-ink">
              working remotely, worldwide · based in Lahore, Pakistan
            </p>
            <div className="mt-6">
              <TermReplay recording={RECORDINGS.hireEmail} />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={`mailto:${LINKS.email}`}
                className="rounded-md bg-verify px-5 py-2.5 font-mono text-[13px] font-medium text-white transition-colors hover:bg-verify-hover"
              >
                Email Umer
              </a>
              <a
                href="/Muhammad-Umer-CV.pdf"
                download
                className="rounded-md border border-rule px-5 py-2.5 font-mono text-[13px] text-ink transition-colors hover:border-verify hover:text-verify"
              >
                Download CV ↓
              </a>
            </div>
            <div className="no-print mt-6">
              <ContactForm />
            </div>
            <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px]">
              <a className="verify-link" href={LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a className="verify-link" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a className="verify-link" href={LINKS.underfootSite} target="_blank" rel="noopener noreferrer">
                The observatory ↗
              </a>
            </p>
          </Reveal>
        </Section>

        {/* 08 · REGISTER */}
        <Section id="register" eyebrow="Appendix A — Evidence register · 13 entries" title="Appendix A — Evidence register">
          <Reveal className="mt-6">
            <p className="text-xl italic">
              Every claim above is numbered. Every number below is a link.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse font-mono text-[12.5px]">
                <thead>
                  <tr className="border-b border-rule text-left text-[11px] uppercase tracking-wider text-muted">
                    <th className="py-2.5 pr-4 font-medium">№</th>
                    <th className="py-2.5 pr-4 font-medium">Claim</th>
                    <th className="py-2.5 pr-4 font-medium">Artifact</th>
                    <th className="py-2.5 font-medium">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {REGISTER.map((entry) => (
                    <tr
                      key={entry.id}
                      id={entry.id}
                      className="register-row scroll-mt-28 border-b border-rule align-top"
                    >
                      <td className="py-3 pr-4 text-verify">{entry.no}</td>
                      <td className="max-w-md py-3 pr-4 leading-relaxed">{entry.claim}</td>
                      <td className="py-3 pr-4 leading-relaxed text-muted">{entry.artifact}</td>
                      <td className="py-3 leading-relaxed">
                        <a
                          className="verify-link"
                          href={entry.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {entry.linkLabel}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>

        {/* 09 · COLOPHON */}
        <footer className="mx-auto max-w-5xl px-5 pb-14 pt-4">
          <RuleDraw />
          <p className="mt-8 flex flex-wrap gap-x-5 font-mono text-[11px]">
            {[
              { label: "golden_lens", href: LINKS.pub.golden_lens },
              { label: "llm_replay_eval", href: LINKS.pub.llm_replay_eval },
              { label: "redact", href: LINKS.pub.redact },
              { label: "vouch", href: LINKS.pub.vouch },
              { label: "underfoot", href: LINKS.underfootSite },
              { label: "unswayed·swift", href: LINKS.repos.unswayed },
              { label: "unswayed·npm", href: LINKS.npm.unswayed },
            ].map((item) => (
              <a key={item.label} className="verify-link inline-block py-1.5" href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </p>
          <p className="mt-5 font-mono text-[11px] leading-[1.9] text-muted">
            Set in Newsreader &amp; SF Mono. Built with Next.js + Tailwind. No
            analytics. Every terminal on this page replays output published in
            the projects&apos; own repositories — sources linked in Appendix A.
            <br />© 2026 Muhammad Umer · {LINKS.email}
          </p>
        </footer>
      </main>
    </div>
  );
}
