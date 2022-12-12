import Link from "next/link";

const Steps = ({ step }) => {
    return (
        <>
            <div className="no-scrollbar overflow-x-auto hidescrol">
                <div className=" planscrol ">
                    <div className={`grid grid-cols-10  lg:gap-4  border-2 border-green   rounded-full bg-white shadow-lg `}>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            <div className="relative">
                                <div className="text-left" >
                                    <Link href="/meal-plans">
                                        <button class={`  text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-b  ${step == 6 ? 'green-gradiant-2   text-white' : 'text-black  '} rounded-full    px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px]`}>
                                            <ul className="inline-flex">
                                                <li>
                                                    <img
                                                        src={`${step == 6 ? "/images/choose-plan-active 1.png" : "/images/choose-plan-inactive-diet.png" } `}
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
                                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0 lg:-right-2 xl:right-0 "
                                />
                            </div>
                        </div>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            {/* <Link href="/classicdiet" > */}
                            <div className="relative">
                                <button class={` text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r  ${step == 1 ? 'green-gradiant-2   text-white' : 'text-black  '}  rounded-full    px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px]`}>
                                    <ul className="inline-flex">
                                        <li>
                                            <img
                                                src={`${step == 1 ? "/images/customize-active 1clasic.png" : "/images/customize-inactive.png"}`}
                                                className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                                            />
                                        </li>
                                        <li className="mt-2 md:mt-2.5 lg:mt-3 ml-2 lg:ml-4">
                                            Customise Plan
                                        </li>
                                    </ul>
                                </button>
                                <img
                                    src="/images/arrowplans.png"
                                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-3 lg:right-0 "
                                />
                            </div>
                            {/* </Link> */}
                        </div>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            <div className="relative">
                                {/* <Link href="/personalInformation" > */}
                                <button class=" text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px]">
                                    <ul className="inline-flex">
                                        <li>
                                            <img
                                                src="/images/Sign-Up-Login-inactive.png"
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
                                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0  lg:-right-4 2xl:-right-6 "
                                />
                            </div>
                        </div>
                        <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                            <div className="relative">
                                {/* <Link href="/deliveryInformation" > */}
                                <button class=" text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px]">
                                    <ul className="inline-flex">
                                        <li>
                                            <img
                                                src="/images/delivery-icon-inactive.png"
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
                            <button class=" text-smnew md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth py-[10px] md:py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px]">
                                <ul className="inline-flex">
                                    <li>
                                        <img
                                            src="/images/summary-inactive.png"
                                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                                        />
                                    </li>
                                    <li className="mt-2 md:mt-2.5 lg:mt-3 ml-2 lg:ml-4">Order Summary</li>
                                </ul>
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps;