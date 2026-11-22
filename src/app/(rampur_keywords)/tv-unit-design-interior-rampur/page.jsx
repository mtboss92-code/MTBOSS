// app/(bareilly_keywords)/tv-unit-design-interior-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/QuickServices";
import CalculatorCTA from "../../components/CalculatorCTA";
import Services from "../../components/Services";

export const metadata = {
  title: "TV Unit Design Interior Rampur | Custom Units – MTBOSS",

  description:
    "MTBOSS designs custom TV units  Rampur: wall-mounted, panel, fluted and storage units with neat wiring, lighting and finishing for living rooms and bedrooms.",

  keywords:
    "TV unit design interior Rampur, TV unit design Rampur, TV unit Rampur, TV units Rampur, custom TV unit Rampur, custom TV unit design Rampur, custom TV unit designer Rampur, custom TV unit company Rampur, custom TV unit contractor Rampur, custom TV unit maker Rampur, custom TV unit carpenter Rampur, TV unit interior designer Rampur, TV unit interior design Rampur, TV unit interior company Rampur, TV unit interior contractor Rampur, TV unit design and build Rampur, TV unit design and installation Rampur, TV unit design and execution Rampur, TV unit design and carpentry Rampur, TV unit design and electrical Rampur, TV unit design and wiring Rampur, TV unit design and lighting Rampur, TV unit design and paneling Rampur, TV unit design and painting Rampur, TV unit design and finishing Rampur, wall-mounted TV unit Rampur, wall-mounted TV unit design Rampur, wall-mounted TV unit designer Rampur, wall-mounted TV unit company Rampur, wall-mounted TV unit contractor Rampur, wall-mounted TV unit maker Rampur, wall-mounted TV unit carpenter Rampur, floor-standing TV unit Rampur, floor-standing TV unit design Rampur, floor-standing TV unit designer Rampur, floor-standing TV unit company Rampur, floor-standing TV unit contractor Rampur, floor-standing TV unit maker Rampur, floor-standing TV unit carpenter Rampur, panel TV unit Rampur, panel TV unit design Rampur, panel TV unit designer Rampur, panel TV unit company Rampur, panel TV unit contractor Rampur, panel TV unit maker Rampur, panel TV unit carpenter Rampur, fluted TV unit Rampur, fluted TV unit design Rampur, fluted TV unit designer Rampur, fluted TV unit company Rampur, fluted TV unit contractor Rampur, fluted TV unit maker Rampur, fluted TV unit carpenter Rampur, louvred TV unit Rampur, louvred TV unit design Rampur, louvred TV unit designer Rampur, louvred TV unit company Rampur, louvred TV unit contractor Rampur, louvred TV unit maker Rampur, louvred TV unit carpenter Rampur, floating TV unit Rampur, floating TV unit design Rampur, floating TV unit designer Rampur, floating TV unit company Rampur, floating TV unit contractor Rampur, floating TV unit maker Rampur, floating TV unit carpenter Rampur, back-lit TV unit Rampur, back-lit TV unit design Rampur, back-lit TV unit designer Rampur, back-lit TV unit company Rampur, back-lit TV unit contractor Rampur, back-lit TV unit maker Rampur, back-lit TV unit carpenter Rampur, TV unit with storage Rampur, TV unit with storage design Rampur, TV unit with storage designer Rampur, TV unit with storage company Rampur, TV unit with storage contractor Rampur, TV unit with storage maker Rampur, TV unit with storage carpenter Rampur, TV unit with cable management Rampur, TV unit with cable management design Rampur, TV unit with cable management designer Rampur, TV unit with cable management company Rampur, TV unit with cable management contractor Rampur, TV unit with cable management maker Rampur, TV unit with cable management carpenter Rampur, TV unit with concealed wiring Rampur, TV unit with concealed wiring design Rampur, TV unit with concealed wiring designer Rampur, TV unit with concealed wiring company Rampur, TV unit with concealed wiring contractor Rampur, TV unit with concealed wiring maker Rampur, TV unit with concealed wiring carpenter Rampur, TV unit with back-lighting Rampur, TV unit with back-lighting design Rampur, TV unit with back-lighting designer Rampur, TV unit with back-lighting company Rampur, TV unit with back-lighting contractor Rampur, TV unit with back-lighting maker Rampur, TV unit with back-lighting carpenter Rampur, TV unit with accent lighting Rampur, TV unit with accent lighting design Rampur, TV unit with accent lighting designer Rampur, TV unit with accent lighting company Rampur, TV unit with accent lighting contractor Rampur, TV unit with accent lighting maker Rampur, TV unit with accent lighting carpenter Rampur, TV unit with stone finish Rampur, TV unit with stone finish design Rampur, TV unit with stone finish designer Rampur, TV unit with stone finish company Rampur, TV unit with stone finish contractor Rampur, TV unit with stone finish maker Rampur, TV unit with stone finish carpenter Rampur, TV unit with tile finish Rampur, TV unit with tile finish design Rampur, TV unit with tile finish designer Rampur, TV unit with tile finish company Rampur, TV unit with tile finish contractor Rampur, TV unit with tile finish maker Rampur, TV unit with tile finish carpenter Rampur, TV unit with texture finish Rampur, TV unit with texture finish design Rampur, TV unit with texture finish designer Rampur, TV unit with texture finish company Rampur, TV unit with texture finish contractor Rampur, TV unit with texture finish maker Rampur, TV unit with texture finish carpenter Rampur, TV unit for living room Rampur, TV unit for living room design Rampur, TV unit for living room designer Rampur, TV unit for living room company Rampur, TV unit for living room contractor Rampur, TV unit for living room maker Rampur, TV unit for living room carpenter Rampur, TV unit for bedroom Rampur, TV unit for bedroom design Rampur, TV unit for bedroom designer Rampur, TV unit for bedroom company Rampur, TV unit for bedroom contractor Rampur, TV unit for bedroom maker Rampur, TV unit for bedroom carpenter Rampur, TV unit for kids room Rampur, TV unit for kids room design Rampur, TV unit for kids room designer Rampur, TV unit for kids room company Rampur, TV unit for kids room contractor Rampur, TV unit for kids room maker Rampur, TV unit for kids room carpenter Rampur, TV unit for study room Rampur, TV unit for study room design Rampur, TV unit for study room designer Rampur, TV unit for study room company Rampur, TV unit for study room contractor Rampur, TV unit for study room maker Rampur, TV unit for study room carpenter Rampur, TV unit for home theatre Rampur, TV unit for home theatre design Rampur, TV unit for home theatre designer Rampur, TV unit for home theatre company Rampur, TV unit for home theatre contractor Rampur, TV unit for home theatre maker Rampur, TV unit for home theatre carpenter Rampur, TV unit for media room Rampur, TV unit for media room design Rampur, TV unit for media room designer Rampur, TV unit for media room company Rampur, TV unit for media room contractor Rampur, TV unit for media room maker Rampur, TV unit for media room carpenter Rampur, TV unit for shop Rampur, TV unit for shop design Rampur, TV unit for shop designer Rampur, TV unit for shop company Rampur, TV unit for shop contractor Rampur, TV unit for shop maker Rampur, TV unit for shop carpenter Rampur, TV unit for office Rampur, TV unit for office design Rampur, TV unit for office designer Rampur, TV unit for office company Rampur, TV unit for office contractor Rampur, TV unit for office maker Rampur, TV unit for office carpenter Rampur, TV unit for clinic Rampur, TV unit for clinic design Rampur, TV unit for clinic designer Rampur, TV unit for clinic company Rampur, TV unit for clinic contractor Rampur, TV unit for clinic maker Rampur, TV unit for clinic carpenter Rampur, TV unit for salon Rampur, TV unit for salon design Rampur, TV unit for salon designer Rampur, TV unit for salon company Rampur, TV unit for salon contractor Rampur, TV unit for salon maker Rampur, TV unit for salon carpenter Rampur, TV unit for gym Rampur, TV unit for gym design Rampur, TV unit for gym designer Rampur, TV unit for gym company Rampur, TV unit for gym contractor Rampur, TV unit for gym maker Rampur, TV unit for gym carpenter Rampur, TV unit for restaurant Rampur, TV unit for restaurant design Rampur, TV unit for restaurant designer Rampur, TV unit for restaurant company Rampur, TV unit for restaurant contractor Rampur, TV unit for restaurant maker Rampur, TV unit for restaurant carpenter Rampur, TV unit for cafe Rampur, TV unit for cafe design Rampur, TV unit for cafe designer Rampur, TV unit for cafe company Rampur, TV unit for cafe contractor Rampur, TV unit for cafe maker Rampur, TV unit for cafe carpenter Rampur, TV unit design cost Rampur, TV unit design budget Rampur, TV unit design quotation Rampur, TV unit design estimate Rampur, TV unit design price Rampur, TV unit design planning Rampur, TV unit design project management Rampur, TV unit design supervision Rampur, TV unit design handover Rampur, TV unit design schedule Rampur, TV unit design timeline Rampur, TV unit design phases Rampur, TV unit design stages Rampur, TV unit design checklist Rampur, TV unit design scope Rampur, TV unit design master plan Rampur, TV unit design electrical plan Rampur, TV unit design material schedule Rampur, TV unit design material approval Rampur, TV unit design quality checks Rampur, TV unit design snag list Rampur, TV unit design after handover Rampur, TV unit design warranty Rampur, TV unit design care guidance Rampur, TV unit design 3D Rampur, TV unit design 3D view Rampur, TV unit design itemised quotation Rampur, TV unit design near me Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/tv-unit-design-interior-rampur",
  },

  openGraph: {
    title: "TV Unit Design Interior Rampur | Custom Units – MTBOSS",

    description:
      "MTBOSS designs custom TV units  Rampur: wall-mounted, panel, fluted and storage units with neat wiring, lighting and finishing for living rooms and bedrooms.",

    url: "https://www.mtboss.in/tv-unit-design-interior-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-tv-unit-design-interior-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "TV Unit Design Interior in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TV Unit Design Interior Rampur | Custom Units – MTBOSS",

    description:
      "MTBOSS designs custom TV units  Rampur: wall-mounted, panel, fluted and storage units with neat wiring, lighting and finishing for living rooms and bedrooms.",

    images: [
      "https://www.mtboss.in/og-tv-unit-design-interior-rampur.jpg",
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
    url: "https://www.mtboss.in/tv-unit-design-interior-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-tv-unit-design-interior-rampur.jpg",
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
      "TV Unit Design Interior",
      "TV Unit Design",
      "TV Unit",
      "TV Units",
      "Custom TV Unit",
      "Custom TV Unit Design",
      "Custom TV Unit Designer",
      "Custom TV Unit Company",
      "Custom TV Unit Contractor",
      "Custom TV Unit Maker",
      "Custom TV Unit Carpenter",
      "TV Unit Interior Designer",
      "TV Unit Interior Design",
      "TV Unit Interior Company",
      "TV Unit Interior Contractor",
      "TV Unit Design and Build",
      "TV Unit Design and Installation",
      "TV Unit Design and Execution",
      "TV Unit Design and Carpentry",
      "TV Unit Design and Electrical",
      "TV Unit Design and Wiring",
      "TV Unit Design and Lighting",
      "TV Unit Design and Paneling",
      "TV Unit Design and Painting",
      "TV Unit Design and Finishing",
      "Wall-Mounted TV Unit",
      "Wall-Mounted TV Unit Design",
      "Wall-Mounted TV Unit Designer",
      "Wall-Mounted TV Unit Company",
      "Wall-Mounted TV Unit Contractor",
      "Wall-Mounted TV Unit Maker",
      "Wall-Mounted TV Unit Carpenter",
      "Floor-Standing TV Unit",
      "Floor-Standing TV Unit Design",
      "Floor-Standing TV Unit Designer",
      "Floor-Standing TV Unit Company",
      "Floor-Standing TV Unit Contractor",
      "Floor-Standing TV Unit Maker",
      "Floor-Standing TV Unit Carpenter",
      "Panel TV Unit",
      "Panel TV Unit Design",
      "Panel TV Unit Designer",
      "Panel TV Unit Company",
      "Panel TV Unit Contractor",
      "Panel TV Unit Maker",
      "Panel TV Unit Carpenter",
      "Fluted TV Unit",
      "Fluted TV Unit Design",
      "Fluted TV Unit Designer",
      "Fluted TV Unit Company",
      "Fluted TV Unit Contractor",
      "Fluted TV Unit Maker",
      "Fluted TV Unit Carpenter",
      "Louvred TV Unit",
      "Louvred TV Unit Design",
      "Louvred TV Unit Designer",
      "Louvred TV Unit Company",
      "Louvred TV Unit Contractor",
      "Louvred TV Unit Maker",
      "Louvred TV Unit Carpenter",
      "Floating TV Unit",
      "Floating TV Unit Design",
      "Floating TV Unit Designer",
      "Floating TV Unit Company",
      "Floating TV Unit Contractor",
      "Floating TV Unit Maker",
      "Floating TV Unit Carpenter",
      "Back-Lit TV Unit",
      "Back-Lit TV Unit Design",
      "Back-Lit TV Unit Designer",
      "Back-Lit TV Unit Company",
      "Back-Lit TV Unit Contractor",
      "Back-Lit TV Unit Maker",
      "Back-Lit TV Unit Carpenter",
      "TV Unit with Storage",
      "TV Unit with Storage Design",
      "TV Unit with Storage Designer",
      "TV Unit with Storage Company",
      "TV Unit with Storage Contractor",
      "TV Unit with Storage Maker",
      "TV Unit with Storage Carpenter",
      "TV Unit with Cable Management",
      "TV Unit with Cable Management Design",
      "TV Unit with Cable Management Designer",
      "TV Unit with Cable Management Company",
      "TV Unit with Cable Management Contractor",
      "TV Unit with Cable Management Maker",
      "TV Unit with Cable Management Carpenter",
      "TV Unit with Concealed Wiring",
      "TV Unit with Concealed Wiring Design",
      "TV Unit with Concealed Wiring Designer",
      "TV Unit with Concealed Wiring Company",
      "TV Unit with Concealed Wiring Contractor",
      "TV Unit with Concealed Wiring Maker",
      "TV Unit with Concealed Wiring Carpenter",
      "TV Unit with Back-Lighting",
      "TV Unit with Back-Lighting Design",
      "TV Unit with Back-Lighting Designer",
      "TV Unit with Back-Lighting Company",
      "TV Unit with Back-Lighting Contractor",
      "TV Unit with Back-Lighting Maker",
      "TV Unit with Back-Lighting Carpenter",
      "TV Unit with Accent Lighting",
      "TV Unit with Accent Lighting Design",
      "TV Unit with Accent Lighting Designer",
      "TV Unit with Accent Lighting Company",
      "TV Unit with Accent Lighting Contractor",
      "TV Unit with Accent Lighting Maker",
      "TV Unit with Accent Lighting Carpenter",
      "TV Unit with Stone Finish",
      "TV Unit with Stone Finish Design",
      "TV Unit with Stone Finish Designer",
      "TV Unit with Stone Finish Company",
      "TV Unit with Stone Finish Contractor",
      "TV Unit with Stone Finish Maker",
      "TV Unit with Stone Finish Carpenter",
      "TV Unit with Tile Finish",
      "TV Unit with Tile Finish Design",
      "TV Unit with Tile Finish Designer",
      "TV Unit with Tile Finish Company",
      "TV Unit with Tile Finish Contractor",
      "TV Unit with Tile Finish Maker",
      "TV Unit with Tile Finish Carpenter",
      "TV Unit with Texture Finish",
      "TV Unit with Texture Finish Design",
      "TV Unit with Texture Finish Designer",
      "TV Unit with Texture Finish Company",
      "TV Unit with Texture Finish Contractor",
      "TV Unit with Texture Finish Maker",
      "TV Unit with Texture Finish Carpenter",
      "TV Unit for Living Room",
      "TV Unit for Living Room Design",
      "TV Unit for Living Room Designer",
      "TV Unit for Living Room Company",
      "TV Unit for Living Room Contractor",
      "TV Unit for Living Room Maker",
      "TV Unit for Living Room Carpenter",
      "TV Unit for Bedroom",
      "TV Unit for Bedroom Design",
      "TV Unit for Bedroom Designer",
      "TV Unit for Bedroom Company",
      "TV Unit for Bedroom Contractor",
      "TV Unit for Bedroom Maker",
      "TV Unit for Bedroom Carpenter",
      "TV Unit for Kids Room",
      "TV Unit for Kids Room Design",
      "TV Unit for Kids Room Designer",
      "TV Unit for Kids Room Company",
      "TV Unit for Kids Room Contractor",
      "TV Unit for Kids Room Maker",
      "TV Unit for Kids Room Carpenter",
      "TV Unit for Study Room",
      "TV Unit for Study Room Design",
      "TV Unit for Study Room Designer",
      "TV Unit for Study Room Company",
      "TV Unit for Study Room Contractor",
      "TV Unit for Study Room Maker",
      "TV Unit for Study Room Carpenter",
      "TV Unit for Home Theatre",
      "TV Unit for Home Theatre Design",
      "TV Unit for Home Theatre Designer",
      "TV Unit for Home Theatre Company",
      "TV Unit for Home Theatre Contractor",
      "TV Unit for Home Theatre Maker",
      "TV Unit for Home Theatre Carpenter",
      "TV Unit for Media Room",
      "TV Unit for Media Room Design",
      "TV Unit for Media Room Designer",
      "TV Unit for Media Room Company",
      "TV Unit for Media Room Contractor",
      "TV Unit for Media Room Maker",
      "TV Unit for Media Room Carpenter",
      "TV Unit for Shop",
      "TV Unit for Shop Design",
      "TV Unit for Shop Designer",
      "TV Unit for Shop Company",
      "TV Unit for Shop Contractor",
      "TV Unit for Shop Maker",
      "TV Unit for Shop Carpenter",
      "TV Unit for Office",
      "TV Unit for Office Design",
      "TV Unit for Office Designer",
      "TV Unit for Office Company",
      "TV Unit for Office Contractor",
      "TV Unit for Office Maker",
      "TV Unit for Office Carpenter",
      "TV Unit for Clinic",
      "TV Unit for Clinic Design",
      "TV Unit for Clinic Designer",
      "TV Unit for Clinic Company",
      "TV Unit for Clinic Contractor",
      "TV Unit for Clinic Maker",
      "TV Unit for Clinic Carpenter",
      "TV Unit for Salon",
      "TV Unit for Salon Design",
      "TV Unit for Salon Designer",
      "TV Unit for Salon Company",
      "TV Unit for Salon Contractor",
      "TV Unit for Salon Maker",
      "TV Unit for Salon Carpenter",
      "TV Unit for Gym",
      "TV Unit for Gym Design",
      "TV Unit for Gym Designer",
      "TV Unit for Gym Company",
      "TV Unit for Gym Contractor",
      "TV Unit for Gym Maker",
      "TV Unit for Gym Carpenter",
      "TV Unit for Restaurant",
      "TV Unit for Restaurant Design",
      "TV Unit for Restaurant Designer",
      "TV Unit for Restaurant Company",
      "TV Unit for Restaurant Contractor",
      "TV Unit for Restaurant Maker",
      "TV Unit for Restaurant Carpenter",
      "TV Unit for Cafe",
      "TV Unit for Cafe Design",
      "TV Unit for Cafe Designer",
      "TV Unit for Cafe Company",
      "TV Unit for Cafe Contractor",
      "TV Unit for Cafe Maker",
      "TV Unit for Cafe Carpenter",
      "TV Unit Design Cost",
      "TV Unit Design Budget",
      "TV Unit Design Quotation",
      "TV Unit Design Estimate",
      "TV Unit Design Price",
      "TV Unit Design Planning",
      "TV Unit Design Project Management",
      "TV Unit Design Supervision",
      "TV Unit Design Handover",
      "TV Unit Design Schedule",
      "TV Unit Design Timeline",
      "TV Unit Design Phases",
      "TV Unit Design Stages",
      "TV Unit Design Checklist",
      "TV Unit Design Scope",
      "TV Unit Design Master Plan",
      "TV Unit Design Electrical Plan",
      "TV Unit Design Material Schedule",
      "TV Unit Design Material Approval",
      "TV Unit Design Quality Checks",
      "TV Unit Design Snag List",
      "TV Unit Design After Handover",
      "TV Unit Design Warranty",
      "TV Unit Design Care Guidance",
      "TV Unit Design 3D",
      "TV Unit Design 3D View",
      "TV Unit Design Itemised Quotation",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "TV Unit Design Interior in Rampur",
    description:
      "MTBOSS designs custom TV units  Rampur: wall-mounted, panel, fluted and storage units with neat wiring, lighting and finishing for living rooms and bedrooms. Services include TV unit concept and layout design, wall-mounted and floor-standing unit design, panel, fluted and paneled backdrop design, storage and display cabinet design, concealed wiring and cable management, device and sound system planning, back-lit and accent lighting design, stone, tile and texture finishes.",
    url: "https://www.mtboss.in/tv-unit-design-interior-rampur",
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
      "TV Unit Design Interior, TV Unit Design, TV Unit, TV Units, Custom TV Unit, Custom TV Unit Design, Custom TV Unit Designer, Custom TV Unit Company, Custom TV Unit Contractor, Custom TV Unit Maker, Custom TV Unit Carpenter, TV Unit Interior Designer, TV Unit Interior Design, TV Unit Interior Company, TV Unit Interior Contractor, TV Unit Design and Build, TV Unit Design and Installation, TV Unit Design and Execution, TV Unit Design and Carpentry, TV Unit Design and Electrical, TV Unit Design and Wiring, TV Unit Design and Lighting, TV Unit Design and Paneling, TV Unit Design and Painting, TV Unit Design and Finishing, Wall-Mounted TV Unit, Wall-Mounted TV Unit Design, Wall-Mounted TV Unit Designer, Wall-Mounted TV Unit Company, Wall-Mounted TV Unit Contractor, Wall-Mounted TV Unit Maker, Wall-Mounted TV Unit Carpenter, Floor-Standing TV Unit, Floor-Standing TV Unit Design, Floor-Standing TV Unit Designer, Floor-Standing TV Unit Company, Floor-Standing TV Unit Contractor, Floor-Standing TV Unit Maker, Floor-Standing TV Unit Carpenter, Panel TV Unit, Panel TV Unit Design, Panel TV Unit Designer, Panel TV Unit Company, Panel TV Unit Contractor, Panel TV Unit Maker, Panel TV Unit Carpenter, Fluted TV Unit, Fluted TV Unit Design, Fluted TV Unit Designer, Fluted TV Unit Company, Fluted TV Unit Contractor, Fluted TV Unit Maker, Fluted TV Unit Carpenter, Louvred TV Unit, Louvred TV Unit Design, Louvred TV Unit Designer, Louvred TV Unit Company, Louvred TV Unit Contractor, Louvred TV Unit Maker, Louvred TV Unit Carpenter, Floating TV Unit, Floating TV Unit Design, Floating TV Unit Designer, Floating TV Unit Company, Floating TV Unit Contractor, Floating TV Unit Maker, Floating TV Unit Carpenter, Back-Lit TV Unit, Back-Lit TV Unit Design, Back-Lit TV Unit Designer, Back-Lit TV Unit Company, Back-Lit TV Unit Contractor, Back-Lit TV Unit Maker, Back-Lit TV Unit Carpenter, TV Unit with Storage, TV Unit with Storage Design, TV Unit with Storage Designer, TV Unit with Storage Company, TV Unit with Storage Contractor, TV Unit with Storage Maker, TV Unit with Storage Carpenter, TV Unit with Cable Management, TV Unit with Cable Management Design, TV Unit with Cable Management Designer, TV Unit with Cable Management Company, TV Unit with Cable Management Contractor, TV Unit with Cable Management Maker, TV Unit with Cable Management Carpenter, TV Unit with Concealed Wiring, TV Unit with Concealed Wiring Design, TV Unit with Concealed Wiring Designer, TV Unit with Concealed Wiring Company, TV Unit with Concealed Wiring Contractor, TV Unit with Concealed Wiring Maker, TV Unit with Concealed Wiring Carpenter, TV Unit with Back-Lighting, TV Unit with Back-Lighting Design, TV Unit with Back-Lighting Designer, TV Unit with Back-Lighting Company, TV Unit with Back-Lighting Contractor, TV Unit with Back-Lighting Maker, TV Unit with Back-Lighting Carpenter, TV Unit with Accent Lighting, TV Unit with Accent Lighting Design, TV Unit with Accent Lighting Designer, TV Unit with Accent Lighting Company, TV Unit with Accent Lighting Contractor, TV Unit with Accent Lighting Maker, TV Unit with Accent Lighting Carpenter, TV Unit with Stone Finish, TV Unit with Stone Finish Design, TV Unit with Stone Finish Designer, TV Unit with Stone Finish Company, TV Unit with Stone Finish Contractor, TV Unit with Stone Finish Maker, TV Unit with Stone Finish Carpenter, TV Unit with Tile Finish, TV Unit with Tile Finish Design, TV Unit with Tile Finish Designer, TV Unit with Tile Finish Company, TV Unit with Tile Finish Contractor, TV Unit with Tile Finish Maker, TV Unit with Tile Finish Carpenter, TV Unit with Texture Finish, TV Unit with Texture Finish Design, TV Unit with Texture Finish Designer, TV Unit with Texture Finish Company, TV Unit with Texture Finish Contractor, TV Unit with Texture Finish Maker, TV Unit with Texture Finish Carpenter, TV Unit for Living Room, TV Unit for Living Room Design, TV Unit for Living Room Designer, TV Unit for Living Room Company, TV Unit for Living Room Contractor, TV Unit for Living Room Maker, TV Unit for Living Room Carpenter, TV Unit for Bedroom, TV Unit for Bedroom Design, TV Unit for Bedroom Designer, TV Unit for Bedroom Company, TV Unit for Bedroom Contractor, TV Unit for Bedroom Maker, TV Unit for Bedroom Carpenter, TV Unit for Kids Room, TV Unit for Kids Room Design, TV Unit for Kids Room Designer, TV Unit for Kids Room Company, TV Unit for Kids Room Contractor, TV Unit for Kids Room Maker, TV Unit for Kids Room Carpenter, TV Unit for Study Room, TV Unit for Study Room Design, TV Unit for Study Room Designer, TV Unit for Study Room Company, TV Unit for Study Room Contractor, TV Unit for Study Room Maker, TV Unit for Study Room Carpenter, TV Unit for Home Theatre, TV Unit for Home Theatre Design, TV Unit for Home Theatre Designer, TV Unit for Home Theatre Company, TV Unit for Home Theatre Contractor, TV Unit for Home Theatre Maker, TV Unit for Home Theatre Carpenter, TV Unit for Media Room, TV Unit for Media Room Design, TV Unit for Media Room Designer, TV Unit for Media Room Company, TV Unit for Media Room Contractor, TV Unit for Media Room Maker, TV Unit for Media Room Carpenter, TV Unit for Shop, TV Unit for Shop Design, TV Unit for Shop Designer, TV Unit for Shop Company, TV Unit for Shop Contractor, TV Unit for Shop Maker, TV Unit for Shop Carpenter, TV Unit for Office, TV Unit for Office Design, TV Unit for Office Designer, TV Unit for Office Company, TV Unit for Office Contractor, TV Unit for Office Maker, TV Unit for Office Carpenter, TV Unit for Clinic, TV Unit for Clinic Design, TV Unit for Clinic Designer, TV Unit for Clinic Company, TV Unit for Clinic Contractor, TV Unit for Clinic Maker, TV Unit for Clinic Carpenter, TV Unit for Salon, TV Unit for Salon Design, TV Unit for Salon Designer, TV Unit for Salon Company, TV Unit for Salon Contractor, TV Unit for Salon Maker, TV Unit for Salon Carpenter, TV Unit for Gym, TV Unit for Gym Design, TV Unit for Gym Designer, TV Unit for Gym Company, TV Unit for Gym Contractor, TV Unit for Gym Maker, TV Unit for Gym Carpenter, TV Unit for Restaurant, TV Unit for Restaurant Design, TV Unit for Restaurant Designer, TV Unit for Restaurant Company, TV Unit for Restaurant Contractor, TV Unit for Restaurant Maker, TV Unit for Restaurant Carpenter, TV Unit for Cafe, TV Unit for Cafe Design, TV Unit for Cafe Designer, TV Unit for Cafe Company, TV Unit for Cafe Contractor, TV Unit for Cafe Maker, TV Unit for Cafe Carpenter, TV Unit Design Cost, TV Unit Design Budget, TV Unit Design Quotation, TV Unit Design Estimate, TV Unit Design Price, TV Unit Design Planning, TV Unit Design Project Management, TV Unit Design Supervision, TV Unit Design Handover, TV Unit Design Schedule, TV Unit Design Timeline, TV Unit Design Phases, TV Unit Design Stages, TV Unit Design Checklist, TV Unit Design Scope, TV Unit Design Master Plan, TV Unit Design Electrical Plan, TV Unit Design Material Schedule, TV Unit Design Material Approval, TV Unit Design Quality Checks, TV Unit Design Snag List, TV Unit Design After Handover, TV Unit Design Warranty, TV Unit Design Care Guidance, TV Unit Design 3D, TV Unit Design 3D View and TV Unit Design Itemised Quotation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a TV unit design service include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It includes planning the unit layout, storage, wiring, lighting, materials and finishes, and building and installing the unit.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design a TV unit for a small living room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We design slim, wall-mounted and corner units that save floor space and add hidden storage.",
        },
      },
      {
        "@type": "Question",
        name: "Do you hide the wires?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan concealed conduits and power points so cables stay out of sight.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design a unit for a large or heavy TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We check the wall and choose brackets and supports suited to the TV's size and weight.",
        },
      },
      {
        "@type": "Question",
        name: "Can you add back-lighting and shelves?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan LED lighting, niches, open shelves and closed storage as part of the design.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design bedroom TV units?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We design bedroom units and wall-mounted setups that suit the bed and wardrobe layout.",
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
        name: "How long does a TV unit project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the size and design. We give a schedule with the quotation after reviewing your site.",
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
        name: "TV Unit Design Interior Rampur",
        item: "https://www.mtboss.in/tv-unit-design-interior-rampur",
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