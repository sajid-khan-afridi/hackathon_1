import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";

const Product = () => {
  return (
    <>
      <div className="mt-40">
        <div className=" text-center">
          <h3 className=" ">PRODUCTS</h3>
          <h4>Check What We Have</h4>
        </div>
        {/* cards */}
        <div className="flex mt-10">
          <div className="mx-auto lg:basis-1/3 lg:h-[350px] lg:w-[350px] lg:hover:scale-125 hover:scale-105 md:w-[500px] ease-in duration-500">
            <Image
              src={"/1.png"}
              alt="image"
              height={1000}
              width={800}
              className=" "
            />
            <div className="font-bold text-center">
              <div>Flex Sweatshirt</div>
              <div>$175</div>
            </div>
          </div>
          <div className="lg:flex lg:flex-col hidden lg:basis-1/3 h-[350px] w-[350px] hover:scale-125 ease-in duration-500">
            <Image
              src={"/3.png"}
              alt="image"
              height={1000}
              width={800}
              className=" "
            />
            <div className="font-bold text-center">
              <div>Flex Sweatshirt</div>
              <div>$175</div>
            </div>
          </div>
          <div className="lg:flex lg:flex-col hidden lg:basis-1/3 h-[350px] w-[350px] hover:scale-125 ease-in duration-500">
            <Image
              src={"/2.png"}
              alt="image"
              height={1000}
              width={800}
              className=" "
            />
            <div className="font-bold text-center">
              <div>Flex Sweatshirt</div>
              <div>$175</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
