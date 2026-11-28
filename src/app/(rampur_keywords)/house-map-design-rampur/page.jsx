// app/(rampur_keywords)/house-map-design-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'House Map Design Rampur | Floor Plan and Elevation | MTBOSS',
  description:
    'House map design in Rampur: get a practical floor plan, 3D elevation and working drawings that fit your plot. Call MTBOSS on +91 94584 10866.',
  keywords:
    'house map design Rampur, house plan design Rampur, home map Rampur, floor plan design Rampur, house map with 3D elevation Rampur, 2BHK 3BHK house plan Rampur, duplex house map Rampur, Vastu house map Rampur, building plan Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/house-map-design-rampur',
  },
  openGraph: {
    title: 'House Map Design Rampur | Floor Plan and Elevation | MTBOSS',
    description:
      'House map design in Rampur: get a practical floor plan, 3D elevation and working drawings that fit your plot. Call MTBOSS on +91 94584 10866.',
    url: 'https://www.MTBOSS.in/house-map-design-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-house-map-design-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'House Map Design Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Map Design Rampur | Floor Plan and Elevation | MTBOSS',
    description:
      'House map design in Rampur: get a practical floor plan, 3D elevation and working drawings that fit your plot. Call MTBOSS on +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-house-map-design-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/house-map-design-rampur',
    telephone: '+91-9458410866',
    email: 'inquiry@mtboss.in',
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