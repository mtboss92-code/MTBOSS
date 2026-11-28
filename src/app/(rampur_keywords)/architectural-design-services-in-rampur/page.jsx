// app/(rampur_keywords)/architectural-design-services-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architectural Design Services Rampur | Free Quote | MTBOSS',
  description:
    'Architectural design services in Rampur for homes, shops and buildings. Get plans, 3D elevation and a clear estimate. Call MTBOSS +91 94584 10866.',
  keywords:
    'architectural design services Rampur, architecture services Rampur, house design services Rampur, building design services Rampur, 3D elevation Rampur, floor plan design Rampur, commercial building design Rampur, interior and architecture Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architectural-design-services-rampur',
  },
  openGraph: {
    title: 'Architectural Design Services Rampur | Free Quote | MTBOSS',
    description:
      'Architectural design services in Rampur for homes, shops and buildings. Get plans, 3D elevation and a clear estimate. Call MTBOSS +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architectural-design-services-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architectural-design-services-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architectural Design Services Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architectural Design Services Rampur | Free Quote | MTBOSS',
    description:
      'Architectural design services in Rampur for homes, shops and buildings. Get plans, 3D elevation and a clear estimate. Call MTBOSS +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architectural-design-services-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architectural-design-services-rampur',
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