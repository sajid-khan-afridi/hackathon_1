import React from "react";

const Grid3 = () => {
  return (
    <>
      {/* justify- and content-  property(horizantal and vertical alignment with out the grid cells) */}
      <div className="min-h-screen justify-end content-end grid grid-custom gap-5 mt-10">
        <div className="p-5 bg-gray-300 text-green-800 h-36">
          Grid1 more content
        </div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid2</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid3</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid4</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid5</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid6</div>
      </div>
    </>
  );
};

export default Grid3;
