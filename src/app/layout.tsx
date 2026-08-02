import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://personalportfolio-main.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Muhammad Umer — Mobile Engineer · On-Device AI Testing & Evals",
  description:
    "Mobile engineer, 5+ years of Flutter, React Native and native apps. Author of seven open-source projects forming the testing & safety layer for on-device AI — ~500 tests, two ecosystems, one capture format. Every claim cited.",
  keywords: [
    "mobile engineer",
    "on-device AI",
    "AI evals",
    "LLM testing",
    "Flutter",
    "React Native",
    "Swift",
    "TypeScript",
  ],
  authors: [{ name: "Muhammad Umer", url: "https://github.com/Umer9538" }],
  openGraph: {
    title: "Muhammad Umer — On-device AI fails quietly. I build the tools that catch it.",
    description:
      "Seven open-source projects, ~500 tests, two ecosystems, one capture format — every number a citation.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muhammad Umer — evidence ledger portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Umer — Mobile Engineer · On-Device AI Testing & Evals",
    description:
      "On-device AI fails quietly. I build the tools that catch it. Seven OSS projects, every claim cited.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fcfcfa",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Muhammad Umer",
      jobTitle: "Mobile Engineer — On-Device AI Testing & Evals",
      email: "mailto:muhammadumer7574@gmail.com",
      url: SITE_URL,
      sameAs: [
        "https://github.com/Umer9538",
        "https://www.linkedin.com/in/muhammadumer2521",
      ],
      knowsAbout: [
        "On-device AI",
        "LLM evaluation",
        "Flutter",
        "React Native",
        "Swift",
        "TypeScript",
        "Statistical testing",
      ],
    },
    ...[
      ["golden_lens", "Dart", "https://pub.dev/packages/golden_lens"],
      ["llm_replay_eval", "Dart", "https://pub.dev/packages/llm_replay_eval"],
      ["redact", "Dart", "https://pub.dev/packages/redact"],
      ["vouch", "Dart", "https://pub.dev/packages/vouch"],
      ["underfoot", "Swift", "https://github.com/Umer9538/underfoot"],
      ["unswayed", "Swift", "https://github.com/Umer9538/unswayed"],
      ["unswayed (npm)", "TypeScript", "https://github.com/Umer9538/unswayed-js"],
    ].map(([name, lang, repo]) => ({
      "@type": "SoftwareSourceCode",
      name,
      programmingLanguage: lang,
      codeRepository: repo,
      author: { "@type": "Person", name: "Muhammad Umer" },
    })),
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jetbrains.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
