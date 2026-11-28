import { companyIdentity, documentVersion } from "./companyIdentity";

export const returnPolicy = {
  path: "/return-refund-cancellation-policy",
  pdfPath: "/documents/mtboss-return-refund-cancellation-policy.pdf",
  eyebrow: "Shop Now | Marketplace edition",
  title: "Return, Refund & Cancellation Policy",
  description: "Applies to Shop Now (MTBOSS Material Marketplace) only. This policy covers orders, returns, refunds, wallet and cashback.",
  version: documentVersion,
  intro: [
    companyIdentity,
    {
      type: "notice",
      title: "Please note: this policy is only for Shop Now",
      items: [
        "This policy applies only to products and materials bought through Shop Now on www.mtboss.in (the MTBOSS Material Marketplace).",
        "It does not apply to Construction and project services, Services, Professionals, Property, Agent, Franchise or Subscription Plans. Those are governed by their own Quotation, Work Order or agreement and the MTBOSS Terms and Conditions.",
      ],
    },
    {
      type: "notice",
      title: "Quick summary",
      items: [
        "Cancel for free before your order is dispatched. After dispatch, cancellation charges and return rules apply.",
        "Please inspect every delivery on arrival. Report damaged, short or wrong items with photos or video within the time shown in Section 6.",
        "Bulk, cut-to-size, tinted, chemical and custom items cannot be returned unless they are damaged, defective or wrongly supplied.",
        "Approved refunds go back to your original payment method, or to your MTBOSS Wallet if you choose.",
      ],
    },
  ],
  sections: [
    {
      id: "scope",
      number: "1",
      title: "Scope and Definitions",
      blocks: [
        { type: "p", text: "1.1 This Return, Refund and Cancellation Policy (“Policy”) forms part of the MTBOSS Terms and Conditions and explains how buyers can cancel orders, return products and receive refunds on Shop Now." },
        { type: "p", text: "1.2 “Shop Now” means the online materials marketplace operated by MTBOSS Construction Private Limited (“MTBOSS”) at www.mtboss.in, where verified suppliers (“Suppliers”) list building materials, carpentry, plumbing, electrical, furniture and architectural hardware, chemicals, paints and related products. “Buyer” means a person who places an order on Shop Now." },
        { type: "p", text: "1.3 Shop Now is a marketplace. The Supplier named on the product page or invoice is the seller of the product. MTBOSS manages the platform, payments, delivery coordination and dispute resolution, and enforces this Policy on behalf of Buyers and Suppliers." },
        {
          type: "table",
          caption: "What this Policy covers",
          columns: ["Covered by this Policy", "Not covered (separate terms apply)"],
          rows: [
            ["Products and materials ordered through Shop Now (cart, Buy Now, or quote converted into an order)", "Construction, civil work and project services under a Quotation or Work Order"],
            ["Delivery to your site or address by Shop Now Suppliers", "Services booked from Service Providers and Professionals"],
            ["Payments made by UPI, cards, net banking, MTBOSS Wallet or Pay on Delivery", "Subscription Plans of Suppliers and Service Providers; Franchise and Agent arrangements; Property listings"],
          ],
        },
      ],
    },
    {
      id: "placing-orders",
      number: "2",
      title: "Placing and Confirming Orders",
      blocks: [
        { type: "p", text: "2.1 An order is confirmed only when you receive an order confirmation from MTBOSS and the Supplier accepts it. A request for a quote is not an order and does not bind either party until you accept the quote and it is converted into an order." },
        { type: "p", text: "2.2 Prices, stock and delivery time are shown on the product page. If a product is unavailable or a price was shown wrongly, MTBOSS or the Supplier may cancel the order and refund the full amount you paid." },
        { type: "p", text: "2.3 Please check the product, size, grade, quantity, delivery address and contact number before paying. Orders placed with a wrong specification by the Buyer are treated as change-of-mind orders." },
      ],
    },
    {
      id: "buyer-cancellation",
      number: "3",
      title: "Cancelling an Order (Buyer)",
      blocks: [
        { type: "p", text: "3.1 You can request cancellation from My Orders on Shop Now, or by writing to the support contact in Section 14. The time of your request on our system is the cancellation time." },
        {
          type: "table",
          caption: "Cancellation by order stage",
          columns: ["Order stage", "Cancellation", "What you get back"],
          rows: [
            ["Before the Supplier confirms or packs the order", "Free", "100% of the amount paid"],
            ["Confirmed and packed, not yet dispatched", "Allowed with a charge of [__]% of order value, or actual handling cost if lower", "Amount paid minus the charge"],
            ["Dispatched or out for delivery", "Not allowed. You may refuse delivery only for a valid reason in Section 6, otherwise it is treated as a return", "As per Sections 5 to 7"],
            ["Custom, cut-to-size, tinted or specially procured items", "Not allowed once production or procurement has started", "No refund of the amount for such items, except for defects"],
          ],
        },
        { type: "p", text: "3.2 In line with the Consumer Protection (E-Commerce) Rules, 2020, MTBOSS does not charge a cancellation fee that it would not also bear itself. Charges above are limited to costs actually incurred by the Supplier or MTBOSS." },
      ],
    },
    {
      id: "seller-cancellation",
      number: "4",
      title: "Cancellation by Supplier or MTBOSS",
      blocks: [
        { type: "p", text: "4.1 If a Supplier or MTBOSS cancels an order for stock-out, pricing error, delivery not possible to your pin code, quality failure or any reason not caused by you, you will receive a full refund, including delivery charges, and no cancellation charge applies." },
        { type: "p", text: "4.2 MTBOSS may cancel an order where it suspects fraud, a false address or a breach of the Terms. Where payment has been collected, the amount will be refunded unless it is held under law." },
      ],
    },
    {
      id: "return-eligibility",
      number: "5",
      title: "Return Eligibility by Category",
      blocks: [
        { type: "p", text: "5.1 Return windows start from the date of delivery. Products must be unused, undamaged, unaltered and in original, sealed packaging with labels, accessories and the invoice or delivery challan. Return of an item is subject to inspection and approval." },
        {
          type: "table",
          caption: "Return windows by category",
          columns: ["Category", "Change-of-mind return", "Damaged, defective, short or wrong item"],
          rows: [
            ["Building Materials (cement, steel, bricks, sand, aggregates, bulk items)", "Not returnable", "Report within [24] hours of delivery with photos or video"],
            ["Carpentry (boards, plywood, laminates, hardware)", "[7] days, uncut and unused only. Cut pieces are not returnable", "Report within [48] hours"],
            ["Plumbing (pipes, fittings, fixtures, sanitary ware)", "[7] days, unused, sealed and uninstalled", "Report within [48] hours"],
            ["Electrical (wires, switches, lights, panels)", "[7] days, unused and sealed. Cut-to-length wire and cable is not returnable", "Report within [48] hours"],
            ["Furniture and Architectural Hardware", "[7] days, unused, with original packaging. Custom size or finish is not returnable", "Report within [48] hours"],
            ["Chemicals (adhesives, waterproofing, sealants)", "Not returnable once supplied, for safety reasons", "Report leaks, tampering or wrong item within [24] hours"],
            ["Paints", "Unopened, untinted cans: [7] days. Tinted or machine-mixed paint is not returnable", "Report within [24] hours"],
          ],
        },
      ],
    },
    {
      id: "damaged-deliveries",
      number: "6",
      title: "Damaged, Defective, Short or Wrong Deliveries",
      blocks: [
        { type: "p", text: "6.1 Inspect at the time of delivery. Open and check the delivery in front of the delivery person where possible. Note any visible damage, shortage or mismatch on the delivery challan or delivery app." },
        { type: "p", text: "6.2 Raise a request in My Orders within the time shown in Section 5, with: (a) clear photos or a short video of the product and packaging, (b) the delivery challan or invoice, and (c) a short description of the problem." },
        { type: "p", text: "6.3 After verification, MTBOSS or the Supplier will, as appropriate: (a) replace the item, (b) supply the missing quantity, (c) repair where possible, or (d) refund the item. Where replacement or repair is not reasonably possible, a refund will be given." },
        { type: "p", text: "6.4 Claims for damage that can only be found after installation (hidden defects) are handled under the manufacturer’s warranty, where available, and the Terms and Conditions." },
        { type: "p", text: "6.5 We cannot accept a claim for damage caused after delivery, wrong storage or handling, wrong installation, normal wear and tear, or use of the product." },
      ],
    },
    {
      id: "how-to-return",
      number: "7",
      title: "How to Return a Product",
      blocks: [
        {
          type: "ul",
          items: [
            "Step 1: Go to My Orders, select the product and choose Return or Report an Issue.",
            "Step 2: Select the reason and upload photos or video.",
            "Step 3: MTBOSS reviews the request within [2] working days and informs you of approval or rejection with reasons.",
            "Step 4: For approved returns, a pickup is arranged, or you are told where to hand over the item. Please keep the item packed with its invoice.",
            "Step 5: After the item is received and checked, the refund is processed as in Section 8.",
          ],
        },
        { type: "p", text: "7.1 Return shipping: MTBOSS or the Supplier bears return cost where the return is due to a damaged, defective, short or wrong item. For change-of-mind returns (where allowed), the Buyer bears the return freight, and a restocking charge of up to [__]% may apply." },
        { type: "p", text: "7.2 A product returned in a condition different from what was delivered (used, installed, damaged by the Buyer, missing parts) may be rejected, or a deduction may be made for the loss in value." },
      ],
    },
    {
      id: "refunds",
      number: "8",
      title: "Refunds: Method and Timelines",
      blocks: [
        {
          type: "table",
          caption: "How refunds are paid",
          columns: ["Payment method", "Refund goes to", "Timeline after approval or quality check"],
          rows: [
            ["UPI, debit or credit card, net banking", "Original payment method", "[5 to 7] working days (bank timelines may vary)"],
            ["MTBOSS Wallet", "MTBOSS Wallet", "Within [24] hours"],
            ["Pay on Delivery (cash or UPI at delivery)", "Your bank account or UPI ID given on the refund link, or MTBOSS Wallet if you choose", "[5 to 7] working days after you submit valid refund details"],
            ["Partly Wallet, partly other method", "Each part returns to its source", "As above"],
          ],
        },
        { type: "p", text: "8.1 Refunds are for the price of the product, taxes charged on it and, where the return is not your fault, the delivery charge. Delivery or convenience fees are not refunded when the return is a change-of-mind return." },
        { type: "p", text: "8.2 MTBOSS will refund within a reasonable time and, in any case, within the periods stated above, subject to the time taken by your bank or payment provider. If a refund fails (wrong account, closed account), we will contact you for alternate details." },
        { type: "p", text: "8.3 A GST credit note is issued against the original tax invoice for returned goods, as required by law." },
      ],
    },
    {
      id: "wallet",
      number: "9",
      title: "MTBOSS Wallet and Cashback",
      blocks: [
        { type: "p", text: "9.1 Cashback (up to [2]% on eligible orders, as shown on Shop Now) is a promotional benefit credited to the MTBOSS Wallet. If an order is cancelled or a product is returned, the cashback earned on it is reversed." },
        { type: "p", text: "9.2 If the cashback was already used, its value may be deducted from your refund or from your future Wallet balance." },
        { type: "p", text: "9.3 Wallet credit is store credit for use on Shop Now. It is not a bank account, earns no interest, and cannot be withdrawn as cash or transferred, except to the extent allowed by law. Wallet validity and limits are shown in the Wallet section and the Terms and Conditions." },
      ],
    },
    {
      id: "pay-on-delivery",
      number: "10",
      title: "Pay on Delivery (POD)",
      blocks: [
        { type: "p", text: "10.1 POD is available for selected products, locations and order values. Please keep the correct amount ready and the delivery contact number reachable." },
        { type: "p", text: "10.2 If you refuse delivery without a valid reason under Section 6, or repeatedly fail to accept delivery, MTBOSS may charge the forward and return delivery cost, block POD on your account and require prepayment for future orders." },
      ],
    },
    {
      id: "non-returnable",
      number: "11",
      title: "Items That Cannot Be Returned",
      blocks: [
        {
          type: "ul",
          items: [
            "Items cut, mixed, tinted, assembled, installed or used.",
            "Custom-made, made-to-order or specially procured items.",
            "Bulk materials and chemicals listed as non-returnable in Section 5.",
            "Items without original packaging, labels, serial numbers or invoice.",
            "Items marked “Non-returnable” on the product page, including clearance items.",
            "Items for which the return window has expired.",
          ],
        },
      ],
    },
    {
      id: "warranty",
      number: "12",
      title: "Warranty and Manufacturer Claims",
      blocks: [
        { type: "p", text: "Where a product carries a manufacturer’s warranty, MTBOSS or the Supplier will give reasonable help to raise the claim. The warranty terms and the repair or replacement decision are those of the manufacturer or the Supplier who gave the warranty." },
      ],
    },
    {
      id: "disputes",
      number: "13",
      title: "Disputes and Your Statutory Rights",
      blocks: [
        { type: "p", text: "13.1 If you disagree with a decision, write to us within [15] days with details. A senior team member will review it and respond within [7] working days." },
        { type: "p", text: "13.2 You may also contact the Grievance Officer named in Section 14. This Policy does not limit any right you have under the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020 or other law." },
      ],
    },
    {
      id: "contact",
      number: "14",
      title: "Contact and Grievance Officer",
      blocks: [
        { type: "p", text: "Need help with an order, return or refund?" },
        {
          type: "ul",
          items: [
            "Email: legal@mtboss.in | Website: www.mtboss.in (My Orders)",
            "Grievance Officer: [__ Name], [__ Designation] | Phone: [__ +91 number] | Hours: [Mon to Sat, 10:00 to 18:00 IST]",
            "Address: In front of Dharam Kanta, Vidhya Nagar, Kanth Road, Moradabad, Uttar Pradesh 244001, India",
            "Support: inquiry@mtboss.in | +91 94584 10866",
            "We acknowledge complaints within 48 hours and aim to resolve them within one month.",
          ],
        },
        { type: "p", text: "This Policy may be updated from time to time. The version in force on the date of your order applies to that order." },
      ],
    },
  ],
};
