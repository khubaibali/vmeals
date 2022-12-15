import React, { useEffect, useState } from 'react'

export default function Whtsapps() {
  const moveup = () => {
    scrollTo(0, 0)
  }
  const [showBtn , setShowBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  return (
    <div>
      <a href='https://wa.me/+971562922081' target={"_blank"} className="fixed right-5 top-[57%] cursor-pointer z-[9999] ">
        <img alt=""
          src="/images/WhatsApp-Floating-Button.png"
          className=" hidden md:block w-[40px] lg:w-[48px] xl:w-[68px] 2xl:w-[90px] h-auto   "
        />
      </a>
      {showBtn &&
        <button className="fixed right-5 bottom-[4%] cursor-pointer z-[9999]" onClick={() => moveup()}>
          <img alt=""
            src="/images/Scroll-Up-Floating-Button.png"
            className=" hidden md:block w-[40px] lg:w-[48px] xl:w-[68px] 2xl:w-[92px] h-auto   "
          />
        </button>
      }
    </div>
  )
}