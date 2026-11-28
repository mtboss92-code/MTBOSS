// app/(bareilly_keywords)/petrol-pump-construction-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "Petrol Pump Construction Rampur | Civil Work - MTBOSS",


  description:
    "MTBOSS handles petrol pump construction Rampur: forecourt, canopy base, tank pits, drainage, office and civil work built to your approved drawings. Get an estimate.",


  keywords:
    "petrol pump construction Rampur, petrol pump contractor Rampur, fuel station construction Rampur, petrol pump civil work Rampur, petrol pump forecourt construction Rampur, petrol pump canopy foundation Rampur, petrol pump tank pit construction Rampur, petrol pump drainage Rampur, petrol pump office construction Rampur, fuel retail outlet construction Rampur, petrol pump renovation Rampur, petrol pump expansion Rampur, petrol pump civil contractor Rampur, commercial construction Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, petrol pump construction estimate Rampur",


  alternates: {
    canonical:
      "https://www.mtboss.in/petrol-pump-construction-rampur",
  },


  openGraph: {
    title: "Petrol Pump Construction Rampur | Civil Work - MTBOSS",


    description:
      "MTBOSS handles petrol pump construction Rampur: forecourt, canopy base, tank pits, drainage, office and civil work built to your approved drawings. Get an estimate.",


    url: "https://www.mtboss.in/petrol-pump-construction-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.mtboss.in/og-petrol-pump-construction-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Petrol Pump Construction Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "Petrol Pump Construction Rampur | Civil Work - MTBOSS",


    description:
      "MTBOSS handles petrol pump construction Rampur: forecourt, canopy base, tank pits, drainage, office and civil work built to your approved drawings. Get an estimate.",


    images: [
      "https://www.mtboss.in/og-petrol-pump-construction-rampur.jpg",
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
    url: "https://www.mtboss.in/petrol-pump-construction-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-petrol-pump-construction-rampur.jpg",
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
      "Petrol Pump Construction",
      "Fuel Station Construction",
      "Petrol Pump Civil Work",
      "Petrol Pump Forecourt Construction",
      "Petrol Pump Canopy Foundation",
      "Petrol Pump Tank Pit Construction",
      "Petrol Pump Drainage",
      "Petrol Pump Office Construction",
      "Fuel Retail Outlet Construction",
      "Petrol Pump Renovation",
      "Petrol Pump Expansion",
      "Petrol Pump Civil Contractor",
      "Commercial Construction",
      "Petrol Pump Construction Estimate",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Petrol Pump Construction in Rampur",
    description:
      "MTBOSS handles petrol pump construction in Rampur: forecourt, canopy base, tank pits, drainage, office and civil work built to your approved drawings. Services include site preparation, dispenser islands, driveways, sales room and office construction, toilets, water supply, drainage, interceptors, boundary walls, signage bases, renovation, repair, and expansion civil work.",
    url: "https://www.mtboss.in/petrol-pump-construction-rampur",
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
      "Petrol Pump Construction, Fuel Station Construction, Petrol Pump Civil Work, Petrol Pump Forecourt Construction, Petrol Pump Canopy Foundation, Petrol Pump Tank Pit Construction, Petrol Pump Drainage, Petrol Pump Office Construction, Fuel Retail Outlet Construction, Petrol Pump Renovation, Petrol Pump Expansion, Petrol Pump Civil Contractor, Commercial Construction and Petrol Pump Construction Estimate",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build petrol pumps in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We plan and execute civil and structural work for fuel retail outlets, including forecourt, canopy bases, tank pits, buildings and drainage, as per your approved drawings.",
        },
      },
      {
        "@type": "Question",
        name: "Do you supply tanks and dispensers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "These are usually supplied and installed by oil company approved vendors. We coordinate the civil work around them.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work from my oil company's drawings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We study the approved layout and build the civil work accordingly.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with approvals and licences?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Approval requirements vary by company and location, so you should confirm them with your oil company and the concerned authorities. We prepare accurate civil work and documentation to support the process.",
        },
      },
      {
        "@type": "Question",
        name: "Can you renovate or expand an existing petrol pump?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We handle forecourt repair, canopy base work, building upgrades and expansion civil work.",
        },
      },
      {
        "@type": "Question",
        name: "How is the cost calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on site size, scope, soil and specification. We prepare an itemised estimate from your drawings after a site visit.",
        },
      },
      {
        "@type": "Question",
        name: "How are payments structured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payments are linked to completed and inspected work stages and written into your agreement.",
        },
      },
      {
        "@type": "Question",
        name: "How long does petrol pump construction take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size and scope. We give a schedule with the estimate after reviewing your site and drawings.",
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
        name: "Petrol Pump Construction Rampur",
        item: "https://www.mtboss.in/petrol-pump-construction-rampur",
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