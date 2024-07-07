import React from "react";
import { Heading } from "@radix-ui/themes";
import { InstagramEmbed } from "react-social-media-embed";
import "react-vertical-timeline-component/style.min.css";
import { Timeline } from "../Elements/Timeline";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full">
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/desert.png')",
          maxHeight: "470px",
        }}
        className="h-[600px] w-full bg-cover bg-center">
        <div className="flex flex-col max-w-[1024px] m-auto h-full pt-6 px-3 pb-7">
          <div className="flex flex-row pb-3">
            <div className="flex-1 flex-col flex justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/logoOS.png`}
                alt="Logo"
                className="flex-1 max-h-[140px] max-w-[140px] self-center"
              />
            </div>

            <div className="flex-1 md:flex hidden" />
          </div>
          <div className="flex flex-row-reverse">
            <div
              className="h-min md:w-[512px] w-full opacity-85 bg-blue-primary text-gray-light p-5 rounded-xl align-middle">
              <p>{t("home.intro")}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-4 w-full bg-gradient-to-b from-gray-darker to-gray-dark"></div>
      <div className="flex max-w-[1024px] m-auto md:flex-row flex-col px-2 py-5 font-">
        <section className="flex flex-col flex-1 justify-center p-3 text-gray-light">
          <Heading className="my-2">{t("home.embed.title")}</Heading>
          <p>{t("home.embed.description")}</p>
        </section>
        <InstagramEmbed
          lang={i18n.language}
          className="w-full flex-1"
          url="https://www.instagram.com/odysseesirocco/"
          style={{ borderRadius: '10px' }}
        />
      </div>
      <Timeline />
    </div>
  );
};
