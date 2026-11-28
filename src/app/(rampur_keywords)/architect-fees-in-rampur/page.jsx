// app/(rampur_keywords)/architect-fees-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect Fees in Rampur | Fee Models Explained | MTBOSS',
  description:
    'Architect fees in Rampur explained: per sq ft, percentage and lump-sum models, what is included and how to compare quotes. Call MTBOSS +91 94584 10866.',
  keywords:
    'architect fees in Rampur, architect fee structure Rampur, architect charges per sq ft Rampur, architect percentage fee Rampur, house design fees Rampur, architect payment schedule Rampur, architect quote comparison Rampur, architect and interior Rampur, design and build Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-fees-in-rampur',
  },
  openGraph: {
    title: 'Architect Fees in Rampur | Fee Models Explained | MTBOSS',
    description:
      'Architect fees in Rampur explained: per sq ft, percentage and lump-sum models, what is included and how to compare quotes. Call MTBOSS +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-fees-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-fees-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect Fees in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect Fees in Rampur | Fee Models Explained | MTBOSS',
    description:
      'Architect fees in Rampur explained: per sq ft, percentage and lump-sum models, what is included and how to compare quotes. Call MTBOSS +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-fees-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-fees-in-rampur',
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