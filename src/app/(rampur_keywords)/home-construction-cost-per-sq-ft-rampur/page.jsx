// app/(bareilly_keywords)/house-construction-cost-per-sq-ft-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "House Construction Cost Per Sq Ft Rampur | MTBOSS",


  description:
    "Find home construction cost per sq ft Rampur with sample budgets, rate bands and hidden-cost checklist. Get an itemised estimate from MTBOSS in a few simple steps.",


  keywords:
    "house construction cost per sq ft Rampur, home construction cost per sq ft Rampur, construction cost Rampur, house construction cost Rampur, home construction budget Rampur, house construction rate Rampur, construction cost per square foot Rampur, grey structure cost Rampur, complete home construction cost Rampur, premium home construction cost Rampur, house construction estimate Rampur, construction quotation Rampur, civil contractor Rampur, home builder Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, construction budget calculator, construction services quote Rampur",


  alternates: {
    canonical:
      "https://www.mtboss.in/house-construction-cost-per-sq-ft-rampur",
  },


  openGraph: {
    title: "House Construction Cost Per Sq Ft Rampur | MTBOSS",


    description:
      "Find home construction cost per sq ft Rampur with sample budgets, rate bands and hidden-cost checklist. Get an itemised estimate from MTBOSS in a few simple steps.",


    url: "https://www.mtboss.in/house-construction-cost-per-sq-ft-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.mtboss.in/og-house-construction-cost-per-sq-ft-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "House Construction Cost Per Sq Ft Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "House Construction Cost Per Sq Ft Rampur | MTBOSS",


    description:
      "Find home construction cost per sq ft Rampur with sample budgets, rate bands and hidden-cost checklist. Get an itemised estimate from MTBOSS in a few simple steps.",


    images: [
      "https://www.mtboss.in/og-house-construction-cost-per-sq-ft-rampur.jpg",
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
    url: "https://www.mtboss.in/house-construction-cost-per-sq-ft-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-house-construction-cost-per-sq-ft-rampur.jpg",
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
      "House Construction Cost Per Sq Ft",
      "Home Construction Cost Per Sq Ft",
      "Construction Cost Rampur",
      "House Construction Cost Rampur",
      "Home Construction Budget Rampur",
      "House Construction Rate Rampur",
      "Construction Cost Per Square Foot Rampur",
      "Grey Structure Cost Rampur",
      "Complete Home Construction Cost Rampur",
      "Premium Home Construction Cost Rampur",
      "House Construction Estimate Rampur",
      "Construction Quotation Rampur",
      "Civil Contractor Rampur",
      "Home Builder Rampur",
      "Construction Services Quote Rampur",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "House Construction Cost Per Sq Ft in Rampur",
    description:
      "MTBOSS explains house construction cost per square foot in Rampur and provides itemised estimates for grey structure, complete homes, premium homes, renovations, and turnkey construction projects. Services include design, structure, civil work, waterproofing, electrical and plumbing coordination, finishing, and interiors.",
    url: "https://www.mtboss.in/house-construction-cost-per-sq-ft-rampur",
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
      "House Construction Cost Per Sq Ft, Home Construction Cost Per Sq Ft, Construction Cost Rampur, House Construction Cost Rampur, Home Construction Budget Rampur, House Construction Rate Rampur, Construction Cost Per Square Foot Rampur, Grey Structure Cost Rampur, Complete Home Construction Cost Rampur, Premium Home Construction Cost Rampur, House Construction Estimate Rampur, Construction Quotation Rampur, Civil Contractor Rampur, Home Builder Rampur and Construction Services Quote Rampur",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the home construction cost per sq ft in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on scope, specification, and market prices. MTBOSS provides an early planning range and an itemised estimate after a site visit.",
        },
      },
      {
        "@type": "Question",
        name: "Is the rate on carpet area or built-up area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Construction cost is usually calculated on built-up area, which includes walls, staircase, and balconies on all floors.",
        },
      },
      {
        "@type": "Question",
        name: "Does the rate include kitchen, wardrobes, and furniture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. These are often separate, and MTBOSS states clearly what is included in your quotation.",
        },
      },
      {
        "@type": "Question",
        name: "Does the cost include land and approvals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Land, approvals, and development charges are usually separate and vary by authority.",
        },
      },
      {
        "@type": "Question",
        name: "Can I build in phases to control cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS can plan the structure for future floors and phase finishing and interiors.",
        },
      },
      {
        "@type": "Question",
        name: "Will the price change during construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Material prices can change over time. MTBOSS writes specification, validity, and change procedure into the agreement.",
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
        name: "Does MTBOSS provide 3D designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can review visuals before work begins.",
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
        name: "House Construction Cost Per Sq Ft Rampur",
        item: "https://www.mtboss.in/house-construction-cost-per-sq-ft-rampur",
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