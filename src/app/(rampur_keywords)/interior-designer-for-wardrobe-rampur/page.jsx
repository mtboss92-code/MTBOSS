// app/(bareilly_keywords)/wardrobe-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Wardrobe Interior Designer Rampur | Custom Wardrobe Planning – MTBOSS",

  description:
    "Plan your wardrobe with MTBOSS Rampur: clothes audit, custom sizing, sliding or hinged doors, loft and accessories, with 3D design, quality hardware and clear pricing.",

  keywords:
    "wardrobe interior designer Rampur, wardrobe design Rampur, wardrobe planning Rampur, custom wardrobe Rampur, wardrobe interior Rampur, wardrobe renovation Rampur, wardrobe makeover Rampur, sliding wardrobe Rampur, hinged wardrobe Rampur, corner wardrobe Rampur, walk-in wardrobe Rampur, wardrobe loft storage Rampur, wardrobe accessories Rampur, wardrobe lighting Rampur, wardrobe mirror design Rampur, wardrobe locker Rampur, wardrobe ventilation Rampur, wardrobe reface Rampur, wardrobe upgrade Rampur, wardrobe repair Rampur, wardrobe damp repair Rampur, wardrobe termite repair Rampur, wardrobe materials Rampur, wardrobe hardware Rampur, wardrobe soft close hinges Rampur, wardrobe channels Rampur, wardrobe handles Rampur, wardrobe sizing Rampur, wardrobe clothes audit Rampur, wardrobe 3D design Rampur, wardrobe cost Rampur, wardrobe quote Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, wardrobe interior designer near me Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/wardrobe-interior-designer-rampur",
  },

  openGraph: {
    title: "Wardrobe Interior Designer Rampur | Custom Wardrobe Planning – MTBOSS",

    description:
      "Plan your wardrobe with MTBOSS Rampur: clothes audit, custom sizing, sliding or hinged doors, loft and accessories, with 3D design, quality hardware and clear pricing.",

    url: "https://www.mtboss.in/wardrobe-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-wardrobe-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Wardrobe Interior Designer Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Wardrobe Interior Designer Rampur | Custom Wardrobe Planning – MTBOSS",

    description:
      "Plan your wardrobe with MTBOSS Rampur: clothes audit, custom sizing, sliding or hinged doors, loft and accessories, with 3D design, quality hardware and clear pricing.",

    images: [
      "https://www.mtboss.in/og-wardrobe-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/wardrobe-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-wardrobe-interior-designer-rampur.jpg",
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
      "Wardrobe Interior Design",
      "Wardrobe Interior Designer",
      "Wardrobe Planning",
      "Custom Wardrobe",
      "Wardrobe Renovation",
      "Wardrobe Makeover",
      "Sliding Wardrobe",
      "Hinged Wardrobe",
      "Corner Wardrobe",
      "Walk-in Wardrobe",
      "Wardrobe Loft Storage",
      "Wardrobe Accessories",
      "Wardrobe Lighting",
      "Wardrobe Mirror Design",
      "Wardrobe Locker",
      "Wardrobe Ventilation",
      "Wardrobe Reface",
      "Wardrobe Upgrade",
      "Wardrobe Repair",
      "Wardrobe Damp Repair",
      "Wardrobe Termite Repair",
      "Wardrobe Materials",
      "Wardrobe Hardware",
      "Wardrobe Soft Close Hinges",
      "Wardrobe Channels",
      "Wardrobe Handles",
      "Wardrobe Sizing",
      "Wardrobe Clothes Audit",
      "Wardrobe 3D Design",
      "Wardrobe Cost",
      "Wardrobe Quote",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wardrobe Interior Designer in Rampur",
    description:
      "Plan your wardrobe with MTBOSS Rampur: clothes audit, custom sizing, sliding or hinged doors, loft and accessories, with 3D design, quality hardware and clear pricing. Services include wardrobe planning and design for bedrooms, dressing areas and guest rooms, sliding, hinged, corner and walk-in wardrobes, lofts and overhead storage, wardrobes combined with dressing units, study desks or TV units, shared wardrobes, accessories and inside fittings, lighting provisions, renovation and upgrading of old wardrobes, and coordination with false ceiling, flooring, painting and electrical work.",
    url: "https://www.mtboss.in/wardrobe-interior-designer-rampur",
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
      "Wardrobe Interior Design, Wardrobe Interior Designer, Wardrobe Planning, Custom Wardrobe, Wardrobe Renovation, Wardrobe Makeover, Sliding Wardrobe, Hinged Wardrobe, Corner Wardrobe, Walk-in Wardrobe, Wardrobe Loft Storage, Wardrobe Accessories, Wardrobe Lighting, Wardrobe Mirror Design, Wardrobe Locker, Wardrobe Ventilation, Wardrobe Reface, Wardrobe Upgrade, Wardrobe Repair, Wardrobe Damp Repair, Wardrobe Termite Repair, Wardrobe Materials, Wardrobe Hardware, Wardrobe Soft Close Hinges, Wardrobe Channels, Wardrobe Handles, Wardrobe Sizing, Wardrobe Clothes Audit, Wardrobe 3D Design, Wardrobe Cost and Wardrobe Quote",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I decide the right size for my wardrobe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with a clothes audit: count what you hang, fold and store, then add space for growth. Share the list and your wall size with your designer, who will confirm the dimensions after measuring.",
        },
      },
      {
        "@type": "Question",
        name: "What should I include in a wardrobe for a couple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Two clear zones with separate hanging, shelves and drawers, plus a shared locker and loft storage, work well and keep the wardrobe tidy.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design a wardrobe for a very small room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A full-height sliding wardrobe with a loft, light colours and a mirror shutter usually makes the best use of a small room.",
        },
      },
      {
        "@type": "Question",
        name: "How do I store sarees and heavy festive clothes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan long hanging space, wide shelves and padded or pull-out sections, so that heavy clothes do not crush or fold badly.",
        },
      },
      {
        "@type": "Question",
        name: "Should I anchor a tall wardrobe to the wall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Where the design allows, yes. Anchoring tall units adds stability and safety, especially in homes with children.",
        },
      },
      {
        "@type": "Question",
        name: "Can you add a dressing table or study desk to the wardrobe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can combine a wardrobe with a dressing unit, a desk or a TV unit in one plan.",
        },
      },
      {
        "@type": "Question",
        name: "Can my old wardrobe be upgraded instead of replaced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes, if the structure is sound. New shutters, hardware and inside fittings can refresh it. We inspect and advise honestly.",
        },
      },
      {
        "@type": "Question",
        name: "How do I protect my wardrobe from damp and smell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use moisture-resistant boards, sealed edges, good ventilation and a dry wall, and keep moisture absorbers in humid months.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to make and fit a wardrobe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size, finish and workload. We give a schedule with the quotation after measuring your room.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve Rampur and nearby cities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve Rampur, Moradabad and Bareilly and can discuss nearby locations.",
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
        name: "Wardrobe Interior Designer Rampur",
        item: "https://www.mtboss.in/wardrobe-interior-designer-rampur",
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