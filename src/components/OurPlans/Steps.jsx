import Link from "next/link";

const Steps = ({ step, setStep }) => {
    //console.log("setStep(1)", setStep)
    return (
        <>
            <div className="no-scrollbar overflow-x-auto hidescrol">
                <div className=" planscrol ">
                    <div className={`grid grid-cols-10  lg:gap-4  border-2 border-green   rounded-full bg-white shadow-lg `}>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            <div className="relative">
                                <div className="text-left" >
                                    <Link href="/meal-plans">
                                        <button className={`    ${step == 0 ? ' text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-b text-white green-gradiant-2 rounded-full px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px]  ' : 'text-black  px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px] '} rounded-full  text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r  `}>
                                            <ul className="inline-flex">
                                                <li>
                                                    <img
                                                        src={`${step == 0 ? "/images/choose-plan-active 1.png" : "/images/choose-plan-inactive-diet.png"} `}
                                                        className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                                                    />
                                                </li>
                                                <li className="mt-2 md:mt-2.5 lg:mt-3 ml-2 lg:ml-4">
                                                    Select Plan
                                                </li>
                                            </ul>
                                        </button>

                                    </Link>
                                </div>
                                <img
                                    src="/images/arrowplans.png"
                                    className={ ` w-[36px] xl:w-[60px] absolute top-[50%]  right-0 lg:-right-2 xl:right-[20px] ${step == 0 ? "  xl:right-0" : "  w-[36px] xl:w-[60px] absolute top-[50%] right-[31px] md:right-[21px] lg:right-6 " }` }
                                />
                            </div>
                        </div>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            {/* <Link href="/classicdiet" > */}
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        if (step == 2 || step == 3 || step == 4) {
                                            setStep(1)
                                        }
                                    }}
                                    className={` text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r  ${step == 1 ? ' text-smtwo md:text-xstwo green-gradiant-2 lg:text-xsone xl:text-smtwo 2xl:text-base f-f-b text-white rounded-full px-[15px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[30px] 2xl:h-[74px] ' : 'px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px]  2xl:h-[74px]  text-black '}  rounded-full    `}>
                                    <ul className="inline-flex">
                                        <li>
                                            <img
                                                src={`${step == 1 ? "/images/customize-active 1clasic.png" : "/images/customize-inactive.png"}`}
                                                className= {`w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3`}  
                                            />
                                        </li>
                                        <li className="mt-2 md:mt-2.5 lg:mt-3 ml-2 lg:ml-4">
                                            Customise Plan
                                        </li>
                                    </ul>
                                </button>
                                <img
                                    src="/images/arrowplans.png"
                                    className= {`${step == 1 ?  "w-[36px] xl:w-[60px] absolute top-[50%] right-3 md:right-[-11px] lg:right-0" :"w-[36px] xl:w-[60px] absolute top-[50%] right-3  lg:right-0"} `} 
                                />
                            </div>
                            {/* </Link> */}
                        </div>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            <div className="relative">
                                {/* <Link href="/personalInformation" > */}
                                <button
                                    onClick={() => {
                                        if (step == 3 || step == 4) {
                                            setStep(2)
                                        }
                                    }}
                                    className={` ${step == 2 ? 'green-gradiant-2   text-white  f-f-b 2xl:px-[20px]  md:px-[18px]   px-[13px]  addwidth py-[10px] md:py-[3px] lg:py-[6px]  2xl:h-[74px]' : 'text-black 2xl:px-[49px] md:px-[25px]  px-[32px]  addwidth py-[10px] md:py-[3px] lg:py-[6px]  2xl:h-[74px]'} text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r  rounded-full   `}>
                                    <ul className="inline-flex">
                                        <li>
                                            <img
                                                src={`${step == 2 ? "/images/Sign-Up-Login-active 1.png" : "/images/Sign-Up-Login-inactive.png"}`}
                                                className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                                            />
                                        </li>
                                        <li className="mt-2 md:mt-2.5 lg:mt-3 ml-2 lg:ml-4">
                                            Personal Information
                                        </li>
                                    </ul>
                                </button>
                                {/* </Link> */}
                                <img
                                    src="/images/arrowplans.png"
                                    className=  {`${step == 2 ? " w-[36px] xl:w-[60px] absolute top-[50%] right-0 md:right-[-10px]  lg:-right-4 2xl:-right-6" : "w-[36px] xl:w-[60px] absolute top-[50%] right-0  lg:-right-4 2xl:-right-6"} `} 
                                />
                            </div>
                        </div>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            <div className="relative">
                                {/* <Link href="/deliveryInformation" > */}
                                <button
                                    onClick={() => {
                                        if (step == 4) {
                                            setStep(3)
                                        }
                                    }}
                                    className={` ${step == 3 ? 'green-gradiant-2   text-white f-f-b px-[15px] md:px-[9px] xl:px-[17px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[21px]  lg:ml-[14px] xl:ml-0 2xl:ml-[14px] 2xl:h-[74px] ' : 'text-black px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px] '} text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r   rounded-full    `}>
                                    <ul className="inline-flex">
                                        <li>
                                            <img
                                                src={`${step == 3 ? "/images/delivery-icon-active 1.png" : "/images/delivery-icon-inactive.png"}`}
                                                className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                                            />
                                        </li>
                                        <li className="mt-2 md:mt-2.5 lg:mt-3 ml-2 lg:ml-4">
                                            Delivery Information
                                        </li>
                                    </ul>
                                </button>
                                {/* </Link> */}
                                <img
                                    src="/images/arrowplans.png"
                                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0  lg:-right-4 2xl:-right-6 "
                                />
                            </div>
                        </div>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            {/* <Link href="/ordersummary" > */}
                            <div className={`${step == 4 ? "text-right"  : ""}`} >
                            <button className={` ${step == 4 ? 'green-gradiant-2   text-white f-f-b  px-[37px] md:px-[29px] lg:px-[47px] xl:px-[38px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[45px] 2xl:h-[74px] ' : 'text-black   px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px] '} text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r   rounded-full ml-[16px] `}>
                                <ul className="inline-flex">
                                    <li>
                                        <img
                                            src={` ${step == 4 ? "/images/summary-active 1.png" : "/images/summary-inactive.png"}`}
                                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                                        />
                                    </li>
                                    <li className="mt-2 md:mt-2.5 lg:mt-3 ml-2 lg:ml-4">Order Summary</li>
                                </ul>
                            </button>
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps;