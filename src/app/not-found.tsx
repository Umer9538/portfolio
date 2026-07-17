import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-start justify-center px-5">
      <p className="eyebrow mb-3">404 — Exhibit not found</p>
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
        This page isn&apos;t in the register.
      </h1>
      <p className="prose-measure mt-4 text-[1.0625rem] leading-[1.7] text-muted">
        Every claim on this site is numbered and linked — but whatever you
        followed to get here isn&apos;t one of them.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-verify px-5 py-2.5 font-mono text-[13px] font-medium text-white transition-colors hover:bg-verify-hover"
      >
        Return to the dossier
      </Link>
    </main>
  );
}
