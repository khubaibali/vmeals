// import React from 'react'
import Counsultation from '../src/components/NutritionistConsultation/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as contentDataProps } from '../src/components/NutritionistConsultation/Index'

export default function Nutritionistconsultation(props) {
  return (
    // <>hell</>
    <div>
       <Counsultation
        headerData={props?.headerData}
        socialMediaIcon={props.socialMediaIcon}
        footerData={props.footerData}
        tradeMarkData={props.tradmark}
        metaData={props?.contentData}
       />
    </div>
  )
}

export async function getServerSideProps(constext) {
  try {
//     //console.log("calling class")
    let data = await headerProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let contentData = await contentDataProps();

    return {
      props: {
        ...data.props,
        ...contentData.props,
        ...socialMediaIcon.props,
      }
    }
  } catch (e) {
    console.log(e)
  }
}
