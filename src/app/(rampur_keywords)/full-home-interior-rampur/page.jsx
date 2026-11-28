// app/(bareilly_keywords)/full-home-interior-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Full Home Interior Rampur | Turnkey Home Interiors – MTBOSS",

  description:
    "Complete your whole home with MTBOSS  Rampur: turnkey full home interiors covering design, kitchen, wardrobes, ceilings, flooring, painting and handover, with one team and one schedule.",

  keywords:
    "full home interior Rampur, full home interiors Rampur, full home interior design Rampur, full home interior designer Rampur, full home interior company Rampur, full home interior contractor Rampur, full home interior package Rampur, full home interior cost Rampur, full home interior budget Rampur, full home interior quotation Rampur, full home interior price Rampur, full home interior estimate Rampur, full home interior planning Rampur, full home interior design and execution Rampur, full home interior execution Rampur, full home interior project Rampur, full home interior project management Rampur, full home interior supervision Rampur, full home interior handover Rampur, full home interior timeline Rampur, full home interior schedule Rampur, full home interior phases Rampur, full home interior stages Rampur, full home interior checklist Rampur, full home interior scope Rampur, full home interior master plan Rampur, full home interior electrical plan Rampur, full home interior plumbing plan Rampur, full home interior ceiling plan Rampur, full home interior material schedule Rampur, full home interior material approval Rampur, full home interior quality checks Rampur, full home interior snag list Rampur, full home interior after handover Rampur, full home interior warranty Rampur, full home interior care guidance Rampur, full home interior for flats Rampur, full home interior for apartments Rampur, full home interior for independent houses Rampur, full home interior for duplex Rampur, full home interior for villas Rampur, full home interior for old homes Rampur, full home interior renovation Rampur, full home interior renovation contractor Rampur, full home interior with waterproofing Rampur, full home interior with electrical Rampur, full home interior with plumbing Rampur, full home interior with civil work Rampur, full home interior with carpentry Rampur, full home interior with ceilings Rampur, full home interior with painting Rampur, full home interior with flooring Rampur, full home interior with tiling Rampur, full home interior with modular kitchen Rampur, full home interior with wardrobes Rampur, full home interior with TV unit Rampur, full home interior with storage Rampur, full home interior with 3D design Rampur, full home interior with itemised quotation Rampur, full home interior near me Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/full-home-interior-rampur",
  },

  openGraph: {
    title: "Full Home Interior Rampur | Turnkey Home Interiors – MTBOSS",

    description:
      "Complete your whole home with MTBOSS  Rampur: turnkey full home interiors covering design, kitchen, wardrobes, ceilings, flooring, painting and handover, with one team and one schedule.",

    url: "https://www.mtboss.in/full-home-interior-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-full-home-interior-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Full Home Interior in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Full Home Interior Rampur | Turnkey Home Interiors – MTBOSS",

    description:
      "Complete your whole home with MTBOSS  Rampur: turnkey full home interiors covering design, kitchen, wardrobes, ceilings, flooring, painting and handover, with one team and one schedule.",

    images: [
      "https://www.mtboss.in/og-full-home-interior-rampur.jpg",
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
    url: "https://www.mtboss.in/full-home-interior-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-full-home-interior-rampur.jpg",
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
      "Full Home Interior",
      "Full Home Interiors",
      "Full Home Interior Design",
      "Full Home Interior Designer",
      "Full Home Interior Company",
      "Full Home Interior Contractor",
      "Full Home Interior Package",
      "Full Home Interior Cost",
      "Full Home Interior Budget",
      "Full Home Interior Quotation",
      "Full Home Interior Price",
      "Full Home Interior Estimate",
      "Full Home Interior Planning",
      "Full Home Interior Design and Execution",
      "Full Home Interior Execution",
      "Full Home Interior Project",
      "Full Home Interior Project Management",
      "Full Home Interior Supervision",
      "Full Home Interior Handover",
      "Full Home Interior Timeline",
      "Full Home Interior Schedule",
      "Full Home Interior Phases",
      "Full Home Interior Stages",
      "Full Home Interior Checklist",
      "Full Home Interior Scope",
      "Full Home Interior Master Plan",
      "Full Home Interior Electrical Plan",
      "Full Home Interior Plumbing Plan",
      "Full Home Interior Ceiling Plan",
      "Full Home Interior Material Schedule",
      "Full Home Interior Material Approval",
      "Full Home Interior Quality Checks",
      "Full Home Interior Snag List",
      "Full Home Interior After Handover",
      "Full Home Interior Warranty",
      "Full Home Interior Care Guidance",
      "Full Home Interior for Flats",
      "Full Home Interior for Apartments",
      "Full Home Interior for Independent Houses",
      "Full Home Interior for Duplex",
      "Full Home Interior for Villas",
      "Full Home Interior for Old Homes",
      "Full Home Interior Renovation",
      "Full Home Interior Renovation Contractor",
      "Full Home Interior with Waterproofing",
      "Full Home Interior with Electrical",
      "Full Home Interior with Plumbing",
      "Full Home Interior with Civil Work",
      "Full Home Interior with Carpentry",
      "Full Home Interior with Ceilings",
      "Full Home Interior with Painting",
      "Full Home Interior with Flooring",
      "Full Home Interior with Tiling",
      "Full Home Interior with Modular Kitchen",
      "Full Home Interior with Wardrobes",
      "Full Home Interior with TV Unit",
      "Full Home Interior with Storage",
      "Full Home Interior with 3D Design",
      "Full Home Interior with Itemised Quotation",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full Home Interior in Rampur",
    description:
      "Complete your whole home with MTBOSS  Rampur: turnkey full home interiors covering design, kitchen, wardrobes, ceilings, flooring, painting and handover, with one team and one schedule. Services include design and planning, civil and preparation work, electrical and plumbing coordination, false ceilings and lighting, carpentry, flooring and tiling, painting, wallpaper and wall finishes, doors, windows and hardware, supervision, testing, handover and snag clearance.",
    url: "https://www.mtboss.in/full-home-interior-rampur",
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
      "Full Home Interior, Full Home Interiors, Full Home Interior Design, Full Home Interior Designer, Full Home Interior Company, Full Home Interior Contractor, Full Home Interior Package, Full Home Interior Cost, Full Home Interior Budget, Full Home Interior Quotation, Full Home Interior Price, Full Home Interior Estimate, Full Home Interior Planning, Full Home Interior Design and Execution, Full Home Interior Execution, Full Home Interior Project, Full Home Interior Project Management, Full Home Interior Supervision, Full Home Interior Handover, Full Home Interior Timeline, Full Home Interior Schedule, Full Home Interior Phases, Full Home Interior Stages, Full Home Interior Checklist, Full Home Interior Scope, Full Home Interior Master Plan, Full Home Interior Electrical Plan, Full Home Interior Plumbing Plan, Full Home Interior Ceiling Plan, Full Home Interior Material Schedule, Full Home Interior Material Approval, Full Home Interior Quality Checks, Full Home Interior Snag List, Full Home Interior After Handover, Full Home Interior Warranty, Full Home Interior Care Guidance, Full Home Interior for Flats, Full Home Interior for Apartments, Full Home Interior for Independent Houses, Full Home Interior for Duplex, Full Home Interior for Villas, Full Home Interior for Old Homes, Full Home Interior Renovation, Full Home Interior Renovation Contractor, Full Home Interior with Waterproofing, Full Home Interior with Electrical, Full Home Interior with Plumbing, Full Home Interior with Civil Work, Full Home Interior with Carpentry, Full Home Interior with Ceilings, Full Home Interior with Painting, Full Home Interior with Flooring, Full Home Interior with Tiling, Full Home Interior with Modular Kitchen, Full Home Interior with Wardrobes, Full Home Interior with TV Unit, Full Home Interior with Storage, Full Home Interior with 3D Design and Full Home Interior with Itemised Quotation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a full home interior package include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It usually includes design, civil preparation, electrical and plumbing coordination, ceilings, carpentry, flooring, painting, fittings and handover. Loose furniture and appliances are often separate. We list the scope clearly in the quotation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between turnkey and separate vendors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In a turnkey project, one company manages design, execution and handover, with one schedule and responsibility. With separate vendors, you coordinate each trade yourself.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do my full home in phases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can prepare one master plan and complete the work in stages, so that wiring, colours and styles stay consistent.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a full home interior project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size, scope, material lead times and how quickly decisions are made. We give a schedule with the quotation after a site visit.",
        },
      },
      {
        "@type": "Question",
        name: "Can I live in the house during the work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is possible in some cases, but dust, noise and restricted areas make it harder. We can plan the order of work to protect a livable area, and we advise staying elsewhere during the heaviest stages if you can.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle electrical, plumbing and waterproofing too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We coordinate civil, electrical, plumbing and waterproofing work as part of the project.",
        },
      },
      {
        "@type": "Question",
        name: "Who chooses loose furniture and appliances?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually the client does. We give layout, size and electrical guidance, so that sofas, beds and appliances fit the plan.",
        },
      },
      {
        "@type": "Question",
        name: "How do you control changes during the project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every change is recorded in writing, with its cost and time effect, before work proceeds.",
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
        name: "Full Home Interior Rampur",
        item: "https://www.mtboss.in/full-home-interior-rampur",
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