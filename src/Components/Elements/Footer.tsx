import React from "react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <div className="md:flex hidden flex-col">
      <div className="h-4 w-full bg-gradient-to-b from-gray-darker to-gray-dark"></div>
      <div className="h-7 w-full text-gray-light bg-gray-dark p-5 text-right flex justify-center">
        <div className="flex flex-row justify-center items-center">
          <a href="https://www.instagram.com/odysseesirocco/">
            <InstagramLogoIcon width={20} height={20} />
          </a>
        </div>
        <div className="w-full max-w-[1024px]">© Pepito Corp.</div>
      </div>
    </div>
  );
};
