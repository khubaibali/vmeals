import React from 'react'
import GreenDietpage from '../src/components/GreenDiet/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as builtDataProps } from '../src/components/Home/Built'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'
import { getServerSideProps as sampleMenuDataProps } from '../src/components/OurPlans/Simplemenu'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as informationslickProps } from '../src/components/OurPlans/Informationslick'
import { getServerSideProps as contentDataPropsPage } from '../src/components/GreenDiet/Index'
import { getServerSideProps as faqQuestionsProps } from '../src/components/Faq/Questions'
import { getServerSideProps as googleReviewsProps } from "../src/components/Common/Review"
export default function greendiet(props) {
  console.log("propsss", props)
  return (
    <div>
      <GreenDietpage
        testimonialsData={props?.testimonialsData}
        faqQuestions={props.faqGreenDiet}
        metaData={props?.contentData}
        contentData={props?.contentDataGreenDiet}
        headerData={props?.headerData}
        sampleMenu={props.sampleMenu}
        builtData={props.builtData}
        socialMediaIcon={props.socialMediaIcon}
        footerData={props.footerData}
        tradeMarkData={props.tradmark}
        googleReviews={props.googleReviews}
      />
    </div>
  )
}

export async function getServerSideProps(constext) {
  try {
    //console.log("calling class")
    let data = await headerProps()
    let builtData = await builtDataProps()
    let faqQuestions = await faqQuestionsProps()
    let sampleMenu = await sampleMenuDataProps()
    let informationslick = await informationslickProps()
    let contentData = await contentDataProps();
    let socialMediaIcon = await socialMediaIconsProps()
    let contentDataPage = await contentDataPropsPage()
    let googleReviews =await googleReviewsProps()
    //console.log("header props", contentDataPage)
    return {
      props: {
        ...data.props,
        ...builtData.props,
        ...informationslick.props,
        ...contentData.props,
        ...socialMediaIcon.props,
        ...faqQuestions.props,
        ...sampleMenu.props,
        ...contentDataPage.props,
        ...googleReviews.props
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