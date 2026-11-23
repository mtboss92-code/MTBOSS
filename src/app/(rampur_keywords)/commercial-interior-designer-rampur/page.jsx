// app/(bareilly_keywords)/commercial-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Commercial Interior Designer  Rampur | Office, Shop & More – MTBOSS",

  description:
    "MTBOSS designs and builds commercial interiors  Rampur: offices, shops, showrooms, restaurants, clinics, schools and salons, with planning around your opening date, brand and budget.",

  keywords:
    "commercial interior designer Rampur, commercial interior design Rampur, commercial interiors Rampur, commercial interior designer near me Rampur, commercial interior company Rampur, commercial interior contractor Rampur, commercial interior design company Rampur, commercial fit out Rampur, commercial fit-out Rampur, commercial renovation Rampur, commercial renovation contractor Rampur, commercial interior planning Rampur, commercial space planning Rampur, commercial layout design Rampur, commercial interior design and execution Rampur, commercial interior project management Rampur, commercial interior supervision Rampur, commercial interior handover Rampur, commercial interior schedule Rampur, commercial interior timeline Rampur, commercial interior cost Rampur, commercial interior budget Rampur, commercial interior quotation Rampur, commercial interior estimate Rampur, commercial interior price Rampur, commercial interior 3D design Rampur, commercial interior 3D view Rampur, office interior designer Rampur, office interior design Rampur, office interiors Rampur, office fit out Rampur, office renovation Rampur, office interior planning Rampur, office layout design Rampur, office workstation design Rampur, office cabin design Rampur, office meeting room design Rampur, office reception design Rampur, office false ceiling Rampur, office lighting design Rampur, office electrical plan Rampur, office data and network planning Rampur, office CCTV planning Rampur, shop interior designer Rampur, shop interior design Rampur, shop interiors Rampur, retail interior designer Rampur, retail interior design Rampur, retail shop fit out Rampur, retail shop renovation Rampur, retail shop layout Rampur, retail display unit Rampur, retail shelving Rampur, retail counter design Rampur, retail billing counter Rampur, retail facade design Rampur, retail signage coordination Rampur, showroom interior designer Rampur, showroom interior design Rampur, showroom interiors Rampur, showroom fit out Rampur, showroom renovation Rampur, showroom layout design Rampur, showroom display design Rampur, showroom counter design Rampur, showroom facade design Rampur, restaurant interior designer Rampur, restaurant interior design Rampur, restaurant interiors Rampur, restaurant fit out Rampur, restaurant renovation Rampur, restaurant layout design Rampur, restaurant kitchen flow planning Rampur, restaurant seating design Rampur, restaurant lighting design Rampur, cafe interior designer Rampur, cafe interior design Rampur, cafe interiors Rampur, cafe fit out Rampur, cafe renovation Rampur, salon interior designer Rampur, salon interior design Rampur, salon interiors Rampur, salon fit out Rampur, salon renovation Rampur, beauty studio interior Rampur, beauty studio fit out Rampur, clinic interior designer Rampur, clinic interior design Rampur, clinic interiors Rampur, clinic fit out Rampur, clinic renovation Rampur, hospital interior designer Rampur, hospital interior design Rampur, hospital interiors Rampur, hospital fit out Rampur, hospital renovation Rampur, school interior designer Rampur, school interior design Rampur, school interiors Rampur, school fit out Rampur, school renovation Rampur, coaching centre interior Rampur, coaching centre fit out Rampur, co-working interior Rampur, co-working fit out Rampur, training centre interior Rampur, training centre fit out Rampur, hotel interior designer Rampur, hotel interior design Rampur, hotel interiors Rampur, hotel fit out Rampur, hotel renovation Rampur, banquet hall interior Rampur, banquet hall fit out Rampur, warehouse interior Rampur, warehouse fit out Rampur, showroom-cum-godown interior Rampur, showroom-cum-godown fit out Rampur, commercial interior with electrical Rampur, commercial interior with plumbing Rampur, commercial interior with waterproofing Rampur, commercial interior with civil work Rampur, commercial interior with carpentry Rampur, commercial interior with ceilings Rampur, commercial interior with painting Rampur, commercial interior with flooring Rampur, commercial interior with tiling Rampur, commercial interior with signage Rampur, commercial interior with facade Rampur, commercial interior with CCTV Rampur, commercial interior with AC planning Rampur, commercial interior with fire safety Rampur, commercial interior with accessibility Rampur, commercial interior with acoustics Rampur, commercial interior with landlord rules Rampur, commercial interior with brand guidelines Rampur, commercial interior with franchise guidelines Rampur, commercial interior with itemised quotation Rampur, commercial interior with opening date planning Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/commercial-interior-designer-rampur",
  },

  openGraph: {
    title: "Commercial Interior Designer  Rampur | Office, Shop & More – MTBOSS",

    description:
      "MTBOSS designs and builds commercial interiors  Rampur: offices, shops, showrooms, restaurants, clinics, schools and salons, with planning around your opening date, brand and budget.",

    url: "https://www.mtboss.in/commercial-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-commercial-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Interior Designer in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Commercial Interior Designer  Rampur | Office, Shop & More – MTBOSS",

    description:
      "MTBOSS designs and builds commercial interiors  Rampur: offices, shops, showrooms, restaurants, clinics, schools and salons, with planning around your opening date, brand and budget.",

    images: [
      "https://www.mtboss.in/og-commercial-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/commercial-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-commercial-interior-designer-rampur.jpg",
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
      "Commercial Interior Designer",
      "Commercial Interior Design",
      "Commercial Interiors",
      "Commercial Interior Company",
      "Commercial Interior Contractor",
      "Commercial Interior Design Company",
      "Commercial Fit Out",
      "Commercial Fit-Out",
      "Commercial Renovation",
      "Commercial Renovation Contractor",
      "Commercial Interior Planning",
      "Commercial Space Planning",
      "Commercial Layout Design",
      "Commercial Interior Design and Execution",
      "Commercial Interior Project Management",
      "Commercial Interior Supervision",
      "Commercial Interior Handover",
      "Commercial Interior Schedule",
      "Commercial Interior Timeline",
      "Commercial Interior Cost",
      "Commercial Interior Budget",
      "Commercial Interior Quotation",
      "Commercial Interior Estimate",
      "Commercial Interior Price",
      "Commercial Interior 3D Design",
      "Commercial Interior 3D View",
      "Office Interior Designer",
      "Office Interior Design",
      "Office Interiors",
      "Office Fit Out",
      "Office Renovation",
      "Office Interior Planning",
      "Office Layout Design",
      "Office Workstation Design",
      "Office Cabin Design",
      "Office Meeting Room Design",
      "Office Reception Design",
      "Office False Ceiling",
      "Office Lighting Design",
      "Office Electrical Plan",
      "Office Data and Network Planning",
      "Office CCTV Planning",
      "Shop Interior Designer",
      "Shop Interior Design",
      "Shop Interiors",
      "Retail Interior Designer",
      "Retail Interior Design",
      "Retail Shop Fit Out",
      "Retail Shop Renovation",
      "Retail Shop Layout",
      "Retail Display Unit",
      "Retail Shelving",
      "Retail Counter Design",
      "Retail Billing Counter",
      "Retail Facade Design",
      "Retail Signage Coordination",
      "Showroom Interior Designer",
      "Showroom Interior Design",
      "Showroom Interiors",
      "Showroom Fit Out",
      "Showroom Renovation",
      "Showroom Layout Design",
      "Showroom Display Design",
      "Showroom Counter Design",
      "Showroom Facade Design",
      "Restaurant Interior Designer",
      "Restaurant Interior Design",
      "Restaurant Interiors",
      "Restaurant Fit Out",
      "Restaurant Renovation",
      "Restaurant Layout Design",
      "Restaurant Kitchen Flow Planning",
      "Restaurant Seating Design",
      "Restaurant Lighting Design",
      "Cafe Interior Designer",
      "Cafe Interior Design",
      "Cafe Interiors",
      "Cafe Fit Out",
      "Cafe Renovation",
      "Salon Interior Designer",
      "Salon Interior Design",
      "Salon Interiors",
      "Salon Fit Out",
      "Salon Renovation",
      "Beauty Studio Interior",
      "Beauty Studio Fit Out",
      "Clinic Interior Designer",
      "Clinic Interior Design",
      "Clinic Interiors",
      "Clinic Fit Out",
      "Clinic Renovation",
      "Hospital Interior Designer",
      "Hospital Interior Design",
      "Hospital Interiors",
      "Hospital Fit Out",
      "Hospital Renovation",
      "School Interior Designer",
      "School Interior Design",
      "School Interiors",
      "School Fit Out",
      "School Renovation",
      "Coaching Centre Interior",
      "Coaching Centre Fit Out",
      "Co-Working Interior",
      "Co-Working Fit Out",
      "Training Centre Interior",
      "Training Centre Fit Out",
      "Hotel Interior Designer",
      "Hotel Interior Design",
      "Hotel Interiors",
      "Hotel Fit Out",
      "Hotel Renovation",
      "Banquet Hall Interior",
      "Banquet Hall Fit Out",
      "Warehouse Interior",
      "Warehouse Fit Out",
      "Showroom-Cum-Godown Interior",
      "Showroom-Cum-Godown Fit Out",
      "Commercial Interior with Electrical",
      "Commercial Interior with Plumbing",
      "Commercial Interior with Waterproofing",
      "Commercial Interior with Civil Work",
      "Commercial Interior with Carpentry",
      "Commercial Interior with Ceilings",
      "Commercial Interior with Painting",
      "Commercial Interior with Flooring",
      "Commercial Interior with Tiling",
      "Commercial Interior with Signage",
      "Commercial Interior with Facade",
      "Commercial Interior with CCTV",
      "Commercial Interior with AC Planning",
      "Commercial Interior with Fire Safety",
      "Commercial Interior with Accessibility",
      "Commercial Interior with Acoustics",
      "Commercial Interior with Landlord Rules",
      "Commercial Interior with Brand Guidelines",
      "Commercial Interior with Franchise Guidelines",
      "Commercial Interior with Itemised Quotation",
      "Commercial Interior with Opening Date Planning",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Interior Designer in Rampur",
    description:
      "MTBOSS designs and builds commercial interiors  Rampur: offices, shops, showrooms, restaurants, clinics, schools and salons, with planning around your opening date, brand and budget. Services include space planning and layout design, brand-based interior concepts and 3D visuals, reception, counters and customer areas, workstations, cabins and meeting rooms, display units, shelving and wall systems, false ceilings and lighting design, flooring, wall finishes and cladding, custom furniture, partitions and storage, facade, glass front and signage coordination.",
    url: "https://www.mtboss.in/commercial-interior-designer-rampur",
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
      "Commercial Interior Designer, Commercial Interior Design, Commercial Interiors, Commercial Interior Company, Commercial Interior Contractor, Commercial Interior Design Company, Commercial Fit Out, Commercial Fit-Out, Commercial Renovation, Commercial Renovation Contractor, Commercial Interior Planning, Commercial Space Planning, Commercial Layout Design, Commercial Interior Design and Execution, Commercial Interior Project Management, Commercial Interior Supervision, Commercial Interior Handover, Commercial Interior Schedule, Commercial Interior Timeline, Commercial Interior Cost, Commercial Interior Budget, Commercial Interior Quotation, Commercial Interior Estimate, Commercial Interior Price, Commercial Interior 3D Design, Commercial Interior 3D View, Office Interior Designer, Office Interior Design, Office Interiors, Office Fit Out, Office Renovation, Office Interior Planning, Office Layout Design, Office Workstation Design, Office Cabin Design, Office Meeting Room Design, Office Reception Design, Office False Ceiling, Office Lighting Design, Office Electrical Plan, Office Data and Network Planning, Office CCTV Planning, Shop Interior Designer, Shop Interior Design, Shop Interiors, Retail Interior Designer, Retail Interior Design, Retail Shop Fit Out, Retail Shop Renovation, Retail Shop Layout, Retail Display Unit, Retail Shelving, Retail Counter Design, Retail Billing Counter, Retail Facade Design, Retail Signage Coordination, Showroom Interior Designer, Showroom Interior Design, Showroom Interiors, Showroom Fit Out, Showroom Renovation, Showroom Layout Design, Showroom Display Design, Showroom Counter Design, Showroom Facade Design, Restaurant Interior Designer, Restaurant Interior Design, Restaurant Interiors, Restaurant Fit Out, Restaurant Renovation, Restaurant Layout Design, Restaurant Kitchen Flow Planning, Restaurant Seating Design, Restaurant Lighting Design, Cafe Interior Designer, Cafe Interior Design, Cafe Interiors, Cafe Fit Out, Cafe Renovation, Salon Interior Designer, Salon Interior Design, Salon Interiors, Salon Fit Out, Salon Renovation, Beauty Studio Interior, Beauty Studio Fit Out, Clinic Interior Designer, Clinic Interior Design, Clinic Interiors, Clinic Fit Out, Clinic Renovation, Hospital Interior Designer, Hospital Interior Design, Hospital Interiors, Hospital Fit Out, Hospital Renovation, School Interior Designer, School Interior Design, School Interiors, School Fit Out, School Renovation, Coaching Centre Interior, Coaching Centre Fit Out, Co-Working Interior, Co-Working Fit Out, Training Centre Interior, Training Centre Fit Out, Hotel Interior Designer, Hotel Interior Design, Hotel Interiors, Hotel Fit Out, Hotel Renovation, Banquet Hall Interior, Banquet Hall Fit Out, Warehouse Interior, Warehouse Fit Out, Showroom-Cum-Godown Interior, Showroom-Cum-Godown Fit Out, Commercial Interior with Electrical, Commercial Interior with Plumbing, Commercial Interior with Waterproofing, Commercial Interior with Civil Work, Commercial Interior with Carpentry, Commercial Interior with Ceilings, Commercial Interior with Painting, Commercial Interior with Flooring, Commercial Interior with Tiling, Commercial Interior with Signage, Commercial Interior with Facade, Commercial Interior with CCTV, Commercial Interior with AC Planning, Commercial Interior with Fire Safety, Commercial Interior with Accessibility, Commercial Interior with Acoustics, Commercial Interior with Landlord Rules, Commercial Interior with Brand Guidelines, Commercial Interior with Franchise Guidelines, Commercial Interior with Itemised Quotation and Commercial Interior with Opening Date Planning",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a commercial interior designer do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A commercial interior designer plans the layout, finishes, lighting, furniture and technical provisions of a business space, and manages execution so that it supports customers, staff and brand.",
        },
      },
      {
        "@type": "Question",
        name: "What types of commercial spaces do you design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We design offices, shops, showrooms, restaurants and cafés, salons, clinics, schools and other business spaces. If your type is not listed, we will discuss your needs.",
        },
      },
      {
        "@type": "Question",
        name: "How is a commercial interior different from a residential one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commercial interiors face heavier wear, more regulations, technology needs, tighter schedules and business goals such as customer flow, brand and efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work to my opening date?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prepare a schedule linked to your target date and tell you early if anything may affect it.",
        },
      },
      {
        "@type": "Question",
        name: "Can you follow my franchise brand's design guidelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We study the brand manual and execute to its drawings and specifications, coordinating with the brand team where needed.",
        },
      },
      {
        "@type": "Question",
        name: "Can you renovate while my business keeps running?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can plan phased work and after-hours tasks to reduce disruption, depending on the scope and your operations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle electrical, data, AC and CCTV provisions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan and coordinate these as part of the design and execution, and work with your equipment vendors.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with approvals and landlord requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We help you understand the technical documents and common requirements, and we plan around landlord and building rules. Please confirm current legal requirements with the concerned authorities.",
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
        name: "Commercial Interior Designer Rampur",
        item: "https://www.mtboss.in/commercial-interior-designer-rampur",
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