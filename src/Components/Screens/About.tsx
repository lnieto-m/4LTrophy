import React from "react";

export const About = () => {
  return (
    <div className="w-full">
      <section
        style={{
          backgroundImage:
            " linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/desert.png')",
        }}
        className="h-[600px] w-full bg-cover bg-center">
        <div className="flex flex-row-reverse max-w-[1024px] m-auto h-full pt-[50px]">
          <div className="h-full md:w-[512px] w-full p-2"></div>
        </div>
      </section>
    </div>
  );
};
