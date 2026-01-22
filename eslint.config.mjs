import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals.js";

export default defineConfig([
  // Next.js Core Web Vitals rules
  ...nextVitals,

  // 🔥 OVERRIDE RULES DI SINI
  {
    rules: {
      // Matikan warning <img>
      "@next/next/no-img-element": "off",

      // Matikan error <a href="/">
      "@next/next/no-html-link-for-pages": "off",

      // Sudah benar
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },

  // Ignore build folders
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
