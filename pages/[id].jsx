import React from 'react'
import  Ourblogdetailspage from '../src/components/OurBlogDetails/Index'
import {getServerSideProps as headerProps} from '../src/components/Common/Navbar'
import {getServerSideProps as socialMediaIconsProps} from '../src/components/Common/Footer'
import { vmealsOurBlogs, vmealsPages } from '../src/lib/APICommunications'
import SEO from '../src/components/Common/SEO'


export default function ourblogdetails(props) {
    console.log("our blog detail",props)
    const metaDataContent = Object?.values(props?.metaData?.docs).find(c => c.title == "Blog")
  return (
    <div>
        <Ourblogdetailspage headerData={props?.headerData} socialMediaIcon={props?.socialMediaIcon} tradeMarkData={props?.tradeMarkData} footerData={props?.footerData}  categoriesAll={props?.categoriesAll}  selectedBlog={props?.blog}/>
        <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description}/>
    </div>
  )
}


export async function getServerSideProps({req,res,query}) {
    console.log('---------------------',query['id'])
    console.log('>>>>>>>>>>>>>>>>>>>>>>')
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
      )
    try {
      let resolvedPromises = await Promise.all([headerProps(),socialMediaIconsProps()])
      let metaData = await (await fetch(vmealsPages)).json()
      let categoriesAll = await (await fetch(vmealsOurBlogs)).json()
      let blogs = await (await fetch(vmealsOurBlogs)).json()
      let final = resolvedPromises.map((itx)=>(itx.props))
      let newObject ={}
      let blog = blogs?.docs?.find(bl=>bl.id == query['id'])
      console.log("our company final", final)
      final.forEach((x)=>{newObject={...newObject,...x}})
      
      return {
        props: {
          ...newObject,
          metaData:{...metaData},
          categoriesAll:{...categoriesAll},
          blog:{...blog}
        }, // will be passed to the page component as props
      }
    } catch (error) {
        console.log("errror",error)
      return {
        props: {
          headerData: {}, sliderBarData: {}, socialMediaIcon: []
        }
      }
    }
  
  }
  
