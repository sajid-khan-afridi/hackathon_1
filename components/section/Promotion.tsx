import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";

const Promotion = () => {
  return (
    <Wrapper>
      <div className="mt-40">
        <div className=" text-center">
          <h3 className=" ">PROMOTIONS</h3>
          <h4>Our Promotions Events</h4>
        </div>

        {/* main */}
        <div className="flex mt-8 lg:flex-row flex-col">
          {/* left */}
          <div className="lg:basis-[45%] lg:mr-9 flex flex-col justify-between">
            <div className="flex sm:flex-col sml:flex-row bg-bg1">
              <div className="lg:basis-1/2 pl-10 lg:lg:max-w-[200px] sm:w-full ">
                <h4>GET UP TO 60%</h4>
                <div className="text-lg lg:max-w-[100px]">
                  For the summer season
                </div>
              </div>
              <Image src={"/event1.webp"} alt="ev" height={250} width={250} />
            </div>
            <div className="lg:basis-1/2 text-center bg-bg4 text-white pb-5 mt-5">
              <div className=" font-bold text-4xl pt-10">GET 30% Off</div>
              <div className="mt-5 text-sm mb-4">USE PROMO CODE</div>
              <div className="bg-bg5 inline tracking-[5px] font-bold px-10 py-2 text-base rounded-md">
                DINEWEEKENDSALE
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex lg:basis-[55%] sml:flex-row sm:flex-col gap-4 sm:mt-5 lg:mt-0">
            <div className="bg-bg2 basis-1/2 mr-2 pt-4 pl-4 flex flex-col justify-between">
              <div>Flex Sweatshirt</div>
              <div>
                <span className="line-through">$100.00</span>{" "}
                <span className="font-bold ml-2">$75.00</span>
              </div>
              <Image
                src={"/event2.webp"}
                alt="ev"
                height={250}
                width={250}
                className="mt-4"
              />
            </div>
            <div className="bg-bg3 basis-1/2 ml-2 pt-4 pl-4 flex flex-col justify-between">
              <div>Flex Push Button Bomber</div>
              <div>
                <span className="line-through">$225.00</span>{" "}
                <span className="font-bold ml-2">$190.00</span>
              </div>
              <Image
                src={"/event3.webp"}
                alt="ev"
                height={250}
                width={250}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Promotion;
