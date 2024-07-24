import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { CheckCircledIcon, CookieIcon, GearIcon, IdCardIcon, MoonIcon, RocketIcon } from "@radix-ui/react-icons";
import { Heading, Popover } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../Utils/Hooks/mediaQuery";

export const Timeline = () => {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery("(max-width: 1170px)");

  return (
    <div className="bg-gray-darker">
      <div className="h-4 w-full bg-gradient-to-b from-gray-dark to-gray-darker"></div>
      <Heading size={"8"} className="pb-6 pt-6 text-center text-gray-light">
        {t("timeline.title")}
      </Heading>
      <VerticalTimeline lineColor="#002347" className="mb-6">
        {/* 1 Association creation */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          textClassName={`bg-blue-secondary text-gray-light p-0 transition-colors ${
            isSmallScreen && "hover:bg-blue-tertiary"
          }`}
          contentStyle={{
            borderRadius: "10px",
            border: "3px solid #0f9f4f",
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)",
          }}
          contentArrowStyle={{ borderRight: "9px solid #0f9f4f" }}
          date={t("timeline.1.date")}
          dateClassName="tl:py-2 tl:px-0 px-4 pt-0 pb-4"
          iconStyle={{
            background: "rgb(25,197,98)",
            color: "#fbfbfb",
            border: "3px solid #0f9f4f",
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)",
          }}
          icon={<IdCardIcon />}>
          <Popover.Root>
            <Popover.Trigger>
              <button className="w-full hover:bg-blue-tertiary transition-colors rounded-[10px]">
                <div className="m-4">
                  <h3 className="vertical-timeline-element-title">{t("timeline.1.title")}</h3>
                  <p>{t("timeline.1.description").split(/(?<=[.?!])\s+/)[0]}</p>
                </div>
              </button>
            </Popover.Trigger>
            <Popover.Content
              side={isSmallScreen ? "bottom" : "right"}
              className="bg-blue-secondary text-gray-light max-w-[350px]">
              <p className="">{t("timeline.1.description")}</p>
            </Popover.Content>
          </Popover.Root>
        </VerticalTimelineElement>

        {/* 2 Car purchase */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          textClassName={`bg-blue-secondary text-gray-light p-0 transition-colors ${
            isSmallScreen && "hover:bg-blue-tertiary"
          }`}
          contentStyle={{
            borderRadius: "10px",
            border: "3px solid #0f9f4f",
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)",
          }}
          contentArrowStyle={{ borderRight: "9px solid #0f9f4f" }}
          date={t("timeline.2.date")}
          dateClassName="tl:py-2 tl:px-0 px-4 pt-0 pb-4"
          iconStyle={{
            background: "rgb(25,197,98)",
            color: "#fbfbfb",
            border: "3px solid #0f9f4f",
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)",
          }}
          icon={<CheckCircledIcon />}>
          <Popover.Root>
            <Popover.Trigger>
              <button className="w-full hover:bg-blue-tertiary transition-colors rounded-[10px]">
                <div className="m-4">
                  <h3 className="vertical-timeline-element-title">{t("timeline.2.title")}</h3>
                  <p>{t("timeline.2.description").split(/(?<=[.?!])\s+/)[0]}</p>
                </div>
              </button>
            </Popover.Trigger>
            <Popover.Content
              side={isSmallScreen ? "bottom" : "left"}
              className="bg-blue-secondary text-gray-light max-w-[350px]">
              <p className="">{t("timeline.2.description")}</p>
            </Popover.Content>
          </Popover.Root>
        </VerticalTimelineElement>

        {/* 3 Tour de France */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          textClassName={`bg-blue-secondary text-gray-light p-0 transition-colors ${
            isSmallScreen && "hover:bg-blue-tertiary"
          }`}
          contentStyle={{
            borderRadius: "10px",
            border: "3px solid #0f9f4f",
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)",
          }}
          contentArrowStyle={{ borderRight: "9px solid #0f9f4f" }}
          date={t("timeline.3.date")}
          dateClassName="tl:py-2 tl:px-0 px-4 pt-0 pb-4"
          iconStyle={{
            background: "rgb(25,197,98)",
            color: "#fbfbfb",
            border: "3px solid #0f9f4f",
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)",
          }}
          icon={<CookieIcon />}>
          <Popover.Root>
            <Popover.Trigger>
              <button className="w-full hover:bg-blue-tertiary transition-colors rounded-[10px]">
                <div className="m-4">
                  <h3 className="vertical-timeline-element-title">{t("timeline.3.title")}</h3>
                  <p>{t("timeline.3.description").split(/(?<=[.?!])\s+/)[0]}</p>
                </div>
              </button>
            </Popover.Trigger>
            <Popover.Content
              side={isSmallScreen ? "bottom" : "right"}
              className="bg-blue-secondary text-gray-light max-w-[350px]">
              <p className="">{t("timeline.3.description")}</p>
            </Popover.Content>
          </Popover.Root>
        </VerticalTimelineElement>

        {/* 4 Bubbles */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          textClassName={`bg-blue-secondary text-gray-light p-0 transition-colors ${
            isSmallScreen && "hover:bg-blue-tertiary"
          }`}
          contentStyle={{
            borderRadius: "10px",
            border: "3px solid #002347",
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)",
          }}
          contentArrowStyle={{ borderRight: "9px solid #002347" }}
          date={t("timeline.4.date")}
          dateClassName="tl:py-2 tl:px-0 px-4 pt-0 pb-4"
          iconStyle={{
            background: "rgb(0, 63, 125)",
            color: "#fbfbfb",
            border: "3px solid #002347",
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)",
          }}
          icon={<MoonIcon />}>
          <Popover.Root>
            <Popover.Trigger>
              <button className="w-full hover:bg-blue-tertiary transition-colors rounded-[10px]">
                <div className="m-4">
                  <h3 className="vertical-timeline-element-title">{t("timeline.4.title")}</h3>
                  <p>{t("timeline.4.description").split(/(?<=[.?!])\s+/)[0]}</p>
                </div>
              </button>
            </Popover.Trigger>
            <Popover.Content
              side={isSmallScreen ? "bottom" : "left"}
              className="bg-blue-secondary text-gray-light max-w-[350px]">
              <p>{t("timeline.4.description")}</p>
            </Popover.Content>
          </Popover.Root>
        </VerticalTimelineElement>

        {/* P Prepa */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          textClassName={`bg-blue-secondary text-gray-light p-0 transition-colors ${
            isSmallScreen && "hover:bg-blue-tertiary"
          }`}
          contentStyle={{
            borderRadius: "10px",
            border: "3px solid #002347",
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)",
          }}
          contentArrowStyle={{ borderRight: "9px solid #002347" }}
          date={t("timeline.P.date")}
          dateClassName="tl:py-2 tl:px-0 px-4 pt-0 pb-4"
          iconStyle={{
            background: "rgb(0, 63, 125)",
            color: "#fbfbfb",
            border: "3px solid #002347",
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)",
          }}
          icon={<GearIcon />}>
          <Popover.Root>
            <Popover.Trigger>
              <button className="w-full hover:bg-blue-tertiary transition-colors rounded-[10px]">
                <div className="m-4">
                  <h3 className="vertical-timeline-element-title">{t("timeline.P.title")}</h3>
                  <p>{t("timeline.P.description").split(/(?<=[.?!])\s+/)[0]}</p>
                </div>
              </button>
            </Popover.Trigger>
            <Popover.Content
              side={isSmallScreen ? "bottom" : "left"}
              className="bg-blue-secondary text-gray-light max-w-[350px]">
              <p>{t("timeline.P.description")}</p>
            </Popover.Content>
          </Popover.Root>
        </VerticalTimelineElement>

        {/* E Departure */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          textClassName={`bg-blue-secondary text-gray-light p-0 transition-colors ${
            isSmallScreen && "hover:bg-blue-tertiary"
          }`}
          contentStyle={{
            borderRadius: "10px",
            border: "3px solid #002347",
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)",
          }}
          contentArrowStyle={{ borderRight: "9px solid #002347" }}
          date={t("timeline.E.date")}
          dateClassName="tl:py-2 tl:px-0 px-4 pt-0 pb-4"
          iconStyle={{
            background: "rgb(0, 63, 125)",
            color: "#fbfbfb",
            border: "3px solid #002347",
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)",
          }}
          icon={<RocketIcon />}>
          <Popover.Root>
            <Popover.Trigger>
              <button className="w-full hover:bg-blue-tertiary transition-colors rounded-[10px]">
                <div className="m-4">
                  <h3 className="vertical-timeline-element-title">{t("timeline.E.title")}</h3>
                  <p>{t("timeline.E.description").split(/(?<=[.?!])\s+/)[0]}</p>
                </div>
              </button>
            </Popover.Trigger>
            <Popover.Content
              side={isSmallScreen ? "bottom" : "left"}
              className="bg-blue-secondary text-gray-light max-w-[350px]">
              <p>{t("timeline.E.description")}</p>
            </Popover.Content>
          </Popover.Root>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
