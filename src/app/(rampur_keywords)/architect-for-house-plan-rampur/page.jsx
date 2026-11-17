// app/(rampur_keywords)/architect-for-house-plan-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/QuickServices';
import CalculatorCTA from '../../components/CalculatorCTA';
import Services from '../../components/Services';


export const metadata = {
  title: 'Architect for House Plan Rampur | 2BHK, 3BHK Plans | MTBOSS',
  description:
    'Architect for house plan Rampur: custom 2BHK, 3BHK and duplex plans with elevation and construction support from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for house plan Rampur, house plan Rampur, house plan design Rampur, 2BHK house plan Rampur, 3BHK house plan Rampur, duplex house plan Rampur, floor plan design Rampur, house map design Rampur, east facing house plan Rampur, house plan with elevation Rampur, custom house plan Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-house-plan-rampur',
  },
  openGraph: {
    title: 'Architect for House Plan Rampur | 2BHK, 3BHK Plans | MTBOSS',
    description:
      'Architect for house plan Rampur: custom 2BHK, 3BHK and duplex plans with elevation and construction support from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-house-plan-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-house-plan-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for House Plan Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for House Plan Rampur | 2BHK, 3BHK Plans | MTBOSS',
    description:
      'Architect for house plan Rampur: custom 2BHK, 3BHK and duplex plans with elevation and construction support from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-house-plan-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-house-plan-rampur',
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