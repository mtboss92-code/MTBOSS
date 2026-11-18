// app/(bareilly_keywords)/budget-interior-designer-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/QuickServices";
import CalculatorCTA from "../../components/CalculatorCTA";
import Services from "../../components/Services";

export const metadata = {
  title: "Budget Interior Designer Rampur | Plan & Control Costs – MTBOSS",

  description:
    "Plan your interior budget with MTBOSS Rampur. Use our budget worksheet, savings tips and itemised quotes for flats, houses and shops. Free consultation and site visit.",

  keywords:
    "budget interior designer Rampur, budget interior design Rampur, budget home interiors Rampur, interior budget planning Rampur, interior budget worksheet Rampur, interior budget calculator Rampur, interior cost planning Rampur, interior cost control Rampur, interior budget tips Rampur, savings tips interiors Rampur, interior quotation Rampur, itemised interior quote Rampur, interior cost estimate Rampur, interior project budget Rampur, phased interior plan Rampur, phased home interiors Rampur, interior planning Rampur, interior design planning Rampur, interior renovation budget Rampur, home renovation budget Rampur, flat interior budget Rampur, independent house interior budget Rampur, old house renovation budget Rampur, rented home interiors Rampur, small shop interior budget Rampur, small clinic interior budget Rampur, small office interior budget Rampur, interior payment planning Rampur, interior change order Rampur, interior cost overrun Rampur, interior quotation comparison Rampur, interior designer near me Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/budget-interior-designer-rampur",
  },

  openGraph: {
    title: "Budget Interior Designer Rampur | Plan & Control Costs – MTBOSS",

    description:
      "Plan your interior budget with MTBOSS Rampur. Use our budget worksheet, savings tips and itemised quotes for flats, houses and shops. Free consultation and site visit.",

    url: "https://www.mtboss.in/budget-interior-designer-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-budget-interior-designer-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Budget Interior Designer Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Budget Interior Designer Rampur | Plan & Control Costs – MTBOSS",

    description:
      "Plan your interior budget with MTBOSS Rampur. Use our budget worksheet, savings tips and itemised quotes for flats, houses and shops. Free consultation and site visit.",

    images: [
      "https://www.mtboss.in/og-budget-interior-designer-rampur.jpg",
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
    url: "https://www.mtboss.in/budget-interior-designer-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-budget-interior-designer-rampur.jpg",
    priceRange: "₹",
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
      "Budget Interior Design",
      "Budget Interior Designer",
      "Budget Home Interiors",
      "Interior Budget Planning",
      "Interior Budget Worksheet",
      "Interior Budget Calculator",
      "Interior Cost Planning",
      "Interior Cost Control",
      "Interior Budget Tips",
      "Savings Tips Interiors",
      "Interior Quotation",
      "Itemised Interior Quote",
      "Interior Cost Estimate",
      "Interior Project Budget",
      "Phased Interior Plan",
      "Phased Home Interiors",
      "Interior Planning",
      "Interior Design Planning",
      "Interior Renovation Budget",
      "Home Renovation Budget",
      "Flat Interior Budget",
      "Independent House Interior Budget",
      "Old House Renovation Budget",
      "Rented Home Interiors",
      "Small Shop Interior Budget",
      "Small Clinic Interior Budget",
      "Small Office Interior Budget",
      "Interior Payment Planning",
      "Interior Change Order",
      "Interior Cost Overrun",
      "Interior Quotation Comparison",
      "Interior Designer Near Me",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Budget Interior Designer in Rampur",
    description:
      "Plan your interior budget with MTBOSS Rampur. Use our budget worksheet, savings tips and itemised quotes for flats, houses and shops. Free consultation and site visit. Services include site visit and measurement before any estimate, priority planning that separates must-do, nice-to-have and later items, itemised quotations that show scope, materials and exclusions, design options at different cost levels where possible, material guidance on where durability matters and where simple finishes are enough, and phased plans that spread the work over time.",
    url: "https://www.mtboss.in/budget-interior-designer-rampur",
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
      "Budget Interior Design, Budget Interior Designer, Budget Home Interiors, Interior Budget Planning, Interior Budget Worksheet, Interior Budget Calculator, Interior Cost Planning, Interior Cost Control, Interior Budget Tips, Savings Tips Interiors, Interior Quotation, Itemised Interior Quote, Interior Cost Estimate, Interior Project Budget, Phased Interior Plan, Phased Home Interiors, Interior Planning, Interior Design Planning, Interior Renovation Budget, Home Renovation Budget, Flat Interior Budget, Independent House Interior Budget, Old House Renovation Budget, Rented Home Interiors, Small Shop Interior Budget, Small Clinic Interior Budget, Small Office Interior Budget, Interior Payment Planning, Interior Change Order, Interior Cost Overrun, Interior Quotation Comparison and Interior Designer Near Me",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I set a realistic budget for home interiors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Decide the total you can safely spend, divide it into hidden work, built-in interiors, finishes and loose furniture, and add a reserve of around 8 to 10%.",
        },
      },
      {
        "@type": "Question",
        name: "What should I include in my interior budget besides carpentry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Include waterproofing, wiring, plumbing, civil repairs, painting, lighting, flooring, curtains, and loose furniture and appliances.",
        },
      },
      {
        "@type": "Question",
        name: "Which items should I never cut costs on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Waterproofing, electrical safety, plumbing, kitchen and wardrobe hardware, and flooring in busy areas usually deserve quality, because they are hard and costly to change later.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the worksheet with any designer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The worksheet helps you organise priorities, and you can share it with any designer to get a clearer quotation.",
        },
      },
      {
        "@type": "Question",
        name: "Is it cheaper to manage workers myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can be for small, simple jobs if you have time and knowledge. For larger projects, coordination errors and delays can cancel the savings, so many families choose a design company.",
        },
      },
      {
        "@type": "Question",
        name: "How can I avoid cost overruns during the project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Finalise your list early, agree the scope in writing, price changes before they happen, track payments and keep a reserve.",
        },
      },
      {
        "@type": "Question",
        name: "How should I structure payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Link payments to completed stages, avoid large advances without reason, keep receipts and hold the final portion until snags are fixed.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design within a fixed budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Share your budget range and priorities, and we will propose a plan, with options where possible, that fits it.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide itemised quotations and 3D designs?",
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
        name: "Budget Interior Designer Rampur",
        item: "https://www.mtboss.in/budget-interior-designer-rampur",
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