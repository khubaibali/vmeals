import React from "react";
import { vmealsFAQ } from '../../../src/lib/APICommunications';
import DropDown from "../Common/DropDown";
export default function Questions({ faqQuestions=[{}] }) {
  //console.log('question component', faqQuestions)
  const [openTab, setOpenTab] = React.useState(0);

  return (
    <div className="relative  ">
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 md:my-20">
        <h2 className="  text-base  sm:text-3xl 2xl:text-4xl f-f-li text-green text-center  tracking-[1px] lg:tracking-[0.22em] ">
          {/* FREQUENTLY ASKED QUESTIONS */}
          {faqQuestions[0]?.VMealsFaqsTitle}
        </h2>
        </div>
        {/* code testing */}
        <div className="question-bg-drp" >

        <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 ">
        <div className="flex flex-wrap mt-5 md:mt-16  ">
          <div className="w-full z-10  ">
            <div className="no-scrollbar overflow-x-auto hidescrol">
              <div className=" faqscrol ">
                <ul
                  className="flex mb-0 list-none flex-wrap   flex-row border-2 rounded-[30px] bg-white border-green "
                  role="tablist"
                >
                  {faqQuestions[0]?.VMealsFaqsList?.map((Item, index) => (
                    <li key={Item?.key} className="  flex-auto text-center">
                      <a
                        className={
                          "f-f-b  text-sm md:text-smtwo text-center lg:text-base 2xl:text-2xl  px-[22px] py-[19px] md:py-4 2xl:px-5 2xl:py-7  block leading-normal rounded-[30px] " +
                          (openTab === index
                            ? "text-white bg-green rounded-[30px]"
                            : "text- bg-white rounded-[30px] ")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(index);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        {Item?.VMealsFaqsText}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0 break-words  w-12/12 md:w-10/12 2xl:w-9.5/12 ml-auto mr-auto mb-6 ">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={"block"}
                    id="link1"
                  >
                    <ul className="mt-0 md:mt-14">

                      {faqQuestions[0]?.VMealsFaqsList[openTab]?.VMealsFaqsItemList?.map((faq, index) => (
                        <li key={faq.id} className={index !== 0 ? " mt-5" : ""}>
                          <DropDown title={faq?.VMealsFaqsItemTitle}>{faq?.VMealsFaqsItemDescription}</DropDown>
                        </li>
                      ))}

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* code testing ended */}
    
      {/* <img
        src="/images/faqtabbg.png"
        className="2xl:w-[965px]  hidden md:block 2xl:h-[823px] xl:w-[662px]  xl:h-[523px] md:w-[398px] lg:w-[487px]  md:h-[497px] absolute top-[100px] z-[-1px]   "
      />
      <img
        src="/images/FAQ Mobile Shape.png"
        className="w-full md:hidden h-[372px] absolute top-[100px] z-[-1px]  "
      /> */}
    </div>
  );
}


export async function getServerSideProps() {
  try {
    let data = await fetch(vmealsFAQ)
    data = await data.json()

    return {
      props: { faqQuestions: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { faqQuestions: {} }
    }
  }

}