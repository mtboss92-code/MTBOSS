// app/(rampur_keywords)/architect-for-nursing-home-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Nursing Home Rampur | Design & Build | MTBOSS',
  description:
    'Architect for nursing home Rampur: compact hospital planning, ward layouts and construction support from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for nursing home Rampur, nursing home design Rampur, nursing home building plan Rampur, small hospital design Rampur, 20 bed hospital design Rampur, nursing home construction Rampur, clinic to nursing home conversion Rampur, nursing home interior design Rampur, healthcare building design Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-nursing-home-rampur',
  },
  openGraph: {
    title: 'Architect for Nursing Home Rampur | Design & Build | MTBOSS',
    description:
      'Architect for nursing home Rampur: compact hospital planning, ward layouts and construction support from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-nursing-home-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-nursing-home-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Nursing Home Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Nursing Home Rampur | Design & Build | MTBOSS',
    description:
      'Architect for nursing home Rampur: compact hospital planning, ward layouts and construction support from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-nursing-home-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-nursing-home-rampur',
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