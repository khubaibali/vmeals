import React from 'react'

export default function Whtsapps() {
  return (
    <div>
        <button className="fixed right-5 top-[57%] cursor-pointer z-[9999] ">
        <img alt="" 
          src="/images/WhatsApp-Floating-Button.png"
          className=" hidden md:block w-[40px] lg:w-[48px] xl:w-[68px] 2xl:w-[90px] h-auto   "
        />
      </button>
      <button className="fixed right-5 bottom-[4%] cursor-pointer z-[9999]">
        <img alt="" 
          src="/images/Scroll-Up-Floating-Button.png"
          className=" hidden md:block w-[40px] lg:w-[48px] xl:w-[68px] 2xl:w-[92px] h-auto   "
        />
      </button>
    </div>
  )
}