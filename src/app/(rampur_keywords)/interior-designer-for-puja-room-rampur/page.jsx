// app/(bareilly_keywords)/puja-room-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Puja Room Interior Designer Rampur | Mandir Design – MTBOSS",

  description:
    "MTBOSS designs puja rooms and mandir units Rampur: wall-mounted, cabinet and separate room designs with safe lighting, ventilation and quality finishes. Get a free site visit.",

  keywords:
    "puja room interior designer Rampur, puja room interior designer in Rampur, puja room interior design Rampur, mandir design Rampur, mandir interior design Rampur, home mandir design Rampur, wall mounted mandir design Rampur, cabinet mandir design Rampur, corner mandir design Rampur, niche mandir design Rampur, marble mandir design Rampur, stone mandir design Rampur, wooden mandir design Rampur, jaali mandir design Rampur, backlit mandir design Rampur, puja room ventilation Rampur, puja room lighting design Rampur, puja room storage design Rampur, puja room false ceiling Rampur, puja room flooring Rampur, puja room wall panel design Rampur, puja room renovation Rampur, puja room waterproofing Rampur, puja room electrical planning Rampur, temple design for home Rampur, home temple interior design Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, puja room interior consultation Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/puja-room-interior-designer-rampur",
  },

  openGraph: {
    title: "Puja Room Interior Designer Rampur | Mandir Design – MTBOSS",

    description:
      "MTBOSS designs puja rooms and mandir units Rampur: wall-mounted, cabinet and separate room designs with safe lighting, ventilation and quality finishes. Get a free site visit.",

    url: "https://www.mtboss.in/puja-room-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-puja-room-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Puja Room Interior Designer Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Puja Room Interior Designer Rampur | Mandir Design – MTBOSS",

    description:
      "MTBOSS designs puja rooms and mandir units Rampur: wall-mounted, cabinet and separate room designs with safe lighting, ventilation and quality finishes. Get a free site visit.",

    images: [
      "https://www.mtboss.in/og-puja-room-interior-designer-rampur.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesignService",
    name: "MTBOSS Construction Private Limited",
    url: "https://www.mtboss.in/puja-room-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-puja-room-interior-designer-rampur.jpg",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Harthala Kanth Road, Behind KR Collection, near Domino's",
      addressLocality: "Moradabad",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rampur",
      },
      {
        "@type": "City",
        name: "Moradabad",
      },
      {
        "@type": "City",
        name: "Bareilly",
      },
      {
        "@type": "State",
        name: "Uttar Pradesh",
      },
    ],
    serviceType: [
      "Puja Room Interior Design",
      "Mandir Design",
      "Puja Room Interior Designer",
      "Home Mandir Design",
      "Wall Mounted Mandir Design",
      "Cabinet Mandir Design",
      "Corner Mandir Design",
      "Niche Mandir Design",
      "Marble Mandir Design",
      "Stone Mandir Design",
      "Wooden Mandir Design",
      "Jaali Mandir Design",
      "Backlit Mandir Design",
      "Puja Room Ventilation",
      "Puja Room Lighting Design",
      "Puja Room Storage Design",
      "Puja Room False Ceiling Service",
      "Puja Room Flooring",
      "Puja Room Wall Panel Design",
      "Puja Room Renovation",
      "Puja Room Waterproofing",
      "Puja Room Electrical Planning",
      "Temple Design for Home",
      "Home Temple Interior Design",
      "Puja Room Interior Services Quote",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Puja Room Interior Designer in Rampur",
    description:
      "MTBOSS designs puja rooms and mandir units in Rampur: wall-mounted, cabinet and separate room designs with safe lighting, ventilation and quality finishes. Services include puja room layout and space planning, mandir design in wood, stone, marble, tile or mixed materials, backdrop, carved panel and jaali design, platform and seating planning, false ceiling and lighting design, flooring, wall finishes and cladding, door and shutter design, and storage for puja items, books and oils.",
    url: "https://www.mtboss.in/puja-room-interior-designer-rampur",
    provider: {
      "@type": "InteriorDesignService",
      name: "MTBOSS Construction Private Limited",
      telephone: "+91-9458410866",
      email: "mtboss2016@gmail.com",
      url: "https://www.mtboss.in",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rampur",
      },
      {
        "@type": "City",
        name: "Moradabad",
      },
      {
        "@type": "City",
        name: "Bareilly",
      },
    ],
    serviceType:
      "Puja Room Interior Design, Mandir Design, Puja Room Interior Designer, Home Mandir Design, Wall Mounted Mandir Design, Cabinet Mandir Design, Corner Mandir Design, Niche Mandir Design, Marble Mandir Design, Stone Mandir Design, Wooden Mandir Design, Jaali Mandir Design, Backlit Mandir Design, Puja Room Ventilation, Puja Room Lighting Design, Puja Room Storage Design, Puja Room False Ceiling Service, Puja Room Flooring, Puja Room Wall Panel Design, Puja Room Renovation, Puja Room Waterproofing, Puja Room Electrical Planning, Temple Design for Home, Home Temple Interior Design and Puja Room Interior Services Quote",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a puja room interior designer do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A puja room interior designer plans the layout, mandir design, platform, lighting, ventilation, storage and finishes, and manages execution until handover, following your family's preferences.",
        },
      },
      {
        "@type": "Question",
        name: "Can MTBOSS design a puja room in a small flat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS designs wall-mounted, corner and cabinet-style mandirs that fit small spaces and still feel peaceful.",
        },
      },
      {
        "@type": "Question",
        name: "Which direction should the puja room face?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many families follow traditional guidance, but customs differ. MTBOSS plans according to your family's preference and the building's practical limits. For religious guidance, please consult your priest or elders.",
        },
      },
      {
        "@type": "Question",
        name: "Which material is best for a mandir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Marble and stone are durable and easy to clean, while wood gives warmth. Many homes combine both. MTBOSS recommends based on your style, budget and safety needs.",
        },
      },
      {
        "@type": "Question",
        name: "How does MTBOSS manage smoke from lamps and incense?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MTBOSS plans windows, ventilators or exhaust fans, washable finishes and safe distances between flames and combustible materials.",
        },
      },
      {
        "@type": "Question",
        name: "Can MTBOSS design a puja unit with storage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS includes drawers and cabinets for incense, books, oils, vessels and festival items.",
        },
      },
      {
        "@type": "Question",
        name: "Can MTBOSS add lighting and backlit panels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS plans soft, warm lighting and backlit jaali or carved panels, with safe wiring and distance from flames.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS provide 3D designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can see visuals before work begins and request changes.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a puja room project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size, materials and detail. MTBOSS gives a schedule with the quotation after a site visit.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS serve Rampur and nearby cities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS serves Rampur, Moradabad and Bareilly and can discuss nearby locations.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mtboss.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Interior Design Services",
        item: "https://www.mtboss.in/interior-design-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Puja Room Interior Designer Rampur",
        item: "https://www.mtboss.in/puja-room-interior-designer-rampur",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Banner />
      <Content />
      <QuickServices />
      <Services />
      <CalculatorCTA />
    </>
  );
}