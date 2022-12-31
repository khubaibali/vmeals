const siteUrl = "http://localhost:3000"

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [`${siteUrl}/server-sitemap.xml`, `${siteUrl}/sitemap.xml`]
    },
    sitemapSize: 7000,
}