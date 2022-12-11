import React from 'react'
import  Ourplanspage from '../src/components/Our Plans/Index'
import {getServerSideProps as headerProps} from './src/components/Common/Navbar'
import {getServerSideProps as sliderBarProps} from './src/components/Home/Hero'
import {getServerSideProps as builtDataProps} from './src/components/Home/Built'
import {getServerSideProps as ourGeniusDataProps} from './src/components/Home/Genius'
import {getServerSideProps as homeFitnessDataProps} from './src/components/Home/Fitness'
import {getServerSideProps as ourHomeBlogsDataProps} from './src/components/Home/Ourblog'
import {getServerSideProps as socialMediaIconsProps} from './src/components/Common/Footer'

export default function ourplans(props) {
  return (
    <div>
        <Ourplanspage headerData={props?.headerData} sliderBarData={props.sliderBarData} builtData={props.builtData} ourGeniusData={props.ourGeniusData} homeFitnessData={props.homeFitnessData} ourHomeBlogData ={props.ourHomeBlogData} socialMediaIcon={props.socialMediaIcon} footerData={props.footerData} tradeMarkData={props.tradmark}  />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    console.log("calling")
    let data = await headerProps()
    let sliderBarData = await sliderBarProps()
    let builtData = await builtDataProps()
    let ourGeniusData = await ourGeniusDataProps()
    let homeFitnessData = await homeFitnessDataProps()
    let ourHomeBlogData = await ourHomeBlogsDataProps()
    let socialMediaIcon = await socialMediaIconsProps()
    console.log("header props",sliderBarData)
     return {
       props: { 
         ...data.props,
         ...sliderBarData.props,
         ...builtData.props,
         ...ourGeniusData.props,
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
