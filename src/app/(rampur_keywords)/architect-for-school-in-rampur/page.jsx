// app/(rampur_keywords)/architect-for-school-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect for School in Rampur | School Design | MTBOSS',
  description:
    'Architect for school in Rampur: school building design, classroom planning and construction support with MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect for school in Rampur, school architect Rampur, school building design Rampur, school construction Rampur, school planning Rampur, classroom design Rampur, school building plan Rampur, school renovation Rampur, school playground design Rampur, school construction company Rampur, institutional building architect Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-for-school-in-rampur',
  },
  openGraph: {
    title: 'Architect for School in Rampur | School Design | MTBOSS',
    description:
      'Architect for school in Rampur: school building design, classroom planning and construction support with MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-for-school-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-for-school-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect for School in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect for School in Rampur | School Design | MTBOSS',
    description:
      'Architect for school in Rampur: school building design, classroom planning and construction support with MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-for-school-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-for-school-in-rampur',
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