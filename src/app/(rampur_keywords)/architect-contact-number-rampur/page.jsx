// app/(rampur_keywords)/architect-contact-number-rampur/page.jsx
import Banner from './Banner';
import Content from './Content';
import QuickServices from '../../components/home/QuickServices';
import CalculatorCTA from '../../components/home/CalculatorCTA';
import Services from '../../components/home/Services';


export const metadata = {
  title: 'Architect Contact Number Rampur | Call MTBOSS Team',
  description:
    'Architect contact number Rampur: call or WhatsApp MTBOSS at +91 94584 10866 for house design, plans and construction support.',
  keywords:
    'architect contact number Rampur, architect phone number Rampur, architect WhatsApp number Rampur, contact architect in Rampur, MTBOSS contact number, MTBOSS phone number, MTBOSS WhatsApp, architect near me Rampur, book architect Rampur, house design enquiry Rampur, MTBOSS architecture and interior, MTBOSS Moradabad, MTBOSS budget calculator',
  alternates: {
    canonical: 'https://www.MTBOSS.in/architect-contact-number-rampur',
  },
  openGraph: {
    title: 'Architect Contact Number Rampur | Call MTBOSS Team',
    description:
      'Architect contact number Rampur: call or WhatsApp MTBOSS at +91 94584 10866 for house design, plans and construction support.',
    url: 'https://www.MTBOSS.in/architect-contact-number-rampur',
    siteName: 'MTBOSS Construction Private Limited',
    images: [
      {
        url: 'https://www.MTBOSS.in/og-architect-contact-number-rampur.jpg',
        width: 1200,
        height: 630,
        alt: 'Architect Contact Number Rampur - MTBOSS',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect Contact Number Rampur | Call MTBOSS Team',
    description:
      'Architect contact number Rampur: call or WhatsApp MTBOSS at +91 94584 10866 for house design, plans and construction support.',
    images: ['https://www.MTBOSS.in/og-architect-contact-number-rampur.jpg'],
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
    url: 'https://www.MTBOSS.in/architect-contact-number-rampur',
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