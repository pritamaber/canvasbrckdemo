import {
  Armchair,
  Building2,
  CalendarCheck,
  CookingPot,
  Factory,
  Flame,
  Gem,
  Hammer,
  HardHat,
  Landmark,
  PencilRuler,
  ReceiptText,
  Sofa,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ————— image helpers ————————————————————————————————————————
   All media is local, from real Indian studios:
   · /assets/cinematic  — The KariGhars project renders & brand film
   · /assets/editorial  — Floorsy (Kolkata) renders, walkthrough films & team
—————————————————————————————————————————————————————————— */

export const cin = (f: string) => `/assets/cinematic/${f}`;
export const edi = (f: string) => `/assets/editorial/${f}`;

/* ————————————————————————— studio ————————————————————————— */

export const site = {
  name: "Canvas & Brick",
  legalLine: "A Mozammel Haque Timbers company · Est. 1974",
  tagline: "From timber to timeless spaces.",
  phone: "+91 98300 00000",
  phoneHref: "tel:+919830000000",
  whatsapp:
    "https://wa.me/919830000000?text=Hello%20Canvas%20%26%20Brick%2C%20I%27d%20like%20to%20book%20a%20design%20consultation.",
  email: "hello@canvasandbrick.in",
  address: "Studio 12, Main Arterial Road, Rajarhat, New Town, Kolkata 700135",
  addressShort: "Rajarhat, New Town, Kolkata",
  hours: "Mon – Sat · 10:00 – 19:00",
  year: "2026",
};

export const navLinks = [
  { label: "Legacy", href: "#legacy" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Craft", href: "#craft" },
  { label: "Estimate", href: "#estimate" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 50, suffix: "+", label: "Years of craft" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "", label: "Generations" },
  { value: 40, suffix: "+", label: "In-house craftsmen" },
];

/* ————————————————————————— heroes ————————————————————————— */

export const heroCinematic = {
  eyebrow: "Est. 1974 — Rajarhat, Kolkata",
  titleLines: ["Where timeless craftsmanship", "meets modern living."],
  sub: "Five decades of timber heritage, refined into one of Eastern India’s most considered interior design studios. We design, manufacture and deliver — under one roof, under one promise.",
  video: cin("hero.mp4"),
  poster: cin("hero-poster.jpg"),
};

export const heroEditorial = {
  metaLeft: "Interior design studio — Kolkata",
  metaRight: "Est. 1974",
  titleA: "Crafting spaces",
  titleB: "that feel like",
  titleItalic: "home.",
  sub: "Turnkey interiors, custom furniture and renovation for people who notice the details. Designed in Rajarhat, built in our own workshop, delivered on the date we put in writing.",
  video: edi("hero.mp4"),
  poster: edi("hero-poster.jpg"),
  caption: "Walk-through — The Ivory Residence, Ballygunge · completed 2025",
};

export const marqueeItems = [
  "Turnkey Interiors",
  "Custom Furniture",
  "Modular Kitchens",
  "Pooja Units",
  "Residential",
  "Commercial",
  "Renovation",
  "Since 1974",
];

/* ————————————————————————— legacy ————————————————————————— */

export const legacy = {
  eyebrow: "Our legacy",
  heading: "Fifty years in the making.",
  intro:
    "Canvas & Brick is the modern evolution of Mozammel Haque Timbers — a family business that has supplied, shaped and finished wood in Rajarhat since 1974. Three generations later, the same hands-on standards guide a full interior design studio.",
  image: cin("buddha-foyer.jpg"),
  imageCaption: "Hand-set jali, brass and seasoned veneer — finished in our own workshop",
  imageE: "/assets/portfolio/living/livingroom_010.jpg",
  imageCaptionE:
    "A recent Canvas & Brick living room — designed and built in our own workshop",
  timeline: [
    {
      year: "1974",
      title: "The timber yard",
      body: "Mozammel Haque opens a modest timber yard in Rajarhat. Builders and carpenters across Kolkata come to trust one thing above all — the wood is exactly what he says it is.",
    },
    {
      year: "1989",
      title: "The furniture workshop",
      body: "The second generation adds a furniture workshop. Beds, wardrobes and dining tables leave Rajarhat for homes across Bengal, each one built to outlast its warranty by decades.",
    },
    {
      year: "2004",
      title: "Interior woodwork",
      body: "Architects and developers begin commissioning full interior woodwork — panelling, wardrobes, kitchens. The family learns to read drawings as fluently as grain.",
    },
    {
      year: "Today",
      title: "Canvas & Brick",
      body: "The third generation brings design under the same roof as making. A complete studio — designers, engineers and craftsmen — delivering homes and workplaces from ₹10 lakh to ₹2 crore.",
    },
  ],
};

/* ————————————————————————— why ————————————————————————— */

export const whyItems: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Landmark,
    title: "Fifty years of trust",
    body: "We have been accountable to Kolkata since 1974. Our reputation was earned one delivery at a time — and we protect it on every project.",
  },
  {
    icon: Factory,
    title: "Our own manufacturing",
    body: "Wardrobes, kitchens and furniture are built in our Rajarhat workshop, not outsourced. You get factory precision with a craftsman’s eye.",
  },
  {
    icon: Gem,
    title: "Materials, chosen by hand",
    body: "Seasoned sheesham and teak, honest veneers, marble we have stood in front of. We specify exactly what goes into your home — and show you.",
  },
  {
    icon: ReceiptText,
    title: "Transparent pricing",
    body: "Line-item estimates in rupees before you commit. No shifting numbers mid-project, no surprises at handover.",
  },
  {
    icon: Users,
    title: "One dedicated team",
    body: "A single project manager owns your home from first sketch to final polish, backed by our own designers and site engineers.",
  },
  {
    icon: CalendarCheck,
    title: "Dates we put in writing",
    body: "Because design, manufacturing and execution sit under one roof, our timelines are ours to keep — even in festive season, we hand over before Diwali, not after.",
  },
];

