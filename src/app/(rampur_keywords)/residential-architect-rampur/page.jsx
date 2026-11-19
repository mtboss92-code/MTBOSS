// app/(rampur_keywords)/residential-architect-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/QuickServices';
import CalculatorCTA from '../../components/CalculatorCTA';
import Services from '../../components/Services';


export const metadata = {
  title: 'Residential Architect Rampur | House Design | MTBOSS',
  description:
    'Residential architect Rampur: house design, floor plans, elevation and construction support with MTBOSS. Clear scope and costs. Call +91 94584 10866.',
  keywords:
    'residential architect Rampur, house architect Rampur, home architect Rampur, house design Rampur, home plan Rampur, floor plan design Rampur, house elevation design Rampur, duplex house design Rampur, villa design Rampur, home construction Rampur, extra floor design Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/residential-architect-rampur',
  },
  openGraph: {
    title: 'Residential Architect Rampur | House Design | MTBOSS',
    description:
      'Residential architect Rampur: house design, floor plans, elevation and construction support with MTBOSS. Clear scope and costs. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/residential-architect-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-residential-architect-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Residential Architect Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Architect Rampur | House Design | MTBOSS',
    description:
      'Residential architect Rampur: house design, floor plans, elevation and construction support with MTBOSS. Clear scope and costs. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-residential-architect-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/residential-architect-rampur',
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