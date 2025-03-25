"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "../../src/i18n/navigation";
import Switch from "./Switch";

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Extraer el locale actual desde la URL
  const currentLocale =
    locales.find((loc) => pathname.startsWith(`/${loc}`)) || "en";

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "es" : "en";

    // Reemplazar el locale en la URL
    const newPathname = pathname.replace(/^\/(en|es)/, "");
    router.push(`/${newLocale}${newPathname}`);
  };

  return <Switch checked={currentLocale === "en"} onChange={toggleLanguage} />;
}
