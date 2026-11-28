// app/(rampur_keywords)/architect-cost-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect Cost in Rampur | Budget Planning Guide | MTBOSS',
  description:
    'Architect cost in Rampur is part of your total building budget. Learn what to plan for and get a clear MTBOSS estimate. Call +91 94584 10866.',
  keywords:
    'architect cost in Rampur, cost of hiring an architect Rampur, house building cost planning Rampur, home construction budget Rampur, total project cost Rampur, design and construction cost Rampur, building budget calculator Rampur, house design and build cost Rampur, interior and construction cost Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-cost-in-rampur',
  },
  openGraph: {
    title: 'Architect Cost in Rampur | Budget Planning Guide | MTBOSS',
    description:
      'Architect cost in Rampur is part of your total building budget. Learn what to plan for and get a clear MTBOSS estimate. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-cost-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-cost-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect Cost in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect Cost in Rampur | Budget Planning Guide | MTBOSS',
    description:
      'Architect cost in Rampur is part of your total building budget. Learn what to plan for and get a clear MTBOSS estimate. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-cost-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-cost-in-rampur',
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