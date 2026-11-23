// app/(bareilly_keywords)/2-bhk-interior-design-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "2 BHK Interior Design  Rampur | Flat & House Interiors – MTBOSS",

  description:
    "Plan your 2 BHK interiors Rampur with MTBOSS: smart layouts, modular kitchen, wardrobes, ceilings and storage for flats and houses, with 3D design and clear itemised quotes.",

  keywords:
    "2 BHK interior design Rampur, 2 BHK interior Rampur, 2 BHK interiors Rampur, 2 BHK flat interior Rampur, 2 BHK apartment interior Rampur, 2 BHK house interior Rampur, 2 BHK home interior Rampur, 2 BHK interior designer Rampur, 2 BHK interior design company Rampur, 2 BHK interior planning Rampur, 2 BHK space planning Rampur, 2 BHK furniture layout Rampur, 2 BHK layout design Rampur, 2 BHK modular kitchen Rampur, 2 BHK kitchen design Rampur, 2 BHK wardrobe design Rampur, 2 BHK wardrobe Rampur, 2 BHK TV unit Rampur, 2 BHK living room interior Rampur, 2 BHK hall interior Rampur, 2 BHK dining interior Rampur, 2 BHK bedroom interior Rampur, 2 BHK master bedroom interior Rampur, 2 BHK second bedroom interior Rampur, 2 BHK guest room interior Rampur, 2 BHK study room interior Rampur, 2 BHK kids room interior Rampur, 2 BHK bathroom interior Rampur, 2 BHK balcony interior Rampur, 2 BHK pooja unit Rampur, 2 BHK false ceiling Rampur, 2 BHK ceiling design Rampur, 2 BHK lighting design Rampur, 2 BHK electrical plan Rampur, 2 BHK flooring Rampur, 2 BHK tiles Rampur, 2 BHK painting Rampur, 2 BHK storage design Rampur, 2 BHK storage solutions Rampur, 2 BHK interior cost Rampur, 2 BHK interior budget Rampur, 2 BHK interior quotation Rampur, 2 BHK itemised quote Rampur, 2 BHK 3D design Rampur, 2 BHK 3D view Rampur, 2 BHK interior design near me Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/2-bhk-interior-design-rampur",
  },

  openGraph: {
    title: "2 BHK Interior Design  Rampur | Flat & House Interiors – MTBOSS",

    description:
      "Plan your 2 BHK interiors Rampur with MTBOSS: smart layouts, modular kitchen, wardrobes, ceilings and storage for flats and houses, with 3D design and clear itemised quotes.",

    url: "https://www.mtboss.in/2-bhk-interior-design-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-2-bhk-interior-design-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "2 BHK Interior Design in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "2 BHK Interior Design  Rampur | Flat & House Interiors – MTBOSS",

    description:
      "Plan your 2 BHK interiors Rampur with MTBOSS: smart layouts, modular kitchen, wardrobes, ceilings and storage for flats and houses, with 3D design and clear itemised quotes.",

    images: [
      "https://www.mtboss.in/og-2-bhk-interior-design-rampur.jpg",
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
    url: "https://www.mtboss.in/2-bhk-interior-design-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-2-bhk-interior-design-rampur.jpg",
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
      "2 BHK Interior Design",
      "2 BHK Interior",
      "2 BHK Interiors",
      "2 BHK Flat Interior",
      "2 BHK Apartment Interior",
      "2 BHK House Interior",
      "2 BHK Home Interior",
      "2 BHK Interior Designer",
      "2 BHK Interior Design Company",
      "2 BHK Interior Planning",
      "2 BHK Space Planning",
      "2 BHK Furniture Layout",
      "2 BHK Layout Design",
      "2 BHK Modular Kitchen",
      "2 BHK Kitchen Design",
      "2 BHK Wardrobe Design",
      "2 BHK Wardrobe",
      "2 BHK TV Unit",
      "2 BHK Living Room Interior",
      "2 BHK Hall Interior",
      "2 BHK Dining Interior",
      "2 BHK Bedroom Interior",
      "2 BHK Master Bedroom Interior",
      "2 BHK Second Bedroom Interior",
      "2 BHK Guest Room Interior",
      "2 BHK Study Room Interior",
      "2 BHK Kids Room Interior",
      "2 BHK Bathroom Interior",
      "2 BHK Balcony Interior",
      "2 BHK Pooja Unit",
      "2 BHK False Ceiling",
      "2 BHK Ceiling Design",
      "2 BHK Lighting Design",
      "2 BHK Electrical Plan",
      "2 BHK Flooring",
      "2 BHK Tiles",
      "2 BHK Painting",
      "2 BHK Storage Design",
      "2 BHK Storage Solutions",
      "2 BHK Interior Cost",
      "2 BHK Interior Budget",
      "2 BHK Interior Quotation",
      "2 BHK Itemised Quote",
      "2 BHK 3D Design",
      "2 BHK 3D View",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "2 BHK Interior Design in Rampur",
    description:
      "Plan your 2 BHK interiors Rampur with MTBOSS: smart layouts, modular kitchen, wardrobes, ceilings and storage for flats and houses, with 3D design and clear itemised quotes. Services include complete 2 BHK interior design and execution, space planning and furniture layout, modular kitchen design, wardrobes for both bedrooms, TV unit and living room storage, false ceiling and lighting, flooring, tiles and wall finishes.",
    url: "https://www.mtboss.in/2-bhk-interior-design-rampur",
    provider: {
      "@type": "InteriorDesignService",
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
      "2 BHK Interior Design, 2 BHK Interior, 2 BHK Interiors, 2 BHK Flat Interior, 2 BHK Apartment Interior, 2 BHK House Interior, 2 BHK Home Interior, 2 BHK Interior Designer, 2 BHK Interior Design Company, 2 BHK Interior Planning, 2 BHK Space Planning, 2 BHK Furniture Layout, 2 BHK Layout Design, 2 BHK Modular Kitchen, 2 BHK Kitchen Design, 2 BHK Wardrobe Design, 2 BHK Wardrobe, 2 BHK TV Unit, 2 BHK Living Room Interior, 2 BHK Hall Interior, 2 BHK Dining Interior, 2 BHK Bedroom Interior, 2 BHK Master Bedroom Interior, 2 BHK Second Bedroom Interior, 2 BHK Guest Room Interior, 2 BHK Study Room Interior, 2 BHK Kids Room Interior, 2 BHK Bathroom Interior, 2 BHK Balcony Interior, 2 BHK Pooja Unit, 2 BHK False Ceiling, 2 BHK Ceiling Design, 2 BHK Lighting Design, 2 BHK Electrical Plan, 2 BHK Flooring, 2 BHK Tiles, 2 BHK Painting, 2 BHK Storage Design, 2 BHK Storage Solutions, 2 BHK Interior Cost, 2 BHK Interior Budget, 2 BHK Interior Quotation, 2 BHK Itemised Quote, 2 BHK 3D Design and 2 BHK 3D View",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a 2 BHK interior design include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It usually includes planning and design, kitchen, wardrobes, TV unit, ceilings, lighting, flooring, painting, bathroom work and electrical coordination. We list the scope clearly in the quotation.",
        },
      },
      {
        "@type": "Question",
        name: "How can I make my 2 BHK look bigger?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use light colours, vertical storage, wall-mounted units, mirrors, simple ceilings and furniture that leaves floor visible. Clear walking paths also help.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas should I prioritise in a 2 BHK on a limited budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most families start with the kitchen, wardrobes, bathrooms, wiring, waterproofing and the hall. Decor and secondary features can follow later.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do only the kitchen and wardrobes first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can plan a phased approach with one master plan, so that wiring, colours and styles stay consistent.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best layout for a 2 BHK kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Straight, L-shaped or parallel layouts are common. The best choice depends on your room shape, door and window positions and cooking habits. We show options in 3D.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use sliding or hinged wardrobes in a small bedroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sliding wardrobes save door-swing space and suit tight rooms. Hinged wardrobes give full access when there is enough clearance. We compare both on your actual wall.",
        },
      },
      {
        "@type": "Question",
        name: "Can I live in my 2 BHK while the work is going on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is possible in some cases, but dust and noise make it harder. We can plan the order of work to protect a livable area, and we advise staying elsewhere during the heaviest stages if you can.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle electrical, plumbing and waterproofing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We coordinate civil, electrical, plumbing and waterproofing work as part of the project.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide 3D designs and itemised quotations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can see visuals before work begins and receive an itemised quotation with specifications and exclusions.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve Rampur and nearby cities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve Rampur, Moradabad and Bareilly and can discuss nearby locations.",
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
        name: "2 BHK Interior Design Rampur",
        item: "https://www.mtboss.in/2-bhk-interior-design-rampur",
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