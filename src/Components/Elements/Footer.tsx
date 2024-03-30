import React from "react";

export const Footer = () => {
  return (
    <div className="md:flex hidden flex-col">
      <div className="h-6 w-full bg-gradient-to-b from-orange-primary to-blue-primary"></div>
      <div className="h-7 w-full text-gray-light bg-blue-primary p-5 text-right flex justify-center">
        <div className="w-full max-w-[1024px]">© Pepito Corp.</div>
      </div>
    </div>
  );
};
