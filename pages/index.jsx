import Head from 'next/head'
import Image from 'next/image'
import Homepage from './src/components/Home/Index'
import React, { useState } from 'react'
import {getServerSideProps as headerProps} from './src/components/Common/Navbar'
import {getServerSideProps as sliderBarProps} from './src/components/Home/Hero'
import {getServerSideProps as builtDataProps} from './src/components/Home/Built'
import {getServerSideProps as ourGeniusDataProps} from './src/components/Home/Genius'
import {getServerSideProps as homeFitnessDataProps} from './src/components/Home/Fitness'
import {getServerSideProps as ourHomeBlogsDataProps} from './src/components/Home/Ourblog'
import {getServerSideProps as socialMediaIconsProps} from './src/components/Common/Footer'
function Home(props) {
  console.log("home",props)
  return (

    <>
      <Homepage headerData={props?.headerData} sliderBarData={props.sliderBarData} builtData={props.builtData} ourGeniusData={props.ourGeniusData} homeFitnessData={props.homeFitnessData} ourHomeBlogData ={props.ourHomeBlogData} socialMediaIcon={props.socialMediaIcon} footerData={props.footerData} tradeMarkData={props.tradmark} />
    </>
  )
}

export async function getServerSideProps({req,res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  try {
    console.log("calling")
    let resolvedPromises= await Promise.all([headerProps(),sliderBarProps(),builtDataProps(),ourGeniusDataProps(),homeFitnessDataProps(),ourHomeBlogsDataProps(),socialMediaIconsProps()])
    let final = resolvedPromises.map((itx)=>(itx.props))
    let newObject ={}
    final.forEach((x)=>{newObject={...newObject,...x}})
   console.log("header props",final)
    return {
      props: { 
        ...newObject
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return{
      props:{headerData:{},sliderBarData:{},builtData:[],ourGeniusData:[],homeFitnessData:[],ourHomeBlogData:[],socialMediaIcon:[]
    }
    }
  }

}

export default Home;