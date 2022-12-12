import React from 'react'
import Contactuspage from '../src/components/ContactUs/Index'
import {getServerSideProps as headerProps} from '../src/components/Common/Navbar'
import {getServerSideProps as socialMediaIconsProps} from '../src/components/Common/Footer'
import {getServerSideProps as contactUsProps} from '../src/components/ContactUs/Fitnesour'

export default function Contactus(props) {
  console.log("contactus page",props)
  return (
    <div>
        <Contactuspage headerData={props?.headerData}  socialMediaIcon={props.socialMediaIcon}  footerData={props?.footerData} tradeMarkData={props?.tradmark} contactUsData={props.contactUsData}/>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    console.log("calling")
    let data = await headerProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let constactUsData =await contactUsProps()

    return {
      props: {
        ...data.props,    //navbar  
        ...socialMediaIcon.props,    //all footer data
        ...constactUsData.props
      }, 
    }
  } catch (error) {
    console.log("Inside catch",error?.message)
    return {
      props: {
        headerData: {}, sliderBarData: {}, builtData: [], ourGeniusData: [], homeFitnessData: [], ourHomeBlogData: [], socialMediaIcon: []
      }
    }
  }

}
