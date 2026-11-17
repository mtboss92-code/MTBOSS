import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Get a Floor Plan Made for Your Plot, Not Copied from Somewhere Else
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Most people begin their house project by searching for a plan.
                They find a 3BHK layout online, show it to the mason and start
                digging. A few months later they discover that the bedroom
                windows face the neighbour&apos;s wall, the staircase cuts
                through the living room, the kitchen is far from the plumbing
                line and the car does not fit through the gate. The plan looked
                fine on a screen. It was never drawn for their plot.
              </p>
              <p className="mt-3">
                An architect for a house plan in Rampur starts the other way
                round. The plan begins with your plot, your family and your
                budget, and every wall, door, window and staircase is placed
                with a reason.
              </p>
              <p className="mt-3">
                This page explains how a good house plan is made, how plot size,
                facing and number of bedrooms shape the layout, what a plan
                should contain before you approve it and how MTBOSS approaches
                house plans and construction.
              </p>
              <p className="mt-3">
                MTBOSS Construction Private Limited is an architect, interior
                designer and construction company serving Moradabad and
                Bareilly. It offers architecture and interior design, home
                construction, building renovation, waterproofing, modular
                kitchens and other home services with transparent pricing and
                on-time delivery.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                House Plan Services at a Glance
              </h3>
              <p className="mb-3">
                A house plan is more than one drawing. Here is what a complete
                plan package can include.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Item
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What it shows
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Why it matters
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Site plan
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        The plot, house position, gate, parking, setbacks
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Fit with the plot and local rules
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Floor plans
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Rooms, walls, doors, windows, stairs on each floor
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Daily use and comfort
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Elevations
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        How the house looks from each side
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Appearance, windows, shading
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Sections
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        A vertical cut through the house
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Heights, slabs, stairs, ventilation
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Furniture layout
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Beds, sofas, wardrobes, dining table
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Checking that rooms really work
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Structural drawings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Foundation, columns, beams, slabs
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safety and economy
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Plumbing and electrical layouts
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Pipes, drains, points, switches
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Fewer changes on site
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Specifications and estimate
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Materials, finishes, quantities, cost outline
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Budget control
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, family and budget matter more than any template.
                MTBOSS helps you plan a house plan that suits your actual
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
                House Plan Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your plot and needs with the team to confirm scope and
                arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Plot study and requirement discussion:</strong>{" "}
                  Understanding your plot, family, budget and long-term plans.
                </li>
                <li>
                  <strong>Custom house plans:</strong> Floor plans for 1BHK,
                  2BHK, 3BHK, 4BHK and larger homes.
                </li>
                <li>
                  <strong>Single-storey, G+1, G+2 and duplex plans:</strong>{" "}
                  Layouts for different numbers of floors.
                </li>
                <li>
                  <strong>Plans for different plot shapes and facings:</strong>{" "}
                  Narrow, wide, corner and irregular plots, and east, west,
                  north or south-facing entrances.
                </li>
                <li>
                  <strong>Extra floor planning:</strong> Adding floors to an
                  existing house.
                </li>
                <li>
                  <strong>House elevation design:</strong> Facade, windows,
                  balconies and entrance.
                </li>
                <li>
                  <strong>2D and 3D views:</strong> Seeing the plan and the
                  house before it is built.
                </li>
                <li>
                  <strong>Furniture and interior layout:</strong> Checking room
                  sizes against real furniture.
                </li>
                <li>
                  <strong>Working drawings and details:</strong> Dimensioned
                  drawings for the construction team.
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
                  <strong>Home construction and project management:</strong>{" "}
                  Execution to the approved plan, with quality checks.
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
                How a Good House Plan Is Made
              </h3>
              <p className="mb-3">
                A good plan follows a clear sequence.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Study the plot.</strong> Dimensions, shape,
                  orientation, road, neighbours, levels and drainage.
                </li>
                <li>
                  <strong>Step 2: Define the brief.</strong> Rooms, family
                  needs, parking, storage, future plans and budget.
                </li>
                <li>
                  <strong>Step 3: Decide the zones.</strong> Public areas such
                  as living and dining, private areas such as bedrooms, and
                  service areas such as kitchen and utility.
                </li>
                <li>
                  <strong>Step 4: Draw the first layout.</strong> Place rooms,
                  stairs and entrance, and test several options.
                </li>
                <li>
                  <strong>Step 5: Check circulation.</strong> Walk through the
                  plan: from the gate to the door, from the kitchen to the
                  dining table, from the bedroom to the bathroom.
                </li>
                <li>
                  <strong>Step 6: Check light and air.</strong> Make sure every
                  room has natural light and cross-ventilation where possible.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                House Plans by Number of Bedrooms
              </h3>
              <p className="mb-3">
                The number of bedrooms shapes the whole plan. Here is how to
                think about each type.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                1BHK Plan
              </h4>
              <p className="mb-3">
                Compact and efficient. Plan a combined living and dining area,
                a small kitchen, one bedroom with storage and one bathroom.
                Suitable for small plots, rental units or a ground-floor unit.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                2BHK Plan
              </h4>
              <p className="mb-3">
                A popular choice for small families. Plan two bedrooms with good
                ventilation, a shared or attached bathroom, a kitchen near the
                dining area and parking. Plan a staircase position that allows
                future floors.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                3BHK Plan
              </h4>
              <p className="mb-3">
                Suits many family homes. Plan a master bedroom with an attached
                bathroom, two more bedrooms, a larger living and dining area, a
                kitchen with utility, a study or prayer space if needed and
                parking.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                4BHK and Larger Plans
              </h4>
              <p className="mb-3">
                For bigger families or joint households. Plan separate private
                zones, a guest room, a family lounge, larger kitchen and
                storage, and think carefully about circulation so that the house
                does not feel like a maze.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Duplex and G+1 Plans
              </h4>
              <p className="mb-3">
                Common on compact plots. Keep living areas on the ground floor,
                bedrooms upstairs and plan the staircase so it does not break
                the main living area.
              </p>

              <p className="mt-3">
                Whatever the number of rooms, the quality of the plan depends on
                how well the rooms connect, not on how many you fit in.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                House Plans by Plot Size
              </h3>
              <p className="mb-3">
                Plot size changes what is possible. Dimensions such as 20 by 40
                feet or 30 by 50 feet are common examples, but the right plan
                always depends on your actual plot, setbacks and local rules.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Small Plots
              </h4>
              <p className="mb-3">
                Use vertical planning, compact stairs, stacked bathrooms and
                built-in storage. Use light wells or openings to bring light
                into inner rooms. Plan parking carefully.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Medium Plots
              </h4>
              <p className="mb-3">
                Allow space for a front garden or parking, a comfortable living
                area, bedrooms with good ventilation and room for future floors.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Larger Plots
              </h4>
              <p className="mb-3">
                Use open space for courtyards, gardens, parking, outdoor seating
                and future extension. Orient rooms for light and breeze.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Narrow and Deep Plots
              </h4>
              <p className="mb-3">
                Plan a spine of circulation, use side or central courtyards or
                light wells and avoid dark inner rooms.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Corner Plots
              </h4>
              <p className="mb-3">
                Use two street faces for light and a strong elevation. Plan
                entry, parking and privacy carefully.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Irregular Plots
              </h4>
              <p className="mb-3">
                Use the odd corners for storage, utility or small courtyards.
                Avoid forcing rectangular rooms into awkward shapes.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                House Plans by Facing
              </h3>
              <p className="mb-3">
                Orientation affects sunlight, heat, privacy and, for many
                families, Vastu preferences.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>East-facing:</strong> Morning light into the front.
                  Plan the main entrance and living area with this in mind.
                </li>
                <li>
                  <strong>West-facing:</strong> Strong afternoon sun. Use
                  shading, deeper balconies and careful window placement.
                </li>
                <li>
                  <strong>North-facing:</strong> Softer light and steady
                  brightness. Good for living areas and studios.
                </li>
                <li>
                  <strong>South-facing:</strong> Strong sun from the front for
                  much of the day. Plan shading and cross-ventilation.
                </li>
              </ul>
              <p className="mt-3">
                If you follow Vastu or similar preferences for placement of the
                entrance, kitchen, bedrooms or prayer room, tell the architect
                at the start. They can be considered in the layout alongside
                light, ventilation and plot limits. Plot conditions sometimes
                require compromise, and a good architect will explain the
                trade-offs honestly.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Check in a House Plan Before You Approve It
              </h3>
              <p className="mb-3">
                Use this checklist before you sign off on a plan.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Entry and parking:</strong> Can cars and two-wheelers
                  enter, turn and park comfortably?
                </li>
                <li>
                  <strong>Entrance and living area:</strong> Does the entrance
                  open into a welcoming, private space?
                </li>
                <li>
                  <strong>Kitchen and dining:</strong> Are they close, and is
                  the kitchen well ventilated?
                </li>
                <li>
                  <strong>Bedrooms:</strong> Do they have light, ventilation,
                  privacy and room for beds and wardrobes?
                </li>
                <li>
                  <strong>Bathrooms:</strong> Are they placed sensibly,
                  ventilated and easy to plumb?
                </li>
                <li>
                  <strong>Staircase:</strong> Is it comfortable, well lit and
                  well placed for future floors?
                </li>
                <li>
                  <strong>Circulation:</strong> Are passages short and useful,
                  not wasted area?
                </li>
                <li>
                  <strong>Windows:</strong> Do they open to light and air, not
                  to a blank wall or the neighbour&apos;s window?
                </li>
                <li>
                  <strong>Storage:</strong> Are there enough wardrobes, a pantry
                  and a store room?
                </li>
                <li>
                  <strong>Terrace and balconies:</strong> Are slopes, drains and
                  parapets planned?
                </li>
                <li>
                  <strong>Future floors:</strong> Are staircase, columns and
                  services ready for growth?
                </li>
                <li>
                  <strong>Furniture fit:</strong> Do real beds, sofas and tables
                  fit with room to move?
                </li>
                <li>
                  <strong>Structure and services:</strong> Are columns, beams
                  and plumbing lines coordinated?
                </li>
                <li>
                  <strong>Rules and approvals:</strong> Does the plan respect
                  setbacks and local requirements?
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a house in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean cross-ventilation, shaded openings, roof
                  drainage and moisture control are important.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan roof slopes, outlets,
                  plinth height and waterproofing from the start.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Ask for proper soil
                  assessment and structural advice before finalising the
                  foundation.
                </li>
                <li>
                  <strong>Plot shapes and sizes:</strong> Many plots are
                  compact. Smart planning, light wells and vertical design help.
                </li>
                <li>
                  <strong>Neighbours and privacy:</strong> Plan windows,
                  balconies and setbacks carefully.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                From Plan to Approval to Construction
              </h3>
              <p className="mb-3">
                A plan has to travel from the drawing board to the site.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Plan review and sign-off:</strong> You review the
                  layout, 3D views and specifications and approve in writing.
                </li>
                <li>
                  <strong>Approvals, where applicable:</strong> Drawings may
                  need to be prepared in a format suitable for local submission.
                  Requirements vary, so check what applies to your plot.
                </li>
                <li>
                  <strong>Structural design:</strong> A qualified structural
                  engineer designs the foundation, columns, beams and slabs.
                </li>
                <li>
                  <strong>Working drawings:</strong> Detailed drawings for
                  walls, doors, windows, stairs, plumbing and electrical.
                </li>
                <li>
                  <strong>Estimate and agreement:</strong> An item-wise cost,
                  specification list, timeline and payment stages.
                </li>
                <li>
                  <strong>Construction with checks:</strong> Work follows the
                  drawings, with inspection at key stages.
                </li>
                <li>
                  <strong>Handover:</strong> Final inspection, snag correction
                  and handover with documents.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your House Plan Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Basic plan package:</strong> Floor plans and furniture
                  layout for your plot.
                </li>
                <li>
                  <strong>Plan and elevation package:</strong> Floor plans plus
                  facade design.
                </li>
                <li>
                  <strong>Plan, elevation and 3D package:</strong> Floor plans,
                  elevation and 3D views for review.
                </li>
                <li>
                  <strong>Working drawing package:</strong> Detailed drawings
                  for construction, coordinated with structure and services.
                </li>
                <li>
                  <strong>Interior-ready plan package:</strong> Plans with
                  kitchen, wardrobe and furniture layouts developed.
                </li>
                <li>
                  <strong>Extra floor plan package:</strong> Structural
                  assessment, plan and design for additional floors.
                </li>
                <li>
                  <strong>Design and build package:</strong> Plan, estimate and
                  construction under one team and one scope.
                </li>
                <li>
                  <strong>Turnkey home package:</strong> Design, construction,
                  finishing, interiors and handover as one managed project.
                </li>
                <li>
                  <strong>Renovation plan package:</strong> Re-planning and
                  upgrading of an existing house.
                </li>
                <li>
                  <strong>Phase-wise home plan:</strong> One complete plan built
                  in stages to match your budget.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect House Plan and Construction Cost
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
                  <strong>Number of bedrooms and bathrooms:</strong> More rooms
                  mean more walls, fittings and plumbing.
                </li>
                <li>
                  <strong>Plan complexity:</strong> Irregular plots, curves,
                  double heights and special features add cost.
                </li>
                <li>
                  <strong>Scope of design services:</strong> A basic plan, full
                  working drawings, 3D views, interiors and supervision cost
                  differently.
                </li>
                <li>
                  <strong>Number of revisions:</strong> Many changes after
                  approval add time and cost.
                </li>
              </ul>
              <p className="mt-3">
                Your actual quote depends on the project and scope. Use the free
                MTBOSS Budget Calculator on the website for a starting estimate
                for your construction budget, and request a detailed proposal
                after a discussion.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Budget Priorities in House Planning
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Decide your realistic budget, and
                  include interiors, boundary and fittings, not just the
                  structure.
                </li>
                <li>
                  <strong>Second:</strong> Get the plan right. A good layout
                  improves daily life more than any decoration.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure right. Foundation,
                  columns and slabs are costly to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Plan services early. Plumbing,
                  drainage and electrical lines should match the plan.
                </li>
                <li>
                  <strong>Fifth:</strong> Protect the house. Waterproofing,
                  ventilation and good detailing extend its life.
                </li>
                <li>
                  <strong>Sixth:</strong> Choose finishes that fit your budget.
                  Upgrade later where it makes sense.
                </li>
                <li>
                  <strong>Seventh:</strong> Keep changes under control. Late
                  changes cost more than early decisions.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a House Plan
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact
                  MTBOSS through the website, phone or WhatsApp and share your
                  plot, family needs and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free
                  calculator on our website gives a starting estimate for the
                  construction budget.
                </li>
                <li>
                  <strong>Step 3: Plot details and study.</strong> You share
                  plot dimensions, facing, road width and photos, and the team
                  studies the site. For Rampur, the team will confirm
                  arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 4: Requirements and priorities.</strong> You and
                  the team talk through bedrooms, kitchen, parking, future
                  floors, style and budget.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Note your plot dimensions, facing, road width and take
                  photos of the plot and surroundings.</strong>
                </li>
                <li>
                  <strong>Collect plot documents and any existing
                  drawings.</strong>
                </li>
                <li>
                  <strong>Note the number of bedrooms and bathrooms you need now
                  and later.</strong>
                </li>
                <li>
                  <strong>Decide parking needs:</strong> Cars, two-wheelers and
                  visitors.
                </li>
                <li>
                  <strong>List special rooms:</strong> Study, prayer, guest
                  room, store, home office.
                </li>
                <li>
                  <strong>Decide your realistic budget range, including
                  interiors and boundary work.</strong>
                </li>
                <li>
                  <strong>Gather reference photos and plans you like, and note
                  why you like them.</strong>
                </li>
                <li>
                  <strong>Check what approvals or rules apply to your plot.</strong>
                </li>
                <li>
                  <strong>Think about future floors, a rental unit or a shop at
                  the front.</strong>
                </li>
                <li>
                  <strong>Decide who in the family will make final
                  decisions.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common House Plan Mistakes to Avoid
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Copying a plan from the internet without checking that it fits
                  your plot, facing and family.
                </li>
                <li>
                  Putting rooms first and ignoring parking, stairs and services.
                </li>
                <li>
                  Wasting area on long passages and oversized staircases.
                </li>
                <li>
                  Placing windows that open to blank walls or the
                  neighbour&apos;s windows.
                </li>
                <li>
                  Dark, poorly ventilated bedrooms and bathrooms.
                </li>
                <li>
                  Too few wardrobes, store rooms and electrical points.
                </li>
                <li>
                  Skipping soil checks, structural advice and approvals.
                </li>
                <li>
                  Weak waterproofing of the roof, bathrooms and walls.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Share at Your First Consultation
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Project type:</strong> New house plan, extra floor,
                  renovation, elevation or interior.
                </li>
                <li>
                  <strong>Location:</strong> Locality in Rampur or nearby, with
                  a map pin if possible.
                </li>
                <li>
                  <strong>Plot details:</strong> Size, shape, facing, road width
                  and photos.
                </li>
                <li>
                  <strong>Family needs:</strong> Bedrooms, bathrooms, kitchen
                  type, parking, special rooms and future plans.
                </li>
                <li>
                  <strong>Existing plan or building:</strong> Drawings, photos
                  and condition, if any.
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
                MTBOSS Services for Homeowners
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Architecture and interior:</strong> Design and
                  planning for homes and commercial spaces.
                </li>
                <li>
                  <strong>Construction and renovation:</strong> New homes, extra
                  floors, remodelling, repairs and waterproofing.
                </li>
                <li>
                  <strong>Doorstep home services:</strong> Modular kitchen,
                  carpenter, plumber, electrician, painter, tile and marble,
                  false ceiling, pest control, AC repair and building repair.
                </li>
                <li>
                  <strong>Property services:</strong> Verified property buying,
                  selling and renting.
                </li>
                <li>
                  <strong>Building materials:</strong> Cement, steel, bricks,
                  tiles and more through the Shop Now section of the website.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Consider MTBOSS as Your Architect for a House Plan in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Plans start with your plot and family:</strong> We
                  study your plot, family and budget before drawing a layout.
                </li>
                <li>
                  <strong>Plans that can be built:</strong> Layouts consider
                  structure, services, climate and cost.
                </li>
                <li>
                  <strong>Plan, design and construction under one roof:</strong>{" "}
                  Planning, elevation, interiors, building and finishing
                  coordinated by one team.
                </li>
                <li>
                  <strong>Furniture and circulation checks:</strong> We test the
                  plan with real furniture and movement, not just walls on
                  paper.
                </li>
                <li>
                  <strong>Attention to leaks, damp and pests:</strong>{" "}
                  Waterproofing and pest-proofing are part of the plan, not an
                  afterthought.
                </li>
                <li>
                  <strong>Written scope and specifications:</strong>{" "}
                  Deliverables, materials, timeline and payment stages are
                  documented before work begins.
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
                Contact MTBOSS: Architect for House Plan in Rampur
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
                  <strong>Building elevation service:</strong>{" "}
                  <a
                    href="https://www.mtboss.in/quick/building-elevation"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Building Elevation
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
                If you are looking for an architect for a house plan in Rampur,
                MTBOSS offers a single point of contact for planning, design,
                construction and handover, supported by a free budget calculator
                and a simple online quote request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does an architect do for a house plan?</strong>
                  <br />
                  An architect studies your plot and family needs, prepares
                  floor plans, elevations and, where included, 3D views and
                  working drawings, coordinates structure and services, supports
                  approvals where applicable and can supervise construction. The
                  exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide house plans for Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Home owners in Rampur can
                  contact the team with plot details to confirm scope and
                  arrangements.
                </li>
                <li>
                  <strong>Q3. Can I use a house plan I found online?</strong>
                  <br />
                  It can be a starting point, but the plan must be checked
                  against your plot size, shape, facing, local rules, soil and
                  family needs. An architect can adapt it or create a new plan.
                </li>
                <li>
                  <strong>Q4. What details do I need to share to get a house
                  plan?</strong>
                  <br />
                  Plot dimensions and facing, road width, number of bedrooms and
                  bathrooms, parking needs, special rooms, budget and future
                  plans. Photos and documents help.
                </li>
                <li>
                  <strong>Q5. How is a 2BHK plan different from a 3BHK
                  plan?</strong>
                  <br />
                  A 3BHK has more bedrooms and usually larger living and service
                  areas. The best plan depends on your plot and family, not only
                  on the number of rooms.
                </li>
                <li>
                  <strong>Q6. Does the facing of the plot matter?</strong>
                  <br />
                  Yes. It affects sunlight, heat, privacy and, for many
                  families, Vastu preferences. Tell the architect your
                  preferences so they can be considered alongside plot limits
                  and light and ventilation.
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