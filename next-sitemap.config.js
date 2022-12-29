const siteUrl = "https://vmeals.ae"

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [`${siteUrl}/server-sitemap.xml`, `${siteUrl}/sitemap.xml`]
    },
    sitemapSize: 7000,
}