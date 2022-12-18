import React from 'react'
import Aboutpage from '../src/components/About Us/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as sliderBarProps } from '../src/components/Home/Hero'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as ourCompanyDataProps} from '../src/components/About Us/JournyMissionWrapper'
import SEO from '../src/components/Common/SEO'
import { vmealsPages } from '../src/lib/APICommunications'
export default function about(props) {
  //console.log("our-company props", props)
  const metaDataContent = Object.values(props?.metaData?.docs).find(c => c.title == "Our Company")
  return (
    <div>
      <Aboutpage headerData={props?.headerData} sliderBarData={props?.sliderBarData} footerData={props?.footerData} tradeMarkData={props?.tradmark} socialMediaIcon={props?.socialMediaIcon} ourCompanyData={props?.ourCompanyData} />
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
    let resolvedPromises = await Promise.all([headerProps(),sliderBarProps(),socialMediaIconsProps(),ourCompanyDataProps()])
    let metaData = await (await fetch(vmealsPages)).json()
    let final = resolvedPromises.map((itx)=>(itx.props))
    let newObject ={}
    //console.log("our company final", final)
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
