import { client } from "@/lib/createClient";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Wrapper from "../../../components/Wrapper";

async function getData() {
  const res =
    await client.fetch(`*[_type=="product" && category->name=="Female"]{
    title,image,alt,price,_id,category -> {
      name
    }, ptype -> {
      name
    }
  }`);
  return res;
}

interface IProduct {
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

export default async function Home() {
  const data: IProduct[] = await getData();
  // console.log(data);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 justify-center items-center gap-y-8 mt-24">
      {data.map((item) => (
        <div key={item._id} className="flex flex-col gap-y-2 mx-auto">
          <Link href={`/products/${item.alt}`}>
            <Image
              src={urlForImage(item.image)}
              alt="item.alt"
              width={250}
              height={300}
              className="max-h-[250px] object-cover object-top"
            />
            <div className="pdh">{item.title}</div>
            <div className="pdp">{item.category.name}</div>
            <div className="pdh2">${item.price}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
