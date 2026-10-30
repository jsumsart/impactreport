import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The College of Culture | JSU College of Liberal Arts",
  description: "Explore the 2023–2026 impact of Jackson State University’s College of Liberal Arts across scholarship, creativity, leadership and public purpose.",
  openGraph: {
    title: "The College of Culture",
    description: "Explore the 2023–2026 impact of JSU’s College of Liberal Arts.",
    images: [{ url: "/og.png", width: 1736, height: 910, alt: "The College of Culture - Impact Report 2023–2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The College of Culture",
    description: "Explore the 2023–2026 impact of JSU’s College of Liberal Arts.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
