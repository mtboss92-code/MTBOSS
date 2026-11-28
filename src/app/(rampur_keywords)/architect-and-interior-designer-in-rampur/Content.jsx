import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan the Building and the Rooms as One Project
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Many homes are designed in two separate steps. First the
                structure is planned and built. Then, when the walls are up and
                the slabs are cast, the owner calls an interior designer to
                &ldquo;fill&rdquo; the rooms. By then, many decisions are
                already fixed. The bedroom is too narrow for the bed and
                wardrobe together, there is no switch where the bedside lamp
                should be, the false ceiling has no room for lights, the
                kitchen plumbing sits on the wrong wall and the pipes in the
                bathroom were laid before anyone chose the fittings.
              </p>
              <p className="mt-3">
                An architect and interior designer working together avoid this.
                They plan the building and the rooms at the same time, so that
                walls, electrical points, plumbing, ceiling heights, wardrobes
                and lighting all fit. This page explains how architecture and
                interior design connect, what to plan at each stage and how
                MTBOSS approaches projects from the first sketch to the final
                fitting.
              </p>
              <p className="mt-3">
                MTBOSS Construction Private Limited is an architect, interior
                designer and construction company serving Moradabad and
                Bareilly. It offers architecture and interior design,
                construction, building renovation, waterproofing, modular
                kitchens and other home services with transparent pricing and
                on-time delivery.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Architecture and Interior Design at a Glance
              </h3>
              <p className="mb-3">
                The table shows how decisions change when architecture and
                interiors are planned together.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Decision
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        If planned with architecture
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        If left until later
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Room sizes
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Sized for real furniture and movement
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Beds and wardrobes fight for space
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Electrical points
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Placed for how you use each room
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra chasing, patch-ups and exposed wiring
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Plumbing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Positioned for kitchen and bathroom layouts
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Pipes in the wrong place, costly to move
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Ceiling heights
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Planned for false ceilings and lights
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Low ceilings or no room for services
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Niches and storage
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Built into walls and structure
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Bulky furniture and wasted corners
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Windows and doors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Placed for light, ventilation and furniture
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Blocked windows, awkward door swings
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Lighting
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Designed in layers from the start
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Single bulb in the middle of the ceiling
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Budget
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        One plan covering structure and interiors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Interiors squeezed after the money is spent
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, family and budget matter more than any template.
                MTBOSS helps you plan a home that suits your actual situation.
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
                  Architecture &amp; Interior, Modular Kitchen, Carpenter,
                  Painter, False Ceiling, Tile &amp; Marble, Electrician and
                  Plumber are listed among the Quick Home Services on our
                  website.
                </li>
                <li>
                  A project gallery and blog on the website let prospective
                  clients review completed work.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Architecture and Interior Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your project with the team to confirm scope and
                arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement study and budget discussion:</strong>{" "}
                  Understanding your plot or premises, family or business,
                  priorities and budget.
                </li>
                <li>
                  <strong>Architectural design:</strong> Floor plans,
                  elevations and 3D views.
                </li>
                <li>
                  <strong>Interior design:</strong> Furniture layouts, storage,
                  lighting, ceilings, colours and finishes.
                </li>
                <li>
                  <strong>Modular kitchen design and installation:</strong>{" "}
                  Layout, storage, countertop, hardware and finishes.
                </li>
                <li>
                  <strong>Electrical and plumbing coordination:</strong> Points,
                  fittings and layouts matched to the design.
                </li>
                <li>
                  <strong>Estimate and budget planning:</strong> An item-wise
                  cost outline, supported by the free Budget Calculator.
                </li>
                <li>
                  <strong>Construction and project management:</strong>{" "}
                  Execution to the approved design, with quality checks.
                </li>
                <li>
                  <strong>Renovation and remodelling:</strong> Redesign and
                  upgrade of existing homes and shops.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting the finished interiors.
                </li>
              </ul>
              <p className="mt-3">
                Final scope for each project is discussed and confirmed with
                the MTBOSS team before work begins.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Plan Architecture and Interiors Together
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Rooms that fit real furniture:</strong> Sizes are
                  tested against beds, sofas, dining tables and wardrobes on the
                  plan.
                </li>
                <li>
                  <strong>Services in the right place:</strong> Electrical
                  points, switches, plumbing and AC positions are planned with
                  the layout.
                </li>
                <li>
                  <strong>No expensive rework:</strong> Walls are not broken and
                  pipes are not moved to fit the furniture.
                </li>
                <li>
                  <strong>Ceilings and lighting that work:</strong> Heights and
                  structure allow false ceilings, cove lighting and fixtures.
                </li>
                <li>
                  <strong>Better use of space:</strong> Niches, alcoves, window
                  seats and built-in storage are part of the building, not
                  afterthoughts.
                </li>
                <li>
                  <strong>One budget:</strong> Structure and interiors are
                  planned together, so you do not run out of money before the
                  rooms are usable.
                </li>
                <li>
                  <strong>Faster completion:</strong> One team coordinating
                  civil, carpentry, electrical, plumbing and finishing avoids
                  waiting between trades.
                </li>
                <li>
                  <strong>A consistent look:</strong> Facade, interiors, colours
                  and materials follow one design language.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                The Process: From Plan to Furnished Home
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Stage 1: Brief and Budget</strong>
                  <br />
                  Talk through how your family lives, what you need in each
                  room, what you like and dislike and what you can spend,
                  including interiors, not just structure.
                </li>
                <li>
                  <strong>Stage 2: Concept Layout With Furniture</strong>
                  <br />
                  Floor plans are drawn with furniture on them: beds, wardrobes,
                  sofas, dining tables, desks and kitchen counters. Rooms are
                  adjusted until they work.
                </li>
                <li>
                  <strong>Stage 3: Elevation and Interior Concept</strong>
                  <br />
                  The exterior is developed along with the interior direction:
                  colours, materials, ceiling ideas and lighting style.
                </li>
                <li>
                  <strong>Stage 4: Services Planning</strong>
                  <br />
                  Electrical points, switches, plumbing, drainage, AC and data
                  are planned room by room.
                </li>
                <li>
                  <strong>Stage 5: Detailed Interior Drawings</strong>
                  <br />
                  Kitchen layouts, wardrobe elevations, ceiling plans, lighting
                  plans, flooring layouts and bathroom details.
                </li>
                <li>
                  <strong>Stage 6: Estimate and Specifications</strong>
                  <br />
                  Materials, finishes, fittings and furniture are listed with
                  quantities and costs.
                </li>
                <li>
                  <strong>Stage 8: Finishing and Interior Works</strong>
                  <br />
                  Plaster, flooring, tiles, ceilings, carpentry, kitchen
                  installation, painting and fittings.
                </li>
                <li>
                  <strong>Stage 9: Final Touches and Handover</strong>
                  <br />
                  Lighting, accessories, cleaning, snagging and a final
                  walk-through.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Room-by-Room Planning
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Living Room
              </h4>
              <p className="mb-3">
                Plan seating, TV or media wall, storage, lighting and the link
                to dining and balcony. Plan electrical points for lamps, TV,
                internet and charging.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Dining Area
              </h4>
              <p className="mb-3">
                Plan table size, circulation, a crockery unit and lighting. Keep
                it close to the kitchen.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Kitchen
              </h4>
              <p className="mb-3">
                Plan the work triangle, storage, countertop, chimney, appliances
                and plumbing. See our modular kitchen guidance.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Bedrooms
              </h4>
              <p className="mb-3">
                Plan bed position, wardrobes, bedside storage, lighting,
                curtains and AC. Check that doors and wardrobes can open fully.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Bathrooms
              </h4>
              <p className="mb-3">
                Plan fittings, storage, ventilation, hot water, lighting and
                waterproofing before tiling.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Prayer or Quiet Corner
              </h4>
              <p className="mb-3">
                Plan a calm place with suitable light, storage and privacy.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Study or Work Area
              </h4>
              <p className="mb-3">
                Plan desk, storage, task lighting, power and data, and quiet.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Entrance and Foyer
              </h4>
              <p className="mb-3">
                Plan shoe storage, seating, mirror and lighting for a welcoming
                first impression.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Balconies and Utility
              </h4>
              <p className="mb-3">
                Plan drying space, storage, drainage and waterproofing.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Materials and Finishes: Choosing for Rampur
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Flooring:</strong> Choose durable, easy-to-clean
                  surfaces for each room, such as tile, stone or other options,
                  with attention to slip resistance in wet areas.
                </li>
                <li>
                  <strong>Wall finishes:</strong> Paint, texture and cladding
                  should suit the room and be easy to maintain.
                </li>
                <li>
                  <strong>Ceilings:</strong> False ceilings can improve lighting
                  and hide services, but should suit ceiling height and fire
                  safety.
                </li>
                <li>
                  <strong>Carpentry:</strong> Choose boards and finishes suited
                  to humidity, especially near kitchens and bathrooms, and ask
                  what is used for the carcass and shutters.
                </li>
                <li>
                  <strong>Hardware:</strong> Hinges, channels and handles affect
                  how smoothly furniture works over time.
                </li>
                <li>
                  <strong>Fabrics and soft furnishings:</strong> Choose
                  practical, washable options for daily use.
                </li>
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  dust call for easy-to-clean finishes, good ventilation and
                  moisture-resistant materials.
                </li>
              </ul>
              <p className="mt-3">
                Ask for material names, specifications and finishes in writing,
                so you know exactly what is being installed.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Interiors for Different Property Types
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>New home:</strong> Plan interiors from the start, so
                  structure, services and furniture fit together.
                </li>
                <li>
                  <strong>Existing home or renovation:</strong> Study the
                  structure and services, then plan layout changes, kitchens,
                  bathrooms, ceilings and finishes.
                </li>
                <li>
                  <strong>Apartment or flat:</strong> Work within society rules
                  and fixed structure and plumbing, and focus on storage,
                  lighting and finishes.
                </li>
                <li>
                  <strong>Shop or showroom:</strong> Plan display, counters,
                  lighting, storage and branding, with a smooth fit-out
                  schedule.
                </li>
                <li>
                  <strong>Office:</strong> Plan workspaces, meeting rooms,
                  reception, acoustics, lighting and data.
                </li>
                <li>
                  <strong>Clinic:</strong> Plan hygiene, privacy, lighting and
                  patient flow.
                </li>
                <li>
                  <strong>Hotel, restaurant or hostel:</strong> Plan durable,
                  easy-to-clean finishes and efficient layouts.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Bareilly and Rampur: Local Factors
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean ventilation, shading and moisture-resistant
                  materials matter inside as well as outside.
                </li>
                <li>
                  <strong>Dust:</strong> Choose easy-to-clean finishes, good
                  door and window seals and washable fabrics.
                </li>
                <li>
                  <strong>Humidity:</strong> Use moisture-resistant carcass
                  material near kitchens and bathrooms, and ventilate rooms.
                </li>
                <li>
                  <strong>Pests:</strong> Seal gaps behind kitchens and
                  wardrobes, and plan pest control to protect furniture and
                  woodwork.
                </li>
                <li>
                  <strong>Power supply:</strong> Plan backup, lighting and
                  cooling with the interiors.
                </li>
                <li>
                  <strong>Material and labour supply:</strong> Plan special
                  materials early, as lead times can affect schedules.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Building and
                  society rules vary. Check what applies before you finalise
                  interior changes.
                </li>
                <li>
                  <strong>Household preferences:</strong> If you follow Vastu or
                  similar preferences, tell the team at the start so they can be
                  considered in the layout.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Design consultation:</strong> Layout and interior
                  advice with written notes.
                </li>
                <li>
                  <strong>Architecture and interior design package:</strong>{" "}
                  Plans, elevation and interior designs for the whole building.
                </li>
                <li>
                  <strong>Interior design only:</strong> Layout, furniture,
                  lighting, ceilings and finishes for an existing space.
                </li>
                <li>
                  <strong>Modular kitchen package:</strong> Kitchen design and
                  installation.
                </li>
                <li>
                  <strong>Wardrobe and carpentry package:</strong> Built-in
                  storage and furniture.
                </li>
                <li>
                  <strong>Design and build package:</strong> Architecture,
                  construction and interiors under one team and one scope.
                </li>
                <li>
                  <strong>Renovation package:</strong> Redesign, repair,
                  waterproofing and interiors for an existing building.
                </li>
                <li>
                  <strong>Phase-wise plan:</strong> One complete design built in
                  stages, with the kitchen and bedrooms first, and other rooms
                  later.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Interior and Project Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Area and number of rooms:</strong> More area and rooms
                  mean more material and labour.
                </li>
                <li>
                  <strong>Scope of interiors:</strong> Kitchen, wardrobes,
                  ceilings, lighting, furniture and decor can each be large
                  items.
                </li>
                <li>
                  <strong>Material and finish choices:</strong> Laminates,
                  acrylic, PU finishes, stone, tiles, glass and fittings sit at
                  different price levels.
                </li>
                <li>
                  <strong>Hardware quality:</strong> Hinges, channels and
                  fittings affect both price and performance.
                </li>
                <li>
                  <strong>Civil, plumbing and electrical changes:</strong>{" "}
                  Moving walls, pipes and wiring adds cost.
                </li>
                <li>
                  <strong>Site conditions:</strong> Uneven walls, damp, access
                  and society rules.
                </li>
                <li>
                  <strong>Phasing:</strong> Staging work can ease cash flow.
                </li>
                <li>
                  <strong>Design changes:</strong> Changes after approval or
                  during work add cost and delay.
                </li>
                <li>
                  <strong>Material prices and timing:</strong> Market rates,
                  lead times and the monsoon affect planning.
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
                Budget Priorities for Interiors
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Decide your total budget, including
                  structure, interiors and a reserve.
                </li>
                <li>
                  <strong>Second:</strong> Get the layout and storage right.
                  They improve daily life more than decoration.
                </li>
                <li>
                  <strong>Third:</strong> Fix the basics first. Leaks, wiring
                  and plumbing come before furniture and paint.
                </li>
                <li>
                  <strong>Fourth:</strong> Invest in the kitchen, wardrobes and
                  bathrooms. They are used every day and are costly to redo.
                </li>
                <li>
                  <strong>Fifth:</strong> Plan lighting carefully. Good lighting
                  changes how a room looks and feels.
                </li>
                <li>
                  <strong>Sixth:</strong> Choose finishes that suit your budget
                  and cleaning habits.
                </li>
                <li>
                  <strong>Seventh:</strong> Add decor and loose furniture over
                  time.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Works: Architecture and Interiors as One Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your project,
                  plot or premises and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free
                  calculator on our website gives a starting estimate for the
                  construction budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share
                  plot or premises details, photos and documents. For Rampur,
                  the team will confirm arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 4: Brief and priorities.</strong> You and the
                  team talk through family needs, style, storage, budget and
                  timeline.
                </li>
                <li>
                  <strong>Step 5: Concept layout with furniture.</strong>{" "}
                  Layouts are prepared with furniture placed, and refined with
                  your feedback.
                </li>
                <li>
                  <strong>Step 6: Elevation and interior concept.</strong> The
                  exterior and interior direction, colours and materials are
                  developed.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Ask Any Architect and Interior Designer
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Will interiors be planned with the architecture, or after?
                </li>
                <li>
                  Will you show furniture on the plans?
                </li>
                <li>
                  How do you plan electrical points and lighting?
                </li>
                <li>
                  Who coordinates carpentry, electrical, plumbing and painting?
                </li>
                <li>
                  How are changes priced?
                </li>
                <li>
                  How are payments tied to progress?
                </li>
                <li>
                  Can I see completed interiors?
                </li>
                <li>
                  What happens after handover if something needs adjustment?
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes to Avoid
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Building first and thinking about interiors later.
                </li>
                <li>
                  Rooms sized without testing furniture.
                </li>
                <li>
                  Too few electrical points, and switches in the wrong places.
                </li>
                <li>
                  Plumbing positions that fight the kitchen or bathroom layout.
                </li>
                <li>
                  Low ceilings with no room for lights or false ceilings.
                </li>
                <li>
                  Using non-moisture-resistant materials near kitchens and
                  bathrooms.
                </li>
                <li>
                  Choosing finishes only from photos, without seeing samples.
                </li>
                <li>
                  Skipping lighting design.
                </li>
                <li>
                  Forgetting pest control and waterproofing, which protect
                  expensive interiors.
                </li>
                <li>
                  Making many changes after work begins.
                </li>
                <li>
                  Splitting architecture, carpentry, electrical and painting
                  among agencies and managing them alone.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Share at Your First Consultation
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Project type:</strong> New home, renovation, flat
                  interior, shop, office or kitchen.
                </li>
                <li>
                  <strong>Location:</strong> Locality in Rampur or nearby, with a
                  map pin if possible.
                </li>
                <li>
                  <strong>Plot or premises details:</strong> Size, shape,
                  floors, drawings and photos.
                </li>
                <li>
                  <strong>Existing building condition:</strong> If renovating or
                  extending.
                </li>
                <li>
                  <strong>Budget range:</strong> The amount you are comfortable
                  spending, including interiors.
                </li>
                <li>
                  <strong>Style preferences:</strong> Reference photos, colours
                  and finishes you like and dislike.
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
                Why Consider MTBOSS as Your Architect and Interior Designer in
                Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>One plan for the building and the rooms:</strong>{" "}
                  Structure, services and interiors planned together.
                </li>
                <li>
                  <strong>Furniture on the plan:</strong> Rooms tested with real
                  furniture before construction.
                </li>
                <li>
                  <strong>Carpentry, electrical, plumbing, painting and tiling
                  in-house:</strong> Services listed on our website coordinated
                  through one company.
                </li>
                <li>
                  <strong>Written specifications:</strong> Materials, finishes,
                  timeline and payment terms are documented before work begins.
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
                Contact MTBOSS: Architect and Interior Designer for Rampur
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
                  <strong>Modular kitchen service:</strong>{" "}
                  <a
                    href="https://www.mtboss.in/quick/modular-kitchen"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Modular Kitchen
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
                If you are looking for an architect and interior designer in
                Rampur, MTBOSS offers a single point of contact from design to
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
                  <strong>Q1. What does an architect and interior designer
                  do?</strong>
                  <br />
                  The architect plans the building and its structure, layout and
                  elevation. The interior designer plans the inside: furniture,
                  storage, lighting, ceilings, finishes and fittings. Working
                  together, they make sure the building and the rooms fit. The
                  exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide architecture and interior
                  design for Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Clients in Rampur can contact
                  the team with project details to confirm availability, scope
                  and arrangements.
                </li>
                <li>
                  <strong>Q3. Should I hire an interior designer before or
                  after construction?</strong>
                  <br />
                  Ideally during design, before construction. That way
                  electrical points, plumbing, ceiling heights and storage can
                  be planned into the building. It is still possible to plan
                  interiors for an existing building.
                </li>
                <li>
                  <strong>Q4. Can I get only interior design for my flat or
                  shop?</strong>
                  <br />
                  Interior design and fit-out are available as separate scopes.
                  MTBOSS lists Architecture &amp; Interior among its Quick Home
                  Services. Share your premises details with the team to confirm
                  scope.
                </li>
                <li>
                  <strong>Q5. Do you also make modular kitchens and
                  wardrobes?</strong>
                  <br />
                  MTBOSS lists Modular Kitchen and Carpenter among its Quick
                  Home Services. Share your needs with the team to confirm what
                  is included in your project.
                </li>
                <li>
                  <strong>Q6. How do I choose materials for interiors?</strong>
                  <br />
                  Consider climate, usage, cleaning, budget and appearance, and
                  ask for samples and written specifications. Moisture-resistant
                  materials are important near kitchens and bathrooms.
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