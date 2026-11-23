// app/(bareilly_keywords)/luxury-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Luxury Interior Designer Rampur | Villa & Home Interiors – MTBOSS",

  description:
    "MTBOSS designs luxury interiors Rampur for villas, bungalows and premium homes: bespoke furniture, fine finishes, layered lighting and detailed execution. Book a private consultation.",

  keywords:
    "luxury interior designer Rampur, luxury interior design Rampur, premium home interiors Rampur, villa interior designer Rampur, bungalow interior designer Rampur, luxury home interiors Rampur, luxury villa interiors Rampur, luxury apartment interiors Rampur, high end interior designer Rampur, bespoke interior design Rampur, custom furniture Rampur, bespoke furniture Rampur, custom carpentry Rampur, built in furniture Rampur, feature wall design Rampur, wall panelling Rampur, wall cladding Rampur, stone work Rampur, marble work Rampur, tile work Rampur, false ceiling design Rampur, luxury lighting design Rampur, layered lighting Rampur, cove lighting Rampur, profile lighting Rampur, spot lighting Rampur, chandelier design Rampur, pendant lighting Rampur, luxury kitchen design Rampur, dressing room design Rampur, walk in wardrobe Rampur, home theatre design Rampur, puja room design Rampur, staircase design Rampur, terrace design Rampur, smart home wiring Rampur, home automation provisions Rampur, luxury interior cost Rampur, luxury interior quote Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, luxury interior designer near me Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/luxury-interior-designer-rampur",
  },

  openGraph: {
    title: "Luxury Interior Designer Rampur | Villa & Home Interiors – MTBOSS",

    description:
      "MTBOSS designs luxury interiors Rampur for villas, bungalows and premium homes: bespoke furniture, fine finishes, layered lighting and detailed execution. Book a private consultation.",

    url: "https://www.mtboss.in/luxury-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-luxury-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Designer Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Luxury Interior Designer Rampur | Villa & Home Interiors – MTBOSS",

    description:
      "MTBOSS designs luxury interiors Rampur for villas, bungalows and premium homes: bespoke furniture, fine finishes, layered lighting and detailed execution. Book a private consultation.",

    images: [
      "https://www.mtboss.in/og-luxury-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/luxury-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-luxury-interior-designer-rampur.jpg",
    priceRange: "₹₹₹",
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
      "Luxury Interior Design",
      "Luxury Interior Designer",
      "Premium Home Interiors",
      "Villa Interior Design",
      "Bungalow Interior Design",
      "Luxury Home Interiors",
      "Luxury Villa Interiors",
      "Luxury Apartment Interiors",
      "High End Interior Design",
      "Bespoke Interior Design",
      "Custom Furniture",
      "Bespoke Furniture",
      "Custom Carpentry",
      "Built In Furniture",
      "Feature Wall Design",
      "Wall Panelling",
      "Wall Cladding",
      "Stone Work",
      "Marble Work",
      "Tile Work",
      "False Ceiling Design",
      "Luxury Lighting Design",
      "Layered Lighting",
      "Cove Lighting",
      "Profile Lighting",
      "Spot Lighting",
      "Chandelier Design",
      "Pendant Lighting",
      "Luxury Kitchen Design",
      "Dressing Room Design",
      "Walk In Wardrobe",
      "Home Theatre Design",
      "Puja Room Design",
      "Staircase Design",
      "Terrace Design",
      "Smart Home Wiring",
      "Home Automation Provisions",
      "Luxury Interior Cost",
      "Luxury Interior Quote",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Luxury Interior Designer in Rampur",
    description:
      "MTBOSS designs luxury interiors Rampur for villas, bungalows and premium homes: bespoke furniture, fine finishes, layered lighting and detailed execution. Book a private consultation. Services include full villa and bungalow interiors, space planning and architectural interior detailing, bespoke furniture and carpentry, feature walls, panelling and wall cladding, stone, marble and tile work, false ceilings and detailed lighting design, luxury kitchens and dressing rooms.",
    url: "https://www.mtboss.in/luxury-interior-designer-rampur",
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
      "Luxury Interior Design, Luxury Interior Designer, Premium Home Interiors, Villa Interior Design, Bungalow Interior Design, Luxury Home Interiors, Luxury Villa Interiors, Luxury Apartment Interiors, High End Interior Design, Bespoke Interior Design, Custom Furniture, Bespoke Furniture, Custom Carpentry, Built In Furniture, Feature Wall Design, Wall Panelling, Wall Cladding, Stone Work, Marble Work, Tile Work, False Ceiling Design, Luxury Lighting Design, Layered Lighting, Cove Lighting, Profile Lighting, Spot Lighting, Chandelier Design, Pendant Lighting, Luxury Kitchen Design, Dressing Room Design, Walk In Wardrobe, Home Theatre Design, Puja Room Design, Staircase Design, Terrace Design, Smart Home Wiring, Home Automation Provisions, Luxury Interior Cost and Luxury Interior Quote",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a luxury interior designer do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A luxury interior designer plans space, materials, lighting, furniture and details to a high standard, and manages execution so that the finished home matches the design.",
        },
      },
      {
        "@type": "Question",
        name: "How is luxury interior design different from regular interior design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Luxury design places greater emphasis on material quality, bespoke detailing, craftsmanship, lighting, privacy, acoustics and finishing, and it usually involves more customisation and longer lead times.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design luxury interiors for a flat or small home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Luxury depends on quality and detail, not size. We focus on high-impact areas and keep the rest simple and well finished.",
        },
      },
      {
        "@type": "Question",
        name: "What materials are used in luxury interiors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common choices include natural stone, quality tiles, fine wood and veneer, metal accents, glass, quality fabrics and strong hardware. We recommend based on your style, budget and maintenance preferences.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide bespoke furniture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We design and build custom carpentry and built-in furniture. Loose furniture, art and specialist items are usually selected by the client, and we give layout and size guidance.",
        },
      },
      {
        "@type": "Question",
        name: "Can you include smart-home features?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We plan concealed wiring and provisions for lighting control, security, audio and automation, and coordinate with specialist vendors who supply and install the systems.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a luxury interior project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines are longer than for standard projects, because of detailing, sampling and special-order items. We give a schedule with the quotation after reviewing your design brief.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide 3D designs and material samples?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can review 3D visuals and approve material samples before work proceeds.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work with my architect or my own designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can work with your architect or your design drawings, and coordinate execution and detailing.",
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
        name: "Luxury Interior Designer Rampur",
        item: "https://www.mtboss.in/luxury-interior-designer-rampur",
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