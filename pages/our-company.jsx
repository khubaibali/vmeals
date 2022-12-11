import React from 'react'
import Aboutpage from './src/components/About Us/Index'
import { getServerSideProps as headerProps } from './src/components/Common/Navbar'
import { getServerSideProps as sliderBarProps } from './src/components/Home/Hero'
import { getServerSideProps as socialMediaIconsProps } from './src/components/Common/Footer'
import { vmealsAboutUs } from '../src/lib/APICommunications'

export default function about(props) {
  console.log("our-company props", props)
  return (
    <div>
      <Aboutpage headerData={props?.headerData} sliderBarData={props?.sliderBarData} footerData={props?.footerData} tradeMarkData={props?.tradmark} socialMediaIcon={props?.socialMediaIcon} ourCompanyData={props?.ourCompanyData} />
    </div>
  )
}

export async function getServerSideProps() {
  try {

    let data = await headerProps()
    let sliderBarData = await sliderBarProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let ourCompanyData = await fetch(vmealsAboutUs)
    ourCompanyData = await ourCompanyData.json()
    
    return {
      props: {
        ...data.props,    //navbar
        ...sliderBarData.props,     //hero
        ...socialMediaIcon.props,    //all footer data
        ourCompanyData:{...ourCompanyData?.docs}
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
