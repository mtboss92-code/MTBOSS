import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            How to Reach MTBOSS and What to Say When You Call
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                You have a plot, an old house to rebuild or a shop to design,
                and you want to talk to an architect. The quickest way is a
                phone call or a WhatsApp message. But a contact number is only
                useful if the person on the other end can actually help you,
                and if you know what to ask. Many first calls waste time on
                both sides: the caller does not have the plot details ready,
                the architect does not know the project type, and the
                conversation ends with &ldquo;send me the details&rdquo; and no
                clear next step.
              </p>
              <p className="mt-3">
                This page gives you the MTBOSS contact details for Rampur
                enquiries, explains how to prepare for a useful first call,
                what to share on WhatsApp, what happens after you contact us
                and how to avoid fake or misleading numbers.
              </p>
              <p className="mt-3">
                MTBOSS Construction Private Limited is an architect, interior
                designer and construction company serving Moradabad and
                Bareilly. It offers architecture and interior design,
                construction, building renovation, waterproofing and other
                services with transparent pricing and on-time delivery.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                MTBOSS Contact Details at a Glance
              </h3>
              <p className="mb-3">
                The table shows the main ways to reach MTBOSS and what each is
                best for.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Way to reach us
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Details
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Best for
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Phone
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <a
                          href="tel:+919458410866"
                          className="text-blue-600 underline"
                        >
                          +91 94584 10866
                        </a>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Quick questions and first discussion
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        WhatsApp
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <a
                          href="https://wa.me/9458410866"
                          className="text-blue-600 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://wa.me/9458410866
                        </a>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Sending photos, plot details and documents
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Email
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <a
                          href="mailto:mtboss2016@gmail.com"
                          className="text-blue-600 underline"
                        >
                          mtboss2016@gmail.com
                        </a>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Drawings, longer details and formal requests
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Website
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <a
                          href="https://www.mtboss.in"
                          className="text-blue-600 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          www.mtboss.in
                        </a>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Services, project gallery, blog and quote request
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Quote form
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        &ldquo;Get a Construction Quote&rdquo; on the website
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structured enquiry from any device
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Budget Calculator
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <a
                          href="https://www.mtboss.in/calculator"
                          className="text-blue-600 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.mtboss.in/calculator
                        </a>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        A starting estimate before you call
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Office
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Harthala, Kanth Road, Behind KR Collection, near
                        Domino&apos;s, Moradabad, Uttar Pradesh
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Meetings at the office
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Always confirm any contact number against the official
                website,{" "}
                <a
                  href="https://www.mtboss.in"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mtboss.in
                </a>
                , before you share documents or payments.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                MTBOSS Construction Private Limited
              </h3>
              <p className="mb-3">
                MTBOSS is a company offering construction services, doorstep
                home services, verified property transactions and building
                materials under one roof.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Office at Harthala, Kanth Road, Behind KR Collection, near
                  Domino&apos;s, Moradabad.
                </li>
                <li>
                  Serving Moradabad and Bareilly with residential, commercial
                  and renovation work.
                </li>
                <li>
                  Architecture &amp; Interior, Building Contractor, Building
                  Elevation and Building Renovation are listed among the Quick
                  Home Services on our website.
                </li>
                <li>
                  A project gallery and blog on the website let prospective
                  clients review completed work.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What You Can Ask MTBOSS About
              </h3>
              <p className="mb-3">
                Share your project with the team to confirm scope and
                arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>House design and floor plans:</strong> New homes,
                  bungalows, villas, extra floors and renovations.
                </li>
                <li>
                  <strong>Elevation design:</strong> Facade, windows, balconies
                  and entrance.
                </li>
                <li>
                  <strong>Interior design and modular kitchens:</strong>{" "}
                  Layouts, storage, lighting, ceilings and finishes.
                </li>
                <li>
                  <strong>Commercial buildings:</strong> Shops, showrooms,
                  offices and complexes.
                </li>
                <li>
                  <strong>Construction and project management:</strong>{" "}
                  Execution to the approved design, with quality checks.
                </li>
                <li>
                  <strong>Building renovation and repair:</strong> Upgrading
                  existing buildings.
                </li>
                <li>
                  <strong>Waterproofing and pest control:</strong> Protecting
                  roofs, bathrooms, basements and walls.
                </li>
                <li>
                  <strong>Estimates and budget planning:</strong> An item-wise
                  cost outline, supported by the free Budget Calculator.
                </li>
                <li>
                  <strong>Related home services:</strong> Painter, plumber,
                  electrician, carpenter, tile and marble and false ceiling.
                </li>
              </ul>
              <p className="mt-3">
                Final scope for each project is discussed and confirmed with
                the MTBOSS team before work begins.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                A Note for Clients in Rampur
              </h3>
              <p>
                MTBOSS is based in Moradabad and serves Moradabad and Bareilly.
                Clients in Rampur are welcome to call, message or email with
                their project details. The team will tell you whether and how
                they can help, including how site visits and meetings would be
                arranged for your location. Please do not assume availability
                for a particular date until the team confirms it.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Before You Call: Get Your Details Ready
              </h3>
              <p className="mb-3">
                A few minutes of preparation makes the first call far more
                useful. Keep these ready.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Your name and location:</strong> Locality in Rampur or
                  nearby, with a map pin if you can send one.
                </li>
                <li>
                  <strong>Project type:</strong> New house, extra floor,
                  renovation, interior, shop, office or something else.
                </li>
                <li>
                  <strong>Plot or building details:</strong> Size, shape,
                  facing, road width and whether there is an existing structure.
                </li>
                <li>
                  <strong>What you want:</strong> Number of bedrooms, parking,
                  special rooms, shop at the front, future floors.
                </li>
                <li>
                  <strong>Your budget range:</strong> Even a rough range helps
                  the architect advise honestly.
                </li>
                <li>
                  <strong>Your timeline:</strong> When you want to start and
                  when you hope to finish.
                </li>
                <li>
                  <strong>Documents or drawings:</strong> If you already have a
                  plan, survey or approvals, keep them handy.
                </li>
                <li>
                  <strong>Photos:</strong> Of the plot, the building or the area
                  that needs work.
                </li>
                <li>
                  <strong>Your questions:</strong> Write down your top three
                  worries so you do not forget them.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Say in the First Call
              </h3>
              <p className="mb-3">
                Here is a simple way to structure the conversation.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Introduce your project in one or two sentences.</strong>{" "}
                  For example: &ldquo;I have a residential plot in Rampur and
                  want to build a two-storey house&rdquo; or &ldquo;I want to
                  renovate my shop and add a first floor.&rdquo;
                </li>
                <li>
                  <strong>Share the basics.</strong> Plot size, location, rough
                  budget and timeline.
                </li>
                <li>
                  <strong>Ask what the team can do for you.</strong> Design
                  only, design and build, interiors or a consultation.
                </li>
                <li>
                  <strong>Ask how they would handle a site visit or meeting in
                  Rampur.</strong>
                </li>
                <li>
                  <strong>Ask what they need from you next.</strong> Photos,
                  documents, a plot measurement or a meeting.
                </li>
                <li>
                  <strong>Ask how pricing works.</strong> Ask what is included
                  and how the proposal is prepared. You do not need to settle
                  the price on the first call.
                </li>
                <li>
                  <strong>Agree on a next step.</strong> A WhatsApp with
                  details, a meeting date or a site visit plan.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Send on WhatsApp After the Call
              </h3>
              <p className="mb-3">
                WhatsApp is the easiest way to share visual details. Send:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Location pin or address of the plot or building.
                </li>
                <li>
                  Photos or short videos of the plot, surroundings and existing
                  structure.
                </li>
                <li>
                  Plot measurements or a rough sketch. Even a hand-drawn sketch
                  with dimensions helps.
                </li>
                <li>
                  Existing drawings or plans, if you have them.
                </li>
                <li>
                  A short list of requirements. Rooms, parking, special needs
                  and future plans.
                </li>
                <li>
                  Reference photos of designs you like and dislike.
                </li>
                <li>
                  Your budget range and timeline.
                </li>
              </ul>
              <p className="mt-3">
                Please do not send identity documents, bank details or other
                sensitive information over chat unless the team specifically
                asks and you are comfortable sharing it. Documents such as plot
                papers are normally shared only when needed for a defined step.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Happens After You Contact MTBOSS
              </h3>
              <p className="mb-3">
                The exact steps depend on your project, but a typical sequence
                looks like this.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> You call,
                  message or email, and share your project, plot and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free
                  calculator on our website gives a starting estimate for the
                  construction budget.
                </li>
                <li>
                  <strong>Step 3: Details and study.</strong> You share plot
                  details, photos and documents. For Rampur, the team will
                  confirm arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 4: Requirements and priorities.</strong> You and
                  the team talk through needs, budget, style and timeline.
                </li>
                <li>
                  <strong>Step 5: Scope and proposal.</strong> The team lists
                  deliverables, what is included and what is not, and prepares
                  a proposal and an itemised estimate.
                </li>
                <li>
                  <strong>Step 6: Review and adjustments.</strong> You review
                  the proposal, ask questions and adjust scope if needed.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Ask Any Architect You Call
              </h3>
              <p className="mb-3">
                Use these questions with any architect, including us.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  What exactly will I receive at each stage? Ask for a list of
                  drawings and deliverables.
                </li>
                <li>
                  Who will work on my project, and who is my main contact?
                </li>
                <li>
                  How do you handle structural design and services
                  coordination?
                </li>
                <li>
                  How is your proposal priced, and what is included?
                </li>
                <li>
                  How many revisions and site visits are included?
                </li>
                <li>
                  How do you handle approvals, where they apply?
                </li>
                <li>
                  Can I see completed projects or a project gallery?
                </li>
                <li>
                  How would you handle a project in my location?
                </li>
                <li>
                  What do you need from me to prepare a proposal?
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Avoid Fake or Misleading Contact Numbers
              </h3>
              <p className="mb-3">
                Searching for a phone number online can lead to unreliable
                listings. Protect yourself.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Check the official website.</strong> Confirm the
                  number on{" "}
                  <a
                    href="https://www.mtboss.in"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mtboss.in
                  </a>{" "}
                  before you rely on any listing.
                </li>
                <li>
                  <strong>Be careful with unknown directory sites.</strong>{" "}
                  Some list wrong or outdated numbers, or sell your enquiry to
                  other companies.
                </li>
                <li>
                  <strong>Do not pay advances over the phone to an unknown
                  person.</strong>{" "}
                  Meet or verify first, and pay only against a written
                  agreement.
                </li>
                <li>
                  <strong>Ask for a written proposal.</strong> A real
                  professional will put scope, price and terms in writing.
                </li>
                <li>
                  <strong>Check the company&apos;s address and gallery.</strong>{" "}
                  An office address and completed work add credibility.
                </li>
                <li>
                  <strong>Be wary of pressure.</strong> Genuine professionals do
                  not push you to decide immediately.
                </li>
                <li>
                  <strong>Report suspicious behaviour.</strong> If someone claims
                  to be from MTBOSS and asks for unusual payments, contact the
                  team through the official website.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose What You Want to Discuss
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Consultation:</strong> A discussion about your plot,
                  plan or budget, with advice.
                </li>
                <li>
                  <strong>Concept design:</strong> Requirement study and layout
                  options.
                </li>
                <li>
                  <strong>House plan and elevation:</strong> Floor plans,
                  elevation and working drawings.
                </li>
                <li>
                  <strong>Interior design:</strong> Layout, furniture, lighting,
                  ceilings, finishes and kitchens.
                </li>
                <li>
                  <strong>Design and build:</strong> Design, estimate and
                  construction under one team and one scope.
                </li>
                <li>
                  <strong>Turnkey project:</strong> Design, construction,
                  finishing, interiors and handover as one managed project.
                </li>
                <li>
                  <strong>Renovation:</strong> Redesign, repair and upgrade of
                  an existing building.
                </li>
                <li>
                  <strong>Waterproofing or pest control:</strong> Protecting
                  your building.
                </li>
              </ul>
              <p className="mt-3">
                Scope and prices are agreed in writing before work begins, so
                you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Affects the Cost of Your Project
              </h3>
              <p className="mb-3">
                You may be asked about your budget in the first call. Here is
                what affects it.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Plot size and built-up area:</strong> More area adds
                  material and labour.
                </li>
                <li>
                  <strong>Number of floors:</strong> More floors add structure,
                  stairs and services.
                </li>
                <li>
                  <strong>Design complexity:</strong> Irregular plots, double
                  heights and special elevations add cost.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Weak or moist soil may
                  need a stronger foundation.
                </li>
                <li>
                  <strong>Services:</strong> Plumbing, drainage, electrical,
                  water systems, solar and lifts.
                </li>
                <li>
                  <strong>Interiors and kitchen:</strong> Wardrobes, ceilings,
                  furniture and modular kitchens.
                </li>
                <li>
                  <strong>External works:</strong> Boundary wall, gate, paving
                  and landscaping.
                </li>
                <li>
                  <strong>Design changes:</strong> Changes after approval or
                  during construction add cost and delay.
                </li>
                <li>
                  <strong>Material prices and timing:</strong> Market rates and
                  the monsoon season affect planning.
                </li>
              </ul>
              <p className="mt-3">
                Your actual quote depends on the project and scope. Use the
                free MTBOSS Budget Calculator on the website for a starting
                estimate, and request a detailed proposal after a discussion.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Contacting an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Calling without any details, so the first call goes nowhere.
                </li>
                <li>
                  Asking only &ldquo;what is your rate?&rdquo; without
                  describing the project.
                </li>
                <li>
                  Comparing prices without comparing scope.
                </li>
                <li>
                  Not asking what is included in a proposal.
                </li>
                <li>
                  Sharing sensitive documents or paying advances too early.
                </li>
                <li>
                  Relying on unverified numbers from random listings.
                </li>
                <li>
                  Changing the brief repeatedly after approval.
                </li>
                <li>
                  Not putting scope, specifications and payments in writing.
                </li>
                <li>
                  Splitting design, construction and interiors among agencies
                  and managing them alone.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Share to Get an Accurate Proposal
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Project type:</strong> New house, extra floor, shop,
                  office, renovation or interior.
                </li>
                <li>
                  <strong>Location:</strong> Locality in Rampur or nearby, with a
                  map pin if possible.
                </li>
                <li>
                  <strong>Plot details:</strong> Size, shape, facing, road width
                  and photos.
                </li>
                <li>
                  <strong>Needs:</strong> Rooms, parking, special requirements
                  and future plans.
                </li>
                <li>
                  <strong>Existing building or drawings:</strong> If renovating
                  or extending.
                </li>
                <li>
                  <strong>Budget range:</strong> The amount you are comfortable
                  spending.
                </li>
                <li>
                  <strong>Style preferences:</strong> Reference photos, colours
                  and finishes you like.
                </li>
                <li>
                  <strong>Household preferences:</strong> Any Vastu or layout
                  preferences.
                </li>
                <li>
                  <strong>Timeline:</strong> Any move-in date, festival or event
                  deadline.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Consider MTBOSS as Your Architect Contact for Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>A real, verifiable company:</strong> A website,
                  project gallery, blog and office address you can check.
                </li>
                <li>
                  <strong>Clear next steps after you contact us:</strong> We
                  tell you what we need and what happens next.
                </li>
                <li>
                  <strong>Itemised estimates:</strong> Written quotes with scope
                  and specifications stated clearly.
                </li>
                <li>
                  <strong>Free Budget Calculator:</strong> A simple starting
                  estimate for your construction budget.
                </li>
                <li>
                  <strong>Written agreements:</strong> Scope, materials,
                  timeline and payment terms are documented before work begins.
                </li>
                <li>
                  <strong>Single point of contact:</strong> One team handles
                  design, execution and handover.
                </li>
                <li>
                  <strong>Based in Moradabad:</strong> A company on Kanth Road,
                  Moradabad, serving Moradabad and Bareilly. Clients in Rampur
                  can contact the team to confirm availability and arrangements.
                </li>
                <li>
                  <strong>Visible track record:</strong> A project gallery and
                  blog on our website.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Areas to Confirm for Rampur Enquiries
              </h3>
              <p>
                Rampur city, Civil Lines and surrounding areas, and nearby
                towns such as Bilaspur, Milak, Shahabad, Swar and Tanda. Share
                your project location with the team, and they will confirm
                availability and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect Contact Number for Rampur
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+919458410866"
                    className="text-blue-600 underline"
                  >
                    +91 94584 10866
                  </a>
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/9458410866"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with MTBOSS on WhatsApp
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:mtboss2016@gmail.com"
                    className="text-blue-600 underline"
                  >
                    mtboss2016@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.mtboss.in"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mtboss.in
                  </a>
                </li>
                <li>
                  <strong>Service page:</strong>{" "}
                  <a
                    href="https://www.mtboss.in/quick/architecture-interior"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture &amp; Interior
                  </a>
                </li>
                <li>
                  <strong>Building contractor service:</strong>{" "}
                  <a
                    href="https://www.mtboss.in/quick/building-contractor"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Building Contractor
                  </a>
                </li>
                <li>
                  <strong>Budget Calculator:</strong>{" "}
                  <a
                    href="https://www.mtboss.in/calculator"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Budget Calculator
                  </a>
                </li>
                <li>
                  <strong>Project Gallery:</strong>{" "}
                  <a
                    href="https://www.mtboss.in/FeaturedProjects/ProjectGallery"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Gallery
                  </a>
                </li>
                <li>
                  <strong>Office Address:</strong> Harthala, Kanth Road, Behind
                  KR Collection, near Domino&apos;s, Moradabad, Uttar Pradesh,
                  India
                </li>
              </ul>
              <p className="mt-3">
                Free Quote: Use the “Get a Construction Quote” option on the
                website, or contact the team directly by phone or WhatsApp.
              </p>
              <p className="mt-3">
                If you are looking for an architect contact number in Rampur,
                call or message MTBOSS with your project details, and the team
                will tell you how they can help.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What is the MTBOSS contact number for architect
                  enquiries in Rampur?</strong>
                  <br />
                  You can call or WhatsApp the team on{" "}
                  <a
                    href="tel:+919458410866"
                    className="text-blue-600 underline"
                  >
                    +91 94584 10866
                  </a>
                  , or email{" "}
                  <a
                    href="mailto:mtboss2016@gmail.com"
                    className="text-blue-600 underline"
                  >
                    mtboss2016@gmail.com
                  </a>
                  . You can also use the “Get a Construction Quote” option on{" "}
                  <a
                    href="https://www.mtboss.in"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mtboss.in
                  </a>
                  .
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide architecture services for
                  Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Clients in Rampur can contact
                  the team with project details to confirm availability, scope
                  and arrangements.
                </li>
                <li>
                  <strong>Q3. What should I tell the architect on the first
                  call?</strong>
                  <br />
                  Share your name and location, the type of project, plot size,
                  what you want to build, your rough budget and timeline. Ask
                  what the team can do, how site visits would work and what
                  they need from you next.
                </li>
                <li>
                  <strong>Q4. Can I send photos and plot details on
                  WhatsApp?</strong>
                  <br />
                  Yes. WhatsApp is the easiest way to share photos, a location
                  pin and a rough sketch. Avoid sending sensitive identity or
                  banking documents unless specifically asked.
                </li>
                <li>
                  <strong>Q5. Can I visit the MTBOSS office?</strong>
                  <br />
                  The office is at Harthala, Kanth Road, Behind KR Collection,
                  near Domino&apos;s, Moradabad. Please call ahead to confirm
                  timing and arrange a meeting.
                </li>
                <li>
                  <strong>Q6. How do I know a phone number really belongs to
                  MTBOSS?</strong>
                  <br />
                  Check the number on the official website,{" "}
                  <a
                    href="https://www.mtboss.in"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mtboss.in
                  </a>
                  . Be careful with unknown listings, and do not pay advances
                  to anyone before you have a written agreement.
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[450px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;