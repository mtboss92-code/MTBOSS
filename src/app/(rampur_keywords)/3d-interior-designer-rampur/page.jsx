// app/(bareilly_keywords)/3-bhk-interior-design-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "3 BHK Interior Design  Rampur | Flat & House Interiors – MTBOSS",

  description:
    "Plan your 3 BHK interiors Rampur with MTBOSS: zoned layouts, modular kitchen, three bedrooms, study and utility planning, ceilings and lighting, with 3D design and itemised quotes.",

  keywords:
    "3 BHK interior design Rampur, 3 BHK interior Rampur, 3 BHK interiors Rampur, 3 BHK flat interior Rampur, 3 BHK apartment interior Rampur, 3 BHK house interior Rampur, 3 BHK home interior Rampur, 3 BHK interior designer Rampur, 3 BHK interior design company Rampur, 3 BHK interior planning Rampur, 3 BHK space planning Rampur, 3 BHK furniture layout Rampur, 3 BHK layout design Rampur, 3 BHK modular kitchen Rampur, 3 BHK kitchen design Rampur, 3 BHK wardrobe design Rampur, 3 BHK wardrobe Rampur, 3 BHK TV unit Rampur, 3 BHK living room interior Rampur, 3 BHK hall interior Rampur, 3 BHK dining interior Rampur, 3 BHK bedroom interior Rampur, 3 BHK master bedroom interior Rampur, 3 BHK second bedroom interior Rampur, 3 BHK third bedroom interior Rampur, 3 BHK guest room interior Rampur, 3 BHK study room interior Rampur, 3 BHK kids room interior Rampur, 3 BHK bathroom interior Rampur, 3 BHK balcony interior Rampur, 3 BHK pooja unit Rampur, 3 BHK false ceiling Rampur, 3 BHK ceiling design Rampur, 3 BHK lighting design Rampur, 3 BHK electrical plan Rampur, 3 BHK flooring Rampur, 3 BHK tiles Rampur, 3 BHK painting Rampur, 3 BHK storage design Rampur, 3 BHK storage solutions Rampur, 3 BHK interior cost Rampur, 3 BHK interior budget Rampur, 3 BHK interior quotation Rampur, 3 BHK itemised quote Rampur, 3 BHK 3D design Rampur, 3 BHK 3D view Rampur, 3 BHK interior design near me Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/3-bhk-interior-design-rampur",
  },

  openGraph: {
    title: "3 BHK Interior Design  Rampur | Flat & House Interiors – MTBOSS",

    description:
      "Plan your 3 BHK interiors Rampur with MTBOSS: zoned layouts, modular kitchen, three bedrooms, study and utility planning, ceilings and lighting, with 3D design and itemised quotes.",

    url: "https://www.mtboss.in/3-bhk-interior-design-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-3-bhk-interior-design-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "3 BHK Interior Design in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "3 BHK Interior Design  Rampur | Flat & House Interiors – MTBOSS",

    description:
      "Plan your 3 BHK interiors Rampur with MTBOSS: zoned layouts, modular kitchen, three bedrooms, study and utility planning, ceilings and lighting, with 3D design and itemised quotes.",

    images: [
      "https://www.mtboss.in/og-3-bhk-interior-design-rampur.jpg",
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
    url: "https://www.mtboss.in/3-bhk-interior-design-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-3-bhk-interior-design-rampur.jpg",
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
      "3 BHK Interior Design",
      "3 BHK Interior",
      "3 BHK Interiors",
      "3 BHK Flat Interior",
      "3 BHK Apartment Interior",
      "3 BHK House Interior",
      "3 BHK Home Interior",
      "3 BHK Interior Designer",
      "3 BHK Interior Design Company",
      "3 BHK Interior Planning",
      "3 BHK Space Planning",
      "3 BHK Furniture Layout",
      "3 BHK Layout Design",
      "3 BHK Modular Kitchen",
      "3 BHK Kitchen Design",
      "3 BHK Wardrobe Design",
      "3 BHK Wardrobe",
      "3 BHK TV Unit",
      "3 BHK Living Room Interior",
      "3 BHK Hall Interior",
      "3 BHK Dining Interior",
      "3 BHK Bedroom Interior",
      "3 BHK Master Bedroom Interior",
      "3 BHK Second Bedroom Interior",
      "3 BHK Third Bedroom Interior",
      "3 BHK Guest Room Interior",
      "3 BHK Study Room Interior",
      "3 BHK Kids Room Interior",
      "3 BHK Bathroom Interior",
      "3 BHK Balcony Interior",
      "3 BHK Pooja Unit",
      "3 BHK False Ceiling",
      "3 BHK Ceiling Design",
      "3 BHK Lighting Design",
      "3 BHK Electrical Plan",
      "3 BHK Flooring",
      "3 BHK Tiles",
      "3 BHK Painting",
      "3 BHK Storage Design",
      "3 BHK Storage Solutions",
      "3 BHK Interior Cost",
      "3 BHK Interior Budget",
      "3 BHK Interior Quotation",
      "3 BHK Itemised Quote",
      "3 BHK 3D Design",
      "3 BHK 3D View",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "3 BHK Interior Design in Rampur",
    description:
      "Plan your 3 BHK interiors Rampur with MTBOSS: zoned layouts, modular kitchen, three bedrooms, study and utility planning, ceilings and lighting, with 3D design and itemised quotes. Services include complete 3 BHK interior design and execution, zoned space planning and furniture layout, modular kitchen and utility planning, wardrobes for all bedrooms, false ceilings and lighting design, flooring, tiles and wall finishes.",
    url: "https://www.mtboss.in/3-bhk-interior-design-rampur",
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
      "3 BHK Interior Design, 3 BHK Interior, 3 BHK Interiors, 3 BHK Flat Interior, 3 BHK Apartment Interior, 3 BHK House Interior, 3 BHK Home Interior, 3 BHK Interior Designer, 3 BHK Interior Design Company, 3 BHK Interior Planning, 3 BHK Space Planning, 3 BHK Furniture Layout, 3 BHK Layout Design, 3 BHK Modular Kitchen, 3 BHK Kitchen Design, 3 BHK Wardrobe Design, 3 BHK Wardrobe, 3 BHK TV Unit, 3 BHK Living Room Interior, 3 BHK Hall Interior, 3 BHK Dining Interior, 3 BHK Bedroom Interior, 3 BHK Master Bedroom Interior, 3 BHK Second Bedroom Interior, 3 BHK Third Bedroom Interior, 3 BHK Guest Room Interior, 3 BHK Study Room Interior, 3 BHK Kids Room Interior, 3 BHK Bathroom Interior, 3 BHK Balcony Interior, 3 BHK Pooja Unit, 3 BHK False Ceiling, 3 BHK Ceiling Design, 3 BHK Lighting Design, 3 BHK Electrical Plan, 3 BHK Flooring, 3 BHK Tiles, 3 BHK Painting, 3 BHK Storage Design, 3 BHK Storage Solutions, 3 BHK Interior Cost, 3 BHK Interior Budget, 3 BHK Interior Quotation, 3 BHK Itemised Quote, 3 BHK 3D Design and 3 BHK 3D View",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a 3 BHK interior design include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It usually includes planning and design, kitchen, wardrobes, TV unit, ceilings, lighting, flooring, painting, bathroom work and electrical coordination across the home. We list the scope clearly in the quotation.",
        },
      },
      {
        "@type": "Question",
        name: "How do I plan storage in a 3 BHK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "List what each family member stores, then assign places in wardrobes, lofts, kitchen units, entrance storage and utility cupboards. A whole-home storage plan avoids gaps and duplication.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the third bedroom as a study or guest room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A wall-mounted desk, shelves and a sofa-bed or storage bed can make the third room work as a study, guest room or both.",
        },
      },
      {
        "@type": "Question",
        name: "Should I design the whole 3 BHK at once or in phases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One master plan carried out in phases often works best. It keeps wiring, ceilings and design consistent while spreading the cost.",
        },
      },
      {
        "@type": "Question",
        name: "How do I keep a 3 BHK looking like one home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use a common colour family, wood tone, handle style and lighting temperature across rooms, and plan ceilings and electrical layouts as one set.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best kitchen layout for a 3 BHK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L-shaped, U-shaped, parallel and island layouts are common. The best choice depends on room shape, doors and windows and your cooking habits. We show options in 3D.",
        },
      },
      {
        "@type": "Question",
        name: "How should I plan AC for a 3 BHK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Decide AC positions for the hall and bedrooms early, plan pipe and drain routes and avoid direct airflow on beds and desks. We coordinate this with the ceiling plan.",
        },
      },
      {
        "@type": "Question",
        name: "Can I live in the house during the work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is possible in some cases, but dust and noise make it harder. We can plan the order of work to finish essential rooms first, and we advise staying elsewhere during the heaviest stages if you can.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide 3D designs and itemised quotations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can see visuals for each room and receive an itemised quotation with specifications and exclusions.",
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
        name: "3 BHK Interior Design Rampur",
        item: "https://www.mtboss.in/3-bhk-interior-design-rampur",
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