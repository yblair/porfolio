import React from "react";
import Linterna from "./Linterna";

export default function About() {
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
          <p className="italic">
            Me dedico al desarrollo de{" "}
            <span className="text-active hover:bg-strong font-semibold not-italic">
              software frontend
            </span>
            , construyo y gestiono las interfaces para garantizar la mejor
            experiencia de usuario.
          </p>
          <p className="italic">
            Estoy abierta a nuevas oportunidades en donde pueda contribuir,
            aprender y crecer.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 xl:max-w-[40%]">
          {skills.map((s) => {
            return (
              <p
                key={s}
                className="rounded-md bg-medium text-active text-lg h-[30px] w-auto px-[30px]"
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
