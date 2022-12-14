export default function Pagination({ currentPage, totalPage}) {
   
    let currentPageNumberCss = "h-[40px] w-[40px]  2xl:h-[50px] 2xl:w-[50px]  bg-white text-green shadow-lg  text-base 2xl:text-xl rounded-[100%] ml-3"
    let pageNumberCss = "h-[40px] w-[40px]  2xl:h-[50px] 2xl:w-[50px]  bg-green text-white  text-base 2xl:text-xl rounded-[100%] ml-3  "
    return (
        <>
            <div className="text-center mt-10 2xl:mt-20" >
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">


                        {[...Array(totalPage)].map((x, i) =>

                            <li>
                                <button href="#" className={pageNumberCss}>{ i+1 }</button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}