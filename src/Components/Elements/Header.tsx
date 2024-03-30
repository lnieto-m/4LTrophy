import React, { useEffect, useState } from "react";
import { Link } from "@radix-ui/themes";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export const Header = () => {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setOnTop(window.scrollY === 0));
    }
  }, []);

  return (
    <div
      className={`h-[50px] flex z-40 justify-center px-5 py-2 sticky top-0 transition-colors duration-300 ease-in-out ${
        onTop ? "bg-none text-gray-dark" : "bg-purple text-gray-light"
      }`}>
      <div className="max-w-[1024px] flex flex-row w-full">
        <div>Logo Here</div>
        <div className="flex flex-[2]"></div>
        <Link
          className="group mx-2 text-gray-light decoration-gray-light transition duration-300"
          href="/">
          Home
        </Link>
        <Link className="mx-2 text-gray-light" href="/about">
          About
        </Link>
        <Link className="mx-2 text-gray-light" href="/sponsors">
          Sponsors
        </Link>
        <Link className="mx-2 text-gray-light" href="mailto:pepito@gmail.com">
          Contact
        </Link>
        <Link
          className="mx-2 justify-center flex flex-col text-gray-light"
          href="https:///www.instagram.com">
          <InstagramLogoIcon width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};
