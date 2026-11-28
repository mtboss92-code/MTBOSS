import LegalPageLayout from "../components/legal/LegalPageLayout";
import { privacyPolicy } from "../lib/legal/privacyPolicy";

const title = "Privacy Policy | MTBOSS Construction Private Limited";

export const metadata = {
  title: { absolute: title },
  description: privacyPolicy.description,
  alternates: { canonical: "https://www.mtboss.in/privacy-policy" },
  openGraph: {
    title,
    description: privacyPolicy.description,
    url: "https://www.mtboss.in/privacy-policy",
    siteName: "MTBOSS Construction Private Limited",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout {...privacyPolicy} />;
}
