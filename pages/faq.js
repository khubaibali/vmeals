import React from 'react'
import Faqpage from '../src/components/Faq/Index'
import {getServerSideProps as headerProps} from '../src/components/Common/Navbar'
import {getServerSideProps as sliderBarProps} from '../src/components/Home/Hero'
import {getServerSideProps as socialMediaIconsProps} from '../src/components/Common/Footer'
import {getServerSideProps as faqQuestionsProps} from '../src/components/Faq/Questions'
import { getServerSideProps as googleReviewsProps } from "../src/components/Common/Review"
import SEO from '../src/components/Common/SEO'
import { vmealsPages } from '../src/lib/APICommunications'
export default function Faq(props) {
  console.log('faq page',props)
  const metaDataContent = Object.values(props?.metaData?.docs).find(c => c.title == "FAQs")
  return (
    <div>
      <Faqpage headerData={props?.headerData} sliderBarData={props.sliderBarData} faqQuestions={props.faqQuestions} socialMediaIcon={props.socialMediaIcon}  footerData={props.footerData} tradeMarkData={props.tradmark} googleReviews={props.googleReviews}/>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description}/>
    </div>
  )
}


export async function getServerSideProps() {
  try {
    //console.log("calling")
    let data = await headerProps()
    let sliderBarData = await sliderBarProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let faqQuestions = await faqQuestionsProps()
    let metaData = await (await fetch(vmealsPages)).json()
    let googleReviews= await googleReviewsProps()
    //console.log("header props", faqQuestions)
    return {
      props: {
        ...data.props,    //navbar
        ...sliderBarData.props,     //hero
        ...socialMediaIcon.props,    //all footer data
        ...faqQuestions.props,
        ...googleReviews.props,
        metaData:{...metaData}
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
