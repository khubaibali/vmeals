import React from 'react'
import Gluentdietpage from '../src/components/GluentDiet/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as builtDataProps } from '../src/components/Home/Built'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as contentDataPropsPage } from '../src/components/GluentDiet/Index'


export default function gluent(props) {
  console.log("proppspppspspsp", props)
  return (
    <div>
      <Gluentdietpage
        metaData={props?.contentData}
        contentData={props?.contentDataGlutenAndDairyFreeDiet}
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
    let contentData = await contentDataProps();
    let socialMediaIcon = await socialMediaIconsProps()
    let contentDataPage = await contentDataPropsPage()
    console.log("header props", contentDataPage)
    return {
      props: {
        ...data.props,
        ...builtData.props,
        ...contentData.props,
        ...socialMediaIcon.props,
        ...contentDataPage.props
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