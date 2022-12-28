import RTFMapping from "../Common/RTFMapping"
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
const ImageBaseURL = process.env.NEXT_PUBLIC_BASE_URL_IMAGE

const SeoPages = ({ seoPagesData = [] }) => {
    console.log("seo component ", seoPagesData)
    let alternate = false
    return (
        <div>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-lg mt-2 md:mt-7 leading-[25px] text-center xl:text-left ">
                {
                    <RTFMapping data={seoPagesData?.MainContentParagraph} />
                }
            </h2>


            <div className="grid grid-cols-12  gap-8    ">
                {
                    seoPagesData?.sections?.map((dt) => (
                        <>
                            {alternate &&
                                <div className="   col-span-12 xl:col-span-6  ">
                                    <img alt=""
                                        src={`${ImageBaseURL}${dt?.Image?.url}`}
                                        className="w-full h-auto ml-auto mr-auto mt-5 md:mt-10 xl:mt-40 2xl:mt-20 "
                                    />
                                    <div class="text-center" bis_skin_checked="1">
                                        <a href={`/${dt?.ButtonUrl}`} style={{backgroundColor:dt?.color}} className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-sky-nev shadow-lg rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[60px] 2xl:py-[23px] mt-5 2xl:mt-8">
                                        {dt?.buttonText}
                                        </a>
                                    </div>
                                </div>
                            }
                            <div className="   col-span-12 xl:col-span-6  mt-10">
                                <RTFMapping data={dt.Paragraph} />
                            </div>
                            {
                                !alternate &&
                                <div className="   col-span-12 xl:col-span-6  ">
                                    <img alt=""
                                        src={`${ImageBaseURL}${dt?.Image?.url}`}
                                        className="w-full h-auto ml-auto mr-auto mt-5 md:mt-10 xl:mt-40 2xl:mt-20 "
                                    />
                                    <div class="text-center" bis_skin_checked="1">
                                        <a href={`/${dt?.ButtonUrl}`} style={{backgroundColor:dt?.color}} class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-sky-nev shadow-lg rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[60px] 2xl:py-[23px] mt-5 2xl:mt-8">
                                           {dt?.buttonText}
                                        </a>
                                    </div>
                                </div>
                            }
                            {alternate = !alternate}
                        </>
                    ))
                }


            </div>
        </div>
    );
}

export default SeoPages