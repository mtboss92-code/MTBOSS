// app/(rampur_keywords)/architect-company-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect Company in Rampur | Design & Build | MTBOSS',
  description:
    'Architect company in Rampur? MTBOSS plans, designs and builds homes and commercial spaces with clear scope and costs. Call +91 94584 10866.',
  keywords:
    'architect company in Rampur, architecture company Rampur, design and build company Rampur, architect and construction company Rampur, house design company Rampur, home construction company Rampur, commercial building company Rampur, interior design company Rampur, building elevation company Rampur, turnkey construction Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-company-in-rampur',
  },
  openGraph: {
    title: 'Architect Company in Rampur | Design & Build | MTBOSS',
    description:
      'Architect company in Rampur? MTBOSS plans, designs and builds homes and commercial spaces with clear scope and costs. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-company-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-company-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect Company in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect Company in Rampur | Design & Build | MTBOSS',
    description:
      'Architect company in Rampur? MTBOSS plans, designs and builds homes and commercial spaces with clear scope and costs. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-company-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-company-in-rampur',
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