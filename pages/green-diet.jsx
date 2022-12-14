import React from 'react'
import GreenDietpage from '../src/components/GreenDiet/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as builtDataProps } from '../src/components/Home/Built'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'
import { getServerSideProps as sampleMenuDataProps } from '../src/components/OurPlans/Simplemenu'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as contentDataPropsPage } from '../src/components/GreenDiet/Index'

export default function greendiet(props) {
  return (
    <div>
      <GreenDietpage
        metaData={props?.contentData}
        contentData={props?.contentDataGreenDiet}
        headerData={props?.headerData}
        sampleMenu={props.sampleMenu}
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
    let sampleMenu = await sampleMenuDataProps()
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
        ...sampleMenu.props,
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