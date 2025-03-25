"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 h-full items-center justify-center">
      <div
        className="w-52 h-52 md:w-[300px] md:h-[300px] bg-cover bg-top rounded-full"
        style={{ backgroundImage: "url(./images/bel.jpg)" }}
      ></div>
      <div className="flex flex-col">
        <h1 className="italic text-lg md:text-xl font-thin">
          YAMILA BELEN LAIR
        </h1>
        <h2 className="font-semibold text-2xl md:text-3xl text-[--active]">
          {t("header.subtitle")}
        </h2>
      </div>
    </div>
  );
}
