import React from "react";

const Grid1 = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 gap-5 mt-10">
        <div className="p-5 bg-gray-300 text-green-800">Grid1</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid2</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid3</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid4</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid5</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid6</div>
      </div>

      {/* justify-items-  property(horizantal alignment with in grid cells) */}
      <div className="grid justify-items-center grid-cols-3 gap-5 mt-10">
        <div className="p-5 bg-gray-300 text-green-800 w-56 h-36">Grid1</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid2</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid3</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid4</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid5</div>
        <div className="p-5 bg-gray-300 text-green-800">Grid6</div>
      </div>
    </>
  );
};

export default Grid1;
