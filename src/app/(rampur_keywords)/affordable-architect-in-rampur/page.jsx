// app/(rampur_keywords)/affordable-architect-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Affordable Architect in Rampur | Budget Home Design | MTBOSS',
  description:
    'Affordable architect in Rampur: budget-friendly house design, efficient plans and phased construction with clear scope from MTBOSS. Call +91 94584 10866.',
  keywords:
    'affordable architect in Rampur, budget architect Rampur, low cost house design Rampur, budget home design Rampur, affordable house plan Rampur, economical house construction Rampur, small house design Rampur, phased house construction Rampur, budget interior design Rampur, value for money architect Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/affordable-architect-in-rampur',
  },
  openGraph: {
    title: 'Affordable Architect in Rampur | Budget Home Design | MTBOSS',
    description:
      'Affordable architect in Rampur: budget-friendly house design, efficient plans and phased construction with clear scope from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/affordable-architect-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-affordable-architect-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Affordable Architect in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Architect in Rampur | Budget Home Design | MTBOSS',
    description:
      'Affordable architect in Rampur: budget-friendly house design, efficient plans and phased construction with clear scope from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-affordable-architect-in-rampur.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'MTBOSS Construction Private Limited',
    url: 'https://www.MTBOSS.in/affordable-architect-in-rampur',
    telephone: '+91-9458410866',
    email: 'inquiry@mtboss.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        "Harthala Kanth Road, Behind Kr Collection, near Domino's",
      addressLocality: 'Moradabad',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'City',
      name: 'Rampur',
    },
    priceRange: '₹₹',
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Banner />
      <Content />
      <QuickServices />
      <Services />
      <CalculatorCTA />
    </>
  );
}