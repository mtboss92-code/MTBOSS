// app/(bareilly_keywords)/living-room-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Living Room Interior Designer Rampur | Hall Design – MTBOSS",

  description:
    "MTBOSS designs living room interiors Rampur: seating layout, TV wall, false ceiling, lighting and storage for flats and houses, with 3D design, clear pricing and on-time handover.",

  keywords:
    "living room interior designer Rampur, living room interior design Rampur, living room interiors Rampur, hall interior designer Rampur, hall design Rampur, drawing room interior Rampur, family living room design Rampur, living room renovation Rampur, living room makeover Rampur, living room layout planning Rampur, sofa seating layout Rampur, TV wall design Rampur, TV unit design Rampur, entertainment unit Rampur, feature wall design Rampur, panelled TV wall Rampur, fluted panel TV wall Rampur, stone look wall Rampur, floating TV unit Rampur, backlit TV wall Rampur, marble TV wall Rampur, living room false ceiling Rampur, cove ceiling Rampur, layered ceiling Rampur, living room lighting design Rampur, living room flooring Rampur, living room wallpaper Rampur, living room storage Rampur, console table design Rampur, display shelves Rampur, living dining partition Rampur, jaali partition Rampur, living room curtains Rampur, living room blinds Rampur, living room electrical planning Rampur, living room AC planning Rampur, living room 3D design Rampur, living room interior cost Rampur, living room interior quote Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly, living room interior designer near me Rampur",

  alternates: {
    canonical:
      "https://www.mtboss.in/living-room-interior-designer-rampur",
  },

  openGraph: {
    title: "Living Room Interior Designer Rampur | Hall Design – MTBOSS",

    description:
      "MTBOSS designs living room interiors Rampur: seating layout, TV wall, false ceiling, lighting and storage for flats and houses, with 3D design, clear pricing and on-time handover.",

    url: "https://www.mtboss.in/living-room-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-living-room-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Living Room Interior Designer Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Living Room Interior Designer Rampur | Hall Design – MTBOSS",

    description:
      "MTBOSS designs living room interiors Rampur: seating layout, TV wall, false ceiling, lighting and storage for flats and houses, with 3D design, clear pricing and on-time handover.",

    images: [
      "https://www.mtboss.in/og-living-room-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/living-room-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-living-room-interior-designer-rampur.jpg",
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
      "Living Room Interior Design",
      "Living Room Interior Designer",
      "Hall Interior Design",
      "Drawing Room Interior",
      "Family Living Room Design",
      "Living Room Renovation",
      "Living Room Makeover",
      "Living Room Layout Planning",
      "Sofa Seating Layout",
      "TV Wall Design",
      "TV Unit Design",
      "Entertainment Unit",
      "Feature Wall Design",
      "Panelled TV Wall",
      "Fluted Panel TV Wall",
      "Stone Look Wall",
      "Floating TV Unit",
      "Backlit TV Wall",
      "Marble TV Wall",
      "Living Room False Ceiling",
      "Cove Ceiling",
      "Layered Ceiling",
      "Living Room Lighting Design",
      "Living Room Flooring",
      "Living Room Wallpaper",
      "Living Room Storage",
      "Console Table Design",
      "Display Shelves",
      "Living Dining Partition",
      "Jaali Partition",
      "Living Room Curtains",
      "Living Room Blinds",
      "Living Room Electrical Planning",
      "Living Room AC Planning",
      "Living Room 3D Design",
      "Living Room Interior Cost",
      "Living Room Interior Quote",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Living Room Interior Designer in Rampur",
    description:
      "MTBOSS designs living room interiors Rampur: seating layout, TV wall, false ceiling, lighting and storage for flats and houses, with 3D design, clear pricing and on-time handover. Services include living room layout and space planning, sofa and seating arrangement, TV wall and entertainment unit design, feature walls, false ceilings, lighting, flooring, wall finishes, wallpaper, console and display units, storage, curtains, partitions, jaali screens, electrical, AC and technology planning.",
    url: "https://www.mtboss.in/living-room-interior-designer-rampur",
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
        name: "Moradabad",
      },
      {
        "@type": "City",
        name: "Bareilly",
      },
    ],
    serviceType:
      "Living Room Interior Design, Living Room Interior Designer, Hall Interior Design, Drawing Room Interior, Family Living Room Design, Living Room Renovation, Living Room Makeover, Living Room Layout Planning, Sofa Seating Layout, TV Wall Design, TV Unit Design, Entertainment Unit, Feature Wall Design, Panelled TV Wall, Fluted Panel TV Wall, Stone Look Wall, Floating TV Unit, Backlit TV Wall, Marble TV Wall, Living Room False Ceiling, Cove Ceiling, Layered Ceiling, Living Room Lighting Design, Living Room Flooring, Living Room Wallpaper, Living Room Storage, Console Table Design, Display Shelves, Living Dining Partition, Jaali Partition, Living Room Curtains, Living Room Blinds, Living Room Electrical Planning, Living Room AC Planning, Living Room 3D Design, Living Room Interior Cost and Living Room Interior Quote",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a living room interior designer do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A living room interior designer plans the layout, seating, TV wall, ceiling, lighting, storage and finishes, and manages execution until handover.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design a small living room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We design compact living rooms using proportional furniture, wall-mounted units, vertical storage and light colours.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design a TV wall with storage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We design TV walls with panels, shelves, closed storage, concealed wiring and lighting, planned to suit your TV size and room.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design false ceilings and lighting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan false ceilings with cove, profile and spot lighting, along with fans and AC provisions.",
        },
      },
      {
        "@type": "Question",
        name: "Can you combine living and dining areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan open layouts with partitions, jaali screens or lighting changes to define the zones while keeping the space connected.",
        },
      },
      {
        "@type": "Question",
        name: "Can you follow vastu preferences?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can discuss your preferences and include them where the room layout allows, while keeping the design practical.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide 3D designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can review visuals before work begins.",
        },
      },
      {
        "@type": "Question",
        name: "Can you renovate only the living room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We take projects of every size, from one room to a full home.",
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
        name: "Living Room Interior Designer Rampur",
        item: "https://www.mtboss.in/living-room-interior-designer-rampur",
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