// app/(bareilly_keywords)/interior-design-cost-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Interior Design Cost Rampur | How Pricing Works – MTBOSS",

  description:
    "Understand interior design cost Rampur: pricing models, cost factors, room-by-room guide and how to estimate your budget. Get an itemised quotation from MTBOSS after a free site visit.",

  keywords:
    "interior design cost Rampur, interior design cost in Rampur, interior cost Rampur, interior pricing Rampur, interior design pricing Rampur, interior quotation Rampur, interior cost estimate Rampur, interior budget estimate Rampur, interior cost calculator Rampur, interior cost per square foot Rampur, interior pricing models Rampur, itemised interior quote Rampur, item wise interior pricing Rampur, turnkey interior pricing Rampur, interior package pricing Rampur, design fee Rampur, interior design fee Rampur, 3D design cost Rampur, interior cost factors Rampur, kitchen cost Rampur, modular kitchen cost Rampur, wardrobe cost Rampur, TV unit cost Rampur, false ceiling cost Rampur, flooring cost Rampur, tile cost Rampur, painting cost Rampur, bathroom renovation cost Rampur, interior hidden costs Rampur, interior cost comparison Rampur, interior quotation comparison Rampur, interior payment stages Rampur, interior cost control Rampur, interior cost overrun Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, interior design cost near me Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/interior-design-cost-rampur",
  },

  openGraph: {
    title: "Interior Design Cost Rampur | How Pricing Works – MTBOSS",

    description:
      "Understand interior design cost Rampur: pricing models, cost factors, room-by-room guide and how to estimate your budget. Get an itemised quotation from MTBOSS after a free site visit.",

    url: "https://www.mtboss.in/interior-design-cost-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-interior-design-cost-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Cost Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Interior Design Cost Rampur | How Pricing Works – MTBOSS",

    description:
      "Understand interior design cost Rampur: pricing models, cost factors, room-by-room guide and how to estimate your budget. Get an itemised quotation from MTBOSS after a free site visit.",

    images: [
      "https://www.mtboss.in/og-interior-design-cost-rampur.jpg",
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
    url: "https://www.mtboss.in/interior-design-cost-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-interior-design-cost-rampur.jpg",
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
      "Interior Design Cost",
      "Interior Design Pricing",
      "Interior Cost Estimate",
      "Interior Budget Estimate",
      "Interior Cost Calculator",
      "Interior Cost Per Square Foot",
      "Interior Pricing Models",
      "Itemised Interior Quote",
      "Item Wise Interior Pricing",
      "Turnkey Interior Pricing",
      "Interior Package Pricing",
      "Design Fee",
      "Interior Design Fee",
      "3D Design Cost",
      "Interior Cost Factors",
      "Kitchen Cost",
      "Modular Kitchen Cost",
      "Wardrobe Cost",
      "TV Unit Cost",
      "False Ceiling Cost",
      "Flooring Cost",
      "Tile Cost",
      "Painting Cost",
      "Bathroom Renovation Cost",
      "Interior Hidden Costs",
      "Interior Cost Comparison",
      "Interior Quotation Comparison",
      "Interior Payment Stages",
      "Interior Cost Control",
      "Interior Cost Overrun",
      "Interior Quotation",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Design Cost in Rampur",
    description:
      "Understand interior design cost Rampur: pricing models, cost factors, room-by-room guide and how to estimate your budget. Get an itemised quotation from MTBOSS after a free site visit. Services include per square foot pricing, itemised or item-wise pricing, package pricing, turnkey pricing, design fee models, cost guides for modular kitchen, wardrobes, TV unit and feature wall, false ceiling, flooring and tiles, painting and wall finishes, hidden cost planning, payment stages and cost control.",
    url: "https://www.mtboss.in/interior-design-cost-rampur",
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
      "Interior Design Cost, Interior Design Pricing, Interior Cost Estimate, Interior Budget Estimate, Interior Cost Calculator, Interior Cost Per Square Foot, Interior Pricing Models, Itemised Interior Quote, Item Wise Interior Pricing, Turnkey Interior Pricing, Interior Package Pricing, Design Fee, Interior Design Fee, 3D Design Cost, Interior Cost Factors, Kitchen Cost, Modular Kitchen Cost, Wardrobe Cost, TV Unit Cost, False Ceiling Cost, Flooring Cost, Tile Cost, Painting Cost, Bathroom Renovation Cost, Interior Hidden Costs, Interior Cost Comparison, Interior Quotation Comparison, Interior Payment Stages, Interior Cost Control, Interior Cost Overrun and Interior Quotation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is interior design cost calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is built from area, the amount of carpentry, materials and finishes, hardware, ceilings and lighting, civil and services work, supervision and a reserve. An itemised quotation shows how each part adds up.",
        },
      },
      {
        "@type": "Question",
        name: "Is interior cost always calculated per square foot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Per-square-foot rates are a rough guide. Many designers also use item-wise pricing, packages or turnkey pricing. Always ask what the rate includes.",
        },
      },
      {
        "@type": "Question",
        name: "Why do interior quotations differ so much?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quotes may use different materials, thickness, hardware, scope and exclusions. Compare them line by line to see what is really included.",
        },
      },
      {
        "@type": "Question",
        name: "Which interior items cost the most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kitchens, wardrobes, bathrooms and detailed ceilings with lighting often take large shares of the budget, along with any civil repairs needed.",
        },
      },
      {
        "@type": "Question",
        name: "Are design fees included in the quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the designer. Some include design and 3D visuals in the turnkey price, while others charge separately. Ask for this in writing.",
        },
      },
      {
        "@type": "Question",
        name: "What hidden costs should I plan for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common ones include leakage repair, wiring and plumbing corrections, appliances, loose furniture, curtains, debris removal and changes during the project.",
        },
      },
      {
        "@type": "Question",
        name: "How much reserve should I keep?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A reserve of around 8 to 10% of your budget is sensible for changes and unexpected problems.",
        },
      },
      {
        "@type": "Question",
        name: "Can I reduce cost without reducing quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Finalise plans early, prioritise key items, simplify shapes, match materials to locations and phase the work.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get an exact price without a site visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not reliably. A site visit allows measurement, material selection and inspection of walls, ceilings, wiring and plumbing, which affect the final price.",
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
        name: "Interior Design Cost Rampur",
        item: "https://www.mtboss.in/interior-design-cost-rampur",
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