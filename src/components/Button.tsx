"use client";
import React from "react";
import { Image as IImage } from "sanity";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/store/store";
import toast, { Toaster } from "react-hot-toast";
import { urlForImage } from "../../sanity/lib/image";

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
  // const items = useSelector((state: any) => state.allCart);
  const dispatch = useAppDispatch();

  const handleRequestData = async () => {
    const res = await fetch(`/api/cart/${props.userId}`);

    if (!res.ok) {
      console.log("Failed to load Data");
    }
    const data = await res.json();
    // console.log(res);
    // return res;
    // console.log(data);
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

  const addToCartData = () => {
    toast.promise(handlePostData(), {
      loading: "Adding Data To Cart",
      success: "Product Added Successfully",
      error: "Failed to add Product",
    });
    handleRequestData();
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
