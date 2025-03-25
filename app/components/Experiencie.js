"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function Experiencie() {
  const t = useTranslations();

  const experiencie = [
    {
      project: "Backoffice",
      role: "Frontend developer",
      company: "Disruptive studio",
      actions:
        t("experience.build") +
        ", " +
        t("experience.i18") +
        ", " +
        t("experience.test") +
        ", " +
        t("experience.style") +
        ", " +
        t("experience.access") +
        ", " +
        t("experience.codeReview") +
        ", " +
        t("experience.atomic") +
        ", " +
        t("experience.agile") +
        ", " +
        t("experience.git") +
        ", " +
        t("experience.hooks") +
        ", " +
        t("experience.context") +
        ", " +
        t("experience.api") +
        ", " +
        t("experience.uxdevelopment") +
        ", " +
        t("experience.multitheme") +
        ", " +
        t("experience.teamwork") +
        ".",
      tools: ["Javascript", "Next", "Tailwind", "HTML", "CSS"],
    },
    {
      project: "E-learning",
      role: "Frontend developer",
      company: "Disruptive studio",
      actions:
        t("experience.build") +
        ", " +
        t("experience.i18") +
        ", " +
        t("experience.theme") +
        ", " +
        t("experience.git") +
        ", " +
        t("experience.hooks") +
        ", " +
        t("experience.context") +
        ", " +
        t("experience.api") +
        ", " +
        t("experience.uxdevelopment") +
        ", " +
        t("experience.designimprovement") +
        ", " +
        t("experience.style") +
        ".",
      tools: ["Typescript", "React", "Tailwind", "HTML", "CSS"],
    },
    {
      project: "Doublewin",
      role: "Frontend developer",
      company: "Disruptive studio",
      actions:
        t("experience.imagebuilded") +
        ", " +
        t("experience.i18") +
        ", " +
        t("experience.teamwork") +
        ", " +
        t("experience.git") +
        ", " +
        t("experience.hooks") +
        ", " +
        t("experience.context") +
        ", " +
        t("experience.api") +
        ", " +
        t("experience.style") +
        ".",
      tools: ["Javascript", "Next", "Tailwind", "HTML", "CSS"],
    },
    {
      project: "Procesadora de pagos",
      role: "Frontend developer",
      company: "Disruptive studio",
      actions:
        t("experience.build") +
        ", " +
        t("experience.i18") +
        ", " +
        t("experience.theme") +
        ", " +
        t("experience.git") +
        ", " +
        t("experience.hooks") +
        ", " +
        t("experience.context") +
        ", " +
        t("experience.api") +
        ", " +
        t("experience.uxdevelopment") +
        ", " +
        t("experience.designimprovement") +
        ", " +
        t("experience.style") +
        ".",
      tools: ["Javascript", "Next", "Tailwind", "HTML", "CSS"],
    },
  ];

  return (
    <div className="w-full flex  h-screen items-center justify-center ">
      <div
        className="flex flex-col w-full overflow-y-auto max-h-[80%] xl:max-w-[60%] fhd:max-w-[40%]"
        id="exp"
      >
        {experiencie.map((e, index) => {
          return (
            <div key={index} className="flex flex-col gap-2 my-[30px] w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="font-semibold text-xl">
                  {e.role}
                  {" - "}
                  <span className="font-semibold text-[--light]">
                    {e.project}
                  </span>
                </p>
                <p className="italic text-sm">{e.company}</p>
              </div>
              <p className="italic">{e.actions}</p>
              <div className="flex flex-wrap gap-2">
                {e.tools.map((t, index) => {
                  return (
                    <p
                      className="rounded-full px-5 py-1 text-[--strong] bg-[--active]"
                      key={index}
                    >
                      {t}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
