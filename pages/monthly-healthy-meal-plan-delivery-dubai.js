import React from 'react'
import  Srvicdubai from '../src/components/ServiceDubai/Index.js'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import SEO from '../src/components/Common/SEO'
import { vmealsPages } from '../src/lib/APICommunications'
export default function servicedubai(props) {
  return (
    <div>
            <Srvicdubai headerData={props?.headerData} socialMediaIcon={props.socialMediaIcon} footerData={props.footerData} tradeMarkData={props.tradmark}/>
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
    let metaData = await (await fetch(vmealsPages)).json()
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