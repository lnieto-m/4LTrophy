import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {
  CheckCircledIcon,
  CookieIcon,
  IdCardIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Heading } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

export const Timeline = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-dark">
      <div className="h-4 w-full bg-gradient-to-b from-gray-darker to-gray-dark"></div>
      <Heading size={"8"} className="pb-6 pt-6 text-center text-gray-light">
        {t("timeline.title")}
      </Heading>
      <VerticalTimeline lineColor="#002347" className="mb-6">
        <VerticalTimelineElement // 1 Association creation
          className="vertical-timeline-element--work"
          textClassName="bg-blue-secondary text-gray-light"
          contentStyle={{
            borderRadius: '10px',
            border: '3px solid #0f9f4f',
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)"
          }}
          contentArrowStyle={{ borderRight: "9px solid #0f9f4f" }}
          date={t("timeline.1.date")}
          iconStyle={{
            background: "rgb(25,197,98)",
            color: "#fbfbfb",
            border: '3px solid #0f9f4f',
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)"
          }}
          icon={<IdCardIcon />}>
          <h3 className="vertical-timeline-element-title">{t("timeline.1.title")}</h3>
          <p>{t("timeline.1.description")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement // 2 Car purchase
          className="vertical-timeline-element--work"
          textClassName="bg-blue-secondary text-gray-light"
          contentStyle={{
            borderRadius: '10px',
            border: '3px solid #0f9f4f',
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)"
          }}
          contentArrowStyle={{ borderRight: "9px solid #0f9f4f" }}
          date={t("timeline.2.date")}
          iconStyle={{
            background: "rgb(25,197,98)",
            color: "#fbfbfb",
            border: '3px solid #0f9f4f',
            boxShadow: "0 3px 10px 0 rgba(19, 206, 102, 0.5)"
          }}
          icon={<CheckCircledIcon />}>
          <h3 className="vertical-timeline-element-title">{t("timeline.2.title")}</h3>
          <p>{t("timeline.2.description")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement // 3 Tour de France
          className="vertical-timeline-element--work"
          textClassName="bg-blue-secondary text-gray-light"
          contentStyle={{
            borderRadius: '10px',
            border: '3px solid #002347',
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)"
          }}
          contentArrowStyle={{ borderRight: "9px solid #002347" }}
          date={t("timeline.3.date")}
          iconStyle={{
            background: "rgb(0, 63, 125)",
            color: "#fbfbfb",
            border: '3px solid #002347',
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)"
          }}
          icon={<CookieIcon />}>
          <h3 className="vertical-timeline-element-title">{t("timeline.3.title")}</h3>
          <p>{t("timeline.3.description")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement // 4 Departure
          className="vertical-timeline-element--work"
          textClassName="bg-blue-secondary text-gray-light"
          contentStyle={{
            borderRadius: '10px',
            border: '3px solid #002347',
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)"
          }}
          contentArrowStyle={{ borderRight: "9px solid #002347" }}
          date={t("timeline.4.date")}
          iconStyle={{
            background: "rgb(0, 63, 125)",
            color: "#fbfbfb",
            border: '3px solid #002347',
            boxShadow: "0 3px 10px 0 rgba(251, 251, 251, 0.5)"
          }}
          icon={<RocketIcon />}>
          <h3 className="vertical-timeline-element-title">{t("timeline.4.title")}</h3>
          <p>{t("timeline.4.description")}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
