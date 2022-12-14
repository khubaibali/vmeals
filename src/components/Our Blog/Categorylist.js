import React from "react";

export default function Categorylist({ categoriesAll }) {
  console.log("categoriesAll",categoriesAll)
  const groups = categoriesAll?.docs?.reduce((groups, item) => {
    const group = (groups[item.VmealsBlogCategory.VmealsBlogsCategoryName] || []);
    group.push(item);
    groups[item.VmealsBlogCategory.VmealsBlogsCategoryName] = group;
    return groups;
  }, {});

  console.log('GROUPS',groups)

  return (
    <div>
      <ul className="mt-10">
        { Object.keys(groups)?.map((cat)=>(
          <li className="mt-4">
          {/* inner started */}
          <ul className="inline-flex">
            <li>
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.40533 6.20005L3.62825 1.42297C3.33513 1.12999 2.93763 0.965448 2.5232 0.965546C2.10876 0.965643 1.71134 1.13037 1.41836 1.42349C1.12538 1.71661 0.96084 2.11411 0.960938 2.52855C0.961035 2.94298 1.12576 3.3404 1.41888 3.63339L6.19596 8.40943C6.24446 8.45781 6.28294 8.51528 6.3092 8.57856C6.33546 8.64184 6.34897 8.70967 6.34897 8.77818C6.34897 8.84668 6.33546 8.91452 6.3092 8.9778C6.28294 9.04107 6.24446 9.09855 6.19596 9.14693L1.41888 13.923C1.12576 14.2159 0.961035 14.6134 0.960938 15.0278C0.96084 15.4422 1.12538 15.8397 1.41836 16.1329C1.71134 16.426 2.10876 16.5907 2.5232 16.5908C2.93763 16.5909 3.33513 16.4264 3.62825 16.1334L8.40533 11.3563C9.08786 10.6719 9.47114 9.74475 9.47114 8.77818C9.47114 7.8116 9.08786 6.88446 8.40533 6.20005Z"
                  fill="#41A53D"
                />
              </svg>
            </li>
            <li>
              <h2 class="f-f-li text-black-dark ml-4  text-sm md:text-tiny 2xl:text-lg   ">
                {cat} ({groups[cat].length})
              </h2>
            </li>
          </ul>
          {/* inner ended */}
        </li>
        ))}
        <li>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.40533 6.20005L3.62825 1.42297C3.33513 1.12999 2.93763 0.965448 2.5232 0.965546C2.10876 0.965643 1.71134 1.13037 1.41836 1.42349C1.12538 1.71661 0.96084 2.11411 0.960938 2.52855C0.961035 2.94298 1.12576 3.3404 1.41888 3.63339L6.19596 8.40943C6.24446 8.45781 6.28294 8.51528 6.3092 8.57856C6.33546 8.64184 6.34897 8.70967 6.34897 8.77818C6.34897 8.84668 6.33546 8.91452 6.3092 8.9778C6.28294 9.04107 6.24446 9.09855 6.19596 9.14693L1.41888 13.923C1.12576 14.2159 0.961035 14.6134 0.960938 15.0278C0.96084 15.4422 1.12538 15.8397 1.41836 16.1329C1.71134 16.426 2.10876 16.5907 2.5232 16.5908C2.93763 16.5909 3.33513 16.4264 3.62825 16.1334L8.40533 11.3563C9.08786 10.6719 9.47114 9.74475 9.47114 8.77818C9.47114 7.8116 9.08786 6.88446 8.40533 6.20005Z"
              fill="#41A53D"
            />
          </svg>
        </li>
        <li className="mt-4">
          {/* inner started */}
          <ul className="inline-flex">
            <li>
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.40533 6.20005L3.62825 1.42297C3.33513 1.12999 2.93763 0.965448 2.5232 0.965546C2.10876 0.965643 1.71134 1.13037 1.41836 1.42349C1.12538 1.71661 0.96084 2.11411 0.960938 2.52855C0.961035 2.94298 1.12576 3.3404 1.41888 3.63339L6.19596 8.40943C6.24446 8.45781 6.28294 8.51528 6.3092 8.57856C6.33546 8.64184 6.34897 8.70967 6.34897 8.77818C6.34897 8.84668 6.33546 8.91452 6.3092 8.9778C6.28294 9.04107 6.24446 9.09855 6.19596 9.14693L1.41888 13.923C1.12576 14.2159 0.961035 14.6134 0.960938 15.0278C0.96084 15.4422 1.12538 15.8397 1.41836 16.1329C1.71134 16.426 2.10876 16.5907 2.5232 16.5908C2.93763 16.5909 3.33513 16.4264 3.62825 16.1334L8.40533 11.3563C9.08786 10.6719 9.47114 9.74475 9.47114 8.77818C9.47114 7.8116 9.08786 6.88446 8.40533 6.20005Z"
                  fill="#41A53D"
                />
              </svg>
            </li>
            <li>
              <h2 class="f-f-li text-black-dark ml-4  text-sm md:text-tiny 2xl:text-lg   ">
                Diets (12)
              </h2>
            </li>
          </ul>
          {/* inner ended */}
        </li>
        
      </ul>
      <h1 class="  text-base  sm:text-2xl xl:text-3xl 2xl:text-4xl f-f-li text-green text-center lg:text-left uppercase  tracking-[1px] lg:tracking-[0.22em] mt-10 2xl:mt-24 ">
        Recent posts
      </h1>
      {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

      <div className=" mt-8  ">
        {/* grid testing */}
        <div className="grid grid-cols-12 gap-4 2xl:gap-0    ">
          <div className="   col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-5  ">
            <img
              src="/images/recentpost.png"
              className=" 2xl:w-[180px] 2xl:h-[113px] h-auto w-full   "
            />
          </div>
          <div className="   col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-6  ">
            <button class=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]   ">
              Food
            </button>

            <h2 class="   f-f-b text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
              10 Foods to Speed Up Your Metabolism
            </h2>
          </div>
        </div>
        {/* gridtestinf end */}

        <div className="border border-green my-5 "></div>
      </div>
      <div className=" mt-8  ">
        {/* grid testing */}
        <div className="grid grid-cols-12 gap-4 2xl:gap-0    ">
          <div className="   col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-5  ">
            <img
              src="/images/recentpost.png"
              className=" 2xl:w-[180px] 2xl:h-[113px] h-auto w-full   "
            />
          </div>
          <div className="   col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-6  ">
            <button class=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]   ">
              Nutrition
            </button>

            <h2 class="   f-f-b text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
              How Much Protein Do I Need?
            </h2>
          </div>
        </div>
        {/* gridtestinf end */}

        <div className="border border-green my-5 "></div>
      </div>
      <div className=" mt-8  ">
        {/* grid testing */}
        <div className="grid grid-cols-12 gap-4 2xl:gap-0    ">
          <div className="   col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-5  ">
            <img
              src="/images/recentpost.png"
              className=" 2xl:w-[180px] 2xl:h-[113px] h-auto w-full   "
            />
          </div>
          <div className="   col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-6  ">
            <button class=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]   ">
              Vegetarian
            </button>

            <h2 class="   f-f-b text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
              Is Vegetarian Diet Better for Athletes?
            </h2>
          </div>
        </div>
        {/* gridtestinf end */}

        <div className="border border-green my-5 "></div>
      </div>
      <div className=" mt-8  ">
        {/* grid testing */}
        <div className="grid grid-cols-12 gap-4 2xl:gap-0    ">
          <div className="   col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-5  ">
            <img
              src="/images/recentpost.png"
              className=" 2xl:w-[180px] 2xl:h-[113px] h-auto w-full   "
            />
          </div>
          <div className="   col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-6  ">
            <button class=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]   ">
              Healthy Food
            </button>

            <h2 class="   f-f-b text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
              Healthy Dinner for Weight Loss
            </h2>
          </div>
        </div>
        {/* gridtestinf end */}

        <div className="border border-green my-5 "></div>
      </div>
    </div>
  );
}
