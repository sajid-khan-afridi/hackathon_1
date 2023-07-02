import Button from "../../components/function/Button";
import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <div className="grid xl:grid-3col sm:grid-cols-1 md:grid-cols-2 mt-40 gap-x-10 gap-y-12">
      <div className="flex flex-col gap-x-10 gap-y-10">
        {/* first */}
        <div className="flex sm:flex-col xl:flex-row gap-x-10">
          <div className="">
            <Image
              src={"/3.png"}
              alt="ev"
              height={300}
              width={200}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-row sm:gap-x-30 lg:gap-x-36">
            <div className=" flex flex-col gap-y-5">
              <h5>Brushed Raglan Sweatshirt</h5>
              <h1>Dress</h1>
              <h1>Delivery Estimation</h1>
              <h1>5 Working Days</h1>
              <h1>$195</h1>
            </div>
            <div className="flex flex-col justify-between">
              <MdDelete className="text-4xl ml-auto" />
              <div className="flex gap-x-2 justify-center items-center text-lg">
                <div className="h-5 w-5 rounded-full shadow-2xl text-4xl bg-gray-200 text-black p-5 flex justify-center items-center cursor-pointer">
                  -
                </div>
                1
                <div className="h-5 w-5 rounded-full shadow-2xl text-4xl  bg-white text-black p-5 flex justify-center cursor-pointer items-center border border-black">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="flex sm:flex-col lgl:flex-row gap-x-10">
          <div className="">
            <Image
              src={"/3.png"}
              alt="ev"
              height={300}
              width={200}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-row sm:gap-x-30 lg:gap-x-36">
            <div className=" flex flex-col gap-y-5">
              <h5>Brushed Raglan Sweatshirt</h5>
              <h1>Dress</h1>
              <h1>Delivery Estimation</h1>
              <h1>5 Working Days</h1>
              <h1>$195</h1>
            </div>
            <div className="flex flex-col justify-between">
              <MdDelete className="text-4xl ml-auto" />
              <div className="flex gap-x-2 justify-center items-center text-lg">
                <div className="h-5 w-5 rounded-full shadow-2xl text-4xl bg-gray-200 text-black p-5 flex justify-center items-center cursor-pointer">
                  -
                </div>
                1
                <div className="h-5 w-5 rounded-full shadow-2xl text-4xl  bg-white text-black p-5 flex justify-center cursor-pointer items-center border border-black">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FBFCFF] flex flex-col gap-y-4 p-5">
        <h5>Order Summary</h5>
        <div className="flex gap-x-28">
          <h1>Quantity</h1>
          <h1> 1 Product</h1>
        </div>
        <div className="flex gap-x-28">
          <h1>Sub Total</h1>
          <h1> $545</h1>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Cart;
