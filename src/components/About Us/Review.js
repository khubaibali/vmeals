import React from "react";
import { getGoogleReviews } from "../../lib/APICommunications";


export default function Review({googleReview}) {
  //console.log("Reviews",googleReview)
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
export async function getServerSideProps({ req, res }) {
  try {
    //console.log('header fetching')
    let data = await fetch(getGoogleReviews)
    let googleReviewsRes = await data.json()
    return {
      props: {
        googleReviews:{...googleReviewsRes?.docs}
      }
    }

  } catch (error) {
    //console.log(error)
    return {
      props: {
        googleReviews: {}
      }
    }

  }

}