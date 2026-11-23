// app/(rampur_keywords)/architect-for-hospital-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Hospital in Rampur | Hospital Design | MTBOSS',
  description:
    'Architect for hospital in Rampur: hospital, clinic and nursing home planning, design and construction support with MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for hospital in Rampur, hospital architect Rampur, hospital design Rampur, hospital construction Rampur, clinic design Rampur, nursing home design Rampur, hospital building plan Rampur, healthcare architect Rampur, hospital interior design Rampur, hospital construction company Rampur, medical building design Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-hospital-in-rampur',
  },
  openGraph: {
    title: 'Architect for Hospital in Rampur | Hospital Design | MTBOSS',
    description:
      'Architect for hospital in Rampur: hospital, clinic and nursing home planning, design and construction support with MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-hospital-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-hospital-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Hospital in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Hospital in Rampur | Hospital Design | MTBOSS',
    description:
      'Architect for hospital in Rampur: hospital, clinic and nursing home planning, design and construction support with MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-hospital-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-hospital-in-rampur',
    telephone: '+91-9458410866',
    email: 'MTBOSS2016@gmail.com',
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