/* ————————————————————————— services ————————————————————————— */

export const services: {
  icon: LucideIcon;
  name: string;
  blurb: string;
  image: string;
  imageE: string;
  comingSoon?: boolean;
}[] = [
  {
    icon: PencilRuler,
    name: "Turnkey Interiors",
    blurb:
      "Design to handover, one contract. We carry your home through drawings, manufacturing, site work and styling.",
    image: cin("living-gold-1.jpg"),
    imageE: edi("living-warm.jpg"),
  },
  {
    icon: Sofa,
    name: "Residential Interiors",
    blurb:
      "Apartments, duplexes and family homes — designed around how you actually live, not around a catalogue.",
    image: cin("living-gold-4.jpg"),
    imageE: edi("bhk/2-1.jpg"),
  },
  {
    icon: Building2,
    name: "Commercial Interiors",
    blurb:
      "Offices, clinics and boutiques that work as hard as you do — planned for flow, acoustics and brand.",
    image: cin("living-dark.jpg"),
    imageE: edi("bhk/4-1.jpg"),
  },
  {
    icon: CookingPot,
    name: "Modular Kitchens",
    blurb:
      "Manufactured in-house to millimetre tolerances. Stone, hardware and finishes chosen for real Indian cooking — daily, for decades.",
    image: cin("kitchen-film.jpg"),
    imageE: edi("kitchen-dark.jpg"),
  },
  {
    icon: Armchair,
    name: "Custom Furniture",
    blurb:
      "One-off pieces from our own workshop — the craft that started this family in 1974, refined for fifty years.",
    image: cin("bedroom-wood.jpg"),
    imageE: edi("bhk/2-2.jpg"),
  },
  {
    icon: Flame,
    name: "Pooja & Mandir Units",
    blurb:
      "Carved jali, marble and warm brass — quiet corners for prayer, designed with vastu in mind and built to be handed down.",
    image: cin("marble-console.jpg"),
    imageE: edi("bhk/3-5.jpg"),
  },
  {
    icon: Hammer,
    name: "Renovation",
    blurb:
      "Considered transformations of lived-in homes — structure respected, character kept, everything else elevated.",
    image: cin("foyer-mirror.jpg"),
    imageE: edi("bhk/2-5.jpg"),
  },
  {
    icon: HardHat,
    name: "Construction",
    blurb:
      "Ground-up construction with the same single-roof accountability. Launching soon.",
    image: cin("balcony-pool.jpg"),
    imageE: edi("bhk/4-3.jpg"),
    comingSoon: true,
  },
];

