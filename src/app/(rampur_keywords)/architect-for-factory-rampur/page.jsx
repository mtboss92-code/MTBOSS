// app/(rampur_keywords)/architect-for-factory-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Factory Rampur | Industrial Design | MTBOSS',
  description:
    'Architect for factory Rampur: factory layout, industrial building design and civil construction support from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for factory Rampur, factory design Rampur, industrial building design Rampur, factory building plan Rampur, factory construction Rampur, industrial shed design Rampur, warehouse design Rampur, PEB building Rampur, factory layout planning Rampur, industrial construction company Rampur, manufacturing unit design Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-factory-rampur',
  },
  openGraph: {
    title: 'Architect for Factory Rampur | Industrial Design | MTBOSS',
    description:
      'Architect for factory Rampur: factory layout, industrial building design and civil construction support from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-factory-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-factory-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Factory Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Factory Rampur | Industrial Design | MTBOSS',
    description:
      'Architect for factory Rampur: factory layout, industrial building design and civil construction support from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-factory-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-factory-rampur',
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