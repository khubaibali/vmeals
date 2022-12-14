import React from 'react'
import  Paymentconfirmation from '../src/components/Payment Confirmation/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'

export default function confirmation(props) {
  return (
    <div>
        <Paymentconfirmation 
           headerData={props?.headerData}
           socialMediaIcon={props.socialMediaIcon}
           footerData={props.footerData}
           tradeMarkData={props.tradmark}
        />
    </div>
  )
}

export async function getServerSideProps(constext) {
  try {
    console.log("calling class")
    let data = await headerProps()
    let socialMediaIcon = await socialMediaIconsProps()
    console.log("header props", data)
    return {
      props: {
        ...data.props,
        ...socialMediaIcon.props,
        // contentData
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