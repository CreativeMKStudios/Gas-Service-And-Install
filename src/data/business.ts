export const business = {
  name: "Gas Service And Install",
  engineer: "Chris",
  phoneDisplay: "07738 598396",
  phoneTel: "+447738598396",
  gasSafe: "676449",
  rating: "5.0",
  reviewCount: 72,
  established: 2001,
  placeId: "ChIJewL-WNQX6a0RuFIlpzmue48",
  mapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJewL-WNQX6a0RuFIlpzmue48",
  mapsShortUrl: "https://maps.app.goo.gl/34NTC6Zd9Y2sxbnt5",
  yellUrl: "https://www.yell.com/biz/gas-service-and-install-bedford-10826241/",
  jobQuoteUrl: "https://www.myjobquote.co.uk/t/gas-service-and-install",
  gasSafeUrl: "https://www.gassaferegister.co.uk/",
  emergencyPhoneDisplay: "0800 111 999",
  emergencyPhoneTel: "0800111999",
  locality: "Houghton Conquest",
  region: "Bedfordshire",
  country: "GB",
  lat: 52.0640128,
  lng: -0.4623577,
  description:
    "I provide reliable, certificated Gas, Heating and Plumbing services in the commercial and domestic sector.",
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "06:00", closes: "17:00", label: "6am–5pm" },
    { days: ["Friday"], opens: "06:00", closes: "16:00", label: "6am–4pm" },
    { days: ["Saturday", "Sunday"], opens: "", closes: "", label: "Closed" },
  ],
} as const;

export const googleReviews = [
  {
    name: "Kate Buck",
    date: "2026-06-10",
    dateLabel: "10 June 2026",
    text: "Chris regularly services our boiler and any other work that is needed in the home. He is highly reliable, very efficient and polite. Chris is open and honest around the work that is needed and reasonably priced. I highly recommend Chris and the outstanding service he provides.",
  },
  {
    name: "June Loak",
    date: "2026-06-10",
    dateLabel: "10 June 2026",
    text: "Chris has been absolutely fantastic! He fitted our new boiler with real skill and efficiency, and the quality of his work is outstanding. He explained everything clearly before he left, which made the whole process so easy. As a landlord, I really appreciate how thorough he is with the annual gas safety checks. He handled the full inspection carefully and provided all the compliance paperwork straight away — completely stress-free. What really makes Chris stand out is his reliability. He responds promptly to deal with any emergency, and that kind of reassurance is priceless. Every job is done tidily, efficiently, and with total professionalism. I can’t recommend Chris highly enough for boiler installations, gas safety checks, and any plumbing work. A brilliant, trustworthy tradesperson who genuinely goes the extra mile.",
  },
  {
    name: "Stefan Pudylyk",
    date: "2026-06-10",
    dateLabel: "10 June 2026",
    text: "I am writing to provide feedback on the plumbing work completed by Chris and Gary. They were efficient, reliable, and friendly, and they took the time to explain the work they were undertaking. They did a great job, and I would not hesitate to call them again for future needs.",
  },
  {
    name: "Noel O'Sullivan",
    date: "2026-06-10",
    dateLabel: "10 June 2026",
    text: "Chris installed my Vaillant boiler back in 2017, and he did such a good job I’ve trusted him to service it every year since. He’s friendly, knowledgeable, trustworthy and reliable, and I wouldn’t hesitate to call on his services.",
  },
  {
    name: "Christopher Rumble",
    date: "2026-06-10",
    dateLabel: "10 June 2026",
    text: "Chris Andrews has serviced my boiler since 2022 and has provide a punctual and efficient service. He also advised me when i wanted to add a hive controller and provide and installed it for me. I have been very happy with the service he has provided and went on to recommend him to my daughter.",
  },
] as const;

