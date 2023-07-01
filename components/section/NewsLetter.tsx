import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-40 gap-y-8 relative ">
      <h6 className="z-10 sm:text-center">Subscribe Our Newsletter</h6>
      <p className="z-10 sm:text-center">
        Get the latest information and promo offers directly
      </p>
      <div className="flex gap-x-4 sm:flex-col sm:gap-y-5 sml:flex-row justify-center items-center">
        <input
          placeholder="Input email address"
          className="border border-black z-10 w-[300px] px-5 py-2 text-sm text-black"
        />
        <button className="btn-2 z-10 sm:w-32">
          Get Started
        </button>
      </div>
      <div
        className="sml:text-[120px] font-bodyFont font-bold z-0
      text-[#F2F3F7] absolute lg:top-[10%] lg:left-[25%] sm:text-7xl sm:left-[0%] sm:top-[44%] sml:top-[10%] sml:left-[10%]"
      >
        Newsletter
      </div>
    </div>
  );
};

export default NewsLetter;
