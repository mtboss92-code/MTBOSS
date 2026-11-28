// app/(rampur_keywords)/top-architect-in-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';

export const metadata = {
  title: 'Top Architect in Rampur | MTBOSS',
  description:
    'Want a top architect in Rampur? Learn what sets good architects apart and how to shortlist one. Talk to MTBOSS: +91 94584 10866.',
  keywords:
    'top architect in Rampur, top architects Rampur, leading architect in Rampur, experienced architect Rampur, professional architect Rampur, how to shortlist an architect, residential architect Rampur, architect for house design Rampur, architecture firm Rampur, architect and interior designer Rampur, architect and builder Rampur, MTBOSS, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/top-architect-in-rampur',
  },
  openGraph: {
    title: 'Top Architect in Rampur | MTBOSS',
    description:
      'Want a top architect in Rampur? Learn what sets good architects apart and how to shortlist one. Talk to MTBOSS: +91 94584 10866.',
    url: 'https://www.MTBOSS.in/top-architect-in-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-top-architect-in-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Top Architect in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Architect in Rampur | MTBOSS',
    description:
      'Want a top architect in Rampur? Learn what sets good architects apart and how to shortlist one. Talk to MTBOSS: +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-top-architect-in-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/top-architect-in-rampur',
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