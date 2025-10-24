/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portafolio-2026.vercel.app', 
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
      'https://portafolio-2026.vercel.app/sitemap.xml', 
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

Sitemap: https://portafolio-2026.vercel.app/sitemap.xml
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
