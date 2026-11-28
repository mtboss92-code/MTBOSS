// app/(bareilly_keywords)/affordable-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Affordable Interior Designer Rampur | Budget Home Interiors – MTBOSS",

  description:
    "Planning budget-friendly interiors Rampur? MTBOSS helps you spend smartly on kitchens, wardrobes, ceilings and finishes with clear itemised quotes and phased options. Get a free consultation.",

  keywords:
    "affordable interior designer Rampur, budget interior designer Rampur, budget home interiors Rampur, budget interior design Rampur, low cost interior designer Rampur, economical interior designer Rampur, affordable home interiors Rampur, budget friendly interior design Rampur, interior design on budget Rampur, phased interior design Rampur, phased home interiors Rampur, interior renovation on budget Rampur, budget kitchen interiors Rampur, budget wardrobe design Rampur, budget false ceiling Rampur, budget ceiling design Rampur, budget lighting design Rampur, budget painting Rampur, budget wallpaper Rampur, budget flooring Rampur, budget tile work Rampur, budget bathroom renovation Rampur, budget bathroom refresh Rampur, TV unit budget design Rampur, feature wall budget design Rampur, wardrobe reface Rampur, cabinet reface Rampur, interior upgrade Rampur, interior renovation Rampur, itemised interior quote Rampur, interior quotation Rampur, interior cost Rampur, interior budget calculator Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, affordable interior designer near me Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/affordable-interior-designer-rampur",
  },

  openGraph: {
    title: "Affordable Interior Designer Rampur | Budget Home Interiors – MTBOSS",

    description:
      "Planning budget-friendly interiors Rampur? MTBOSS helps you spend smartly on kitchens, wardrobes, ceilings and finishes with clear itemised quotes and phased options. Get a free consultation.",

    url: "https://www.mtboss.in/affordable-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-affordable-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Designer Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Affordable Interior Designer Rampur | Budget Home Interiors – MTBOSS",

    description:
      "Planning budget-friendly interiors Rampur? MTBOSS helps you spend smartly on kitchens, wardrobes, ceilings and finishes with clear itemised quotes and phased options. Get a free consultation.",

    images: [
      "https://www.mtboss.in/og-affordable-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/affordable-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-affordable-interior-designer-rampur.jpg",
    priceRange: "₹",
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
      "Affordable Interior Design",
      "Affordable Interior Designer",
      "Budget Interior Design",
      "Budget Home Interiors",
      "Low Cost Interior Design",
      "Economical Interior Design",
      "Affordable Home Interiors",
      "Budget Friendly Interior Design",
      "Interior Design On Budget",
      "Phased Interior Design",
      "Phased Home Interiors",
      "Interior Renovation On Budget",
      "Budget Kitchen Interiors",
      "Budget Wardrobe Design",
      "Budget False Ceiling",
      "Budget Ceiling Design",
      "Budget Lighting Design",
      "Budget Painting",
      "Budget Wallpaper",
      "Budget Flooring",
      "Budget Tile Work",
      "Budget Bathroom Renovation",
      "Budget Bathroom Refresh",
      "TV Unit Budget Design",
      "Feature Wall Budget Design",
      "Wardrobe Reface",
      "Cabinet Reface",
      "Interior Upgrade",
      "Interior Renovation",
      "Itemised Interior Quote",
      "Interior Quotation",
      "Interior Cost",
      "Interior Budget Calculator",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Affordable Interior Designer in Rampur",
    description:
      "Planning budget-friendly interiors Rampur? MTBOSS helps you spend smartly on kitchens, wardrobes, ceilings and finishes with clear itemised quotes and phased options. Get a free consultation. Services include wardrobes and storage units, TV units and simple feature walls, false ceilings with simple lighting, painting, wallpaper and texture finishes, flooring and tile work, and bathroom refresh and renovation.",
    url: "https://www.mtboss.in/affordable-interior-designer-rampur",
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
      "Affordable Interior Design, Affordable Interior Designer, Budget Interior Design, Budget Home Interiors, Low Cost Interior Design, Economical Interior Design, Affordable Home Interiors, Budget Friendly Interior Design, Interior Design On Budget, Phased Interior Design, Phased Home Interiors, Interior Renovation On Budget, Budget Kitchen Interiors, Budget Wardrobe Design, Budget False Ceiling, Budget Ceiling Design, Budget Lighting Design, Budget Painting, Budget Wallpaper, Budget Flooring, Budget Tile Work, Budget Bathroom Renovation, Budget Bathroom Refresh, TV Unit Budget Design, Feature Wall Budget Design, Wardrobe Reface, Cabinet Reface, Interior Upgrade, Interior Renovation, Itemised Interior Quote, Interior Quotation, Interior Cost and Interior Budget Calculator",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does an affordable interior designer do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An affordable interior designer helps you get the most value from your budget by setting priorities, suggesting practical materials, preparing clear quotations and managing the work properly.",
        },
      },
      {
        "@type": "Question",
        name: "How can I reduce interior cost without losing quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spend first on waterproofing, wiring, plumbing, kitchen and wardrobe hardware, and flooring. Save on loose furniture, decor and elaborate features, and keep designs simple.",
        },
      },
      {
        "@type": "Question",
        name: "Why do interior quotations differ so much?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quotations may include different materials, thickness, hardware, scope and exclusions. Compare them item by item to see what you are actually getting.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do interiors in phases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A phased plan lets you complete the most important areas first. We recommend one master plan so that wiring, colours and styles stay consistent.",
        },
      },
      {
        "@type": "Question",
        name: "Is a very cheap quotation a red flag?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes, especially if it has no itemisation, vague materials or pressure for large advances. Ask for details and a clear list of inclusions and exclusions.",
        },
      },
      {
        "@type": "Question",
        name: "Which rooms should I prioritise on a tight budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most families start with the kitchen, wardrobes, bathrooms, wiring, waterproofing and the living room. Secondary rooms and decor can follow.",
        },
      },
      {
        "@type": "Question",
        name: "Can you renovate my old interiors instead of replacing them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes. Reface cabinets, replace hardware, repaint, repair damaged parts and update lighting. We inspect and advise honestly.",
        },
      },
      {
        "@type": "Question",
        name: "How much should I keep as reserve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A reserve of around 8 to 10% of your budget is sensible for changes and unexpected problems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide 3D designs and itemised quotes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can see visuals before work begins and receive an itemised quotation with specifications and exclusions.",
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
        name: "Affordable Interior Designer Rampur",
        item: "https://www.mtboss.in/affordable-interior-designer-rampur",
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