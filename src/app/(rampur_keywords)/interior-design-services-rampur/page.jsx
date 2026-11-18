// app/(bareilly_keywords)/interior-design-services-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/QuickServices";
import CalculatorCTA from "../../components/CalculatorCTA";
import Services from "../../components/Services";

export const metadata = {
  title:
    "Interior Design Services Rampur | Home & Commercial – MTBOSS",
  description:
    "MTBOSS offers complete interior design services Rampur: homes, flats, villas, kitchens, ceilings, bathrooms and commercial spaces, with clear pricing and on-time delivery.",
  keywords:
    "interior design services Rampur, interior designer Rampur, home interior design Rampur, flat interior design Rampur, villa interior design Rampur, modular kitchen Rampur, false ceiling Rampur, bathroom renovation Rampur, commercial interior design Rampur, office interior design Rampur, MTBOSS Rampur",
  alternates: {
    canonical:
      "https://www.mtboss.in/interior-design-services-rampur",
  },
  openGraph: {
    title:
      "Interior Design Services Rampur | Home & Commercial – MTBOSS",
    description:
      "MTBOSS offers complete interior design services Rampur: homes, flats, villas, kitchens, ceilings, bathrooms and commercial spaces, with clear pricing and on-time delivery.",
    url:
      "https://www.mtboss.in/interior-design-services-rampur",
    siteName: "MTBOSS Construction Private Limited",
    images: [
      {
        url:
          "https://www.mtboss.in/og-interior-design-services-rampur.jpg",
        width: 1200,
        height: 630,
        alt:
          "Interior Design Services in Rampur - Home and Commercial - MTBOSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design Services Rampur | Home & Commercial – MTBOSS",
    description:
      "MTBOSS offers complete interior design services Rampur: homes, flats, villas, kitchens, ceilings, bathrooms and commercial spaces, with clear pricing and on-time delivery.",
    images: [
      "https://www.mtboss.in/og-interior-design-services-rampur.jpg",
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
      "https://www.mtboss.in/interior-design-services-rampur",
    telephone: "+91-9458410866",
    email: "MTBOSS2016@gmail.com",
    image:
      "https://www.mtboss.in/og-interior-design-services-rampur.jpg",
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
      "Interior Design Services",
      "Home Interior Design",
      "Flat Interior Design",
      "Villa Interior Design",
      "Modular Kitchen",
      "False Ceiling",
      "Bathroom Renovation",
      "Commercial Interior Design",
      "Office Interior Design",
      "Interior Renovation",
      "Interior Design Services Quote",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Design Services in Rampur",
    description:
      "MTBOSS provides complete interior design services in Rampur for homes, flats, villas, kitchens, ceilings, bathrooms and commercial spaces, including design, execution, renovation, clear pricing and on-time delivery.",
    url:
      "https://www.mtboss.in/interior-design-services-rampur",
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
      "Interior Design Services, Home Interior Design, Flat Interior Design, Villa Interior Design, Modular Kitchen, False Ceiling, Bathroom Renovation, Commercial Interior Design, Office Interior Design and Interior Renovation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "What interior design services does MTBOSS offer in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "MTBOSS offers interior design services for homes, flats, villas, modular kitchens, false ceilings, bathrooms, commercial spaces, renovation and quotation review.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS handle both interior design and execution?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS manages design, civil work, carpentry, ceilings, painting and finishing under one team.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can MTBOSS design a single room or provide one service?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS can take up a single service, such as a modular kitchen or false ceiling, or handle the complete project.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS design commercial spaces in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS designs shops, offices, clinics, salons, gyms, restaurants and hotels.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS provide 3D interior designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Clients can review 3D visuals before work begins.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS provide clear pricing and on-time delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "MTBOSS provides clear pricing and prepares a schedule for the project. Final timelines and costs depend on the scope, materials and site conditions.",
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
        name: "Interior Design Services in Rampur",
        item:
          "https://www.mtboss.in/interior-design-services-rampur",
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