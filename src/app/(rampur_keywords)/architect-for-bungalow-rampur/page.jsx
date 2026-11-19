// app/(rampur_keywords)/architect-for-bungalow-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/QuickServices';
import CalculatorCTA from '../../components/CalculatorCTA';
import Services from '../../components/Services';


export const metadata = {
  title: 'Architect for Bungalow Rampur | Custom Home Design | MTBOSS',
  description:
    'Architect for bungalow Rampur: custom bungalow plans, landscape, elevation and construction support from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for bungalow Rampur, bungalow design Rampur, bungalow plan Rampur, kothi design Rampur, villa design Rampur, bungalow elevation design Rampur, bungalow construction Rampur, luxury home design Rampur, bungalow landscape design Rampur, bungalow interior design Rampur, bungalow renovation Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-bungalow-rampur',
  },
  openGraph: {
    title: 'Architect for Bungalow Rampur | Custom Home Design | MTBOSS',
    description:
      'Architect for bungalow Rampur: custom bungalow plans, landscape, elevation and construction support from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-bungalow-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-bungalow-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Bungalow Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Bungalow Rampur | Custom Home Design | MTBOSS',
    description:
      'Architect for bungalow Rampur: custom bungalow plans, landscape, elevation and construction support from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-bungalow-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-bungalow-rampur',
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