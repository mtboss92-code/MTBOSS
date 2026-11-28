import LegalPageLayout from "../components/legal/LegalPageLayout";
import { termsAndConditions } from "../lib/legal/terms";

const title = "Terms and Conditions | MTBOSS Construction Private Limited";

export const metadata = {
  title: { absolute: title },
  description: termsAndConditions.description,
  alternates: { canonical: "https://www.mtboss.in/terms-and-conditions" },
  openGraph: {
    title,
    description: termsAndConditions.description,
    url: "https://www.mtboss.in/terms-and-conditions",
    siteName: "MTBOSS Construction Private Limited",
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return <LegalPageLayout {...termsAndConditions} />;
}
