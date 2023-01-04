import React from 'react'
import { getServerSideProps as headerProps } from '../src/components/Common/Navbar'
import { getServerSideProps as socialMediaIconsProps } from '../src/components/Common/Footer'
import FourZeroFourDetail from '../src/components/404'
import SEO from '../src/components/Common/SEO'

export default function Fourzerofour(props) {
    console.log("pagenotfound", props)
    return (
        <>
            <SEO pageTitle={"404: Page Not Found"} metaText={"Page Not Found 404 Page"} metaContent={"noindex, nofollow"}/>
            <FourZeroFourDetail
                tradeMarkData={props?.tradmark}
                footerData={props?.footerData}
                socialMediaIcon={props?.socialMediaIcon}
                headerData={props?.headerData}
            />

        </>
    )
}

export async function getServerSideProps(context) {
    try {
        let socialMediaIcon = await socialMediaIconsProps()
        let data = await headerProps()
        return {
            props: {
                ...socialMediaIcon.props,
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
