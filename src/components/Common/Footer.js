import Link from "next/link";
import React, { useState } from "react";
import Whtsapps from '../Common/watsapp'
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
import { vmealsIcon, vmealsguide, vmealsFooter, Footer ,vmealsSubscribe} from '../../lib/APICommunications';
let images = ["/images/facebook.png", "/images/instagram.png", "/images/whatsapp.png"]
export default function Fotter({ socialMediaIcon = [{}], footerData = [{}], tradeMarkData = [{}] }) {
  console.log("footer")
  const [registerForm, setFormData] = useState({})
  const [isDisabled,setDisable] = useState(false)
  function formControl(event) {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }
  function CallSubmitForm() {
    setDisable(true)
    fetch(`${vmealsSubscribe}`, {
      method: 'POST',
      body: JSON.stringify({
        ...registerForm
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setDisable(false)
      }).catch(error => setDisable(false));

  }

  return (
    <>
      <div className=" pt-5 md:pt-10 2xl:pt-20">
        <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto">
          <div className=" text-center">
            <ul className=" inline-flex ">

              {socialMediaIcon?.[0]?.VMealsIconList?.map((item, inde) => {
                return <li>
                  <a
                    href={item?.VMealsIconItemLink}
                    target="_blank"
                  >
                    <img
                      src={images[inde]}
                      className=" h-[34px] w-[34px]  md:h-[50px] md:w-[50px] 2xl:h-[75px] 2xl:w-[75px]"
                    />
                  </a>
                </li>
              })}
            </ul>

          </div>
          <div className="bg-white shadow-2xl mb-5 mt-4 md:my-10 py-3 md:py-6 lg:py-8 2xl:py-10 w-10/12 md:w-10/12 lg:w-8/12  2xl:w-9/12 text-center  ml-auto mr-auto rounded-full ">

            <h2 className=" text-black f-f-b  text-smtwo  md:text-xl lg:text-3xl 2xl:text-6xl  uppercase ">
              Get your free
              <span className="text-green"> {footerData?.[0]?.VMealsGuideBoldColorTitle}</span>{" "}
              guide today!
            </h2>
            <ul className="inline-flex" >
              <li>
                <input
                  onChange={formControl}
                  name="email"
                  type="text"
                  className="  input-footer  mt-1 md:mt-4 lg:mt-4 2xl:mt-4 md:py-3 md:h-[52px] 2xl:h-[85px] w-[147px] md:w-[277px]  lg:w-[320px] 2xl:w-[545px] border-2 border-green h-[25px]  "
                  // placeholder="Please enter your email address..."
                  placeholder={footerData?.[0]?.VMealsGuideInputPlaceholderText}
                /> </li>
              <li className=" ml-1 md:ml-4" >
                <button disabled={isDisabled} onClick={CallSubmitForm} class="bg-green  f-f-b text-xsone md:text-base 2xl:text-lg  md:mt-4 text-white lg:mt-4   2xl:mt-5 2xl:h-[79px] h-[25px] w-[60px] md:h-[52px] md:w-[143px] 2xl:w-[219px] mt-1 rounded-full sub ">
                  {/* Subscribe */}
                  {footerData?.[0]?.VMealsGuideInputButtonTitle}
                </button>
              </li>
            </ul>

          </div>
        </div>

        <div className="bg-green-dark py-1 md:py-5 ">
          <div className="w-11/12 2xl:max-w-[1600px] ml-auto mr-auto">
            <div className="grid grid-cols-12  gap-2   ">
              <div className="col-span-4 md:col-span-4 lg:col-span-6 xl:col-span-4 2xl:col-span-5   ">
                <a
                  href="#"
                  className=" relative top-[-5px] md:top-[0px] lg:top-[12px] text-white  text-xsvsmall md:text-xs lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b "
                >
                  {/* VMeals - © All Rights Reserved - 2022 */}
                  {tradeMarkData?.[0]?.CopyRightText}
                </a>
              </div>
              <div className=" col-span-8 md:col-span-8 lg:col-span-6 xl:col-span-8 2xl:col-span-7 text-center   ">
                <ul className="inline-flex">
                  {/* <li>
                  <a
                    href="#"
                    className=" text-white  text-xsvsmall md:text-sm lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b ml-4 md:ml-8  text-center"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
              <Link href="/servicedubai" className=" text-white  text-xsvsmall md:text-sm lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b ml-4 md:ml-8 text-center" >
              Terms & Conditions
              </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-white  text-xsvsmall md:text-sm lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b ml-4 md:ml-8 text-center"
                  >
                    Sitemap
                  </a>
                </li> */}

                  {
                    tradeMarkData?.[0]?.FooterList?.map((footeritem) => (
                      <li>
                        <Link
                          href={`${footeritem?.ItemLink}`}
                          className="text-white  text-xsvsmall md:text-xs lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b ml-2 md:ml-4 xl:ml-8  text-center relative top-[-5px] md:top-[0px] lg:top-[12px]"
                        >
                          {footeritem?.ItemTitle}
                        </Link>
                      </li>
                    ))
                  }
                  {/* <li>
                    <Link href="/termcondition" className="text-white  text-xsvsmall md:text-xs lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b ml-2 md:ml-4 xl:ml-8  text-center relative top-[-5px] md:top-[0px] lg:top-[12px]" >
                      Refund & Cancellation Policy
                    </Link>
                  </li> */}
                  <li>
                    <img src="/images/VIsa-Logo.png" className="    w-[24px] md:w-[40px] lg:w-[60px] 2xl:w-[100px] h-auto ml-2 md:ml-4 xl:ml-8  cursor-pointer " />

                  </li>
                  <li>
                    <img src="/images/Mastercard-Logo.png" className="  w-[24px]  md:w-[40px] lg:w-[60px] 2xl:w-[100px] h-auto  ml-2 md:ml-4 xl:ml-8 cursor-pointer " />

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whtsapps />
    </>
  );
}



export async function getServerSideProps() {
  try {

    let icons = await fetch(vmealsIcon)
    let footerData = await fetch(vmealsguide)
    let footerTradeMarkSection = await fetch(Footer)
    let data = await icons.json()
    let fData = await footerData.json()
    let tradmark = await footerTradeMarkSection.json()


    return {
      props: { socialMediaIcon: { ...data?.docs }, footerData: { ...fData?.docs }, tradmark: { ...tradmark?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { socialMediaIcon: [], footerData: {} }
    }
  }

}