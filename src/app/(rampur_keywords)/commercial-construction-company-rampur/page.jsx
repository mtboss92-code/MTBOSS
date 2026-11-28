// app/(bareilly_keywords)/commercial-construction-company-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Commercial Construction Company in Rampur | Shops, Offices & More – MTBOSS",

  description:
    "MTBOSS is a commercial construction company serving Rampur: shops, showrooms, offices, shopping complexes, hotels and clinics, with efficient layouts, clear contracts and milestone schedules. Free consultation.",

  keywords:
    "commercial construction company Rampur, commercial building construction Rampur, shop construction, office building construction, shopping complex construction, showroom building, commercial building contractor, commercial construction cost factors, commercial construction company in Rampur, commercial building construction company Rampur, commercial building construction company in Rampur, commercial building contractor Rampur, commercial building contractor in Rampur, commercial construction contractor Rampur, commercial construction contractor in Rampur, commercial construction builder Rampur, commercial construction builder in Rampur, commercial construction firm Rampur, commercial construction firm in Rampur, commercial construction services Rampur, commercial construction services in Rampur, commercial construction and design Rampur, commercial construction and interior Rampur, commercial construction and civil work Rampur, commercial construction and electrical Rampur, commercial construction and plumbing Rampur, commercial construction and HVAC Rampur, commercial construction and fire safety Rampur, commercial construction and lifts Rampur, commercial construction and waterproofing Rampur, commercial construction and finishing Rampur, commercial construction and interiors Rampur, commercial construction and site development Rampur, commercial construction and phasing Rampur, commercial construction and budget planning Rampur, commercial construction and cost planning Rampur, commercial construction and quotation Rampur, commercial construction and estimate Rampur, commercial construction and schedule Rampur, commercial construction and timeline Rampur, commercial construction and project management Rampur, commercial construction and supervision Rampur, commercial construction and handover Rampur, commercial construction and after handover Rampur, commercial construction and warranty Rampur, commercial construction and care guidance Rampur, commercial construction and 3D design Rampur, commercial construction and itemised quotation Rampur, shop construction company Rampur, shop construction company in Rampur, shop construction contractor Rampur, shop construction contractor in Rampur, shop construction builder Rampur, shop construction builder in Rampur, shop construction firm Rampur, shop construction firm in Rampur, shop construction services Rampur, shop construction services in Rampur, shop construction and design Rampur, shop construction and interior Rampur, shop construction and civil work Rampur, shop construction and electrical Rampur, shop construction and plumbing Rampur, shop construction and HVAC Rampur, shop construction and fire safety Rampur, shop construction and lifts Rampur, shop construction and waterproofing Rampur, shop construction and finishing Rampur, shop construction and interiors Rampur, shop construction and site development Rampur, shop construction and phasing Rampur, shop construction and budget planning Rampur, shop construction and cost planning Rampur, shop construction and quotation Rampur, shop construction and estimate Rampur, shop construction and schedule Rampur, shop construction and timeline Rampur, shop construction and project management Rampur, shop construction and supervision Rampur, shop construction and handover Rampur, shop construction and after handover Rampur, shop construction and warranty Rampur, shop construction and care guidance Rampur, shop construction and 3D design Rampur, shop construction and itemised quotation Rampur, office building construction company Rampur, office building construction company in Rampur, office building construction contractor Rampur, office building construction contractor in Rampur, office building construction builder Rampur, office building construction builder in Rampur, office building construction firm Rampur, office building construction firm in Rampur, office building construction services Rampur, office building construction services in Rampur, office building construction and design Rampur, office building construction and interior Rampur, office building construction and civil work Rampur, office building construction and electrical Rampur, office building construction and plumbing Rampur, office building construction and HVAC Rampur, office building construction and fire safety Rampur, office building construction and lifts Rampur, office building construction and waterproofing Rampur, office building construction and finishing Rampur, office building construction and interiors Rampur, office building construction and site development Rampur, office building construction and phasing Rampur, office building construction and budget planning Rampur, office building construction and cost planning Rampur, office building construction and quotation Rampur, office building construction and estimate Rampur, office building construction and schedule Rampur, office building construction and timeline Rampur, office building construction and project management Rampur, office building construction and supervision Rampur, office building construction and handover Rampur, office building construction and after handover Rampur, office building construction and warranty Rampur, office building construction and care guidance Rampur, office building construction and 3D design Rampur, office building construction and itemised quotation Rampur, shopping complex construction company Rampur, shopping complex construction company in Rampur, shopping complex construction contractor Rampur, shopping complex construction contractor in Rampur, shopping complex construction builder Rampur, shopping complex construction builder in Rampur, shopping complex construction firm Rampur, shopping complex construction firm in Rampur, shopping complex construction services Rampur, shopping complex construction services in Rampur, shopping complex construction and design Rampur, shopping complex construction and interior Rampur, shopping complex construction and civil work Rampur, shopping complex construction and electrical Rampur, shopping complex construction and plumbing Rampur, shopping complex construction and HVAC Rampur, shopping complex construction and fire safety Rampur, shopping complex construction and lifts Rampur, shopping complex construction and waterproofing Rampur, shopping complex construction and finishing Rampur, shopping complex construction and interiors Rampur, shopping complex construction and site development Rampur, shopping complex construction and phasing Rampur, shopping complex construction and budget planning Rampur, shopping complex construction and cost planning Rampur, shopping complex construction and quotation Rampur, shopping complex construction and estimate Rampur, shopping complex construction and schedule Rampur, shopping complex construction and timeline Rampur, shopping complex construction and project management Rampur, shopping complex construction and supervision Rampur, shopping complex construction and handover Rampur, shopping complex construction and after handover Rampur, shopping complex construction and warranty Rampur, shopping complex construction and care guidance Rampur, shopping complex construction and 3D design Rampur, shopping complex construction and itemised quotation Rampur, showroom building company Rampur, showroom building company in Rampur, showroom building contractor Rampur, showroom building contractor in Rampur, showroom building builder Rampur, showroom building builder in Rampur, showroom building firm Rampur, showroom building firm in Rampur, showroom building services Rampur, showroom building services in Rampur, showroom building and design Rampur, showroom building and interior Rampur, showroom building and civil work Rampur, showroom building and electrical Rampur, showroom building and plumbing Rampur, showroom building and HVAC Rampur, showroom building and fire safety Rampur, showroom building and lifts Rampur, showroom building and waterproofing Rampur, showroom building and finishing Rampur, showroom building and interiors Rampur, showroom building and site development Rampur, showroom building and phasing Rampur, showroom building and budget planning Rampur, showroom building and cost planning Rampur, showroom building and quotation Rampur, showroom building and estimate Rampur, showroom building and schedule Rampur, showroom building and timeline Rampur, showroom building and project management Rampur, showroom building and supervision Rampur, showroom building and handover Rampur, showroom building and after handover Rampur, showroom building and warranty Rampur, showroom building and care guidance Rampur, showroom building and 3D design Rampur, showroom building and itemised quotation Rampur, commercial building contractor company Rampur, commercial building contractor firm Rampur, commercial building contractor services Rampur, commercial building contractor and design Rampur, commercial building contractor and interior Rampur, commercial building contractor and civil work Rampur, commercial building contractor and electrical Rampur, commercial building contractor and plumbing Rampur, commercial building contractor and HVAC Rampur, commercial building contractor and fire safety Rampur, commercial building contractor and lifts Rampur, commercial building contractor and waterproofing Rampur, commercial building contractor and finishing Rampur, commercial building contractor and interiors Rampur, commercial building contractor and site development Rampur, commercial building contractor and phasing Rampur, commercial building contractor and budget planning Rampur, commercial building contractor and cost planning Rampur, commercial building contractor and quotation Rampur, commercial building contractor and estimate Rampur, commercial building contractor and schedule Rampur, commercial building contractor and timeline Rampur, commercial building contractor and project management Rampur, commercial building contractor and supervision Rampur, commercial building contractor and handover Rampur, commercial building contractor and after handover Rampur, commercial building contractor and warranty Rampur, commercial building contractor and care guidance Rampur, commercial building contractor and 3D design Rampur, commercial building contractor and itemised quotation Rampur, commercial construction cost Rampur, commercial construction cost in Rampur, commercial construction cost per sq ft Rampur, commercial construction cost factors Rampur, commercial construction budget Rampur, commercial construction budget planning Rampur, commercial construction budget guide Rampur, commercial construction cost breakdown Rampur, commercial construction cost components Rampur, commercial construction cost inclusions Rampur, commercial construction cost exclusions Rampur, commercial construction cost drivers Rampur, commercial construction cost by type Rampur, commercial construction cost by department Rampur, commercial construction cost by zone Rampur, commercial construction cost by finish level Rampur, commercial construction cost by phasing Rampur, commercial construction cost by timeline Rampur, commercial construction cost by site conditions Rampur, commercial construction cost by soil conditions Rampur, commercial construction cost by material prices Rampur, commercial construction cost by labour Rampur, commercial construction cost by utilities Rampur, commercial construction cost by equipment Rampur, commercial construction cost by furniture Rampur, commercial construction cost by IT systems Rampur, commercial construction cost by licences Rampur, commercial construction cost by approvals Rampur, commercial construction cost by HVAC Rampur, commercial construction cost by fire safety Rampur, commercial construction cost by lifts Rampur, commercial construction cost by waterproofing Rampur, commercial construction cost by plumbing Rampur, commercial construction cost by electrical Rampur, commercial construction cost by structure Rampur, commercial construction cost by foundation Rampur, commercial construction cost by masonry Rampur, commercial construction cost by finishes Rampur, commercial construction cost by interiors Rampur, commercial construction cost by site development Rampur, commercial construction cost by professional services Rampur, commercial construction cost by contingency Rampur, commercial construction cost by payment stages Rampur, commercial construction cost by cash flow Rampur, commercial construction cost by hidden costs Rampur, commercial construction cost by change process Rampur, commercial construction cost by after handover support Rampur, commercial construction cost by warranty Rampur, commercial construction cost by care guidance Rampur, commercial construction cost by 3D design Rampur, commercial construction cost by itemised quotation Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/commercial-construction-company-rampur",
  },

  openGraph: {
    title: "Commercial Construction Company in Rampur | Shops, Offices & More – MTBOSS",

    description:
      "MTBOSS is a commercial construction company serving Rampur: shops, showrooms, offices, shopping complexes, hotels and clinics, with efficient layouts, clear contracts and milestone schedules. Free consultation.",

    url: "https://www.mtboss.in/commercial-construction-company-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-commercial-construction-company-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Construction Company in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Commercial Construction Company in Rampur | Shops, Offices & More – MTBOSS",

    description:
      "MTBOSS is a commercial construction company serving Rampur: shops, showrooms, offices, shopping complexes, hotels and clinics, with efficient layouts, clear contracts and milestone schedules. Free consultation.",

    images: [
      "https://www.mtboss.in/og-commercial-construction-company-rampur.jpg",
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
    url: "https://www.mtboss.in/commercial-construction-company-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-commercial-construction-company-rampur.jpg",
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
      "Commercial Construction Company",
      "Commercial Construction Company in Rampur",
      "Commercial Building Construction",
      "Commercial Building Construction in Rampur",
      "Shop Construction",
      "Shop Construction in Rampur",
      "Office Building Construction",
      "Office Building Construction in Rampur",
      "Shopping Complex Construction",
      "Shopping Complex Construction in Rampur",
      "Showroom Building",
      "Showroom Building in Rampur",
      "Commercial Building Contractor",
      "Commercial Building Contractor in Rampur",
      "Commercial Construction Cost Factors",
      "Commercial Construction Cost",
      "Commercial Construction Cost in Rampur",
      "Commercial Construction Cost Per Square Foot",
      "Commercial Construction Cost Factors",
      "Commercial Construction Budget",
      "Commercial Construction Budget Planning",
      "Commercial Construction Budget Guide",
      "Commercial Construction Cost Breakdown",
      "Commercial Construction Cost Components",
      "Commercial Construction Cost Inclusions",
      "Commercial Construction Cost Exclusions",
      "Commercial Construction Cost Drivers",
      "Commercial Construction Cost by Type",
      "Commercial Construction Cost by Department",
      "Commercial Construction Cost by Zone",
      "Commercial Construction Cost by Finish Level",
      "Commercial Construction Cost by Phasing",
      "Commercial Construction Cost by Timeline",
      "Commercial Construction Cost by Site Conditions",
      "Commercial Construction Cost by Soil Conditions",
      "Commercial Construction Cost by Material Prices",
      "Commercial Construction Cost by Labour",
      "Commercial Construction Cost by Utilities",
      "Commercial Construction Cost by Equipment",
      "Commercial Construction Cost by Furniture",
      "Commercial Construction Cost by IT Systems",
      "Commercial Construction Cost by Licences",
      "Commercial Construction Cost by Approvals",
      "Commercial Construction Cost by HVAC",
      "Commercial Construction Cost by Fire Safety",
      "Commercial Construction Cost by Lifts",
      "Commercial Construction Cost by Waterproofing",
      "Commercial Construction Cost by Plumbing",
      "Commercial Construction Cost by Electrical",
      "Commercial Construction Cost by Structure",
      "Commercial Construction Cost by Foundation",
      "Commercial Construction Cost by Masonry",
      "Commercial Construction Cost by Finishes",
      "Commercial Construction Cost by Interiors",
      "Commercial Construction Cost by Site Development",
      "Commercial Construction Cost by Professional Services",
      "Commercial Construction Cost by Contingency",
      "Commercial Construction Cost by Payment Stages",
      "Commercial Construction Cost by Cash Flow",
      "Commercial Construction Cost by Hidden Costs",
      "Commercial Construction Cost by Change Process",
      "Commercial Construction Cost by After Handover Support",
      "Commercial Construction Cost by Warranty",
      "Commercial Construction Cost by Care Guidance",
      "Commercial Construction Cost by 3D Design",
      "Commercial Construction Cost by Itemised Quotation",
      "Commercial Construction Contractor",
      "Commercial Construction Contractor in Rampur",
      "Commercial Construction Builder",
      "Commercial Construction Builder in Rampur",
      "Commercial Construction Firm",
      "Commercial Construction Firm in Rampur",
      "Commercial Construction Services",
      "Commercial Construction Services in Rampur",
      "Commercial Construction and Design",
      "Commercial Construction and Interior",
      "Commercial Construction and Civil Work",
      "Commercial Construction and Electrical",
      "Commercial Construction and Plumbing",
      "Commercial Construction and HVAC",
      "Commercial Construction and Fire Safety",
      "Commercial Construction and Lifts",
      "Commercial Construction and Waterproofing",
      "Commercial Construction and Finishing",
      "Commercial Construction and Interiors",
      "Commercial Construction and Site Development",
      "Commercial Construction and Phasing",
      "Commercial Construction and Budget Planning",
      "Commercial Construction and Cost Planning",
      "Commercial Construction and Quotation",
      "Commercial Construction and Estimate",
      "Commercial Construction and Schedule",
      "Commercial Construction and Timeline",
      "Commercial Construction and Project Management",
      "Commercial Construction and Supervision",
      "Commercial Construction and Handover",
      "Commercial Construction and After Handover",
      "Commercial Construction and Warranty",
      "Commercial Construction and Care Guidance",
      "Commercial Construction and 3D Design",
      "Commercial Construction and Itemised Quotation",
      "Shop Construction Company",
      "Shop Construction Company in Rampur",
      "Shop Construction Contractor",
      "Shop Construction Contractor in Rampur",
      "Shop Construction Builder",
      "Shop Construction Builder in Rampur",
      "Shop Construction Firm",
      "Shop Construction Firm in Rampur",
      "Shop Construction Services",
      "Shop Construction Services in Rampur",
      "Shop Construction and Design",
      "Shop Construction and Interior",
      "Shop Construction and Civil Work",
      "Shop Construction and Electrical",
      "Shop Construction and Plumbing",
      "Shop Construction and HVAC",
      "Shop Construction and Fire Safety",
      "Shop Construction and Lifts",
      "Shop Construction and Waterproofing",
      "Shop Construction and Finishing",
      "Shop Construction and Interiors",
      "Shop Construction and Site Development",
      "Shop Construction and Phasing",
      "Shop Construction and Budget Planning",
      "Shop Construction and Cost Planning",
      "Shop Construction and Quotation",
      "Shop Construction and Estimate",
      "Shop Construction and Schedule",
      "Shop Construction and Timeline",
      "Shop Construction and Project Management",
      "Shop Construction and Supervision",
      "Shop Construction and Handover",
      "Shop Construction and After Handover",
      "Shop Construction and Warranty",
      "Shop Construction and Care Guidance",
      "Shop Construction and 3D Design",
      "Shop Construction and Itemised Quotation",
      "Office Building Construction Company",
      "Office Building Construction Company in Rampur",
      "Office Building Construction Contractor",
      "Office Building Construction Contractor in Rampur",
      "Office Building Construction Builder",
      "Office Building Construction Builder in Rampur",
      "Office Building Construction Firm",
      "Office Building Construction Firm in Rampur",
      "Office Building Construction Services",
      "Office Building Construction Services in Rampur",
      "Office Building Construction and Design",
      "Office Building Construction and Interior",
      "Office Building Construction and Civil Work",
      "Office Building Construction and Electrical",
      "Office Building Construction and Plumbing",
      "Office Building Construction and HVAC",
      "Office Building Construction and Fire Safety",
      "Office Building Construction and Lifts",
      "Office Building Construction and Waterproofing",
      "Office Building Construction and Finishing",
      "Office Building Construction and Interiors",
      "Office Building Construction and Site Development",
      "Office Building Construction and Phasing",
      "Office Building Construction and Budget Planning",
      "Office Building Construction and Cost Planning",
      "Office Building Construction and Quotation",
      "Office Building Construction and Estimate",
      "Office Building Construction and Schedule",
      "Office Building Construction and Timeline",
      "Office Building Construction and Project Management",
      "Office Building Construction and Supervision",
      "Office Building Construction and Handover",
      "Office Building Construction and After Handover",
      "Office Building Construction and Warranty",
      "Office Building Construction and Care Guidance",
      "Office Building Construction and 3D Design",
      "Office Building Construction and Itemised Quotation",
      "Shopping Complex Construction Company",
      "Shopping Complex Construction Company in Rampur",
      "Shopping Complex Construction Contractor",
      "Shopping Complex Construction Contractor in Rampur",
      "Shopping Complex Construction Builder",
      "Shopping Complex Construction Builder in Rampur",
      "Shopping Complex Construction Firm",
      "Shopping Complex Construction Firm in Rampur",
      "Shopping Complex Construction Services",
      "Shopping Complex Construction Services in Rampur",
      "Shopping Complex Construction and Design",
      "Shopping Complex Construction and Interior",
      "Shopping Complex Construction and Civil Work",
      "Shopping Complex Construction and Electrical",
      "Shopping Complex Construction and Plumbing",
      "Shopping Complex Construction and HVAC",
      "Shopping Complex Construction and Fire Safety",
      "Shopping Complex Construction and Lifts",
      "Shopping Complex Construction and Waterproofing",
      "Shopping Complex Construction and Finishing",
      "Shopping Complex Construction and Interiors",
      "Shopping Complex Construction and Site Development",
      "Shopping Complex Construction and Phasing",
      "Shopping Complex Construction and Budget Planning",
      "Shopping Complex Construction and Cost Planning",
      "Shopping Complex Construction and Quotation",
      "Shopping Complex Construction and Estimate",
      "Shopping Complex Construction and Schedule",
      "Shopping Complex Construction and Timeline",
      "Shopping Complex Construction and Project Management",
      "Shopping Complex Construction and Supervision",
      "Shopping Complex Construction and Handover",
      "Shopping Complex Construction and After Handover",
      "Shopping Complex Construction and Warranty",
      "Shopping Complex Construction and Care Guidance",
      "Shopping Complex Construction and 3D Design",
      "Shopping Complex Construction and Itemised Quotation",
      "Showroom Building Company",
      "Showroom Building Company in Rampur",
      "Showroom Building Contractor",
      "Showroom Building Contractor in Rampur",
      "Showroom Building Builder",
      "Showroom Building Builder in Rampur",
      "Showroom Building Firm",
      "Showroom Building Firm in Rampur",
      "Showroom Building Services",
      "Showroom Building Services in Rampur",
      "Showroom Building and Design",
      "Showroom Building and Interior",
      "Showroom Building and Civil Work",
      "Showroom Building and Electrical",
      "Showroom Building and Plumbing",
      "Showroom Building and HVAC",
      "Showroom Building and Fire Safety",
      "Showroom Building and Lifts",
      "Showroom Building and Waterproofing",
      "Showroom Building and Finishing",
      "Showroom Building and Interiors",
      "Showroom Building and Site Development",
      "Showroom Building and Phasing",
      "Showroom Building and Budget Planning",
      "Showroom Building and Cost Planning",
      "Showroom Building and Quotation",
      "Showroom Building and Estimate",
      "Showroom Building and Schedule",
      "Showroom Building and Timeline",
      "Showroom Building and Project Management",
      "Showroom Building and Supervision",
      "Showroom Building and Handover",
      "Showroom Building and After Handover",
      "Showroom Building and Warranty",
      "Showroom Building and Care Guidance",
      "Showroom Building and 3D Design",
      "Showroom Building and Itemised Quotation",
      "Commercial Building Contractor Company",
      "Commercial Building Contractor Firm",
      "Commercial Building Contractor Services",
      "Commercial Building Contractor and Design",
      "Commercial Building Contractor and Interior",
      "Commercial Building Contractor and Civil Work",
      "Commercial Building Contractor and Electrical",
      "Commercial Building Contractor and Plumbing",
      "Commercial Building Contractor and HVAC",
      "Commercial Building Contractor and Fire Safety",
      "Commercial Building Contractor and Lifts",
      "Commercial Building Contractor and Waterproofing",
      "Commercial Building Contractor and Finishing",
      "Commercial Building Contractor and Interiors",
      "Commercial Building Contractor and Site Development",
      "Commercial Building Contractor and Phasing",
      "Commercial Building Contractor and Budget Planning",
      "Commercial Building Contractor and Cost Planning",
      "Commercial Building Contractor and Quotation",
      "Commercial Building Contractor and Estimate",
      "Commercial Building Contractor and Schedule",
      "Commercial Building Contractor and Timeline",
      "Commercial Building Contractor and Project Management",
      "Commercial Building Contractor and Supervision",
      "Commercial Building Contractor and Handover",
      "Commercial Building Contractor and After Handover",
      "Commercial Building Contractor and Warranty",
      "Commercial Building Contractor and Care Guidance",
      "Commercial Building Contractor and 3D Design",
      "Commercial Building Contractor and Itemised Quotation",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Construction Company in Rampur",
    description:
      "MTBOSS is a commercial construction company serving Rampur: shops, showrooms, offices, shopping complexes, hotels and clinics, with efficient layouts, clear contracts and milestone schedules. Free consultation. Services include commercial construction company, commercial building construction, shop construction, office building construction, shopping complex construction, showroom building, commercial building contractor, commercial construction cost factors, commercial construction cost, commercial construction budget, commercial construction estimate, commercial construction quotation, commercial construction BOQ, commercial construction phasing, commercial construction timeline and commercial construction approvals.",
    url: "https://www.mtboss.in/commercial-construction-company-rampur",
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
      "Commercial Construction Company, Commercial Construction Company in Rampur, Commercial Building Construction, Commercial Building Construction in Rampur, Shop Construction, Shop Construction in Rampur, Office Building Construction, Office Building Construction in Rampur, Shopping Complex Construction, Shopping Complex Construction in Rampur, Showroom Building, Showroom Building in Rampur, Commercial Building Contractor, Commercial Building Contractor in Rampur, Commercial Construction Cost Factors, Commercial Construction Cost, Commercial Construction Cost in Rampur, Commercial Construction Cost Per Square Foot, Commercial Construction Cost Factors, Commercial Construction Budget, Commercial Construction Budget Planning, Commercial Construction Budget Guide, Commercial Construction Cost Breakdown, Commercial Construction Cost Components, Commercial Construction Cost Inclusions, Commercial Construction Cost Exclusions, Commercial Construction Cost Drivers, Commercial Construction Cost by Type, Commercial Construction Cost by Department, Commercial Construction Cost by Zone, Commercial Construction Cost by Finish Level, Commercial Construction Cost by Phasing, Commercial Construction Cost by Timeline, Commercial Construction Cost by Site Conditions, Commercial Construction Cost by Soil Conditions, Commercial Construction Cost by Material Prices, Commercial Construction Cost by Labour, Commercial Construction Cost by Utilities, Commercial Construction Cost by Equipment, Commercial Construction Cost by Furniture, Commercial Construction Cost by IT Systems, Commercial Construction Cost by Licences, Commercial Construction Cost by Approvals, Commercial Construction Cost by HVAC, Commercial Construction Cost by Fire Safety, Commercial Construction Cost by Lifts, Commercial Construction Cost by Waterproofing, Commercial Construction Cost by Plumbing, Commercial Construction Cost by Electrical, Commercial Construction Cost by Structure, Commercial Construction Cost by Foundation, Commercial Construction Cost by Masonry, Commercial Construction Cost by Finishes, Commercial Construction Cost by Interiors, Commercial Construction Cost by Site Development, Commercial Construction Cost by Professional Services, Commercial Construction Cost by Contingency, Commercial Construction Cost by Payment Stages, Commercial Construction Cost by Cash Flow, Commercial Construction Cost by Hidden Costs, Commercial Construction Cost by Change Process, Commercial Construction Cost by After Handover Support, Commercial Construction Cost by Warranty, Commercial Construction Cost by Care Guidance, Commercial Construction Cost by 3D Design, Commercial Construction Cost by Itemised Quotation, Commercial Construction Contractor, Commercial Construction Contractor in Rampur, Commercial Construction Builder, Commercial Construction Builder in Rampur, Commercial Construction Firm, Commercial Construction Firm in Rampur, Commercial Construction Services, Commercial Construction Services in Rampur, Commercial Construction and Design, Commercial Construction and Interior, Commercial Construction and Civil Work, Commercial Construction and Electrical, Commercial Construction and Plumbing, Commercial Construction and HVAC, Commercial Construction and Fire Safety, Commercial Construction and Lifts, Commercial Construction and Waterproofing, Commercial Construction and Finishing, Commercial Construction and Interiors, Commercial Construction and Site Development, Commercial Construction and Phasing, Commercial Construction and Budget Planning, Commercial Construction and Cost Planning, Commercial Construction and Quotation, Commercial Construction and Estimate, Commercial Construction and Schedule, Commercial Construction and Timeline, Commercial Construction and Project Management, Commercial Construction and Supervision, Commercial Construction and Handover, Commercial Construction and After Handover, Commercial Construction and Warranty, Commercial Construction and Care Guidance, Commercial Construction and 3D Design, Commercial Construction and Itemised Quotation, Shop Construction Company, Shop Construction Company in Rampur, Shop Construction Contractor, Shop Construction Contractor in Rampur, Shop Construction Builder, Shop Construction Builder in Rampur, Shop Construction Firm, Shop Construction Firm in Rampur, Shop Construction Services, Shop Construction Services in Rampur, Shop Construction and Design, Shop Construction and Interior, Shop Construction and Civil Work, Shop Construction and Electrical, Shop Construction and Plumbing, Shop Construction and HVAC, Shop Construction and Fire Safety, Shop Construction and Lifts, Shop Construction and Waterproofing, Shop Construction and Finishing, Shop Construction and Interiors, Shop Construction and Site Development, Shop Construction and Phasing, Shop Construction and Budget Planning, Shop Construction and Cost Planning, Shop Construction and Quotation, Shop Construction and Estimate, Shop Construction and Schedule, Shop Construction and Timeline, Shop Construction and Project Management, Shop Construction and Supervision, Shop Construction and Handover, Shop Construction and After Handover, Shop Construction and Warranty, Shop Construction and Care Guidance, Shop Construction and 3D Design, Shop Construction and Itemised Quotation, Office Building Construction Company, Office Building Construction Company in Rampur, Office Building Construction Contractor, Office Building Construction Contractor in Rampur, Office Building Construction Builder, Office Building Construction Builder in Rampur, Office Building Construction Firm, Office Building Construction Firm in Rampur, Office Building Construction Services, Office Building Construction Services in Rampur, Office Building Construction and Design, Office Building Construction and Interior, Office Building Construction and Civil Work, Office Building Construction and Electrical, Office Building Construction and Plumbing, Office Building Construction and HVAC, Office Building Construction and Fire Safety, Office Building Construction and Lifts, Office Building Construction and Waterproofing, Office Building Construction and Finishing, Office Building Construction and Interiors, Office Building Construction and Site Development, Office Building Construction and Phasing, Office Building Construction and Budget Planning, Office Building Construction and Cost Planning, Office Building Construction and Quotation, Office Building Construction and Estimate, Office Building Construction and Schedule, Office Building Construction and Timeline, Office Building Construction and Project Management, Office Building Construction and Supervision, Office Building Construction and Handover, Office Building Construction and After Handover, Office Building Construction and Warranty, Office Building Construction and Care Guidance, Office Building Construction and 3D Design, Office Building Construction and Itemised Quotation, Shopping Complex Construction Company, Shopping Complex Construction Company in Rampur, Shopping Complex Construction Contractor, Shopping Complex Construction Contractor in Rampur, Shopping Complex Construction Builder, Shopping Complex Construction Builder in Rampur, Shopping Complex Construction Firm, Shopping Complex Construction Firm in Rampur, Shopping Complex Construction Services, Shopping Complex Construction Services in Rampur, Shopping Complex Construction and Design, Shopping Complex Construction and Interior, Shopping Complex Construction and Civil Work, Shopping Complex Construction and Electrical, Shopping Complex Construction and Plumbing, Shopping Complex Construction and HVAC, Shopping Complex Construction and Fire Safety, Shopping Complex Construction and Lifts, Shopping Complex Construction and Waterproofing, Shopping Complex Construction and Finishing, Shopping Complex Construction and Interiors, Shopping Complex Construction and Site Development, Shopping Complex Construction and Phasing, Shopping Complex Construction and Budget Planning, Shopping Complex Construction and Cost Planning, Shopping Complex Construction and Quotation, Shopping Complex Construction and Estimate, Shopping Complex Construction and Schedule, Shopping Complex Construction and Timeline, Shopping Complex Construction and Project Management, Shopping Complex Construction and Supervision, Shopping Complex Construction and Handover, Shopping Complex Construction and After Handover, Shopping Complex Construction and Warranty, Shopping Complex Construction and Care Guidance, Shopping Complex Construction and 3D Design, Shopping Complex Construction and Itemised Quotation, Showroom Building Company, Showroom Building Company in Rampur, Showroom Building Contractor, Showroom Building Contractor in Rampur, Showroom Building Builder, Showroom Building Builder in Rampur, Showroom Building Firm, Showroom Building Firm in Rampur, Showroom Building Services, Showroom Building Services in Rampur, Showroom Building and Design, Showroom Building and Interior, Showroom Building and Civil Work, Showroom Building and Electrical, Showroom Building and Plumbing, Showroom Building and HVAC, Showroom Building and Fire Safety, Showroom Building and Lifts, Showroom Building and Waterproofing, Showroom Building and Finishing, Showroom Building and Interiors, Showroom Building and Site Development, Showroom Building and Phasing, Showroom Building and Budget Planning, Showroom Building and Cost Planning, Showroom Building and Quotation, Showroom Building and Estimate, Showroom Building and Schedule, Showroom Building and Timeline, Showroom Building and Project Management, Showroom Building and Supervision, Showroom Building and Handover, Showroom Building and After Handover, Showroom Building and Warranty, Showroom Building and Care Guidance, Showroom Building and 3D Design, Showroom Building and Itemised Quotation, Commercial Building Contractor Company, Commercial Building Contractor Firm, Commercial Building Contractor Services, Commercial Building Contractor and Design, Commercial Building Contractor and Interior, Commercial Building Contractor and Civil Work, Commercial Building Contractor and Electrical, Commercial Building Contractor and Plumbing, Commercial Building Contractor and HVAC, Commercial Building Contractor and Fire Safety, Commercial Building Contractor and Lifts, Commercial Building Contractor and Waterproofing, Commercial Building Contractor and Finishing, Commercial Building Contractor and Interiors, Commercial Building Contractor and Site Development, Commercial Building Contractor and Phasing, Commercial Building Contractor and Budget Planning, Commercial Building Contractor and Cost Planning, Commercial Building Contractor and Quotation, Commercial Building Contractor and Estimate, Commercial Building Contractor and Schedule, Commercial Building Contractor and Timeline, Commercial Building Contractor and Project Management, Commercial Building Contractor and Supervision, Commercial Building Contractor and Handover, Commercial Building Contractor and After Handover, Commercial Building Contractor and Warranty, Commercial Building Contractor and Care Guidance, Commercial Building Contractor and 3D Design and Commercial Building Contractor and Itemised Quotation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a commercial construction company do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A commercial construction company builds business properties, including structure, civil work, services coordination, finishes and handover, and coordinates design, approvals support, materials and trades.",
        },
      },
      {
        "@type": "Question",
        name: "What types of commercial buildings do you build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build shops, showrooms, offices, shopping complexes, mixed-use buildings, hotels, restaurants, clinics, schools and similar buildings, depending on the project.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build a shop-cum-office or shopping complex on a small plot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, subject to local rules and approvals. We plan frontage, circulation, parking and floors to make the best use of the plot.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between shell and core and a fully fitted building?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shell and core delivers the structure, common areas and main services, leaving tenant interiors to the tenants. A fully fitted building includes interiors and finishes, ready for use.",
        },
      },
      {
        "@type": "Question",
        name: "How long does commercial construction take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size, floors, design, finishes, approvals and weather. We give a milestone-based schedule after reviewing your plan and site.",
        },
      },
      {
        "@type": "Question",
        name: "Can I build in phases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if the master plan is prepared for the final building. Structure, staircases and services should be designed for the full building, even if you complete floors in stages.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with approvals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prepare technical drawings and help you understand the documents needed. Please confirm current requirements with the concerned authorities.",
        },
      },
      {
        "@type": "Question",
        name: "How are payments structured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payments are linked to completed stages of work, with receipts, written approval for changes and a final amount held until snags are corrected.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact us with your plot details, and we will arrange a site visit. After reviewing your plan, we prepare an itemised quotation. You can also use our online construction calculator for a starting idea.",
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
        name: "Commercial Construction",
        item: "https://www.mtboss.in/commercial-construction",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Commercial Construction Company Rampur",
        item: "https://www.mtboss.in/commercial-construction-company-rampur",
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