import React from 'react'
import Gluentdietpage from '../src/components/GluentDiet/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as builtDataProps } from '../src/components/Home/Built'
import { getServerSideProps as contentDataProps } from '../src/components/OurPlans/Customizeplan'
import { getServerSideProps as sampleMenuDataProps } from '../src/components/OurPlans/Simplemenu'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as contentDataPropsPage } from '../src/components/GluentDiet/Index'
import { getServerSideProps as faqQuestionsProps } from '../src/components/Faq/Questions'
import { getServerSideProps as informationslickProps } from '../src/components/OurPlans/Informationslick'


export default function gluent(props) {
  //console.log("proppspppspspsp", props)
  return (
    <div>
      <Gluentdietpage
        faqQuestions={props.faqQuestions} 
        testimonialsData={props?.testimonialsData}
        metaData={props?.contentData}
        contentData={props?.contentDataGlutenAndDairyFreeDiet}
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
    //console.log("calling class")
    let data = await headerProps()
    let builtData = await builtDataProps()
    let faqQuestions = await faqQuestionsProps()
    let informationslick = await informationslickProps()
    let contentData = await contentDataProps();
    let sampleMenu = await sampleMenuDataProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let contentDataPage = await contentDataPropsPage()
    //console.log("header props", contentDataPage)
    return {
      props: {
        ...data.props,
        ...builtData.props,
        ...contentData.props,
        ...socialMediaIcon.props,
        ...faqQuestions.props,
        ...informationslick.props,
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