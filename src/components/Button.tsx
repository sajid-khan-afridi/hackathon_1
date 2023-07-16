"use client";
import React from "react";
import { Image as IImage } from "sanity";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/store/store";
import toast, { Toaster } from "react-hot-toast";
import { urlForImage } from "../../sanity/lib/image";
import { useAuth } from "@clerk/nextjs";
import { log } from "console";

interface IProduct {
  id: string;
  title: string;
  image: IImage;
  alt: string;
  quantity: number;
  category: {
    name: string;
  };
  price: number;
  ptype: string;
  _id: string;
  userId: string;
}

const AddToCartButton = ({ props }: { props: IProduct }) => {
  const { userId } = useAuth();
  // const items = useSelector((state: any) => state.allCart);
  const dispatch = useAppDispatch();

  const handleRequestData = async () => {
    const res = await fetch(`/api/cart/${userId}`);

    if (!res.ok) {
      console.log("Failed to load Data");
    }
    const data = await res.json();
    // console.log(res);
    // return res;
    console.log(data);

    return data;
  };

  // Posting data to database
  const handlePostData = async () => {
    await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        alt: props.alt,
        image: urlForImage(props.image),
        price: props.price,
        product_id: props._id,
        quantity: props.quantity,
        title: props.title,
        total_price: props.quantity * props.price,
      }),
    });
  };

  const handleCart = async () => {
    try {
      const cartData = await handleRequestData();
      const existingItem = cartData.cartItems.find(
        (item: any) => item.product_id === props._id
      );
      // console.log(cartData.cartItems);
      // console.log("existingItem= ", existingItem);
      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        const newPrice = props.price * newQuantity;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
          {
            method: "PUT",
            body: JSON.stringify({
              product_id: props._id,
              quantity: newQuantity,
              price: newPrice,
            }),
          }
        );
        if (!res.ok) {
          throw new Error("Failed to update data");
        }
      } else {
        await handlePostData();
      }
    } catch (error) {
      console.log((error as { message: string }).message);
    }
  };

  const addToCartData = () => {
    toast.promise(handleCart(), {
      loading: "Adding Data To Cart",
      success: "Product Added Successfully",
      error: "Failed to add Product",
    });
    // toast.promise(handlePostData(), {
    //   loading: "Adding Data To Cart",
    //   success: "Product Added Successfully",
    //   error: "Failed to add Product",
    // });
    // handleRequestData();
    dispatch(addToCart(props));
  };
  return (
    <>
      <button className="btn-2" onClick={addToCartData}>
        Add to Cart
      </button>
      <Toaster />
    </>
  );
};

export default AddToCartButton;
