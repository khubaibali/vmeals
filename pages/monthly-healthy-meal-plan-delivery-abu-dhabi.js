import React from 'react'
import Srvicdubai from '../src/components/ServiceAbuDehbi/Index.js'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import SEO from '../src/components/Common/SEO.jsx'
import { vmealsPages, vmealsSEO } from '../src/lib/APICommunications'
export default function servicedubai(props) {
  console.log("seo-->", props?.metaData)
  const metaDataContent = Object.values(props?.metaData?.docs[0].VMealsCategoriesSeoList).find(c => c.VMealsSeoCategoriesTitle == "Meal Plans Service in Abu Dhabi")
  console.log("CONTETN", metaDataContent)
  return (
    <div>
      <Srvicdubai headerData={props?.headerData} socialMediaIcon={props.socialMediaIcon} footerData={props.footerData} tradeMarkData={props.tradmark} />
      <SEO pageTitle={metaDataContent?.VMealsSeoCategoriesTitle} metaText={metaDataContent?.VMealsSeoList?.[0]?.VMealsSeoDescription}/>
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
    let metaData = await (await fetch(vmealsSEO)).json()
    let final = resolvedPromises.map((itx) => (itx.props))
    let newObject = {}
    final.forEach((x) => { newObject = { ...newObject, ...x } })
    //console.log("header props", final)
    return {
      props: {
        ...newObject,
        metaData: { ...metaData }
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