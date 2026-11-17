// app/(rampur_keywords)/architect-for-hostel-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/QuickServices';
import CalculatorCTA from '../../components/CalculatorCTA';
import Services from '../../components/Services';


export const metadata = {
  title: 'Architect for Hostel Rampur | Hostel & PG Design | MTBOSS',
  description:
    'Architect for hostel Rampur: hostel and PG planning, room layouts and construction support from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for hostel Rampur, hostel design Rampur, hostel building plan Rampur, PG building design Rampur, girls hostel design Rampur, boys hostel design Rampur, student hostel construction Rampur, hostel construction Rampur, hostel interior design Rampur, hostel renovation Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-hostel-rampur',
  },
  openGraph: {
    title: 'Architect for Hostel Rampur | Hostel & PG Design | MTBOSS',
    description:
      'Architect for hostel Rampur: hostel and PG planning, room layouts and construction support from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-hostel-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-hostel-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Hostel Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Hostel Rampur | Hostel & PG Design | MTBOSS',
    description:
      'Architect for hostel Rampur: hostel and PG planning, room layouts and construction support from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-hostel-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-hostel-rampur',
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