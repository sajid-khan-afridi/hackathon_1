"use client";
import Image from "next/image";
import React, { useState } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "@/store/store";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "@/store/slice/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const CartItemCard = ({ cartItem }: any) => {
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState(cartItem.quantity);

  const handleCart = async (newQty: number) => {
    const newPrice = cartItem.price * newQty;
    try {
      if (newQty) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
          {
            method: "PUT",
            body: JSON.stringify({
              product_id: cartItem._id,
              quantity: newQty,
              price: newPrice,
            }),
          }
        );
        if (!res.ok) {
          throw new Error("Failed to update data");
        }
      } else {
        throw new Error("Failed to fetch updata");
      }
    } catch (error) {
      console.log((error as { message: string }).message);
    }
  };
  const handleDelete = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/removeitem/${cartItem._id}`,
      {
        method: "DELETE",
      }
    );
  };

  const increment = () => {
    toast.promise(handleCart(qty + 1), {
      loading: "Increasing Product Quantity",
      success: "Product Quantity Increased",
      error: "Failed to Increased Quantity",
    });
    setQty(qty + 1);
    dispatch(increaseItemQuantity(cartItem._id));
  };

  const decrement = () => {
    if (cartItem.quantity > 1) {
      toast.promise(handleCart(qty - 1), {
        loading: "Decreaing Quantity",
        success: "Product quantity Decreased",
        error: "Failed to Decrease Quantity",
      });
      setQty(qty - 1);
      dispatch(decreaseItemQuantity(cartItem._id));
    }
  };

  const rmProduct = () => {
    toast.promise(handleDelete(), {
      loading: "Removing Product",
      success: "Product Removed",
      error: "Failed to Remove Product",
    });
    dispatch(removeItem(cartItem._id));
    console.log("Cart id:=", cartItem._id);
  };

  return (
    <>
      <div key={cartItem._id} className="flex sm:flex-col xl:flex-row gap-x-10">
        <div className="">
          <Image
            src={urlForImage(cartItem.image)}
            alt="ev"
            height={300}
            width={200}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-row sm:gap-x-30 lg:gap-x-36">
          <div className=" flex flex-col gap-y-5">
            <h5>{cartItem.title}</h5>
            <h1>{cartItem.ptype.name}</h1>
            <h1>Delivery Estimation</h1>
            <h1>5 Working Days</h1>
            <h1>{cartItem.price}</h1>
          </div>
          <div className="flex flex-col justify-between">
            <MdDelete
              className="text-4xl ml-auto cursor-pointer"
              onClick={rmProduct}
            />
            <div className="flex gap-x-2 justify-center items-center text-lg">
              <div
                className="h-5 w-5 rounded-full shadow-2xl text-4xl bg-gray-200 text-black p-5 flex justify-center items-center cursor-pointer"
                onClick={decrement}
              >
                -
              </div>
              {/* <div onChange={() => null}> */}
              {cartItem.quantity}
              {/* </div> */}
              <div
                className="h-5 w-5 rounded-full shadow-2xl text-4xl  bg-white text-black p-5 flex justify-center cursor-pointer items-center border border-black"
                onClick={increment}
              >
                +
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default CartItemCard;
