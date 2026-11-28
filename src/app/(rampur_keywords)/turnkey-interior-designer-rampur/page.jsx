// app/(bareilly_keywords)/turnkey-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Turnkey Interior Designer  Rampur | MTBoss",

  description:
    "Looking for a turnkey interior designer in Rampur? MTBoss plans, builds and finishes interiors under one contract, with itemised costs and a move-in-ready handover.",

  keywords:
    "turnkey interior designer Rampur, turnkey interior design Rampur, turnkey interior Rampur, turnkey home interiors Rampur, turnkey interior contractor Rampur, turnkey interior company Rampur, one contract interior Rampur, single contract interior Rampur, interior design and execution Rampur, interior design build Rampur, interior design and construction Rampur, full home interior Rampur, complete home interior Rampur, move in ready home Rampur, ready to move interior Rampur, turnkey renovation Rampur, turnkey renovation contractor Rampur, interior project management Rampur, interior supervision Rampur, interior contractor Rampur, interior designer Rampur, home interior designer Rampur, flat interior Rampur, apartment interior Rampur, independent house interior Rampur, villa interior Rampur, shop interior Rampur, office interior Rampur, clinic interior Rampur, turnkey shop interior Rampur, turnkey office interior Rampur, turnkey clinic interior Rampur, interior handover Rampur, interior snag list Rampur, interior warranty Rampur, interior payment stages Rampur, interior contract Rampur, interior quotation Rampur, itemised interior quote Rampur, interior cost Rampur, MTBoss Rampur, MTBoss Moradabad, MTBoss Bareilly, turnkey interior designer near me Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/turnkey-interior-designer-rampur",
  },

  openGraph: {
    title: "Turnkey Interior Designer in Rampur | MTBoss",

    description:
      "Looking for a turnkey interior designer in Rampur? MTBoss plans, builds and finishes interiors under one contract, with itemised costs and a move-in-ready handover.",

    url: "https://www.mtboss.in/turnkey-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-turnkey-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Turnkey Interior Designer in Rampur - MTBoss",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Turnkey Interior Designer  Rampur | MTBoss",

    description:
      "Looking for a turnkey interior designer in Rampur? MTBoss plans, builds and finishes interiors under one contract, with itemised costs and a move-in-ready handover.",

    images: [
      "https://www.mtboss.in/og-turnkey-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/turnkey-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-turnkey-interior-designer-rampur.jpg",
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
      "Turnkey Interior Designer",
      "Turnkey Interior Design",
      "Turnkey Interior",
      "Turnkey Home Interiors",
      "Turnkey Interior Contractor",
      "Turnkey Interior Company",
      "One Contract Interior",
      "Single Contract Interior",
      "Interior Design and Execution",
      "Interior Design Build",
      "Interior Design and Construction",
      "Full Home Interior",
      "Complete Home Interior",
      "Move In Ready Home",
      "Ready to Move Interior",
      "Turnkey Renovation",
      "Turnkey Renovation Contractor",
      "Interior Project Management",
      "Interior Supervision",
      "Interior Contractor",
      "Interior Designer",
      "Home Interior Designer",
      "Flat Interior",
      "Apartment Interior",
      "Independent House Interior",
      "Villa Interior",
      "Shop Interior",
      "Office Interior",
      "Clinic Interior",
      "Turnkey Shop Interior",
      "Turnkey Office Interior",
      "Turnkey Clinic Interior",
      "Interior Handover",
      "Interior Snag List",
      "Interior Warranty",
      "Interior Payment Stages",
      "Interior Contract",
      "Interior Quotation",
      "Itemised Interior Quote",
      "Interior Cost",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Turnkey Interior Designer in Rampur",
    description:
      "Looking for a turnkey interior designer in Rampur? MTBoss plans, builds and finishes interiors under one contract, with itemised costs and a move-in-ready handover. Services include design and drawings, material selection and purchase, joinery, kitchen, ceilings and lighting, electrical and plumbing work, flooring, tiling, painting, wallpaper, doors, windows and hardware, supervision, testing, handover and snag clearance.",
    url: "https://www.mtboss.in/turnkey-interior-designer-rampur",
    provider: {
      "@type": "InteriorDesignService",
      name: "MTBOSS Construction Private Limited",
      telephone: "+91-9458410866",
      email: "inquiry@mtboss.in",
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
      "Turnkey Interior Designer, Turnkey Interior Design, Turnkey Interior, Turnkey Home Interiors, Turnkey Interior Contractor, Turnkey Interior Company, One Contract Interior, Single Contract Interior, Interior Design and Execution, Interior Design Build, Interior Design and Construction, Full Home Interior, Complete Home Interior, Move In Ready Home, Ready to Move Interior, Turnkey Renovation, Turnkey Renovation Contractor, Interior Project Management, Interior Supervision, Interior Contractor, Interior Designer, Home Interior Designer, Flat Interior, Apartment Interior, Independent House Interior, Villa Interior, Shop Interior, Office Interior, Clinic Interior, Turnkey Shop Interior, Turnkey Office Interior, Turnkey Clinic Interior, Interior Handover, Interior Snag List, Interior Warranty, Interior Payment Stages, Interior Contract, Interior Quotation, Itemised Interior Quote and Interior Cost",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is turnkey interior design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One company designs, builds and finishes your interiors and hands over a ready home.",
        },
      },
      {
        "@type": "Question",
        name: "Do you have an office in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We serve Rampur through visits, shared drawings and updates.",
        },
      },
      {
        "@type": "Question",
        name: "What do you need to start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Location, plans or photographs, a short brief and a budget range.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in a turnkey contract?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Design, joinery, ceilings, services, finishes, supervision and handover, as listed in writing.",
        },
      },
      {
        "@type": "Question",
        name: "What is usually excluded?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loose furniture, appliances, curtains, civil repairs and society charges, unless included.",
        },
      },
      {
        "@type": "Question",
        name: "Can I choose the materials?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We show samples and name the boards, finishes and hardware in the contract.",
        },
      },
      {
        "@type": "Question",
        name: "How are payments structured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In stages linked to completed work, with a tax invoice for each payment.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after handover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You receive records, and defects are handled under the written terms [state terms].",
        },
      },
      {
        "@type": "Question",
        name: "How do I contact MTBoss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call or WhatsApp +91 94584 10866, or use \"Get a Construction Quote\" on www.mtboss.in.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Moradabad, Bareilly and nearby areas of western Uttar Pradesh. Confirm Rampur when you first contact us.",
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
        name: "Turnkey Interior Designer in Rampur",
        item: "https://www.mtboss.in/turnkey-interior-designer-rampur",
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