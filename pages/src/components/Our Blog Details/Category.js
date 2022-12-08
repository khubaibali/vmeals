import React from "react";
import Categorylist from "./Categorylist";

export default function Category() {
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 sm:my-20">
        <div className="grid grid-cols-12  gap-8  ">
          <div className="   col-span-12 lg:col-span-8 xl:col-span-8  ">
            <h1 class="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center xl:text-left">
              10 Foods to Boost Your Metabolism
            </h1>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-7 leading-[23px] text-center xl:text-left ">
              Metabolism is the cornerstone for weight watchers around the
              world. It is the process by which your body converts food into
              energy. During the process, calories in the food combine with
              oxygen to release energy for your body to function. How fast your
              body burns calories depends on several factors? Some people are
              naturally gifted with an active metabolism. It also depends on
              gender, age, and physical activity. Men inherit a speedy
              metabolism than women, and once a person turns 40 the metabolism
              tends to slow down steadily. You can not control your gender, age,
              or genetics, but there are several ways to boost metabolism. For
              people trying to lose weight or watching weight, you can try
              superfoods known for their abilities to boost metabolism. Certain
              foods contain nutrients that help in increasing the body's
              metabolism. Adding these foods to your daily meal plan helps you
              lose weight and prevent excess weight gain. However, it doesn't
              mean you overeat these foods. Too much of anything in your diet do
              more harm than good. For losing weight, it is important that you
              add these foods to your weight-loss meal plan in moderation.
            </h2>

            <h1 class="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center xl:text-left mt-20 ">
              10 Foods that speed up your metabolism
            </h1>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-7 leading-[23px] text-center xl:text-left ">
              There is no magic ingredient or recipe that can ease your
              weight-loss journey. Healthy eating goes a long way in losing
              weight permanently. It keeps you full, maintains your sugar level,
              and supports a healthy metabolism. Here are some of the best
              healthy metabolism-boosting foods that increase metabolic
              function.
            </h2>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-7 leading-[23px] text-center xl:text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              tellus cras adipiscing enim eu turpis egestas. Semper eget duis at
              tellus at urna condimentum mattis. Maecenas accumsan lacus vel
              facilisis. Elementum nibh tellus molestie nunc non blandit.
              Dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in. Venenatis tellus in metus vulputate eu scelerisque
              felis. Ut pharetra sit amet aliquam id diam maecenas. Metus
              vulputate eu scelerisque felis imperdiet proin fermentum leo vel.
              Eu non diam phasellus vestibulum lorem sed risus ultricies
              tristique. Quis commodo odio aenean sed adipiscing diam donec
              adipiscing. Placerat vestibulum lectus mauris ultrices eros in
              cursus turpis massa. Scelerisque felis imperdiet proin fermentum
              leo vel orci porta non. Tellus in hac habitasse platea dictumst
              vestibulum rhoncus est pellentesque.
            </h2>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-7 leading-[23px] text-center xl:text-left ">
              Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
              consequat. Vulputate sapien nec sagittis aliquam malesuada
              bibendum arcu vitae. Lorem ipsum dolor sit amet consectetur
              adipiscing elit. Malesuada proin libero nunc consequat interdum
              varius. Auctor urna nunc id cursus metus aliquam. Egestas pretium
              aenean pharetra magna. Consequat mauris nunc congue nisi vitae
              suscipit tellus mauris. Elementum sagittis vitae et leo. Ipsum
              dolor sit amet consectetur. Amet dictum sit amet justo donec enim.
              Bibendum arcu vitae elementum curabitur. Aliquet risus feugiat in
              ante metus. Ullamcorper a lacus vestibulum sed arcu. Sed blandit
              libero volutpat sed cras. Euismod nisi porta lorem mollis aliquam
              ut porttitor. Vel elit scelerisque mauris pellentesque. Velit
              egestas dui id ornare arcu odio ut sem. Phasellus egestas tellus
              rutrum tellus pellentesque.
            </h2>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-7 leading-[23px] text-center xl:text-left ">
              Porta nibh venenatis cras sed felis eget velit aliquet. Mauris
              pharetra et ultrices neque ornare aenean euismod. Ut diam quam
              nulla porttitor. Quis blandit turpis cursus in hac habitasse
              platea dictumst. Velit euismod in pellentesque massa placerat duis
              ultricies lacus sed. Faucibus a pellentesque sit amet. Vulputate
              mi sit amet mauris commodo quis imperdiet massa tincidunt.
              Adipiscing enim eu turpis egestas pretium aenean pharetra magna
              ac. Diam sit amet nisl suscipit adipiscing bibendum est ultricies
              integer. Nulla facilisi etiam dignissim diam quis enim lobortis
              scelerisque fermentum.
            </h2>
          </div>
          <div className="   col-span-12 lg:col-span-4 xl:col-span-4  ">
            <h1 class="  text-base  sm:text-2xl xl:text-2xl 2xl:text-4xl f-f-li  uppercase text-green tracking-[1px] lg:tracking-[0.22em] ">
              Categories
            </h1>
            <Categorylist />
          </div>
        </div>
      </div>
    </>
  );
}
