import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan the Whole Building Budget, Not Just the Design Fee
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                When people ask about the cost of an architect, they usually
                mean something bigger. They want to know how much their whole
                project will cost, how much of that goes to design, what the
                design buys them and whether hiring an architect saves money or
                adds to it. The design fee is only one line in a long list:
                structure, walls, plumbing, electrical, doors and windows,
                flooring, kitchens, interiors, approvals, boundary,
                landscaping, and a reserve for surprises.
              </p>
              <p className="mt-3">
                This page looks at architect cost from the owner&apos;s side.
                It explains how the design stage fits into the full budget,
                what each part of a project typically needs money for, where
                design decisions save or waste money and how to build a
                realistic budget before you sign anything. If you are looking
                for fee models and how architects charge, see our page on
                architect fees in Rampur.
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
                Project Cost at a Glance
              </h3>
              <p className="mb-3">
                A building project has several cost groups. The table shows
                what each covers and what drives it.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Cost group
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What it covers
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What drives it
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Design and professional services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Architect, structural engineer, services consultants,
                        surveys, soil test
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Project size, complexity and scope of services
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Approvals and fees
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Drawing submission, authority charges, utility
                        connections
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Local rules and project type
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Foundation, columns, beams, slabs, staircase
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Soil, floors, spans and design
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Walls and shell
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Masonry, plaster, roof, waterproofing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Built-up area and specifications
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plumbing, drainage, electrical, water tanks, solar,
                        lift
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Number of bathrooms, load and quality
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Doors, windows and fittings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Frames, shutters, locks, glass, railings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Material and design choices
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Finishes
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Flooring, tiles, paint, ceilings, bathrooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Quality and area
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Kitchen and interiors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Modular kitchen, wardrobes, furniture, lighting
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Scope and finish level
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        External works
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Boundary, gate, paving, landscaping, parking
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plot size and design
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Reserve
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Money kept aside for changes and surprises
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Project risk and how complete the planning is
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, family and budget matter more than any template.
                MTBOSS helps you plan a budget that suits your actual
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
                Architecture and Construction Services Offered by MTBOSS
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
                  <strong>Concept layouts and design:</strong> Floor plans,
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
                  <strong>Estimate and budget planning:</strong> An item-wise
                  cost outline, supported by the free Budget Calculator.
                </li>
                <li>
                  <strong>Interior design and modular kitchens:</strong>{" "}
                  Layouts, storage, lighting, ceilings and finishes.
                </li>
                <li>
                  <strong>Construction and project management:</strong>{" "}
                  Execution to the approved design, with quality checks.
                </li>
                <li>
                  <strong>Renovation and extra floors:</strong> Redesign and
                  upgrade of existing buildings.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting the building so the budget does not leak away
                  later.
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
                Where the Design Stage Fits in Your Budget
              </h3>
              <p className="mb-3">
                The design stage is small compared with construction, but it
                influences nearly every other cost. Good design decisions can
                reduce waste in the structure, avoid expensive changes on site,
                plan plumbing and electrical lines efficiently and help you
                spend on what you really use.
              </p>
              <p className="mb-2 font-semibold text-gray-900">
                Consider what design decisions control:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Area:</strong> A smart plan gives usable rooms in less
                  built-up area, so you build less and pay less.
                </li>
                <li>
                  <strong>Structure:</strong> A regular, well-coordinated
                  structure is cheaper than an irregular, patched one.
                </li>
                <li>
                  <strong>Services:</strong> Stacked bathrooms and kitchens
                  shorten pipes and drains.
                </li>
                <li>
                  <strong>Openings:</strong> Well-placed windows reduce the need
                  for artificial light and cooling.
                </li>
                <li>
                  <strong>Finishes:</strong> A clear specification list stops
                  over-buying and mid-project upgrades.
                </li>
                <li>
                  <strong>Changes:</strong> Decisions made on paper cost very
                  little. Changes made after construction cost a lot.
                </li>
              </ul>
              <p className="mt-3">
                This is why many owners treat the design cost as an investment
                that affects the cost of everything else.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Happens When You Skip or Rush the Design
              </h3>
              <p className="mb-3">
                Some owners try to save money by skipping a proper design. Here
                is how that can backfire.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Rooms that do not work:</strong> Bedrooms without
                  ventilation, kitchens far from plumbing, a staircase that
                  wastes a room.
                </li>
                <li>
                  <strong>Rework on site:</strong> Walls broken and rebuilt,
                  pipes moved and electrical lines redone.
                </li>
                <li>
                  <strong>Structural problems:</strong> A structure not
                  coordinated with the plan may need extra columns or
                  strengthening later.
                </li>
                <li>
                  <strong>Budget overruns:</strong> Without a proper estimate,
                  costs grow with each decision.
                </li>
                <li>
                  <strong>Disputes with the contractor:</strong> Without clear
                  drawings and specifications, arguments about what was agreed
                  are common.
                </li>
                <li>
                  <strong>Hidden costs after handover:</strong> Leaks, damp and
                  poor drainage that a careful design would have prevented.
                </li>
              </ul>
              <p className="mt-3">
                None of this means a bigger design bill is always better. It
                means that a clear, coordinated design is rarely the place to
                cut.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Building a Realistic Project Budget
              </h3>
              <p className="mb-3">
                Use this step-by-step approach to plan your total cost.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Define your needs.</strong> Rooms, parking,
                  storage, interiors and future plans.
                </li>
                <li>
                  <strong>Step 2: Set a total ceiling.</strong> The maximum you
                  can spend, including all costs, not just construction.
                </li>
                <li>
                  <strong>Step 3: List the cost groups.</strong> Use the table
                  above, and add anything specific to your project.
                </li>
                <li>
                  <strong>Step 4: Ask for a clear estimate.</strong> An item-wise
                  outline from your architect or builder, with quantities and
                  specifications.
                </li>
                <li>
                  <strong>Step 5: Add approvals and connections.</strong> Fees
                  for drawings, authorities and utility connections.
                </li>
                <li>
                  <strong>Step 6: Plan interiors and external works.</strong>{" "}
                  Kitchen, wardrobes, boundary, gate, paving and landscaping
                  often get forgotten.
                </li>
                <li>
                  <strong>Step 7: Keep a reserve.</strong> Set aside a sensible
                  reserve for changes and surprises, and do not plan to spend it
                  on upgrades.
                </li>
                <li>
                  <strong>Step 8: Decide what can be phased.</strong> Upgrades,
                  landscaping or an extra floor can come later if planned for.
                </li>
                <li>
                  <strong>Step 9: Review the budget at each stage.</strong>{" "}
                  Compare actual costs to the plan as work progresses.
                </li>
              </ul>
              <p className="mt-3">
                You can use the free MTBOSS Budget Calculator on the website
                for a starting estimate, and request a detailed proposal after
                a discussion.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Your Total Cost in Rampur
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
                  <strong>Design complexity:</strong> Irregular plots, curves,
                  double heights and special elevations add cost.
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
                  <strong>Interiors:</strong> Kitchen, wardrobes, ceilings and
                  furniture.
                </li>
                <li>
                  <strong>External works:</strong> Boundary wall, gate, paving,
                  parking and landscaping.
                </li>
                <li>
                  <strong>Waterproofing and protection:</strong> Roof,
                  bathrooms, basement and external walls.
                </li>
                <li>
                  <strong>Location and access:</strong> Transport of materials
                  and labour to the site.
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
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost Considerations by Type of Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>New house or bungalow:</strong> The largest budget
                  share goes to structure, services and finishes, and design
                  decisions strongly affect all three.
                </li>
                <li>
                  <strong>Extra floor:</strong> Needs a structural assessment
                  and often strengthening, so planning cost is higher relative
                  to area.
                </li>
                <li>
                  <strong>Renovation:</strong> Costs depend on the state of the
                  structure, plumbing, electrical and waterproofing. A good
                  survey avoids surprises.
                </li>
                <li>
                  <strong>Shop, showroom or office:</strong> Fit-out, lighting,
                  air conditioning and signage can be a large share of the
                  total.
                </li>
                <li>
                  <strong>Institutional and healthcare buildings:</strong>{" "}
                  Specialist services and compliance affect the budget
                  significantly.
                </li>
                <li>
                  <strong>Interior-only projects:</strong> Costs depend on area,
                  finish level, custom furniture and kitchens.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Local Factors in Rampur That Affect Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Distance and logistics:</strong> If your architect or
                  contractor is based in another city, plan for travel and site
                  visits.
                </li>
                <li>
                  <strong>Soil and drainage:</strong> Local soil and water
                  conditions affect foundation and plinth design.
                </li>
                <li>
                  <strong>Climate:</strong> Hot summers and a monsoon season
                  affect roof, ventilation and waterproofing details.
                </li>
                <li>
                  <strong>Material and labour supply:</strong> Availability and
                  seasonal demand affect prices and timelines.
                </li>
                <li>
                  <strong>Household preferences:</strong> If you follow Vastu or
                  similar preferences, tell the architect at the start, as it
                  can affect design time and layout.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design and Build: Planning the Cost Under One Scope
              </h3>
              <p className="mb-3">
                A design and build approach means one company handles design and
                construction under one agreement. It can simplify budgeting,
                because the estimate, drawings and specifications come from the
                same team. But clarity is essential.
              </p>
              <p className="mb-2 font-semibold text-gray-900">Ask for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>A clear design scope:</strong> What drawings and
                  services are included.
                </li>
                <li>
                  <strong>A clear construction scope:</strong> What is built, to
                  what specifications.
                </li>
                <li>
                  <strong>An item-wise estimate:</strong> Quantities, rates and
                  exclusions.
                </li>
                <li>
                  <strong>A payment schedule tied to progress:</strong> Not just
                  dates.
                </li>
                <li>
                  <strong>A change process:</strong> How extras and changes are
                  priced and approved.
                </li>
                <li>
                  <strong>A defined handover:</strong> What condition the
                  building is in, and what documents you receive.
                </li>
              </ul>
              <p className="mt-3">
                Whether you hire an architect and builder separately or use
                design and build, the same rule applies: get it in writing.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Ways to Control Total Cost Without Cutting Quality
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Decide your brief early:</strong> Late changes are the
                  most common cause of overruns.
                </li>
                <li>
                  <strong>Be honest about your budget:</strong> A design to a
                  clear budget works better than a design to a dream.
                </li>
                <li>
                  <strong>Invest in drawings and coordination:</strong> They
                  save more on site than they cost.
                </li>
                <li>
                  <strong>Choose specifications deliberately:</strong> Spend on
                  what you use daily, such as kitchen, bathrooms and flooring in
                  main areas.
                </li>
                <li>
                  <strong>Protect the building:</strong> Waterproofing, drainage
                  and pest-proofing prevent costly repairs later.
                </li>
                <li>
                  <strong>Compare quotes on scope, not just price:</strong> Make
                  sure each quote covers the same work.
                </li>
                <li>
                  <strong>Keep a reserve:</strong> Surprises happen, even in
                  well-planned projects.
                </li>
                <li>
                  <strong>Track costs during construction:</strong> Review
                  progress and spending at each stage.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Service Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Budget planning session:</strong> Discussion of needs,
                  priorities and a realistic budget outline.
                </li>
                <li>
                  <strong>Concept design package:</strong> Requirement study and
                  layout options.
                </li>
                <li>
                  <strong>House plan and elevation package:</strong> Floor
                  plans, elevation and working drawings.
                </li>
                <li>
                  <strong>Interior design package:</strong> Layout, furniture,
                  lighting, ceilings and finishes.
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
                  <strong>Phase-wise plan:</strong> One complete design carried
                  out in stages to match your budget.
                </li>
              </ul>
              <p className="mt-3">
                Scope and prices are agreed in writing before work begins, so
                you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Prepares a Cost Estimate
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your project,
                  plot and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free calculator
                  on our website gives a starting estimate for the construction
                  budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share plot
                  details, photos and documents. For Rampur, the team will
                  confirm arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 4: Requirements and priorities.</strong> You and
                  the team talk through needs, budget, style, timeline and the
                  services you want.
                </li>
                <li>
                  <strong>Step 5: Scope and specifications.</strong> The team
                  lists what will be built, to what specifications, and what is
                  not included.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Ask Before You Fix Your Budget
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  What exactly is included in the design cost?
                </li>
                <li>
                  What is not included, such as structural design, approvals and
                  interiors?
                </li>
                <li>
                  What will construction cost, and on what specifications?
                </li>
                <li>
                  How are changes priced?
                </li>
                <li>
                  What reserve should I keep?
                </li>
                <li>
                  What can be phased, and what should not be?
                </li>
                <li>
                  How are payments tied to progress?
                </li>
                <li>
                  Who is responsible for coordinating design, structure and
                  services?
                </li>
                <li>
                  Can I see completed projects and, if possible, speak to a past
                  client?
                </li>
                <li>
                  What happens after handover if I find defects?
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Budgeting Mistakes
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Planning only for construction, and forgetting design,
                  approvals, interiors and external works.
                </li>
                <li>
                  Setting a budget without a clear estimate.
                </li>
                <li>
                  Choosing the lowest design cost without checking scope.
                </li>
                <li>
                  Skipping structural and services coordination.
                </li>
                <li>
                  Not keeping a reserve.
                </li>
                <li>
                  Spending the reserve on upgrades.
                </li>
                <li>
                  Making many changes after construction begins.
                </li>
                <li>
                  Comparing quotes with different scopes.
                </li>
                <li>
                  Ignoring waterproofing and drainage, leading to repair costs
                  later.
                </li>
                <li>
                  Not getting scope, specifications and payments in writing.
                </li>
                <li>
                  Splitting design, construction and interiors among agencies
                  and managing them alone.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Share to Get an Accurate Estimate
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
                  <strong>Services wanted:</strong> Design only, design and
                  build, interiors or turnkey.
                </li>
                <li>
                  <strong>Budget ceiling:</strong> The total you can comfortably
                  spend.
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
                Why Consider MTBOSS for Architecture and Construction in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Budget talk from the first meeting:</strong> We
                  discuss your total budget early, not after the design is done.
                </li>
                <li>
                  <strong>Itemised estimates:</strong> Written quotes with
                  scope, quantities and specifications stated clearly.
                </li>
                <li>
                  <strong>Free Budget Calculator:</strong> A simple starting
                  estimate for your construction budget.
                </li>
                <li>
                  <strong>Design and construction under one roof:</strong>{" "}
                  Planning, building, interiors and finishing coordinated by one
                  team, if you choose.
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
                Contact MTBOSS: Architect and Construction Estimate for Rampur
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
                    href="mailto:mtboss2016@gmail.com"
                    className="text-blue-600 underline"
                  >
                    mtboss2016@gmail.com
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
                If you want a clear idea of architect cost in Rampur within
                your total project budget, MTBOSS offers an itemised written
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
                  <strong>Q1. What is the architect cost in Rampur?</strong>
                  <br />
                  It depends on the project type and size, the scope of
                  services, complexity, revisions and supervision. An accurate
                  figure needs a proposal based on your project. It is best to
                  plan the design cost as part of your total building budget.
                </li>
                <li>
                  <strong>Q2. Is the architect&apos;s cost included in
                  construction cost?</strong>
                  <br />
                  Usually not, unless you choose a design and build or turnkey
                  package, where design and construction are under one scope.
                  Ask for the design scope and construction scope in writing.
                </li>
                <li>
                  <strong>Q3. Does MTBOSS provide architecture services for
                  Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Clients in Rampur can contact
                  the team with project details to confirm availability, scope
                  and arrangements.
                </li>
                <li>
                  <strong>Q4. Does hiring an architect save money?</strong>
                  <br />
                  A good design can reduce wasted area, avoid rework and plan
                  services efficiently. It does not guarantee a lower cost, but
                  it often prevents expensive mistakes. Compare what you
                  receive, not just the price.
                </li>
                <li>
                  <strong>Q5. What else should I budget for besides design and
                  construction?</strong>
                  <br />
                  Structural design, approvals and authority fees, soil testing,
                  utility connections, interiors, kitchens, boundary and gate,
                  landscaping and a reserve for changes.
                </li>
                <li>
                  <strong>Q6. How much reserve should I keep?</strong>
                  <br />
                  It depends on how complete your design and estimate are and
                  how risky the project is. Discuss a sensible reserve with your
                  architect or builder.
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