import React from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "@radix-ui/themes";

export const About = () => {
  const { t } = useTranslation();

  return (<div className="w-full">
    <section
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/desert.png')",
        maxHeight: "500px",
      }}
      className="h-[600px] w-full bg-cover bg-center bg-gray-dark"
    >
      <div className="flex flex-col max-w-[1024px] m-auto h-full pt-6 px-3 pb-7">
        <div className="flex flex-row pb-3">
          <div className="flex-1 flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/logoOS.png`}
              alt="Logo"
              className="max-h-[140px] max-w-[140px] self-center"
            />
          </div>
          <div className="flex-1 md:flex hidden" />
        </div>
        <div className="flex flex-row-reverse">
          <div className="md:w-[512px] w-full bg-blue-primary text-gray-light p-5 rounded-xl opacity-85">
            <p>{t("about.intro")}</p>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-gradient-to-b from-gray-darker to-gray-dark h-4 w-full"></div>

    <div className="max-w-[1024px] m-auto md:flex-row flex-col px-2 py-2">
      <section className="flex flex-col flex-1 justify-center p-3 text-gray-light">
        <Heading size="6" className="pb-4 text-center text-gray-light">
          {t("about.title")}
        </Heading>

        <div className="bg-gray-darker p-4 border border-gray mb-4 rounded-lg">
          <Heading size="4" className="pt-1 pb-2 text-gray-light">
            {t("about.who.title")}
          </Heading>
          <div dangerouslySetInnerHTML={{ __html: t("about.who.description") }} />
        </div>

        <div className="bg-gray-darker p-4 border border-gray mb-4 rounded-lg">
          <Heading size="4" className="pt-1 pb-2 text-gray-light">
            {t("about.why.title")}
          </Heading>
          <div dangerouslySetInnerHTML={{ __html: t("about.why.description") }} />
        </div>

        <div className="bg-gray-darker p-4 border border-gray mb-4 rounded-lg">
          <Heading size="4" className="pt-1 pb-2 text-gray-light">
            {t("about.prepa.title")}
          </Heading>
          <div dangerouslySetInnerHTML={{ __html: t("about.prepa.description") }} />
        </div>

        <Heading size="6" className="pt-1 pb-6 text-center text-gray-light">
        </Heading>
      </section>
    </div>
  </div>);
};
