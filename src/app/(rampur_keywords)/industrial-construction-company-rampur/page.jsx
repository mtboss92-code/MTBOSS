// app/(bareilly_keywords)/industrial-construction-company-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "Industrial Construction Company in Rampur | MTBOSS",


  description:
    "Plan your industrial project in Rampur with MTBOSS: sheds, warehouses, civil work and site infrastructure. Request a free consultation today.",


  keywords:
    "industrial construction company in Rampur, industrial construction company Rampur, industrial construction Rampur, industrial contractor in Rampur, industrial builders Rampur, industrial civil contractor Rampur, industrial building construction Rampur, industrial shed construction Rampur, industrial shed contractor Rampur, warehouse construction company Rampur, godown construction Rampur, PEB construction Rampur, steel structure construction Rampur, cold storage construction Rampur, industrial infrastructure contractor Rampur, industrial flooring Rampur, industrial road construction Rampur, industrial drainage work Rampur, industrial RCC work Rampur, industrial waterproofing Rampur, industrial renovation Rampur, industrial expansion contractor Rampur, industrial project planning Rampur, industrial construction cost in Rampur, commercial and industrial construction Rampur",


  alternates: {
    canonical:
      "https://www.mtboss.in/industrial-construction-company-rampur",
  },


  openGraph: {
    title: "Industrial Construction Company in Rampur | MTBOSS",


    description:
      "Plan your industrial project in Rampur with MTBOSS: sheds, warehouses, civil work and site infrastructure. Request a free consultation today.",


    url: "https://www.mtboss.in/industrial-construction-company-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.mtboss.in/og-industrial-construction-company-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Construction Company in Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "Industrial Construction Company in Rampur | MTBOSS",


    description:
      "Plan your industrial project in Rampur with MTBOSS: sheds, warehouses, civil work and site infrastructure. Request a free consultation today.",


    images: [
      "https://www.mtboss.in/og-industrial-construction-company-rampur.jpg",
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
    url: "https://www.mtboss.in/industrial-construction-company-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-industrial-construction-company-rampur.jpg",
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
      "Industrial Construction Company",
      "Industrial Construction Rampur",
      "Industrial Contractor Rampur",
      "Industrial Builders Rampur",
      "Industrial Civil Contractor Rampur",
      "Industrial Building Construction Rampur",
      "Industrial Shed Construction Rampur",
      "Industrial Shed Contractor Rampur",
      "Warehouse Construction Company Rampur",
      "Godown Construction Rampur",
      "PEB Construction Rampur",
      "Steel Structure Construction Rampur",
      "Cold Storage Construction Rampur",
      "Industrial Infrastructure Contractor Rampur",
      "Industrial Flooring Rampur",
      "Industrial Road Construction Rampur",
      "Industrial Drainage Work Rampur",
      "Industrial RCC Work Rampur",
      "Industrial Waterproofing Rampur",
      "Industrial Renovation Rampur",
      "Industrial Expansion Contractor Rampur",
      "Industrial Project Planning Rampur",
      "Industrial Construction Cost Rampur",
      "Commercial and Industrial Construction Rampur",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industrial Construction Company in Rampur",
    description:
      "MTBOSS plans and executes industrial projects in Rampur, including industrial sheds, warehouses, godowns, PEB and steel structures, cold storage, industrial flooring, roads, drainage, RCC work, waterproofing, renovation, expansion and site infrastructure.",
    url: "https://www.mtboss.in/industrial-construction-company-rampur",
    provider: {
      "@type": "GeneralContractor",
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
      "Industrial Construction Company, Industrial Construction Rampur, Industrial Contractor Rampur, Industrial Builders Rampur, Industrial Civil Contractor Rampur, Industrial Building Construction Rampur, Industrial Shed Construction Rampur, Industrial Shed Contractor Rampur, Warehouse Construction Company Rampur, Godown Construction Rampur, PEB Construction Rampur, Steel Structure Construction Rampur, Cold Storage Construction Rampur, Industrial Infrastructure Contractor Rampur, Industrial Flooring Rampur, Industrial Road Construction Rampur, Industrial Drainage Work Rampur, Industrial RCC Work Rampur, Industrial Waterproofing Rampur, Industrial Renovation Rampur, Industrial Expansion Contractor Rampur, Industrial Project Planning Rampur, Industrial Construction Cost Rampur and Commercial and Industrial Construction Rampur",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does an industrial construction company do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It plans, designs, costs and executes industrial projects, including sheds, warehouses, civil work, flooring, drainage, RCC work, waterproofing and site infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS handle both design and execution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Design coordination, civil work, structure, electrical and plumbing coordination, finishing and site infrastructure are managed by the MTBOSS team.",
        },
      },
      {
        "@type": "Question",
        name: "Can MTBOSS build industrial sheds and warehouses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS handles industrial sheds, warehouses, godowns, PEB and steel structure projects, subject to the approved drawings and scope.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS provide itemised quotations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You receive scope, specification, rates, schedule and payment stages in writing after a site visit.",
        },
      },
      {
        "@type": "Question",
        name: "How long does an industrial project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size, scope, soil, design and approvals. MTBOSS gives a schedule with the quotation after reviewing your site.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS offer renovation and expansion services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS handles industrial renovation, repair, expansion, flooring, waterproofing and drainage work.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS serve Rampur and nearby cities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS serves Rampur, Moradabad and Bareilly and can discuss nearby locations.",
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
        name: "Industrial Construction Company in Rampur",
        item: "https://www.mtboss.in/industrial-construction-company-rampur",
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