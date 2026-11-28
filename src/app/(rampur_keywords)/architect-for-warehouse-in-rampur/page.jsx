// app/(rampur_keywords)/architect-for-warehouse-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Warehouse Rampur | Free Quote | MTBOSS',
  description:
    'Planning a warehouse or godown in Rampur? Get smart layouts, truck access planning and a clear estimate from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for warehouse Rampur, warehouse design Rampur, godown design Rampur, warehouse building plan Rampur, cold storage design Rampur, storage building design Rampur, warehouse construction Rampur, industrial shed design Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-warehouse-rampur',
  },
  openGraph: {
    title: 'Architect for Warehouse Rampur | Free Quote | MTBOSS',
    description:
      'Planning a warehouse or godown in Rampur? Get smart layouts, truck access planning and a clear estimate from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-warehouse-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-warehouse-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Warehouse Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Warehouse Rampur | Free Quote | MTBOSS',
    description:
      'Planning a warehouse or godown in Rampur? Get smart layouts, truck access planning and a clear estimate from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-warehouse-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-warehouse-rampur',
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