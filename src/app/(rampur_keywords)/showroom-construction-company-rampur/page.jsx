// app/(bareilly_keywords)/showroom-construction-company-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "Showroom Construction Company Rampur | Design & Build - MTBOSS",


  description:
    "MTBOSS is a showroom construction company Rampur. Glass facade, column-free floors, lighting, interiors and handover for showrooms, with clear scope and schedule.",


  keywords:
    "showroom construction company Rampur, showroom construction Rampur, showroom interior and construction Rampur, showroom design and build Rampur, car showroom construction Rampur, furniture showroom construction Rampur, showroom contractor Rampur, commercial building contractor Rampur, shop and showroom construction Rampur, showroom facade Rampur, glass front showroom Rampur, column-free showroom Rampur, display lighting Rampur, franchise showroom Rampur, shopfront design Rampur, showroom fit-out Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, showroom construction estimate Rampur",


  alternates: {
    canonical:
      "https://www.mtboss.in/showroom-construction-company-rampur",
  },


  openGraph: {
    title: "Showroom Construction Company Rampur | Design & Build - MTBOSS",


    description:
      "MTBOSS is a showroom construction company Rampur. Glass facade, column-free floors, lighting, interiors and handover for showrooms, with clear scope and schedule.",


    url: "https://www.mtboss.in/showroom-construction-company-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.mtboss.in/og-showroom-construction-company-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Showroom Construction Company Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "Showroom Construction Company Rampur | Design & Build - MTBOSS",


    description:
      "MTBOSS is a showroom construction company Rampur. Glass facade, column-free floors, lighting, interiors and handover for showrooms, with clear scope and schedule.",


    images: [
      "https://www.mtboss.in/og-showroom-construction-company-rampur.jpg",
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
    url: "https://www.mtboss.in/showroom-construction-company-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-showroom-construction-company-rampur.jpg",
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
      "Showroom Construction Company Rampur",
      "Showroom Construction Rampur",
      "Showroom Interior and Construction Rampur",
      "Showroom Design and Build Rampur",
      "Car Showroom Construction Rampur",
      "Furniture Showroom Construction Rampur",
      "Showroom Contractor Rampur",
      "Commercial Building Contractor Rampur",
      "Shop and Showroom Construction Rampur",
      "Showroom Facade Rampur",
      "Glass Front Showroom Rampur",
      "Column-Free Showroom Rampur",
      "Display Lighting Rampur",
      "Franchise Showroom Rampur",
      "Shopfront Design Rampur",
      "Showroom Fit-Out Rampur",
      "Showroom Construction Estimate Rampur",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Showroom Construction Company in Rampur",
    description:
      "MTBOSS is a showroom construction company serving Rampur. We build showrooms with glass facade, column-free floors, lighting, interiors, display fit-out, electrical and plumbing coordination, and handover, with clear scope and schedule.",
    url: "https://www.mtboss.in/showroom-construction-company-rampur",
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
      "Showroom Construction Company Rampur, Showroom Construction Rampur, Showroom Interior and Construction Rampur, Showroom Design and Build Rampur, Car Showroom Construction Rampur, Furniture Showroom Construction Rampur, Showroom Contractor Rampur, Commercial Building Contractor Rampur, Shop and Showroom Construction Rampur, Showroom Facade Rampur, Glass Front Showroom Rampur, Column-Free Showroom Rampur, Display Lighting Rampur, Franchise Showroom Rampur, Shopfront Design Rampur, Showroom Fit-Out Rampur and Showroom Construction Estimate Rampur",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you build showrooms in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan and build showrooms, shops and commercial buildings, with design, structure, facade, interiors and finishing under one team.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle the facade and glass front?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan and build glass fronts, cladding, entrances and signage bases as part of the showroom.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build a column-free showroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We design wide-span layouts to give you open display space, with structure sized for the span and loads.",
        },
      },
      {
        "@type": "Question",
        name: "Can you follow my brand or franchise guidelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We study the guidelines and build to the approved drawings, coordinating with brand vendors where needed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle interiors and lighting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Ceilings, lighting, flooring, counters and display units are planned and built together with the structure.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with approvals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Approval requirements vary by size, location and use, so you should confirm them with the concerned authorities. We prepare drawings and guide you on documents.",
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
        name: "How long does showroom construction take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size and scope. We give a schedule with the estimate after reviewing your site and opening date.",
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
        name: "Showroom Construction Company Rampur",
        item: "https://www.mtboss.in/showroom-construction-company-rampur",
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