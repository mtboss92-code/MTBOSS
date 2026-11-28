// app/(rampur_keywords)/architect-and-builder-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect and Builder in Rampur | Design & Build | MTBOSS',
  description:
    'Architect and builder in Rampur: design, construction and handover under one clear scope with quality checks from MTBOSS. Call +91 94584 10866.',
  keywords:
    'architect and builder in Rampur, architect and builder Rampur, design and build Rampur, architect cum builder Rampur, house design and construction Rampur, turnkey construction Rampur, home builder Rampur, building contractor Rampur, residential builder Rampur, construction quality checks Rampur, MTBOSS architecture and interior, MTBOSS building contractor, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-and-builder-in-rampur',
  },
  openGraph: {
    title: 'Architect and Builder in Rampur | Design & Build | MTBOSS',
    description:
      'Architect and builder in Rampur: design, construction and handover under one clear scope with quality checks from MTBOSS. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-and-builder-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-and-builder-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect and Builder in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect and Builder in Rampur | Design & Build | MTBOSS',
    description:
      'Architect and builder in Rampur: design, construction and handover under one clear scope with quality checks from MTBOSS. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-and-builder-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-and-builder-in-rampur',
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