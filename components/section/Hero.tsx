import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="flex mt-24">
        <div className="lg:basis-[40%] w-full mx-auto space-y-10">
          <div className="btn-1 ">Sale 70%</div>
          <h2>An Industrial Take on Streetwear</h2>
          <p className="lg:max-w-xs">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <button className="btn-2">
            <ShoppingCart className="inline" />
            <div className="font-bold inline">Start Shopping</div>
          </button>
          <div className="flex lg:gap-4 justify-between">
            <Image src={"/Featured1.webp"} alt="1" width={100} height={50} />
            <Image src={"/Featured2.webp"} alt="1" width={100} height={50} />
            <Image src={"/Featured3.webp"} alt="1" width={100} height={50} />
            <Image src={"/Featured4.webp"} alt="1" width={100} height={50} />
          </div>
        </div>
        <div className="lg:basis-[60%] hidden lg:flex">
          <div className="relative  flex items-center justify-center ml-32">
            <div className="absolute inset-0 w-[600px] h-[600px] bg-[#FFECE3] z-[-1] rounded-full"></div>
            <Image
              className="object-cover z-10 h-[600px] w-[600px] -mt-14 ml-20"
              src={"/header.webp"}
              alt="banner image"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
