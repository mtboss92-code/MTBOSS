// app/(bareilly_keywords)/office-building-construction-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "Office Building Construction Rampur | Design & Build - MTBOSS",


  description:
    "MTBOSS builds office buildings Rampur: efficient floor plans, lifts, power backup, air conditioning and finishing for owners and tenants. Get an itemised estimate.",


  keywords:
    "office building construction Rampur, office construction company Rampur, commercial office building contractor Rampur, office complex construction Rampur, office design and build Rampur, shell and core office construction Rampur, office building construction cost Rampur, corporate office construction Rampur, commercial building contractor Rampur, floor plate efficiency Rampur, tenant-ready office Rampur, lift and staircase core Rampur, office fit-out Rampur, rental office building Rampur, business centre Rampur, co-working space Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, office building construction estimate Rampur",


  alternates: {
    canonical:
      "https://www.mtboss.in/office-building-construction-rampur",
  },


  openGraph: {
    title: "Office Building Construction Rampur | Design & Build - MTBOSS",


    description:
      "MTBOSS builds office buildings Rampur: efficient floor plans, lifts, power backup, air conditioning and finishing for owners and tenants. Get an itemised estimate.",


    url: "https://www.mtboss.in/office-building-construction-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.mtboss.in/og-office-building-construction-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Office Building Construction Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "Office Building Construction Rampur | Design & Build - MTBOSS",


    description:
      "MTBOSS builds office buildings Rampur: efficient floor plans, lifts, power backup, air conditioning and finishing for owners and tenants. Get an itemised estimate.",


    images: [
      "https://www.mtboss.in/og-office-building-construction-rampur.jpg",
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
    url: "https://www.mtboss.in/office-building-construction-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-office-building-construction-rampur.jpg",
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
      "Office Building Construction Rampur",
      "Office Construction Company Rampur",
      "Commercial Office Building Contractor Rampur",
      "Office Complex Construction Rampur",
      "Office Design and Build Rampur",
      "Shell and Core Office Construction Rampur",
      "Office Building Construction Cost Rampur",
      "Corporate Office Construction Rampur",
      "Commercial Building Contractor Rampur",
      "Floor Plate Efficiency Rampur",
      "Tenant-Ready Office Rampur",
      "Lift and Staircase Core Rampur",
      "Office Fit-Out Rampur",
      "Rental Office Building Rampur",
      "Business Centre Rampur",
      "Co-Working Space Rampur",
      "Office Building Construction Estimate Rampur",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Office Building Construction in Rampur",
    description:
      "MTBOSS builds office buildings in Rampur with efficient floor plans, lifts, power backup, air conditioning, facade, interiors and finishing for owners and tenants. Services include shell-and-core construction, office fit-out, rental office buildings, business centres, co-working spaces and corporate offices.",
    url: "https://www.mtboss.in/office-building-construction-rampur",
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
      "Office Building Construction Rampur, Office Construction Company Rampur, Commercial Office Building Contractor Rampur, Office Complex Construction Rampur, Office Design and Build Rampur, Shell and Core Office Construction Rampur, Office Building Construction Cost Rampur, Corporate Office Construction Rampur, Commercial Building Contractor Rampur, Floor Plate Efficiency Rampur, Tenant-Ready Office Rampur, Lift and Staircase Core Rampur, Office Fit-Out Rampur, Rental Office Building Rampur, Business Centre Rampur, Co-Working Space Rampur and Office Building Construction Estimate Rampur",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build office buildings in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan and build office buildings and other commercial properties, with design, structure, facade, services coordination, interiors and finishing under one team.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build shell-and-core offices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can deliver the structure, facade, services and common areas, and tenants can complete their own interiors. We also deliver fully fitted offices.",
        },
      },
      {
        "@type": "Question",
        name: "Can you plan the floors for rent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We design efficient floor plates that can be divided for several tenants, with separate entrances and utilities where needed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle lifts and air conditioning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build the civil work for lift shafts and plan air conditioning and electrical provisions. Lift and air conditioning equipment are usually supplied by specialist vendors, and we coordinate them with the building.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with approvals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Approval requirements vary by size, height, location and use, so you should confirm them with the concerned authorities. We prepare drawings and guide you on documents.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build in phases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can plan the full building and construct or fit out in stages to match your budget and leasing plan.",
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
        name: "How long does office building construction take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size, floors and scope. We give a schedule with the estimate after reviewing your plot and target date.",
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
        name: "Office Building Construction Rampur",
        item: "https://www.mtboss.in/office-building-construction-rampur",
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