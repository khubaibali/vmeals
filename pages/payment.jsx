import React from 'react'
import Paymentconfirmation from '../src/components/Payment Confirmation/Index'
import { getServerSideProps as informationslickProps } from '../src/components/OurPlans/Informationslick'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as paymentSuccessProps } from '../src/components/Payment Confirmation/Customizeplan'
import SEO from '../src/components/Common/SEO'

export default function confirmation(props) {
  // console.log("paymentSuccessProps", props)
  return (
    <div>
      <SEO pageTitle='Payment Successful' metaText={"Vmeal"} />
      <Paymentconfirmation
        testimonialsData={props?.testimonialsData}
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
    //console.log("calling class")
    let informationslick = await informationslickProps()
    let data = await headerProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let paymentSuccess = await paymentSuccessProps()
    //console.log("header props", data)
    return {
      props: {
        ...data.props,
        ...socialMediaIcon.props,
        ...informationslick.props,
        ...paymentSuccess.props
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