export const otherReviews = [
  {
    name: "Dave",
    source: "Yell",
    dateLabel: "3 July 2024",
    context: "Boiler change",
    url: business.yellUrl,
    text: "Chris fitted a new boiler in a completely different part of our house so a big job, the quality of the finished job was amazing, pipe work was a piece of art, the disruption to our family was minimal. The installation also included a new roof flue, again fitted perfectly. Would recommend Chris to anyone that wants a skilled engineer that comes when he says and charges such good prices compared to other companies. So friendly, always smiling and a pleasure to have working in your home.",
  },
  {
    name: "Lydia",
    source: "Yell",
    dateLabel: "3 July 2024",
    context: "Boiler fault",
    url: business.yellUrl,
    text: "Chris is a great gas engineer, he diagnosed my boiler fault within seconds. He under took the work to a high standard and is reasonably priced.",
  },
  {
    name: "Amy",
    source: "MyJobQuote",
    dateLabel: "15 July 2024",
    context: "Replace a domestic gas oven",
    url: business.jobQuoteUrl,
    text: "Punctual, polite and efficient. I would not hesitate to contact Chris for any future work.",
  },
  {
    name: "Aba",
    source: "MyJobQuote",
    dateLabel: "27 June 2024",
    context: "Remove and cap a gas hob",
    url: business.jobQuoteUrl,
    text: "Fast and professional work.",
  },
  {
    name: "Chris",
    source: "MyJobQuote",
    dateLabel: "12 June 2024",
    context: "Reroute external gas pipework",
    url: business.jobQuoteUrl,
    text: "Chris was excellent and provided a punctual, polite and very professional service. His knowledge and quality of work were exempliary, and Chris even gave time to do additional work at my request on the day over what he had previously quoted. His boiler servicing was thorough, and excellent value for money, holding good knowledge of system and ready to offer advice and guidance to ensure my boiler continued to give effective service. I will be using Chris again and highly recommend his work and services to anyone who is looking for a very reliable and professional tradesman.",
  },
] as const;

export const topics = [
  { name: "Boiler installation", count: 19 },
  { name: "Quality of work", count: 8 },
  { name: "Trustworthy staff", count: 3 },
  { name: "Clear communication", count: 3 },
  { name: "Emergency response", count: 2 },
  { name: "Leak repair", count: 2 },
  { name: "Major repairs", count: 2 },
  { name: "Water tank", count: 2 },
  { name: "Clear explanations", count: 2 },
] as const;

export type PhotoKey = "plant" | "combi" | "vanBrand" | "vanWash" | "badge";

export const photos: Record<
  PhotoKey,
  { alt: string; caption: string; width: number; height: number }
> = {
  plant: {
    alt: "Plant room with two white Ideal boilers, an Andrews water heater, insulated pipes and a grey expansion vessel",
    caption:
      "Two Ideal boilers next to an Andrews water heater, with a header, pumps and an expansion vessel. Posted on the Google profile on 10 June 2026.",
    width: 2000,
    height: 1500,
  },
  combi: {
    alt: "White Ideal combi boiler fitted in a cupboard with copper pipes, during a room refit",
    caption:
      "An Ideal combi with copper pipework, fitted while the cupboard and floor were still unfinished. Posted on the Google profile on 10 June 2026.",
    width: 2000,
    height: 2667,
  },
  vanBrand: {
    alt: "Gas Service And Install van, showing the Gas Safe number 676449 and the Ideal Heating Max badge",
    caption:
      "The van, with Gas Safe number 676449 and the Ideal Heating Max badge. Posted on the Google profile on 6 July 2024.",
    width: 720,
    height: 1280,
  },
  vanWash: {
    alt: "The Gas Service And Install Ford van, registration CA64 GAS, being washed outside a house",
    caption:
      "The van on a wash day. The registration is CA64 GAS. Posted on the Google profile on 6 July 2024.",
    width: 1080,
    height: 1920,
  },
  badge: {
    alt: "Ideal Heating Max and Gas Safe 676449 badges on the back of the company van",
    caption: "The badges on the van, cropped from the Google profile photo posted on 6 July 2024.",
    width: 960,
    height: 600,
  },
};

