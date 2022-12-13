import React from 'react'
import {getServerSideProps as headerProps} from '../src/components/Common/Navbar'
import {getServerSideProps as socialMediaIconsProps} from '../src/components/Common/Footer'
import Ourblogpage from '../src/components/Our Blog/Index'
import SEO from '../src/components/Common/SEO'
import { vmealsPages } from '../src/lib/APICommunications'

export default function ourblog(props) {
  const metaDataContent = Object.values(props?.metaData?.docs).find(c => c.title == "Blog")

  return (
    <div>
        <Ourblogpage headerData={props?.headerData} socialMediaIcon={props.socialMediaIcon} footerData={props.footerData} tradeMarkData={props.tradmark}/>
        <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description}/>
    </div>
  )
}


export async function getServerSideProps({req,res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  try {
    let resolvedPromises = await Promise.all([headerProps(),socialMediaIconsProps()])
    let metaData = await (await fetch(vmealsPages)).json()
    let final = resolvedPromises.map((itx)=>(itx.props))
    let newObject ={}
    console.log("our company final", final)
    final.forEach((x)=>{newObject={...newObject,...x}})
    
    return {
      props: {
        ...newObject,
        metaData:{...metaData}
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: {
        headerData: {}, sliderBarData: {}, socialMediaIcon: []
      }
    }
  }

}

