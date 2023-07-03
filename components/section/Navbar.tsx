"use client";
import React, { useRef, useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "@/store/slice/cartSlice";

export const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const { totalQuantity, allCart } = useSelector((state: any) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [allCart, dispatch]);

  return (
    // <Wrapper>
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-white px-4">
      <div className="hidden lg:flex justify-between py-5 items-center px-20 bg-white">
        <Link href={"/"} passHref>
          <Image src={"/logo.webp"} alt="logo" width={140} height={100} />
        </Link>
        <div className="flex gap-12">
          {/* font-family: Sora,sans-serif */}
          <Link className="" href={"/female"}>
            Female
          </Link>
          <Link href={"/male"}>Male</Link>
          <Link href={"/kid"}>Kids</Link>
          <Link href={"/products"}>All Products</Link>
        </div>
        <div>
          <div className="flex items-center">
            <Search className="rounded-l bg-white" />
            <input
              className="rounded-r"
              id="username"
              type="text"
              placeholder="What you looking for"
            />
          </div>
        </div>
        <Link href={"/cartpage"} passHref>
          <div className="bg-gray-200 rounded-full p-3">
            <ShoppingCart className="relative" />
            <span className="absolute bg-[#f02d34] rounded-full w-6 h-6 text-center top-5 right-24 text-white">
              {/* 0 */}
              {totalQuantity}
            </span>
          </div>
        </Link>
      </div>
      {/* responsiveness */}
      <div className="lg:hidden flex max-w-5xl h-20 px-4 py-5 justify-between items-center">
        <div>
          <Image src={"/logo.webp"} alt="logo" width={140} height={100} />
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center  text-4xl text-textGreen cursor-pointer overflow-hidden group sticky "
        >
          <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-0 translate-x-3 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-3 translate-x-1 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
      {showMenu && (
        <div
          ref={(node) => (ref.current = node)}
          className="absolute lg:hidden top-0 right-0 w-full h-screen bg-white flex flex-col items-center"
        >
          {/* the above div is used for dim the whole screen */}
          <div className="flex flex-col relative top-0 w-full h-screen px-10 py-10">
            <div className="flex justify-between relative w-full items-center">
              <div>
                <Image src={"/logo.webp"} alt="logo" width={140} height={100} />
              </div>
              <div className="">
                <MdOutlineClose
                  onClick={() => setShowMenu(false)}
                  className="text-3xl text-textGreen cursor-pointer hover:text-red-500"
                />
              </div>
            </div>

            {/* below the div contains navbar in column order for mobile user */}
            <div className="flex flex-col gap-7 items-center mt-14">
              <Link href={"/cartpage"} passHref>
                <div className="bg-gray-200 rounded-full p-3 relative">
                  <ShoppingCart className="" />
                  <span className="absolute bg-[#f02d34] rounded-full w-6 h-6 text-center top-0 right-0 text-white">
                    {/* 0 */}
                    {totalQuantity}
                  </span>
                </div>
              </Link>
              <Link className="" href={"/female"}>
                Female
              </Link>
              <Link href={"/male"}>Male</Link>
              <Link href={"/kid"}>Kids</Link>
              <Link href={"/products"}>All Products</Link>
            </div>
          </div>
        </div>
      )}
    </div>
    // </Wrapper>
  );
};
