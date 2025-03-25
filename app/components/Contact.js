import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-screen">
      <p className="italic">Lair, Yamila Belén</p>
      <p className="italic">Frontend developer</p>
      <p className="italic">Chaco, Argentina</p>

      <Link
        href="https://www.linkedin.com/in/yamila-belen-lair/"
        className="rounded-md text-xl py-2 font-semibold px-7 bg-[--strong] text-[--active]"
      >
        LinkedIn
      </Link>
      <button
        className="rounded-md text-xl py-2 font-semibold px-7 bg-[--strong] text-[--active]"
        onClick={() => console.log("a")}
      >
        ⬇{t("contact.download")}
      </button>
    </div>
  );
}
