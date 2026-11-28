// app/(rampur_keywords)/architect-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';

export const metadata = {
  title: 'Architect in Rampur | MTBOSS',
  description:
    'Looking for an architect in Rampur? MTBOSS offers home planning, drawings, interiors and construction guidance with clear quotes. Call +91 94584 10866.',
  keywords:
    'architect in Rampur, architect Rampur, best architect in Rampur, house plan architect Rampur, home design Rampur, residential architect Rampur, interior architect Rampur, architect near me Rampur, building plan Rampur, house map design Rampur, architect and builder Rampur, construction company Rampur, MTBOSS, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-in-rampur',
  },
  openGraph: {
    title: 'Architect in Rampur | MTBOSS',
    description:
      'Looking for an architect in Rampur? MTBOSS offers home planning, drawings, interiors and construction guidance with clear quotes. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect in Rampur | MTBOSS',
    description:
      'Looking for an architect in Rampur? MTBOSS offers home planning, drawings, interiors and construction guidance with clear quotes. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-in-rampur',
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