import React from 'react'
import Indiandietpage from '../src/components/IndianFusionDiet/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as builtDataProps } from '../src/components/Home/Built'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'
import { getServerSideProps as sampleMenuDataProps } from '../src/components/OurPlans/Simplemenu'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as contentDataPropsPage } from '../src/components/IndianFusionDiet/Index'
import { getServerSideProps as faqQuestionsProps } from '../src/components/Faq/Questions';
import { getServerSideProps as informationslickProps } from '../src/components/OurPlans/Informationslick'


export default function indianfusion(props) {
  return (
    <div>
      <Indiandietpage
        faqQuestions={props.faqQuestions}
        metaData={props?.contentData}
        contentData={props?.contentDataIndianFusion}
        headerData={props?.headerData}
        testimonialsData={props?.testimonialsData}
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
    //console.log("calling class")
    let data = await headerProps()
    let faqQuestions = await faqQuestionsProps()
    let builtData = await builtDataProps()
    let informationslick = await informationslickProps()
    let sampleMenu = await sampleMenuDataProps()
    let contentData = await contentDataProps();
    let socialMediaIcon = await socialMediaIconsProps()
    let contentDataPage = await contentDataPropsPage()
    //console.log("header props", contentDataPage)
    return {
      props: {
        ...data.props,
        ...builtData.props,
        ...faqQuestions.props,
        ...contentData.props,
        ...informationslick.props,
        ...sampleMenu.props,
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