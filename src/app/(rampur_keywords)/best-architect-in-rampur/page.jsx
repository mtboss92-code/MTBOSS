// app/(rampur_keywords)/best-architect-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/QuickServices';
import CalculatorCTA from '../../components/CalculatorCTA';
import Services from '../../components/Services';

export const metadata = {
  title: 'Best Architect in Rampur | MTBOSS',
  description:
    'How to choose the best architect in Rampur? Use our checklist, then talk to MTBOSS about planning, design and construction. Call +91 94584 10866.',
  keywords:
    'best architect in Rampur, top architect in Rampur, good architect in Rampur, how to choose an architect, architect fees Rampur, house design architect Rampur, residential architect Rampur, architect near me Rampur, architect and interior designer Rampur, architect and builder Rampur, building design Rampur, MTBOSS, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/best-architect-in-rampur',
  },
  openGraph: {
    title: 'Best Architect in Rampur | MTBOSS',
    description:
      'How to choose the best architect in Rampur? Use our checklist, then talk to MTBOSS about planning, design and construction. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/best-architect-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-best-architect-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Architect in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Architect in Rampur | MTBOSS',
    description:
      'How to choose the best architect in Rampur? Use our checklist, then talk to MTBOSS about planning, design and construction. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-best-architect-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/best-architect-in-rampur',
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