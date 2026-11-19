// app/(bareilly_keywords)/bathroom-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/QuickServices";
import CalculatorCTA from "../../components/CalculatorCTA";
import Services from "../../components/Services";

export const metadata = {
  title: "Bathroom Designer Rampur | Bathroom Makeover & Renovation – MTBOSS",

  description:
    "Fix leaks, upgrade tiles and fittings or redesign your whole bathroom with MTBOSS Rampur. Waterproofing, plumbing coordination, storage and neat finishing with clear pricing.",

  keywords:
    "bathroom designer Rampur, bathroom design Rampur, bathroom interiors Rampur, bathroom renovation Rampur, bathroom makeover Rampur, bathroom remodel Rampur, washroom renovation Rampur, bathroom renovation in Rampur, bathroom contractor Rampur, bathroom waterproofing Rampur, bathroom leakage treatment Rampur, bathroom leak repair Rampur, bathroom damp repair Rampur, bathroom plumbing Rampur, bathroom drainage Rampur, bathroom tiling Rampur, bathroom tiles Rampur, bathroom wall tiles Rampur, bathroom floor tiles Rampur, bathroom sanitaryware Rampur, bathroom fittings Rampur, bathroom taps Rampur, shower fittings Rampur, shower partition Rampur, glass shower screen Rampur, bathroom vanity Rampur, bathroom mirror design Rampur, bathroom storage Rampur, bathroom niches Rampur, bathroom lighting Rampur, bathroom ventilation Rampur, exhaust fan bathroom Rampur, anti skid bathroom tiles Rampur, bathroom floor slope Rampur, bathroom drain trap Rampur, bathroom mould treatment Rampur, bathroom scale removal Rampur, bathroom renovation cost Rampur, bathroom renovation quote Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, bathroom designer near me Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/bathroom-designer-rampur",
  },

  openGraph: {
    title: "Bathroom Designer Rampur | Bathroom Makeover & Renovation – MTBOSS",

    description:
      "Fix leaks, upgrade tiles and fittings or redesign your whole bathroom with MTBOSS Rampur. Waterproofing, plumbing coordination, storage and neat finishing with clear pricing.",

    url: "https://www.mtboss.in/bathroom-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-bathroom-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Bathroom Designer Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Bathroom Designer Rampur | Bathroom Makeover & Renovation – MTBOSS",

    description:
      "Fix leaks, upgrade tiles and fittings or redesign your whole bathroom with MTBOSS Rampur. Waterproofing, plumbing coordination, storage and neat finishing with clear pricing.",

    images: [
      "https://www.mtboss.in/og-bathroom-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/bathroom-designer-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-bathroom-designer-rampur.jpg",
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
      "Bathroom Design",
      "Bathroom Designer",
      "Bathroom Renovation",
      "Bathroom Makeover",
      "Bathroom Remodel",
      "Washroom Renovation",
      "Bathroom Waterproofing",
      "Bathroom Leakage Treatment",
      "Bathroom Leak Repair",
      "Bathroom Damp Repair",
      "Bathroom Plumbing",
      "Bathroom Drainage",
      "Bathroom Tiling",
      "Bathroom Tiles",
      "Bathroom Wall Tiles",
      "Bathroom Floor Tiles",
      "Bathroom Sanitaryware",
      "Bathroom Fittings",
      "Bathroom Taps",
      "Shower Fittings",
      "Shower Partition",
      "Glass Shower Screen",
      "Bathroom Vanity",
      "Bathroom Mirror Design",
      "Bathroom Storage",
      "Bathroom Niches",
      "Bathroom Lighting",
      "Bathroom Ventilation",
      "Exhaust Fan Bathroom",
      "Anti Skid Bathroom Tiles",
      "Bathroom Floor Slope",
      "Bathroom Drain Trap",
      "Bathroom Mould Treatment",
      "Bathroom Scale Removal",
      "Bathroom Renovation Cost",
      "Bathroom Renovation Quote",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bathroom Designer in Rampur",
    description:
      "Fix leaks, upgrade tiles and fittings or redesign your whole bathroom with MTBOSS Rampur. Waterproofing, plumbing coordination, storage and neat finishing with clear pricing. Services include complete bathroom design and renovation, waterproofing and leakage treatment, plumbing and drainage coordination, floor and wall tile selection and installation, sanitaryware, tap and shower selection and fitting, vanity, mirror and storage design, shower partitions and glass screens.",
    url: "https://www.mtboss.in/bathroom-designer-rampur",
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
      "Bathroom Design, Bathroom Designer, Bathroom Renovation, Bathroom Makeover, Bathroom Remodel, Washroom Renovation, Bathroom Waterproofing, Bathroom Leakage Treatment, Bathroom Leak Repair, Bathroom Damp Repair, Bathroom Plumbing, Bathroom Drainage, Bathroom Tiling, Bathroom Tiles, Bathroom Wall Tiles, Bathroom Floor Tiles, Bathroom Sanitaryware, Bathroom Fittings, Bathroom Taps, Shower Fittings, Shower Partition, Glass Shower Screen, Bathroom Vanity, Bathroom Mirror Design, Bathroom Storage, Bathroom Niches, Bathroom Lighting, Bathroom Ventilation, Exhaust Fan Bathroom, Anti Skid Bathroom Tiles, Bathroom Floor Slope, Bathroom Drain Trap, Bathroom Mould Treatment, Bathroom Scale Removal, Bathroom Renovation Cost and Bathroom Renovation Quote",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know whether my bathroom needs a refresh or a full renovation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the structure, plumbing and waterproofing are sound and only the look is tired, a refresh may be enough. If you see leaks, damp patches, cracked tiles or drainage problems, a renovation or rebuild is wiser. An inspection gives a clear answer.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my bathroom wall have damp patches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common causes include failed waterproofing, leaking pipes, poor sealing around fittings or a floor without proper slope. The source must be found and fixed before repainting.",
        },
      },
      {
        "@type": "Question",
        name: "How can I stop the bad smell from my bathroom drain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check that the water trap is working, the drain line is vented properly and there is no blockage. Good ventilation also helps.",
        },
      },
      {
        "@type": "Question",
        name: "Which tiles are best for a small bathroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Light-coloured, large-format wall tiles and anti-skid floor tiles usually work well, since they make the room feel larger and reduce grout lines.",
        },
      },
      {
        "@type": "Question",
        name: "How do I remove white scale from taps and tiles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regular wiping and suitable cleaning products help. Choosing easy-clean fittings and considering water treatment options can also reduce scale over time.",
        },
      },
      {
        "@type": "Question",
        name: "Can you add storage to a very small bathroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wall niches, mirror cabinets, slim vertical units and hooks make good use of limited space without crowding the room.",
        },
      },
      {
        "@type": "Question",
        name: "Is a glass partition better than a shower curtain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glass looks cleaner, keeps splashes in and makes small rooms feel larger, but needs regular cleaning. Curtains are cheaper and simple but need more care to avoid mould.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a bathroom renovation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the level of work, size and curing time for waterproofing and tiles. We give a schedule with the quotation after an inspection.",
        },
      },
      {
        "@type": "Question",
        name: "Do you supply sanitaryware and fittings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We help you choose suitable fittings and coordinate installation. Please confirm the supply scope with us during the quotation.",
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
        name: "Bathroom Designer Rampur",
        item: "https://www.mtboss.in/bathroom-designer-rampur",
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