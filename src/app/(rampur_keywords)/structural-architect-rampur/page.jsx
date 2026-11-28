// app/(rampur_keywords)/structural-architect-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Structural Architect Rampur | Get a Free Quote | MTBOSS',
  description:
    'Looking for a structural architect in Rampur? MTBOSS coordinates plan and structure for safe, buildable homes. Call +91 94584 10866 for a quote.',
  keywords:
    'structural architect Rampur, structural design Rampur, structural engineer Rampur, structural drawings Rampur, foundation design Rampur, RCC design Rampur, house structure design Rampur, building structure planning Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/structural-architect-rampur',
  },
  openGraph: {
    title: 'Structural Architect Rampur | Get a Free Quote | MTBOSS',
    description:
      'Looking for a structural architect in Rampur? MTBOSS coordinates plan and structure for safe, buildable homes. Call +91 94584 10866 for a quote.',
    url: 'https://www.MTBOSS.in/structural-architect-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-structural-architect-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Structural Architect Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structural Architect Rampur | Get a Free Quote | MTBOSS',
    description:
      'Looking for a structural architect in Rampur? MTBOSS coordinates plan and structure for safe, buildable homes. Call +91 94584 10866 for a quote.',
    images: ['https://www.MTBOSS.in/og-structural-architect-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/structural-architect-rampur',
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