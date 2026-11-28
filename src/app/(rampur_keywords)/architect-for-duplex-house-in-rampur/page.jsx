// app/(rampur_keywords)/architect-for-duplex-house-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for Duplex House Rampur | Free Quote | MTBOSS',
  description:
    'Need an architect for a duplex house in Rampur? Get smart plans, 3D elevation and a clear estimate from MTBOSS. WhatsApp or call +91 94584 10866.',
  keywords:
    'architect for duplex house Rampur, duplex house design Rampur, duplex house plan Rampur, duplex elevation design Rampur, 2 floor house design Rampur, duplex house construction Rampur, duplex map Rampur, duplex home architect Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS free quote',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-duplex-house-rampur',
  },
  openGraph: {
    title: 'Architect for Duplex House Rampur | Free Quote | MTBOSS',
    description:
      'Need an architect for a duplex house in Rampur? Get smart plans, 3D elevation and a clear estimate from MTBOSS. WhatsApp or call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-duplex-house-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-duplex-house-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for Duplex House Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for Duplex House Rampur | Free Quote | MTBOSS',
    description:
      'Need an architect for a duplex house in Rampur? Get smart plans, 3D elevation and a clear estimate from MTBOSS. WhatsApp or call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-duplex-house-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-duplex-house-rampur',
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