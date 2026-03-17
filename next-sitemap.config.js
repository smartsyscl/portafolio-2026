/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portafolio-2026.vercel.app'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  changefreq: 'weekly',
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
    ],
    additionalRobotsTxt: `
# ---------------------------------------------
# Archivo robots.txt generado automáticamente
# Autor: Jean Perez
# Empresa: Smartsys
# Última actualización: ${new Date().toISOString().split('T')[0]}
# ---------------------------------------------
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
  },

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
}
