import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan Every Floor Before You Pour the First Slab
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A multi storey building is a different challenge from a single
                house. More floors mean heavier loads, more people, more
                services and more rules. A small mistake in a house is an
                inconvenience. The same mistake repeated across four floors is
                an expensive problem, and sometimes a safety one.
              </p>
              <p className="mt-3">
                If you are searching for an architect for a multi storey
                building in Rampur, you probably want a design that uses your
                plot to the fullest, follows the rules, stays within budget and
                works for the people who will live or work in it.
              </p>
              <p className="mt-3">
                MTBOSS Construction Private Limited is an architect, interior
                designer and construction company serving Moradabad and
                Bareilly. Our team plans the layout, elevation and structure
                coordination for multi-floor buildings, and can build the
                project as well, so the plan and the construction stay aligned.
              </p>
              <p className="mt-3">
                <strong>Quick start:</strong> Send your plot size, number of
                floors planned and use of the building on WhatsApp at{" "}
                <a
                  href="https://wa.me/9458410866"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://wa.me/9458410866
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+919458410866"
                  className="text-blue-600 underline"
                >
                  +91 94584 10866
                </a>
                .
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Quick Answer: What You Get From MTBOSS
              </h3>
              <p className="mb-3">
                The table summarises the service scope and deliverables.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Your need
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        How MTBOSS helps
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        A layout that uses the plot well
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Floor plans planned for the number of floors and units
                        you want
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        A building that is safe to build
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Coordination with structural engineering and soil
                        information
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Smooth movement for people
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Staircase, lift space and passages planned early
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Drawings for approval and construction
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Dimensioned plans, elevations, sections and working
                        drawings
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        A realistic budget
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Item-wise estimate and the free Budget Calculator
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        One team for everything
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Design, construction, interiors and handover
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Scope and charges are agreed in writing before work begins. For
                larger projects, please share details so the team can confirm
                the scope and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Counts as a Multi Storey Building?
              </h3>
              <p className="mb-3">
                The term is used loosely. Owners usually mean one of these:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Builder floors:</strong> Independent floors on a
                  single plot, often sold or rented separately
                </li>
                <li>
                  <strong>Small apartment blocks:</strong> Several flats on each
                  floor, with a shared staircase and sometimes a lift
                </li>
                <li>
                  <strong>Commercial buildings:</strong> Shops on the lower
                  floors with offices or residences above
                </li>
                <li>
                  <strong>Mixed-use buildings:</strong> Commercial on the ground
                  floor, residential above
                </li>
                <li>
                  <strong>Hostels and PGs:</strong> Many rooms per floor with
                  shared services
                </li>
                <li>
                  <strong>Clinics, nursing homes and coaching centres:</strong>{" "}
                  Multiple floors with specialised needs
                </li>
                <li>
                  <strong>Investment buildings:</strong> Built to rent out or
                  sell units
                </li>
              </ul>
              <p className="mt-3">
                Each type has different needs, and the plan should reflect that
                from day one.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Who We Plan Multi Storey Buildings For
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Owners building three, four or more floors on their own plot
                </li>
                <li>
                  Families planning separate floors for different family members
                </li>
                <li>
                  Investors building units for rent or sale
                </li>
                <li>
                  Small builders and developers
                </li>
                <li>
                  Shop and office owners who want rental floors above their
                  business
                </li>
                <li>
                  Owners of hostels, PGs, clinics and coaching centres
                </li>
              </ul>
              <p className="mt-3">
                Not sure whether your plot can support the building you have in
                mind? Message us your plot details, and we will help you think
                it through.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                MTBOSS Construction Private Limited at a Glance
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Construction services, doorstep home services, verified
                  property transactions and building materials under one roof
                </li>
                <li>
                  Office at Harthala, Kanth Road, Behind KR Collection, near
                  Domino&apos;s, Moradabad
                </li>
                <li>
                  Residential, commercial and renovation work in Moradabad and
                  Bareilly
                </li>
                <li>
                  Architecture &amp; Interior, Building Contractor, Building
                  Elevation and Building Renovation listed among our Quick Home
                  Services
                </li>
                <li>
                  A project gallery and blog on our website so you can review
                  completed work
                </li>
                <li>
                  Clients in Rampur can contact the team to confirm availability
                  and arrangements for visits and meetings.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Services Offered by MTBOSS for Multi Floor Projects
              </h3>
              <p className="mb-3">
                Share your project with the team to confirm scope and
                arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement and feasibility study:</strong> Use of the
                  building, number of floors and units, budget and goals
                </li>
                <li>
                  <strong>Plot analysis:</strong> Size, shape, facing, road
                  width and surroundings
                </li>
                <li>
                  <strong>Layout options:</strong> Alternative plans for each
                  floor and for the whole building
                </li>
                <li>
                  <strong>Staircase, lift and circulation planning:</strong>{" "}
                  Safe, efficient movement for residents, customers and staff
                </li>
                <li>
                  <strong>Parking and entrance planning:</strong> Vehicles,
                  two-wheelers and pedestrian access
                </li>
                <li>
                  <strong>3D elevation:</strong> A realistic view of the front,
                  shopfronts and balconies
                </li>
                <li>
                  <strong>Working drawings:</strong> Details for the contractor
                </li>
                <li>
                  <strong>Structural and services coordination:</strong>{" "}
                  Foundation, columns, beams, slabs, plumbing, drainage, water
                  tanks and electrical
                </li>
                <li>
                  <strong>Estimate and budget planning:</strong> An item-wise
                  cost outline, supported by the free Budget Calculator
                </li>
                <li>
                  <strong>Interior design and modular kitchens:</strong>{" "}
                  Layouts for units, offices and shops
                </li>
                <li>
                  <strong>Construction and project management:</strong>{" "}
                  Execution to the approved design, with quality checks
                </li>
                <li>
                  <strong>Related services:</strong> Waterproofing, painter,
                  plumber, electrician, carpenter, tile and marble, false
                  ceiling and pest control through the same company
                </li>
              </ul>
              <p className="mt-3">
                Final scope for each project is discussed and confirmed with
                the MTBOSS team before work begins.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Planning Matters More as the Floors Go Up
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Loads add up.</strong> Each floor adds weight, and the
                  foundation and columns carry all of it.
                </li>
                <li>
                  <strong>Repetition multiplies mistakes.</strong> A poorly
                  placed bathroom or shaft is repeated on every floor.
                </li>
                <li>
                  <strong>Services get complex.</strong> Water, drainage,
                  electrical and sometimes lift and fire systems must run
                  through the whole building.
                </li>
                <li>
                  <strong>Movement needs space.</strong> Staircases and lobbies
                  must handle many people, not just one family.
                </li>
                <li>
                  <strong>Rules are stricter.</strong> Height, coverage, parking
                  and safety requirements usually become more demanding with
                  size.
                </li>
                <li>
                  <strong>Changes cost more.</strong> Altering a structure after
                  casting several floors is difficult and expensive.
                </li>
              </ul>
              <p className="mt-3">
                A strong plan before construction is the cheapest safeguard you
                have.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Key Elements of a Good Multi Storey Plan
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Efficient floor layout.</strong> Repeating floor plans
                  keep structure and services simple. Typical floors share the
                  same column grid, staircase and shafts.
                </li>
                <li>
                  <strong>Staircase and exit.</strong> Position, width and
                  number of staircases depend on the building type and size.
                  They must give safe, easy movement.
                </li>
                <li>
                  <strong>Lift provision.</strong> Even if you do not install a
                  lift now, planning space and structure for one can save money
                  later. Whether a lift is required depends on height and use,
                  so confirm local rules.
                </li>
                <li>
                  <strong>Parking.</strong> Ground floor or stilt parking, ramp
                  or access, and turning space need early planning.
                </li>
                <li>
                  <strong>Service shafts.</strong> Vertical routes for plumbing,
                  drainage and electrical lines keep services neat and
                  serviceable.
                </li>
                <li>
                  <strong>Water tanks and terrace loads.</strong> Overhead tanks
                  and solar panels add load and must be planned with the
                  structure.
                </li>
                <li>
                  <strong>Light and ventilation.</strong> Units on all floors
                  should get proper light and air, including those inside or
                  beside neighbouring buildings.
                </li>
                <li>
                  <strong>Fire and safety considerations.</strong> Larger and
                  higher buildings may have additional requirements. Check what
                  applies to your project with the concerned authority.
                </li>
                <li>
                  <strong>Elevation.</strong> A multi-floor front needs good
                  proportions, controlled projections and durable materials.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning Different Types of Multi Storey Buildings
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Builder floors and apartments:</strong> Repeating
                  floor plans, separate entrances or a shared lobby, and good
                  privacy between units.
                </li>
                <li>
                  <strong>Commercial buildings:</strong> Shopfront visibility,
                  customer access, signage, storage, and separate access for
                  upper-floor offices.
                </li>
                <li>
                  <strong>Mixed-use buildings:</strong> Separate entrances and
                  services for shops and residences, so that commercial activity
                  does not disturb living areas.
                </li>
                <li>
                  <strong>Hostels and PGs:</strong> Efficient room layouts,
                  enough bathrooms, durable finishes, common areas and safe
                  circulation.
                </li>
                <li>
                  <strong>Clinics and nursing homes:</strong> Patient flow,
                  waiting areas, accessibility and hygiene needs.
                </li>
                <li>
                  <strong>Coaching centres and schools:</strong> Classroom
                  layouts, safe stairs, ventilation and crowd movement.
                </li>
                <li>
                  <strong>Investment buildings:</strong> Unit mix and sizes that
                  suit the rental or sale market in your area.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Structure: The Backbone of a Multi Storey Building
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Soil investigation:</strong> A soil test helps the
                  structural engineer choose a suitable foundation.
                </li>
                <li>
                  <strong>Foundation type:</strong> Depends on soil, loads and
                  number of floors.
                </li>
                <li>
                  <strong>Column grid:</strong> Planned together with the layout
                  so columns do not block rooms or parking.
                </li>
                <li>
                  <strong>Beams and slabs:</strong> Sized for the spans and
                  loads.
                </li>
                <li>
                  <strong>Staircase and lift core:</strong> Designed as part of
                  the frame.
                </li>
                <li>
                  <strong>Bathrooms and wet areas:</strong> Stacked to simplify
                  plumbing and reduce leak risk.
                </li>
                <li>
                  <strong>Future expansion:</strong> If you may add a floor
                  later, the foundation and columns should be planned for it
                  now.
                </li>
              </ul>
              <p className="mt-3">
                Structural calculations and drawings are prepared by a
                qualified structural engineer. MTBOSS coordinates the
                architecture with the structural design, and the arrangement is
                confirmed in your written scope.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Our Planning Process: Simple and Transparent
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Contact us.</strong> Call, WhatsApp or use the
                  &ldquo;Get a Construction Quote&rdquo; option on our website.
                </li>
                <li>
                  <strong>Step 2: Share your details.</strong> Plot size,
                  facing, location, use of the building and number of floors.
                </li>
                <li>
                  <strong>Step 3: Try the Budget Calculator.</strong> A free
                  starting estimate for your construction budget.
                </li>
                <li>
                  <strong>Step 4: Feasibility discussion.</strong> We talk
                  through what the plot and rules allow and what suits your
                  goals.
                </li>
                <li>
                  <strong>Step 5: Layout options.</strong> You compare
                  alternative plans.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose the Package That Fits Your Project
              </h3>
              <p className="mb-3">
                The table summarises the service scope and deliverables.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Package
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Best for
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What it covers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Feasibility and concept plan
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Owners still deciding what to build
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Requirement study and layout options
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Building plan
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Owners who need floor plans
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Dimensioned plans for every floor
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan, elevation and working drawings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Most multi-floor projects
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plans, 3D elevation and working drawings
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan for approval
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Owners who need submission drawings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Drawings prepared in a clear format for submission
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Commercial or hostel building
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Shops, offices, hostels, clinics
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plans focused on use, flow and services
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Design and build
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Owners who want one team
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Design, estimate and construction under one scope
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Turnkey
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Owners who want a ready building
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Design, construction, finishing, interiors and handover
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra floors plan
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Existing buildings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Review, planning and drawings for adding floors
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Not sure which package fits? Message your project on WhatsApp,
                and we will suggest the right one.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Adding Floors to an Existing Building
              </h3>
              <p className="mb-3">
                Many owners want to add floors to an existing building. Be
                careful here.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Check the structure first.</strong> The existing
                  foundation, columns and beams may not be designed for more
                  floors.
                </li>
                <li>
                  <strong>Plan the staircase.</strong> Finding a good staircase
                  position in an existing building is often the hardest part.
                </li>
                <li>
                  <strong>Extend services.</strong> Water, drainage and
                  electrical lines need to extend upward.
                </li>
                <li>
                  <strong>Protect the lower floors.</strong> Waterproofing and
                  shuttering need care so that existing floors are not damaged
                  during work.
                </li>
                <li>
                  <strong>Check the rules.</strong> Height and floor limits
                  depend on your plot and locality.
                </li>
              </ul>
              <p className="mt-3">
                Share photos and any available drawings, and our team will tell
                you what is realistic.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Approvals and Rules
              </h3>
              <p className="mb-3">
                Building rules such as plot coverage, setbacks, height, parking
                and safety requirements differ by area and authority, and are
                usually stricter for larger buildings. Your plan should respect
                them from the start so that approval is smooth and you avoid
                illegal construction or later changes.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Check the rules that apply to your plot and building type
                  before finalising the design
                </li>
                <li>
                  Keep ownership and property documents ready
                </li>
                <li>
                  Ask which drawings and clearances are needed for submission
                </li>
                <li>
                  Confirm approval and fee arrangements in writing
                </li>
                <li>
                  Call us, and we will tell you which drawings and documents
                  are generally needed for your type of project.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Know the Cost Before You Commit
              </h3>
              <p className="mb-3">
                The cost of a multi storey building depends on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Plot size and total built-up area
                </li>
                <li>
                  Number of floors and units
                </li>
                <li>
                  Soil conditions and foundation type
                </li>
                <li>
                  Structural design and column layout
                </li>
                <li>
                  Lift, staircase and services
                </li>
                <li>
                  Specifications of finishes, doors, windows and fittings
                </li>
                <li>
                  Elevation complexity
                </li>
                <li>
                  Interiors and external works
                </li>
                <li>
                  Whether you want design only, or design with construction
                </li>
              </ul>
              <p className="mt-3">
                An accurate figure needs a proposal based on your project.
                Start with the free MTBOSS Budget Calculator at{" "}
                <a
                  href="https://www.mtboss.in/calculator"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.mtboss.in/calculator
                </a>
                , then ask for a written quote.
              </p>
              <p className="mt-3">
                What we promise on pricing: scope, deliverables and payment
                stages are written down before work begins.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Ways to Keep Multi-Floor Costs Under Control
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Repeat the typical floor.</strong> A repeating layout
                  keeps structure and services simple.
                </li>
                <li>
                  <strong>Stack the wet areas.</strong> Align bathrooms and
                  kitchens across floors.
                </li>
                <li>
                  <strong>Keep the shape regular.</strong> Rectangles are
                  efficient and cost less than many corners.
                </li>
                <li>
                  <strong>Limit projections.</strong> Each balcony and sunshade
                  adds structure and finishing.
                </li>
                <li>
                  <strong>Choose durable, simple finishes.</strong> Cheap
                  finishes that fail cost more later.
                </li>
                <li>
                  <strong>Plan services early.</strong> Shafts and routes are
                  cheaper to include in the design than to adjust on site.
                </li>
                <li>
                  <strong>Phase what you can.</strong> Some floors, interiors or
                  landscaping can come later if planned for.
                </li>
                <li>
                  <strong>Keep a reserve.</strong> Allow for changes and
                  surprises.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Budget Planning: Include These Items
              </h3>
              <p className="mb-3">
                Many owners plan only for construction. A realistic budget also
                includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Design and drawings
                </li>
                <li>
                  Soil testing and surveys
                </li>
                <li>
                  Approvals, drawing submission and authority fees
                </li>
                <li>
                  Foundation, structure and slabs
                </li>
                <li>
                  Staircase, lift provision and railing
                </li>
                <li>
                  Plumbing, drainage and electrical work
                </li>
                <li>
                  Water tanks and terrace works
                </li>
                <li>
                  Doors, windows and fittings
                </li>
                <li>
                  Flooring, tiles, paint and bathrooms
                </li>
                <li>
                  Interiors for units, shops or offices
                </li>
                <li>
                  Boundary, gate, paving and parking
                </li>
                <li>
                  A reserve for changes and surprises
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design and Build: Multi-Floor Design and Construction Under One
                Scope
              </h3>
              <p className="mb-3">
                With design and build, one company handles design and
                construction under one agreement. It can make coordination
                easier, because the plan, structure, estimate and
                specifications are managed together.
              </p>
              <p className="mb-3">Ask for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  A clear design scope
                </li>
                <li>
                  A clear construction scope
                </li>
                <li>
                  An item-wise estimate with quantities and exclusions
                </li>
                <li>
                  A payment schedule tied to progress
                </li>
                <li>
                  A process for pricing changes
                </li>
                <li>
                  A defined handover with documents
                </li>
              </ul>
              <p className="mt-3">
                MTBOSS provides all of these in writing.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Owners Consider MTBOSS
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Layout, elevation and structure coordination.</strong>{" "}
                  The plan on paper is one that can be built.
                </li>
                <li>
                  <strong>Buildable designs.</strong> Because we also construct,
                  we avoid layouts that are impractical or too costly to
                  execute.
                </li>
                <li>
                  <strong>Honest guidance.</strong> We tell you what the plot
                  and the rules allow, and what is worth spending on.
                </li>
                <li>
                  <strong>Budget talk from the first meeting.</strong> We
                  discuss your total budget early.
                </li>
                <li>
                  <strong>Itemised written estimates.</strong> Scope, quantities
                  and specifications stated clearly.
                </li>
                <li>
                  <strong>Free Budget Calculator.</strong> A simple starting
                  estimate at no charge.
                </li>
                <li>
                  <strong>One point of contact.</strong> One team from design to
                  handover.
                </li>
                <li>
                  <strong>Visible work.</strong> Our project gallery lets you
                  see completed projects before you decide.
                </li>
                <li>
                  <strong>Local presence.</strong> Based on Kanth Road,
                  Moradabad, serving Moradabad and Bareilly, with arrangements
                  for Rampur clients confirmed on enquiry.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Mistakes That Make Multi Storey Buildings Costly or Unsafe
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Starting construction without proper structural drawings
                </li>
                <li>
                  Skipping the soil test
                </li>
                <li>
                  Planning floors without checking the rules for height and
                  coverage
                </li>
                <li>
                  Placing the staircase badly or making it too narrow
                </li>
                <li>
                  Not planning space for a lift or future floors
                </li>
                <li>
                  Bathrooms that do not stack
                </li>
                <li>
                  Ignoring parking and access
                </li>
                <li>
                  Forgetting service shafts and water tank loads
                </li>
                <li>
                  Reducing steel or cement on site to save money
                </li>
                <li>
                  Making many changes after construction begins
                </li>
                <li>
                  Not getting scope and payments in writing
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Ask Before You Hire
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  How many floors can my plot realistically support?
                </li>
                <li>
                  Who prepares the structural design, and is it included?
                </li>
                <li>
                  Is a soil test recommended for my plot?
                </li>
                <li>
                  How will you plan the staircase, lift space and parking?
                </li>
                <li>
                  Which drawings will I receive?
                </li>
                <li>
                  Can the structure allow future floors?
                </li>
                <li>
                  How are changes priced after approval?
                </li>
                <li>
                  What is the payment schedule?
                </li>
                <li>
                  Can I see completed projects?
                </li>
                <li>
                  Can the same team build it?
                </li>
              </ul>
              <p className="mt-3">
                MTBOSS is happy to answer all of these before you commit.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Send Us to Get Started Today
              </h3>
              <p className="mb-3">
                Send these on WhatsApp for the quickest response:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Locality in Rampur, with a map pin if possible</strong>
                </li>
                <li>
                  <strong>Plot size, shape, facing and road width</strong>
                </li>
                <li>
                  <strong>Photos of the plot or existing building</strong>
                </li>
                <li>
                  <strong>Use of the building: residential, commercial, mixed,
                  hostel or clinic</strong>
                </li>
                <li>
                  <strong>Number of floors and units you have in mind</strong>
                </li>
                <li>
                  <strong>Parking and lift needs</strong>
                </li>
                <li>
                  <strong>Existing drawings or ownership papers, if
                  available</strong>
                </li>
                <li>
                  <strong>Approximate budget</strong>
                </li>
                <li>
                  <strong>Your timeline</strong>
                </li>
              </ul>
              <p className="mt-3">
                Do not worry if you do not have everything. Share what you
                have, and we will guide you on the rest.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect for Multi Storey Building in Rampur
              </h3>
              <p className="mb-3">
                Ready to plan your building? Contact us now.
              </p>
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
                If you want a well-planned multi storey building in Rampur,
                MTBOSS offers written scope, coordinated drawings and a single
                point of contact from design to handover.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does an architect do for a multi storey
                  building?</strong>
                  <br />
                  An architect plans the layout of every floor, the staircase,
                  lift space, parking and elevation, coordinates with structural
                  and services engineers, and prepares drawings for approval and
                  construction.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS work in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Clients in Rampur can contact
                  the team with project details to confirm availability, scope
                  and arrangements.
                </li>
                <li>
                  <strong>Q3. How many floors can I build on my plot?</strong>
                  <br />
                  It depends on the local rules for height and coverage, the
                  plot size and road width, and the soil and structure. Share
                  your plot details, and the team will guide you on what to
                  check.
                </li>
                <li>
                  <strong>Q4. Do I need a lift in a multi storey
                  building?</strong>
                  <br />
                  It depends on the height, use and local rules. Even where it
                  is not required, planning space and structure for one can be
                  wise. Confirm the requirements for your project.
                </li>
                <li>
                  <strong>Q5. Do I need a soil test?</strong>
                  <br />
                  A soil test helps the structural engineer choose a suitable
                  foundation. It is strongly advisable for multi-floor
                  buildings.
                </li>
                <li>
                  <strong>Q6. How much does a multi storey building cost?</strong>
                  <br />
                  It depends on plot size, built-up area, number of floors,
                  structure, finishes and services. An accurate figure needs a
                  proposal based on your project. Start with the free Budget
                  Calculator, then ask for a written quote.
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