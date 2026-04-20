import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UniSyft — Multi-Sector SaaS Platform",
    template: "%s | UniSyft",
  },
  description:
    "UniSyft builds intelligent software solutions across education, healthcare, and finance. Powered by AI, designed for impact.",
  openGraph: {
    title: "UniSyft — Multi-Sector SaaS Platform",
    description:
      "Intelligent software solutions across education, healthcare, and finance.",
    type: "website",
    locale: "en_US",
    siteName: "UniSyft",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniSyft — Multi-Sector SaaS Platform",
    description:
      "Intelligent software solutions across education, healthcare, and finance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();history.scrollRestoration="manual";window.scrollTo(0,0);if(location.hash)history.replaceState(null,"",location.pathname)`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
