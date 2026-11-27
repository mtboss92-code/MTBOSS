import LegalPageLayout from "../components/legal/LegalPageLayout";
import TrademarkCertificate from "../components/legal/TrademarkCertificate";

const title = "Trademark Registration Certificate | MTBOSS Construction Private Limited";
const description = "Certificate of Registration of Trade Mark No. 6612620 for the mark MTBOSS, Class 37, registered in the name of MTBOSS Construction Private Limited.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://www.mtboss.in/trademark-certificate" },
  openGraph: {
    title,
    description,
    url: "https://www.mtboss.in/trademark-certificate",
    siteName: "MTBOSS Construction Private Limited",
    locale: "en_IN",
    type: "website",
  },
};

const tocItems = [
  { id: "certificate-details", label: "Registration details", level: 2 },
  { id: "proprietor", label: "Proprietor", level: 2 },
  { id: "statutory-notes", label: "Notes printed on the certificate", level: 2 },
  { id: "certificate-preview", label: "Certificate preview", level: 2 },
];

export default function TrademarkCertificatePage() {
  return (
    <LegalPageLayout
      eyebrow="Trade Marks Registry, Government of India"
      title="Trademark Registration Certificate"
      description={description}
      version="Form RG-2 | Trade Mark No. 6612620 | Date 06-09-2024"
      pdfPath="/documents/mtboss-trademark-registration-certificate.pdf"
      path="/trademark-certificate"
      tocItems={tocItems}
    >
      <TrademarkCertificate />
    </LegalPageLayout>
  );
}
