import React from 'react'
import Aboutpage from '../src/components/About Us/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as sliderBarProps } from '../src/components/Home/Hero'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as ourCompanyDataProps} from '../src/components/About Us/JournyMissionWrapper'

export default function about(props) {
  console.log("our-company props", props)
  return (
    <div>
      <Aboutpage headerData={props?.headerData} sliderBarData={props?.sliderBarData} footerData={props?.footerData} tradeMarkData={props?.tradmark} socialMediaIcon={props?.socialMediaIcon} ourCompanyData={props?.ourCompanyData} />
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
    let final = resolvedPromises.map((itx)=>(itx.props))
    let newObject ={}
    console.log("our company final", final)
    final.forEach((x)=>{newObject={...newObject,...x}})
    
    return {
      props: {
        ...newObject
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
