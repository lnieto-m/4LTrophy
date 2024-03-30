import React from "react";

import { InstagramEmbed } from "react-social-media-embed";

export const About = () => {
  return (
    <div className="w-full">
      <section
        style={{
          backgroundImage:
            " linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/photo1.jpg')",
        }}
        className="h-[500px] w-full bg-cover bg-center"></section>
      <div className="flex max-w-[1024px] m-auto md:flex-row flex-col p-2">
        <section className="flex flex-col flex-1 justify-center">
          <h1> Follow us on instagram</h1>
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
    </div>
  );
};
