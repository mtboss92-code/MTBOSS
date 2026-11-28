import { companyIdentity, documentVersion } from "./companyIdentity";

const partA = { id: "part-a", label: "Part A", title: "General: applies to everyone" };
const partB = { id: "part-b", label: "Part B", title: "Customers and Shop Now Buyers" };
const partC = { id: "part-c", label: "Part C", title: "Suppliers (Vendors): VendorHub Registration" };
const partD = { id: "part-d", label: "Part D", title: "Service Providers: Service Provider Hub Registration" };
const partE = { id: "part-e", label: "Part E", title: "Agents, Franchise Partners and Professionals" };
const contact = { id: "contact", label: "Contact", title: "Grievance Officer and Updates" };

export const privacyPolicy = {
  path: "/privacy-policy",
  pdfPath: "/documents/mtboss-privacy-policy.pdf",
  eyebrow: "DPDP Act 2023 ready | Marketplace edition",
  title: "Privacy Policy",
  description: "How MTBOSS collects, uses, shares and protects your data. This policy covers customers, suppliers (vendors) and service providers.",
  version: documentVersion,
  intro: [
    companyIdentity,
    {
      type: "notice",
      title: "Privacy at a glance",
      items: [
        "We collect only the data needed to run the platform, process orders, verify Suppliers and Service Providers, and meet legal duties.",
        "We never sell your personal data. We share it only with people who need it to serve you (for example a Supplier who must deliver your order).",
        "Customers, Suppliers (Vendors) and Service Providers have separate sections below (Parts B, C and D). Please read Part A and the part that fits you.",
        "You can ask to see, correct or delete your data, withdraw consent or complain at any time (Section 12).",
      ],
    },
  ],
  sections: [
    {
      id: "about-this-policy",
      number: "1",
      title: "About this Policy",
      part: partA,
      blocks: [
        { type: "p", text: "1.1 This Privacy Policy explains how MTBOSS Construction Private Limited (“MTBOSS”, “we”, “us”), CIN U42900UP2024PTC204997, Moradabad, Uttar Pradesh, handles personal data when you use www.mtboss.in, Shop Now, the Supplier registration portal (VendorHub), the Service Provider registration portal (Service Provider Hub), the Budget Calculator, the MTBOSS AI assistant, our WhatsApp and phone support, and related apps (together, the “Platform”)." },
        { type: "p", text: "1.2 For the Digital Personal Data Protection Act, 2023 (“DPDP Act”) and the DPDP Rules, 2025, MTBOSS is the Data Fiduciary for personal data it collects for its own purposes. This Policy also follows the Information Technology Act, 2000 and the rules under it, to the extent they apply." },
        { type: "p", text: "1.3 This Policy is a separate notice from our Terms and Conditions. Accepting the Terms does not by itself give consent to use your personal data for optional purposes." },
      ],
    },
    {
      id: "data-we-collect",
      number: "2",
      title: "Data We Collect from All Users",
      part: partA,
      blocks: [
        {
          type: "ul",
          items: [
            "Account and contact data: name, email address, mobile number, password (stored in protected form), role (Customer, Supplier, Service Provider, Agent, Franchise partner or Professional).",
            "Technical data: IP address, device and browser type, operating system, pages and features used, date and time, referral source and approximate location from IP.",
            "Location data: the delivery location you choose (for example “Deliver to Moradabad”), and precise device location only if you allow it in your device settings.",
            "Communication data: your enquiries, chat messages with the MTBOSS AI assistant, support tickets, WhatsApp and call records related to support, and feedback or reviews.",
            "Cookies and similar technologies: see Section 7.",
          ],
        },
        { type: "p", text: "2.1 We do not intentionally collect sensitive personal information such as health data, caste, religion or biometric data. Please do not upload such data unless a specific form asks for it for a lawful reason." },
      ],
    },
    {
      id: "purposes",
      number: "3",
      title: "Why We Use Personal Data (Purposes)",
      part: partA,
      blocks: [
        {
          type: "ul",
          items: [
            "To create and manage your account, and to log you in securely.",
            "To respond to enquiries, prepare quotes and enter into and perform contracts.",
            "To process orders, payments, deliveries, returns, refunds, wallet and cashback (customers).",
            "To verify and onboard Suppliers and Service Providers, and to connect them with customers.",
            "To prevent fraud, abuse, money laundering and unlawful activity, and for KYC, sanctions and safety checks.",
            "To keep accounting, GST and tax records and meet legal and regulatory duties.",
            "To operate, secure, test and improve the Platform, and to analyse how it is used.",
            "To send service messages (order, payment, account and security alerts) and, with your consent, offers and promotions.",
            "To resolve complaints and disputes and to establish, exercise or defend legal claims.",
          ],
        },
      ],
    },
    {
      id: "consent",
      number: "4",
      title: "Consent and Other Lawful Grounds",
      part: partA,
      blocks: [
        { type: "p", text: "4.1 Where we need your consent, we ask for it clearly, for a stated purpose, and separately from the Terms. Consent is optional where the service can be provided without it, and refusing optional consent (for example marketing) will not stop you from using the Platform." },
        { type: "p", text: "4.2 We may also process data without consent where the DPDP Act allows, for example to perform a legal obligation, to respond to a court order or government request, to deal with a medical emergency or a threat to life, or for purposes you have voluntarily shared your data for and have not objected to." },
        { type: "p", text: "4.3 You can withdraw consent at any time as explained in Section 12. Withdrawal will not affect what we did before, and some features may stop working if the data is needed for them." },
      ],
    },
    {
      id: "sharing",
      number: "5",
      title: "Who We Share Data With",
      part: partA,
      blocks: [
        { type: "p", text: "We do not sell personal data. We share it only as needed, with:" },
        {
          type: "ul",
          items: [
            "Suppliers and Service Providers, to the extent needed to fulfil your order or booking (see Parts B, C and D).",
            "Delivery and logistics partners who deliver goods to you or return them.",
            "Payment partners such as banks, payment gateways, UPI and card networks. Card and bank details are entered on their secure pages and are not stored by MTBOSS.",
            "Technology vendors such as hosting, cloud, SMS, email, WhatsApp, analytics, customer support and AI service providers, who process data on our instructions under confidentiality and security terms.",
            "Verification partners for identity, address, GST, PAN and bank account checks.",
            "Professional advisers such as auditors, accountants, lawyers and insurers.",
            "Authorities such as courts, tax departments, police and regulators, where law requires or to protect rights and safety.",
            "A buyer or successor, if MTBOSS is merged, acquired or restructured, subject to this Policy continuing to protect your data.",
          ],
        },
      ],
    },
    {
      id: "cross-border",
      number: "6",
      title: "Cross-Border Transfers",
      part: partA,
      blocks: [
        { type: "p", text: "Your data is stored mainly in India. Some service providers may process data in other countries, with suitable safeguards. We will transfer personal data outside India only as permitted by the DPDP Act and any restrictions notified by the Government of India." },
      ],
    },
    {
      id: "cookies",
      number: "7",
      title: "Cookies",
      part: partA,
      blocks: [
        { type: "p", text: "We use cookies and similar tools for essential functions (login, cart, security), preferences (such as saved location and dark mode), and analytics. Essential cookies are needed for the Platform to work. Non-essential cookies are used only with your consent where required. You can manage cookies in your browser settings, but disabling some may affect the Platform." },
      ],
    },
    {
      id: "retention",
      number: "8",
      title: "How Long We Keep Data",
      part: partA,
      blocks: [
        {
          type: "table",
          caption: "Retention periods",
          columns: ["Type of data", "Retention"],
          rows: [
            ["Enquiries and leads that do not become orders", "Up to [12] months from last contact"],
            ["Account data", "While your account is active, and for [__] after closure unless you ask for earlier deletion and no legal need to keep it exists"],
            ["Orders, invoices, payments, returns and tax records", "As required by tax, GST, company and accounting laws, generally at least [6 to 8] years"],
            ["Supplier and Service Provider KYC and onboarding records", "During the relationship and for [__] years after it ends, or longer if law requires"],
            ["Support chats and call records", "Up to [24] months"],
            ["Website logs and security records", "At least [1] year, as the law requires for certain logs"],
          ],
        },
        { type: "p", text: "When data is no longer needed, we delete it or anonymise it. Where the DPDP Act requires, we will give you notice before deleting certain data." },
      ],
    },
    {
      id: "security",
      number: "9",
      title: "Security and Data Breaches",
      part: partA,
      blocks: [
        { type: "p", text: "9.1 We use reasonable security safeguards, including encryption of data in transit, access controls, secure hosting, logging and staff confidentiality. Passwords are stored in protected form. Please choose a strong password and keep it private." },
        { type: "p", text: "9.2 No system is completely secure. If a personal data breach occurs, we will inform the Data Protection Board of India and affected users as the law requires, and will take steps to reduce harm." },
      ],
    },
    {
      id: "children",
      number: "10",
      title: "Children",
      part: partA,
      blocks: [
        { type: "p", text: "The Platform is for persons aged 18 years or above. We do not knowingly collect personal data of children. If you believe a child has given us data, contact us and we will delete it, unless the law requires otherwise." },
      ],
    },
    {
      id: "ai-assistant",
      number: "11",
      title: "MTBOSS AI Assistant and Automated Tools",
      part: partA,
      blocks: [
        { type: "p", text: "Chats with the MTBOSS AI assistant may be stored and reviewed to answer you, improve quality and prevent misuse. Please do not enter passwords, card or bank details, or sensitive personal data in the chat. AI answers, estimates and the Budget Calculator are indicative only and are not professional advice." },
      ],
    },
    {
      id: "your-rights",
      number: "12",
      title: "Your Rights and How to Use Them",
      part: partA,
      blocks: [
        {
          type: "ul",
          items: [
            "Access: ask for a summary of your personal data we process and who it has been shared with.",
            "Correction and updating: ask us to correct or complete inaccurate data.",
            "Erasure: ask us to delete your data, unless we must keep it for legal or tax reasons or to handle a claim.",
            "Withdraw consent: at any time, as easily as it was given (including the opt-out link in promotional messages, or by replying STOP).",
            "Grievance redressal: complain to our Grievance Officer. We acknowledge within 48 hours and aim to resolve within 30 days.",
            "Nominate: name another person to exercise your rights if you die or become unable to.",
            "Data Protection Board: if you are not satisfied after using our grievance process, you may complain to the Data Protection Board of India.",
          ],
        },
        { type: "p", text: "12.1 To use these rights, write to the Grievance Officer in Section 19 from your registered email or mobile. We may ask for proof of identity. Users in places with their own data law (for example the EU or UK) may also use the rights that law gives." },
      ],
    },
    {
      id: "marketing",
      number: "13",
      title: "Marketing and WhatsApp Messages",
      part: partA,
      blocks: [
        { type: "p", text: "We send promotional messages only if you have agreed. Service messages such as order confirmation, delivery updates, payment alerts and security notices are not promotional. You can opt out of promotions at any time." },
      ],
    },
    {
      id: "third-parties",
      number: "14",
      title: "Third-Party Links and Services",
      part: partA,
      blocks: [
        { type: "p", text: "The Platform may link to other websites or embed services (for example maps, payment pages, WhatsApp). Their privacy practices are their own. Please read their policies." },
      ],
    },
    {
      id: "customers",
      number: "15",
      title: "Customers: Data and Use",
      part: partB,
      blocks: [
        { type: "p", text: "15.1 Data we collect: name, mobile number, email, delivery and billing addresses, GSTIN or PAN (if you want a business invoice), project site location, quote requests and project files or drawings you upload, order, cart, wallet and cashback history, payment status and references (not full card numbers), delivery and return details, reviews and support conversations." },
        { type: "p", text: "15.2 How we use it: to confirm and deliver orders, collect payments and Pay on Delivery amounts, process returns and refunds, run the Wallet and cashback, issue invoices, provide support, and prevent fraud." },
        { type: "p", text: "15.3 What Suppliers see: when you place an order, the Supplier and delivery partner receive your name, delivery address, contact number and order details so they can deliver. They may use this data only for that order and for legal duties. They are not allowed to use it for their own marketing without your consent." },
        { type: "p", text: "15.4 Reviews and ratings you post may be shown publicly with your first name or a username. Please do not post personal data in reviews." },
        { type: "p", text: "15.5 Project services: for construction and project work, we use your site details, plans and contact information to prepare Quotations and carry out the work, and may share them with subcontractors and specialists who need them." },
      ],
    },
    {
      id: "suppliers",
      number: "16",
      title: "Suppliers: Store Registration and Selling",
      part: partC,
      blocks: [
        { type: "p", text: "16.1 Data we collect during registration (multi-step store creation): login email and password; business or store name; owner, partner or authorised signatory name and contact details; PAN; GSTIN and other registrations or licences; identity and address proof of the business and signatory; registered, warehouse and pickup addresses; bank account details for settlements; product catalogue, prices, stock, photographs and certificates; ratings, complaints and performance data; and agreements and communications with us." },
        { type: "p", text: "16.2 Why we collect it: to verify the business (the basis of our “Verified Supplier” status), set up the store, list products, receive and fulfil orders, pay settlements, comply with GST, TCS, TDS and other tax rules, prevent fraud and counterfeit goods, handle returns and disputes, and keep records." },
        { type: "p", text: "16.3 What is shown publicly: store name, logo, business description, product listings, ratings, returns and delivery performance and the city or area of dispatch. We do not show your PAN, bank details, personal phone number or identity documents to buyers." },
        { type: "p", text: "16.4 What we share: with payment and settlement partners (bank details), verification partners, logistics partners (pickup address and contact), tax authorities and other authorities as required, and with Buyers only the Supplier information needed for an order, invoice or complaint (for example business name, GSTIN and invoice details)." },
        { type: "p", text: "16.5 Buyer data you receive: as a Supplier you receive Buyer details only to fulfil that order. You must keep it confidential, protect it, use it for no other purpose, and delete it when no longer needed, except where law requires you to keep invoice records. Supplier is responsible for its own compliance as an independent Data Fiduciary for such data." },
        { type: "p", text: "16.6 Retention: account and KYC records are kept during the relationship and for the period in Section 8 after it ends. Settlement, invoice and tax records are kept as the law requires." },
        { type: "p", text: "16.7 Sign-up checkbox: on the registration form you are asked to read this Policy and consent to MTBOSS using your details to process and follow up on your registration. You may withdraw that consent by closing your account, subject to Section 8." },
      ],
    },
    {
      id: "service-providers",
      number: "17",
      title: "Service Providers: Registration and Bookings",
      part: partD,
      blocks: [
        { type: "p", text: "17.1 Data we collect during registration (Account Setup, Address and Identity, Services, Subscription Plan): service provider name, email, mobile number and password; home or business address; identity proof, photograph and, where applicable, business, trade, labour or professional licences, certificates and insurance; PAN and GSTIN if registered; bank or UPI details for payouts; services offered, experience, service areas, rates and work portfolio; subscription plan and payment records; ratings, reviews, complaints and job history; and device location while on an active job if you allow it." },
        { type: "p", text: "17.2 Why we collect it: to verify identity and credentials for the safety of customers, create your profile, match you with customers and projects, handle bookings, collect subscription fees, pay amounts due, address complaints and meet legal duties." },
        { type: "p", text: "17.3 What customers see: your name, photograph, services, area, experience, ratings and portfolio. After a booking or accepted lead, the customer also sees your contact number and arrival details. We do not show your home address, identity documents or bank details to customers." },
        { type: "p", text: "17.4 What we share: with identity and background verification partners, payment partners, insurers, authorities as required by law, and with customers as described above. We may also share complaint information with the customer concerned." },
        { type: "p", text: "17.5 Customer data you receive: you may use customer details only to carry out the booked work. You must keep them confidential and must not contact, market to or share customer data for any other purpose." },
        { type: "p", text: "17.6 Retention: profile and KYC records are kept while your account is active and for the period in Section 8 after closure. Subscription and payment records are kept as tax and accounting laws require." },
        { type: "p", text: "17.7 Safety: where law or safety requires, we may check your credentials again, and may suspend your profile while we investigate a complaint." },
      ],
    },
    {
      id: "other-partners",
      number: "18",
      title: "Other Partners",
      part: partE,
      blocks: [
        { type: "p", text: "18.1 For Agents, Franchise partners and Professionals, we collect similar contact, identity, business, qualification, licence, bank and performance data and use it to verify, onboard, communicate with, pay and support them, to display profiles (where the role requires it) and to meet legal duties. The specific data and sharing are set out in your onboarding form and agreement, and the general rules of this Policy also apply." },
        { type: "p", text: "18.2 Property listings submitted by Agents may include contact details of owners or buyers. Agents must have lawful consent for any personal data they upload." },
      ],
    },
    {
      id: "grievance-officer",
      number: "19",
      title: "Grievance Officer and Contact",
      part: contact,
      blocks: [
        { type: "p", text: "Questions, requests or complaints about your data" },
        {
          type: "ul",
          items: [
            "Grievance Officer: [__ Full name], [__ Designation]",
            "Email: legal@mtboss.in | Phone: [__ +91 number] | Hours: [Mon to Sat, 10:00 to 18:00 IST]",
            "Address: MTBOSS Construction Private Limited, In front of Dharam Kanta, Vidhya Nagar, Kanth Road, Moradabad, Uttar Pradesh 244001, India",
            "Support: inquiry@mtboss.in | +91 94584 10866",
            "We acknowledge within 48 hours and aim to resolve within 30 days. You may also approach the Data Protection Board of India under the DPDP Act.",
          ],
        },
      ],
    },
    {
      id: "changes",
      number: "20",
      title: "Changes to this Policy",
      blocks: [
        { type: "p", text: "We may update this Policy as our Platform, services or the law change. The updated version will be posted on the Platform with a new effective date. Where a change is material, we will inform you and, where the law requires, ask for your consent again. Please review this Policy from time to time." },
      ],
    },
  ],
};
