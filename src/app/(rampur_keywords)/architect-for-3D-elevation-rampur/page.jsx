// app/(rampur_keywords)/architect-for-3d-elevation-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for 3D Elevation Rampur | See Your Home First | MTBOSS',
  description:
    'Architect for 3D elevation in Rampur: see colours, materials and lighting before you build. Get a clear MTBOSS plan. Call +91 94584 10866.',
  keywords:
    'architect for 3D elevation Rampur, 3D elevation design Rampur, 3D front elevation Rampur, house elevation designer Rampur, 3D home design Rampur, duplex elevation design Rampur, shop elevation design Rampur, building elevation Rampur, architect and interior Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-3d-elevation-rampur',
  },
  openGraph: {
    title: 'Architect for 3D Elevation Rampur | See Your Home First | MTBOSS',
    description:
      'Architect for 3D elevation in Rampur: see colours, materials and lighting before you build. Get a clear MTBOSS plan. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-3d-elevation-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-3d-elevation-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for 3D Elevation Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for 3D Elevation Rampur | See Your Home First | MTBOSS',
    description:
      'Architect for 3D elevation in Rampur: see colours, materials and lighting before you build. Get a clear MTBOSS plan. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-3d-elevation-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-3d-elevation-rampur',
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