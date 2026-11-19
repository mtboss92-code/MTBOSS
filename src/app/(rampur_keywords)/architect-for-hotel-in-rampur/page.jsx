// app/(rampur_keywords)/architect-for-hotel-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/QuickServices';
import CalculatorCTA from '../../components/CalculatorCTA';
import Services from '../../components/Services';


export const metadata = {
  title: 'Architect for Hotel in Rampur | Hotel Design | MTBOSS',
  description:
    'Architect for hotel in Rampur: hotel and guest house planning, room design and construction support with MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for hotel in Rampur, hotel architect Rampur, hotel design Rampur, hotel construction Rampur, guest house design Rampur, banquet hall design Rampur, resort architect Rampur, hotel interior design Rampur, hotel building plan Rampur, hotel construction company Rampur, hospitality architect Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-hotel-in-rampur',
  },
  openGraph: {
    title: 'Architect for Hotel in Rampur | Hotel Design | MTBOSS',
    description:
      'Architect for hotel in Rampur: hotel and guest house planning, room design and construction support with MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-hotel-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-hotel-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Hotel in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Hotel in Rampur | Hotel Design | MTBOSS',
    description:
      'Architect for hotel in Rampur: hotel and guest house planning, room design and construction support with MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-hotel-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-hotel-in-rampur',
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