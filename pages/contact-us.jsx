import React from 'react'
import Contactuspage from '../src/components/ContactUs/Index'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import { getServerSideProps as contactUsProps } from '../src/components/ContactUs/Fitnesour'
import SEO from '../src/components/Common/SEO'
import { vmealsPages } from '../src/lib/APICommunications'
import { ToastContainer } from 'react-toastify'

export default function Contactus(props) {
  //console.log("contactus page", props)
  const metaDataContent = Object.values(props.metaData.docs).find(c => c.title == "Contact Us")
  return (
    <div>
      <Contactuspage headerData={props?.headerData} socialMediaIcon={props.socialMediaIcon} footerData={props?.footerData} tradeMarkData={props?.tradmark} contactUsData={props.contactUsData} />
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      ></ToastContainer>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    //console.log("calling")
    let data = await headerProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let constactUsData = await contactUsProps()
    let metaData = await (await fetch(vmealsPages)).json()


    return {
      props: {
        ...data.props,    //navbar  
        ...socialMediaIcon.props,    //all footer data
        ...constactUsData.props,
        metaData: { ...metaData }
      },
    }
  } catch (error) {
    //console.log("Inside catch", error?.message)
    return {
      props: {
        headerData: {}, sliderBarData: {}, builtData: [], ourGeniusData: [], homeFitnessData: [], ourHomeBlogData: [], socialMediaIcon: []
      }
    }
  }

}
