# Gas Service And Install

Static site for the Houghton Conquest gas engineer, built with Astro.

```bash
npm install
npm run dev
npm run build
```

The live site is [https://gasserviceandinstall.surge.sh](https://gasserviceandinstall.surge.sh). That address is set as `site` in `astro.config.mjs`, so canonical links and the sitemap match it. Surge serves its own `robots.txt` on `*.surge.sh` addresses (`Disallow: /`), so this hostname is for people to open, not for Google to index. Change `site` again before you point a real domain at the build.

Facts on the pages come from the Google Business Profile (place `ChIJewL-WNQX6a0RuFIlpzmue48`), the four profile photos, and the matching Yell and MyJobQuote listings for Gas Safe number 676449. The site does not invent prices, weekend cover, or a street address.
