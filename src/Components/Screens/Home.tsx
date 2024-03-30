import React from "react";
import { Heading } from "@radix-ui/themes";
import { InstagramEmbed } from "react-social-media-embed";
import "react-vertical-timeline-component/style.min.css";
import { Timeline } from "../Elements/Timeline";

export const Home = () => {
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
          <Heading className="my-2"> Follow us on instagram</Heading>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <InstagramEmbed className="w-full flex-1" url="https://www.instagram.com/davidguetta/" />
      </div>
      <Timeline />
    </div>
  );
};
