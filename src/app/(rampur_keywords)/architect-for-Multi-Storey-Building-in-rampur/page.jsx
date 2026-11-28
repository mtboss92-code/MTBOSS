// app/(rampur_keywords)/architect-for-multi-storey-building-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Multi Storey Building Rampur | MTBOSS',
  description:
    'Need an architect for a multi storey building in Rampur? Get plans, structure coordination and a clear estimate. Call MTBOSS +91 94584 10866.',
  keywords:
    'architect for multi storey building Rampur, multi storey building design Rampur, G+3 building plan Rampur, apartment building architect Rampur, commercial complex architect Rampur, multi floor building plan Rampur, builder floor design Rampur, hostel building design Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-multi-storey-building-rampur',
  },
  openGraph: {
    title: 'Architect for Multi Storey Building Rampur | MTBOSS',
    description:
      'Need an architect for a multi storey building in Rampur? Get plans, structure coordination and a clear estimate. Call MTBOSS +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-multi-storey-building-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-multi-storey-building-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Multi Storey Building Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Multi Storey Building Rampur | MTBOSS',
    description:
      'Need an architect for a multi storey building in Rampur? Get plans, structure coordination and a clear estimate. Call MTBOSS +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-multi-storey-building-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-multi-storey-building-rampur',
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