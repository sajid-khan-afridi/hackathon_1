import Image from "next/image";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "@/store/store";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "@/store/slice/cartSlice";

const CartItemCard = ({ cartItem }: any) => {
  const dispatch = useAppDispatch();
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
              onClick={() => dispatch(removeItem(cartItem._id))}
            />
            <div className="flex gap-x-2 justify-center items-center text-lg">
              <div
                className="h-5 w-5 rounded-full shadow-2xl text-4xl bg-gray-200 text-black p-5 flex justify-center items-center cursor-pointer"
                onClick={() => dispatch(decreaseItemQuantity(cartItem._id))}
              >
                -
              </div>
              {/* <div onChange={() => null}> */}
              {cartItem.quantity}
              {/* </div> */}
              <div
                className="h-5 w-5 rounded-full shadow-2xl text-4xl  bg-white text-black p-5 flex justify-center cursor-pointer items-center border border-black"
                onClick={() => dispatch(increaseItemQuantity(cartItem._id))}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
