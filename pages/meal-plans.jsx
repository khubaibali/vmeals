import React from 'react'
import  Ourplanspage from '../src/components/OurPlans/Index'
import {getServerSideProps as headerProps} from '../src/components/Common/Navbar'
import {getServerSideProps as sliderBarProps} from '../src/components/Home/Hero'
import {getServerSideProps as builtDataProps} from '../src/components/Home/Built'
import {getServerSideProps as ourGeniusDataProps} from '../src/components/Home/Genius'
import {getServerSideProps as faqQuestionsProps} from '../src/components/Faq/Questions'
import {getServerSideProps as homeFitnessDataProps} from '../src/components/Home/Fitness'
import {getServerSideProps as ourHomeBlogsDataProps} from '../src/components/Home/Ourblog'
import {getServerSideProps as socialMediaIconsProps} from '../src/components/Common/Footer'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'

export default function ourplans(props) {
  return (
    <div>
        <Ourplanspage metaData={props?.contentData} headerData={props?.headerData} faqQuestions={props.faqQuestions}  sliderBarData={props.sliderBarData} builtData={props.builtData} ourGeniusData={props.ourGeniusData} homeFitnessData={props.homeFitnessData} ourHomeBlogData ={props.ourHomeBlogData} socialMediaIcon={props.socialMediaIcon} footerData={props.footerData} tradeMarkData={props.tradmark}  />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    //console.log("calling")
    let data = await headerProps()
    let sliderBarData = await sliderBarProps()
    let faqQuestions = await faqQuestionsProps()
    let builtData = await builtDataProps()
    let contentData = await contentDataProps();
    let ourGeniusData = await ourGeniusDataProps()
    let homeFitnessData = await homeFitnessDataProps()
    let ourHomeBlogData = await ourHomeBlogsDataProps()
    let socialMediaIcon = await socialMediaIconsProps()
    //console.log("header props",sliderBarData)
     return {
       props: { 
         ...data.props,
         ...sliderBarData.props,
        ...contentData.props,
        ...builtData.props,
         ...ourGeniusData.props,
        ...faqQuestions.props,
        ...homeFitnessData.props,
         ...ourHomeBlogData.props,
         ...socialMediaIcon.props
       }, // will be pa
      }
  } catch (error) {
    return{
      props:{headerData:{},sliderBarData:{},builtData:[],ourGeniusData:[],homeFitnessData:[],ourHomeBlogData:[],socialMediaIcon:[]
    }
    }
  }

}
