import { useState } from "react"
import RTFMapping from "./RTFMapping"

export default function DropDown({ children, title, showRTF }) {
    const [isOpen, setOpen] = useState(false)
    console.log("faqans", children)
    return (
        <>
            <button
                className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant-2  text-center  focus:outline-none   faq-btn  "
                type="button"
                onClick={() => { setOpen(!isOpen) }}
            >
                {title}
                <img
                    src="/images/faqarrow.png"
                    className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                />{" "}
            </button>

            <div
                id="dropdownNavbar"
                className={`${isOpen ? "" : "hidden"
                    }  z-10  block font-normal divide-y divide-gray-100 rounded-[20px] shadow  p-5  bg-white  w-full `}
            >
                <h2 className=" f-f-r text-black text-tiny 2xl:text-lg  text-center  leading-[25px] ">
                    {showRTF ?
                        <RTFMapping data={children}/>
                        : 
                        children 
                    }
                </h2>
            </div>
        </>
    )
}


