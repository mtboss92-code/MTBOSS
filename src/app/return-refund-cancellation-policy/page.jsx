import LegalPageLayout from "../components/legal/LegalPageLayout";
import { returnPolicy } from "../lib/legal/returnPolicy";

const title = "Return, Refund & Cancellation Policy | MTBOSS Construction Private Limited";

export const metadata = {
  title: { absolute: title },
  description: returnPolicy.description,
  alternates: { canonical: "https://www.mtboss.in/return-refund-cancellation-policy" },
  openGraph: {
    title,
    description: returnPolicy.description,
    url: "https://www.mtboss.in/return-refund-cancellation-policy",
    siteName: "MTBOSS Construction Private Limited",
    locale: "en_IN",
    type: "website",
  },
};

export default function ReturnRefundCancellationPolicyPage() {
  return <LegalPageLayout {...returnPolicy} />;
}
