// app/(rampur_keywords)/architect-for-showroom-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/QuickServices';
import CalculatorCTA from '../../components/CalculatorCTA';
import Services from '../../components/Services';


export const metadata = {
  title: 'Architect for Showroom Rampur | Showroom Design | MTBOSS',
  description:
    'Architect for showroom Rampur: showroom layout, facade, interiors and construction support from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for showroom Rampur, showroom design Rampur, showroom interior design Rampur, showroom construction Rampur, showroom elevation Rampur, car showroom design Rampur, furniture showroom design Rampur, tile showroom design Rampur, electronics showroom design Rampur, jewellery showroom design Rampur, showroom fit-out Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-showroom-rampur',
  },
  openGraph: {
    title: 'Architect for Showroom Rampur | Showroom Design | MTBOSS',
    description:
      'Architect for showroom Rampur: showroom layout, facade, interiors and construction support from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-showroom-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-showroom-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Showroom Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Showroom Rampur | Showroom Design | MTBOSS',
    description:
      'Architect for showroom Rampur: showroom layout, facade, interiors and construction support from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-showroom-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-showroom-rampur',
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