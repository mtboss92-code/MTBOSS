import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            One Team from the First Sketch to the Last Coat of Paint
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Building a home usually means hiring two kinds of people who
                think differently. The architect cares about how the house
                looks, feels and works. The builder cares about how it is
                built, how long it takes and what it costs. When they work well
                together, the home turns out as drawn. When they do not, the
                owner stands in the middle. The drawing says one thing, the
                site does another, the builder says the drawing is
                impractical, the architect says the builder is cutting corners,
                and everyone looks at the owner to decide.
              </p>
              <p className="mt-3">
                An architect and builder under one roof changes that
                relationship. This page explains what it means to have design
                and construction in one team, how the handover from drawing to
                site works, where the checks and balances should be, what to
                ask for in writing and how MTBOSS approaches projects from
                design to handover.
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
                Architect and Builder at a Glance
              </h3>
              <p className="mb-3">
                The table compares the two approaches and what to check in
                each.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Question
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Separate architect and builder
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        One team for both
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Who do I talk to?
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Two or more people
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        One main contact
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Who is responsible if the site differs from the
                        drawing?
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Often unclear and disputed
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        The same team answers for both
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Who prepares the estimate?
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Builder, often after design
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Team, alongside the design
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        How do changes get priced?
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Negotiated each time
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Through an agreed change process
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Who checks quality?
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Architect&apos;s visits, if hired for them
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Built into the process, with defined checks
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        What can go wrong?
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Finger-pointing and delays
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Lack of independent review, if not managed openly
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        What helps?
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clear drawings, supervision and contracts
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clear scope, independent checks and written terms
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Neither approach is automatically better. What matters is that
                scope, specifications and responsibilities are clear and in
                writing.
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
                Architect and Builder Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your project with the team to confirm scope and
                arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement study and budget discussion:</strong>{" "}
                  Understanding your plot, family or business, priorities and
                  budget.
                </li>
                <li>
                  <strong>Architectural design:</strong> Floor plans,
                  elevations and 3D views.
                </li>
                <li>
                  <strong>Working drawings and specifications:</strong>{" "}
                  Dimensioned drawings and material lists for construction.
                </li>
                <li>
                  <strong>Structural and services coordination:</strong>{" "}
                  Foundation, columns, slabs, plumbing, drainage and electrical
                  planning.
                </li>
                <li>
                  <strong>Building construction:</strong> Execution to the
                  approved design, with quality checks.
                </li>
                <li>
                  <strong>Project management:</strong> Scheduling, material
                  flow, site coordination and progress reporting.
                </li>
                <li>
                  <strong>Interior design and modular kitchens:</strong>{" "}
                  Layouts, storage, lighting, ceilings and finishes.
                </li>
                <li>
                  <strong>Finishing work:</strong> Plaster, flooring, tiles,
                  doors, windows, painting and fittings.
                </li>
                <li>
                  <strong>Building renovation and extra floors:</strong>{" "}
                  Upgrading existing buildings.
                </li>
                <li>
                  <strong>Waterproofing and pest control:</strong> Protecting
                  the building from damp and pests.
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
                Why Design and Construction Work Better Together
              </h3>
              <p className="mb-3">
                When the same team handles both, several things can improve.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Designs that can be built:</strong> The designer knows
                  what the site team can build, and at what cost.
                </li>
                <li>
                  <strong>Estimates that come with the design:</strong> Budgets
                  are tested early, not after the drawings are finished.
                </li>
                <li>
                  <strong>Fewer gaps between drawing and site:</strong>{" "}
                  Questions on site can be answered quickly.
                </li>
                <li>
                  <strong>Faster decisions:</strong> Changes are discussed by
                  one team, not argued between two.
                </li>
                <li>
                  <strong>Coordinated services:</strong> Plumbing, electrical
                  and structure are planned before work starts.
                </li>
                <li>
                  <strong>Single accountability:</strong> If something goes
                  wrong, there is one team to answer.
                </li>
                <li>
                  <strong>Smoother handover:</strong> Finishing, snagging and
                  support are part of the same process.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Can Go Wrong, and How to Guard Against It
              </h3>
              <p className="mb-3">
                A combined team is not a guarantee. Be aware of these risks and
                ask how they are handled.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>No independent check:</strong> If the same team
                  designs and builds, who checks that the work matches the
                  drawings? Ask about internal quality checks, and consider an
                  independent structural engineer.
                </li>
                <li>
                  <strong>Unclear scope:</strong> A vague &ldquo;design and
                  build&rdquo; price can hide gaps. Ask for design scope and
                  construction scope separately.
                </li>
                <li>
                  <strong>Pressure to cut costs on site:</strong> Ask how
                  material specifications are fixed in writing, and how changes
                  are approved.
                </li>
                <li>
                  <strong>Lock-in:</strong> Ask whether you can take the
                  drawings and use another contractor, and on what terms.
                </li>
                <li>
                  <strong>Hidden extras:</strong> Ask how additional work is
                  priced.
                </li>
                <li>
                  <strong>Overpromising:</strong> Be wary of very low prices or
                  very short timelines without a clear explanation.
                </li>
              </ul>
              <p className="mt-3">
                A transparent team welcomes these questions.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Get in Writing From Any Architect and Builder
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Design scope:</strong> The drawings and services
                  included at each stage.
                </li>
                <li>
                  <strong>Construction scope:</strong> What is built, to what
                  specifications, and what is excluded.
                </li>
                <li>
                  <strong>Material and finish schedule:</strong> Materials,
                  grades or brands, finishes and fittings.
                </li>
                <li>
                  <strong>Item-wise estimate:</strong> Quantities, rates and
                  the basis of the price.
                </li>
                <li>
                  <strong>Change process:</strong> How additions, changes and
                  extras are priced and approved.
                </li>
                <li>
                  <strong>Quality checks:</strong> Which stages will be
                  inspected and how.
                </li>
                <li>
                  <strong>Approvals responsibility:</strong> Who prepares and
                  submits documents, and who pays fees.
                </li>
                <li>
                  <strong>Handover and defects:</strong> What you receive at
                  handover and how defects are handled afterwards.
                </li>
                <li>
                  <strong>Warranty and service terms:</strong> What is covered,
                  for how long and who to contact.
                </li>
                <li>
                  <strong>Contact and responsibility:</strong> Who is your main
                  contact, and who is on site.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                The Construction Journey: Stage by Stage
              </h3>
              <p className="mb-3">
                Here is how a typical building project moves from the drawings
                to the site, and what should be checked at each stage.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>1. Site Preparation and Setting Out</strong>
                  <br />
                  The plot is cleared, boundaries and levels are marked and the
                  building position is set out from the drawings. Check: that
                  dimensions, setbacks and levels match the approved drawings.
                </li>
                <li>
                  <strong>2. Excavation and Foundation</strong>
                  <br />
                  Excavation, foundation and plinth are built to the structural
                  design. Check: soil conditions match the structural
                  assumptions, reinforcement and concrete follow the drawings
                  and anti-termite treatment is planned where applicable.
                </li>
                <li>
                  <strong>3. Plinth and Ground-Level Preparation</strong>
                  <br />
                  Plinth beams, filling, damp-proofing and ground-level
                  preparation. Check: plinth height, drainage planning and
                  waterproofing details.
                </li>
                <li>
                  <strong>4. Columns, Beams and Slabs</strong>
                  <br />
                  The structural frame and floors are built. Check:
                  reinforcement, formwork, concrete quality, curing and
                  alignment before each pour.
                </li>
                <li>
                  <strong>5. Masonry and Openings</strong>
                  <br />
                  Walls, doors and window openings are built. Check: alignment,
                  dimensions, lintels and the position of openings against the
                  drawings.
                </li>
                <li>
                  <strong>6. Services Rough-In</strong>
                  <br />
                  Plumbing, drainage and electrical conduits are laid inside
                  walls and floors. Check: routes, levels, pipe quality and
                  testing before they are covered.
                </li>
                <li>
                  <strong>7. Roof, Terrace and Waterproofing</strong>
                  <br />
                  Roof slabs, parapets, slopes and waterproofing are completed.
                  Check: slopes, drains, junction details and a water test
                  before finishing.
                </li>
                <li>
                  <strong>8. Plaster and Preparation for Finishes</strong>
                  <br />
                  Internal and external plaster and surface preparation. Check:
                  surface quality, levels and curing.
                </li>
                <li>
                  <strong>9. Flooring, Tiling and Bathrooms</strong>
                  <br />
                  Floors, tiles, bathroom waterproofing and fittings. Check:
                  bathroom waterproofing tests, slopes to drains and tile
                  alignment.
                </li>
                <li>
                  <strong>10. Doors, Windows, Carpentry and Fittings</strong>
                  <br />
                  Frames, shutters, wardrobes, kitchens and hardware. Check:
                  fit, finish and operation.
                </li>
                <li>
                  <strong>11. Painting and Final Finishes</strong>
                  <br />
                  Putty, primer, paint and touch-ups. Check: even finish, no
                  damp patches and clean edges.
                </li>
                <li>
                  <strong>12. Testing, Snagging and Handover</strong>
                  <br />
                  Electrical and plumbing tests, a snag list and corrections,
                  cleaning and handover with documents. Check: everything works
                  and defects are listed and fixed.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Quality Checks You Should Expect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Before concrete is poured:</strong> Reinforcement,
                  formwork and levels are inspected.
                </li>
                <li>
                  <strong>Before services are covered:</strong> Pipes and
                  conduits are checked and tested.
                </li>
                <li>
                  <strong>Before finishing:</strong> Waterproofing is tested,
                  and surfaces are prepared.
                </li>
                <li>
                  <strong>At handover:</strong> A walk-through, a snag list and
                  corrections.
                </li>
                <li>
                  <strong>Documentation:</strong> Photos, drawings and records
                  of key stages where possible.
                </li>
                <li>
                  <strong>Independent inspection:</strong> You may also ask a
                  separate engineer to inspect critical stages.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Independent house or bungalow:</strong> Design,
                  structure, services, interiors and finishing planned and built
                  together.
                </li>
                <li>
                  <strong>Extra floor:</strong> Structural assessment,
                  strengthening, staircase, services and waterproofing as one
                  coordinated job.
                </li>
                <li>
                  <strong>Renovation:</strong> Survey, repair, waterproofing,
                  services and finishes planned as one project.
                </li>
                <li>
                  <strong>Shop, showroom or office:</strong> Building, fit-out
                  and services coordinated, often under tight schedules.
                </li>
                <li>
                  <strong>Apartment or builder floors:</strong> Repeated layouts
                  and stacked services, with approvals and parking.
                </li>
                <li>
                  <strong>Interior and kitchen projects:</strong> Design,
                  carpentry, plumbing, electrical and finishes coordinated.
                </li>
                <li>
                  <strong>Farmhouse or rural property:</strong> Water, power,
                  drainage and access planned along with the building.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Bareilly and Rampur: Local Factors
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Soil and foundation:</strong> Local soil affects
                  foundation design and needs proper advice.
                </li>
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters affect ventilation, roof, drainage and curing.
                </li>
                <li>
                  <strong>Material and labour supply:</strong> Availability and
                  seasonal demand affect cost and timeline.
                </li>
                <li>
                  <strong>Monsoon scheduling:</strong> Plan excavation, roofing
                  and plastering around the rains.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Requirements vary
                  by area and project. Check what applies before design is
                  final.
                </li>
                <li>
                  <strong>Household preferences:</strong> If you follow Vastu or
                  similar preferences, tell the team at the start so they can be
                  considered in the design.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Design only:</strong> Concept, plans, elevation and
                  working drawings.
                </li>
                <li>
                  <strong>Design and supervision:</strong> Full design with
                  defined site visits and quality checks, while a separate
                  contractor builds.
                </li>
                <li>
                  <strong>Construction only:</strong> Building to your drawings,
                  with clear specifications and quality checks.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Turnkey package:</strong> Design, construction,
                  finishing, interiors and handover as one managed project.
                </li>
                <li>
                  <strong>Renovation package:</strong> Redesign, repair and
                  upgrade of an existing building.
                </li>
                <li>
                  <strong>Extension package:</strong> Extra rooms or floors
                  after a structural check.
                </li>
                <li>
                  <strong>Phase-wise plan:</strong> One complete design built in
                  stages to match your budget.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
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
                  <strong>Design complexity:</strong> Irregular plots, curves
                  and special elevations add cost.
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
                Budget Priorities
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Decide your real ceiling, including
                  design, approvals, interiors and a reserve.
                </li>
                <li>
                  <strong>Second:</strong> Get the plan and structure right.
                  Foundation, columns and slabs are costly to fix later.
                </li>
                <li>
                  <strong>Third:</strong> Plan services early. Plumbing,
                  drainage and electrical lines should match the plan.
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
                  <strong>Sixth:</strong> Choose finishes that fit your budget,
                  and upgrade later where it makes sense.
                </li>
                <li>
                  <strong>Seventh:</strong> Keep changes under control. Late
                  changes cost more than early decisions.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Works From Design to Handover
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your project,
                  plot and budget.
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
                  <strong>Step 4: Requirements and priorities.</strong> You and
                  the team talk through needs, budget, style and timeline.
                </li>
                <li>
                  <strong>Step 5: Concept layout and design.</strong> Layouts,
                  elevations and 3D views are prepared and refined with your
                  feedback.
                </li>
                <li>
                  <strong>Step 6: Structural and services coordination.</strong>{" "}
                  The design is aligned with structural, plumbing, electrical
                  and other planning.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Ask Any Architect and Builder
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Who is my main contact, and who will be on site?
                </li>
                <li>
                  Are design and construction scopes written separately?
                </li>
                <li>
                  How are materials and specifications fixed, and how are
                  changes approved?
                </li>
                <li>
                  Who designs the structure, and is there an independent check?
                </li>
                <li>
                  How are payments tied to progress?
                </li>
                <li>
                  How do you handle delays and defects?
                </li>
                <li>
                  Can I use the drawings with another contractor if I choose?
                </li>
                <li>
                  Can I see completed and ongoing sites?
                </li>
                <li>
                  What happens after handover?
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Choosing an Architect and Builder
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Choosing only on the lowest price or the best pictures.
                </li>
                <li>
                  Accepting a lump-sum price without scope and specifications.
                </li>
                <li>
                  Not asking how quality is checked.
                </li>
                <li>
                  Paying a large advance before seeing drawings or an agreement.
                </li>
                <li>
                  Not visiting completed or ongoing sites.
                </li>
                <li>
                  Skipping structural design and soil checks.
                </li>
                <li>
                  Making many changes after construction begins.
                </li>
                <li>
                  Not putting the change process in writing.
                </li>
                <li>
                  Splitting design, construction and interiors among agencies
                  and managing all of them alone.
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
                  <strong>Timeline:</strong> Any move-in date, festival or event
                  deadline.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Consider MTBOSS as Your Architect and Builder in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>One team from design to handover:</strong> Planning,
                  building, interiors and finishing coordinated by one company.
                </li>
                <li>
                  <strong>Design and construction scopes shown separately:</strong>{" "}
                  So you know what you are paying for.
                </li>
                <li>
                  <strong>Written specifications and change process:</strong>{" "}
                  Materials, finishes and changes are documented.
                </li>
                <li>
                  <strong>Stage-wise quality checks:</strong> Key stages are
                  checked before work is covered.
                </li>
                <li>
                  <strong>Itemised estimates:</strong> Written quotes with
                  scope, quantities and exclusions stated clearly.
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
                Contact MTBOSS: Architect and Builder for Rampur
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
                If you are looking for an architect and builder in Rampur,
                MTBOSS offers a single point of contact from design to
                handover, supported by a free budget calculator and a simple
                online quote request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does an architect and builder do?</strong>
                  <br />
                  The architect plans and designs the building and prepares
                  drawings. The builder constructs it. A company that does both
                  can coordinate design, estimates, construction and finishing
                  under one scope. The exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide architect and builder
                  services for Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Clients in Rampur can contact
                  the team with project details to confirm availability, scope
                  and arrangements.
                </li>
                <li>
                  <strong>Q3. Is it better to hire one company for design and
                  construction?</strong>
                  <br />
                  It can simplify coordination and accountability, but it
                  depends on how clearly scope, specifications and checks are
                  written down. Whichever you choose, get it in writing.
                </li>
                <li>
                  <strong>Q4. Can I use the drawings with another
                  contractor?</strong>
                  <br />
                  This depends on the agreement. Ask the team at the start, and
                  get the answer in writing.
                </li>
                <li>
                  <strong>Q5. How is construction quality checked?</strong>
                  <br />
                  Good practice includes inspection of key stages, such as
                  reinforcement before concrete, services before they are
                  covered and waterproofing tests before finishing. You can also
                  ask an independent engineer to inspect.
                </li>
                <li>
                  <strong>Q6. How are changes handled during
                  construction?</strong>
                  <br />
                  Through an agreed change process: the change is described,
                  priced and approved in writing before it is done.
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