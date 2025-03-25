"use client";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  const skills = [
    "React",
    "Next",
    "Javascript",
    "HTML",
    "CSS",
    "Tailwind",
    "Responsive design",
    "Github",
    "SEO",
    "Figma",
    "Git",
  ];

  return (
    <div className="flex   justify-center  items-center w-full">
      <div className="flex flex-col lg:flex-row  gap-[40px] items-center xl:max-w-[60%]">
        <div className="flex flex-col text-xl">
          <p className="italic">{t("aboutMe.text")}</p>
          <p className="italic">{t("aboutMe.info")}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:max-w-[40%]">
          {skills.map((s) => {
            return (
              <p
                key={s}
                className="rounded-md bg-[--medium] text-[--active] text-lg h-[30px] w-auto px-[30px]"
              >
                {s}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
