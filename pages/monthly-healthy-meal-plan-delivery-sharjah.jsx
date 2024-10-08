import React from 'react'
import Srvicsharjah from '../src/components/ServiceSharjah/Index.js'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import SEO from '../src/components/Common/SEO'
import { seoPages, vmealsPages, vmealsSEO } from '../src/lib/APICommunications'
export default function servicesharjah(props) {
  const metaData = props?.data?.docs?.find(d => d.title == "Sharjah");
  console.log("data",metaData)
  //  const metaDataContent = Object.values(props?.metaData?.docs[0].VMealsCategoriesSeoList).find(c => c.VMealsSeoCategoriesTitle == "Meal Plans Service in Sharjah")
  // console.log("metaDataContent",metaDataContent)
  const seoPagesData = props?.seoPages?.docs?.find(f => f.PageTitle =="Meal Plans Service in Sharjah") 
  return (
    <div>
      <Srvicsharjah headerData={props?.headerData} socialMediaIcon={props.socialMediaIcon} footerData={props.footerData} tradeMarkData={props.tradmark} seoPagesData={seoPagesData}/>
      <SEO pageTitle={metaData?.meta?.title} metaText={metaData?.meta?.description}/>
    </div>
  )
}
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  try {
    //console.log("calling")
    let resolvedPromises = await Promise.all([headerProps(), socialMediaIconsProps()])
    // let metaData = await (await fetch(vmealsSEO)).json()
    let SeoPagesData = await (await fetch(seoPages)).json()
    let final = resolvedPromises.map((itx) => (itx.props))
    let newObject = {}
    final.forEach((x) => { newObject = { ...newObject, ...x } })
    let contentData = await fetch(vmealsPages)
    let data = await contentData.json();
    //console.log("header props", final)
    return {
      props: {
        ...newObject,
        data: { ...data},
        // metaData: { ...metaData },
        seoPages:{...SeoPagesData}
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: {
        headerData: {}, sliderBarData: {}, builtData: [], ourGeniusData: [], homeFitnessData: [], ourHomeBlogData: [], socialMediaIcon: []
      }
    }
  }

}