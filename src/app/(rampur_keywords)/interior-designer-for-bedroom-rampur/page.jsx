// app/(bareilly_keywords)/bedroom-interior-designer-rampur/page.jsx


import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";


export const metadata = {
  title: "Bedroom Interior Designer Rampur | Master & Kids Room - MTBOSS",


  description:
    "MTBOSS designs bedroom interiors Rampur: bed and headboard walls, wardrobes, lighting, ceilings and storage for master, kids and guest bedrooms, with 3D design and clear pricing.",


  keywords:
    "bedroom interior designer Rampur, bedroom interior design Rampur, master bedroom interior Rampur, kids bedroom interior Rampur, guest bedroom interior Rampur, bedroom wardrobe design Rampur, bedroom false ceiling Rampur, bedroom lighting design Rampur, bedroom storage design Rampur, 3D bedroom design Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS budget calculator, bedroom interior services quote Rampur",


  alternates: {
    canonical:
      "https://www.MTBOSS.in/bedroom-interior-designer-rampur",
  },


  openGraph: {
    title: "Bedroom Interior Designer Rampur | Master & Kids Room - MTBOSS",


    description:
      "MTBOSS designs bedroom interiors Rampur: bed and headboard walls, wardrobes, lighting, ceilings and storage for master, kids and guest bedrooms, with 3D design and clear pricing.",


    url: "https://www.MTBOSS.in/bedroom-interior-designer-rampur",


    siteName: "MTBOSS Construction Private Limited",


    images: [
      {
        url: "https://www.MTBOSS.in/og-bedroom-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Bedroom Interior Designer in Rampur - MTBOSS",
      },
    ],


    locale: "en_IN",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",


    title: "Bedroom Interior Designer Rampur | Master & Kids Room - MTBOSS",


    description:
      "MTBOSS designs bedroom interiors Rampur: bed and headboard walls, wardrobes, lighting, ceilings and storage for master, kids and guest bedrooms, with 3D design and clear pricing.",


    images: [
      "https://www.MTBOSS.in/og-bedroom-interior-designer-rampur.jpg",
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
    url: "https://www.MTBOSS.in/bedroom-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "MTBOSS2016@gmail.com",
    image:
      "https://www.MTBOSS.in/og-bedroom-interior-designer-rampur.jpg",
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
        "@type": "State",
        name: "Uttar Pradesh",
      },
    ],
    serviceType: [
      "Bedroom Interior Designer",
      "Bedroom Interior Design",
      "Master Bedroom Interior",
      "Kids Bedroom Interior",
      "Guest Bedroom Interior",
      "Bedroom Wardrobe Design",
      "Bedroom False Ceiling",
      "Bedroom Lighting Design",
      "Bedroom Storage Design",
      "3D Bedroom Design",
      "Bedroom Interior Services Quote",
    ],
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bedroom Interior Designer in Rampur",
    description:
      "MTBOSS provides bedroom interior design services in Rampur for master bedrooms, kids bedrooms and guest bedrooms. Services include bed and headboard wall design, wardrobes and storage, false ceilings, lighting, wall panels, wallpaper, flooring, colour planning, furniture layout, 3D design and complete bedroom execution.",
    url: "https://www.MTBOSS.in/bedroom-interior-designer-rampur",
    provider: {
      "@type": "InteriorDesignService",
      name: "MTBOSS Construction Private Limited",
      telephone: "+91-9458410866",
      email: "MTBOSS2016@gmail.com",
      url: "https://www.MTBOSS.in",
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
    ],
    serviceType:
      "Bedroom Interior Designer, Bedroom Interior Design, Master Bedroom Interior, Kids Bedroom Interior, Guest Bedroom Interior, Bedroom Wardrobe Design, Bedroom False Ceiling, Bedroom Lighting Design, Bedroom Storage Design, 3D Bedroom Design and Bedroom Interior Services Quote",
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What bedroom interior design services does MTBOSS offer in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MTBOSS offers bedroom interior design for master, kids and guest bedrooms, including bed and headboard walls, wardrobes, storage, false ceilings, lighting, wall panels, wallpaper, flooring, furniture layout and 3D design.",
        },
      },
      {
        "@type": "Question",
        name: "Does MTBOSS provide bedroom interior design services in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MTBOSS Construction Private Limited is an architect, interior designer and construction company that serves Moradabad and Rampur. Share your bedroom project with the team to confirm the scope and arrangements for your home.",
        },
      },
      {
        "@type": "Question",
        name: "Can MTBOSS design only one bedroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, depending on the project. Share your requirement with the team to confirm what can be taken up, such as a master bedroom, kids bedroom, guest bedroom, wardrobe, ceiling or storage unit.",
        },
      },
      {
        "@type": "Question",
        name: "How much does bedroom interior design cost in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cost depends on bedroom size, scope, material and finish level, wardrobe specifications, ceiling and lighting, custom furniture and civil work. Use the free Budget Calculator on the MTBOSS website, or request a detailed quote.",
        },
      },
      {
        "@type": "Question",
        name: "Can MTBOSS also supply materials such as tiles and paints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Construction materials, including tiles and paints, are available through the Shop Now section of the website.",
        },
      },
      {
        "@type": "Question",
        name: "What support is available after handover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Doorstep home services, such as electrician, plumber, AC repair, pest control, painter and carpenter, are available, along with renovation support when you need it.",
        },
      },
      {
        "@type": "Question",
        name: "Where is the MTBOSS office located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The office is located at Harthala, Kanth Road, Behind KR Collection, near Domino's, Moradabad, Uttar Pradesh.",
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
        item: "https://www.MTBOSS.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Interior Design Services",
        item: "https://www.MTBOSS.in/interior-design-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bedroom Interior Designer in Rampur",
        item: "https://www.MTBOSS.in/bedroom-interior-designer-rampur",
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