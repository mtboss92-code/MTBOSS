import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Interior Design Cost Rampur – How Pricing Works and How to Estimate Yours
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                &ldquo;How much will my interior cost?&rdquo; is the first question
                almost everyone asks, and it is the hardest one to answer honestly over
                the phone. Two homes of the same size can have very different costs,
                depending on the materials, the amount of carpentry, the condition of
                the walls and the level of finish. Anyone who quotes a single price for
                every home is either guessing or leaving things out.
              </p>
              <p className="mt-3">
                MTBOSS Construction Private Limited is an architecture, interior and
                construction company serving Rampur, Moradabad and Bareilly. This page
                does not hide behind vague answers. It explains how interior cost is
                built, which factors matter most, how to estimate your own project and
                how to compare quotations fairly, so you can plan with confidence before
                you speak to any designer.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why a Single Rate Rarely Tells the Truth
              </h3>
              <p className="mb-3">
                Some designers advertise a rate per square foot. It can be a useful
                starting point, but only if you know what it includes. A single rate can
                hide big differences:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Which areas are counted.</strong> Carpet area, built-up area
                  or only the areas with interior work.
                </li>
                <li>
                  <strong>Which items are included.</strong> Kitchen, wardrobes,
                  ceilings, flooring, painting, electrical, plumbing and civil work.
                </li>
                <li>
                  <strong>Which materials are used.</strong> Board type, thickness,
                  finish and hardware.
                </li>
                <li>
                  <strong>What is excluded.</strong> Appliances, loose furniture,
                  curtains, decor, repairs and approvals.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                The Main Pricing Models
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Per Square Foot Pricing
              </h4>
              <p>
                A rate is applied to the area of the home or the rooms. It is easy to
                understand and good for early comparisons, but it can hide specification
                differences. Always ask what the rate covers.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Itemised or Item-Wise Pricing
              </h4>
              <p>
                Each item, such as a wardrobe, a kitchen, a TV unit or a ceiling, is
                priced by size, material and finish. This is the most transparent model,
                because you can see where money goes and adjust items to fit your
                budget.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Package Pricing
              </h4>
              <p>
                A fixed price for a defined scope, such as a kitchen and wardrobes
                package. It is simple, but you must check exactly what is inside the
                package and what is excluded.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Turnkey Pricing
              </h4>
              <p>
                One price for design, supply, execution and handover. It gives cost
                certainty if the scope and specifications are detailed, and it reduces
                the number of parties you manage.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Design Fee Models
              </h4>
              <p>
                Some designers charge a separate design fee, such as a flat amount, a
                rate per area or a percentage of project cost. Others include design in
                the turnkey price. Ask whether design, drawings and 3D visuals are
                included or charged separately.
              </p>
              <p className="mt-3">
                MTBOSS prefers itemised or clearly defined turnkey quotations, so that
                you can see what you are paying for.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Makes Up Interior Design Cost
              </h3>
              <p className="mb-3">
                An interior project usually has these components.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-3 py-2 text-left">
                        Component
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left">
                        What It Covers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Design and planning
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Site measurement, layout, 3D visuals, drawings and approvals of
                        choices
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Civil and preparation
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Wall changes, plaster repair, waterproofing, floor levelling
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Electrical work
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Wiring, points, switches, lighting provisions, concealed
                        conduits
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Plumbing work
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Water lines, drains, fixtures and repairs
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">Carpentry</td>
                      <td className="border border-gray-200 px-3 py-2">
                        Kitchen, wardrobes, TV unit, storage, beds, desks and panels
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Ceiling work
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        False ceiling framework, boards, lighting recesses and finishing
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Flooring and tiles
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Floor and wall tiles, skirting, bathroom finishes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Painting and wall finishes
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Putty, primer, paint, texture, wallpaper
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Lighting and fixtures
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Lights, drivers, fans and decorative fittings
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Hardware and accessories
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Hinges, channels, handles, baskets and special fittings
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Furniture and soft furnishings
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Sofas, beds, curtains, rugs and decor (often separate)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Supervision and project management
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Site engineer time, coordination and quality checks
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                The Biggest Cost Drivers
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Size and Number of Rooms:</strong> More area means more
                  material and labour. But costs do not rise perfectly in a straight
                  line, since some items, such as kitchens and bathrooms, have fixed
                  minimum costs.
                </li>
                <li>
                  <strong>Amount of Carpentry:</strong> Kitchens, wardrobes, TV units
                  and storage involve boards, finishes and hardware. Heavy carpentry
                  raises cost, and complex shapes raise it more.
                </li>
                <li>
                  <strong>Material and Finish Level:</strong> Moisture-resistant boards,
                  premium laminates, acrylic, veneer, stone and imported items can
                  change the cost of an item significantly compared with standard
                  options.
                </li>
                <li>
                  <strong>Hardware Quality:</strong> Good hinges, drawer channels, lifts
                  and baskets cost more than basic ones, but they affect how long the
                  interior works well.
                </li>
                <li>
                  <strong>Ceiling and Lighting Design:</strong> A simple ceiling costs
                  much less than a multi-layer design with many lights. The number of
                  fixtures, cove length and decorative features all matter.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost Guide by Interior Item
              </h3>
              <p className="mb-3">
                We do not publish fixed prices here, because the numbers depend on
                specification. This guide shows what changes the cost of each major
                item.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Modular Kitchen
              </h4>
              <p>
                <strong>Cost depends on:</strong> Total running length of units, layout,
                carcass and shutter material, hardware and accessories, countertop type,
                backsplash, chimney and appliance provisions, and plumbing and
                electrical changes.
              </p>
              <p>
                <strong>Where costs rise:</strong> Island layouts, tall units, special
                corner systems, premium countertops and high-end hardware.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Wardrobes
              </h4>
              <p>
                <strong>Cost depends on:</strong> Width and height, number of shutters
                and drawers, board and finish, loft, hardware, lighting and accessories.
              </p>
              <p>
                <strong>Where costs rise:</strong> Walk-in wardrobes, glass or veneer
                finishes, pull-outs and sensor lighting.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                TV Unit and Feature Wall
              </h4>
              <p>
                <strong>Cost depends on:</strong> Size, panel type, storage, stone or
                fluted cladding, lighting and wiring.
              </p>
             
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Estimate Your Own Interior Cost: A Simple Method
              </h3>
              <p className="mb-3">
                You can create a rough budget before you meet a designer.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1 – List your rooms and items:</strong> Write down each
                  room and the interior items you want, such as wardrobe, TV unit,
                  ceiling and painting.
                </li>
                <li>
                  <strong>Step 2 – Mark each item as must-do, nice-to-have or
                  later.</strong>
                </li>
                <li>
                  <strong>Step 3 – Estimate sizes:</strong> Measure the length of
                  kitchen units, wardrobe widths, ceiling areas and wall areas.
                </li>
                <li>
                  <strong>Step 4 – Ask for sample unit rates:</strong> Request rates
                  from at least two designers for the same items and specifications.
                </li>
                <li>
                  <strong>Step 5 – Multiply and add:</strong> For each item, multiply
                  size by the unit rate, then add all items.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost by Project Type
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Flats and Apartments:</strong> Costs depend mostly on
                  kitchens, wardrobes, bathrooms and ceilings. Bare-shell flats need
                  more work than flats with basic finishes.
                </li>
                <li>
                  <strong>Independent Houses:</strong> More rooms, floors and exposure
                  mean more work. Weather protection, staircases and entrance details
                  add to cost.
                </li>
                <li>
                  <strong>Old Houses:</strong> Repairs and corrections can take a large
                  share of the budget. Inspection first is essential.
                </li>
                <li>
                  <strong>Villas and Premium Homes:</strong> Material quality, custom
                  furniture, detailed ceilings and lighting design raise cost. Lead
                  times for special items also matter.
                </li>
                <li>
                  <strong>Shops and Showrooms:</strong> Lighting, display units,
                  counters, facade and signage are main cost items. Branding rules may
                  add requirements.
                </li>
                <li>
                  <strong>Offices and Clinics:</strong> Layout, partitions, lighting,
                  power and data, flooring and storage drive cost. Clinics add hygiene
                  and plumbing needs.
                </li>
                <li>
                  <strong>Restaurants and Cafés:</strong> Kitchen coordination,
                  ventilation, durable finishes, seating and lighting are major items.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Two Quotations for the Same Home Can Differ So Much
              </h3>
              <p className="mb-3">
                If you have two quotes with very different totals, check these possible
                reasons:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Different materials.</strong> One uses standard boards, and
                  the other uses moisture-resistant boards.
                </li>
                <li>
                  <strong>Different thickness and finish.</strong> Board thickness and
                  edge finishing change cost.
                </li>
                <li>
                  <strong>Different hardware.</strong> Basic and quality hardware have
                  different prices.
                </li>
                <li>
                  <strong>Different scope.</strong> One includes electrical, painting or
                  civil repairs, and the other does not.
                </li>
                <li>
                  <strong>Different measurements.</strong> One may count more or less
                  area.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Hidden and Often Forgotten Costs
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Repairs behind the walls.</strong> Leakage, damp and cracks.
                </li>
                <li>
                  <strong>Electrical upgrades.</strong> Old wiring, extra points and
                  load changes.
                </li>
                <li>
                  <strong>Plumbing corrections.</strong> Pipes, drains and fixtures.
                </li>
                <li>
                  <strong>Appliances and chimney.</strong> These affect kitchen planning
                  and electrical needs.
                </li>
                <li>
                  <strong>Loose furniture.</strong> Sofas, beds, tables and chairs.
                </li>
                <li>
                  <strong>Curtains and soft furnishings.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Ways to Reduce Interior Cost Without Reducing Quality
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Finalise your plan before work begins.</strong> Late changes
                  cost the most.
                </li>
                <li>
                  <strong>Prioritise.</strong> Spend on kitchen, wardrobes,
                  waterproofing, wiring and flooring first.
                </li>
                <li>
                  <strong>Simplify shapes.</strong> Straight lines and standard sizes
                  cost less than curves.
                </li>
                <li>
                  <strong>Use feature areas.</strong> One feature wall or ceiling can
                  have more impact than many weak features.
                </li>
                <li>
                  <strong>Match materials to locations.</strong> Use premium materials
                  where they matter, and standard ones elsewhere.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Payment Stages and Cost Control
              </h3>
              <p className="mb-3">
                A fair payment schedule helps you control spending.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Link payments to milestones, such as design approval, material
                  ordering, fabrication, installation and handover.
                </li>
                <li>
                  Avoid large advances without clear reasons.
                </li>
                <li>Keep receipts and written confirmations.</li>
                <li>
                  Agree on how changes will be priced before they happen.
                </li>
                <li>
                  Hold a final amount until snags are fixed.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Interior Cost Factors in Rampur
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Material transport and availability:</strong> Prices of
                  boards, tiles and fittings can change with supply, season and
                  transport. Confirm how long a quotation stays valid.
                </li>
                <li>
                  <strong>Skilled labour:</strong> Availability of skilled carpenters,
                  painters and installers affects schedules and sometimes cost.
                </li>
                <li>
                  <strong>Seasonal demand:</strong> Wedding and festival periods can
                  increase demand and pressure on timelines.
                </li>
                <li>
                  <strong>Weather:</strong> Monsoon humidity affects some materials and
                  finishing schedules, so plan accordingly.
                </li>
                <li>
                  <strong>Older buildings:</strong> Many homes need repairs before
                  interiors, which can add to the budget.
                </li>
              </ul>
              <p className="mt-3">
                We serve homes and businesses in Rampur, including Civil Lines and other
                areas, as well as Moradabad and Bareilly.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Do Clients Choose MTBOSS for Transparent Interior Pricing?
              </h3>
              <p>
                Clients choose us because we explain cost instead of hiding it. MTBOSS
                combines interior design, carpentry, ceilings, painting, electrical
                coordination, waterproofing and civil work under one team, so the
                quotation covers the whole job and not just one trade. We measure first,
                specify materials and hardware in writing, list exclusions and price
                changes before they happen. When a wall is damp or wiring is old, we
                tell you and include it in the plan.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Judging Interior Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Comparing only the final number.</strong> Scope and
                  specification matter more.
                </li>
                <li>
                  <strong>Believing a single rate for every home.</strong> Cost depends
                  on many factors.
                </li>
                <li>
                  <strong>Ignoring hidden work.</strong> Repairs and services often
                  decide the final bill.
                </li>
                <li>
                  <strong>Forgetting furniture and appliances.</strong> They may be a
                  large part of total spending.
                </li>
                <li>
                  <strong>Skipping the reserve.</strong> Changes and surprises are
                  common.
                </li>
                <li>
                  <strong>Choosing the cheapest option without questions.</strong> Low
                  quotes may leave out important items.
                </li>
                <li>
                  <strong>Changing plans during execution.</strong> This is the biggest
                  source of cost overruns.
                </li>
                <li>
                  <strong>Not asking about validity and payment terms.</strong>{" "}
                  Misunderstandings cause problems later.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Is It Possible to Get an Exact Price Without a Site Visit?
              </h3>
              <p>
                Not reliably. A phone call or a photo can give a rough idea, but an
                exact price needs measurements, material choices and a look at the
                walls, ceilings, wiring and plumbing. A site visit also helps us spot
                problems that would raise cost later, such as leakage, uneven walls or
                weak wiring. That is why we offer a site visit and then prepare an
                itemised quotation. If you want an early idea before the visit, the
                budget calculator and the planning method on this page can help you form
                a realistic range.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Get an Itemised Interior Quotation from MTBOSS
              </h3>
              <p className="mb-3">
                Ready to know your real cost? Share your room sizes, photos, priorities
                and budget range. Our team will visit, measure and give you an itemised
                quotation with specifications, exclusions, schedule and payment stages.
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
                  href="https://www.mtboss.in"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Quote
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
                  Estimate Your Budget
                </a>
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. How is interior design cost calculated?</strong>
                  <br />
                  It is built from area, the amount of carpentry, materials and
                  finishes, hardware, ceilings and lighting, civil and services work,
                  supervision and a reserve. An itemised quotation shows how each part
                  adds up.
                </li>
                <li>
                  <strong>Q2. Is interior cost always calculated per square foot?</strong>
                  <br />
                  No. Per-square-foot rates are a rough guide. Many designers also use
                  item-wise pricing, packages or turnkey pricing. Always ask what the
                  rate includes.
                </li>
                <li>
                  <strong>Q3. Why do interior quotations differ so much?</strong>
                  <br />
                  Quotes may use different materials, thickness, hardware, scope and
                  exclusions. Compare them line by line to see what is really included.
                </li>
                <li>
                  <strong>Q4. Which interior items cost the most?</strong>
                  <br />
                  Kitchens, wardrobes, bathrooms and detailed ceilings with lighting
                  often take large shares of the budget, along with any civil repairs
                  needed.
                </li>
                <li>
                  <strong>Q5. Are design fees included in the quotation?</strong>
                  <br />
                  It depends on the designer. Some include design and 3D visuals in the
                  turnkey price, while others charge separately. Ask for this in
                  writing.
                </li>
                <li>
                  <strong>Q6. What hidden costs should I plan for?</strong>
                  <br />
                  Common ones include leakage repair, wiring and plumbing corrections,
                  appliances, loose furniture, curtains, debris removal and changes
                  during the project.
                </li>
                <li>
                  <strong>Q7. How much reserve should I keep?</strong>
                  <br />
                  A reserve of around 8 to 10% of your budget is sensible for changes
                  and unexpected problems.
                </li>
                <li>
                  <strong>Q8. Can I reduce cost without reducing quality?</strong>
                  <br />
                  Yes. Finalise plans early, prioritise key items, simplify shapes,
                  match materials to locations and phase the work.
                </li>
                <li>
                  <strong>Q9. Can I get an exact price without a site visit?</strong>
                  <br />
                  Not reliably. A site visit allows measurement, material selection and
                  inspection of walls, ceilings, wiring and plumbing, which affect the
                  final price.
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