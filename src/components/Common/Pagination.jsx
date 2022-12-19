export default function Pagination({ onPage, setPage, totalPages }) {
    totalPages = totalPages/10
    let currentPageNumberCss = "h-[40px] w-[40px]  2xl:h-[50px] 2xl:w-[50px]  bg-white text-green shadow-lg  text-base 2xl:text-xl rounded-[100%] ml-3"
    let pageNumberCss = "h-[40px] w-[40px]  2xl:h-[50px] 2xl:w-[50px]  bg-green text-white  text-base 2xl:text-xl rounded-[100%] ml-3  "

    
    return (
        <>
            <div className="text-center mt-10 2xl:mt-20" >
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">

                    {onPage+1 !== 1 && <li><button  className={pageNumberCss} onClick={() => { setPage(0) }} >{1}</button>...</li>}
                        {[...Array(totalPages)].map((x, i) => (
                            ((onPage - i <=3 ) && ((i) < (onPage+5))) ?
                                <li>
                                    <button className={(i) == onPage ? currentPageNumberCss : pageNumberCss} onClick={() => { setPage(i) }} >{i + 1}</button>
                                </li> : null
                        )
                        )}
                        {onPage+1 !== totalPages && <li>...<button  className={pageNumberCss} onClick={() => { setPage(totalPages) }} >{totalPages}</button></li>}
                    </ul>
                </nav>
            </div>
        </>
    )
}