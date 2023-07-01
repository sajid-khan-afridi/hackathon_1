import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl w-full mx-auto mdl:px-20 sm:px-5 overflow-y-hidden">
      {children}
    </div>
  );
};

export default Wrapper;
