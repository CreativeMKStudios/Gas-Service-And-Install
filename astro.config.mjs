import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Change this when the real domain is connected. Canonicals, Open Graph
// tags and the sitemap all use it.
const site = "https://gasserviceandinstall.co.uk";

export default defineConfig({
  site,
  trailingSlash: "never",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
