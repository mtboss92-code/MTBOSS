// app/(bareilly_keywords)/complete-home-makeover-bareilly/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Complete Home Makeover in Bareilly | MTBOSS',
  description:
    'Planning a complete home makeover in Bareilly? MTBOSS plans repairs, interiors, kitchen, bathrooms and finishing as one project. Call +91 94584 10866.',
  keywords:
    'complete home makeover Bareilly, full home makeover Bareilly, whole house makeover Bareilly, home transformation Bareilly, complete home renovation Bareilly, full house renovation Bareilly, home makeover cost Bareilly, home makeover timeline, turnkey home makeover Bareilly, house makeover contractor Bareilly, interior and renovation Bareilly, MTBOSS Bareilly, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/complete-home-makeover-bareilly',
  },
  openGraph: {
    title: 'Complete Home Makeover in Bareilly | MTBOSS',
    description:
      'Planning a complete home makeover in Bareilly? MTBOSS plans repairs, interiors, kitchen, bathrooms and finishing as one project. Call +91 94584 10866.',
    url: 'https://www.MTBOSS.in/complete-home-makeover-bareilly',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-complete-home-makeover-bareilly.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Home Makeover in Bareilly - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Home Makeover in Bareilly | MTBOSS',
    description:
      'Planning a complete home makeover in Bareilly? MTBOSS plans repairs, interiors, kitchen, bathrooms and finishing as one project. Call +91 94584 10866.',
    images: ['https://www.MTBOSS.in/og-complete-home-makeover-bareilly.jpg'],
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
    url: 'https://www.MTBOSS.in/complete-home-makeover-bareilly',
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
      name: 'Bareilly',
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