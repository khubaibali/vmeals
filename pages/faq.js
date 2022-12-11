import React from 'react'
import Faqpage from '../src/components/Faq/Index'
import {getServerSideProps as headerProps} from '../src/components/Common/Navbar'
import {getServerSideProps as sliderBarProps} from '../src/components/Home/Hero'
import {getServerSideProps as socialMediaIconsProps} from '../src/components/Common/Footer'
import {getServerSideProps as faqQuestionsProps} from '../src/components/Faq/Questions'
export default function Faq(props) {
  console.log('faq page',props)
  return (
    <div>
      <Faqpage headerData={props?.headerData} sliderBarData={props.sliderBarData} faqQuestions={props.faqQuestions} socialMediaIcon={props.socialMediaIcon}  footerData={props.footerData} tradeMarkData={props.tradmark}/>
    </div>
  )
}


export async function getServerSideProps() {
  try {
    console.log("calling")
    let data = await headerProps()
    let sliderBarData = await sliderBarProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let faqQuestions = await faqQuestionsProps()
    console.log("header props", faqQuestions)
    return {
      props: {
        ...data.props,    //navbar
        ...sliderBarData.props,     //hero
        ...socialMediaIcon.props,    //all footer data
        ...faqQuestions.props
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
