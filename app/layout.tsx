import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-providers";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "StackMint Studio",
  description:
    "Your AI-powered web development MVP agency. We build high-converting landing pages, create product-ready MVPs, and provide mobile app development services.",
  keywords: [
    "web development",
    "AI",
    "MVP",
    "agency",
    "StackMint Studio",
    "landing pages",
    "mobile development",
    "mobile app",
  ],
  authors: [{ name: "StackMint Studio" }],
  openGraph: {
    title: "StackMint Studio",
    description:
      "Your AI-powered web development MVP agency. We build high-converting landing pages, create product-ready MVPs, and provide mobile app development services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-background text-foreground">
            <Navbar />
            <Analytics/>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
