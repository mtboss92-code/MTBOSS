// app/(rampur_keywords)/architect-for-hotel-design-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Hotel Design Rampur | Free Quote | MTBOSS',
  description:
    'Planning a hotel or guest house in Rampur? Get guest-friendly layouts, elevation and a clear estimate from MTBOSS. Call +91 94584 10866 today.',
  keywords:
    'architect for hotel design Rampur, hotel building design Rampur, hotel plan Rampur, guest house design Rampur, banquet hall design Rampur, restaurant design Rampur, resort design Rampur, hotel construction Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-hotel-design-rampur',
  },
  openGraph: {
    title: 'Architect for Hotel Design Rampur | Free Quote | MTBOSS',
    description:
      'Planning a hotel or guest house in Rampur? Get guest-friendly layouts, elevation and a clear estimate from MTBOSS. Call +91 94584 10866 today.',
    url: 'https://www.MTBOSS.in/architect-for-hotel-design-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-hotel-design-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Hotel Design Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Hotel Design Rampur | Free Quote | MTBOSS',
    description:
      'Planning a hotel or guest house in Rampur? Get guest-friendly layouts, elevation and a clear estimate from MTBOSS. Call +91 94584 10866 today.',
    images: ['https://www.MTBOSS.in/og-architect-for-hotel-design-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-hotel-design-rampur',
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