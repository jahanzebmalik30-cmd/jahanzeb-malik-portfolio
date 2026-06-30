import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jahanzebmalik.example.com"),
  title: {
    default: "Jahanzeb Malik | Principal, Educationist & Islamic Studies Researcher",
    template: "%s | Jahanzeb Malik",
  },
  description:
    "Professional portfolio of Jahanzeb Malik, Principal & Educationist, Islamic Studies Researcher, curriculum developer and teacher trainer.",
  keywords: [
    "Jahanzeb Malik",
    "Principal",
    "Educationist",
    "Islamic Studies Researcher",
    "Al-Naseeha High School",
    "Teacher Training",
    "Curriculum Development",
  ],
  authors: [{ name: "Jahanzeb Malik" }],
  creator: "Jahanzeb Malik",
  openGraph: {
    title: "Jahanzeb Malik | Principal, Educationist & Islamic Studies Researcher",
    description:
      "Education leadership, Islamic research, curriculum development and teacher training portfolio.",
    url: "https://jahanzebmalik.example.com",
    siteName: "Jahanzeb Malik Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jahanzeb Malik professional portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahanzeb Malik | Professional Portfolio",
    description:
      "Principal, Educationist and Islamic Studies Researcher.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1736",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
