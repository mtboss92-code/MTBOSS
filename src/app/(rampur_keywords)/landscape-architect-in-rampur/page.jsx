// app/(rampur_keywords)/landscape-architect-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Landscape Architect Rampur | Get a Free Quote | MTBOSS',
  description:
    'Need a landscape architect in Rampur? Plan gardens, terraces and outdoor spaces with MTBOSS and get a clear quote. Call +91 94584 10866.',
  keywords:
    'landscape architect Rampur, landscape design Rampur, garden design Rampur, terrace garden design Rampur, home landscaping Rampur, outdoor space design Rampur, front yard design Rampur, boundary and gate design Rampur, paving and parking design Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/landscape-architect-rampur',
  },
  openGraph: {
    title: 'Landscape Architect Rampur | Get a Free Quote | MTBOSS',
    description:
      'Need a landscape architect in Rampur? Plan gardens, terraces and outdoor spaces with MTBOSS and get a clear quote. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/landscape-architect-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-landscape-architect-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Landscape Architect Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscape Architect Rampur | Get a Free Quote | MTBOSS',
    description:
      'Need a landscape architect in Rampur? Plan gardens, terraces and outdoor spaces with MTBOSS and get a clear quote. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-landscape-architect-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/landscape-architect-rampur',
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