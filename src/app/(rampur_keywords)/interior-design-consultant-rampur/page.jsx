// app/(bareilly_keywords)/interior-design-consultant-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/QuickServices";
import CalculatorCTA from "../../components/CalculatorCTA";
import Services from "../../components/Services";

export const metadata = {
  title:
    "Interior Design Consultant Rampur | Expert Advice – MTBOSS",
  description:
    "MTBOSS is an interior design consultant Rampur: site review, layout advice, budget planning, material selection and project supervision for homes and businesses.",
  keywords:
    "interior design consultant Rampur, interior consultant Rampur, interior design advice Rampur, home interior consultation Rampur, commercial interior consultation Rampur, interior layout advice Rampur, interior budget planning Rampur, material selection Rampur, interior project supervision Rampur, MTBOSS Rampur",
  alternates: {
    canonical:
      "https://www.mtboss.in/interior-design-consultant-rampur",
  },
  openGraph: {
    title:
      "Interior Design Consultant Rampur | Expert Advice – MTBOSS",
    description:
      "MTBOSS is an interior design consultant Rampur: site review, layout advice, budget planning, material selection and project supervision for homes and businesses.",
    url:
      "https://www.mtboss.in/interior-design-consultant-rampur",
    siteName: "MTBOSS Construction Private Limited",
    images: [
      {
        url:
          "https://www.mtboss.in/og-interior-design-consultant-rampur.jpg",
        width: 1200,
        height: 630,
        alt:
          "Interior Design Consultant in Rampur - Expert Advice - MTBOSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design Consultant Rampur | Expert Advice – MTBOSS",
    description:
      "MTBOSS is an interior design consultant Rampur: site review, layout advice, budget planning, material selection and project supervision for homes and businesses.",
    images: [
      "https://www.mtboss.in/og-interior-design-consultant-rampur.jpg",
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
    url:
      "https://www.mtboss.in/interior-design-consultant-rampur",
    telephone: "+91-9458410866",
    email: "MTBOSS2016@gmail.com",
    image:
      "https://www.mtboss.in/og-interior-design-consultant-rampur.jpg",
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
        name: "Bareilly",
      },
      {
        "@type": "City",
        name: "Moradabad",
      },
      {
        "@type": "State",
        name: "Uttar Pradesh",
      },
    ],
    serviceType: [
      "Interior Design Consultant",
      "Interior Design Consultation",
      "Home Interior Consultation",
      "Commercial Interior Consultation",
      "Interior Layout Advice",
      "Interior Budget Planning",
      "Material Selection",
      "Interior Project Supervision",
      "Interior Design Services",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Design Consultant in Rampur",
    description:
      "MTBOSS provides interior design consultation in Rampur, including site review, layout advice, budget planning, material selection, lighting and electrical planning, quotation review, project supervision and quality inspection for homes and businesses.",
    url:
      "https://www.mtboss.in/interior-design-consultant-rampur",
    provider: {
      "@type": "InteriorDesignService",
      name: "MTBOSS Construction Private Limited",
      telephone: "+91-9458410866",
      email: "MTBOSS2016@gmail.com",
      url: "https://www.mtboss.in",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rampur",
      },
      {
        "@type": "City",
        name: "Bareilly",
      },
      {
        "@type": "City",
        name: "Moradabad",
      },
    ],
    serviceType:
      "Interior Design Consultant, Interior Design Consultation, Home Interior Consultation, Commercial Interior Consultation, Interior Layout Advice, Interior Budget Planning, Material Selection and Interior Project Supervision",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "What interior design consultation services does MTBOSS offer in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "MTBOSS offers interior design consultation for site review, layout advice, budget planning, material selection, lighting and electrical planning, quotation review, project supervision and quality inspection.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can MTBOSS provide interior design consultation without full execution?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS can provide consultation and guidance only, and clients can decide later whether to continue with complete design and execution.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can MTBOSS review existing interior drawings or quotations?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS can review drawings, quotations, specifications, schedules and payment terms to identify scope, quality and risk points.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS help with interior budget planning in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS helps with budget planning, scope definition, cost breakdown, priority setting, phasing and contingency planning.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can MTBOSS supervise interior work done by another contractor?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS can inspect key stages and report defects, subject to the agreed scope and project requirements.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS consult for homes, shops, offices and clinics?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS provides interior consultation for homes, flats, villas, shops, showrooms, offices, clinics and other commercial spaces.",
        },
      },
      {
        "@type": "Question",
        name:
          "Where is the MTBOSS office located?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The office is located at Harthala, Kanth Road, Behind KR Collection, near Domino's, Moradabad, Uttar Pradesh.",
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
        name: "Interior Design Consultant in Rampur",
        item:
          "https://www.mtboss.in/interior-design-consultant-rampur",
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