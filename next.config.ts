import type { NextConfig } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portafolio-2026.vercel.app";
const siteHostname = new URL(siteUrl).hostname;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: siteHostname,
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; connect-src 'self' https://formspree.io https://api.formspree.io https://*.formspree.io; img-src 'self' https: data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formspree.io https://api.formspree.io https://*.formspree.io;",
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        }
      ],
    },
  ],
  reactStrictMode: true,
  poweredByHeader: false
}

export default nextConfig;