/* ————————————————————————— projects ————————————————————————— */

export type Project = {
  name: string;
  location: string;
  category: string;
  year: string;
  scope: string;
  image: string;
  imageE: string;
  aspect: string; // tailwind aspect class for masonry rhythm
};

export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Kitchen",
  "Furniture",
  "Renovation",
  "Luxury Villas",
];

export const projects: Project[] = [
  {
    name: "The Ivory Residence",
    location: "Ballygunge",
    category: "Residential",
    year: "2025",
    scope: "4 BHK · 3,200 sq ft · turnkey",
    image: cin("living-gold-1.jpg"),
    imageE: edi("bhk/3-1.jpg"),
    aspect: "aspect-[4/3]",
  },
  {
    name: "House of Cedar",
    location: "New Town",
    category: "Residential",
    year: "2024",
    scope: "Duplex · 4,100 sq ft · turnkey",
    image: cin("atrium.jpg"),
    imageE: edi("bhk/3-2.jpg"),
    aspect: "aspect-[3/4]",
  },
  {
    name: "Sienna Apartment",
    location: "Alipore",
    category: "Renovation",
    year: "2025",
    scope: "3 BHK · full renovation",
    image: cin("living-tall-1.jpg"),
    imageE: edi("bhk/2-1.jpg"),
    aspect: "aspect-[4/3]",
  },
  {
    name: "Atelier Forty-Seven",
    location: "Salt Lake, Sector V",
    category: "Commercial",
    year: "2024",
    scope: "Design office · 5,600 sq ft",
    image: cin("living-dark.jpg"),
    imageE: edi("bhk/4-1.jpg"),
    aspect: "aspect-[3/4]",
  },
  {
    name: "The Longhouse Desk",
    location: "Park Street",
    category: "Commercial",
    year: "2023",
    scope: "Boutique workspace · 2,800 sq ft",
    image: cin("foyer-mirror.jpg"),
    imageE: edi("bhk/4-4.jpg"),
    aspect: "aspect-[4/3]",
  },
  {
    name: "Walnut & Stone Kitchen",
    location: "Rajarhat",
    category: "Kitchen",
    year: "2025",
    scope: "L-shaped modular · quartz & teak",
    image: cin("kitchen-film.jpg"),
    imageE: edi("kitchen-dark.jpg"),
    aspect: "aspect-[3/4]",
  },
  {
    name: "The Charcoal Kitchen",
    location: "EM Bypass",
    category: "Kitchen",
    year: "2024",
    scope: "Island kitchen · fluted oak",
    image: cin("kitchen-film.jpg"),
    imageE: edi("kitchen-white.jpg"),
    aspect: "aspect-[4/3]",
  },
  {
    name: "The Haque Lounge Chair",
    location: "Studio collection",
    category: "Furniture",
    year: "2025",
    scope: "Limited series · seasoned teak",
    image: cin("living-square.jpg"),
    imageE: edi("bhk/2-2.jpg"),
    aspect: "aspect-[1/1]",
  },
  {
    name: "Bedroom in Umber",
    location: "Ballygunge Place",
    category: "Renovation",
    year: "2023",
    scope: "Primary suite · restoration",
    image: cin("bedroom-wood.jpg"),
    imageE: edi("bhk/3-4.jpg"),
    aspect: "aspect-[4/3]",
  },
  {
    name: "Villa Meridian",
    location: "Raichak-on-Ganges",
    category: "Luxury Villas",
    year: "2025",
    scope: "Weekend villa · 7,400 sq ft",
    image: cin("balcony-pool.jpg"),
    imageE: edi("living-warm.jpg"),
    aspect: "aspect-[4/3]",
  },
  {
    name: "The Terrace House",
    location: "Santiniketan",
    category: "Luxury Villas",
    year: "2024",
    scope: "Courtyard villa · 5,900 sq ft",
    image: cin("terrace-night.jpg"),
    imageE: edi("history-room.jpg"),
    aspect: "aspect-[3/4]",
  },
  {
    name: "Reading Room in Teak",
    location: "Salt Lake",
    category: "Furniture",
    year: "2024",
    scope: "Library wall · hand joinery",
    image: cin("buddha-foyer.jpg"),
    imageE: edi("bhk/4-5.jpg"),
    aspect: "aspect-[3/4]",
  },
];

