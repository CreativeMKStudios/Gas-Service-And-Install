import { areas, business, services } from "./business";

export function absolute(site: URL, path: string) {
  return new URL(path, site).href;
}

export function businessSchema(site: URL) {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "Plumber"],
    "@id": absolute(site, "/#business"),
    name: business.name,
    description: business.description,
    url: site.href.replace(/\/$/, ""),
    telephone: business.phoneTel,
    image: [
      absolute(site, "/og.jpg"),
      absolute(site, "/images/plant-room-1600.webp"),
      absolute(site, "/images/ideal-combi-1200.webp"),
      absolute(site, "/images/van-brand.webp"),
      absolute(site, "/images/van-wash.webp"),
    ],
    logo: absolute(site, "/icon-512.png"),
    currenciesAccepted: "GBP",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.locality,
      addressRegion: business.region,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.lat,
      longitude: business.lng,
    },
    hasMap: business.mapsUrl,
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Bedfordshire",
      },
    })),
    openingHoursSpecification: business.hours
      .filter((slot) => slot.opens)
      .flatMap((slot) =>
        slot.days.map((day) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: `https://schema.org/${day}`,
          opens: slot.opens,
          closes: slot.closes,
        })),
      ),
    sameAs: [business.mapsUrl, business.mapsShortUrl, business.yellUrl, business.jobQuoteUrl],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Gas Safe registration",
      identifier: business.gasSafe,
      recognizedBy: {
        "@type": "Organization",
        name: "Gas Safe Register",
        url: business.gasSafeUrl,
      },
    },
    knowsAbout: services.map((service) => service.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gas, heating and plumbing",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absolute(site, `/services/${service.slug}`),
        },
      })),
    },
  };
}

export function breadcrumbSchema(site: URL, crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(site, crumb.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema(site: URL, service: { name: string; slug: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absolute(site, `/services/${service.slug}`),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Bedford and nearby villages",
    },
    provider: { "@id": absolute(site, "/#business") },
    serviceType: service.name,
  };
}
