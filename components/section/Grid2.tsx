import React from "react";

const Grid2 = () => {
  return (
    <>
      {/* items-  property(vertical alignment with in the grid cells) */}
      <div className="min-h-screen items-center grid grid-cols-3 gap-5 mt-10">
        <div className="p-5 bg-gray-300 text-green-800">Grid1</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid2</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid3</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid4</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid5</div>
        <div className="p-5 bg-gray-300 text-green-800 h-36">Grid6</div>
      </div>
    </>
  );
};

export default Grid2;
