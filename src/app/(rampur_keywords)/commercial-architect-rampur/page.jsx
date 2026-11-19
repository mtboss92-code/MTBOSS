// app/(rampur_keywords)/commercial-architect-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/QuickServices';
import CalculatorCTA from '../../components/CalculatorCTA';
import Services from '../../components/Services';


export const metadata = {
  title: 'Commercial Architect Rampur | Shop & Office Design | MTBOSS',
  description:
    'Commercial architect Rampur: shop, showroom, office and complex design with construction support from MTBOSS. Call +91 94584 10866.',
  keywords:
    'commercial architect Rampur, commercial building design Rampur, shop design Rampur, showroom design Rampur, office design Rampur, shopping complex design Rampur, commercial construction Rampur, commercial building plan Rampur, commercial interior design Rampur, restaurant design Rampur, mixed-use building design Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/commercial-architect-rampur',
  },
  openGraph: {
    title: 'Commercial Architect Rampur | Shop & Office Design | MTBOSS',
    description:
      'Commercial architect Rampur: shop, showroom, office and complex design with construction support from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/commercial-architect-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-commercial-architect-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Commercial Architect Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Architect Rampur | Shop & Office Design | MTBOSS',
    description:
      'Commercial architect Rampur: shop, showroom, office and complex design with construction support from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-commercial-architect-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/commercial-architect-rampur',
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