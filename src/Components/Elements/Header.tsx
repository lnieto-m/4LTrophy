import React, { useEffect, useState } from "react";
import { Link, Select } from "@radix-ui/themes";
import {  HamburgerMenuIcon } from "@radix-ui/react-icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
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

  const ToggleLanguageButton = () => {
    return (
      <div>
        <Select.Root
          defaultValue={i18n.language}
          size={"1"}
          onValueChange={(value) => i18n.changeLanguage(value)}>
          <Select.Trigger
            className={
              onTop
                ? "md:bg-opacity-0 bg-sable text-gray-light"
                : "bg-sable text-gray-light"
            }
          />
          <Select.Content
            className={onTop ? "md:bg-gray-light bg-sable" : "bg-sable"}>
            <Select.Item
              value="fr"
              className={onTop ? "md:text-gray-dark text-gray-light" : "text-gray-light"}>
              Fr
            </Select.Item>
            <Select.Item
              value="en"
              className={onTop ? "md:text-gray-dark text-gray-light" : "text-gray-light"}>
              En
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    );
  };

  return (
    <div
      className={`h-[50px] flex z-40 justify-center px-5 py-2 sticky top-0 transition-colors duration-300 ease-in-out ${
        onTop ? "bg-none text-gray-dark" : "bg-sable text-gray-light"
      }`}>
      <div className="max-w-[1024px] flex flex-row w-full">
        {!onTop && (
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/logotxt-removebg.png`}
              alt="logo"
              className="max-h-[24px]"
            />
          </div>
        )}
        <div className="flex flex-[2]"></div>

        <div className="md:flex hidden">
          <Link
            className="group mx-2 text-gray-light decoration-gray-light transition duration-300"
            href="/">
            {t("header.home.title")}
          </Link>
          <Link className="mx-2 text-gray-light" href="/about">
            {t("header.about.title")}
          </Link>
          <Link className="mx-2 text-gray-light" href="/sponsors">
            {t("header.sponsors.title")}
          </Link>
          <Link className="mx-2 text-gray-light" href="mailto:odyssee.sirocco@gmail.com">
            {t("header.contact.title")}
          </Link>
          <ToggleLanguageButton />
        </div>
        <div className="md:hidden text-gray-light justify-center flex flex-col">
          <HamburgerMenuIcon width={20} height={20} onClick={toggleDrawer} />
        </div>
        <Drawer open={isDrawerOpen} onClose={toggleDrawer} direction="right" className="bg-color">
          <div className="text-gray-light bg-sable h-full flex flex-col">
            <div className="flex-1 flex flex-col">
              <Link
                className="p-2 mx-2 text-gray-light decoration-gray-light transition duration-300"
                href="/">
                {t("header.home.title")}
              </Link>
              <Link className="p-1 mx-2 text-gray-light" href="/about">
                {t("header.about.title")}
              </Link>
              <Link className="p-1 mx-2 text-gray-light" href="/sponsors">
                {t("header.sponsors.title")}
              </Link>
              <Link className="p-1 mx-2 text-gray-light" href="mailto:odyssee.sirocco@gmail.com">
                {t("header.contact.title")}
              </Link>
              <ToggleLanguageButton />
            </div>
            <div className="h-4 w-full bg-gradient-to-b from-sable to-gray-darker"></div>
            <div className="h-6 w-full text-gray-light bg-gray-darker p-2 text-right">
              © Pepito Corp.
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
