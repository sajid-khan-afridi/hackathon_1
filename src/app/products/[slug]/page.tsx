import { client } from "@/lib/createClient";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import Wrapper from "../../../../components/Wrapper";
import AddToCartButton from "@/components/Button";
import { auth } from "@clerk/nextjs";

async function getData(slug: string) {
  const res = await client.fetch(
    `*[_type=="product" && alt==$slug]{
      title,image,alt,price,quantity,_id,category -> {
        name
      }, ptype -> {
        name
      }
    }`,
    { slug }
  );
  return res;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  const { userId } = auth();
  // const newData = data.push(userId);
  // console.log(userId);
  // console.log(data);
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 justify-center items-center gap-y-8 gap-x-5 mt-24">
        <div className="hidden lg:flex justify-end items-start">
          <Image
            src={urlForImage(data[0].image)}
            alt="item.alt"
            width={100}
            height={100}
            className="max-h-[100px] object-cover object-top"
          />
        </div>
        <div key={data[0]._id} className="flex flex-col gap-y-2">
          <Image
            src={urlForImage(data[0].image)}
            alt="item.alt"
            width={700}
            height={700}
            className="max-h-[700px] object-cover object-top"
          />
        </div>
        <div>
          {/* Right side */}
          <h2>{data[0].title}</h2>
          <div className="pdp">{data[0].ptype.name}</div>
          <h4></h4>
          <div className="">
            <AddToCartButton props={data[0]} />
            <span className="pdh2">${data[0].price}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 gap-x-5">
        <div className="relative">
          <h4 className="z-20">Product Information</h4>
          <div className="z-0 absolute left-10 text-[#F2F3F7] text-2xl font-bodyFont font-bold">
            Overview
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
