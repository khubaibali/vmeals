import Head from 'next/head'
import Image from 'next/image'
import Homepage from './src/components/Home/Index'
import React, { useState } from 'react'
import {Navbar,getServerSideProps as headerProps} from './src/components/Common/Navbar'

function Home({props}) {
  console.log("home",props)
  return (

    <>
      <Homepage headerData={props.headerData}/>
    </>
  )
}

export async function getServerSideProps() {
  try {
    console.log("calling")
   let data = await headerProps()
   console.log("header props",data)
    return {
      props: { 
        ...data
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return{
      props:{headerData:[]}
    }
  }

}

export default Home;