/* ————————————————————————— craftsmanship ————————————————————————— */

export const craft = {
  eyebrow: "Craftsmanship & materials",
  heading: "We were material people before we were designers.",
  intro:
    "Every Canvas & Brick interior is specified down to the hinge. These are the materials we stand behind — because we have worked with them for fifty years.",
  quote:
    "“We still select every plank the way my grandfather did — by hand, in daylight.”",
  quoteAttribution: "— The third generation, Canvas & Brick",
  bandImage: cin("jali-partition.jpg"),
  filmE: edi("craft.mp4"),
  filmPosterE: edi("craft-poster.jpg"),
  filmCaptionE:
    "Inside a Canvas & Brick handover — kitchen to wardrobe, thirty seconds",
  materials: [
    {
      name: "Seasoned sheesham & teak",
      note: "Kiln-dried, hand-graded, matched for grain",
      image: cin("bedroom-wood.jpg"),
      imageE: edi("bhk/3-2.jpg"),
    },
    {
      name: "Marble & Kota stone",
      note: "Slabs chosen in person, never from photographs",
      image: cin("marble-console.jpg"),
      imageE: edi("bhk/4-4.jpg"),
    },
    {
      name: "Brass, jali & inlay",
      note: "Cut, pierced and polished the unhurried way",
      image: cin("jali-partition.jpg"),
      imageE: edi("living-teal.jpg"),
    },
    {
      name: "Precision joinery",
      note: "Workshop-cut joints, assembled without shortcuts",
      image: cin("foyer-mirror.jpg"),
      imageE: edi("bhk/2-2.jpg"),
    },
    {
      name: "Light, layered for festivals",
      note: "Cove, brass and candlelight — planned at drawing stage",
      image: cin("atrium.jpg"),
      imageE: edi("bhk/4-3.jpg"),
    },
    {
      name: "Honest finishes",
      note: "Low-VOC polishes that age gracefully",
      image: cin("living-gold-2.jpg"),
      imageE: edi("bhk/3-1.jpg"),
    },
  ],
};

/* ————————————————————————— process ————————————————————————— */

export const processSteps = [
  {
    title: "Consultation",
    body: "We listen first — your rooms, routines and budget. You leave with an honest sense of scope, not a sales pitch.",
    duration: "Week 1",
  },
  {
    title: "Design & planning",
    body: "Layouts, materials and a line-item estimate. Nothing proceeds until the numbers and drawings both feel right to you.",
    duration: "Weeks 2–4",
  },
  {
    title: "3D visualisation",
    body: "Walk through your home before a single board is cut. Revisions happen here, where they cost nothing.",
    duration: "Weeks 4–6",
  },
  {
    title: "Execution & manufacturing",
    body: "Our workshop builds while our site team prepares. One project manager, one schedule, weekly photo updates.",
    duration: "Weeks 6–14",
  },
  {
    title: "Quality inspection",
    body: "A 200-point check by someone who did not build it. Alignments, finishes, hardware — everything earns its sign-off.",
    duration: "Final week",
  },
  {
    title: "Handover & aftercare",
    body: "A styled, cleaned, documented home — with a 5-year woodwork warranty and a team that still answers the phone.",
    duration: "Day 0 + 5 years",
  },
];

/* ————————————————————————— testimonials ————————————————————————— */

