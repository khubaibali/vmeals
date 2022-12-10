import React from 'react'
import  ClassicDietpage from './src/components/Classic Diet/Index'
import {getServerSideProps as headerProps} from './src/components/Common/Navbar'
import {getServerSideProps as builtDataProps} from './src/components/Home/Built'
import {getServerSideProps as socialMediaIconsProps} from './src/components/Common/Footer'


const mealPlans = (props) => {
  console.log("props in meall", props)
  return (
    <div>
        <ClassicDietpage 
          headerData={props?.headerData} 
          builtData={props.builtData} 
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
   let builtData = await builtDataProps()
   let socialMediaIcon = await socialMediaIconsProps()
   console.log("header props", data)
    return {
      props: { 
        ...data.props,
        ...builtData.props,
        ...socialMediaIcon.props
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return{
      props:{headerData:{},sliderBarData:{},builtData:[],ourGeniusData:[],homeFitnessData:[],ourHomeBlogData:[],socialMediaIcon:[]
    }
    }
  }

}

export default mealPlans;