"use client";
import Button from "../../components/function/Button";
import Image from "next/image";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";
import {
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "@/store/slice/cartSlice";

// import { urlForImage } from "../../../sanity/lib/image";

interface IProduct {
  title: string;
  image: IImage;
  alt: string;
  quantity: number;
  category: {
    name: string;
  };
  price: number;
  ptype: {
    name: string;
  };
  _id: string;
}

const Cart = () => {
  const { allCart, totalQuantity, totalPrice } = useSelector(
    (state: any) => state.store
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [allCart, dispatch]);

  // dispatch(getCartTotal());
  return (
    <>
      <div>Cart - {allCart.length} items</div>
      <div className="grid xl:grid-3col sm:grid-cols-1 md:grid-cols-2 mt-40 gap-x-10 gap-y-12">
        <div className="flex flex-col gap-x-10 gap-y-10">
          {allCart.map((data: any) => (
            <div
              key={data._id}
              className="flex sm:flex-col xl:flex-row gap-x-10"
            >
              <div className="">
                <Image
                  // @ts-ignore
                  src={urlForImage(data.image)}
                  alt="ev"
                  height={300}
                  width={200}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-row sm:gap-x-30 lg:gap-x-36">
                <div className=" flex flex-col gap-y-5">
                  <h5>{data.title}</h5>
                  <h1>{data.ptype.name}</h1>
                  <h1>Delivery Estimation</h1>
                  <h1>5 Working Days</h1>
                  <h1>{data.price}</h1>
                </div>
                <div className="flex flex-col justify-between">
                  <MdDelete
                    className="text-4xl ml-auto cursor-pointer"
                    onClick={() => dispatch(removeItem(data._id))}
                  />
                  <div className="flex gap-x-2 justify-center items-center text-lg">
                    <div
                      className="h-5 w-5 rounded-full shadow-2xl text-4xl bg-gray-200 text-black p-5 flex justify-center items-center cursor-pointer"
                      onClick={() => dispatch(decreaseItemQuantity(data._id))}
                    >
                      -
                    </div>
                    <div onChange={() => null}>{data.quantity}</div>
                    <div
                      className="h-5 w-5 rounded-full shadow-2xl text-4xl  bg-white text-black p-5 flex justify-center cursor-pointer items-center border border-black"
                      onClick={() => dispatch(increaseItemQuantity(data._id))}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* first */}
          {/* <div className="flex sm:flex-col xl:flex-row gap-x-10">
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
        </div> */}
          {/* second */}
          {/* <div className="flex sm:flex-col lgl:flex-row gap-x-10">
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
        </div> */}
        </div>

        <div className="bg-[#FBFCFF] flex flex-col gap-y-4 p-5">
          <h5>Order Summary</h5>
          <div className="flex gap-x-28">
            <h1>Quantity</h1>
            <h1> {totalQuantity}</h1>
          </div>
          <div className="flex gap-x-28">
            <h1>Sub Total</h1>
            <h1> $ {totalPrice}</h1>
          </div>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Cart;
