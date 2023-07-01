import React from "react";

const Grid5 = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-6">
      <div className="md:col-span-2">
        Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nulla impedit minima sunt, at aspernatur tempore sapiente est eligendi
        nostrum sequi distinctio natus veritatis ad reiciendis porro laudantium
        vero eius! Fugit?
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-1 content-start gap-y-6 md:row-span-2">
        <div className="bg-gray-300">
          list 1
          <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>
        </div>
        <div className="bg-slate-500">
          list 2
          <ul>
            <li>item1</li>
            <li>item2</li>
          </ul>
        </div>
      </div>
      <div className="col-span-2">
        Additional Information Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Molestiae fuga temporibus hic amet ex nesciunt sequi
        natus. Possimus consectetur quas quibusdam iusto laudantium non, fugit
        dolor nobis culpa, at voluptates, enim inventore nesciunt eius
        praesentium sapiente ex minima excepturi illo laboriosam quidem? Dolor
        illo praesentium eligendi labore, laborum officiis? Quam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Unde laborum illum odio
        adipisci rem porro nostrum aspernatur dicta doloribus itaque! Quis ex
        commodi, sunt labore, corporis esse fuga porro sint dicta asperiores
        quia praesentium non amet mollitia alias possimus error nostrum
        molestias eveniet saepe consectetur sed? Commodi facilis est vero.
      </div>
    </div>
  );
};

export default Grid5;
