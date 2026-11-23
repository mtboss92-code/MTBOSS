// app/(bareilly_keywords)/home-construction-contractor-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "Home Construction Contractor Rampur | Trusted - MTBOSS",


  description:
    "Looking for a home construction contractor Rampur? MTBOSS offers clear agreements, stage-wise payments, supervised construction and on-time delivery. Get a quote.",


  keywords:
    "home construction contractor Rampur, house construction contractor Rampur, residential construction contractor Rampur, home builder Rampur, house builder Rampur, construction company Rampur, building contractor Rampur, civil contractor Rampur, home renovation contractor Rampur, house renovation contractor Rampur, turnkey home construction Rampur, new home construction Rampur, home construction company Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, construction quote Rampur",


  alternates: {
    canonical:
      "https://www.mtboss.in/home-construction-contractor-rampur",
  },


  openGraph: {
    title: "Home Construction Contractor Rampur | Trusted - MTBOSS",


    description:
      "Looking for a home construction contractor Rampur? MTBOSS offers clear agreements, stage-wise payments, supervised construction and on-time delivery. Get a quote.",


    url: "https://www.mtboss.in/home-construction-contractor-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.mtboss.in/og-home-construction-contractor-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Home Construction Contractor Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "Home Construction Contractor Rampur | Trusted - MTBOSS",


    description:
      "Looking for a home construction contractor Rampur? MTBOSS offers clear agreements, stage-wise payments, supervised construction and on-time delivery. Get a quote.",


    images: [
      "https://www.mtboss.in/og-home-construction-contractor-rampur.jpg",
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
    url: "https://www.mtboss.in/home-construction-contractor-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-home-construction-contractor-rampur.jpg",
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
      "Home Construction Contractor",
      "House Construction Contractor",
      "Residential Construction Contractor",
      "Home Builder",
      "House Builder",
      "Construction Company",
      "Building Contractor",
      "Civil Contractor",
      "Home Renovation Contractor",
      "House Renovation Contractor",
      "Turnkey Home Construction",
      "New Home Construction",
      "Home Construction Company",
      "Construction Quote",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Construction Contractor in Rampur",
    description:
      "MTBOSS provides home construction and renovation services in Rampur, including new home construction, house renovation, civil work, structural work, waterproofing, plumbing, electrical work, painting, flooring, tiling, carpentry, and complete project supervision.",
    url: "https://www.mtboss.in/home-construction-contractor-rampur",
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
      "Home Construction Contractor, House Construction Contractor, Residential Construction Contractor, Home Builder, House Builder, Construction Company, Building Contractor, Civil Contractor, Home Renovation Contractor, House Renovation Contractor, Turnkey Home Construction, New Home Construction, Home Construction Company and Construction Quote",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a home construction contractor do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A home construction contractor plans, coordinates, and executes construction work, including civil work, structure, plumbing, electrical work, finishes, supervision, and handover.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS handle both construction and renovation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS handles new home construction, renovation, remodelling, repair, waterproofing, flooring, painting, and finishing work.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS provide clear agreements and stage-wise payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS provides clear agreements, itemised estimates, and stage-wise payments linked to completed work.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS provide supervised construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS coordinates and supervises construction work, with regular updates during the project.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a home construction project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the size, scope, and complexity of the project. MTBOSS gives a schedule with the quotation after reviewing your site.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS serve Rampur and nearby cities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MTBOSS serves Rampur, Moradabad, and Bareilly and can discuss nearby locations.",
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
        name: "Home Construction Contractor Rampur",
        item: "https://www.mtboss.in/home-construction-contractor-rampur",
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