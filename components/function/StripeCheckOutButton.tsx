"use client";
import React from "react";
import { Image as IImage } from "sanity";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/slice/cartSlice";
import getStipePromise from "@/lib/stripe";

const StripeCheckOutButton = (props: any) => {
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(props.products),
    });

    const data = await response.json();

    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
    // console.log(props);
  };

  return (
    // <button className="btn-2" onClick={() => dispatch(addToCart(props))}>
    <button className="btn-2" onClick={handleCheckout}>
      Process To Checkout
    </button>
  );
};

export default StripeCheckOutButton;
