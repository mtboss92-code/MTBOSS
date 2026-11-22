// app/(bareilly_keywords)/vastu-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/QuickServices";
import CalculatorCTA from "../../components/CalculatorCTA";
import Services from "../../components/Services";

export const metadata = {
  title: "Vastu Interior Designer Rampur | MTBoss",

  description:
    "Looking for a Vastu interior designer Rampur? MTBoss plans furniture, colours, lighting and rooms around your Vastu preferences, with honest trade-offs.",

  keywords:
    "Vastu interior designer Rampur, Vastu interior design Rampur, Vastu interior design services Rampur, Vastu interior designer near me Rampur, Vastu interior designer company Rampur, Vastu interior designer contractor Rampur, Vastu interior design and build Rampur, Vastu interior design and installation Rampur, Vastu interior design and execution Rampur, Vastu interior design and carpentry Rampur, Vastu interior design and electrical Rampur, Vastu interior design and wiring Rampur, Vastu interior design and lighting Rampur, Vastu interior design and paneling Rampur, Vastu interior design and painting Rampur, Vastu interior design and finishing Rampur, Vastu home interior Rampur, Vastu home interior design Rampur, Vastu home interior designer Rampur, Vastu home interior company Rampur, Vastu home interior contractor Rampur, Vastu home design Rampur, Vastu home design and build Rampur, Vastu home design and installation Rampur, Vastu home design and execution Rampur, Vastu home design and carpentry Rampur, Vastu home design and electrical Rampur, Vastu home design and wiring Rampur, Vastu home design and lighting Rampur, Vastu home design and paneling Rampur, Vastu home design and painting Rampur, Vastu home design and finishing Rampur, Vastu house interior Rampur, Vastu house interior design Rampur, Vastu house interior designer Rampur, Vastu house interior company Rampur, Vastu house interior contractor Rampur, Vastu house design Rampur, Vastu house design and build Rampur, Vastu house design and installation Rampur, Vastu house design and execution Rampur, Vastu house design and carpentry Rampur, Vastu house design and electrical Rampur, Vastu house design and wiring Rampur, Vastu house design and lighting Rampur, Vastu house design and paneling Rampur, Vastu house design and painting Rampur, Vastu house design and finishing Rampur, Vastu flat interior Rampur, Vastu flat interior design Rampur, Vastu flat interior designer Rampur, Vastu flat interior company Rampur, Vastu flat interior contractor Rampur, Vastu flat design Rampur, Vastu flat design and build Rampur, Vastu flat design and installation Rampur, Vastu flat design and execution Rampur, Vastu flat design and carpentry Rampur, Vastu flat design and electrical Rampur, Vastu flat design and wiring Rampur, Vastu flat design and lighting Rampur, Vastu flat design and paneling Rampur, Vastu flat design and painting Rampur, Vastu flat design and finishing Rampur, Vastu apartment interior Rampur, Vastu apartment interior design Rampur, Vastu apartment interior designer Rampur, Vastu apartment interior company Rampur, Vastu apartment interior contractor Rampur, Vastu apartment design Rampur, Vastu apartment design and build Rampur, Vastu apartment design and installation Rampur, Vastu apartment design and execution Rampur, Vastu apartment design and carpentry Rampur, Vastu apartment design and electrical Rampur, Vastu apartment design and wiring Rampur, Vastu apartment design and lighting Rampur, Vastu apartment design and paneling Rampur, Vastu apartment design and painting Rampur, Vastu apartment design and finishing Rampur, Vastu villa interior Rampur, Vastu villa interior design Rampur, Vastu villa interior designer Rampur, Vastu villa interior company Rampur, Vastu villa interior contractor Rampur, Vastu villa design Rampur, Vastu villa design and build Rampur, Vastu villa design and installation Rampur, Vastu villa design and execution Rampur, Vastu villa design and carpentry Rampur, Vastu villa design and electrical Rampur, Vastu villa design and wiring Rampur, Vastu villa design and lighting Rampur, Vastu villa design and paneling Rampur, Vastu villa design and painting Rampur, Vastu villa design and finishing Rampur, Vastu independent house interior Rampur, Vastu independent house interior design Rampur, Vastu independent house interior designer Rampur, Vastu independent house interior company Rampur, Vastu independent house interior contractor Rampur, Vastu independent house design Rampur, Vastu independent house design and build Rampur, Vastu independent house design and installation Rampur, Vastu independent house design and execution Rampur, Vastu independent house design and carpentry Rampur, Vastu independent house design and electrical Rampur, Vastu independent house design and wiring Rampur, Vastu independent house design and lighting Rampur, Vastu independent house design and paneling Rampur, Vastu independent house design and painting Rampur, Vastu independent house design and finishing Rampur, Vastu living room design Rampur, Vastu living room design and build Rampur, Vastu living room design and installation Rampur, Vastu living room design and execution Rampur, Vastu living room design and carpentry Rampur, Vastu living room design and electrical Rampur, Vastu living room design and wiring Rampur, Vastu living room design and lighting Rampur, Vastu living room design and paneling Rampur, Vastu living room design and painting Rampur, Vastu living room design and finishing Rampur, Vastu kitchen design Rampur, Vastu kitchen design and build Rampur, Vastu kitchen design and installation Rampur, Vastu kitchen design and execution Rampur, Vastu kitchen design and carpentry Rampur, Vastu kitchen design and electrical Rampur, Vastu kitchen design and wiring Rampur, Vastu kitchen design and lighting Rampur, Vastu kitchen design and paneling Rampur, Vastu kitchen design and painting Rampur, Vastu kitchen design and finishing Rampur, Vastu master bedroom design Rampur, Vastu master bedroom design and build Rampur, Vastu master bedroom design and installation Rampur, Vastu master bedroom design and execution Rampur, Vastu master bedroom design and carpentry Rampur, Vastu master bedroom design and electrical Rampur, Vastu master bedroom design and wiring Rampur, Vastu master bedroom design and lighting Rampur, Vastu master bedroom design and paneling Rampur, Vastu master bedroom design and painting Rampur, Vastu master bedroom design and finishing Rampur, Vastu children room design Rampur, Vastu children room design and build Rampur, Vastu children room design and installation Rampur, Vastu children room design and execution Rampur, Vastu children room design and carpentry Rampur, Vastu children room design and electrical Rampur, Vastu children room design and wiring Rampur, Vastu children room design and lighting Rampur, Vastu children room design and paneling Rampur, Vastu children room design and painting Rampur, Vastu children room design and finishing Rampur, Vastu guest room design Rampur, Vastu guest room design and build Rampur, Vastu guest room design and installation Rampur, Vastu guest room design and execution Rampur, Vastu guest room design and carpentry Rampur, Vastu guest room design and electrical Rampur, Vastu guest room design and wiring Rampur, Vastu guest room design and lighting Rampur, Vastu guest room design and paneling Rampur, Vastu guest room design and painting Rampur, Vastu guest room design and finishing Rampur, Vastu pooja room design Rampur, Vastu pooja room design and build Rampur, Vastu pooja room design and installation Rampur, Vastu pooja room design and execution Rampur, Vastu pooja room design and carpentry Rampur, Vastu pooja room design and electrical Rampur, Vastu pooja room design and wiring Rampur, Vastu pooja room design and lighting Rampur, Vastu pooja room design and paneling Rampur, Vastu pooja room design and painting Rampur, Vastu pooja room design and finishing Rampur, Vastu study room design Rampur, Vastu study room design and build Rampur, Vastu study room design and installation Rampur, Vastu study room design and execution Rampur, Vastu study room design and carpentry Rampur, Vastu study room design and electrical Rampur, Vastu study room design and wiring Rampur, Vastu study room design and lighting Rampur, Vastu study room design and paneling Rampur, Vastu study room design and painting Rampur, Vastu study room design and finishing Rampur, Vastu home office design Rampur, Vastu home office design and build Rampur, Vastu home office design and installation Rampur, Vastu home office design and execution Rampur, Vastu home office design and carpentry Rampur, Vastu home office design and electrical Rampur, Vastu home office design and wiring Rampur, Vastu home office design and lighting Rampur, Vastu home office design and paneling Rampur, Vastu home office design and painting Rampur, Vastu home office design and finishing Rampur, Vastu furniture layout Rampur, Vastu furniture layout design Rampur, Vastu furniture layout designer Rampur, Vastu furniture layout company Rampur, Vastu furniture layout contractor Rampur, Vastu furniture layout maker Rampur, Vastu furniture layout carpenter Rampur, Vastu colour planning Rampur, Vastu colour planning design Rampur, Vastu colour planning designer Rampur, Vastu colour planning company Rampur, Vastu colour planning contractor Rampur, Vastu colour planning maker Rampur, Vastu colour planning carpenter Rampur, Vastu lighting design Rampur, Vastu lighting design and build Rampur, Vastu lighting design and installation Rampur, Vastu lighting design and execution Rampur, Vastu lighting design and carpentry Rampur, Vastu lighting design and electrical Rampur, Vastu lighting design and wiring Rampur, Vastu lighting design and paneling Rampur, Vastu lighting design and painting Rampur, Vastu lighting design and finishing Rampur, Vastu room planning Rampur, Vastu room planning design Rampur, Vastu room planning designer Rampur, Vastu room planning company Rampur, Vastu room planning contractor Rampur, Vastu room planning maker Rampur, Vastu room planning carpenter Rampur, Vastu interior design cost Rampur, Vastu interior design budget Rampur, Vastu interior design quotation Rampur, Vastu interior design estimate Rampur, Vastu interior design price Rampur, Vastu interior design planning Rampur, Vastu interior design project management Rampur, Vastu interior design supervision Rampur, Vastu interior design handover Rampur, Vastu interior design schedule Rampur, Vastu interior design timeline Rampur, Vastu interior design phases Rampur, Vastu interior design stages Rampur, Vastu interior design checklist Rampur, Vastu interior design scope Rampur, Vastu interior design master plan Rampur, Vastu interior design electrical plan Rampur, Vastu interior design material schedule Rampur, Vastu interior design material approval Rampur, Vastu interior design quality checks Rampur, Vastu interior design snag list Rampur, Vastu interior design after handover Rampur, Vastu interior design warranty Rampur, Vastu interior design care guidance Rampur, Vastu interior design 3D Rampur, Vastu interior design 3D view Rampur, Vastu interior design itemised quotation Rampur, MTBoss Rampur, MTBoss Moradabad, MTBoss Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/vastu-interior-designer-rampur",
  },

  openGraph: {
    title: "Vastu Interior Designer Rampur | MTBoss",

    description:
      "Looking for a Vastu interior designer Rampur? MTBoss plans furniture, colours, lighting and rooms around your Vastu preferences, with honest trade-offs.",

    url: "https://www.mtboss.in/vastu-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-vastu-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer in Rampur - MTBoss",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Vastu Interior Designer Rampur | MTBoss",

    description:
      "Looking for a Vastu interior designer Rampur? MTBoss plans furniture, colours, lighting and rooms around your Vastu preferences, with honest trade-offs.",

    images: [
      "https://www.mtboss.in/og-vastu-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/vastu-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-vastu-interior-designer-rampur.jpg",
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
      "Vastu Interior Designer",
      "Vastu Interior Design",
      "Vastu Interior Design Services",
      "Vastu Interior Designer Company",
      "Vastu Interior Designer Contractor",
      "Vastu Interior Design and Build",
      "Vastu Interior Design and Installation",
      "Vastu Interior Design and Execution",
      "Vastu Interior Design and Carpentry",
      "Vastu Interior Design and Electrical",
      "Vastu Interior Design and Wiring",
      "Vastu Interior Design and Lighting",
      "Vastu Interior Design and Paneling",
      "Vastu Interior Design and Painting",
      "Vastu Interior Design and Finishing",
      "Vastu Home Interior",
      "Vastu Home Interior Design",
      "Vastu Home Interior Designer",
      "Vastu Home Interior Company",
      "Vastu Home Interior Contractor",
      "Vastu Home Design",
      "Vastu Home Design and Build",
      "Vastu Home Design and Installation",
      "Vastu Home Design and Execution",
      "Vastu Home Design and Carpentry",
      "Vastu Home Design and Electrical",
      "Vastu Home Design and Wiring",
      "Vastu Home Design and Lighting",
      "Vastu Home Design and Paneling",
      "Vastu Home Design and Painting",
      "Vastu Home Design and Finishing",
      "Vastu House Interior",
      "Vastu House Interior Design",
      "Vastu House Interior Designer",
      "Vastu House Interior Company",
      "Vastu House Interior Contractor",
      "Vastu House Design",
      "Vastu House Design and Build",
      "Vastu House Design and Installation",
      "Vastu House Design and Execution",
      "Vastu House Design and Carpentry",
      "Vastu House Design and Electrical",
      "Vastu House Design and Wiring",
      "Vastu House Design and Lighting",
      "Vastu House Design and Paneling",
      "Vastu House Design and Painting",
      "Vastu House Design and Finishing",
      "Vastu Flat Interior",
      "Vastu Flat Interior Design",
      "Vastu Flat Interior Designer",
      "Vastu Flat Interior Company",
      "Vastu Flat Interior Contractor",
      "Vastu Flat Design",
      "Vastu Flat Design and Build",
      "Vastu Flat Design and Installation",
      "Vastu Flat Design and Execution",
      "Vastu Flat Design and Carpentry",
      "Vastu Flat Design and Electrical",
      "Vastu Flat Design and Wiring",
      "Vastu Flat Design and Lighting",
      "Vastu Flat Design and Paneling",
      "Vastu Flat Design and Painting",
      "Vastu Flat Design and Finishing",
      "Vastu Apartment Interior",
      "Vastu Apartment Interior Design",
      "Vastu Apartment Interior Designer",
      "Vastu Apartment Interior Company",
      "Vastu Apartment Interior Contractor",
      "Vastu Apartment Design",
      "Vastu Apartment Design and Build",
      "Vastu Apartment Design and Installation",
      "Vastu Apartment Design and Execution",
      "Vastu Apartment Design and Carpentry",
      "Vastu Apartment Design and Electrical",
      "Vastu Apartment Design and Wiring",
      "Vastu Apartment Design and Lighting",
      "Vastu Apartment Design and Paneling",
      "Vastu Apartment Design and Painting",
      "Vastu Apartment Design and Finishing",
      "Vastu Villa Interior",
      "Vastu Villa Interior Design",
      "Vastu Villa Interior Designer",
      "Vastu Villa Interior Company",
      "Vastu Villa Interior Contractor",
      "Vastu Villa Design",
      "Vastu Villa Design and Build",
      "Vastu Villa Design and Installation",
      "Vastu Villa Design and Execution",
      "Vastu Villa Design and Carpentry",
      "Vastu Villa Design and Electrical",
      "Vastu Villa Design and Wiring",
      "Vastu Villa Design and Lighting",
      "Vastu Villa Design and Paneling",
      "Vastu Villa Design and Painting",
      "Vastu Villa Design and Finishing",
      "Vastu Independent House Interior",
      "Vastu Independent House Interior Design",
      "Vastu Independent House Interior Designer",
      "Vastu Independent House Interior Company",
      "Vastu Independent House Interior Contractor",
      "Vastu Independent House Design",
      "Vastu Independent House Design and Build",
      "Vastu Independent House Design and Installation",
      "Vastu Independent House Design and Execution",
      "Vastu Independent House Design and Carpentry",
      "Vastu Independent House Design and Electrical",
      "Vastu Independent House Design and Wiring",
      "Vastu Independent House Design and Lighting",
      "Vastu Independent House Design and Paneling",
      "Vastu Independent House Design and Painting",
      "Vastu Independent House Design and Finishing",
      "Vastu Living Room Design",
      "Vastu Living Room Design and Build",
      "Vastu Living Room Design and Installation",
      "Vastu Living Room Design and Execution",
      "Vastu Living Room Design and Carpentry",
      "Vastu Living Room Design and Electrical",
      "Vastu Living Room Design and Wiring",
      "Vastu Living Room Design and Lighting",
      "Vastu Living Room Design and Paneling",
      "Vastu Living Room Design and Painting",
      "Vastu Living Room Design and Finishing",
      "Vastu Kitchen Design",
      "Vastu Kitchen Design and Build",
      "Vastu Kitchen Design and Installation",
      "Vastu Kitchen Design and Execution",
      "Vastu Kitchen Design and Carpentry",
      "Vastu Kitchen Design and Electrical",
      "Vastu Kitchen Design and Wiring",
      "Vastu Kitchen Design and Lighting",
      "Vastu Kitchen Design and Paneling",
      "Vastu Kitchen Design and Painting",
      "Vastu Kitchen Design and Finishing",
      "Vastu Master Bedroom Design",
      "Vastu Master Bedroom Design and Build",
      "Vastu Master Bedroom Design and Installation",
      "Vastu Master Bedroom Design and Execution",
      "Vastu Master Bedroom Design and Carpentry",
      "Vastu Master Bedroom Design and Electrical",
      "Vastu Master Bedroom Design and Wiring",
      "Vastu Master Bedroom Design and Lighting",
      "Vastu Master Bedroom Design and Paneling",
      "Vastu Master Bedroom Design and Painting",
      "Vastu Master Bedroom Design and Finishing",
      "Vastu Children Room Design",
      "Vastu Children Room Design and Build",
      "Vastu Children Room Design and Installation",
      "Vastu Children Room Design and Execution",
      "Vastu Children Room Design and Carpentry",
      "Vastu Children Room Design and Electrical",
      "Vastu Children Room Design and Wiring",
      "Vastu Children Room Design and Lighting",
      "Vastu Children Room Design and Paneling",
      "Vastu Children Room Design and Painting",
      "Vastu Children Room Design and Finishing",
      "Vastu Guest Room Design",
      "Vastu Guest Room Design and Build",
      "Vastu Guest Room Design and Installation",
      "Vastu Guest Room Design and Execution",
      "Vastu Guest Room Design and Carpentry",
      "Vastu Guest Room Design and Electrical",
      "Vastu Guest Room Design and Wiring",
      "Vastu Guest Room Design and Lighting",
      "Vastu Guest Room Design and Paneling",
      "Vastu Guest Room Design and Painting",
      "Vastu Guest Room Design and Finishing",
      "Vastu Pooja Room Design",
      "Vastu Pooja Room Design and Build",
      "Vastu Pooja Room Design and Installation",
      "Vastu Pooja Room Design and Execution",
      "Vastu Pooja Room Design and Carpentry",
      "Vastu Pooja Room Design and Electrical",
      "Vastu Pooja Room Design and Wiring",
      "Vastu Pooja Room Design and Lighting",
      "Vastu Pooja Room Design and Paneling",
      "Vastu Pooja Room Design and Painting",
      "Vastu Pooja Room Design and Finishing",
      "Vastu Study Room Design",
      "Vastu Study Room Design and Build",
      "Vastu Study Room Design and Installation",
      "Vastu Study Room Design and Execution",
      "Vastu Study Room Design and Carpentry",
      "Vastu Study Room Design and Electrical",
      "Vastu Study Room Design and Wiring",
      "Vastu Study Room Design and Lighting",
      "Vastu Study Room Design and Paneling",
      "Vastu Study Room Design and Painting",
      "Vastu Study Room Design and Finishing",
      "Vastu Home Office Design",
      "Vastu Home Office Design and Build",
      "Vastu Home Office Design and Installation",
      "Vastu Home Office Design and Execution",
      "Vastu Home Office Design and Carpentry",
      "Vastu Home Office Design and Electrical",
      "Vastu Home Office Design and Wiring",
      "Vastu Home Office Design and Lighting",
      "Vastu Home Office Design and Paneling",
      "Vastu Home Office Design and Painting",
      "Vastu Home Office Design and Finishing",
      "Vastu Furniture Layout",
      "Vastu Furniture Layout Design",
      "Vastu Furniture Layout Designer",
      "Vastu Furniture Layout Company",
      "Vastu Furniture Layout Contractor",
      "Vastu Furniture Layout Maker",
      "Vastu Furniture Layout Carpenter",
      "Vastu Colour Planning",
      "Vastu Colour Planning Design",
      "Vastu Colour Planning Designer",
      "Vastu Colour Planning Company",
      "Vastu Colour Planning Contractor",
      "Vastu Colour Planning Maker",
      "Vastu Colour Planning Carpenter",
      "Vastu Lighting Design",
      "Vastu Lighting Design and Build",
      "Vastu Lighting Design and Installation",
      "Vastu Lighting Design and Execution",
      "Vastu Lighting Design and Carpentry",
      "Vastu Lighting Design and Electrical",
      "Vastu Lighting Design and Wiring",
      "Vastu Lighting Design and Paneling",
      "Vastu Lighting Design and Painting",
      "Vastu Lighting Design and Finishing",
      "Vastu Room Planning",
      "Vastu Room Planning Design",
      "Vastu Room Planning Designer",
      "Vastu Room Planning Company",
      "Vastu Room Planning Contractor",
      "Vastu Room Planning Maker",
      "Vastu Room Planning Carpenter",
      "Vastu Interior Design Cost",
      "Vastu Interior Design Budget",
      "Vastu Interior Design Quotation",
      "Vastu Interior Design Estimate",
      "Vastu Interior Design Price",
      "Vastu Interior Design Planning",
      "Vastu Interior Design Project Management",
      "Vastu Interior Design Supervision",
      "Vastu Interior Design Handover",
      "Vastu Interior Design Schedule",
      "Vastu Interior Design Timeline",
      "Vastu Interior Design Phases",
      "Vastu Interior Design Stages",
      "Vastu Interior Design Checklist",
      "Vastu Interior Design Scope",
      "Vastu Interior Design Master Plan",
      "Vastu Interior Design Electrical Plan",
      "Vastu Interior Design Material Schedule",
      "Vastu Interior Design Material Approval",
      "Vastu Interior Design Quality Checks",
      "Vastu Interior Design Snag List",
      "Vastu Interior Design After Handover",
      "Vastu Interior Design Warranty",
      "Vastu Interior Design Care Guidance",
      "Vastu Interior Design 3D",
      "Vastu Interior Design 3D View",
      "Vastu Interior Design Itemised Quotation",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vastu Interior Designer in Rampur",
    description:
      "Looking for a Vastu interior designer Rampur? MTBoss plans furniture, colours, lighting and rooms around your Vastu preferences, with honest trade-offs. Services include Vastu interior design, Vastu home interior, Vastu home design, Vastu house interior, Vastu house design, Vastu flat interior, Vastu flat design, Vastu apartment interior, Vastu apartment design, Vastu villa interior, Vastu villa design, Vastu independent house interior, Vastu independent house design, Vastu living room design, Vastu kitchen design, Vastu master bedroom design, Vastu children room design, Vastu guest room design, Vastu pooja room design, Vastu study room design, Vastu home office design, Vastu furniture layout, Vastu colour planning, Vastu lighting design and Vastu room planning.",
    url: "https://www.mtboss.in/vastu-interior-designer-rampur",
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
      "Vastu Interior Designer, Vastu Interior Design, Vastu Interior Design Services, Vastu Interior Designer Company, Vastu Interior Designer Contractor, Vastu Interior Design and Build, Vastu Interior Design and Installation, Vastu Interior Design and Execution, Vastu Interior Design and Carpentry, Vastu Interior Design and Electrical, Vastu Interior Design and Wiring, Vastu Interior Design and Lighting, Vastu Interior Design and Paneling, Vastu Interior Design and Painting, Vastu Interior Design and Finishing, Vastu Home Interior, Vastu Home Interior Design, Vastu Home Interior Designer, Vastu Home Interior Company, Vastu Home Interior Contractor, Vastu Home Design, Vastu Home Design and Build, Vastu Home Design and Installation, Vastu Home Design and Execution, Vastu Home Design and Carpentry, Vastu Home Design and Electrical, Vastu Home Design and Wiring, Vastu Home Design and Lighting, Vastu Home Design and Paneling, Vastu Home Design and Painting, Vastu Home Design and Finishing, Vastu House Interior, Vastu House Interior Design, Vastu House Interior Designer, Vastu House Interior Company, Vastu House Interior Contractor, Vastu House Design, Vastu House Design and Build, Vastu House Design and Installation, Vastu House Design and Execution, Vastu House Design and Carpentry, Vastu House Design and Electrical, Vastu House Design and Wiring, Vastu House Design and Lighting, Vastu House Design and Paneling, Vastu House Design and Painting, Vastu House Design and Finishing, Vastu Flat Interior, Vastu Flat Interior Design, Vastu Flat Interior Designer, Vastu Flat Interior Company, Vastu Flat Interior Contractor, Vastu Flat Design, Vastu Flat Design and Build, Vastu Flat Design and Installation, Vastu Flat Design and Execution, Vastu Flat Design and Carpentry, Vastu Flat Design and Electrical, Vastu Flat Design and Wiring, Vastu Flat Design and Lighting, Vastu Flat Design and Paneling, Vastu Flat Design and Painting, Vastu Flat Design and Finishing, Vastu Apartment Interior, Vastu Apartment Interior Design, Vastu Apartment Interior Designer, Vastu Apartment Interior Company, Vastu Apartment Interior Contractor, Vastu Apartment Design, Vastu Apartment Design and Build, Vastu Apartment Design and Installation, Vastu Apartment Design and Execution, Vastu Apartment Design and Carpentry, Vastu Apartment Design and Electrical, Vastu Apartment Design and Wiring, Vastu Apartment Design and Lighting, Vastu Apartment Design and Paneling, Vastu Apartment Design and Painting, Vastu Apartment Design and Finishing, Vastu Villa Interior, Vastu Villa Interior Design, Vastu Villa Interior Designer, Vastu Villa Interior Company, Vastu Villa Interior Contractor, Vastu Villa Design, Vastu Villa Design and Build, Vastu Villa Design and Installation, Vastu Villa Design and Execution, Vastu Villa Design and Carpentry, Vastu Villa Design and Electrical, Vastu Villa Design and Wiring, Vastu Villa Design and Lighting, Vastu Villa Design and Paneling, Vastu Villa Design and Painting, Vastu Villa Design and Finishing, Vastu Independent House Interior, Vastu Independent House Interior Design, Vastu Independent House Interior Designer, Vastu Independent House Interior Company, Vastu Independent House Interior Contractor, Vastu Independent House Design, Vastu Independent House Design and Build, Vastu Independent House Design and Installation, Vastu Independent House Design and Execution, Vastu Independent House Design and Carpentry, Vastu Independent House Design and Electrical, Vastu Independent House Design and Wiring, Vastu Independent House Design and Lighting, Vastu Independent House Design and Paneling, Vastu Independent House Design and Painting, Vastu Independent House Design and Finishing, Vastu Living Room Design, Vastu Living Room Design and Build, Vastu Living Room Design and Installation, Vastu Living Room Design and Execution, Vastu Living Room Design and Carpentry, Vastu Living Room Design and Electrical, Vastu Living Room Design and Wiring, Vastu Living Room Design and Lighting, Vastu Living Room Design and Paneling, Vastu Living Room Design and Painting, Vastu Living Room Design and Finishing, Vastu Kitchen Design, Vastu Kitchen Design and Build, Vastu Kitchen Design and Installation, Vastu Kitchen Design and Execution, Vastu Kitchen Design and Carpentry, Vastu Kitchen Design and Electrical, Vastu Kitchen Design and Wiring, Vastu Kitchen Design and Lighting, Vastu Kitchen Design and Paneling, Vastu Kitchen Design and Painting, Vastu Kitchen Design and Finishing, Vastu Master Bedroom Design, Vastu Master Bedroom Design and Build, Vastu Master Bedroom Design and Installation, Vastu Master Bedroom Design and Execution, Vastu Master Bedroom Design and Carpentry, Vastu Master Bedroom Design and Electrical, Vastu Master Bedroom Design and Wiring, Vastu Master Bedroom Design and Lighting, Vastu Master Bedroom Design and Paneling, Vastu Master Bedroom Design and Painting, Vastu Master Bedroom Design and Finishing, Vastu Children Room Design, Vastu Children Room Design and Build, Vastu Children Room Design and Installation, Vastu Children Room Design and Execution, Vastu Children Room Design and Carpentry, Vastu Children Room Design and Electrical, Vastu Children Room Design and Wiring, Vastu Children Room Design and Lighting, Vastu Children Room Design and Paneling, Vastu Children Room Design and Painting, Vastu Children Room Design and Finishing, Vastu Guest Room Design, Vastu Guest Room Design and Build, Vastu Guest Room Design and Installation, Vastu Guest Room Design and Execution, Vastu Guest Room Design and Carpentry, Vastu Guest Room Design and Electrical, Vastu Guest Room Design and Wiring, Vastu Guest Room Design and Lighting, Vastu Guest Room Design and Paneling, Vastu Guest Room Design and Painting, Vastu Guest Room Design and Finishing, Vastu Pooja Room Design, Vastu Pooja Room Design and Build, Vastu Pooja Room Design and Installation, Vastu Pooja Room Design and Execution, Vastu Pooja Room Design and Carpentry, Vastu Pooja Room Design and Electrical, Vastu Pooja Room Design and Wiring, Vastu Pooja Room Design and Lighting, Vastu Pooja Room Design and Paneling, Vastu Pooja Room Design and Painting, Vastu Pooja Room Design and Finishing, Vastu Study Room Design, Vastu Study Room Design and Build, Vastu Study Room Design and Installation, Vastu Study Room Design and Execution, Vastu Study Room Design and Carpentry, Vastu Study Room Design and Electrical, Vastu Study Room Design and Wiring, Vastu Study Room Design and Lighting, Vastu Study Room Design and Paneling, Vastu Study Room Design and Painting, Vastu Study Room Design and Finishing, Vastu Home Office Design, Vastu Home Office Design and Build, Vastu Home Office Design and Installation, Vastu Home Office Design and Execution, Vastu Home Office Design and Carpentry, Vastu Home Office Design and Electrical, Vastu Home Office Design and Wiring, Vastu Home Office Design and Lighting, Vastu Home Office Design and Paneling, Vastu Home Office Design and Painting, Vastu Home Office Design and Finishing, Vastu Furniture Layout, Vastu Furniture Layout Design, Vastu Furniture Layout Designer, Vastu Furniture Layout Company, Vastu Furniture Layout Contractor, Vastu Furniture Layout Maker, Vastu Furniture Layout Carpenter, Vastu Colour Planning, Vastu Colour Planning Design, Vastu Colour Planning Designer, Vastu Colour Planning Company, Vastu Colour Planning Contractor, Vastu Colour Planning Maker, Vastu Colour Planning Carpenter, Vastu Lighting Design, Vastu Lighting Design and Build, Vastu Lighting Design and Installation, Vastu Lighting Design and Execution, Vastu Lighting Design and Carpentry, Vastu Lighting Design and Electrical, Vastu Lighting Design and Wiring, Vastu Lighting Design and Paneling, Vastu Lighting Design and Painting, Vastu Lighting Design and Finishing, Vastu Room Planning, Vastu Room Planning Design, Vastu Room Planning Designer, Vastu Room Planning Company, Vastu Room Planning Contractor, Vastu Room Planning Maker, Vastu Room Planning Carpenter, Vastu Interior Design Cost, Vastu Interior Design Budget, Vastu Interior Design Quotation, Vastu Interior Design Estimate, Vastu Interior Design Price, Vastu Interior Design Planning, Vastu Interior Design Project Management, Vastu Interior Design Supervision, Vastu Interior Design Handover, Vastu Interior Design Schedule, Vastu Interior Design Timeline, Vastu Interior Design Phases, Vastu Interior Design Stages, Vastu Interior Design Checklist, Vastu Interior Design Scope, Vastu Interior Design Master Plan, Vastu Interior Design Electrical Plan, Vastu Interior Design Material Schedule, Vastu Interior Design Material Approval, Vastu Interior Design Quality Checks, Vastu Interior Design Snag List, Vastu Interior Design After Handover, Vastu Interior Design Warranty, Vastu Interior Design Care Guidance, Vastu Interior Design 3D, Vastu Interior Design 3D View and Vastu Interior Design Itemised Quotation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who plans Vastu interiors in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MTBoss designs interiors around your Vastu preferences, serving clients from its Kanth Road office in Moradabad.",
        },
      },
      {
        "@type": "Question",
        name: "Do you have an office in Rampur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We serve Rampur through visits, shared drawings and updates.",
        },
      },
      {
        "@type": "Question",
        name: "Do you guarantee Vastu results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We plan to your preferences and make no claims about luck, health or wealth.",
        },
      },
      {
        "@type": "Question",
        name: "Can I bring my family's Vastu consultant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Bring them in before the layout is frozen.",
        },
      },
      {
        "@type": "Question",
        name: "What if my flat conflicts with Vastu guidelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We explain the options and trade-offs. Safety, structure and society rules come first.",
        },
      },
      {
        "@type": "Question",
        name: "Can you follow Vastu without breaking walls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes, through furniture, room use, colours, lighting and joinery.",
        },
      },
      {
        "@type": "Question",
        name: "Do you plan the pooja room and kitchen too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan the pooja unit, kitchen layout and services together.",
        },
      },
      {
        "@type": "Question",
        name: "Do you give itemised quotations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We list work items, materials, labour, timeline and payment stages.",
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
        name: "Vastu Interior Designer Rampur",
        item: "https://www.mtboss.in/vastu-interior-designer-rampur",
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