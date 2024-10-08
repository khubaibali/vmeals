import React from 'react'
import Pescatarianpage from '../src/components/PescatarianDiet/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as builtDataProps } from '../src/components/Home/Built'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as sampleMenuDataProps } from '../src/components/OurPlans/Simplemenu'
import { getServerSideProps as contentDataPropsPage } from '../src/components/PescatarianDiet/Index'
import { getServerSideProps as faqQuestionsProps } from '../src/components/Faq/Questions'
import { getServerSideProps as informationslickProps } from '../src/components/OurPlans/Informationslick'
import { getServerSideProps as googleReviewsProps } from "../src/components/Common/Review"

export default function pescatarian(props) {
  return (
    <div>
      <Pescatarianpage
        faqQuestions={props.faqPescatarianDiet}
        testimonialsData={props?.testimonialsData}
        metaData={props?.contentData}
        contentData={props?.contentDataPescatarianDiet}
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
    let sampleMenu = await sampleMenuDataProps()
    let faqQuestions = await faqQuestionsProps()
    let contentData = await contentDataProps();
    let informationslick = await informationslickProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let contentDataPage = await contentDataPropsPage()
    let googleReviews = await googleReviewsProps()
    //console.log("header props", contentDataPage)
    return {
      props: {
        ...data.props,
        ...builtData.props,
        ...contentData.props,
        ...socialMediaIcon.props,
        ...sampleMenu.props,
        ...faqQuestions.props,
        ...informationslick.props,
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