export const testimonials = [
  {
    quote:
      "They gave us a date in writing and handed over four days early. In Kolkata, for a full 4 BHK, that still feels impossible to say out loud.",
    name: "Ritwika & Anirban Sen",
    meta: "4 BHK turnkey · Ballygunge",
  },
  {
    quote:
      "I was in Singapore for the entire renovation. The weekly photographs were so thorough that walking in the door felt like déjà vu — in the best way.",
    name: "Dr. Meera Bhattacharya",
    meta: "Full renovation · New Town",
  },
  {
    quote:
      "Their team treated our office like a flagship store. Clients now ask who did the space before they ask about our work.",
    name: "Rahul Agarwal",
    meta: "Founder, Attire & Co. · Park Street",
  },
  {
    quote:
      "The furniture is the quiet star. Fifty years of woodworking is not a tagline — you can run your hand along it.",
    name: "Farhan & Nusrat Ali",
    meta: "Villa Meridian · Raichak-on-Ganges",
  },
];

/* ————————————————————————— faq ————————————————————————— */

export const faqs = [
  {
    q: "What budget range do you work in?",
    a: "Our projects typically range from ₹10 lakh for focused scopes to ₹2 crore for complete villas. After the first consultation you receive a line-item estimate, so you always know where every rupee goes before you commit. The estimate tool on this page gives you an honest starting range in two minutes.",
  },
  {
    q: "How long does a full home take?",
    a: "A typical 3–4 BHK turnkey project takes 8 to 14 weeks from approved drawings to handover. Because manufacturing happens in our own workshop, our schedule doesn’t depend on third-party vendors — which is why we can put dates in writing.",
  },
  {
    q: "Do you really manufacture in-house?",
    a: "Yes — it’s the heart of the company. Wardrobes, kitchens, panelling and furniture are built in our Rajarhat workshop, operating since 1974. You’re welcome to visit and watch your own furniture being made.",
  },
  {
    q: "How involved will I need to be?",
    a: "As involved as you’d like. Most clients attend three or four key sessions — briefing, design sign-off, material selection and a mid-build walkthrough. Your project manager handles everything between, with weekly photo updates.",
  },
  {
    q: "What about warranty and aftercare?",
    a: "Every project carries a 5-year warranty on woodwork and a 1-year warranty on site work, in writing. Aftercare is handled by our own team — the same people who built your home, not a call centre.",
  },
  {
    q: "Which areas do you serve?",
    a: "We’re based in Rajarhat and work across Kolkata and Eastern India — from New Town and Ballygunge to weekend homes in Raichak and Santiniketan. For projects beyond Bengal, speak to us early so we can plan logistics honestly.",
  },
];

/* ————————————————————————— press & awards ————————————————————————— */

export const pressLogos = [
  "Architectural Digest",
  "Elle Decor India",
  "Beautiful Homes",
  "The Telegraph",
  "Times of India",
  "Better Interiors",
  "Design Pataki",
];

export const awards: { year: string; title: string; body: string }[] = [
  {
    year: "2025",
    title: "Boutique Interior Studio of the Year — East",
    body: "Eastern India Design Awards, for the Villa Meridian turnkey delivery.",
  },
  {
    year: "2024",
    title: "Excellence in Modular Manufacturing",
    body: "IndiaWood Guild, recognising fifty years of in-house woodcraft.",
  },
  {
    year: "2024",
    title: "Best Residential Project — Kolkata",
    body: "Bengal Architecture & Interior Forum, The Ivory Residence.",
  },
  {
    year: "2023",
    title: "Sustainable Materials Commendation",
    body: "Green Interiors Council, for low-VOC finishes and honest sourcing.",
  },
];

/* ————————————————————————— cta ————————————————————————— */

export const cta = {
  heading: "Let’s design something timeless.",
  sub: "Book a free consultation at our Rajarhat studio — or we’ll come to you. Bring your floor plan, your Pinterest board, or nothing at all.",
  image: cin("terrace-night.jpg"),
  primary: "Book a free consultation",
  secondary: "Call the studio",
};

/* ————————————————————————— selector ————————————————————————— */

export const selectorImages = {
  cinematic: cin("living-dark.jpg"),
  editorial: edi("living-warm.jpg"),
};

/* ————————————————————————— footer ————————————————————————— */

export const footerLinks = {
  explore: [
    { label: "Legacy", href: "#legacy" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    "Turnkey Interiors",
    "Residential & Commercial",
    "Modular Kitchens",
    "Pooja & Mandir Units",
    "Custom Furniture",
    "Renovation",
  ],
};
