// app/(rampur_keywords)/building-plan-architect-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Building Plan Architect Rampur | Get a Free Quote | MTBOSS',
  description:
    'Need a building plan architect in Rampur? Get complete plans, 3D elevation and a clear estimate from MTBOSS. WhatsApp or call +91 94584 10866 today.',
  keywords:
    'building plan architect Rampur, architect for building plan Rampur, house plan architect Rampur, building plan with elevation Rampur, commercial building plan Rampur, architect quote Rampur, building design and construction Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/building-plan-architect-rampur',
  },
  openGraph: {
    title: 'Building Plan Architect Rampur | Get a Free Quote | MTBOSS',
    description:
      'Need a building plan architect in Rampur? Get complete plans, 3D elevation and a clear estimate from MTBOSS. WhatsApp or call +91 94584 10866 today.',
    url: 'https://www.MTBOSS.in/building-plan-architect-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-building-plan-architect-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Building Plan Architect Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building Plan Architect Rampur | Get a Free Quote | MTBOSS',
    description:
      'Need a building plan architect in Rampur? Get complete plans, 3D elevation and a clear estimate from MTBOSS. WhatsApp or call +91 94584 10866 today.',
    images: ['https://www.MTBOSS.in/og-building-plan-architect-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/building-plan-architect-rampur',
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