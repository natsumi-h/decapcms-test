import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [
    tailwind({
      // Example: Provide a custom path to a Tailwind config file
      //   configFile: "./custom-config.mjs",
      nesting: true,
    }),
  ],
});