export interface ServiceSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  photo: PhotoKey;
  lead: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "boiler-installation",
    name: "Boiler installation",
    short: "New combis, system boilers and replacements, fitted and explained before we leave.",
    title: "Boiler Installation in Bedford",
    description:
      "New boiler and boiler replacement in Bedford and nearby villages. Ideal Heating Max accredited. Call Gas Service And Install on 07738 598396.",
    h1: "Boiler installation",
    photo: "combi",
    lead: "A new boiler is a big job in a small space. We swap tired combis, fit system boilers, and we also take on larger plant rooms with more than one boiler.",
    sections: [
      {
        heading: "What you can book",
        bullets: [
          "A straight swap of a combi boiler",
          "A move to a new place in the house, including a new flue",
          "A system boiler with a cylinder",
          "A plant room with more than one boiler",
        ],
      },
      {
        heading: "Makes we fit",
        paragraphs: [
          "The van carries an Ideal Heating Max accredited installer badge, and the jobs on our Google profile are Ideal boilers. A customer in Noel O'Sullivan's review has had a Vaillant, fitted in 2017, serviced every year since. The van also shows a Baxi badge.",
          "We will tell you which boiler suits the house. We do not push a make just to sell a box.",
        ],
      },
      {
        heading: "How a fit usually goes",
        paragraphs: [
          "Tell us the make and age of the old boiler if you know it, where it sits, and whether you still have a tank. We look at the system and price the job before we start.",
          "On the day we protect the work area, fit the boiler and flue, test the gas and the heating, and walk you through the controls before we leave. Where a warranty needs it, the boiler is registered with the manufacturer.",
        ],
      },
      {
        heading: "A real example",
        paragraphs: [
          "Dave, writing on Yell in July 2024, asked for a boiler in a different part of the house. That included a new roof flue. He wrote that the pipework was tidy and the family was not turned upside down.",
          "The cupboard photo on this site is an Ideal combi, piped in copper while the room was still being finished.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you give a fixed price before you start?",
        a: "Yes. We look at the job and tell you the price before any work starts. Houses differ, so we do not print a single price for every swap.",
      },
      {
        q: "Can you move the boiler?",
        a: "Yes. One published job moved the boiler to another part of the house and needed a new roof flue. We will say if the route for the flue is suitable.",
      },
    ],
  },
  {
    slug: "boiler-servicing",
    name: "Boiler servicing",
    short: "A yearly safety and performance check, with a clear note of anything that is wearing out.",
    title: "Boiler Servicing in Bedford",
    description:
      "Annual boiler servicing around Bedford by a Gas Safe registered engineer. Call 07738 598396 to book a service in weekday hours.",
    h1: "Boiler servicing",
    photo: "plant",
    lead: "A service is a yearly check that the boiler is safe and burning as it should. A lot of our work is people who book the same visit every year.",
    sections: [
      {
        heading: "Why book it",
        paragraphs: [
          "A missed service is how small faults turn into a cold house in January. Kate Buck books Chris for the regular service and for other jobs in the house. Noel has used him every year since a new boiler in 2017. Christopher Rumble has booked the service since 2022.",
        ],
      },
      {
        heading: "What the visit covers",
        paragraphs: [
          "We check the flue, the burner, the safety controls and the condensate. We look for leaks, poor combustion and parts that are on the way out. You get a plain explanation, not a code and a shrug.",
          "If something needs a repair, we say what it is and what it costs before we do it. A service is not a blank cheque.",
        ],
      },
      {
        heading: "When to book",
        paragraphs: [
          "Once a year is the usual gap, often just before the heating season or on the anniversary of the last visit. Landlords need their gas safety check on its own 12 month cycle. A service and a landlord check are not the same piece of paper.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to be in?",
        a: "Yes. We need access to the boiler, and an adult needs to be home. If the boiler is in a locked cupboard, please have the key ready.",
      },
      {
        q: "Will you service an older boiler?",
        a: "Yes, as long as it is safe to work on. If parts are no longer made, or the boiler is unsafe, we will say so and talk through a replacement.",
      },
    ],
  },
  {
    slug: "boiler-repair",
    name: "Boiler repair",
    short: "No heat, no hot water, leaks and lockouts. We find the fault, then price the fix.",
    title: "Boiler Repair in Bedford",
    description:
      "Boiler repairs for homes around Bedford and Houghton Conquest. Weekday callouts from 6am. Phone 07738 598396.",
    h1: "Boiler repair",
    photo: "plant",
    lead: "No heat, no hot water, a drip, or a boiler that will not stay lit. We find the fault first. Then we tell you the cost before we fit a part.",
    sections: [
      {
        heading: "Faults we see often",
        bullets: [
          "No heating, no hot water, or both",
          "Leaks at the boiler, the valves or the pipework",
          "Boilers that lock out or show a fault code",
          "Low pressure that will not stay up",
          "Noisy pumps, fans or kettling",
        ],
      },
      {
        heading: "What to tell us on the phone",
        paragraphs: [
          "The make and model, the fault code if there is one, and whether you have any heat or hot water at all. A photo of the badge inside the front flap helps. You can text that to 07738 598396.",
          "Lydia wrote on Yell that a boiler fault was found within seconds and the repair was done to a high standard. That is the aim. Some faults still need a part that is not on the van. If so, we say that before we order it.",
        ],
      },
      {
        heading: "If the boiler is unsafe",
        paragraphs: [
          "An unsafe appliance has to be turned off. We will explain why, in plain words, before we leave. We will not leave a dangerous boiler running just to keep the heat on.",
          "If you smell gas, do not call us first. Leave the building, do not use switches, and call the gas emergency line on 0800 111 999.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work weekends?",
        a: "No. The Google hours are Monday to Thursday, 6am to 5pm, and Friday 6am to 4pm. Saturday and Sunday are closed. Call during those hours and we will tell you when we can get there.",
      },
      {
        q: "Is a repair always worth it?",
        a: "Not always. If the boiler is old and the repair is large, we will say so. You choose. We do not take the old boiler away and fit a new one unless you have agreed the price.",
      },
    ],
  },
  {
    slug: "landlord-gas-safety",
    name: "Landlord gas safety",
    short: "The yearly gas safety check for rented homes, with the record left for you and the tenant.",
    title: "Landlord Gas Safety Checks",
    description:
      "Landlord gas safety checks (CP12) in Bedfordshire by Gas Safe engineer 676449. Records for rented homes. Call 07738 598396.",
    h1: "Landlord gas safety checks",
    photo: "badge",
    lead: "If you let a home with gas appliances, you need a gas safety check every 12 months. A Gas Safe registered engineer does the check and writes the record.",
    sections: [
      {
        heading: "What the law asks for",
        paragraphs: [
          "The check covers the gas appliances you own, the flues and the ventilation. You must keep the record for two years and give a copy to each tenant. New tenants should have a copy before they move in, or within 28 days of the check if it is already let.",
          "This is separate from a boiler service. A service keeps the boiler running well. The safety record shows the appliances were safe to use on the day of the check.",
        ],
      },
      {
        heading: "How we handle it",
        paragraphs: [
          "June Loak, a landlord, wrote that the annual checks are thorough and the paperwork is left straight away. That is how this visit should end when the appliances pass.",
          "If something fails, we do not sign it off as safe. We tell you what failed, what it will take to put right, and we only issue the record once the appliance is safe.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the tenant be there instead of me?",
        a: "Yes, as long as we can get to every appliance, flue and meter. Tell the tenant we are coming, and tell us if a pet needs to be shut away.",
      },
      {
        q: "Do you check appliances the tenant owns?",
        a: "The landlord record covers appliances you provide. If you want a tenant's own cooker checked as well, say so when you book and we will include it if we can reach it.",
      },
    ],
  },
  {
    slug: "plumbing-and-heating",
    name: "Plumbing and heating",
    short: "Leaks, cylinders, pipework and heating controls, including Hive.",
    title: "Plumbing and Heating in Bedford",
    description:
      "Heating leaks, cylinders, pipework and Hive controls around Bedford. Chris and, on some jobs, Gary. Call 07738 598396.",
    h1: "Plumbing and heating",
    photo: "plant",
    lead: "Not every call is a new boiler. We repair leaks, work on tanks and cylinders, alter pipework, and fit heating controls.",
    sections: [
      {
        heading: "Work customers have booked",
        bullets: [
          "Leak repairs, which Google lists as a review topic",
          "Water tanks and cylinders, also a review topic, and shown in the plant room photo",
          "External gas pipework rerouted, from a MyJobQuote job in June 2024",
          "A Hive controller, supplied and fitted for Christopher Rumble",
          "Plumbing jobs where Gary works with Chris, as Stefan Pudylyk described",
        ],
      },
      {
        heading: "What this is not",
        paragraphs: [
          "We are a gas, heating and plumbing engineer, not a full bathroom fitter or a kitchen studio. If your job is a tap, a leak, a radiator, a cylinder or the heating controls, call. If it is a whole new bathroom, we will tell you honestly if it is outside what we do.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who will turn up?",
        a: "Chris. On some plumbing jobs he works with Gary. You will not get a different stranger from a call centre.",
      },
      {
        q: "Can you fit a Hive or another thermostat?",
        a: "Yes. One customer asked for a Hive, and Chris supplied it and fitted it. Tell us what you have now and we will say if the new control will work with the boiler.",
      },
    ],
  },
  {
    slug: "gas-appliances",
    name: "Gas cookers and hobs",
    short: "Gas ovens and hobs fitted, removed, or capped off when they come out.",
    title: "Gas Cooker and Hob Installation",
    description:
      "Gas oven and hob fitting, removal and capping around Bedford. Gas Safe registered. Call 07738 598396 for a quote.",
    h1: "Gas cookers and hobs",
    photo: "combi",
    lead: "We fit and remove gas ovens and hobs, and we cap the pipe when an appliance comes out. A cooker is gas work. It is not a DIY job.",
    sections: [
      {
        heading: "Jobs on record",
        paragraphs: [
          "In 2024 Amy booked a domestic gas oven replacement and described the visit as punctual, polite and efficient. Aba booked a gas hob removal and cap, and called it fast and professional.",
          "If you are replacing an electric cooker with gas, we need a safe route for the pipe and a bay that the appliance can sit in. Send a photo of the space and the gas point if you have one.",
        ],
      },
      {
        heading: "Gas fires",
        paragraphs: [
          "The Yell listing includes gas fires. If you have a fire to service, repair or remove, call and describe it. We would rather tell you on the phone than guess from a heading.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you just cap a pipe?",
        a: "Yes. If an appliance is leaving and nothing is going back yet, the open pipe has to be capped and tested. That is a normal job.",
      },
      {
        q: "Do you sell cookers?",
        a: "We fit the appliance. If you already have one, we can install it, as long as it is suitable for the space and the flue or vent it needs.",
      },
    ],
  },
  {
    slug: "commercial-plant",
    name: "Commercial plant",
    short: "Larger heating and hot water, including plant rooms with more than one boiler.",
    title: "Commercial Gas and Plant Rooms",
    description:
      "Commercial gas, heating and hot water around Bedford. Plant rooms as well as houses. Gas Safe 676449. Call 07738 598396.",
    h1: "Commercial heating and plant rooms",
    photo: "plant",
    lead: "The business covers commercial work as well as houses. If you look after a small site with a plant room, we can help.",
    sections: [
      {
        heading: "What the photo shows",
        paragraphs: [
          "The main photo on the Google profile is a plant room. It has two wall-hung Ideal boilers, an Andrews water heater, insulated flow and return pipes, a header, pumps and a grey expansion vessel. That is bigger than a single combi in a kitchen cupboard, and it is work we do.",
          "Chris's own line on Google is that he provides certificated gas, heating and plumbing in the commercial and domestic sector.",
        ],
      },
      {
        heading: "A sensible limit",
        paragraphs: [
          "This is a local engineer, not a national contractor with a night shift. Large sites with a facilities contract may need a bigger firm. If you are unsure, call and describe the plant. We will say yes or no.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover LPG as well as mains gas?",
        a: "The Yell listing for this Gas Safe number includes natural gas and LPG. Tell us which one you have when you call, and where the bottles or the tank sit.",
      },
      {
        q: "Do you work on unvented cylinders?",
        a: "Yes. Unvented hot water is listed on the Yell profile, and the plant room photo shows a large water heater and cylinder pipework. We will confirm the vessel type on site.",
      },
    ],
  },
];

export const areas: { name: string; miles: string; note: string }[] = [
  { name: "Houghton Conquest", miles: "Base", note: "The Google listing is pinned here. We come to you. We do not publish a house address." },
  { name: "Haynes", miles: "2 miles", note: "East of the base, towards the A600." },
  { name: "Stewartby", miles: "2 miles", note: "West of us. A lot of the houses were built for the old brickworks." },
  { name: "Maulden", miles: "2 miles", note: "South, between us and Ampthill." },
  { name: "Wixams", miles: "2 miles", note: "The newer village north of us, on the way into Bedford." },
  { name: "Wilstead", miles: "3 miles", note: "North-east, just before Elstow and Bedford." },
  { name: "Ampthill", miles: "3 miles", note: "The nearest market town, south of us on the ridge." },
  { name: "Clophill", miles: "3 miles", note: "South-east, towards Shefford and the A6." },
  { name: "Wootton", miles: "3 miles", note: "North-west, on the Bedford side of the woods." },
  { name: "Elstow", miles: "3 miles", note: "North, on the edge of Bedford." },
  { name: "Millbrook", miles: "3 miles", note: "South-west, next to the testing ground." },
  { name: "Cotton End", miles: "3 miles", note: "North-east, past Wilstead." },
  { name: "Marston Moretaine", miles: "4 miles", note: "West, towards Cranfield." },
  { name: "Kempston", miles: "4 miles", note: "North, on the west side of Bedford." },
  { name: "Silsoe", miles: "4 miles", note: "South, past Maulden." },
  { name: "Flitwick", miles: "4 miles", note: "South, on the railway. Older streets and newer estates." },
  { name: "Lidlington", miles: "4 miles", note: "South-west of Millbrook." },
  { name: "Shortstown", miles: "4 miles", note: "North, by Cardington." },
  { name: "Cardington", miles: "4 miles", note: "North-east. The sheds are the landmark." },
  { name: "Bedford", miles: "5 miles", note: "The main town to the north. Terraces, semis and new builds." },
  { name: "Biddenham", miles: "6 miles", note: "West of Bedford town centre." },
  { name: "Great Denham", miles: "6 miles", note: "The newer housing west of Bedford." },
  { name: "Shefford", miles: "6 miles", note: "East, past Clophill." },
  { name: "Cranfield", miles: "6 miles", note: "West, by the airfield and the university." },
  { name: "Barton-le-Clay", miles: "7 miles", note: "South, towards Luton. Call if you are on this edge." },
  { name: "Bromham", miles: "7 miles", note: "North-west of Bedford." },
  { name: "Clapham", miles: "7 miles", note: "North of Bedford, not Clapham in London." },
  { name: "Oakley", miles: "8 miles", note: "North-west. Call if you want us to confirm the trip." },
];

export const homeFaqs = [
  {
    q: "Are you Gas Safe registered?",
    a: "Yes. The registration number is 676449. It is printed on the van and listed on Yell. You can check any engineer on the Gas Safe Register website before you book.",
  },
  {
    q: "Where do you cover?",
    a: "We are based in Houghton Conquest. We work across Bedford and the villages within about 8 miles. If you are further out, call and we will tell you straight.",
  },
  {
    q: "What are your hours?",
    a: "Monday to Thursday, 6am to 5pm. Friday, 6am to 4pm. Closed Saturday and Sunday. There is no weekend cover on the Google listing.",
  },
  {
    q: "I can smell gas. What should I do?",
    a: "Leave the building. Do not touch switches. Call the National Gas Emergency line on 0800 111 999. Call us after the emergency team says it is safe to repair the appliance.",
  },
  {
    q: "How do I get a price?",
    a: "Call or text 07738 598396, or use the form on the contact page to draft a message. We price the job in front of us. We do not publish a fixed list, because a cupboard combi and a plant room are not the same job.",
  },
];

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
