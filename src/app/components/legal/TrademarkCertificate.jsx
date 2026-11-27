import Image from "next/image";
import ResponsiveLegalTable from "./ResponsiveLegalTable";

const details = [
  ["Certificate", "Certificate of Registration of Trade Mark"],
  ["Form", "Form RG-2"],
  ["Statute", "Trade Marks Act, 1999"],
  ["Provision", "Section 23 (2), Rule 56 (1)"],
  ["Issuing authority", "Trade Marks Registry, Government of India"],
  ["Certificate number", "4009034"],
  ["Trade Mark No.", "6612620"],
  ["Date", "06-09-2024"],
  ["J. No.", "2256"],
  ["Registered as of", "06 September 2024"],
  ["Class", "37"],
  ["Mark", "MTBOSS"],
  ["Goods and services", "Construction services; Installation and repair services; Mining extraction, oil and gas drilling"],
  ["Sealed", "Sealed at my direction, this 06th day of September, 2026"],
  ["Registry office", "Trade Marks Registry, Mumbai"],
  ["Signatory", "Registrar of Trademarks"],
];

export default function TrademarkCertificate() {
  return (
    <div className="space-y-8">
      <section aria-labelledby="certificate-details" className="scroll-mt-28 rounded-2xl border border-[var(--brand-blue-pale)] bg-[var(--brand-blue-faint)] p-5 sm:p-7 dark:border-zinc-700 dark:bg-zinc-950">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-blue-ink)] dark:text-[var(--brand-blue-light)]">Government of India</p>
        <h2 id="certificate-details" className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">Registration details</h2>
        <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          Certified that the trade mark, a representation of which is annexed to the certificate, has been registered in the name of the proprietor below.
        </p>
        <ResponsiveLegalTable caption="Particulars taken from the certificate" columns={["Particular", "Recorded detail"]} rows={details} />
      </section>

      <section aria-labelledby="proprietor" className="scroll-mt-28">
        <h2 id="proprietor" className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">Proprietor</h2>
        <p className="mt-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">
          MTBOSS CONSTRUCTION PRIVATE LIMITED, WARD 10 KAZIPURA THANA, CIVIL LINES MORADABAD-244001 UTTAR PRADESH INDIA, BODY INCORPORATE (Body Incorporate).
        </p>
      </section>

      <section aria-labelledby="statutory-notes" className="scroll-mt-28">
        <h2 id="statutory-notes" className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">Notes printed on the certificate</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-zinc-700 marker:text-[var(--brand-blue-ink)] dark:text-zinc-300">
          <li>Registration is for 10 years from the date of application and may then be renewed for a period of 10 years and also at the expiration of each period of 10 years.</li>
          <li>This certificate is not for use in legal proceedings or for obtaining Registration abroad.</li>
        </ul>
      </section>

      <section aria-labelledby="certificate-preview" className="scroll-mt-28">
        <h2 id="certificate-preview" className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">Certificate preview</h2>
        <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          The image below is a preview of the registration certificate. The details above are the accessible text of the same document.
        </p>
        <Image
          src="/documents/mtboss-trademark-certificate-preview.jpg"
          alt="Certificate of Registration of Trade Mark number 6612620 for the mark MTBOSS, issued to MTBOSS Construction Private Limited by the Trade Marks Registry, Government of India."
          width={765}
          height={1096}
          loading="lazy"
          className="mt-5 h-auto w-full max-w-xl rounded-xl border border-zinc-200 dark:border-zinc-700"
        />
      </section>
    </div>
  );
}
