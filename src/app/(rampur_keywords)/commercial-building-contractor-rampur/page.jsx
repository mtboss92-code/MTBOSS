// app/(bareilly_keywords)/residential-building-contractor-rampur/page.jsx

import Banner from "./Banner";
import Content from "./Content";
import QuickServices from "../../components/home/QuickServices";
import CalculatorCTA from "../../components/home/CalculatorCTA";
import Services from "../../components/home/Services";

export const metadata = {
  title: "Residential Building Contractor in Rampur | MTBOSS",

  description:
    "MTBOSS is a residential building contractor in Rampur for houses, builder floors and apartments. Clear scope, stage-wise payments and supervised construction. Get a quote.",

  keywords:
    "residential building contractor Rampur, residential construction contractor Rampur, building contractor in Rampur, apartment construction contractor Rampur, builder floor construction Rampur, G+2 and G+3 building construction Rampur, residential building contractor in Rampur, residential construction contractor in Rampur, building contractor Rampur, building contractor company Rampur, building contractor firm Rampur, building contractor services Rampur, building contractor and design Rampur, building contractor and interior Rampur, building contractor and civil work Rampur, building contractor and electrical Rampur, building contractor and plumbing Rampur, building contractor and HVAC Rampur, building contractor and fire safety Rampur, building contractor and lifts Rampur, building contractor and waterproofing Rampur, building contractor and finishing Rampur, building contractor and interiors Rampur, building contractor and site development Rampur, building contractor and phasing Rampur, building contractor and budget planning Rampur, building contractor and cost planning Rampur, building contractor and quotation Rampur, building contractor and estimate Rampur, building contractor and schedule Rampur, building contractor and timeline Rampur, building contractor and project management Rampur, building contractor and supervision Rampur, building contractor and handover Rampur, building contractor and after handover Rampur, building contractor and warranty Rampur, building contractor and care guidance Rampur, building contractor and 3D design Rampur, building contractor and itemised quotation Rampur, residential construction contractor company Rampur, residential construction contractor firm Rampur, residential construction contractor services Rampur, residential construction contractor and design Rampur, residential construction contractor and interior Rampur, residential construction contractor and civil work Rampur, residential construction contractor and electrical Rampur, residential construction contractor and plumbing Rampur, residential construction contractor and HVAC Rampur, residential construction contractor and fire safety Rampur, residential construction contractor and lifts Rampur, residential construction contractor and waterproofing Rampur, residential construction contractor and finishing Rampur, residential construction contractor and interiors Rampur, residential construction contractor and site development Rampur, residential construction contractor and phasing Rampur, residential construction contractor and budget planning Rampur, residential construction contractor and cost planning Rampur, residential construction contractor and quotation Rampur, residential construction contractor and estimate Rampur, residential construction contractor and schedule Rampur, residential construction contractor and timeline Rampur, residential construction contractor and project management Rampur, residential construction contractor and supervision Rampur, residential construction contractor and handover Rampur, residential construction contractor and after handover Rampur, residential construction contractor and warranty Rampur, residential construction contractor and care guidance Rampur, residential construction contractor and 3D design Rampur, residential construction contractor and itemised quotation Rampur, apartment construction contractor company Rampur, apartment construction contractor firm Rampur, apartment construction contractor services Rampur, apartment construction contractor and design Rampur, apartment construction contractor and interior Rampur, apartment construction contractor and civil work Rampur, apartment construction contractor and electrical Rampur, apartment construction contractor and plumbing Rampur, apartment construction contractor and HVAC Rampur, apartment construction contractor and fire safety Rampur, apartment construction contractor and lifts Rampur, apartment construction contractor and waterproofing Rampur, apartment construction contractor and finishing Rampur, apartment construction contractor and interiors Rampur, apartment construction contractor and site development Rampur, apartment construction contractor and phasing Rampur, apartment construction contractor and budget planning Rampur, apartment construction contractor and cost planning Rampur, apartment construction contractor and quotation Rampur, apartment construction contractor and estimate Rampur, apartment construction contractor and schedule Rampur, apartment construction contractor and timeline Rampur, apartment construction contractor and project management Rampur, apartment construction contractor and supervision Rampur, apartment construction contractor and handover Rampur, apartment construction contractor and after handover Rampur, apartment construction contractor and warranty Rampur, apartment construction contractor and care guidance Rampur, apartment construction contractor and 3D design Rampur, apartment construction contractor and itemised quotation Rampur, builder floor construction company Rampur, builder floor construction company in Rampur, builder floor construction contractor Rampur, builder floor construction contractor in Rampur, builder floor construction builder Rampur, builder floor construction builder in Rampur, builder floor construction firm Rampur, builder floor construction firm in Rampur, builder floor construction services Rampur, builder floor construction services in Rampur, builder floor construction and design Rampur, builder floor construction and interior Rampur, builder floor construction and civil work Rampur, builder floor construction and electrical Rampur, builder floor construction and plumbing Rampur, builder floor construction and HVAC Rampur, builder floor construction and fire safety Rampur, builder floor construction and lifts Rampur, builder floor construction and waterproofing Rampur, builder floor construction and finishing Rampur, builder floor construction and interiors Rampur, builder floor construction and site development Rampur, builder floor construction and phasing Rampur, builder floor construction and budget planning Rampur, builder floor construction and cost planning Rampur, builder floor construction and quotation Rampur, builder floor construction and estimate Rampur, builder floor construction and schedule Rampur, builder floor construction and timeline Rampur, builder floor construction and project management Rampur, builder floor construction and supervision Rampur, builder floor construction and handover Rampur, builder floor construction and after handover Rampur, builder floor construction and warranty Rampur, builder floor construction and care guidance Rampur, builder floor construction and 3D design Rampur, builder floor construction and itemised quotation Rampur, G+2 building construction Rampur, G+2 building construction company Rampur, G+2 building construction contractor Rampur, G+2 building construction builder Rampur, G+2 building construction firm Rampur, G+2 building construction services Rampur, G+2 building construction and design Rampur, G+2 building construction and interior Rampur, G+2 building construction and civil work Rampur, G+2 building construction and electrical Rampur, G+2 building construction and plumbing Rampur, G+2 building construction and HVAC Rampur, G+2 building construction and fire safety Rampur, G+2 building construction and lifts Rampur, G+2 building construction and waterproofing Rampur, G+2 building construction and finishing Rampur, G+2 building construction and interiors Rampur, G+2 building construction and site development Rampur, G+2 building construction and phasing Rampur, G+2 building construction and budget planning Rampur, G+2 building construction and cost planning Rampur, G+2 building construction and quotation Rampur, G+2 building construction and estimate Rampur, G+2 building construction and schedule Rampur, G+2 building construction and timeline Rampur, G+2 building construction and project management Rampur, G+2 building construction and supervision Rampur, G+2 building construction and handover Rampur, G+2 building construction and after handover Rampur, G+2 building construction and warranty Rampur, G+2 building construction and care guidance Rampur, G+2 building construction and 3D design Rampur, G+2 building construction and itemised quotation Rampur, G+3 building construction Rampur, G+3 building construction company Rampur, G+3 building construction contractor Rampur, G+3 building construction builder Rampur, G+3 building construction firm Rampur, G+3 building construction services Rampur, G+3 building construction and design Rampur, G+3 building construction and interior Rampur, G+3 building construction and civil work Rampur, G+3 building construction and electrical Rampur, G+3 building construction and plumbing Rampur, G+3 building construction and HVAC Rampur, G+3 building construction and fire safety Rampur, G+3 building construction and lifts Rampur, G+3 building construction and waterproofing Rampur, G+3 building construction and finishing Rampur, G+3 building construction and interiors Rampur, G+3 building construction and site development Rampur, G+3 building construction and phasing Rampur, G+3 building construction and budget planning Rampur, G+3 building construction and cost planning Rampur, G+3 building construction and quotation Rampur, G+3 building construction and estimate Rampur, G+3 building construction and schedule Rampur, G+3 building construction and timeline Rampur, G+3 building construction and project management Rampur, G+3 building construction and supervision Rampur, G+3 building construction and handover Rampur, G+3 building construction and after handover Rampur, G+3 building construction and warranty Rampur, G+3 building construction and care guidance Rampur, G+3 building construction and 3D design Rampur, G+3 building construction and itemised quotation Rampur, house construction contractor Rampur, house construction contractor company Rampur, house construction contractor firm Rampur, house construction contractor services Rampur, house construction contractor and design Rampur, house construction contractor and interior Rampur, house construction contractor and civil work Rampur, house construction contractor and electrical Rampur, house construction contractor and plumbing Rampur, house construction contractor and HVAC Rampur, house construction contractor and fire safety Rampur, house construction contractor and lifts Rampur, house construction contractor and waterproofing Rampur, house construction contractor and finishing Rampur, house construction contractor and interiors Rampur, house construction contractor and site development Rampur, house construction contractor and phasing Rampur, house construction contractor and budget planning Rampur, house construction contractor and cost planning Rampur, house construction contractor and quotation Rampur, house construction contractor and estimate Rampur, house construction contractor and schedule Rampur, house construction contractor and timeline Rampur, house construction contractor and project management Rampur, house construction contractor and supervision Rampur, house construction contractor and handover Rampur, house construction contractor and after handover Rampur, house construction contractor and warranty Rampur, house construction contractor and care guidance Rampur, house construction contractor and 3D design Rampur, house construction contractor and itemised quotation Rampur, MTBOSS Rampur, MTBOSS Moradabad, MTBOSS Bareilly",

  alternates: {
    canonical:
      "https://www.mtboss.in/residential-building-contractor-rampur",
  },

  openGraph: {
    title: "Residential Building Contractor in Rampur | MTBOSS",

    description:
      "MTBOSS is a residential building contractor in Rampur for houses, builder floors and apartments. Clear scope, stage-wise payments and supervised construction. Get a quote.",

    url: "https://www.mtboss.in/residential-building-contractor-rampur",

    siteName: "MTBOSS Construction Private Limited",

    images: [
      {
        url: "https://www.mtboss.in/og-residential-building-contractor-rampur.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Building Contractor in Rampur - MTBOSS",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Residential Building Contractor in Rampur | MTBOSS",

    description:
      "MTBOSS is a residential building contractor in Rampur for houses, builder floors and apartments. Clear scope, stage-wise payments and supervised construction. Get a quote.",

    images: [
      "https://www.mtboss.in/og-residential-building-contractor-rampur.jpg",
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
    url: "https://www.mtboss.in/residential-building-contractor-rampur",
    telephone: "+91-9458410866",
    email: "mtboss2016@gmail.com",
    image:
      "https://www.mtboss.in/og-residential-building-contractor-rampur.jpg",
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
      "Residential Building Contractor",
      "Residential Building Contractor in Rampur",
      "Residential Construction Contractor",
      "Residential Construction Contractor in Rampur",
      "Building Contractor",
      "Building Contractor in Rampur",
      "Apartment Construction Contractor",
      "Apartment Construction Contractor in Rampur",
      "Builder Floor Construction",
      "Builder Floor Construction in Rampur",
      "G+2 and G+3 Building Construction",
      "G+2 and G+3 Building Construction in Rampur",
      "Residential Building Contractor Company",
      "Residential Building Contractor Firm",
      "Residential Building Contractor Services",
      "Residential Building Contractor and Design",
      "Residential Building Contractor and Interior",
      "Residential Building Contractor and Civil Work",
      "Residential Building Contractor and Electrical",
      "Residential Building Contractor and Plumbing",
      "Residential Building Contractor and HVAC",
      "Residential Building Contractor and Fire Safety",
      "Residential Building Contractor and Lifts",
      "Residential Building Contractor and Waterproofing",
      "Residential Building Contractor and Finishing",
      "Residential Building Contractor and Interiors",
      "Residential Building Contractor and Site Development",
      "Residential Building Contractor and Phasing",
      "Residential Building Contractor and Budget Planning",
      "Residential Building Contractor and Cost Planning",
      "Residential Building Contractor and Quotation",
      "Residential Building Contractor and Estimate",
      "Residential Building Contractor and Schedule",
      "Residential Building Contractor and Timeline",
      "Residential Building Contractor and Project Management",
      "Residential Building Contractor and Supervision",
      "Residential Building Contractor and Handover",
      "Residential Building Contractor and After Handover",
      "Residential Building Contractor and Warranty",
      "Residential Building Contractor and Care Guidance",
      "Residential Building Contractor and 3D Design",
      "Residential Building Contractor and Itemised Quotation",
      "Residential Construction Contractor Company",
      "Residential Construction Contractor Firm",
      "Residential Construction Contractor Services",
      "Residential Construction Contractor and Design",
      "Residential Construction Contractor and Interior",
      "Residential Construction Contractor and Civil Work",
      "Residential Construction Contractor and Electrical",
      "Residential Construction Contractor and Plumbing",
      "Residential Construction Contractor and HVAC",
      "Residential Construction Contractor and Fire Safety",
      "Residential Construction Contractor and Lifts",
      "Residential Construction Contractor and Waterproofing",
      "Residential Construction Contractor and Finishing",
      "Residential Construction Contractor and Interiors",
      "Residential Construction Contractor and Site Development",
      "Residential Construction Contractor and Phasing",
      "Residential Construction Contractor and Budget Planning",
      "Residential Construction Contractor and Cost Planning",
      "Residential Construction Contractor and Quotation",
      "Residential Construction Contractor and Estimate",
      "Residential Construction Contractor and Schedule",
      "Residential Construction Contractor and Timeline",
      "Residential Construction Contractor and Project Management",
      "Residential Construction Contractor and Supervision",
      "Residential Construction Contractor and Handover",
      "Residential Construction Contractor and After Handover",
      "Residential Construction Contractor and Warranty",
      "Residential Construction Contractor and Care Guidance",
      "Residential Construction Contractor and 3D Design",
      "Residential Construction Contractor and Itemised Quotation",
      "Building Contractor Company",
      "Building Contractor Firm",
      "Building Contractor Services",
      "Building Contractor and Design",
      "Building Contractor and Interior",
      "Building Contractor and Civil Work",
      "Building Contractor and Electrical",
      "Building Contractor and Plumbing",
      "Building Contractor and HVAC",
      "Building Contractor and Fire Safety",
      "Building Contractor and Lifts",
      "Building Contractor and Waterproofing",
      "Building Contractor and Finishing",
      "Building Contractor and Interiors",
      "Building Contractor and Site Development",
      "Building Contractor and Phasing",
      "Building Contractor and Budget Planning",
      "Building Contractor and Cost Planning",
      "Building Contractor and Quotation",
      "Building Contractor and Estimate",
      "Building Contractor and Schedule",
      "Building Contractor and Timeline",
      "Building Contractor and Project Management",
      "Building Contractor and Supervision",
      "Building Contractor and Handover",
      "Building Contractor and After Handover",
      "Building Contractor and Warranty",
      "Building Contractor and Care Guidance",
      "Building Contractor and 3D Design",
      "Building Contractor and Itemised Quotation",
      "Apartment Construction Contractor Company",
      "Apartment Construction Contractor Firm",
      "Apartment Construction Contractor Services",
      "Apartment Construction Contractor and Design",
      "Apartment Construction Contractor and Interior",
      "Apartment Construction Contractor and Civil Work",
      "Apartment Construction Contractor and Electrical",
      "Apartment Construction Contractor and Plumbing",
      "Apartment Construction Contractor and HVAC",
      "Apartment Construction Contractor and Fire Safety",
      "Apartment Construction Contractor and Lifts",
      "Apartment Construction Contractor and Waterproofing",
      "Apartment Construction Contractor and Finishing",
      "Apartment Construction Contractor and Interiors",
      "Apartment Construction Contractor and Site Development",
      "Apartment Construction Contractor and Phasing",
      "Apartment Construction Contractor and Budget Planning",
      "Apartment Construction Contractor and Cost Planning",
      "Apartment Construction Contractor and Quotation",
      "Apartment Construction Contractor and Estimate",
      "Apartment Construction Contractor and Schedule",
      "Apartment Construction Contractor and Timeline",
      "Apartment Construction Contractor and Project Management",
      "Apartment Construction Contractor and Supervision",
      "Apartment Construction Contractor and Handover",
      "Apartment Construction Contractor and After Handover",
      "Apartment Construction Contractor and Warranty",
      "Apartment Construction Contractor and Care Guidance",
      "Apartment Construction Contractor and 3D Design",
      "Apartment Construction Contractor and Itemised Quotation",
      "Builder Floor Construction Company",
      "Builder Floor Construction Company in Rampur",
      "Builder Floor Construction Contractor",
      "Builder Floor Construction Contractor in Rampur",
      "Builder Floor Construction Builder",
      "Builder Floor Construction Builder in Rampur",
      "Builder Floor Construction Firm",
      "Builder Floor Construction Firm in Rampur",
      "Builder Floor Construction Services",
      "Builder Floor Construction Services in Rampur",
      "Builder Floor Construction and Design",
      "Builder Floor Construction and Interior",
      "Builder Floor Construction and Civil Work",
      "Builder Floor Construction and Electrical",
      "Builder Floor Construction and Plumbing",
      "Builder Floor Construction and HVAC",
      "Builder Floor Construction and Fire Safety",
      "Builder Floor Construction and Lifts",
      "Builder Floor Construction and Waterproofing",
      "Builder Floor Construction and Finishing",
      "Builder Floor Construction and Interiors",
      "Builder Floor Construction and Site Development",
      "Builder Floor Construction and Phasing",
      "Builder Floor Construction and Budget Planning",
      "Builder Floor Construction and Cost Planning",
      "Builder Floor Construction and Quotation",
      "Builder Floor Construction and Estimate",
      "Builder Floor Construction and Schedule",
      "Builder Floor Construction and Timeline",
      "Builder Floor Construction and Project Management",
      "Builder Floor Construction and Supervision",
      "Builder Floor Construction and Handover",
      "Builder Floor Construction and After Handover",
      "Builder Floor Construction and Warranty",
      "Builder Floor Construction and Care Guidance",
      "Builder Floor Construction and 3D Design",
      "Builder Floor Construction and Itemised Quotation",
      "G+2 Building Construction",
      "G+2 Building Construction Company",
      "G+2 Building Construction Contractor",
      "G+2 Building Construction Builder",
      "G+2 Building Construction Firm",
      "G+2 Building Construction Services",
      "G+2 Building Construction and Design",
      "G+2 Building Construction and Interior",
      "G+2 Building Construction and Civil Work",
      "G+2 Building Construction and Electrical",
      "G+2 Building Construction and Plumbing",
      "G+2 Building Construction and HVAC",
      "G+2 Building Construction and Fire Safety",
      "G+2 Building Construction and Lifts",
      "G+2 Building Construction and Waterproofing",
      "G+2 Building Construction and Finishing",
      "G+2 Building Construction and Interiors",
      "G+2 Building Construction and Site Development",
      "G+2 Building Construction and Phasing",
      "G+2 Building Construction and Budget Planning",
      "G+2 Building Construction and Cost Planning",
      "G+2 Building Construction and Quotation",
      "G+2 Building Construction and Estimate",
      "G+2 Building Construction and Schedule",
      "G+2 Building Construction and Timeline",
      "G+2 Building Construction and Project Management",
      "G+2 Building Construction and Supervision",
      "G+2 Building Construction and Handover",
      "G+2 Building Construction and After Handover",
      "G+2 Building Construction and Warranty",
      "G+2 Building Construction and Care Guidance",
      "G+2 Building Construction and 3D Design",
      "G+2 Building Construction and Itemised Quotation",
      "G+3 Building Construction",
      "G+3 Building Construction Company",
      "G+3 Building Construction Contractor",
      "G+3 Building Construction Builder",
      "G+3 Building Construction Firm",
      "G+3 Building Construction Services",
      "G+3 Building Construction and Design",
      "G+3 Building Construction and Interior",
      "G+3 Building Construction and Civil Work",
      "G+3 Building Construction and Electrical",
      "G+3 Building Construction and Plumbing",
      "G+3 Building Construction and HVAC",
      "G+3 Building Construction and Fire Safety",
      "G+3 Building Construction and Lifts",
      "G+3 Building Construction and Waterproofing",
      "G+3 Building Construction and Finishing",
      "G+3 Building Construction and Interiors",
      "G+3 Building Construction and Site Development",
      "G+3 Building Construction and Phasing",
      "G+3 Building Construction and Budget Planning",
      "G+3 Building Construction and Cost Planning",
      "G+3 Building Construction and Quotation",
      "G+3 Building Construction and Estimate",
      "G+3 Building Construction and Schedule",
      "G+3 Building Construction and Timeline",
      "G+3 Building Construction and Project Management",
      "G+3 Building Construction and Supervision",
      "G+3 Building Construction and Handover",
      "G+3 Building Construction and After Handover",
      "G+3 Building Construction and Warranty",
      "G+3 Building Construction and Care Guidance",
      "G+3 Building Construction and 3D Design",
      "G+3 Building Construction and Itemised Quotation",
      "House Construction Contractor",
      "House Construction Contractor Company",
      "House Construction Contractor Firm",
      "House Construction Contractor Services",
      "House Construction Contractor and Design",
      "House Construction Contractor and Interior",
      "House Construction Contractor and Civil Work",
      "House Construction Contractor and Electrical",
      "House Construction Contractor and Plumbing",
      "House Construction Contractor and HVAC",
      "House Construction Contractor and Fire Safety",
      "House Construction Contractor and Lifts",
      "House Construction Contractor and Waterproofing",
      "House Construction Contractor and Finishing",
      "House Construction Contractor and Interiors",
      "House Construction Contractor and Site Development",
      "House Construction Contractor and Phasing",
      "House Construction Contractor and Budget Planning",
      "House Construction Contractor and Cost Planning",
      "House Construction Contractor and Quotation",
      "House Construction Contractor and Estimate",
      "House Construction Contractor and Schedule",
      "House Construction Contractor and Timeline",
      "House Construction Contractor and Project Management",
      "House Construction Contractor and Supervision",
      "House Construction Contractor and Handover",
      "House Construction Contractor and After Handover",
      "House Construction Contractor and Warranty",
      "House Construction Contractor and Care Guidance",
      "House Construction Contractor and 3D Design",
      "House Construction Contractor and Itemised Quotation",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Building Contractor in Rampur",
    description:
      "MTBOSS is a residential building contractor in Rampur for houses, builder floors and apartments. Clear scope, stage-wise payments and supervised construction. Get a quote. Services include residential building contractor, residential construction contractor, building contractor, apartment construction contractor, builder floor construction, G+2 and G+3 building construction, house construction contractor, building contractor and design, building contractor and interior, building contractor and civil work, building contractor and electrical, building contractor and plumbing, building contractor and HVAC, building contractor and fire safety, building contractor and lifts, building contractor and waterproofing, building contractor and finishing, building contractor and interiors, building contractor and site development, building contractor and phasing, building contractor and budget planning, building contractor and cost planning, building contractor and quotation, building contractor and estimate, building contractor and schedule, building contractor and timeline, building contractor and project management, building contractor and supervision, building contractor and handover, building contractor and after handover, building contractor and warranty, building contractor and care guidance, building contractor and 3D design and building contractor and itemised quotation.",
    url: "https://www.mtboss.in/residential-building-contractor-rampur",
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
      "Residential Building Contractor, Residential Building Contractor in Rampur, Residential Construction Contractor, Residential Construction Contractor in Rampur, Building Contractor, Building Contractor in Rampur, Apartment Construction Contractor, Apartment Construction Contractor in Rampur, Builder Floor Construction, Builder Floor Construction in Rampur, G+2 and G+3 Building Construction, G+2 and G+3 Building Construction in Rampur, Residential Building Contractor Company, Residential Building Contractor Firm, Residential Building Contractor Services, Residential Building Contractor and Design, Residential Building Contractor and Interior, Residential Building Contractor and Civil Work, Residential Building Contractor and Electrical, Residential Building Contractor and Plumbing, Residential Building Contractor and HVAC, Residential Building Contractor and Fire Safety, Residential Building Contractor and Lifts, Residential Building Contractor and Waterproofing, Residential Building Contractor and Finishing, Residential Building Contractor and Interiors, Residential Building Contractor and Site Development, Residential Building Contractor and Phasing, Residential Building Contractor and Budget Planning, Residential Building Contractor and Cost Planning, Residential Building Contractor and Quotation, Residential Building Contractor and Estimate, Residential Building Contractor and Schedule, Residential Building Contractor and Timeline, Residential Building Contractor and Project Management, Residential Building Contractor and Supervision, Residential Building Contractor and Handover, Residential Building Contractor and After Handover, Residential Building Contractor and Warranty, Residential Building Contractor and Care Guidance, Residential Building Contractor and 3D Design, Residential Building Contractor and Itemised Quotation, Residential Construction Contractor Company, Residential Construction Contractor Firm, Residential Construction Contractor Services, Residential Construction Contractor and Design, Residential Construction Contractor and Interior, Residential Construction Contractor and Civil Work, Residential Construction Contractor and Electrical, Residential Construction Contractor and Plumbing, Residential Construction Contractor and HVAC, Residential Construction Contractor and Fire Safety, Residential Construction Contractor and Lifts, Residential Construction Contractor and Waterproofing, Residential Construction Contractor and Finishing, Residential Construction Contractor and Interiors, Residential Construction Contractor and Site Development, Residential Construction Contractor and Phasing, Residential Construction Contractor and Budget Planning, Residential Construction Contractor and Cost Planning, Residential Construction Contractor and Quotation, Residential Construction Contractor and Estimate, Residential Construction Contractor and Schedule, Residential Construction Contractor and Timeline, Residential Construction Contractor and Project Management, Residential Construction Contractor and Supervision, Residential Construction Contractor and Handover, Residential Construction Contractor and After Handover, Residential Construction Contractor and Warranty, Residential Construction Contractor and Care Guidance, Residential Construction Contractor and 3D Design, Residential Construction Contractor and Itemised Quotation, Building Contractor Company, Building Contractor Firm, Building Contractor Services, Building Contractor and Design, Building Contractor and Interior, Building Contractor and Civil Work, Building Contractor and Electrical, Building Contractor and Plumbing, Building Contractor and HVAC, Building Contractor and Fire Safety, Building Contractor and Lifts, Building Contractor and Waterproofing, Building Contractor and Finishing, Building Contractor and Interiors, Building Contractor and Site Development, Building Contractor and Phasing, Building Contractor and Budget Planning, Building Contractor and Cost Planning, Building Contractor and Quotation, Building Contractor and Estimate, Building Contractor and Schedule, Building Contractor and Timeline, Building Contractor and Project Management, Building Contractor and Supervision, Building Contractor and Handover, Building Contractor and After Handover, Building Contractor and Warranty, Building Contractor and Care Guidance, Building Contractor and 3D Design, Building Contractor and Itemised Quotation, Apartment Construction Contractor Company, Apartment Construction Contractor Firm, Apartment Construction Contractor Services, Apartment Construction Contractor and Design, Apartment Construction Contractor and Interior, Apartment Construction Contractor and Civil Work, Apartment Construction Contractor and Electrical, Apartment Construction Contractor and Plumbing, Apartment Construction Contractor and HVAC, Apartment Construction Contractor and Fire Safety, Apartment Construction Contractor and Lifts, Apartment Construction Contractor and Waterproofing, Apartment Construction Contractor and Finishing, Apartment Construction Contractor and Interiors, Apartment Construction Contractor and Site Development, Apartment Construction Contractor and Phasing, Apartment Construction Contractor and Budget Planning, Apartment Construction Contractor and Cost Planning, Apartment Construction Contractor and Quotation, Apartment Construction Contractor and Estimate, Apartment Construction Contractor and Schedule, Apartment Construction Contractor and Timeline, Apartment Construction Contractor and Project Management, Apartment Construction Contractor and Supervision, Apartment Construction Contractor and Handover, Apartment Construction Contractor and After Handover, Apartment Construction Contractor and Warranty, Apartment Construction Contractor and Care Guidance, Apartment Construction Contractor and 3D Design, Apartment Construction Contractor and Itemised Quotation, Builder Floor Construction Company, Builder Floor Construction Company in Rampur, Builder Floor Construction Contractor, Builder Floor Construction Contractor in Rampur, Builder Floor Construction Builder, Builder Floor Construction Builder in Rampur, Builder Floor Construction Firm, Builder Floor Construction Firm in Rampur, Builder Floor Construction Services, Builder Floor Construction Services in Rampur, Builder Floor Construction and Design, Builder Floor Construction and Interior, Builder Floor Construction and Civil Work, Builder Floor Construction and Electrical, Builder Floor Construction and Plumbing, Builder Floor Construction and HVAC, Builder Floor Construction and Fire Safety, Builder Floor Construction and Lifts, Builder Floor Construction and Waterproofing, Builder Floor Construction and Finishing, Builder Floor Construction and Interiors, Builder Floor Construction and Site Development, Builder Floor Construction and Phasing, Builder Floor Construction and Budget Planning, Builder Floor Construction and Cost Planning, Builder Floor Construction and Quotation, Builder Floor Construction and Estimate, Builder Floor Construction and Schedule, Builder Floor Construction and Timeline, Builder Floor Construction and Project Management, Builder Floor Construction and Supervision, Builder Floor Construction and Handover, Builder Floor Construction and After Handover, Builder Floor Construction and Warranty, Builder Floor Construction and Care Guidance, Builder Floor Construction and 3D Design, Builder Floor Construction and Itemised Quotation, G+2 Building Construction, G+2 Building Construction Company, G+2 Building Construction Contractor, G+2 Building Construction Builder, G+2 Building Construction Firm, G+2 Building Construction Services, G+2 Building Construction and Design, G+2 Building Construction and Interior, G+2 Building Construction and Civil Work, G+2 Building Construction and Electrical, G+2 Building Construction and Plumbing, G+2 Building Construction and HVAC, G+2 Building Construction and Fire Safety, G+2 Building Construction and Lifts, G+2 Building Construction and Waterproofing, G+2 Building Construction and Finishing, G+2 Building Construction and Interiors, G+2 Building Construction and Site Development, G+2 Building Construction and Phasing, G+2 Building Construction and Budget Planning, G+2 Building Construction and Cost Planning, G+2 Building Construction and Quotation, G+2 Building Construction and Estimate, G+2 Building Construction and Schedule, G+2 Building Construction and Timeline, G+2 Building Construction and Project Management, G+2 Building Construction and Supervision, G+2 Building Construction and Handover, G+2 Building Construction and After Handover, G+2 Building Construction and Warranty, G+2 Building Construction and Care Guidance, G+2 Building Construction and 3D Design, G+2 Building Construction and Itemised Quotation, G+3 Building Construction, G+3 Building Construction Company, G+3 Building Construction Contractor, G+3 Building Construction Builder, G+3 Building Construction Firm, G+3 Building Construction Services, G+3 Building Construction and Design, G+3 Building Construction and Interior, G+3 Building Construction and Civil Work, G+3 Building Construction and Electrical, G+3 Building Construction and Plumbing, G+3 Building Construction and HVAC, G+3 Building Construction and Fire Safety, G+3 Building Construction and Lifts, G+3 Building Construction and Waterproofing, G+3 Building Construction and Finishing, G+3 Building Construction and Interiors, G+3 Building Construction and Site Development, G+3 Building Construction and Phasing, G+3 Building Construction and Budget Planning, G+3 Building Construction and Cost Planning, G+3 Building Construction and Quotation, G+3 Building Construction and Estimate, G+3 Building Construction and Schedule, G+3 Building Construction and Timeline, G+3 Building Construction and Project Management, G+3 Building Construction and Supervision, G+3 Building Construction and Handover, G+3 Building Construction and After Handover, G+3 Building Construction and Warranty, G+3 Building Construction and Care Guidance, G+3 Building Construction and 3D Design, G+3 Building Construction and Itemised Quotation, House Construction Contractor, House Construction Contractor Company, House Construction Contractor Firm, House Construction Contractor Services, House Construction Contractor and Design, House Construction Contractor and Interior, House Construction Contractor and Civil Work, House Construction Contractor and Electrical, House Construction Contractor and Plumbing, House Construction Contractor and HVAC, House Construction Contractor and Fire Safety, House Construction Contractor and Lifts, House Construction Contractor and Waterproofing, House Construction Contractor and Finishing, House Construction Contractor and Interiors, House Construction Contractor and Site Development, House Construction Contractor and Phasing, House Construction Contractor and Budget Planning, House Construction Contractor and Cost Planning, House Construction Contractor and Quotation, House Construction Contractor and Estimate, House Construction Contractor and Schedule, House Construction Contractor and Timeline, House Construction Contractor and Project Management, House Construction Contractor and Supervision, House Construction Contractor and Handover, House Construction Contractor and After Handover, House Construction Contractor and Warranty, House Construction Contractor and Care Guidance, House Construction Contractor and 3D Design and House Construction Contractor and Itemised Quotation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a residential building contractor do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A residential building contractor constructs homes and multi-unit buildings according to approved drawings and the agreed scope, managing labour, materials, supervision, services coordination and finishing until handover.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build G+2 and G+3 buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We construct multi-floor residential buildings, with structural planning suited to the number of floors.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build builder floors and rental buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We plan and build floor-wise units and rental buildings with separate entrances and durable finishes.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide a written agreement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Scope, specifications, quotation, payment stages and timeline are written into the agreement.",
        },
      },
      {
        "@type": "Question",
        name: "How are payments structured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payments are linked to completed and inspected work stages, such as each floor slab, not to large advances.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle design as well as construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Architecture, 3D design, civil work, interiors and finishing are managed by one team.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with approvals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prepare drawings and guide you on documents. Approval requirements vary, so you should confirm them with the concerned authorities.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a residential building?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on size and number of floors. We give a schedule with the estimate after reviewing your plot and target date.",
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
        name: "Residential Building Contractor",
        item: "https://www.mtboss.in/residential-building-contractor",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Residential Building Contractor Rampur",
        item: "https://www.mtboss.in/residential-building-contractor-rampur",
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