import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // for github pages deployment
  site: "https://JoaoMateus98.github.io",
  // enter your repo here e.g. "/my-repo"
  base: "/interactive-rating-component",
});
