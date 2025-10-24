import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean Pérez - Desarrollador Web Front End",
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
  icons: {
    icon: '/favicon.ico',
  },
  robots:{
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
      
    </html>
  )
}
