import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            How to Get Good Design on a Limited Budget
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Almost everyone building a home has a budget, and most budgets
                are tighter than the dream. A family may have a small plot, a
                fixed loan amount and a long list of wishes: three bedrooms, a
                parking space, a decent kitchen, room to add a floor later. The
                question is not &ldquo;who is the cheapest architect?&rdquo;
                but &ldquo;how do I get a well-planned home for the money I
                actually have?&rdquo;
              </p>
              <p className="mt-3">
                An affordable architect in Rampur is not one who charges the
                least. It is one who helps you spend your budget wisely, avoids
                waste, plans for what you can afford now and leaves room for
                what you will add later. This page explains how design can save
                money, what to cut and what never to cut, how phase-wise
                construction works and how MTBOSS approaches budget projects.
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
                Affordable Design at a Glance
              </h3>
              <p className="mb-3">
                The table shows where money can be saved and what to watch.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Where money is saved
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        How design helps
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What to watch
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Built-up area
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Efficient plans give usable rooms in less area
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Do not shrink rooms until they stop working
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Regular layouts and aligned columns cost less
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Never compromise on safety or soil advice
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Stacked bathrooms and kitchens shorten pipes
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Keep access for maintenance
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Finishes
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Spend where you use daily, simplify elsewhere
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Avoid materials that need frequent replacement
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Changes
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Decisions made on paper cost almost nothing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Late changes are the biggest budget killer
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Phasing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Build essentials first, add later with provision
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan structure and services for the future
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Maintenance
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Good waterproofing and drainage prevent repairs
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Do not skip protection to save a little now
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, family and budget matter more than any template.
                MTBOSS helps you plan a design that suits your actual
                situation.
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
                Budget-Friendly Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your project and budget with the team to confirm scope
                and arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Budget and requirement discussion:</strong>{" "}
                  Understanding your plot, family, priorities and what you can
                  spend.
                </li>
                <li>
                  <strong>Efficient house plans:</strong> Layouts that make good
                  use of every square foot.
                </li>
                <li>
                  <strong>Elevation design that fits the budget:</strong>{" "}
                  Simple, attractive facades without unnecessary cost.
                </li>
                <li>
                  <strong>Working drawings and specifications:</strong> Clear
                  drawings that prevent waste and rework.
                </li>
                <li>
                  <strong>Structural and services coordination:</strong>{" "}
                  Planning that avoids expensive changes on site.
                </li>
                <li>
                  <strong>Phase-wise construction planning:</strong> Build now,
                  add later, with provision made from the start.
                </li>
                <li>
                  <strong>Construction and project management:</strong>{" "}
                  Execution to the approved design, with quality checks.
                </li>
                <li>
                  <strong>Budget interiors and modular kitchens:</strong>{" "}
                  Practical storage and finishes within your means.
                </li>
                <li>
                  <strong>Renovation and extra floors:</strong> Making better
                  use of an existing building.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting your investment.
                </li>
                <li>
                  <strong>Related services:</strong> Painter, plumber,
                  electrician, carpenter, tile and marble, false ceiling and
                  pest control through the same company.
                </li>
              </ul>
              <p className="mt-3">
                Final scope for each project is discussed and confirmed with
                the MTBOSS team before work begins.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What &ldquo;Affordable&rdquo; Should Really Mean
              </h3>
              <p className="mb-3">
                Affordable is about value, not the lowest number. Here is a
                useful way to think about it.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Affordable means fitting your budget honestly.</strong>{" "}
                  The proposal and the estimate should match what you can really
                  spend.
                </li>
                <li>
                  <strong>Affordable means no hidden extras.</strong> The scope,
                  exclusions and payment terms are clear from the start.
                </li>
                <li>
                  <strong>Affordable means less waste.</strong> Efficient plans,
                  fewer changes and coordinated drawings.
                </li>
                <li>
                  <strong>Affordable means durable.</strong> A cheap building
                  that leaks or cracks in five years is not affordable.
                </li>
                <li>
                  <strong>Affordable means room to grow.</strong> Provision for
                  upgrades and extra floors saves money later.
                </li>
                <li>
                  <strong>Affordable does not mean copying a stock plan.</strong>{" "}
                  A plan not made for your plot, facing and family can cost more
                  in lost light, wasted space and rework.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Where Good Design Saves Money
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Smart Use of Area
              </h4>
              <p className="mb-3">
                Every extra square foot costs money in structure, walls,
                finishes and services. A well-planned layout avoids long
                passages, awkward corners and oversized staircases, so you get
                usable rooms in less area.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                A Regular, Simple Structure
              </h4>
              <p className="mb-3">
                Columns that align across floors, simple spans and regular
                shapes keep structure efficient. Complex shapes and cantilevers
                increase cost.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Stacked Services
              </h4>
              <p className="mb-3">
                Placing bathrooms and kitchens above each other shortens pipes
                and drains and simplifies shafts. It saves material and future
                repair cost.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Light and Air Instead of Machines
              </h4>
              <p className="mb-3">
                Good orientation, cross-ventilation and shading reduce reliance
                on lights, fans and cooling, which saves running costs for
                decades.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Decisions Before Construction
              </h4>
              <p className="mb-3">
                Changing a wall on paper costs almost nothing. Breaking and
                rebuilding it costs materials, labour and time.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Clear Specifications
              </h4>
              <p className="mb-3">
                A written list of materials and finishes prevents overspending
                and mid-project arguments.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What You Can Safely Simplify
              </h3>
              <p className="mb-3">
                Spend where it matters, and keep it simple where it does not.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Facade:</strong> Clean lines, good proportions and a
                  restrained palette look good and cost less than elaborate
                  decoration.
                </li>
                <li>
                  <strong>Ceilings:</strong> Plain ceilings are fine in most
                  rooms, with a false ceiling only where it helps.
                </li>
                <li>
                  <strong>Flooring in low-use rooms:</strong> Use durable,
                  simple flooring in store rooms, secondary bedrooms and utility
                  areas.
                </li>
                <li>
                  <strong>Furniture and decor:</strong> Add over time, rather
                  than all at once.
                </li>
                <li>
                  <strong>Landscaping and boundary details:</strong> Build a
                  simple boundary first, and add features later.
                </li>
                <li>
                  <strong>Extra floors and rooms:</strong> Plan for them, but
                  build them when you need them.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What You Should Not Cut
              </h3>
              <p className="mb-3">
                Some savings cost much more later.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Soil checks and structural design:</strong> Foundation
                  and structure protect everything else.
                </li>
                <li>
                  <strong>Waterproofing and drainage:</strong> Leaks and damp
                  can ruin finishes and reduce the life of the building.
                </li>
                <li>
                  <strong>Plumbing and electrical quality:</strong> Poor pipes,
                  wiring and fittings are expensive to replace.
                </li>
                <li>
                  <strong>Ventilation and light:</strong> Dark, stuffy rooms
                  cost you comfort every day.
                </li>
                <li>
                  <strong>Safety:</strong> Stairs, railings, wiring, fire exits
                  and anything that protects people.
                </li>
                <li>
                  <strong>Approvals:</strong> Skipping them can create legal and
                  financial risk.
                </li>
                <li>
                  <strong>Pest-proofing:</strong> Termites and pests can cause
                  serious damage in an unprotected building.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Phase-Wise Construction: Build Now, Add Later
              </h3>
              <p className="mb-3">
                Phasing lets you spread cost over time, if the building is
                planned for it from the start.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Phase 1: Plan and essentials.</strong> Full design,
                  foundation and structure for the intended building (or first
                  stage), ground floor rooms, kitchen, bathrooms, basic finishes
                  and services.
                </li>
                <li>
                  <strong>Phase 2: Upper floor or additions.</strong> Extra
                  rooms or floors, built on a structure and staircase planned
                  for them.
                </li>
                <li>
                  <strong>Phase 3: Finishes and upgrades.</strong> Better
                  flooring, ceilings, interiors and facade details.
                </li>
                <li>
                  <strong>Phase 4: Landscape and extras.</strong> Boundary
                  details, garden, parking cover and outdoor features.
                </li>
              </ul>
              <p className="mt-3">
                For phasing to work, plan these from the start: foundation and
                column design for future floors, staircase position, service
                shafts, roof and parapet details and electrical and plumbing
                capacity. Without these, adding later can cost more than
                building once.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of Budget Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Small plot house:</strong> Use vertical planning,
                  compact stairs, light wells and built-in storage. Stack
                  bathrooms and kitchens.
                </li>
                <li>
                  <strong>Two-bedroom or three-bedroom family house:</strong>{" "}
                  Focus on efficient living, dining and kitchen areas and
                  well-ventilated bedrooms.
                </li>
                <li>
                  <strong>House with rental portion:</strong> Plan a separate
                  entrance and services for a unit that earns income.
                </li>
                <li>
                  <strong>Shop with home above:</strong> Plan separate access,
                  parking and noise separation.
                </li>
                <li>
                  <strong>Ground floor now, upper floors later:</strong> Plan
                  structure, stairs and services for growth.
                </li>
                <li>
                  <strong>Renovation of an old house:</strong> Repair structure,
                  waterproofing and services first, and upgrade finishes in
                  phases.
                </li>
                <li>
                  <strong>Small shop or office:</strong> Focus on frontage,
                  layout and durable, simple finishes.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Bareilly and Rampur: Local Factors for Budget Projects
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Soil and foundation:</strong> Local soil conditions
                  affect foundation design. Do not skip proper advice.
                </li>
                <li>
                  <strong>Climate:</strong> Hot summers and a monsoon season
                  mean ventilation, shade and roof drainage matter, and
                  cost-effective design should use them.
                </li>
                <li>
                  <strong>Rain and damp:</strong> Waterproofing the roof,
                  bathrooms and plinth is cheaper than repairing damage later.
                </li>
                <li>
                  <strong>Plot sizes:</strong> Many plots are compact. Efficient
                  planning matters more than extra decoration.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Requirements vary
                  by area. Check what applies before you finalise the design.
                </li>
                <li>
                  <strong>Household preferences:</strong> If you follow Vastu or
                  similar preferences, tell the architect at the start so they
                  can be considered within your budget.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Budget-Friendly Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Consultation package:</strong> Plot and plan review
                  with written advice before you commit to a design.
                </li>
                <li>
                  <strong>Efficient house plan package:</strong> Floor plans,
                  elevation and working drawings made for your plot and budget.
                </li>
                <li>
                  <strong>Phase-wise plan package:</strong> A complete design
                  built in stages, with provision for the future.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Budget interior package:</strong> Practical storage,
                  kitchen and finishes within your means.
                </li>
                <li>
                  <strong>Renovation package:</strong> Repair, waterproofing
                  and upgrade of an existing building.
                </li>
                <li>
                  <strong>Extension package:</strong> Extra rooms or floors on
                  an existing structure, after a structural check.
                </li>
              </ul>
              <p className="mt-3">
                Scope and prices are agreed in writing before work begins, so
                you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Your Total Cost
              </h3>
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
                  <strong>Design complexity:</strong> Simple shapes cost less
                  than curves and special features.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Weak or moist soil may
                  need a stronger foundation.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring, tiles,
                  doors, windows, paint, bathrooms and fittings.
                </li>
                <li>
                  <strong>Services:</strong> Plumbing, drainage, electrical,
                  water systems and solar.
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
                Budget Priorities for a Tight Budget
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Decide your real ceiling, and include
                  design, approvals, interiors and a reserve.
                </li>
                <li>
                  <strong>Second:</strong> Get the plan right. Efficient,
                  well-lit, well-ventilated rooms matter more than decoration.
                </li>
                <li>
                  <strong>Third:</strong> Get structure and services right.
                  Foundation, plumbing and electrical are costly to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Protect the building. Waterproofing,
                  drainage and pest-proofing prevent costly repairs.
                </li>
                <li>
                  <strong>Fifth:</strong> Spend on daily-use areas. Kitchen,
                  bathrooms and main living spaces matter most.
                </li>
                <li>
                  <strong>Sixth:</strong> Keep other finishes simple, and
                  upgrade later.
                </li>
                <li>
                  <strong>Seventh:</strong> Phase extras. Extra floors,
                  landscaping and decorative details can wait.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a Budget Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and budget discussion.</strong>{" "}
                  Contact MTBOSS through the website, phone or WhatsApp and
                  share your plot, needs and budget. Honest numbers help us
                  advise honestly.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free
                  calculator on our website gives a starting estimate for the
                  construction budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share
                  plot details, photos and documents. For Rampur, the team will
                  confirm arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 4: Priorities.</strong> You and the team separate
                  must-haves from nice-to-haves, and decide what to build now
                  and what to plan for later.
                </li>
                <li>
                  <strong>Step 5: Concept layout and options.</strong> Efficient
                  layouts are prepared and refined with your feedback.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Ask Any &ldquo;Affordable&rdquo; Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  What exactly is included in your proposal? Affordable
                  proposals should still list deliverables.
                </li>
                <li>
                  How will you design to my budget? Ask how they will keep the
                  design within your ceiling.
                </li>
                <li>
                  What do you recommend I simplify, and what should I not cut?
                  A good architect gives honest advice.
                </li>
                <li>
                  Is structural design included, or separate?
                </li>
                <li>
                  How many revisions and site visits are included?
                </li>
                <li>
                  How are payments tied to progress?
                </li>
                <li>
                  Can I see completed projects of a similar size and budget?
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Warning Signs of a Too-Cheap Offer
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  A very low price with no list of deliverables.
                </li>
                <li>
                  A template plan offered without studying your plot.
                </li>
                <li>
                  No structural or services coordination.
                </li>
                <li>
                  No site visits or supervision.
                </li>
                <li>
                  Hidden charges for revisions and extras.
                </li>
                <li>
                  Pressure to pay a large advance quickly.
                </li>
                <li>
                  No written agreement.
                </li>
                <li>
                  No completed work to see.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes on a Tight Budget
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Choosing only on the lowest price.
                </li>
                <li>
                  Skipping soil checks and structural advice.
                </li>
                <li>
                  Cutting waterproofing and drainage to save a little now.
                </li>
                <li>
                  Copying a plan that does not fit the plot.
                </li>
                <li>
                  Starting construction without a clear estimate.
                </li>
                <li>
                  Making many changes after construction begins.
                </li>
                <li>
                  Spending the reserve on upgrades.
                </li>
                <li>
                  Building without provision for future floors and then paying
                  twice.
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
                  renovation or interior.
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
                  <strong>Budget ceiling:</strong> The total you can comfortably
                  spend, including design and approvals.
                </li>
                <li>
                  <strong>Priorities:</strong> What you must have now, and what
                  can wait.
                </li>
                <li>
                  <strong>Style preferences:</strong> Reference photos, colours
                  and finishes you like.
                </li>
                <li>
                  <strong>Timeline:</strong> Any move-in date, festival or event
                  deadline.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Consider MTBOSS for Budget Projects in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Honest budget conversations:</strong> We discuss your
                  real ceiling early and design to it.
                </li>
                <li>
                  <strong>Efficient, buildable plans:</strong> Plans that
                  consider structure, services, climate and cost.
                </li>
                <li>
                  <strong>Clear scope and itemised estimates:</strong> Written
                  quotes with scope, quantities and exclusions stated clearly.
                </li>
                <li>
                  <strong>Phase-wise planning:</strong> We can plan for growth
                  and build in stages.
                </li>
                <li>
                  <strong>Free Budget Calculator:</strong> A simple starting
                  estimate for your construction budget.
                </li>
                <li>
                  <strong>Attention to leaks, damp and pests:</strong>{" "}
                  Waterproofing and pest-proofing are part of the plan.
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
                Areas to Confirm for Rampur Projects
              </h3>
              <p>
                Rampur city, Civil Lines and surrounding colonies, and nearby
                towns such as Bilaspur, Milak, Shahabad, Swar and Tanda. Share
                your project location with the team, and they will confirm
                availability and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Affordable Architecture and Construction in
                Rampur
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
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
                    href="mailto:inquiry@mtboss.in"
                    className="text-blue-600 underline"
                  >
                    inquiry@mtboss.in
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
                If you are looking for an affordable architect in Rampur,
                MTBOSS offers honest budget conversations, an itemised written
                estimate and a single point of contact from design to handover,
                supported by a free budget calculator.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does &ldquo;affordable architect&rdquo;
                  mean?</strong>
                  <br />
                  It means an architect who helps you get a well-planned,
                  durable building within your real budget, with clear scope and
                  no hidden extras, rather than simply the lowest fee.
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
                  <strong>Q3. Can good design really reduce construction
                  cost?</strong>
                  <br />
                  Yes. Efficient plans reduce built-up area, regular structures
                  cost less, stacked services shorten pipes and coordinated
                  drawings prevent rework. Good design does not guarantee a low
                  cost, but it often prevents waste.
                </li>
                <li>
                  <strong>Q4. Is it cheaper to use a ready-made house
                  plan?</strong>
                  <br />
                  It may look cheaper, but a plan not made for your plot, facing
                  and family can cost more in lost light, wasted space and
                  changes on site. An architect can also adapt an existing plan
                  to your plot.
                </li>
                <li>
                  <strong>Q5. What can I build now and add later?</strong>
                  <br />
                  Many owners build the ground floor first and add upper floors,
                  landscaping or finishes later, if the foundation, columns,
                  staircase and services are planned for it from the start.
                </li>
                <li>
                  <strong>Q6. What should I never cut to save money?</strong>
                  <br />
                  Soil checks and structural design, waterproofing and drainage,
                  plumbing and electrical quality, ventilation, safety features,
                  approvals and written drawings and specifications.
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