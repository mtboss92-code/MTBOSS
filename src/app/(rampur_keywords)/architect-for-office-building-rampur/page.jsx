// app/(rampur_keywords)/architect-for-office-building-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Office Building Rampur | Design | MTBOSS',
  description:
    'Architect for office building Rampur: office layout, facade, interiors and construction support from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for office building Rampur, office building design Rampur, office design Rampur, office interior design Rampur, office construction Rampur, corporate office design Rampur, commercial office building Rampur, co-working space design Rampur, office layout planning Rampur, office building plan Rampur, office fit-out Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-office-building-rampur',
  },
  openGraph: {
    title: 'Architect for Office Building Rampur | Design | MTBOSS',
    description:
      'Architect for office building Rampur: office layout, facade, interiors and construction support from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-office-building-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-office-building-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Office Building Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Office Building Rampur | Design | MTBOSS',
    description:
      'Architect for office building Rampur: office layout, facade, interiors and construction support from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-office-building-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-office-building-rampur',
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