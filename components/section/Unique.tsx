import Image from "next/image";
import { unique } from "../../public";

const Unique = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 bg-[#FBFCFF] mt-80 sml:px-20">
        <div className="sml:-mt-20 sm:-mt-16 row-span-2 sml:justify-self-end">
          <h2 className="max-w-[500px]">
            Unique and Authentic Vintage Designer Jewellery
          </h2>
        </div>
        <div className="sml:grid lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 sml:gap-x-40 gap-y-8 mt-5">
            <div>
              <h5>Using Good Quality Materials</h5>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h5>100% Handmade Products</h5>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h5>Modern Fashion Design</h5>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h5>Discount for Bulk Orders</h5>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            {/* <div className="sml:flex sml:mt-36"> */}
            <div className="grid sml:grid-cols-2 sm:grid-cols-1 mt-10 sml:gap-x-6">
              <Image
                src={unique}
                alt="unique"
                height={600}
                width={300}
                className="row-span-2 sm:justify-self-center"
              />

              <div className="flex sm:flex-col sml:flex-col mt-5">
                <p>
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <button className="btn-2 sml:w-32 sm:w-44 mt-4">
                  See All Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
