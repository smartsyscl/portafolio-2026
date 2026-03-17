import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portafolio-2026.vercel.app";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jean Pérez - Desarrollador Web Front End",
    template: "%s | Jean Pérez" // Ind Pag
  },
  description: "Desarrollador Web Front End especializado en crear experiencias digitales atractivas y funcionales. Explora mi portafolio para ver mis proyectos y habilidades en JavaScript, React, Next.js, y más.",
  keywords: [
    "Jean Pérez",
    "Desarrollador Web",
    "Front End",
    "Portafolio",
    "JavaScript",
    "React",
    "Next.js",
    "CSS",
    "HTML",
    "Desarrollo Web",
    "Programación",
    "Diseño Web",
  ],
  authors: [{ name: "Jean Pérez" }],
  creator: "Jean Pérez",
  publisher: "Jean Pérez",
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Jean Pérez - Desarrollador Web",
    title: "Jean Pérez - Desarrollador Web Front End",
    description: "Desarrollador Web Front End especializado en crear experiencias digitales atractivas y funcionales.",
    images: [
      {
        url: "/og-image.png", //
        width: 1200,
        height: 630,
        alt: "Jean Pérez - Desarrollador Web Front End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@jeandev", 
    title: "Jean Pérez - Desarrollador Web Front End",
    description: "Desarrollador Web Front End especializado en crear experiencias digitales atractivas y funcionales.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
      
    </html>
  )
}
