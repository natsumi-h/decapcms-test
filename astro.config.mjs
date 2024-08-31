import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [
    tailwind({
      // Example: Provide a custom path to a Tailwind config file
      //   configFile: "./custom-config.mjs",
      nesting: true,
    }),
    react(),
  ],
  output: "hybrid",
  adapter: netlify(),
});
