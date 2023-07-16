"use client";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Wrapper from "../../../components/Wrapper";
import Cart from "@/components/Cart1";
import Button from "../../../components/function/Button";
import { PiBag } from "react-icons/pi";
import React, { useEffect } from "react";
import {
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
} from "@/store/slice/cartSlice";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { MdDelete } from "react-icons/md";
import CartItemCard from "@/components/CartItemCard";

const Page = () => {
  const dispatch = useAppDispatch();
  const { allCart, totalQuantity, totalPrice } = useAppSelector(
    (state: any) => state.store
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [allCart, dispatch]);

  return (
    <Wrapper>
      <div className="mt-20">
        <h2>Shopping Cart</h2>
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 mt-10"> */}
        {/* <div className="grid grid-custom w-full gap-10"> */}
        {/* <Cart /> */}
        <div>Cart - {allCart.length} items</div>
        <div className="grid xl:grid-3col sm:grid-cols-1 md:grid-cols-2 mt-40 gap-x-10 gap-y-12 justify-center">
          <div className="flex flex-col gap-x-10 gap-y-10">
            {allCart.map((elm: any) => (
              <CartItemCard key={elm._id} cartItem={elm} />
            ))}
          </div>
          {totalQuantity ? (
            <div className="bg-[#FBFCFF] flex flex-col gap-y-4 p-5 ">
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
          ) : (
            <div className="flex flex-col justify-center items-center">
              <PiBag className="text-[150px]" />
              <h2 className="mb-10">Your shopping bag is empty</h2>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
