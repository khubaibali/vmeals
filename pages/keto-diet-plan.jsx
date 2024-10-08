import React from 'react'
import Ketopage from '../src/components/KetoDiet/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as builtDataProps } from '../src/components/Home/Built'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as sampleMenuDataProps } from '../src/components/OurPlans/Simplemenu'
import { getServerSideProps as contentDataPropsPage } from '../src/components/KetoDiet/Index'
import { getServerSideProps as faqQuestionsProps } from '../src/components/Faq/Questions'
import { getServerSideProps as googleReviewsProps } from "../src/components/Common/Review"
import { getServerSideProps as informationslickProps } from '../src/components/OurPlans/Informationslick'

export default function ketodiet(props) {
  return (
    <div>
      <Ketopage
        faqQuestions={props.faqKetoDiet}
        testimonialsData={props?.testimonialsData}
        metaData={props?.contentData}
        contentData={props?.contentDataKetoDiet}
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
    let faqQuestions = await faqQuestionsProps()
    let builtData = await builtDataProps()
    let sampleMenu = await sampleMenuDataProps()
    let contentData = await contentDataProps();
    let informationslick = await informationslickProps()
    let googleReviews = await googleReviewsProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let contentDataPage = await contentDataPropsPage()
    //console.log("header props", contentDataPage)
    return {
      props: {
        ...data.props,
        ...builtData.props,
        ...contentData.props,
        ...faqQuestions.props,
        ...socialMediaIcon.props,
        ...sampleMenu.props,
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
