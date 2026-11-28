// app/(rampur_keywords)/architect-for-map-approval-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Map Approval Rampur | Free Quote | MTBOSS',
  description:
    'Need an architect for map approval in Rampur? MTBOSS prepares clear drawings for submission and guides you on documents. Call +91 94584 10866 today.',
  keywords:
    'architect for map approval Rampur, map approval Rampur, building plan approval Rampur, map passing architect Rampur, drawings for map approval Rampur, house map approval Rampur, commercial map approval Rampur, building permission Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-map-approval-rampur',
  },
  openGraph: {
    title: 'Architect for Map Approval Rampur | Free Quote | MTBOSS',
    description:
      'Need an architect for map approval in Rampur? MTBOSS prepares clear drawings for submission and guides you on documents. Call +91 94584 10866 today.',
    url: 'https://www.MTBOSS.in/architect-for-map-approval-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-map-approval-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Map Approval Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Map Approval Rampur | Free Quote | MTBOSS',
    description:
      'Need an architect for map approval in Rampur? MTBOSS prepares clear drawings for submission and guides you on documents. Call +91 94584 10866 today.',
    images: ['https://www.MTBOSS.in/og-architect-for-map-approval-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-map-approval-rampur',
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