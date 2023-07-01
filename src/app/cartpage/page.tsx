import Image from "next/image";
import Wrapper from "../../../components/Wrapper";
import { MdDelete } from "react-icons/md";

const Page = () => {
  return (
    <Wrapper>
      <div className="mt-20">
        <h2>Shopping Cart</h2>
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 mt-10"> */}
        {/* <div className="grid grid-custom w-full gap-10"> */}
        <div className="grid lg:grid-4col sm:grid-cols-1 md:grid-cols-2 mt-40 gap-x-28 gap-y-12">
          <div className="">
            <Image
              src={"/3.png"}
              alt="ev"
              height={300}
              width={200}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-row gap-x-28">
            <div className="bg-red-600 flex flex-col gap-y-5">
              <h1>Brushed Raglan Sweatshirt</h1>
              <h1>Dress</h1>
              <h1>Delivery Estimation</h1>
              <h1>5 Working Days</h1>
              <h1>$195</h1>
            </div>
            <div className="flex flex-col justify-between">
              <MdDelete className="text-4xl" />
              <div className="flex">
                <div className="h-5 w-5 rounded-full shadow-2xl bg-black p-2 flex justify-center items-center">
                  +
                </div>
                1<div>-</div>
              </div>
            </div>
          </div>
          <div className="bg-green-400 ">image</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
