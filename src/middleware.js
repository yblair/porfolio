import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from "./navigation";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix: "never",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)

  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
