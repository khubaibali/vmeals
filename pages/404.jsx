import React from 'react'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import FourZeroFourDetail from '../src/components/404'

export default function Fourzerofour(props) {
  return (
    <>
     <FourZeroFourDetail 
      tradeMarkData={props?.tradeMarkData}
      footerData={props?.footerData}
      socialMediaIcon={props?.socialMediaIcon}
      headerData={props?.headerData}
     />

    </>
  )
}

export async function getServerSideProps(context) {
  try {
    let data = await headerProps()
    return {
      props: {
        ...data.props,
      }
    }
  } catch (err) {
    return {
      props: {
        headerData: {}, socialMediaIcon: []
      }
    }
  }
}
