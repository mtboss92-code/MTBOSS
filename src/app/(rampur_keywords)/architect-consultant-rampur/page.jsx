// app/(rampur_keywords)/architect-consultant-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect Consultant Rampur | Planning Advice | MTBOSS',
  description:
    'Architect consultant Rampur: get plot review, design advice and cost planning for your project from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect consultant Rampur, architectural consultant Rampur, building design consultant Rampur, house plan consultant Rampur, construction consultant Rampur, plot evaluation Rampur, building cost planning Rampur, design review Rampur, renovation consultant Rampur, interior consultant Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-consultant-rampur',
  },
  openGraph: {
    title: 'Architect Consultant Rampur | Planning Advice | MTBOSS',
    description:
      'Architect consultant Rampur: get plot review, design advice and cost planning for your project from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-consultant-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-consultant-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect Consultant Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect Consultant Rampur | Planning Advice | MTBOSS',
    description:
      'Architect consultant Rampur: get plot review, design advice and cost planning for your project from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-consultant-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-consultant-rampur',
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