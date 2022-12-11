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
        src="/images/Google-Reviews.png"
        alt=""
        className="w-full h-auto lg:hidden xl:my-10 2xl:my-20"
      />
    </div>
  );
}
