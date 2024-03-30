import React, { useEffect, useState } from "react";
import { Link } from "@radix-ui/themes";
import { InstagramLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export const Header = () => {
  const [onTop, setOnTop] = useState(true);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setOnTop(window.scrollY === 0));
    }
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className={`h-[50px] flex z-40 justify-center px-5 py-2 sticky top-0 transition-colors duration-300 ease-in-out ${
        onTop ? "bg-none text-gray-dark" : "bg-orange-tertiary text-gray-light"
      }`}>
      <div className="max-w-[1024px] flex flex-row w-full">
        <div>Logo Here</div>
        <div className="flex flex-[2]"></div>

        <div className="md:flex hidden">
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
          <Link className="mx-2 text-gray-light" href="mailto:contact@odyssee-sirocco.com">
            Contact
          </Link>
          <Link
            className="mx-2 justify-center flex flex-col text-gray-light"
            href="https:///www.instagram.com">
            <InstagramLogoIcon width={20} height={20} />
          </Link>
        </div>
        <div className="md:hidden text-gray-light justify-center flex flex-col">
          <HamburgerMenuIcon width={20} height={20} onClick={toggleDrawer} />
        </div>
        <Drawer open={isDrawerOpen} onClose={toggleDrawer} direction="right" className="bg-color">
          <div className="text-gray-light bg-orange-tertiary h-full flex flex-col">
            <div className="flex-1 flex flex-col">
              <Link
                className="p-2 mx-2 text-gray-light decoration-gray-light transition duration-300"
                href="/">
                Home
              </Link>
              <Link className="p-1 mx-2 text-gray-light" href="/about">
                About
              </Link>
              <Link className="p-1 mx-2 text-gray-light" href="/sponsors">
                Sponsors
              </Link>
              <Link className="p-1 mx-2 text-gray-light" href="mailto:contact@odyssee-sirocco.com">
                Contact
              </Link>
              <Link
                className="p-1 mx-2 justify-center flex flex-col text-gray-light"
                href="https:///www.instagram.com">
                <InstagramLogoIcon width={20} height={20} />
              </Link>
            </div>

            <div className="h-6 w-full bg-gradient-to-b from-orange-tertiary to-blue-primary"></div>
            <div className="h-6 w-full text-gray-light bg-blue-primary p-2 text-right">
              © Pepito Corp.
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
