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
            " linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/photo1.jpg')",
        }}
        className="h-[600px] w-full bg-cover bg-center">
        <div className="flex flex-row-reverse max-w-[1024px] m-auto h-full pt-[96px] px-3 pb-7">
          <div className="h-full md:w-[512px] w-full opacity-80 bg-blue-primary text-gray-light p-5 rounded-xl">
            Fo mettre des truks ici mek
          </div>
        </div>
      </section>
      <div className="flex max-w-[1024px] m-auto md:flex-row flex-col px-2 py-5">
        <section className="flex flex-col flex-1 justify-center p-3 text-gray-light">
          <Heading className="my-2">{t("home.embed.title")}</Heading>
          <p>{t("home.embed.description")}</p>
        </section>
        <InstagramEmbed
          lang={i18n.language}
          className="w-full flex-1"
          url="https://www.instagram.com/davidguetta/"
        />
      </div>
      <Timeline />
    </div>
  );
};
