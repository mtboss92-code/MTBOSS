// app/(rampur_keywords)/vastu-architect-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Vastu Architect Rampur | Get a Free Quote | MTBOSS',
  description:
    'Looking for a Vastu architect in Rampur? Get a Vastu-conscious home plan that also works for light, space and budget. Call MTBOSS +91 94584 10866.',
  keywords:
    'Vastu architect Rampur, Vastu house plan Rampur, Vastu home design Rampur, Vastu friendly map Rampur, Vastu compliant house design Rampur, Vastu for shop Rampur, east facing house plan Rampur, north facing house plan Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/vastu-architect-rampur',
  },
  openGraph: {
    title: 'Vastu Architect Rampur | Get a Free Quote | MTBOSS',
    description:
      'Looking for a Vastu architect in Rampur? Get a Vastu-conscious home plan that also works for light, space and budget. Call MTBOSS +91 94584 10866.',
    url: 'https://www.MTBOSS.in/vastu-architect-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-vastu-architect-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Vastu Architect Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vastu Architect Rampur | Get a Free Quote | MTBOSS',
    description:
      'Looking for a Vastu architect in Rampur? Get a Vastu-conscious home plan that also works for light, space and budget. Call MTBOSS +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-vastu-architect-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/vastu-architect-rampur',
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