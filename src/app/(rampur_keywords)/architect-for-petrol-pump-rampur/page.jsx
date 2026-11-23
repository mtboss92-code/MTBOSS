// app/(rampur_keywords)/architect-for-petrol-pump-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Petrol Pump Rampur | Fuel Station | MTBOSS',
  description:
    'Architect for petrol pump Rampur: site layout, building design and civil construction support for fuel stations with MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for petrol pump Rampur, petrol pump design Rampur, fuel station design Rampur, petrol pump layout Rampur, petrol pump construction Rampur, petrol pump building design Rampur, petrol pump civil work Rampur, CNG station design Rampur, fuel station canopy design Rampur, petrol pump convenience store design Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-petrol-pump-rampur',
  },
  openGraph: {
    title: 'Architect for Petrol Pump Rampur | Fuel Station | MTBOSS',
    description:
      'Architect for petrol pump Rampur: site layout, building design and civil construction support for fuel stations with MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-petrol-pump-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-petrol-pump-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Petrol Pump Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Petrol Pump Rampur | Fuel Station | MTBOSS',
    description:
      'Architect for petrol pump Rampur: site layout, building design and civil construction support for fuel stations with MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-petrol-pump-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-petrol-pump-rampur',
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