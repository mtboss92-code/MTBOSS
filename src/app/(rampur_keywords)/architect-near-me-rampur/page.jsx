// app/(rampur_keywords)/architect-near-me-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';

export const metadata = {
  title: 'Architect Near Me in Rampur | MTBOSS',
  description:
    'Searching for an architect near you in Rampur? See what "near me" should mean, then talk to MTBOSS about design and site visits. Call +91 94584 10866.',
  keywords:
    'architect near me Rampur, architect near me, local architect Rampur, architect near Rampur, house design near me Rampur, architect for home Rampur, architect and builder near me Rampur, architect consultation Rampur, home plan near me Rampur, residential architect near me, nearby architect Rampur, MTBOSS, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-near-me-rampur',
  },
  openGraph: {
    title: 'Architect Near Me in Rampur | MTBOSS',
    description:
      'Searching for an architect near you in Rampur? See what "near me" should mean, then talk to MTBOSS about design and site visits. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/architect-near-me-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-near-me-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect Near Me in Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect Near Me in Rampur | MTBOSS',
    description:
      'Searching for an architect near you in Rampur? See what "near me" should mean, then talk to MTBOSS about design and site visits. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-architect-near-me-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-near-me-rampur',
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