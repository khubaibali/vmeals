import React from 'react'
import Slider from "react-slick";
import { getGoogleReviews } from '../../lib/APICommunications';


export default function Review({ googleReviews = [] }) {

  console.log("!!reivews", googleReviews)
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-10 mb-5 md:my-20">
      <div className='  bg-green-light p-5 rounded-[20px]  ' >
        <div className="grid grid-cols-12    ">
          <div className=" col-span-12  ">
            <img src='/images/Google-Logo 1.png' className='  width-[54px] h-auto md:width-[85px]  md:h-[36px]' />
            <ul className='inline-flex ' >
              <li>
                <h2 className=' f-f-b text-black text-sm md:text-base ' >4.9</h2>
              </li>
              <li className=' mt-1.5 ml-2 md:ml-3' >
                <div class="flex items-center">
                  <svg aria-hidden="true" class=" w-[10px]  h-[auto] md:w-5 md:h-5 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class=" w-[10px]  h-[auto] md:w-5 md:h-5 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class=" w-[10px]  h-[auto] md:w-5 md:h-5 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class=" w-[10px]  h-[auto] md:w-5 md:h-5 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class=" w-[10px]  h-[auto] md:w-5 md:h-5 text-green " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
              </li>
              <li className='mt-1 md:mt-1.5 ml-2 md:ml-3'  >
                <h2 className=' text-xs md:text-sm f-f-r text-grey-light  ' >200 reviews</h2>
              </li>
            </ul>
          </div>
          {/* <div className=" col-span-4  ">
            <div className='text-right ' >
              <button class="green-gradiant  mt-4 md:mt-0 shadow-lg text-white f-f-b text-smtwo md:text-tiny w-[113px] h-[38px]  md:w-[150px] md:h-[54px] rounded-[100px] text-center ">
                Write a Review</button>
            </div>
          </div> */}
        </div>

      </div>
      <div className=' mt-6' >
        {/* slider section started */}
        <Slider {...settings}>
          {
            googleReviews?.map((gr) => (
              <div>
                <div className='bg-green-light p-5 relative  rounded-[20px] w-[350px]  h-[280px] md:h-[398px] 2xl:h-[350px] ml-auto mr-auto   ' >
                  <div className="grid grid-cols-12    ">
                    <div className=" col-span-4  ">
                      <img src={gr?.profile_photo_url} className=' h-[84px] w-[84px] ' />
                    </div>
                    <div className=" col-span-5  ">
                      <h2 className=' f-f-b text-black text-sm md:text-base ' >{gr?.author_name}</h2>
                      <div class="flex items-center mt-1 ">
                        {[...Array(gr?.rating)].map(() => (
                          <svg aria-hidden="true" class=" w-[10px]  h-[auto] md:w-5 md:h-5 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title> star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        ))}

                      </div>
                      <h2 className=' text-xs md:text-sm f-f-r text-grey-light mt-1 ' >1 month ago</h2>
                    </div>
                    <div className=" col-span-3  ">
                      <div className='text-right' >
                        <h2 className=' text-xs md:text-sm f-f-r text-grey-light mt-1 ' >Posted On</h2>

                        <img src='/images/Google-Short-Logo 1.png' className=' w-[55px] h-[56px] mt-1 ml-auto mr-auto ' />

                      </div>

                    </div>
                  </div>
                  <p className='text-xs md:text-sm f-f-r text-grey-light mt-3 2xl:leading-[17px] ' >
                    {gr?.text}
                  </p>
                  <button className=' text-xs md:text-sm f-f-b text-green mt-3  absolute bottom-[20px]  ' >Read More</button>
                </div>
              </div>
            ))
          }



        </Slider>
        {/* slider section edned */}




      </div>

    </div>
  )
}


export async function getServerSideProps() {
  try {
    console.log('header fetching')
    let data = await fetch(getGoogleReviews)
    let googleReviewsData = await data.json()
    return {
      props: {
        googleReviews: googleReviewsData?.doc?.result?.reviews
      }
    }

  } catch (error) {
    console.log("google reviews", error)
    return {
      props: {
        googleReviews: {}
      }
    }

  }

}
