import React from 'react'
import ClassicDietpage from '../src/components/ClassicDiet/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as builtDataProps } from '../src/components/Home/Built'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'
import { getServerSideProps as sampleMenuDataProps } from '../src/components/OurPlans/Simplemenu'
import { getServerSideProps as informationslickProps } from '../src/components/OurPlans/Informationslick'
import { getServerSideProps as contentDataClassicDietProps } from '../src/components/ClassicDiet/Index'
import { getServerSideProps as faqQuestionsProps } from '../src/components/Faq/Questions'
import { getServerSideProps as googleReviewsProps } from "../src/components/Common/Review"


const mealPlans = (props) => {
  console.log("props in meall", props)
  return (
    <div>
      <ClassicDietpage
        mealPlansFaqsData={props?.mealPlansFaqsData}
        testimonialsData={props?.testimonialsData}
        metaData={props?.contentData}
        faqQuestions={props.faqClassicDiet}
        contentData={props?.contentDataClassicDiet}
        headerData={props?.headerData}
        builtData={props.builtData}
        sampleMenu={props.sampleMenu}
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
    let contentData = await contentDataProps();
    let contentDataClassicDiet = await contentDataClassicDietProps();
    let builtData = await builtDataProps()
    let informationslick = await informationslickProps()
    let faqQuestions = await faqQuestionsProps()
    let sampleMenu = await sampleMenuDataProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let googleReviews = await googleReviewsProps()
    //console.log("header props", data)
    return {
      props: {
        ...data.props,
        ...faqQuestions.props,
        ...builtData.props,
        ...socialMediaIcon.props,
        ...contentData.props,
        ...contentDataClassicDiet.props,
        ...informationslick.props,
        ...sampleMenu.props,
        ...googleReviews.props
        // contentData
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

export default mealPlans;