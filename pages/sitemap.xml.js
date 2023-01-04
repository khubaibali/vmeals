import { vmealsOurBlogsALL } from "../src/lib/APICommunications";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

function formatDate(date) {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  date = date.toISOString().split("T")[0];

  return date;
}

function generateSiteMap(data) {
  let currentDate = new Date();
  currentDate = formatDate(currentDate);
  // console.log("datttt", data)

  // const fields = data?.docs?.map(d => ({loc: `${baseUrl}/${d?.VmealsBlogURL}`, lastmod: new Date().toISOString()}));
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url><loc>https://vmeals.ae</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/blog</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/classic-diet</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/contact-us</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/deliveryInformation</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/faq</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/free-nutrition-and-diet-consultation</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/gluten-dairy-free-diet-plan</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/green-diet</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/indian-fusion-meal-plan</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/keto-diet-plan</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/meal-plans</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/monthly-healthy-meal-plan-delivery-abu-dhabi</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/monthly-healthy-meal-plan-delivery-sharjah</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/ordersummary</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/our-company</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/our-partners</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/pagenotfound</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/payment</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/pescatarian-diet-plan</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/privacy-policy</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/refund-policy</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       <url><loc>https://vmeals.ae/terms-of-service</loc><lastmod>
        ${currentDate}
       </lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
       
       ${data?.docs
         ?.map((f) => {
           return `
         <url>
             <loc>${`${siteUrl}/${f.VmealsBlogURL}`}</loc>
             <lastmod>
             ${formatDate(new Date(f.updatedAt))}
             </lastmod>
             <changefreq>daily</changefreq>
             <priority>0.7</priority>
         </url>
       `;
         })
         .join("")}
     </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  // const request = await fetch(EXTERNAL_DATA_URL);
  // const posts = await request.json();
  const response = await fetch(vmealsOurBlogsALL);
  const data = await response.json();
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
