import React from 'react'
import Ourpartnerpage from '../src/components/Our Partner/Index'
import {getServerSideProps as headerProps} from '../src/components/Common/Navbar'
import {getServerSideProps as sliderBarProps} from '../src/components/Home/Hero'
import {getServerSideProps as socialMediaIconsProps} from '../src/components/Common/Footer'
import {getServerSideProps as faqQuestionsProps} from '../src/components/Faq/Questions'
import { getServerSideProps as ourSidePartnerProps } from  '../src/components/Our Partner/Fitnesour'
export default function ourpartner(props) {
  return (
    <div>
        <Ourpartnerpage  headerData={props?.headerData} sliderBarData={props.sliderBarData} socialMediaIcon={props.socialMediaIcon}  footerData={props.footerData} tradeMarkData={props.tradmark} ourParnersData={props.ourParnersData}/>
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
    let ourParnersData = await ourSidePartnerProps()
    console.log("header props", faqQuestions)
    return {
      props: {
        ...data.props,    //navbar
        ...sliderBarData.props,     //hero
        ...socialMediaIcon.props,    //all footer data
        ...faqQuestions.props,
        ...ourParnersData.props
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
