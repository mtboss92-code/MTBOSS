// app/(bareilly_keywords)/industrial-building-contractor-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "Industrial Building Contractor Rampur | Factory & Plant Builder - MTBOSS",


  description:
    "MTBOSS is an industrial building contractor serving Rampur: factories, processing units, workshops and plant buildings with strong floors, machine foundations, utilities planning and milestone schedules.",


  keywords:
    "industrial building contractor Rampur, factory building contractor Rampur, industrial construction Rampur, manufacturing unit construction Rampur, food processing unit construction Rampur, MSME factory construction Rampur, plant building contractor Rampur, industrial building cost factors Rampur, industrial building construction Rampur, factory construction Rampur, industrial shed construction Rampur, PEB industrial building Rampur, RCC industrial building Rampur, industrial flooring Rampur, machine foundation construction Rampur, industrial drainage Rampur, factory renovation Rampur, industrial expansion contractor Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, industrial construction estimate Rampur",


  alternates: {
    canonical:
      "https://www.mtboss.in/industrial-building-contractor-rampur",
  },


  openGraph: {
    title: "Industrial Building Contractor Rampur | Factory & Plant Builder - MTBOSS",


    description:
      "MTBOSS is an industrial building contractor serving Rampur: factories, processing units, workshops and plant buildings with strong floors, machine foundations, utilities planning and milestone schedules.",


    url: "https://www.mtboss.in/industrial-building-contractor-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.mtboss.in/og-industrial-building-contractor-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Building Contractor Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "Industrial Building Contractor Rampur | Factory & Plant Builder - MTBOSS",


    description:
      "MTBOSS is an industrial building contractor serving Rampur: factories, processing units, workshops and plant buildings with strong floors, machine foundations, utilities planning and milestone schedules.",


    images: [
      "https://www.mtboss.in/og-industrial-building-contractor-rampur.jpg",
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
    "@type": "GeneralContractor",
    name: "MTBOSS Construction Private Limited",
    url: "https://www.mtboss.in/industrial-building-contractor-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-industrial-building-contractor-rampur.jpg",
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
      "Industrial Building Contractor Rampur",
      "Factory Building Contractor Rampur",
      "Industrial Construction Rampur",
      "Manufacturing Unit Construction Rampur",
      "Food Processing Unit Construction Rampur",
      "MSME Factory Construction Rampur",
      "Plant Building Contractor Rampur",
      "Industrial Building Cost Factors Rampur",
      "Industrial Building Construction Rampur",
      "Factory Construction Rampur",
      "Industrial Shed Construction Rampur",
      "PEB Industrial Building Rampur",
      "RCC Industrial Building Rampur",
      "Industrial Flooring Rampur",
      "Machine Foundation Construction Rampur",
      "Industrial Drainage Rampur",
      "Factory Renovation Rampur",
      "Industrial Expansion Contractor Rampur",
      "Industrial Construction Estimate Rampur",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industrial Building Contractor in Rampur",
    description:
      "MTBOSS is an industrial building contractor serving Rampur for factories, processing units, workshops and plant buildings. Services include structure, industrial flooring, machine foundations, utilities planning, drainage, roofing, ventilation, PEB and RCC construction, renovation, expansion and milestone scheduling.",
    url: "https://www.mtboss.in/industrial-building-contractor-rampur",
    provider: {
      "@type": "GeneralContractor",
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
      "Industrial Building Contractor Rampur, Factory Building Contractor Rampur, Industrial Construction Rampur, Manufacturing Unit Construction Rampur, Food Processing Unit Construction Rampur, MSME Factory Construction Rampur, Plant Building Contractor Rampur, Industrial Building Cost Factors Rampur, Industrial Building Construction Rampur, Factory Construction Rampur, Industrial Shed Construction Rampur, PEB Industrial Building Rampur, RCC Industrial Building Rampur, Industrial Flooring Rampur, Machine Foundation Construction Rampur, Industrial Drainage Rampur, Factory Renovation Rampur, Industrial Expansion Contractor Rampur and Industrial Construction Estimate Rampur",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does an industrial building contractor do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An industrial building contractor builds factories and plant buildings, including site preparation, foundations, structure, floors, roofing, drainage, services coordination and finishing, and coordinates with your machinery vendors and consultants.",
        },
      },
      {
        "@type": "Question",
        name: "Do you supply machinery or design my production process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We build the building and prepare it for your equipment. Machinery and process design are handled by your vendors and technical consultants.",
        },
      },
      {
        "@type": "Question",
        name: "Which is better for my factory, PEB or RCC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PEB is faster and gives wide spans, steel truss is economical for smaller units and RCC suits heavy loads, multi-storey plants and food processing. We recommend after studying your process, machinery and budget.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build machine foundations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build foundations, pits and trenches to your vendors' drawings and coordinate on site, so that equipment installation goes smoothly.",
        },
      },
      {
        "@type": "Question",
        name: "How strong should an industrial floor be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your machines, stock and vehicles. We design slab thickness, reinforcement and joints to match your loads.",
        },
      },
      {
        "@type": "Question",
        name: "Can I build in phases and expand later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if the plot and structure are planned for it from the start. We design layouts that allow additional bays with minimum disruption.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with approvals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prepare technical drawings and help you understand the documents needed. Please confirm current requirements with the concerned authorities, including pollution and factory-related permissions.",
        },
      },
      {
        "@type": "Question",
        name: "How do you protect my production start date?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We plan backward from your target date, agree a milestone schedule, order long-lead items early, coordinate with your vendors, hold regular reviews and warn you early if anything may affect the timeline.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact us with your plot details, and we will arrange a site visit. After reviewing your plan, we prepare an itemised quotation. You can also use our online construction calculator for a starting idea.",
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
        name: "Construction Services",
        item: "https://www.mtboss.in/construction-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industrial Building Contractor Rampur",
        item: "https://www.mtboss.in/industrial-building-contractor-rampur",
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