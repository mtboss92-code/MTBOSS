// app/(bareilly_keywords)/interior-designer-contact-number-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title:
    "Interior Designer Contact Number Rampur | Call MTBOSS",
  description:
    "Contact MTBOSS interior designers Rampur. Call or WhatsApp +91 94584 10866 to book a site visit, get design advice and an itemised quotation for your project.",
  keywords:
    "interior designer contact number Rampur, interior designer phone number Rampur, interior designer WhatsApp number Rampur, interior designer near me Rampur, interior design consultation Rampur, interior designer site visit Rampur, interior quotation Rampur, MTBOSS Rampur contact",
  alternates: {
    canonical:
      "https://www.mtboss.in/interior-designer-contact-number-rampur",
  },
  openGraph: {
    title:
      "Interior Designer Contact Number Rampur | Call MTBOSS",
    description:
      "Contact MTBOSS interior designers Rampur. Call or WhatsApp +91 94584 10866 to book a site visit, get design advice and an itemised quotation for your project.",
    url:
      "https://www.mtboss.in/interior-designer-contact-number-rampur",
    siteName: "MTBOSS Construction Private Limited",
    images: [
      {
        url:
          "https://www.mtboss.in/og-interior-designer-contact-number-rampur.jpg",
        width: 1200,
        height: 630,
        alt:
          "Interior Designer Contact Number in Rampur - Call MTBOSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designer Contact Number Rampur | Call MTBOSS",
    description:
      "Contact MTBOSS interior designers Rampur. Call or WhatsApp +91 94584 10866 to book a site visit, get design advice and an itemised quotation for your project.",
    images: [
      "https://www.mtboss.in/og-interior-designer-contact-number-rampur.jpg",
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
      "https://www.mtboss.in/interior-designer-contact-number-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-interior-designer-contact-number-rampur.jpg",
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
      "Interior Designer Contact Number",
      "Interior Design Consultation",
      "Interior Designer Site Visit",
      "Interior Design Advice",
      "Interior Quotation",
      "Home Interior Design",
      "Commercial Interior Design",
      "Interior Design Services",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Designer Contact Number in Rampur",
    description:
      "Contact MTBOSS interior designers in Rampur. Call or WhatsApp +91 94584 10866 to book a site visit, get design advice and an itemised quotation for homes, flats, apartments, villas, shops, offices and other projects.",
    url:
      "https://www.mtboss.in/interior-designer-contact-number-rampur",
    provider: {
      "@type": "InteriorDesignService",
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
        name: "Bareilly",
      },
      {
        "@type": "City",
        name: "Moradabad",
      },
    ],
    serviceType:
      "Interior Designer Contact Number, Interior Design Consultation, Interior Designer Site Visit, Interior Design Advice, Interior Quotation, Home Interior Design and Commercial Interior Design",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "What is the contact number of MTBOSS interior designers in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can call or WhatsApp MTBOSS at +91 94584 10866, or email inquiry@mtboss.in.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can I book a site visit with MTBOSS in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS arranges site visits in Rampur and nearby cities after discussing your requirements.",
        },
      },
      {
        "@type": "Question",
        name:
          "Can I send photos and plans on WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Photos, floor plans, videos and reference pictures help MTBOSS understand your project before the site visit.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS provide an itemised interior quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. After the site visit and requirement study, MTBOSS prepares an itemised quotation with specifications and a schedule.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS provide design advice before work begins?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. MTBOSS provides design advice on layout, materials, lighting, budget and project scope.",
        },
      },
      {
        "@type": "Question",
        name:
          "Does MTBOSS handle both design and construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Design, civil work, carpentry, ceilings, painting and finishing are managed by one team.",
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
        name: "Interior Designer Contact Number in Rampur",
        item:
          "https://www.mtboss.in/interior-designer-contact-number-rampur",
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