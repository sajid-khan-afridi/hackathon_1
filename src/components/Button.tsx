"use client";
import React from "react";
import { Image as IImage } from "sanity";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/slice/cartSlice";

interface IProduct {
  id: string;
  title: string;
  image: IImage;
  alt: string;
  category: {
    name: string;
  };
  price: number;
  ptype: string;
  _id: string;
}

const Button = ({ props }: { props: IProduct }) => {
  // const items = useSelector((state: any) => state.allCart);
  const dispatch = useDispatch();
  return (
    <button className="btn-2" onClick={() => dispatch(addToCart(props))}>
      Add to Cart
    </button>
  );
};

export default Button;
