import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  // ✅ Next.js default rules (AMAN DI SEMUA VERSI)
  next,

  // 🔧 Override rules
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
