import React from "react";


export default function Review() {
  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 lg:my-20">
      <img
        src="/images/Google-Reviews.png"
        alt=""
        className="w-full h-auto hidden lg:block xl:my-10 2xl:my-20"
      />
      <img
        src="/images/Google-Reviews-mob.png"
        alt=""
        className="w-full h-auto lg:hidden xl:my-10 2xl:my-20"
      />
    </div>
  );
}
export async function getServerSideProps({ req, res }){
  try {
    console.log('header fetching')
    let googleReviews = await fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJcTFhgEdzXz4RJtANMZv4OJs&fields=reviews&key=AIzaSyD2wruZXxV5EAJlMJLsjGjGpAOlfXdt_Ko")
    
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
    return {
      props: {
        googleReviews:{...googleReviews}
      }
    }
    
  } catch (error) {
    return{
      props: {
        googleReviews:{}
      }
    }
    console.log("inside error",error)
  }
 
}