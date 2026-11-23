// app/(bareilly_keywords)/interior-designer-for-kitchen-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Interior Designer for Kitchen Rampur | MTBoss",

  description:
    "Upgrading a kitchen in Rampur? MTBoss plans kitchen makeovers and full renovations, from quick fixes to new layouts, with clear scope and itemised costs.",

  keywords:
    "interior designer for kitchen Rampur, kitchen interior designer Rampur, kitchen renovation Rampur, kitchen renovation in Rampur, kitchen makeover Rampur, kitchen design Rampur, kitchen interior design Rampur, modular kitchen Rampur, modular kitchen renovation Rampur, kitchen cabinet renovation Rampur, kitchen reface Rampur, kitchen rebuild Rampur, kitchen replacement Rampur, kitchen countertop Rampur, kitchen backsplash Rampur, kitchen flooring Rampur, kitchen tiling Rampur, kitchen waterproofing Rampur, kitchen plumbing Rampur, kitchen electrician Rampur, kitchen sockets Rampur, kitchen chimney Rampur, kitchen ventilation Rampur, kitchen ducting Rampur, kitchen lighting Rampur, kitchen false ceiling Rampur, kitchen storage upgrade Rampur, kitchen layout change Rampur, kitchen gas safety Rampur, kitchen waterproofing repair Rampur, kitchen damp repair Rampur, kitchen leak repair Rampur, MTBoss Rampur, MTBoss Moradabad, MTBoss Bareilly, kitchen renovation consultation Rampur, kitchen renovation quote Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/interior-designer-for-kitchen-rampur",
  },

  openGraph: {
    title: "Interior Designer for Kitchen Rampur | MTBoss",

    description:
      "Upgrading a kitchen in Rampur? MTBoss plans kitchen makeovers and full renovations, from quick fixes to new layouts, with clear scope and itemised costs.",

    url: "https://www.mtboss.in/interior-designer-for-kitchen-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-interior-designer-for-kitchen-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer for Kitchen Rampur - MTBoss",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Interior Designer for Kitchen Rampur | MTBoss",

    description:
      "Upgrading a kitchen in Rampur? MTBoss plans kitchen makeovers and full renovations, from quick fixes to new layouts, with clear scope and itemised costs.",

    images: [
      "https://www.mtboss.in/og-interior-designer-for-kitchen-rampur.jpg",
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
    url: "https://www.mtboss.in/interior-designer-for-kitchen-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-interior-designer-for-kitchen-rampur.jpg",
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
      "Kitchen Interior Design",
      "Kitchen Renovation",
      "Kitchen Makeover",
      "Kitchen Design",
      "Kitchen Interior Designer",
      "Modular Kitchen",
      "Modular Kitchen Renovation",
      "Kitchen Cabinet Renovation",
      "Kitchen Reface",
      "Kitchen Rebuild",
      "Kitchen Replacement",
      "Kitchen Countertop",
      "Kitchen Backsplash",
      "Kitchen Flooring",
      "Kitchen Tiling",
      "Kitchen Waterproofing",
      "Kitchen Plumbing",
      "Kitchen Electrician",
      "Kitchen Sockets",
      "Kitchen Chimney",
      "Kitchen Ventilation",
      "Kitchen Ducting",
      "Kitchen Lighting",
      "Kitchen False Ceiling Service",
      "Kitchen Storage Upgrade",
      "Kitchen Layout Change",
      "Kitchen Gas Safety",
      "Kitchen Waterproofing Repair",
      "Kitchen Damp Repair",
      "Kitchen Leak Repair",
      "Kitchen Renovation Consultation",
      "Kitchen Renovation Quote",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Designer for Kitchen in Rampur",
    description:
      "Upgrading a kitchen in Rampur? MTBoss plans kitchen makeovers and full renovations, from quick fixes to new layouts, with clear scope and itemised costs. Services include kitchen audit, refresh, partial renovation, full renovation, layout change, cabinet reface, rebuild and replacement, countertop, backsplash and flooring, waterproofing, plumbing, electrical, gas safety, ventilation and chimney upgrades, storage upgrades, lighting and socket upgrades.",
    url: "https://www.mtboss.in/interior-designer-for-kitchen-rampur",
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
      "Kitchen Interior Design, Kitchen Renovation, Kitchen Makeover, Kitchen Design, Kitchen Interior Designer, Modular Kitchen, Modular Kitchen Renovation, Kitchen Cabinet Renovation, Kitchen Reface, Kitchen Rebuild, Kitchen Replacement, Kitchen Countertop, Kitchen Backsplash, Kitchen Flooring, Kitchen Tiling, Kitchen Waterproofing, Kitchen Plumbing, Kitchen Electrician, Kitchen Sockets, Kitchen Chimney, Kitchen Ventilation, Kitchen Ducting, Kitchen Lighting, Kitchen False Ceiling Service, Kitchen Storage Upgrade, Kitchen Layout Change, Kitchen Gas Safety, Kitchen Waterproofing Repair, Kitchen Damp Repair, Kitchen Leak Repair, Kitchen Renovation Consultation and Kitchen Renovation Quote",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who renovates kitchens in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MTBoss plans kitchen renovations from its Kanth Road office in Moradabad.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBoss have an office in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. MTBoss serves Rampur through visits, shared drawings and updates.",
        },
      },
      {
        "@type": "Question",
        name: "What does MTBoss need to start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Location, kitchen photographs, a list of problems and a budget range.",
        },
      },
      {
        "@type": "Question",
        name: "Can I keep my old cabinets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes, if the boxes are sound. MTBoss audits them first.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBoss fix leaks and damp before the makeover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Repair and waterproofing come before finishes.",
        },
      },
      {
        "@type": "Question",
        name: "Can MTBoss improve ventilation and sockets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBoss plans the chimney duct, exhaust and extra points.",
        },
      },
      {
        "@type": "Question",
        name: "How do we cook during renovation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Set up a temporary kitchen. MTBoss plans the schedule to keep the gap short.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBoss give itemised quotations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBoss lists work items, materials, labour, timeline and payment stages.",
        },
      },
      {
        "@type": "Question",
        name: "How do I contact MTBoss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call or WhatsApp +91 94584 10866, or use Get a Construction Quote on www.mtboss.in.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas does MTBoss serve?",
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
        name: "Interior Designer for Kitchen Rampur",
        item: "https://www.mtboss.in/interior-designer-for-kitchen-rampur",
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