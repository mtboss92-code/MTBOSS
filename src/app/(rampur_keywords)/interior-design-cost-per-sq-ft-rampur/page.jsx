// app/(bareilly_keywords)/interior-design-cost-per-sq-ft-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/QuickServices";
import CalculatorCTA from "../../components/CalculatorCTA";
import Services from "../../components/Services";

export const metadata = {
  title:
    "Interior Design Cost Per Sq Ft Rampur | Rates – MTBOSS",
  description:
    "Know interior design cost per sq ft Rampur: rate bands, what is included, cost factors and budget tips. Get a clear, itemised quotation from MTBOSS.",
  keywords:
    "interior design cost per sq ft Rampur, interior design rates Rampur, interior cost Rampur, home interior cost Rampur, 1BHK interior cost Rampur, 2BHK interior cost Rampur, 3BHK interior cost Rampur, interior quotation Rampur, interior budget calculator Rampur, MTBOSS Rampur",
  alternates: {
    canonical:
      "https://www.mtboss.in/interior-design-cost-per-sq-ft-rampur",
  },
  openGraph: {
    title:
      "Interior Design Cost Per Sq Ft Rampur | Rates – MTBOSS",
    description:
      "Know interior design cost per sq ft Rampur: rate bands, what is included, cost factors and budget tips. Get a clear, itemised quotation from MTBOSS.",
    url:
      "https://www.mtboss.in/interior-design-cost-per-sq-ft-rampur",
    siteName: "MTBOSS Construction Private Limited",
    images: [
      {
        url:
          "https://www.mtboss.in/og-interior-design-cost-per-sq-ft-rampur.jpg",
        width: 1200,
        height: 630,
        alt:
          "Interior Design Cost Per Sq Ft in Rampur - Rates - MTBOSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design Cost Per Sq Ft Rampur | Rates – MTBOSS",
    description:
      "Know interior design cost per sq ft Rampur: rate bands, what is included, cost factors and budget tips. Get a clear, itemised quotation from MTBOSS.",
    images: [
      "https://www.mtboss.in/og-interior-design-cost-per-sq-ft-rampur.jpg",
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
      "https://www.mtboss.in/interior-design-cost-per-sq-ft-rampur",
    telephone: "+91-9458410866",
    email: "MTBOSS2016@gmail.com",
    image:
      "https://www.mtboss.in/og-interior-design-cost-per-sq-ft-rampur.jpg",
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
      "Interior Design Cost Per Sq Ft",
      "Interior Design Rates",
      "Interior Cost Estimation",
      "Home Interior Cost",
      "1BHK Interior Cost",
      "2BHK Interior Cost",
      "3BHK Interior Cost",
      "Interior Quotation",
      "Interior Budget Calculator",
      "Interior Design Services",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Design Cost Per Sq Ft in Rampur",
    description:
      "MTBOSS provides interior design cost estimation in Rampur, including per sq ft rate bands, inclusions and exclusions, cost factors, budget tips and clear itemised quotations for homes, apartments, villas, shops, offices and commercial spaces.",
    url:
      "https://www.mtboss.in/interior-design-cost-per-sq-ft-rampur",
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
      "Interior Design Cost Per Sq Ft, Interior Design Rates, Interior Cost Estimation, Home Interior Cost, 1BHK Interior Cost, 2BHK Interior Cost, 3BHK Interior Cost, Interior Quotation and Interior Budget Calculator",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "What is the interior design cost per sq ft in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Interior design cost per sq ft in Rampur depends on scope, materials and design level. MTBOSS provides an early planning range and then an itemised quotation after a site visit.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does the per sq ft rate include furniture and appliances?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. Loose furniture, appliances and decor are often separate, and MTBOSS states clearly what is included in the quotation.",
        },
      },
      {
        "@type": "Question",
        name:
          "Why do small flats sometimes cost more per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Kitchens, bathrooms and storage take a larger share of a small area, so the rate per sq ft can be higher.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can I reduce interior cost without losing quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Prioritise kitchen, wardrobes, wiring and waterproofing, keep ceiling designs simple and furnish in phases.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS provide an itemised interior quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS provides room-wise costs with specifications, brands and schedule in writing.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS charge for design and 3D visuals?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Scope and any charges are explained upfront with the quotation.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can MTBOSS review another contractor's quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS can check scope, specifications and price, and explain the differences in plain language.",
        },
      },
      {
        "@type": "Question",
        name:
          "Should I keep a reserve in my interior budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. A reserve of 8 to 10% helps with hidden repairs and design changes.",
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
        name: "Interior Design Cost Per Sq Ft in Rampur",
        item:
          "https://www.mtboss.in/interior-design-cost-per-sq-ft-rampur",
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