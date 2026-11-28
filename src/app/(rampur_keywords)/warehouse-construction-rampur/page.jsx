// app/(bareilly_keywords)/warehouse-construction-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "Warehouse Construction in Rampur | PEB & RCC Godown Builder - MTBOSS",


  description:
    "MTBOSS builds warehouses and godowns in Rampur: PEB, steel and RCC structures, strong floors, dock access and drainage, ready before your storage season. Call for a free consultation.",


  keywords:
    "warehouse construction Rampur, warehouse builder Rampur, godown construction Rampur, PEB warehouse Rampur, warehouse construction cost factors Rampur, cold storage construction Rampur, warehouse contractor Rampur, storage building construction Rampur, warehouse construction company Rampur, warehouse civil contractor Rampur, warehouse shed construction Rampur, industrial warehouse Rampur, warehouse flooring Rampur, warehouse drainage Rampur, warehouse expansion Rampur, warehouse renovation Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, warehouse construction estimate Rampur",


  alternates: {
    canonical:
      "https://www.mtboss.in/warehouse-construction-rampur",
  },


  openGraph: {
    title: "Warehouse Construction in Rampur | PEB & RCC Godown Builder - MTBOSS",


    description:
      "MTBOSS builds warehouses and godowns in Rampur: PEB, steel and RCC structures, strong floors, dock access and drainage, ready before your storage season. Call for a free consultation.",


    url: "https://www.mtboss.in/warehouse-construction-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.mtboss.in/og-warehouse-construction-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Warehouse Construction in Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "Warehouse Construction in Rampur | PEB & RCC Godown Builder - MTBOSS",


    description:
      "MTBOSS builds warehouses and godowns in Rampur: PEB, steel and RCC structures, strong floors, dock access and drainage, ready before your storage season. Call for a free consultation.",


    images: [
      "https://www.mtboss.in/og-warehouse-construction-rampur.jpg",
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
    url: "https://www.mtboss.in/warehouse-construction-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-warehouse-construction-rampur.jpg",
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
      "Warehouse Construction Rampur",
      "Warehouse Builder Rampur",
      "Godown Construction Rampur",
      "PEB Warehouse Rampur",
      "Warehouse Construction Cost Factors Rampur",
      "Cold Storage Construction Rampur",
      "Warehouse Contractor Rampur",
      "Storage Building Construction Rampur",
      "Warehouse Construction Company Rampur",
      "Warehouse Civil Contractor Rampur",
      "Warehouse Shed Construction Rampur",
      "Industrial Warehouse Rampur",
      "Warehouse Flooring Rampur",
      "Warehouse Drainage Rampur",
      "Warehouse Expansion Rampur",
      "Warehouse Renovation Rampur",
      "Warehouse Construction Estimate Rampur",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Warehouse Construction in Rampur",
    description:
      "MTBOSS builds warehouses and godowns in Rampur with PEB, steel and RCC structures, strong floors, dock access, drainage, roofing, ventilation, security, cold storage civil work, renovation, expansion and storage-season-ready construction.",
    url: "https://www.mtboss.in/warehouse-construction-rampur",
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
      "Warehouse Construction Rampur, Warehouse Builder Rampur, Godown Construction Rampur, PEB Warehouse Rampur, Warehouse Construction Cost Factors Rampur, Cold Storage Construction Rampur, Warehouse Contractor Rampur, Storage Building Construction Rampur, Warehouse Construction Company Rampur, Warehouse Civil Contractor Rampur, Warehouse Shed Construction Rampur, Industrial Warehouse Rampur, Warehouse Flooring Rampur, Warehouse Drainage Rampur, Warehouse Expansion Rampur, Warehouse Renovation Rampur and Warehouse Construction Estimate Rampur",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a warehouse construction company do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A warehouse construction company builds the storage building, including site preparation, foundations, structure, roofing, floors, drainage, services coordination and finishing, and coordinates approvals support, materials and trades.",
        },
      },
      {
        "@type": "Question",
        name: "Which is better for my warehouse, PEB or RCC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PEB is faster and gives wide spans, steel truss is economical for smaller godowns and RCC suits heavy loads, multi-storey storage and cold storage. We recommend after studying your goods, plot and budget.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build a warehouse for rent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can plan unit sizes, separate entries, power, security and parking to suit tenants.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build cold storage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build the civil and building side of cold storage and coordinate with your cooling specialists. Refrigeration equipment is supplied and installed by specialist vendors.",
        },
      },
      {
        "@type": "Question",
        name: "How strong should a warehouse floor be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your stock, racking and vehicles. We design the slab thickness, reinforcement and joints to match your loads.",
        },
      },
      {
        "@type": "Question",
        name: "How do you protect stock from monsoon water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We plan a raised plinth, site levels, surface drains, gutters, sealed roofing and dock slopes, and we check them during construction.",
        },
      },
      {
        "@type": "Question",
        name: "Can I build in phases and extend later?",
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
          text: "We prepare technical drawings and help you understand the documents needed. Please confirm current requirements with the concerned authorities.",
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
        name: "Warehouse Construction in Rampur",
        item: "https://www.mtboss.in/warehouse-construction-rampur",
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