"use client";
import React from "react";

export default function Experiencie() {
  const experiencie = [
    {
      project: "Backoffice",
      role: "Frontend developer",
      company: "Disruptive studio",
      actions:
        "Construir el sitio, vistas responsivas, internacionalizacion, creacion de multitema, trabajo en conjunto con el equipo de diseño, producto y desarrolladores para implementar las mejores practicas y brindar accesibilidad. Encargada de code review.",
      tools: ["Javascript", "Next", "Tailwind", "HTML", "CSS"],
    },
    {
      project: "E-learning",
      role: "Frontend developer",
      company: "Disruptive studio",
      actions: "Encargada de mejoras de componentes visuales del sitio",
      tools: ["Typescript", "React", "Tailwind", "HTML", "CSS"],
    },
    {
      project: "Doublewin",
      role: "Frontend developer",
      company: "Disruptive studio",
      actions:
        "Creacion y estilos en sitio  de apuestas hecho de imagenes de alta calidad.",
      tools: ["Javascript", "Next", "Tailwind", "HTML", "CSS"],
    },
    {
      project: "Procesadora de pagos",
      role: "Frontend developer",
      company: "Disruptive studio",
      actions:
        "Creacion del website, desarrollo de componentes y vistas responsive.",
      tools: ["Javascript", "Next", "Tailwind", "HTML", "CSS"],
    },
    {
      project: "E-learning",
      role: "QA Manual",
      company: "Disruptive studio",
      actions:
        "Desarrollo de pruebas manuales para validar funcionamiento y visual del sitio.",
      tools: ["Excel", "Word", "Azure"],
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
                  <span className="font-semibold text-light">{e.project}</span>
                </p>
                <p className="italic text-sm">{e.company}</p>
              </div>
              <p className="italic">{e.actions}</p>
              <div className="flex flex-wrap gap-2">
                {e.tools.map((t, index) => {
                  return (
                    <p
                      className="rounded-full px-5 py-1 text-strong bg-active"
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
