// app/(bareilly_keywords)/modular-interior-design-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Modular Interior Design Rampur | Kitchen, Wardrobe & Home – MTBOSS",

  description:
    "MTBOSS offers modular interior design Rampur: modular kitchens, wardrobes, TV units and storage with precise planning, quality hardware and clean installation. Get a free consultation.",

  keywords:
    "modular interior design Rampur, modular interior designer Rampur, modular interior design in Rampur, modular kitchen design Rampur, modular kitchen designer Rampur, modular wardrobe design Rampur, modular wardrobe designer Rampur, modular TV unit design Rampur, modular storage design Rampur, modular furniture Rampur, modular kitchen renovation Rampur, modular wardrobe renovation Rampur, modular kitchen layouts Rampur, L shaped modular kitchen Rampur, U shaped modular kitchen Rampur, parallel modular kitchen Rampur, island modular kitchen Rampur, modular kitchen plywood Rampur, modular kitchen laminate Rampur, modular kitchen acrylic Rampur, modular kitchen hardware Rampur, soft close drawers Rampur, modular kitchen chimney planning Rampur, modular kitchen countertop Rampur, modular kitchen backsplash Rampur, modular kitchen corner units Rampur, modular kitchen pull out baskets Rampur, sliding wardrobe design Rampur, hinged wardrobe design Rampur, wardrobe accessories Rampur, TV wall unit design Rampur, study table design Rampur, bookshelf design Rampur, crockery unit design Rampur, shoe rack design Rampur, vanity unit design Rampur, bathroom storage unit design Rampur, modular interior consultation Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, modular interior services quote Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/modular-interior-design-rampur",
  },

  openGraph: {
    title: "Modular Interior Design Rampur | Kitchen, Wardrobe & Home – MTBOSS",

    description:
      "MTBOSS offers modular interior design Rampur: modular kitchens, wardrobes, TV units and storage with precise planning, quality hardware and clean installation. Get a free consultation.",

    url: "https://www.mtboss.in/modular-interior-design-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-modular-interior-design-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Interior Design Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Modular Interior Design Rampur | Kitchen, Wardrobe & Home – MTBOSS",

    description:
      "MTBOSS offers modular interior design Rampur: modular kitchens, wardrobes, TV units and storage with precise planning, quality hardware and clean installation. Get a free consultation.",

    images: [
      "https://www.mtboss.in/og-modular-interior-design-rampur.jpg",
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
    url: "https://www.mtboss.in/modular-interior-design-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-modular-interior-design-rampur.jpg",
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
      "Modular Interior Design",
      "Modular Kitchen Design",
      "Modular Wardrobe Design",
      "Modular TV Unit Design",
      "Modular Storage Design",
      "Modular Furniture",
      "Modular Kitchen Renovation",
      "Modular Wardrobe Renovation",
      "Modular Kitchen Layouts",
      "L Shaped Modular Kitchen",
      "U Shaped Modular Kitchen",
      "Parallel Modular Kitchen",
      "Island Modular Kitchen",
      "Modular Kitchen Plywood",
      "Modular Kitchen Laminate",
      "Modular Kitchen Acrylic",
      "Modular Kitchen Hardware",
      "Soft Close Drawers",
      "Modular Kitchen Chimney Planning",
      "Modular Kitchen Countertop",
      "Modular Kitchen Backsplash",
      "Modular Kitchen Corner Units",
      "Modular Kitchen Pull Out Baskets",
      "Sliding Wardrobe Design",
      "Hinged Wardrobe Design",
      "Wardrobe Accessories",
      "TV Wall Unit Design",
      "Study Table Design",
      "Bookshelf Design",
      "Crockery Unit Design",
      "Shoe Rack Design",
      "Vanity Unit Design",
      "Bathroom Storage Unit Design",
      "Modular Interior Consultation",
      "Modular Interior Services Quote",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Modular Interior Design in Rampur",
    description:
      "MTBOSS offers modular interior design in Rampur: modular kitchens, wardrobes, TV units and storage with precise planning, quality hardware and clean installation. Services include modular kitchens in straight, L-shaped, U-shaped, parallel and island layouts, modular wardrobes with sliding or hinged shutters, modular TV units and entertainment walls, study tables and bookshelves, crockery units and bar units, shoe racks and entrance storage, and vanity and bathroom storage units.",
    url: "https://www.mtboss.in/modular-interior-design-rampur",
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
      "Modular Interior Design, Modular Kitchen Design, Modular Wardrobe Design, Modular TV Unit Design, Modular Storage Design, Modular Furniture, Modular Kitchen Renovation, Modular Wardrobe Renovation, Modular Kitchen Layouts, L Shaped Modular Kitchen, U Shaped Modular Kitchen, Parallel Modular Kitchen, Island Modular Kitchen, Modular Kitchen Plywood, Modular Kitchen Laminate, Modular Kitchen Acrylic, Modular Kitchen Hardware, Soft Close Drawers, Modular Kitchen Chimney Planning, Modular Kitchen Countertop, Modular Kitchen Backsplash, Modular Kitchen Corner Units, Modular Kitchen Pull Out Baskets, Sliding Wardrobe Design, Hinged Wardrobe Design, Wardrobe Accessories, TV Wall Unit Design, Study Table Design, Bookshelf Design, Crockery Unit Design, Shoe Rack Design, Vanity Unit Design, Bathroom Storage Unit Design, Modular Interior Consultation and Modular Interior Services Quote",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is modular interior design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modular interior design plans furniture and storage as precisely made units, such as kitchen cabinets and wardrobes, that are arranged and installed to fit your room.",
        },
      },
      {
        "@type": "Question",
        name: "What can be made modular in a home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kitchens, wardrobes, TV units, study desks, shoe racks, crockery units, vanity units and kids' storage can all be designed in a modular way.",
        },
      },
      {
        "@type": "Question",
        name: "Is modular interior better than carpenter-made?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the work. Modular gives neat, consistent results and faster installation, while site-made carpentry suits unusual shapes and decorative features. Many homes use both.",
        },
      },
      {
        "@type": "Question",
        name: "Can modular units fit uneven walls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, with accurate measurement, filler panels and sometimes wall correction. MTBOSS checks walls during the site visit and advises honestly.",
        },
      },
      {
        "@type": "Question",
        name: "Which material is best for modular kitchens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Moisture-resistant plywood is a popular choice for carcasses, with durable laminates or other finishes for shutters. MTBOSS recommends based on your budget and usage.",
        },
      },
      {
        "@type": "Question",
        name: "How long do modular interiors last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on material, hardware, installation and care. Good boards, quality hardware, correct installation and regular maintenance help units last for many years.",
        },
      },
      {
        "@type": "Question",
        name: "Can I replace one part later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes. One advantage of modular design is that individual modules, shutters or accessories can be repaired or replaced.",
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
        name: "Modular Interior Design Rampur",
        item: "https://www.mtboss.in/modular-interior-design-rampur",
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