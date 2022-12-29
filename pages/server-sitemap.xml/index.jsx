import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";
import { vmealsOurBlogsALL } from "../../src/lib/APICommunications";
const baseUrl = "https://vmeals.ae"
export const getServerSideProps = async (ctx) => {
    const response = await fetch(vmealsOurBlogsALL);
    const data = await response.json();

    // console.log("datttt", data)

    const fields = data?.docs?.map(d => ({loc: `${baseUrl}/${d?.VmealsBlogURL}`, lastmod: new Date().toISOString()}));
    // console.log("fields >>", fields)
    return getServerSideSitemap(ctx, fields)
}

const Site = () => {

}

export default Site;