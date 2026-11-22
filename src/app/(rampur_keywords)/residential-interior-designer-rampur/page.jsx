// app/(bareilly_keywords)/residential-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/QuickServices";
import CalculatorCTA from "../../components/CalculatorCTA";
import Services from "../../components/Services";

export const metadata = {
  title: "Residential Interior Designer  Rampur | Home Interiors – MTBOSS",

  description:
    "MTBOSS is a residential interior designer serving Rampur: flats, houses, villas and builder floors, with design, kitchen, wardrobes, ceilings, painting and execution by one team.",

  keywords:
    "residential interior designer Rampur, residential interior design Rampur, residential interiors Rampur, residential interior designer near me Rampur, residential interior company Rampur, residential interior contractor Rampur, residential interior design company Rampur, home interior designer Rampur, home interior design Rampur, home interiors Rampur, home interior company Rampur, home interior contractor Rampur, home interior design company Rampur, house interior designer Rampur, house interior design Rampur, house interiors Rampur, flat interior designer Rampur, flat interior design Rampur, flat interiors Rampur, apartment interior designer Rampur, apartment interior design Rampur, apartment interiors Rampur, 1 BHK interior designer Rampur, 1 BHK interior design Rampur, 1 BHK interiors Rampur, 2 BHK interior designer Rampur, 2 BHK interior design Rampur, 2 BHK interiors Rampur, 3 BHK interior designer Rampur, 3 BHK interior design Rampur, 3 BHK interiors Rampur, 4 BHK interior designer Rampur, 4 BHK interior design Rampur, 4 BHK interiors Rampur, independent house interior designer Rampur, independent house interior design Rampur, independent house interiors Rampur, duplex interior designer Rampur, duplex interior design Rampur, duplex interiors Rampur, builder floor interior designer Rampur, builder floor interior design Rampur, builder floor interiors Rampur, villa interior designer Rampur, villa interior design Rampur, villa interiors Rampur, bungalow interior designer Rampur, bungalow interior design Rampur, bungalow interiors Rampur, old house renovation Rampur, old house interior renovation Rampur, rented home interior Rampur, rented home interiors Rampur, new home interior Rampur, new home interiors Rampur, farmhouse interior designer Rampur, farmhouse interior design Rampur, farmhouse interiors Rampur, second home interior designer Rampur, second home interior design Rampur, second home interiors Rampur, residential interior with kitchen Rampur, residential interior with wardrobes Rampur, residential interior with ceilings Rampur, residential interior with painting Rampur, residential interior with flooring Rampur, residential interior with tiling Rampur, residential interior with electrical Rampur, residential interior with plumbing Rampur, residential interior with waterproofing Rampur, residential interior with civil work Rampur, residential interior with carpentry Rampur, residential interior with 3D design Rampur, residential interior with itemised quotation Rampur, residential interior cost Rampur, residential interior budget Rampur, residential interior quotation Rampur, residential interior estimate Rampur, residential interior price Rampur, residential interior planning Rampur, residential interior space planning Rampur, residential interior furniture layout Rampur, residential interior layout design Rampur, residential interior project management Rampur, residential interior supervision Rampur, residential interior handover Rampur, residential interior schedule Rampur, residential interior timeline Rampur, residential interior phases Rampur, residential interior stages Rampur, residential interior checklist Rampur, residential interior scope Rampur, residential interior master plan Rampur, residential interior electrical plan Rampur, residential interior plumbing plan Rampur, residential interior ceiling plan Rampur, residential interior material schedule Rampur, residential interior material approval Rampur, residential interior quality checks Rampur, residential interior snag list Rampur, residential interior after handover Rampur, residential interior warranty Rampur, residential interior care guidance Rampur, residential interior near me Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/residential-interior-designer-rampur",
  },

  openGraph: {
    title: "Residential Interior Designer  Rampur | Home Interiors – MTBOSS",

    description:
      "MTBOSS is a residential interior designer serving Rampur: flats, houses, villas and builder floors, with design, kitchen, wardrobes, ceilings, painting and execution by one team.",

    url: "https://www.mtboss.in/residential-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-residential-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Interior Designer in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Residential Interior Designer  Rampur | Home Interiors – MTBOSS",

    description:
      "MTBOSS is a residential interior designer serving Rampur: flats, houses, villas and builder floors, with design, kitchen, wardrobes, ceilings, painting and execution by one team.",

    images: [
      "https://www.mtboss.in/og-residential-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/residential-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-residential-interior-designer-rampur.jpg",
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
      "Residential Interior Designer",
      "Residential Interior Design",
      "Residential Interiors",
      "Residential Interior Company",
      "Residential Interior Contractor",
      "Residential Interior Design Company",
      "Home Interior Designer",
      "Home Interior Design",
      "Home Interiors",
      "Home Interior Company",
      "Home Interior Contractor",
      "Home Interior Design Company",
      "House Interior Designer",
      "House Interior Design",
      "House Interiors",
      "Flat Interior Designer",
      "Flat Interior Design",
      "Flat Interiors",
      "Apartment Interior Designer",
      "Apartment Interior Design",
      "Apartment Interiors",
      "1 BHK Interior Designer",
      "1 BHK Interior Design",
      "1 BHK Interiors",
      "2 BHK Interior Designer",
      "2 BHK Interior Design",
      "2 BHK Interiors",
      "3 BHK Interior Designer",
      "3 BHK Interior Design",
      "3 BHK Interiors",
      "4 BHK Interior Designer",
      "4 BHK Interior Design",
      "4 BHK Interiors",
      "Independent House Interior Designer",
      "Independent House Interior Design",
      "Independent House Interiors",
      "Duplex Interior Designer",
      "Duplex Interior Design",
      "Duplex Interiors",
      "Builder Floor Interior Designer",
      "Builder Floor Interior Design",
      "Builder Floor Interiors",
      "Villa Interior Designer",
      "Villa Interior Design",
      "Villa Interiors",
      "Bungalow Interior Designer",
      "Bungalow Interior Design",
      "Bungalow Interiors",
      "Old House Renovation",
      "Old House Interior Renovation",
      "Rented Home Interior",
      "Rented Home Interiors",
      "New Home Interior",
      "New Home Interiors",
      "Farmhouse Interior Designer",
      "Farmhouse Interior Design",
      "Farmhouse Interiors",
      "Second Home Interior Designer",
      "Second Home Interior Design",
      "Second Home Interiors",
      "Residential Interior with Kitchen",
      "Residential Interior with Wardrobes",
      "Residential Interior with Ceilings",
      "Residential Interior with Painting",
      "Residential Interior with Flooring",
      "Residential Interior with Tiling",
      "Residential Interior with Electrical",
      "Residential Interior with Plumbing",
      "Residential Interior with Waterproofing",
      "Residential Interior with Civil Work",
      "Residential Interior with Carpentry",
      "Residential Interior with 3D Design",
      "Residential Interior with Itemised Quotation",
      "Residential Interior Cost",
      "Residential Interior Budget",
      "Residential Interior Quotation",
      "Residential Interior Estimate",
      "Residential Interior Price",
      "Residential Interior Planning",
      "Residential Interior Space Planning",
      "Residential Interior Furniture Layout",
      "Residential Interior Layout Design",
      "Residential Interior Project Management",
      "Residential Interior Supervision",
      "Residential Interior Handover",
      "Residential Interior Schedule",
      "Residential Interior Timeline",
      "Residential Interior Phases",
      "Residential Interior Stages",
      "Residential Interior Checklist",
      "Residential Interior Scope",
      "Residential Interior Master Plan",
      "Residential Interior Electrical Plan",
      "Residential Interior Plumbing Plan",
      "Residential Interior Ceiling Plan",
      "Residential Interior Material Schedule",
      "Residential Interior Material Approval",
      "Residential Interior Quality Checks",
      "Residential Interior Snag List",
      "Residential Interior After Handover",
      "Residential Interior Warranty",
      "Residential Interior Care Guidance",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Interior Designer in Rampur",
    description:
      "MTBOSS is a residential interior designer serving Rampur: flats, houses, villas and builder floors, with design, kitchen, wardrobes, ceilings, painting and execution by one team. Services include complete home interior design and turnkey execution, space planning and furniture layout, modular kitchen design, wardrobes, dressing units and storage, TV units, feature walls and living room design, bedroom, kids' room and study design, false ceilings and lighting design, flooring, tiles and marble work.",
    url: "https://www.mtboss.in/residential-interior-designer-rampur",
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
      "Residential Interior Designer, Residential Interior Design, Residential Interiors, Residential Interior Company, Residential Interior Contractor, Residential Interior Design Company, Home Interior Designer, Home Interior Design, Home Interiors, Home Interior Company, Home Interior Contractor, Home Interior Design Company, House Interior Designer, House Interior Design, House Interiors, Flat Interior Designer, Flat Interior Design, Flat Interiors, Apartment Interior Designer, Apartment Interior Design, Apartment Interiors, 1 BHK Interior Designer, 1 BHK Interior Design, 1 BHK Interiors, 2 BHK Interior Designer, 2 BHK Interior Design, 2 BHK Interiors, 3 BHK Interior Designer, 3 BHK Interior Design, 3 BHK Interiors, 4 BHK Interior Designer, 4 BHK Interior Design, 4 BHK Interiors, Independent House Interior Designer, Independent House Interior Design, Independent House Interiors, Duplex Interior Designer, Duplex Interior Design, Duplex Interiors, Builder Floor Interior Designer, Builder Floor Interior Design, Builder Floor Interiors, Villa Interior Designer, Villa Interior Design, Villa Interiors, Bungalow Interior Designer, Bungalow Interior Design, Bungalow Interiors, Old House Renovation, Old House Interior Renovation, Rented Home Interior, Rented Home Interiors, New Home Interior, New Home Interiors, Farmhouse Interior Designer, Farmhouse Interior Design, Farmhouse Interiors, Second Home Interior Designer, Second Home Interior Design, Second Home Interiors, Residential Interior with Kitchen, Residential Interior with Wardrobes, Residential Interior with Ceilings, Residential Interior with Painting, Residential Interior with Flooring, Residential Interior with Tiling, Residential Interior with Electrical, Residential Interior with Plumbing, Residential Interior with Waterproofing, Residential Interior with Civil Work, Residential Interior with Carpentry, Residential Interior with 3D Design, Residential Interior with Itemised Quotation, Residential Interior Cost, Residential Interior Budget, Residential Interior Quotation, Residential Interior Estimate, Residential Interior Price, Residential Interior Planning, Residential Interior Space Planning, Residential Interior Furniture Layout, Residential Interior Layout Design, Residential Interior Project Management, Residential Interior Supervision, Residential Interior Handover, Residential Interior Schedule, Residential Interior Timeline, Residential Interior Phases, Residential Interior Stages, Residential Interior Checklist, Residential Interior Scope, Residential Interior Master Plan, Residential Interior Electrical Plan, Residential Interior Plumbing Plan, Residential Interior Ceiling Plan, Residential Interior Material Schedule, Residential Interior Material Approval, Residential Interior Quality Checks, Residential Interior Snag List, Residential Interior After Handover, Residential Interior Warranty and Residential Interior Care Guidance",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a residential interior designer do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A residential interior designer plans the layout, storage, materials, lighting and finishes of a home, prepares designs and 3D visuals, and manages execution until handover.",
        },
      },
      {
        "@type": "Question",
        name: "What types of homes do you design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We design flats, apartments, independent houses, duplexes, builder floors and villas, as well as renovations of older homes.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design only one room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We take projects of every size, from one kitchen or bedroom to a complete home.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle civil, electrical, plumbing and waterproofing work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We coordinate civil, electrical, plumbing and waterproofing work as part of the project, so that new interiors are built on sound basics.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide 3D designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can see visuals before work begins and request changes.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get an estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use our online construction calculator for a starting idea, then contact us for a site visit and an itemised quotation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do my home interiors in phases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We recommend one master plan carried out in phases, so wiring, ceilings and design stay consistent.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a home interior project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size, scope, material lead times and decision speed. We give a schedule with the quotation after a site visit.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer support after handover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If something needs adjustment or repair, you can reach our team, and we also offer painter, carpenter, electrician, plumber and other home services.",
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
        name: "Residential Interior Designer Rampur",
        item: "https://www.mtboss.in/residential-interior-designer-rampur",
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