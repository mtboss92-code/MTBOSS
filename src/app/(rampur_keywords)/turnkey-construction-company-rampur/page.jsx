// app/(bareilly_keywords)/turnkey-construction-company-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Turnkey Construction Company  Rampur | Design to Handover – MTBOSS",

  description:
    "MTBOSS is a turnkey construction company serving Rampur: design, construction, interiors and handover under one team and one agreement for homes, commercial and industrial projects.",

  keywords:
    "turnkey construction company Rampur, turnkey construction company in Rampur, turnkey construction Rampur, turnkey construction contractor Rampur, turnkey construction builder Rampur, turnkey construction firm Rampur, turnkey construction services Rampur, turnkey construction and design Rampur, turnkey construction and interior Rampur, turnkey construction and civil work Rampur, turnkey construction and electrical Rampur, turnkey construction and plumbing Rampur, turnkey construction and HVAC Rampur, turnkey construction and fire safety Rampur, turnkey construction and lifts Rampur, turnkey construction and waterproofing Rampur, turnkey construction and finishing Rampur, turnkey construction and interiors Rampur, turnkey construction and site development Rampur, turnkey construction and phasing Rampur, turnkey construction and budget planning Rampur, turnkey construction and cost planning Rampur, turnkey construction and quotation Rampur, turnkey construction and estimate Rampur, turnkey construction and schedule Rampur, turnkey construction and timeline Rampur, turnkey construction and project management Rampur, turnkey construction and supervision Rampur, turnkey construction and handover Rampur, turnkey construction and after handover Rampur, turnkey construction and warranty Rampur, turnkey construction and care guidance Rampur, turnkey construction and 3D design Rampur, turnkey construction and itemised quotation Rampur, turnkey project contractor Rampur, turnkey project contractor in Rampur, turnkey project contractor near me Rampur, turnkey project contractor company Rampur, turnkey project contractor firm Rampur, turnkey project contractor services Rampur, turnkey project contractor and design Rampur, turnkey project contractor and interior Rampur, turnkey project contractor and civil work Rampur, turnkey project contractor and electrical Rampur, turnkey project contractor and plumbing Rampur, turnkey project contractor and HVAC Rampur, turnkey project contractor and fire safety Rampur, turnkey project contractor and lifts Rampur, turnkey project contractor and waterproofing Rampur, turnkey project contractor and finishing Rampur, turnkey project contractor and interiors Rampur, turnkey project contractor and site development Rampur, turnkey project contractor and phasing Rampur, turnkey project contractor and budget planning Rampur, turnkey project contractor and cost planning Rampur, turnkey project contractor and quotation Rampur, turnkey project contractor and estimate Rampur, turnkey project contractor and schedule Rampur, turnkey project contractor and timeline Rampur, turnkey project contractor and project management Rampur, turnkey project contractor and supervision Rampur, turnkey project contractor and handover Rampur, turnkey project contractor and after handover Rampur, turnkey project contractor and warranty Rampur, turnkey project contractor and care guidance Rampur, turnkey project contractor and 3D design Rampur, turnkey project contractor and itemised quotation Rampur, turnkey project cost Rampur, turnkey project cost in Rampur, turnkey project cost per sq ft Rampur, turnkey project cost factors Rampur, turnkey project budget Rampur, turnkey project budget planning Rampur, turnkey project budget guide Rampur, turnkey project cost breakdown Rampur, turnkey project cost components Rampur, turnkey project cost inclusions Rampur, turnkey project cost exclusions Rampur, turnkey project cost drivers Rampur, turnkey project cost by type Rampur, turnkey project cost by department Rampur, turnkey project cost by zone Rampur, turnkey project cost by finish level Rampur, turnkey project cost by phasing Rampur, turnkey project cost by timeline Rampur, turnkey project cost by site conditions Rampur, turnkey project cost by soil conditions Rampur, turnkey project cost by material prices Rampur, turnkey project cost by labour Rampur, turnkey project cost by utilities Rampur, turnkey project cost by equipment Rampur, turnkey project cost by furniture Rampur, turnkey project cost by IT systems Rampur, turnkey project cost by licences Rampur, turnkey project cost by approvals Rampur, turnkey project cost by HVAC Rampur, turnkey project cost by fire safety Rampur, turnkey project cost by lifts Rampur, turnkey project cost by waterproofing Rampur, turnkey project cost by plumbing Rampur, turnkey project cost by electrical Rampur, turnkey project cost by structure Rampur, turnkey project cost by foundation Rampur, turnkey project cost by masonry Rampur, turnkey project cost by finishes Rampur, turnkey project cost by interiors Rampur, turnkey project cost by site development Rampur, turnkey project cost by professional services Rampur, turnkey project cost by contingency Rampur, turnkey project cost by payment stages Rampur, turnkey project cost by cash flow Rampur, turnkey project cost by hidden costs Rampur, turnkey project cost by change process Rampur, turnkey project cost by after handover support Rampur, turnkey project cost by warranty Rampur, turnkey project cost by care guidance Rampur, turnkey project cost by 3D design Rampur, turnkey project cost by itemised quotation Rampur, turnkey home construction Rampur, turnkey home construction company Rampur, turnkey home construction contractor Rampur, turnkey home construction builder Rampur, turnkey home construction firm Rampur, turnkey home construction services Rampur, turnkey home construction and design Rampur, turnkey home construction and interior Rampur, turnkey home construction and civil work Rampur, turnkey home construction and electrical Rampur, turnkey home construction and plumbing Rampur, turnkey home construction and HVAC Rampur, turnkey home construction and fire safety Rampur, turnkey home construction and lifts Rampur, turnkey home construction and waterproofing Rampur, turnkey home construction and finishing Rampur, turnkey home construction and interiors Rampur, turnkey home construction and site development Rampur, turnkey home construction and phasing Rampur, turnkey home construction and budget planning Rampur, turnkey home construction and cost planning Rampur, turnkey home construction and quotation Rampur, turnkey home construction and estimate Rampur, turnkey home construction and schedule Rampur, turnkey home construction and timeline Rampur, turnkey home construction and project management Rampur, turnkey home construction and supervision Rampur, turnkey home construction and handover Rampur, turnkey home construction and after handover Rampur, turnkey home construction and warranty Rampur, turnkey home construction and care guidance Rampur, turnkey home construction and 3D design Rampur, turnkey home construction and itemised quotation Rampur, turnkey commercial construction Rampur, turnkey commercial construction company Rampur, turnkey commercial construction contractor Rampur, turnkey commercial construction builder Rampur, turnkey commercial construction firm Rampur, turnkey commercial construction services Rampur, turnkey commercial construction and design Rampur, turnkey commercial construction and interior Rampur, turnkey commercial construction and civil work Rampur, turnkey commercial construction and electrical Rampur, turnkey commercial construction and plumbing Rampur, turnkey commercial construction and HVAC Rampur, turnkey commercial construction and fire safety Rampur, turnkey commercial construction and lifts Rampur, turnkey commercial construction and waterproofing Rampur, turnkey commercial construction and finishing Rampur, turnkey commercial construction and interiors Rampur, turnkey commercial construction and site development Rampur, turnkey commercial construction and phasing Rampur, turnkey commercial construction and budget planning Rampur, turnkey commercial construction and cost planning Rampur, turnkey commercial construction and quotation Rampur, turnkey commercial construction and estimate Rampur, turnkey commercial construction and schedule Rampur, turnkey commercial construction and timeline Rampur, turnkey commercial construction and project management Rampur, turnkey commercial construction and supervision Rampur, turnkey commercial construction and handover Rampur, turnkey commercial construction and after handover Rampur, turnkey commercial construction and warranty Rampur, turnkey commercial construction and care guidance Rampur, turnkey commercial construction and 3D design Rampur, turnkey commercial construction and itemised quotation Rampur, turnkey industrial construction Rampur, turnkey industrial construction company Rampur, turnkey industrial construction contractor Rampur, turnkey industrial construction builder Rampur, turnkey industrial construction firm Rampur, turnkey industrial construction services Rampur, turnkey industrial construction and design Rampur, turnkey industrial construction and interior Rampur, turnkey industrial construction and civil work Rampur, turnkey industrial construction and electrical Rampur, turnkey industrial construction and plumbing Rampur, turnkey industrial construction and HVAC Rampur, turnkey industrial construction and fire safety Rampur, turnkey industrial construction and lifts Rampur, turnkey industrial construction and waterproofing Rampur, turnkey industrial construction and finishing Rampur, turnkey industrial construction and interiors Rampur, turnkey industrial construction and site development Rampur, turnkey industrial construction and phasing Rampur, turnkey industrial construction and budget planning Rampur, turnkey industrial construction and cost planning Rampur, turnkey industrial construction and quotation Rampur, turnkey industrial construction and estimate Rampur, turnkey industrial construction and schedule Rampur, turnkey industrial construction and timeline Rampur, turnkey industrial construction and project management Rampur, turnkey industrial construction and supervision Rampur, turnkey industrial construction and handover Rampur, turnkey industrial construction and after handover Rampur, turnkey industrial construction and warranty Rampur, turnkey industrial construction and care guidance Rampur, turnkey industrial construction and 3D design Rampur, turnkey industrial construction and itemised quotation Rampur, turnkey interior contractor Rampur, turnkey interior contractor company Rampur, turnkey interior contractor firm Rampur, turnkey interior contractor services Rampur, turnkey interior contractor and design Rampur, turnkey interior contractor and civil work Rampur, turnkey interior contractor and electrical Rampur, turnkey interior contractor and plumbing Rampur, turnkey interior contractor and HVAC Rampur, turnkey interior contractor and fire safety Rampur, turnkey interior contractor and lifts Rampur, turnkey interior contractor and waterproofing Rampur, turnkey interior contractor and finishing Rampur, turnkey interior contractor and interiors Rampur, turnkey interior contractor and site development Rampur, turnkey interior contractor and phasing Rampur, turnkey interior contractor and budget planning Rampur, turnkey interior contractor and cost planning Rampur, turnkey interior contractor and quotation Rampur, turnkey interior contractor and estimate Rampur, turnkey interior contractor and schedule Rampur, turnkey interior contractor and timeline Rampur, turnkey interior contractor and project management Rampur, turnkey interior contractor and supervision Rampur, turnkey interior contractor and handover Rampur, turnkey interior contractor and after handover Rampur, turnkey interior contractor and warranty Rampur, turnkey interior contractor and care guidance Rampur, turnkey interior contractor and 3D design Rampur, turnkey interior contractor and itemised quotation Rampur, turnkey renovation contractor Rampur, turnkey renovation contractor company Rampur, turnkey renovation contractor firm Rampur, turnkey renovation contractor services Rampur, turnkey renovation contractor and design Rampur, turnkey renovation contractor and civil work Rampur, turnkey renovation contractor and electrical Rampur, turnkey renovation contractor and plumbing Rampur, turnkey renovation contractor and HVAC Rampur, turnkey renovation contractor and fire safety Rampur, turnkey renovation contractor and lifts Rampur, turnkey renovation contractor and waterproofing Rampur, turnkey renovation contractor and finishing Rampur, turnkey renovation contractor and interiors Rampur, turnkey renovation contractor and site development Rampur, turnkey renovation contractor and phasing Rampur, turnkey renovation contractor and budget planning Rampur, turnkey renovation contractor and cost planning Rampur, turnkey renovation contractor and quotation Rampur, turnkey renovation contractor and estimate Rampur, turnkey renovation contractor and schedule Rampur, turnkey renovation contractor and timeline Rampur, turnkey renovation contractor and project management Rampur, turnkey renovation contractor and supervision Rampur, turnkey renovation contractor and handover Rampur, turnkey renovation contractor and after handover Rampur, turnkey renovation contractor and warranty Rampur, turnkey renovation contractor and care guidance Rampur, turnkey renovation contractor and 3D design Rampur, turnkey renovation contractor and itemised quotation Rampur, turnkey project management Rampur, turnkey project management company Rampur, turnkey project management contractor Rampur, turnkey project management firm Rampur, turnkey project management services Rampur, turnkey project management and design Rampur, turnkey project management and interior Rampur, turnkey project management and civil work Rampur, turnkey project management and electrical Rampur, turnkey project management and plumbing Rampur, turnkey project management and HVAC Rampur, turnkey project management and fire safety Rampur, turnkey project management and lifts Rampur, turnkey project management and waterproofing Rampur, turnkey project management and finishing Rampur, turnkey project management and interiors Rampur, turnkey project management and site development Rampur, turnkey project management and phasing Rampur, turnkey project management and budget planning Rampur, turnkey project management and cost planning Rampur, turnkey project management and quotation Rampur, turnkey project management and estimate Rampur, turnkey project management and schedule Rampur, turnkey project management and timeline Rampur, turnkey project management and project management Rampur, turnkey project management and supervision Rampur, turnkey project management and handover Rampur, turnkey project management and after handover Rampur, turnkey project management and warranty Rampur, turnkey project management and care guidance Rampur, turnkey project management and 3D design Rampur, turnkey project management and itemised quotation Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/turnkey-construction-company-rampur",
  },

  openGraph: {
    title: "Turnkey Construction Company  Rampur | Design to Handover – MTBOSS",

    description:
      "MTBOSS is a turnkey construction company serving Rampur: design, construction, interiors and handover under one team and one agreement for homes, commercial and industrial projects.",

    url: "https://www.mtboss.in/turnkey-construction-company-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-turnkey-construction-company-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Turnkey Construction Company in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Turnkey Construction Company  Rampur | Design to Handover – MTBOSS",

    description:
      "MTBOSS is a turnkey construction company serving Rampur: design, construction, interiors and handover under one team and one agreement for homes, commercial and industrial projects.",

    images: [
      "https://www.mtboss.in/og-turnkey-construction-company-rampur.jpg",
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
    url: "https://www.mtboss.in/turnkey-construction-company-rampur",
    telephone: "+91-9458410866",
    email: "inquiry@mtboss.in",
    image:
      "https://www.mtboss.in/og-turnkey-construction-company-rampur.jpg",
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
      "Turnkey Construction Company",
      "Turnkey Construction Company in Rampur",
      "Turnkey Construction",
      "Turnkey Construction Contractor",
      "Turnkey Construction Builder",
      "Turnkey Construction Firm",
      "Turnkey Construction Services",
      "Turnkey Construction and Design",
      "Turnkey Construction and Interior",
      "Turnkey Construction and Civil Work",
      "Turnkey Construction and Electrical",
      "Turnkey Construction and Plumbing",
      "Turnkey Construction and HVAC",
      "Turnkey Construction and Fire Safety",
      "Turnkey Construction and Lifts",
      "Turnkey Construction and Waterproofing",
      "Turnkey Construction and Finishing",
      "Turnkey Construction and Interiors",
      "Turnkey Construction and Site Development",
      "Turnkey Construction and Phasing",
      "Turnkey Construction and Budget Planning",
      "Turnkey Construction and Cost Planning",
      "Turnkey Construction and Quotation",
      "Turnkey Construction and Estimate",
      "Turnkey Construction and Schedule",
      "Turnkey Construction and Timeline",
      "Turnkey Construction and Project Management",
      "Turnkey Construction and Supervision",
      "Turnkey Construction and Handover",
      "Turnkey Construction and After Handover",
      "Turnkey Construction and Warranty",
      "Turnkey Construction and Care Guidance",
      "Turnkey Construction and 3D Design",
      "Turnkey Construction and Itemised Quotation",
      "Turnkey Project Contractor",
      "Turnkey Project Contractor in Rampur",
      "Turnkey Project Contractor Company",
      "Turnkey Project Contractor Firm",
      "Turnkey Project Contractor Services",
      "Turnkey Project Contractor and Design",
      "Turnkey Project Contractor and Interior",
      "Turnkey Project Contractor and Civil Work",
      "Turnkey Project Contractor and Electrical",
      "Turnkey Project Contractor and Plumbing",
      "Turnkey Project Contractor and HVAC",
      "Turnkey Project Contractor and Fire Safety",
      "Turnkey Project Contractor and Lifts",
      "Turnkey Project Contractor and Waterproofing",
      "Turnkey Project Contractor and Finishing",
      "Turnkey Project Contractor and Interiors",
      "Turnkey Project Contractor and Site Development",
      "Turnkey Project Contractor and Phasing",
      "Turnkey Project Contractor and Budget Planning",
      "Turnkey Project Contractor and Cost Planning",
      "Turnkey Project Contractor and Quotation",
      "Turnkey Project Contractor and Estimate",
      "Turnkey Project Contractor and Schedule",
      "Turnkey Project Contractor and Timeline",
      "Turnkey Project Contractor and Project Management",
      "Turnkey Project Contractor and Supervision",
      "Turnkey Project Contractor and Handover",
      "Turnkey Project Contractor and After Handover",
      "Turnkey Project Contractor and Warranty",
      "Turnkey Project Contractor and Care Guidance",
      "Turnkey Project Contractor and 3D Design",
      "Turnkey Project Contractor and Itemised Quotation",
      "Turnkey Project Cost",
      "Turnkey Project Cost in Rampur",
      "Turnkey Project Cost Per Square Foot",
      "Turnkey Project Cost Factors",
      "Turnkey Project Budget",
      "Turnkey Project Budget Planning",
      "Turnkey Project Budget Guide",
      "Turnkey Project Cost Breakdown",
      "Turnkey Project Cost Components",
      "Turnkey Project Cost Inclusions",
      "Turnkey Project Cost Exclusions",
      "Turnkey Project Cost Drivers",
      "Turnkey Project Cost by Type",
      "Turnkey Project Cost by Department",
      "Turnkey Project Cost by Zone",
      "Turnkey Project Cost by Finish Level",
      "Turnkey Project Cost by Phasing",
      "Turnkey Project Cost by Timeline",
      "Turnkey Project Cost by Site Conditions",
      "Turnkey Project Cost by Soil Conditions",
      "Turnkey Project Cost by Material Prices",
      "Turnkey Project Cost by Labour",
      "Turnkey Project Cost by Utilities",
      "Turnkey Project Cost by Equipment",
      "Turnkey Project Cost by Furniture",
      "Turnkey Project Cost by IT Systems",
      "Turnkey Project Cost by Licences",
      "Turnkey Project Cost by Approvals",
      "Turnkey Project Cost by HVAC",
      "Turnkey Project Cost by Fire Safety",
      "Turnkey Project Cost by Lifts",
      "Turnkey Project Cost by Waterproofing",
      "Turnkey Project Cost by Plumbing",
      "Turnkey Project Cost by Electrical",
      "Turnkey Project Cost by Structure",
      "Turnkey Project Cost by Foundation",
      "Turnkey Project Cost by Masonry",
      "Turnkey Project Cost by Finishes",
      "Turnkey Project Cost by Interiors",
      "Turnkey Project Cost by Site Development",
      "Turnkey Project Cost by Professional Services",
      "Turnkey Project Cost by Contingency",
      "Turnkey Project Cost by Payment Stages",
      "Turnkey Project Cost by Cash Flow",
      "Turnkey Project Cost by Hidden Costs",
      "Turnkey Project Cost by Change Process",
      "Turnkey Project Cost by After Handover Support",
      "Turnkey Project Cost by Warranty",
      "Turnkey Project Cost by Care Guidance",
      "Turnkey Project Cost by 3D Design",
      "Turnkey Project Cost by Itemised Quotation",
      "Turnkey Home Construction",
      "Turnkey Home Construction Company",
      "Turnkey Home Construction Contractor",
      "Turnkey Home Construction Builder",
      "Turnkey Home Construction Firm",
      "Turnkey Home Construction Services",
      "Turnkey Home Construction and Design",
      "Turnkey Home Construction and Interior",
      "Turnkey Home Construction and Civil Work",
      "Turnkey Home Construction and Electrical",
      "Turnkey Home Construction and Plumbing",
      "Turnkey Home Construction and HVAC",
      "Turnkey Home Construction and Fire Safety",
      "Turnkey Home Construction and Lifts",
      "Turnkey Home Construction and Waterproofing",
      "Turnkey Home Construction and Finishing",
      "Turnkey Home Construction and Interiors",
      "Turnkey Home Construction and Site Development",
      "Turnkey Home Construction and Phasing",
      "Turnkey Home Construction and Budget Planning",
      "Turnkey Home Construction and Cost Planning",
      "Turnkey Home Construction and Quotation",
      "Turnkey Home Construction and Estimate",
      "Turnkey Home Construction and Schedule",
      "Turnkey Home Construction and Timeline",
      "Turnkey Home Construction and Project Management",
      "Turnkey Home Construction and Supervision",
      "Turnkey Home Construction and Handover",
      "Turnkey Home Construction and After Handover",
      "Turnkey Home Construction and Warranty",
      "Turnkey Home Construction and Care Guidance",
      "Turnkey Home Construction and 3D Design",
      "Turnkey Home Construction and Itemised Quotation",
      "Turnkey Commercial Construction",
      "Turnkey Commercial Construction Company",
      "Turnkey Commercial Construction Contractor",
      "Turnkey Commercial Construction Builder",
      "Turnkey Commercial Construction Firm",
      "Turnkey Commercial Construction Services",
      "Turnkey Commercial Construction and Design",
      "Turnkey Commercial Construction and Interior",
      "Turnkey Commercial Construction and Civil Work",
      "Turnkey Commercial Construction and Electrical",
      "Turnkey Commercial Construction and Plumbing",
      "Turnkey Commercial Construction and HVAC",
      "Turnkey Commercial Construction and Fire Safety",
      "Turnkey Commercial Construction and Lifts",
      "Turnkey Commercial Construction and Waterproofing",
      "Turnkey Commercial Construction and Finishing",
      "Turnkey Commercial Construction and Interiors",
      "Turnkey Commercial Construction and Site Development",
      "Turnkey Commercial Construction and Phasing",
      "Turnkey Commercial Construction and Budget Planning",
      "Turnkey Commercial Construction and Cost Planning",
      "Turnkey Commercial Construction and Quotation",
      "Turnkey Commercial Construction and Estimate",
      "Turnkey Commercial Construction and Schedule",
      "Turnkey Commercial Construction and Timeline",
      "Turnkey Commercial Construction and Project Management",
      "Turnkey Commercial Construction and Supervision",
      "Turnkey Commercial Construction and Handover",
      "Turnkey Commercial Construction and After Handover",
      "Turnkey Commercial Construction and Warranty",
      "Turnkey Commercial Construction and Care Guidance",
      "Turnkey Commercial Construction and 3D Design",
      "Turnkey Commercial Construction and Itemised Quotation",
      "Turnkey Industrial Construction",
      "Turnkey Industrial Construction Company",
      "Turnkey Industrial Construction Contractor",
      "Turnkey Industrial Construction Builder",
      "Turnkey Industrial Construction Firm",
      "Turnkey Industrial Construction Services",
      "Turnkey Industrial Construction and Design",
      "Turnkey Industrial Construction and Interior",
      "Turnkey Industrial Construction and Civil Work",
      "Turnkey Industrial Construction and Electrical",
      "Turnkey Industrial Construction and Plumbing",
      "Turnkey Industrial Construction and HVAC",
      "Turnkey Industrial Construction and Fire Safety",
      "Turnkey Industrial Construction and Lifts",
      "Turnkey Industrial Construction and Waterproofing",
      "Turnkey Industrial Construction and Finishing",
      "Turnkey Industrial Construction and Interiors",
      "Turnkey Industrial Construction and Site Development",
      "Turnkey Industrial Construction and Phasing",
      "Turnkey Industrial Construction and Budget Planning",
      "Turnkey Industrial Construction and Cost Planning",
      "Turnkey Industrial Construction and Quotation",
      "Turnkey Industrial Construction and Estimate",
      "Turnkey Industrial Construction and Schedule",
      "Turnkey Industrial Construction and Timeline",
      "Turnkey Industrial Construction and Project Management",
      "Turnkey Industrial Construction and Supervision",
      "Turnkey Industrial Construction and Handover",
      "Turnkey Industrial Construction and After Handover",
      "Turnkey Industrial Construction and Warranty",
      "Turnkey Industrial Construction and Care Guidance",
      "Turnkey Industrial Construction and 3D Design",
      "Turnkey Industrial Construction and Itemised Quotation",
      "Turnkey Interior Contractor",
      "Turnkey Interior Contractor Company",
      "Turnkey Interior Contractor Firm",
      "Turnkey Interior Contractor Services",
      "Turnkey Interior Contractor and Design",
      "Turnkey Interior Contractor and Civil Work",
      "Turnkey Interior Contractor and Electrical",
      "Turnkey Interior Contractor and Plumbing",
      "Turnkey Interior Contractor and HVAC",
      "Turnkey Interior Contractor and Fire Safety",
      "Turnkey Interior Contractor and Lifts",
      "Turnkey Interior Contractor and Waterproofing",
      "Turnkey Interior Contractor and Finishing",
      "Turnkey Interior Contractor and Interiors",
      "Turnkey Interior Contractor and Site Development",
      "Turnkey Interior Contractor and Phasing",
      "Turnkey Interior Contractor and Budget Planning",
      "Turnkey Interior Contractor and Cost Planning",
      "Turnkey Interior Contractor and Quotation",
      "Turnkey Interior Contractor and Estimate",
      "Turnkey Interior Contractor and Schedule",
      "Turnkey Interior Contractor and Timeline",
      "Turnkey Interior Contractor and Project Management",
      "Turnkey Interior Contractor and Supervision",
      "Turnkey Interior Contractor and Handover",
      "Turnkey Interior Contractor and After Handover",
      "Turnkey Interior Contractor and Warranty",
      "Turnkey Interior Contractor and Care Guidance",
      "Turnkey Interior Contractor and 3D Design",
      "Turnkey Interior Contractor and Itemised Quotation",
      "Turnkey Renovation Contractor",
      "Turnkey Renovation Contractor Company",
      "Turnkey Renovation Contractor Firm",
      "Turnkey Renovation Contractor Services",
      "Turnkey Renovation Contractor and Design",
      "Turnkey Renovation Contractor and Civil Work",
      "Turnkey Renovation Contractor and Electrical",
      "Turnkey Renovation Contractor and Plumbing",
      "Turnkey Renovation Contractor and HVAC",
      "Turnkey Renovation Contractor and Fire Safety",
      "Turnkey Renovation Contractor and Lifts",
      "Turnkey Renovation Contractor and Waterproofing",
      "Turnkey Renovation Contractor and Finishing",
      "Turnkey Renovation Contractor and Interiors",
      "Turnkey Renovation Contractor and Site Development",
      "Turnkey Renovation Contractor and Phasing",
      "Turnkey Renovation Contractor and Budget Planning",
      "Turnkey Renovation Contractor and Cost Planning",
      "Turnkey Renovation Contractor and Quotation",
      "Turnkey Renovation Contractor and Estimate",
      "Turnkey Renovation Contractor and Schedule",
      "Turnkey Renovation Contractor and Timeline",
      "Turnkey Renovation Contractor and Project Management",
      "Turnkey Renovation Contractor and Supervision",
      "Turnkey Renovation Contractor and Handover",
      "Turnkey Renovation Contractor and After Handover",
      "Turnkey Renovation Contractor and Warranty",
      "Turnkey Renovation Contractor and Care Guidance",
      "Turnkey Renovation Contractor and 3D Design",
      "Turnkey Renovation Contractor and Itemised Quotation",
      "Turnkey Project Management",
      "Turnkey Project Management Company",
      "Turnkey Project Management Contractor",
      "Turnkey Project Management Firm",
      "Turnkey Project Management Services",
      "Turnkey Project Management and Design",
      "Turnkey Project Management and Interior",
      "Turnkey Project Management and Civil Work",
      "Turnkey Project Management and Electrical",
      "Turnkey Project Management and Plumbing",
      "Turnkey Project Management and HVAC",
      "Turnkey Project Management and Fire Safety",
      "Turnkey Project Management and Lifts",
      "Turnkey Project Management and Waterproofing",
      "Turnkey Project Management and Finishing",
      "Turnkey Project Management and Interiors",
      "Turnkey Project Management and Site Development",
      "Turnkey Project Management and Phasing",
      "Turnkey Project Management and Budget Planning",
      "Turnkey Project Management and Cost Planning",
      "Turnkey Project Management and Quotation",
      "Turnkey Project Management and Estimate",
      "Turnkey Project Management and Schedule",
      "Turnkey Project Management and Timeline",
      "Turnkey Project Management and Project Management",
      "Turnkey Project Management and Supervision",
      "Turnkey Project Management and Handover",
      "Turnkey Project Management and After Handover",
      "Turnkey Project Management and Warranty",
      "Turnkey Project Management and Care Guidance",
      "Turnkey Project Management and 3D Design",
      "Turnkey Project Management and Itemised Quotation",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Turnkey Construction Company in Rampur",
    description:
      "MTBOSS is a turnkey construction company serving Rampur: design, construction, interiors and handover under one team and one agreement for homes, commercial and industrial projects. Services include turnkey construction company, turnkey construction, turnkey construction contractor, turnkey construction builder, turnkey construction firm, turnkey construction services, turnkey construction and design, turnkey construction and interior, turnkey construction and civil work, turnkey construction and electrical, turnkey construction and plumbing, turnkey construction and HVAC, turnkey construction and fire safety, turnkey construction and lifts, turnkey construction and waterproofing, turnkey construction and finishing, turnkey construction and interiors, turnkey construction and site development, turnkey construction and phasing, turnkey construction and budget planning, turnkey construction and cost planning, turnkey construction and quotation, turnkey construction and estimate, turnkey construction and schedule, turnkey construction and timeline, turnkey construction and project management, turnkey construction and supervision, turnkey construction and handover, turnkey construction and after handover, turnkey construction and warranty, turnkey construction and care guidance, turnkey construction and 3D design and turnkey construction and itemised quotation.",
    url: "https://www.mtboss.in/turnkey-construction-company-rampur",
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
      "Turnkey Construction Company, Turnkey Construction Company in Rampur, Turnkey Construction, Turnkey Construction Contractor, Turnkey Construction Builder, Turnkey Construction Firm, Turnkey Construction Services, Turnkey Construction and Design, Turnkey Construction and Interior, Turnkey Construction and Civil Work, Turnkey Construction and Electrical, Turnkey Construction and Plumbing, Turnkey Construction and HVAC, Turnkey Construction and Fire Safety, Turnkey Construction and Lifts, Turnkey Construction and Waterproofing, Turnkey Construction and Finishing, Turnkey Construction and Interiors, Turnkey Construction and Site Development, Turnkey Construction and Phasing, Turnkey Construction and Budget Planning, Turnkey Construction and Cost Planning, Turnkey Construction and Quotation, Turnkey Construction and Estimate, Turnkey Construction and Schedule, Turnkey Construction and Timeline, Turnkey Construction and Project Management, Turnkey Construction and Supervision, Turnkey Construction and Handover, Turnkey Construction and After Handover, Turnkey Construction and Warranty, Turnkey Construction and Care Guidance, Turnkey Construction and 3D Design, Turnkey Construction and Itemised Quotation, Turnkey Project Contractor, Turnkey Project Contractor in Rampur, Turnkey Project Contractor Company, Turnkey Project Contractor Firm, Turnkey Project Contractor Services, Turnkey Project Contractor and Design, Turnkey Project Contractor and Interior, Turnkey Project Contractor and Civil Work, Turnkey Project Contractor and Electrical, Turnkey Project Contractor and Plumbing, Turnkey Project Contractor and HVAC, Turnkey Project Contractor and Fire Safety, Turnkey Project Contractor and Lifts, Turnkey Project Contractor and Waterproofing, Turnkey Project Contractor and Finishing, Turnkey Project Contractor and Interiors, Turnkey Project Contractor and Site Development, Turnkey Project Contractor and Phasing, Turnkey Project Contractor and Budget Planning, Turnkey Project Contractor and Cost Planning, Turnkey Project Contractor and Quotation, Turnkey Project Contractor and Estimate, Turnkey Project Contractor and Schedule, Turnkey Project Contractor and Timeline, Turnkey Project Contractor and Project Management, Turnkey Project Contractor and Supervision, Turnkey Project Contractor and Handover, Turnkey Project Contractor and After Handover, Turnkey Project Contractor and Warranty, Turnkey Project Contractor and Care Guidance, Turnkey Project Contractor and 3D Design, Turnkey Project Contractor and Itemised Quotation, Turnkey Project Cost, Turnkey Project Cost in Rampur, Turnkey Project Cost Per Square Foot, Turnkey Project Cost Factors, Turnkey Project Budget, Turnkey Project Budget Planning, Turnkey Project Budget Guide, Turnkey Project Cost Breakdown, Turnkey Project Cost Components, Turnkey Project Cost Inclusions, Turnkey Project Cost Exclusions, Turnkey Project Cost Drivers, Turnkey Project Cost by Type, Turnkey Project Cost by Department, Turnkey Project Cost by Zone, Turnkey Project Cost by Finish Level, Turnkey Project Cost by Phasing, Turnkey Project Cost by Timeline, Turnkey Project Cost by Site Conditions, Turnkey Project Cost by Soil Conditions, Turnkey Project Cost by Material Prices, Turnkey Project Cost by Labour, Turnkey Project Cost by Utilities, Turnkey Project Cost by Equipment, Turnkey Project Cost by Furniture, Turnkey Project Cost by IT Systems, Turnkey Project Cost by Licences, Turnkey Project Cost by Approvals, Turnkey Project Cost by HVAC, Turnkey Project Cost by Fire Safety, Turnkey Project Cost by Lifts, Turnkey Project Cost by Waterproofing, Turnkey Project Cost by Plumbing, Turnkey Project Cost by Electrical, Turnkey Project Cost by Structure, Turnkey Project Cost by Foundation, Turnkey Project Cost by Masonry, Turnkey Project Cost by Finishes, Turnkey Project Cost by Interiors, Turnkey Project Cost by Site Development, Turnkey Project Cost by Professional Services, Turnkey Project Cost by Contingency, Turnkey Project Cost by Payment Stages, Turnkey Project Cost by Cash Flow, Turnkey Project Cost by Hidden Costs, Turnkey Project Cost by Change Process, Turnkey Project Cost by After Handover Support, Turnkey Project Cost by Warranty, Turnkey Project Cost by Care Guidance, Turnkey Project Cost by 3D Design, Turnkey Project Cost by Itemised Quotation, Turnkey Home Construction, Turnkey Home Construction Company, Turnkey Home Construction Contractor, Turnkey Home Construction Builder, Turnkey Home Construction Firm, Turnkey Home Construction Services, Turnkey Home Construction and Design, Turnkey Home Construction and Interior, Turnkey Home Construction and Civil Work, Turnkey Home Construction and Electrical, Turnkey Home Construction and Plumbing, Turnkey Home Construction and HVAC, Turnkey Home Construction and Fire Safety, Turnkey Home Construction and Lifts, Turnkey Home Construction and Waterproofing, Turnkey Home Construction and Finishing, Turnkey Home Construction and Interiors, Turnkey Home Construction and Site Development, Turnkey Home Construction and Phasing, Turnkey Home Construction and Budget Planning, Turnkey Home Construction and Cost Planning, Turnkey Home Construction and Quotation, Turnkey Home Construction and Estimate, Turnkey Home Construction and Schedule, Turnkey Home Construction and Timeline, Turnkey Home Construction and Project Management, Turnkey Home Construction and Supervision, Turnkey Home Construction and Handover, Turnkey Home Construction and After Handover, Turnkey Home Construction and Warranty, Turnkey Home Construction and Care Guidance, Turnkey Home Construction and 3D Design, Turnkey Home Construction and Itemised Quotation, Turnkey Commercial Construction, Turnkey Commercial Construction Company, Turnkey Commercial Construction Contractor, Turnkey Commercial Construction Builder, Turnkey Commercial Construction Firm, Turnkey Commercial Construction Services, Turnkey Commercial Construction and Design, Turnkey Commercial Construction and Interior, Turnkey Commercial Construction and Civil Work, Turnkey Commercial Construction and Electrical, Turnkey Commercial Construction and Plumbing, Turnkey Commercial Construction and HVAC, Turnkey Commercial Construction and Fire Safety, Turnkey Commercial Construction and Lifts, Turnkey Commercial Construction and Waterproofing, Turnkey Commercial Construction and Finishing, Turnkey Commercial Construction and Interiors, Turnkey Commercial Construction and Site Development, Turnkey Commercial Construction and Phasing, Turnkey Commercial Construction and Budget Planning, Turnkey Commercial Construction and Cost Planning, Turnkey Commercial Construction and Quotation, Turnkey Commercial Construction and Estimate, Turnkey Commercial Construction and Schedule, Turnkey Commercial Construction and Timeline, Turnkey Commercial Construction and Project Management, Turnkey Commercial Construction and Supervision, Turnkey Commercial Construction and Handover, Turnkey Commercial Construction and After Handover, Turnkey Commercial Construction and Warranty, Turnkey Commercial Construction and Care Guidance, Turnkey Commercial Construction and 3D Design, Turnkey Commercial Construction and Itemised Quotation, Turnkey Industrial Construction, Turnkey Industrial Construction Company, Turnkey Industrial Construction Contractor, Turnkey Industrial Construction Builder, Turnkey Industrial Construction Firm, Turnkey Industrial Construction Services, Turnkey Industrial Construction and Design, Turnkey Industrial Construction and Interior, Turnkey Industrial Construction and Civil Work, Turnkey Industrial Construction and Electrical, Turnkey Industrial Construction and Plumbing, Turnkey Industrial Construction and HVAC, Turnkey Industrial Construction and Fire Safety, Turnkey Industrial Construction and Lifts, Turnkey Industrial Construction and Waterproofing, Turnkey Industrial Construction and Finishing, Turnkey Industrial Construction and Interiors, Turnkey Industrial Construction and Site Development, Turnkey Industrial Construction and Phasing, Turnkey Industrial Construction and Budget Planning, Turnkey Industrial Construction and Cost Planning, Turnkey Industrial Construction and Quotation, Turnkey Industrial Construction and Estimate, Turnkey Industrial Construction and Schedule, Turnkey Industrial Construction and Timeline, Turnkey Industrial Construction and Project Management, Turnkey Industrial Construction and Supervision, Turnkey Industrial Construction and Handover, Turnkey Industrial Construction and After Handover, Turnkey Industrial Construction and Warranty, Turnkey Industrial Construction and Care Guidance, Turnkey Industrial Construction and 3D Design, Turnkey Industrial Construction and Itemised Quotation, Turnkey Interior Contractor, Turnkey Interior Contractor Company, Turnkey Interior Contractor Firm, Turnkey Interior Contractor Services, Turnkey Interior Contractor and Design, Turnkey Interior Contractor and Civil Work, Turnkey Interior Contractor and Electrical, Turnkey Interior Contractor and Plumbing, Turnkey Interior Contractor and HVAC, Turnkey Interior Contractor and Fire Safety, Turnkey Interior Contractor and Lifts, Turnkey Interior Contractor and Waterproofing, Turnkey Interior Contractor and Finishing, Turnkey Interior Contractor and Interiors, Turnkey Interior Contractor and Site Development, Turnkey Interior Contractor and Phasing, Turnkey Interior Contractor and Budget Planning, Turnkey Interior Contractor and Cost Planning, Turnkey Interior Contractor and Quotation, Turnkey Interior Contractor and Estimate, Turnkey Interior Contractor and Schedule, Turnkey Interior Contractor and Timeline, Turnkey Interior Contractor and Project Management, Turnkey Interior Contractor and Supervision, Turnkey Interior Contractor and Handover, Turnkey Interior Contractor and After Handover, Turnkey Interior Contractor and Warranty, Turnkey Interior Contractor and Care Guidance, Turnkey Interior Contractor and 3D Design, Turnkey Interior Contractor and Itemised Quotation, Turnkey Renovation Contractor, Turnkey Renovation Contractor Company, Turnkey Renovation Contractor Firm, Turnkey Renovation Contractor Services, Turnkey Renovation Contractor and Design, Turnkey Renovation Contractor and Civil Work, Turnkey Renovation Contractor and Electrical, Turnkey Renovation Contractor and Plumbing, Turnkey Renovation Contractor and HVAC, Turnkey Renovation Contractor and Fire Safety, Turnkey Renovation Contractor and Lifts, Turnkey Renovation Contractor and Waterproofing, Turnkey Renovation Contractor and Finishing, Turnkey Renovation Contractor and Interiors, Turnkey Renovation Contractor and Site Development, Turnkey Renovation Contractor and Phasing, Turnkey Renovation Contractor and Budget Planning, Turnkey Renovation Contractor and Cost Planning, Turnkey Renovation Contractor and Quotation, Turnkey Renovation Contractor and Estimate, Turnkey Renovation Contractor and Schedule, Turnkey Renovation Contractor and Timeline, Turnkey Renovation Contractor and Project Management, Turnkey Renovation Contractor and Supervision, Turnkey Renovation Contractor and Handover, Turnkey Renovation Contractor and After Handover, Turnkey Renovation Contractor and Warranty, Turnkey Renovation Contractor and Care Guidance, Turnkey Renovation Contractor and 3D Design, Turnkey Renovation Contractor and Itemised Quotation, Turnkey Project Management, Turnkey Project Management Company, Turnkey Project Management Contractor, Turnkey Project Management Firm, Turnkey Project Management Services, Turnkey Project Management and Design, Turnkey Project Management and Interior, Turnkey Project Management and Civil Work, Turnkey Project Management and Electrical, Turnkey Project Management and Plumbing, Turnkey Project Management and HVAC, Turnkey Project Management and Fire Safety, Turnkey Project Management and Lifts, Turnkey Project Management and Waterproofing, Turnkey Project Management and Finishing, Turnkey Project Management and Interiors, Turnkey Project Management and Site Development, Turnkey Project Management and Phasing, Turnkey Project Management and Budget Planning, Turnkey Project Management and Cost Planning, Turnkey Project Management and Quotation, Turnkey Project Management and Estimate, Turnkey Project Management and Schedule, Turnkey Project Management and Timeline, Turnkey Project Management and Project Management, Turnkey Project Management and Supervision, Turnkey Project Management and Handover, Turnkey Project Management and After Handover, Turnkey Project Management and Warranty, Turnkey Project Management and Care Guidance, Turnkey Project Management and 3D Design and Turnkey Project Management and Itemised Quotation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is turnkey construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Turnkey construction means one company takes responsibility for delivering a project from design to handover, so the owner receives a completed building ready for use.",
        },
      },
      {
        "@type": "Question",
        name: "What does a turnkey package include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It usually includes design coordination, approvals support, construction, services, finishing and handover, and may include interiors if agreed. Exclusions such as land, statutory fees, loose furniture and specialised equipment should be listed in writing.",
        },
      },
      {
        "@type": "Question",
        name: "Is turnkey construction suitable for small projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many homes, shops and small commercial buildings are built on a turnkey basis. For very small, simple jobs, a single contractor may be enough.",
        },
      },
      {
        "@type": "Question",
        name: "How is the price fixed in a turnkey project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually through a clear scope and specification, with an itemised estimate and payment stages. Changes are priced and approved in writing before they are carried out.",
        },
      },
      {
        "@type": "Question",
        name: "What if I want to change something during construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small changes are often possible. We explain the effect on cost and time in writing before proceeding, because late changes can be expensive.",
        },
      },
      {
        "@type": "Question",
        name: "How do I stay informed if I cannot visit the site often?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide regular updates with photographs, milestone reviews and a single point of contact, and you or a trusted person can visit when convenient.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle approvals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prepare technical drawings and coordinate the building with approval needs. Please confirm current requirements with the concerned authorities.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build commercial, industrial and institutional buildings on a turnkey basis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can discuss turnkey construction for shops, offices, warehouses, factories, schools, clinics and hospitals, depending on the scope.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact us with your project details, and we will arrange a site visit. After reviewing your brief, we prepare an itemised quotation. You can also use our online construction calculator for a starting idea.",
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
        name: "Turnkey Construction",
        item: "https://www.mtboss.in/turnkey-construction",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Turnkey Construction Company Rampur",
        item: "https://www.mtboss.in/turnkey-construction-company-rampur",
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