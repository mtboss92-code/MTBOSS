import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Hospital Construction Cost  Rampur – What Drives It and How to Plan Your Budget
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                &ldquo;How much will it cost to build my hospital?&rdquo; is the first
                question almost every doctor and investor asks, and the hardest to answer
                in one line. A 10-bed nursing home and a 100-bed multi-speciality
                hospital are different projects. Two hospitals with the same number of
                beds can still differ greatly in cost, depending on structure, services,
                finishes, departments and phasing.
              </p>
              <p className="mt-3">
                MTBOSS Construction Private Limited is an architecture, interior and
                construction company serving Rampur, Moradabad and Bareilly. This page
                does not give you a magic number. It gives you something more useful: a
                clear way to understand and estimate your own hospital cost, so you can
                plan wisely and ask the right questions before you spend.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why One Number Rarely Tells the Truth
              </h3>
              <p className="mb-3">
                You may see headlines such as &ldquo;hospital cost per bed&rdquo; or
                &ldquo;cost per square foot&rdquo;. They can be useful for a first idea,
                but they hide big differences.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>What is counted.</strong> Built-up area, bed count or only
                  some departments?
                </li>
                <li>
                  <strong>What is included.</strong> Structure only, or also finishes,
                  HVAC, fire safety, lifts and interiors?
                </li>
                <li>
                  <strong>What is excluded.</strong> Land, medical equipment, furniture,
                  IT, licences and approvals are often separate.
                </li>
                <li>
                  <strong>What level of finish.</strong> Basic, standard or premium?
                </li>
                <li>
                  <strong>What departments.</strong> OPD only, or also ICU, operation
                  theatres and imaging?
                </li>
                <li>
                  <strong>When and where.</strong> Material prices and conditions change
                  over time and by location.
                </li>
              </ul>
              <p className="mt-3">
                For these reasons, we recommend working from a brief and a site visit,
                not from a single rate.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What a Hospital Construction Budget Usually Includes
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-900">
                        Cost Component
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-900">
                        What It Covers
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">Site preparation</td>
                      <td className="px-4 py-2">
                        Clearing, levelling, access and temporary works
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Foundation and structure</td>
                      <td className="px-4 py-2">
                        Excavation, footings, columns, beams, slabs and staircases
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Masonry and civil work</td>
                      <td className="px-4 py-2">
                        Walls, plaster, floors, roofs and boundary work
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Waterproofing</td>
                      <td className="px-4 py-2">
                        Roofs, washrooms, sluice rooms and wet areas
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Electrical systems</td>
                      <td className="px-4 py-2">
                        Wiring, panels, lighting, earthing and backup power provisions
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Plumbing and drainage</td>
                      <td className="px-4 py-2">
                        Water supply, hot water, drains, tanks and fixtures
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">HVAC</td>
                      <td className="px-4 py-2">
                        Air conditioning and ventilation, planned with specialists
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Fire safety</td>
                      <td className="px-4 py-2">
                        Exits, fire-fighting provisions, alarms and related works
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Lifts and ramps</td>
                      <td className="px-4 py-2">
                        Passenger and stretcher lifts, ramps and accessibility
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Finishes</td>
                      <td className="px-4 py-2">
                        Flooring, wall finishes, ceilings, doors, windows and joinery
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Interiors</td>
                      <td className="px-4 py-2">
                        Reception, OPD, wards, counters and furniture built-in
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Site development</td>
                      <td className="px-4 py-2">
                        Internal roads, parking, landscaping and signage
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Professional services</td>
                      <td className="px-4 py-2">
                        Architectural, structural and services design, supervision and
                        approvals support
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Contingency</td>
                      <td className="px-4 py-2">
                        Reserve for changes and unexpected conditions
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                When comparing quotes, check which of these components each quote
                includes.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Is Usually Not Included in a Contractor&rsquo;s Price
              </h3>
              <p className="mb-3">
                Many first-time hospital owners are surprised by items that sit outside
                the construction contract. Plan for these separately:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Land cost and registration</li>
                <li>
                  Medical equipment, such as imaging machines, operation theatre
                  equipment, monitors and laboratory instruments
                </li>
                <li>
                  Medical gas and specialised systems, which are supplied and installed
                  by specialist vendors
                </li>
                <li>
                  Furniture and loose equipment, such as beds, trolleys and office
                  furniture
                </li>
                <li>IT systems, hospital software and networking equipment</li>
                <li>Licences, registrations and statutory fees</li>
                <li>Generators, transformers and utility connection charges</li>
                <li>
                  Pre-opening costs, such as staff recruitment, training, marketing and
                  initial stock
                </li>
                <li>Finance costs, such as interest during construction</li>
              </ul>
              <p className="mt-3">
                Ask every contractor to list exclusions in writing, so that your total
                budget is complete.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                The Biggest Cost Drivers in Hospital Construction
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Size and Number of Beds</strong>
                  <br />
                  More area and more beds mean more structure, services and finishes.
                  But costs do not rise in a simple straight line, because fixed items
                  such as lifts, generators and fire systems cost much the same whether
                  you build for twenty beds or thirty.
                </li>
                <li>
                  <strong>Departments and Complexity</strong>
                  <br />
                  OPD and general wards cost less per square foot than ICUs, operation
                  theatres, labour rooms and imaging suites, which need stronger
                  services, tighter finishes and specialist coordination.
                </li>
                <li>
                  <strong>Structural Requirements</strong>
                  <br />
                  Heavy equipment, long spans, multiple floors and weak soil increase
                  structural cost. A foundation designed from soil investigation
                  protects both safety and budget.
                </li>
                <li>
                  <strong>HVAC and Ventilation</strong>
                  <br />
                  Air conditioning and ventilation can be a major cost, especially for
                  ICUs, theatres and diagnostic areas.
                </li>
                <li>
                  <strong>Electrical and Backup Power</strong>
                  <br />
                  Hospitals need high load, separate circuits for critical areas, proper
                  earthing and reliable backup. This is not an area for shortcuts.
                </li>
                <li>
                  <strong>Plumbing, Drainage and Waste Handling</strong>
                  <br />
                  Hot water, drainage, sluice rooms and separated waste routes add
                  complexity.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost by Type of Healthcare Building
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Clinics and Polyclinics</strong>
                  <br />
                  Lower cost, with focus on layout, hygiene, finishing and services for
                  a few rooms.
                </li>
                <li>
                  <strong>Nursing Homes</strong>
                  <br />
                  Moderate cost, with wards, a small operation theatre, diagnostics and
                  support areas. Services and finishes matter more as services grow.
                </li>
                <li>
                  <strong>Multi-Speciality Hospitals</strong>
                  <br />
                  Higher cost, with multiple departments, ICU, theatres, imaging, lifts,
                  large HVAC and backup systems.
                </li>
                <li>
                  <strong>Diagnostic Centres and Laboratories</strong>
                  <br />
                  Cost depends on imaging equipment, shielding needs, power and
                  air-conditioning requirements.
                </li>
                <li>
                  <strong>Maternity and Child Care Centres</strong>
                  <br />
                  Cost depends on labour rooms, theatres, neonatal areas and finishing
                  level.
                </li>
                <li>
                  <strong>Hospital Expansions</strong>
                  <br />
                  Costs include connecting to existing systems, working around live
                  operations and sometimes strengthening existing structures.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Your Own Hospital Budget
              </h3>
              <p className="mb-3">
                You can build a rough budget before meeting any contractor.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1 – Define the project.</strong> Decide the type of
                  hospital, departments, beds and target patients.
                </li>
                <li>
                  <strong>Step 2 – List the areas.</strong> Write approximate areas for
                  OPD, wards, ICU, theatres, diagnostics, pharmacy, administration,
                  stores, parking and circulation.
                </li>
                <li>
                  <strong>Step 3 – Decide the level of finish.</strong> Basic, standard
                  or premium, for each zone.
                </li>
                <li>
                  <strong>Step 4 – Separate the cost buckets.</strong> Land, building
                  construction, medical equipment, furniture, IT, licences, utilities,
                  pre-opening costs and contingency.
                </li>
                <li>
                  <strong>Step 5 – Ask for sample rates.</strong> Request itemised rates
                  from at least two contractors for the same specification.
                </li>
                
           
              </ol>
              <p className="mt-3">
                You can also use the Construction Budget Calculator on the MTBOSS
                website for an initial idea.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Quotation Comparison: Make Sure You Compare Like With Like
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-900">
                        Check
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-900">
                        What to Look For
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">Scope</td>
                      <td className="px-4 py-2">
                        Which departments and floors are included?
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Area basis</td>
                      <td className="px-4 py-2">
                        Built-up area, carpet area or per-bed basis?
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Specifications</td>
                      <td className="px-4 py-2">
                        Concrete grade, steel, bricks, tiles, paints and fittings
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Services</td>
                      <td className="px-4 py-2">
                        Electrical, plumbing, HVAC and fire provisions: included or
                        excluded?
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Lifts</td>
                      <td className="px-4 py-2">Included, or by owner?</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Finishes</td>
                      <td className="px-4 py-2">
                        Level of flooring, ceilings and wall protection
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Exclusions</td>
                      <td className="px-4 py-2">
                        Equipment, furniture, utilities, approvals and fees
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Schedule</td>
                      <td className="px-4 py-2">Milestones and total duration</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Payment stages</td>
                      <td className="px-4 py-2">
                        Linked to progress or dates only?
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Change process</td>
                      <td className="px-4 py-2">
                        How are changes priced and approved?
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">After-handover support</td>
                      <td className="px-4 py-2">
                        What is available after completion?
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Payment Stages and Cash-Flow Planning
              </h3>
              <p>
                Hospital projects need steady cash flow. A fair payment schedule links
                payments to completed work, such as agreement and mobilisation,
                foundation, structure, masonry, services and finishing, with a final
                portion held until snags are corrected and handover is complete. Share
                your funding schedule with your contractor early, so that milestones and
                payments can be matched. If you use a loan or other financing, speak to
                your bank about their documentation and release requirements. We are not
                financial advisers, but we can provide itemised quotations and progress
                records in a clear format.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Hidden Costs That Hospital Owners Often Forget
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Soil and site problems discovered after excavation</li>
                <li>Design changes after construction begins</li>
                <li>
                  Utility upgrades, such as transformer capacity and water supply
                </li>
                <li>
                  Specialised room requirements, such as shielding or special
                  ventilation
                </li>
                <li>Waste management arrangements</li>
                <li>Approval-related changes required by authorities</li>
                <li>Material price changes during a long project</li>
                <li>
                  Delay costs, including loan interest and staff costs before opening
                </li>
                <li>Equipment delivery and installation coordination</li>
                <li>Training and trial operations before opening</li>
              </ul>
              <p className="mt-3">
                Discuss these early, and keep a reserve for them.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Do Hospital Owners Trust MTBOSS for Cost Planning?
              </h3>
              <p>
                Hospital owners trust us because we are honest about cost. MTBOSS
                manages architecture, structure, civil work, waterproofing, ceilings,
                interiors, electrical and plumbing coordination and finishing under one
                team, so the quotation covers the whole building and not just one trade.
                We list scope, specifications and exclusions in writing, and we price
                changes before they happen. We do not hide behind a single rate, and we
                will tell you if your budget and plan do not match.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Can the Cost of a Hospital Be Reduced Without Reducing Safety?
              </h3>
              <p className="mb-3">
                Yes, in many cases, but only by choosing carefully. These ideas can
                reduce cost without weakening safety or quality:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Finalise the layout before construction. Changes after structure are
                  the most expensive.
                </li>
                <li>
                  Plan a compact, efficient layout. Shorter corridors and shared
                  services reduce area and cost.
                </li>
                <li>
                  Phase the project. Build the core, and complete additional departments
                  later.
                </li>
                <li>
                  Use standard sizes and repeating floor plans. They speed up
                  construction.
                </li>
                <li>
                  Match finishes to zones. Use premium finishes where patients and
                  visitors see them, and durable standard finishes in support areas.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Hospital Cost Considerations in Rampur
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Material and transport.</strong> Prices and availability of
                  cement, steel, bricks, tiles and fittings can change with supply and
                  season. Ask how long a quotation stays valid.
                </li>
                <li>
                  <strong>Skilled labour.</strong> Availability of skilled workers
                  affects schedule and sometimes cost.
                </li>
                <li>
                  <strong>Soil and site.</strong> Soil conditions differ from plot to
                  plot, so investigation before design is wise.
                </li>
                <li>
                  <strong>Monsoon.</strong> Weather can affect schedules and some
                  materials, so planning matters.
                </li>
                <li>
                  <strong>Power and utilities.</strong> Backup power and utility
                  connections need early planning.
                </li>
                <li>
                  <strong>Patients from nearby towns.</strong> Parking, waiting areas
                  and access are valuable investments.
                </li>
              </ul>
              <p className="mt-3">
                We serve healthcare projects in Rampur, including Civil Lines and other
                areas, as well as Moradabad and Bareilly.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Get a Free Cost Review of Your Hospital Plan
              </h3>
              <p className="mb-3">
                If you have a plan, even a rough one, we can review it with you and help
                you understand where your money is likely to go. A short conversation
                can show you whether your budget is realistic, where phasing could help
                and which items you may be missing.
              </p>
              <p className="mb-3">
                <strong>What happens when you enquire:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You contact us by call, WhatsApp or the enquiry form.</li>
                <li>We listen to your plan, services and budget range.</li>
                <li>We visit the site to study access, soil and surroundings.</li>
                <li>
                  We discuss options, including layout, phasing and specifications.
                </li>
                <li>
                  You receive an itemised proposal with scope, exclusions, schedule and
                  payment stages.
                </li>
              </ul>
              <p className="mt-3">
                There is no obligation after the first conversation. Our goal is to give
                you clear information.
              </p>
              <p className="mt-3">
                <strong>What to send with your enquiry:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your name and phone number</li>
                <li>
                  Project type, such as hospital, nursing home, clinic or expansion
                </li>
                <li>Plot location and approximate size</li>
                <li>Planned beds or departments</li>
                <li>Target start and opening dates</li>
                <li>Approximate budget range</li>
                <li>Drawings or photographs, if available</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Talk to MTBOSS About Your Hospital Budget
              </h3>
              <p className="mb-3">
                Planning a hospital, nursing home or clinic? Call or message us today,
                share your plan and get honest guidance on cost, phasing and schedule.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Call:</strong>{" "}
                  <a
                    href="https://wa.me/9458410866"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    +91 94584 10866
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:inquiry@mtboss.in"
                    className="text-blue-600 underline"
                  >
                    inquiry@mtboss.in
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
              </ul>
              <p className="mt-3">
                <a
                  href="https://wa.me/9458410866"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Call Now
                </a>{" "}
                |{" "}
                <a
                  href="https://wa.me/9458410866"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>{" "}
                |{" "}
                <a
                  href="https://www.mtboss.in"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Cost Review
                </a>
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. How much does it cost to build a hospital in Rampur?</strong>
                  <br />
                  Cost depends on size, departments, structure, services, finishes and
                  phasing, so no single figure fits every hospital. Share your plan, and
                  we will help you estimate a realistic range after a site visit.
                </li>
                <li>
                  <strong>Q2. Is hospital construction cost calculated per bed or per
                  square foot?</strong>
                  <br />
                  Both are used for rough comparisons, but they can hide differences in
                  scope and specification. A detailed, itemised estimate based on your
                  brief is more reliable.
                </li>
                <li>
                  <strong>Q3. What is not included in the construction cost?</strong>
                  <br />
                  Land, medical equipment, medical gas and specialised systems,
                  furniture, IT, licences, utility connections and pre-opening costs are
                  usually separate. Ask for exclusions in writing.
                </li>
                <li>
                  <strong>Q4. Which hospital areas cost the most to build?</strong>
                  <br />
                  ICUs, operation theatres, imaging and diagnostic areas usually need
                  stronger services, tighter finishes and specialist coordination, so
                  they tend to cost more per square foot than general wards and OPD.
                </li>
                <li>
                  <strong>Q5. Can I build my hospital in phases to reduce the initial
                  cost?</strong>
                  <br />
                  Yes, if the master plan is prepared for the final building. Structure,
                  services and exits should be designed for the full hospital, even if
                  you complete departments in stages.
                </li>
                <li>
                  <strong>Q6. How much reserve should I keep?</strong>
                  <br />
                  A reserve of 10% or more is sensible for changes, hidden conditions
                  and price differences.
                </li>
                <li>
                  <strong>Q7. How can I compare quotations from different
                  contractors?</strong>
                  <br />
                  Ask each contractor to quote against the same scope and
                  specifications, and compare materials, services, exclusions, schedule
                  and payment terms, not just the total.
                </li>
                <li>
                  <strong>Q8. Can you reduce cost without affecting safety?</strong>
                  <br />
                  Often yes, through efficient layout, phasing, standardisation and
                  sensible finish levels. Structure, waterproofing, wiring and fire
                  safety should not be compromised.
                </li>
                <li>
                  <strong>Q9. How can I get a cost estimate from MTBOSS?</strong>
                  <br />
                  Contact us with your project details, and we will arrange a site
                  visit. After reviewing your brief, we prepare an itemised quotation.
                  You can also use our online construction calculator for a starting
                  idea.
                </li>
                <li>
                  <strong>Q10. Do you serve Rampur and nearby cities?</strong>
                  <br />
                  Yes. We serve Rampur, Moradabad and Bareilly and can discuss nearby
                  locations.
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