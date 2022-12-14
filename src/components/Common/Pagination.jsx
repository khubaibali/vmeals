export default function Pagination({ onPage, setPage, totalPages }) {

    let currentPageNumberCss = "h-[40px] w-[40px]  2xl:h-[50px] 2xl:w-[50px]  bg-white text-green shadow-lg  text-base 2xl:text-xl rounded-[100%] ml-3"
    let pageNumberCss = "h-[40px] w-[40px]  2xl:h-[50px] 2xl:w-[50px]  bg-green text-white  text-base 2xl:text-xl rounded-[100%] ml-3  "
    return (
        <>
            <div className="text-center mt-10 2xl:mt-20" >
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">


                        {[...Array(totalPages)].map((x, i) => (
                            ((onPage - i <=3 ) && ((onPage+i) < (onPage+7))) ?
                                <li>
                                    <button className={(i + 1) == onPage ? currentPageNumberCss : pageNumberCss} onClick={() => { setPage(i + 1) }} >{i + 1}</button>
                                </li> : null
                        )
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}