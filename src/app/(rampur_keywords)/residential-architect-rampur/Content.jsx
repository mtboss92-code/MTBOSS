import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Design a Home That Fits Your Family, Your Plot and Your Budget
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A house is the biggest purchase most families ever make, and
                they live with its design every single day for decades. A
                bedroom that gets no breeze, a kitchen at the wrong end of the
                house, a staircase that eats a room, a car that cannot enter the
                gate, a terrace that leaks every monsoon, a budget that
                stretched far beyond the plan.
              </p>
              <p className="mt-3">
                Most of these problems are not construction faults. They are
                planning faults that were built exactly as drawn.
              </p>
              <p className="mt-3">
                A residential architect in Rampur helps you avoid them. By
                studying your plot, your family and your budget before any
                drawing is finalised, the architect turns your ideas into a home
                that works.
              </p>
              <p className="mt-3">
                This page explains how a house is planned, what to ask a
                residential architect, how to budget and phase the build and how
                MTBOSS approaches home design and construction.
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
                Residential Architecture at a Glance
              </h3>
              <p className="mb-3">
                A good home plan balances many needs.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Part of the home
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What it needs
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning priority
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Plot and approach
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Gate, driveway, parking, entry, boundary
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Access, safety and first impression
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Living and dining
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Space for family and guests, light and airflow
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfortable size, relation to kitchen
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Kitchen and utility
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Work flow, storage, ventilation, plumbing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Practical layout and easy cleaning
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Bedrooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Privacy, light, ventilation, storage
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Position, size and attached bathrooms
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Bathrooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ventilation, drainage, waterproofing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Placement and plumbing lines
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Staircase and circulation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safe, comfortable movement between floors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Position, width and headroom
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Terrace and balconies
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Open space, drainage, privacy
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Slope, waterproofing and use
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Elevation and exterior
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Appearance, windows, shading, entrance
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Climate, privacy and style
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Water, drainage, electrical, ventilation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Planning before construction
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future needs
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra floors, joint family, work-from-home, rental
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure and services that can grow
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
                Residential Architecture and Construction Services Offered by
                MTBOSS
              </h3>
              <p className="mb-3">
                Share your home project with the team to confirm scope and
                arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement study and plot review:</strong>{" "}
                  Understanding your family, daily routine, plot and budget.
                </li>
                <li>
                  <strong>House planning and floor plans:</strong> Layouts for
                  independent houses, villas, duplexes and multi-storey homes.
                </li>
                <li>
                  <strong>Extra floor and extension design:</strong> Adding
                  floors or rooms to an existing home.
                </li>
                <li>
                  <strong>House elevation design:</strong> Facade design that
                  suits your plot, climate and style.
                </li>
                <li>
                  <strong>Interior design:</strong> Living areas, bedrooms,
                  wardrobes, ceilings, lighting and finishes.
                </li>
                <li>
                  <strong>Modular kitchen design:</strong> Layout, storage and
                  finishes for kitchens.
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
              </ul>
              <p className="mt-3">
                Final scope for each project is discussed and confirmed with
                the MTBOSS team before work begins.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What a Residential Architect Should Deliver
              </h3>
              <p className="mb-3">
                A good residential architect gives you more than a floor plan.
                Expect these outputs, in stages.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>A clear brief:</strong> A written summary of your
                  family&apos;s needs, budget and priorities.
                </li>
                <li>
                  <strong>Concept layouts:</strong> One or more options showing
                  how rooms, stairs and circulation can work.
                </li>
                <li>
                  <strong>2D plans and, where useful, 3D views:</strong> So you
                  can see the design before it is built.
                </li>
                <li>
                  <strong>Elevations:</strong> How the house will look from the
                  street.
                </li>
                <li>
                  <strong>Working drawings:</strong> Detailed plans, sections
                  and details for the contractor.
                </li>
                <li>
                  <strong>Structural coordination:</strong> Drawings aligned
                  with the structural engineer&apos;s design.
                </li>
                <li>
                  <strong>Services layout:</strong> Plumbing, drainage,
                  electrical points and ventilation planning.
                </li>
              </ul>
              <p className="mt-3">
                If an architect cannot tell you what you will receive at each
                stage, ask before you start.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Start With Your Family, Not the Plan
              </h3>
              <p className="mb-3">
                The best houses begin with questions about people, not rooms.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Who will live in the house?</strong> Parents, children,
                  grandparents, tenants or future family members.
                </li>
                <li>
                  <strong>How do you live?</strong> Early mornings, late nights,
                  entertaining, work from home, prayer, study and hobbies.
                </li>
                <li>
                  <strong>How many bedrooms and bathrooms do you need now, and
                  later?</strong>{" "}
                  Plan for growth.
                </li>
                <li>
                  <strong>How do you cook and dine?</strong> Heavy cooking needs
                  different kitchen planning than light cooking.
                </li>
                <li>
                  <strong>How many vehicles?</strong> Cars, two-wheelers and
                  visitors&apos; parking affect the plot plan.
                </li>
                <li>
                  <strong>Do you need rental or separate units?</strong> A
                  separate entrance and services can add income later.
                </li>
                <li>
                  <strong>What privacy do you need?</strong> From neighbours,
                  the street and between family members.
                </li>
                <li>
                  <strong>What storage do you need?</strong> Wardrobes, pantry,
                  utility and general storage.
                </li>
                <li>
                  <strong>Do any family members need accessibility?</strong>{" "}
                  Ground-floor bedrooms, ramps, grab bars and easy bathrooms.
                </li>
                <li>
                  <strong>What are your priorities?</strong> Space, light, low
                  maintenance, appearance, cost or speed.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Plot and Approach
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Gate and entry:</strong> Position them for easy
                  access, safety and a welcoming arrival.
                </li>
                <li>
                  <strong>Parking:</strong> Plan space for the vehicles you have
                  and may buy, with easy turning.
                </li>
                <li>
                  <strong>Setbacks and open space:</strong> Keep light, air and
                  local rules in mind.
                </li>
                <li>
                  <strong>Boundary wall and privacy:</strong> Plan height,
                  openings and landscaping.
                </li>
                <li>
                  <strong>Drainage and levels:</strong> Make sure rainwater
                  leaves the plot without flooding the house or neighbours.
                </li>
                <li>
                  <strong>Utilities:</strong> Plan water tank, sump, septic or
                  sewer connection, meter and gas lines.
                </li>
                <li>
                  <strong>Future additions:</strong> Leave space and structural
                  provision for extra floors or extensions.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning Rooms and Circulation
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Living and Dining
              </h4>
              <p className="mb-3">
                Plan a comfortable, bright space that connects to the kitchen
                and dining area. Think about how guests enter and where family
                sits.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Kitchen and Utility
              </h4>
              <p className="mb-3">
                Plan the work triangle, storage, chimney and ventilation. Keep
                plumbing lines short and consider a utility or wash area.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Bedrooms
              </h4>
              <p className="mb-3">
                Plan privacy, cross-ventilation, natural light and enough wall
                space for furniture and wardrobes. Attached bathrooms add
                comfort but also plumbing planning.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Bathrooms
              </h4>
              <p className="mb-3">
                Plan drainage slopes, ventilation, hot water, non-slip floors
                and strong waterproofing. Group wet areas to simplify plumbing.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Staircase
              </h4>
              <p className="mb-3">
                Plan position, width, headroom and light. A badly placed
                staircase wastes space and complicates future floors.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Terrace and Balconies
              </h4>
              <p className="mb-3">
                Plan slopes, drains, parapet height and waterproofing. Decide
                how the space will be used: drying clothes, solar, tank, garden
                or family gatherings.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Study, Prayer and Flex Rooms
              </h4>
              <p className="mb-3">
                Plan quiet space for study or work from home, and a place for
                prayer. Flexible rooms can adapt to future needs.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Storage and Services
              </h4>
              <p className="mb-3">
                Plan a store room, pantry and space for water tanks, geysers,
                inverters and other equipment.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Designing for Light, Air and Heat
              </h3>
              <p className="mb-3">
                A comfortable home reduces the need for lights, fans and cooling.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Orientation:</strong> Position rooms and windows to
                  manage sunlight and heat.
                </li>
                <li>
                  <strong>Cross-ventilation:</strong> Place windows and openings
                  so that air flows through each room.
                </li>
                <li>
                  <strong>Shading:</strong> Use chajjas, overhangs, deeper
                  balconies or louvres to cut summer sun.
                </li>
                <li>
                  <strong>Courtyards and shafts:</strong> Open or semi-open
                  spaces can bring light and air to inner rooms.
                </li>
                <li>
                  <strong>Roof design:</strong> Consider insulation, reflective
                  finishes and drainage.
                </li>
                <li>
                  <strong>Window quality:</strong> Good windows and doors reduce
                  heat, dust and noise.
                </li>
                <li>
                  <strong>Greenery:</strong> Trees and plants outside can help
                  with shade and comfort.
                </li>
                <li>
                  <strong>Solar readiness:</strong> Plan roof space and wiring
                  for solar panels or water heaters, if you intend to use them.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a home in Rampur and nearby areas.
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
                  <strong>Plot shapes and sizes:</strong> Many plots are narrow
                  or compact. Smart planning, light wells and vertical design
                  help.
                </li>
                <li>
                  <strong>Neighbours and privacy:</strong> Plan windows,
                  balconies and setbacks carefully, especially in closely built
                  areas.
                </li>
                <li>
                  <strong>Joint families and growth:</strong> Many families plan
                  for several generations and future floors. Design structure
                  and services to allow this.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of Home
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Home type
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Independent House on a Small Plot
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Use vertical planning, light wells and compact stairs.
                        Stack bathrooms and kitchens to simplify plumbing. Plan
                        parking carefully.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Independent House on a Larger Plot
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Use open space for gardens, courtyards, parking and
                        future extensions. Orient rooms for light and breeze.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Duplex or Triplex
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan stairs, double-height spaces, bedroom positions and
                        services across floors.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Villa or Bungalow
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan landscaping, entry, outdoor living, parking and
                        services with more freedom.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra Floor on an Existing Home
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Check the existing structure, foundation and approvals
                        before adding floors. Plan strengthening, a new
                        staircase, plumbing and waterproofing.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Home with Rental or Separate Unit
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan a separate entrance, services, meters and privacy.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Home with Shop or Clinic at the Front
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan separate access, parking, services and sound
                        separation between business and family spaces.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Renovation or Remodelling
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Study the structure, find what can safely change and
                        plan plumbing, electrical and waterproofing in the same
                        project.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Residential Design Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept design package:</strong> Requirement study,
                  plot review and layout options.
                </li>
                <li>
                  <strong>House plan and elevation package:</strong> Floor
                  plans, elevation and working drawings.
                </li>
                <li>
                  <strong>Interior design package:</strong> Layout, furniture,
                  lighting, ceilings, finishes and kitchens.
                </li>
                <li>
                  <strong>Extra floor package:</strong> Structural assessment,
                  design and construction of additional floors.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Turnkey home package:</strong> Design, construction,
                  finishing, interiors and handover as one managed project.
                </li>
                <li>
                  <strong>Renovation package:</strong> Redesign, repair,
                  waterproofing and finishing for an existing home.
                </li>
                <li>
                  <strong>Finishing package:</strong> Plaster, flooring, tiles,
                  paint, ceilings and fittings for an existing shell.
                </li>
                <li>
                  <strong>Phase-wise home plan:</strong> One complete design
                  built in stages to match your budget.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Home Design and Construction Cost
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
                  <strong>Structural design:</strong> Soil conditions, spans and
                  loads affect foundation and structure.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring, tiles,
                  doors, windows, paint, bathrooms and fittings all affect cost.
                </li>
                <li>
                  <strong>Interior work:</strong> Kitchens, wardrobes, ceilings
                  and custom furniture add to the scope.
                </li>
                <li>
                  <strong>Services:</strong> Plumbing, drainage, electrical,
                  solar and water systems.
                </li>
                <li>
                  <strong>Waterproofing and protection:</strong> Roof,
                  bathrooms, basement and external walls.
                </li>
                <li>
                  <strong>External works:</strong> Boundary wall, gate, paving,
                  parking and landscaping.
                </li>
                <li>
                  <strong>Design changes:</strong> Changes after approval or
                  during construction can add cost and delay.
                </li>
                <li>
                  <strong>Material prices and timing:</strong> Market rates and
                  the monsoon season affect planning.
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
                Budget Priorities When Building a Home
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Decide your realistic budget, and
                  include interiors, boundary and fittings, not just the
                  structure.
                </li>
                <li>
                  <strong>Second:</strong> Get the plan right. A good layout
                  improves daily life more than any finish.
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
                How MTBOSS Approaches a Home Project
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
                  <strong>Step 3: Site details and study.</strong> You share
                  plot dimensions, location and photos, and the team studies the
                  site. For Rampur, the team will confirm arrangements for
                  visits and meetings.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Note your family&apos;s needs:</strong> Bedrooms,
                  baths, kitchen type, parking, prayer or study spaces and future
                  plans.
                </li>
                <li>
                  <strong>Decide your realistic budget range, including
                  interiors and boundary work.</strong>
                </li>
                <li>
                  <strong>Collect plot details:</strong> Dimensions, documents,
                  photos and any existing structure.
                </li>
                <li>
                  <strong>Note neighbouring buildings, road width and access
                  issues.</strong>
                </li>
                <li>
                  <strong>Gather reference photos of homes you like and dislike,
                  and note why.</strong>
                </li>
                <li>
                  <strong>Check what approvals or rules apply to your plot.</strong>
                </li>
                <li>
                  <strong>List must-haves and nice-to-haves.</strong>
                </li>
                <li>
                  <strong>Think about future extensions, such as extra floors, a
                  rental unit or a shop at the front.</strong>
                </li>
                <li>
                  <strong>Decide who in the family will make final
                  decisions.</strong>
                </li>
                <li>
                  <strong>Ask the architect what they need from you and by
                  when.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning a Home
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Copying a house plan from elsewhere without checking that it
                  fits your plot, orientation and family.
                </li>
                <li>
                  Starting construction without a clear budget and brief.
                </li>
                <li>
                  Building rooms first and thinking of parking, stairs and
                  services later.
                </li>
                <li>
                  Poor ventilation and light in bedrooms and bathrooms.
                </li>
                <li>
                  Skipping soil checks, structural advice and approvals.
                </li>
                <li>
                  Weak waterproofing of the roof, bathrooms and walls.
                </li>
                <li>
                  Ignoring plumbing and electrical planning until the walls are
                  built.
                </li>
                <li>
                  Choosing finishes before fixing the budget.
                </li>
                <li>
                  Making many changes after construction begins.
                </li>
                <li>
                  Not planning for future floors, extensions or family changes.
                </li>
                <li>
                  Splitting design, construction and interiors among agencies
                  and managing them alone.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Share at Your First Consultation
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Project type:</strong> New house, extra floor,
                  renovation, interior or elevation.
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
                  <strong>Existing building:</strong> Drawings, photos and
                  condition, if renovating or adding floors.
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
                Home Care After Handover
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Clean roof drains and outlets before every monsoon.
                </li>
                <li>
                  Inspect the roof, bathrooms and walls once a year for leaks or
                  cracks.
                </li>
                <li>Fix leaking taps and pipes quickly.</li>
                <li>
                  Keep gutters and the ground around the house clear.
                </li>
                <li>
                  Ventilate the house, especially during the monsoon.
                </li>
                <li>
                  Plan regular pest control, especially for termites and
                  cockroaches.
                </li>
                <li>
                  Keep drawings, bills and warranty papers in a safe place.
                </li>
                <li>
                  Tell your contractor before drilling or making changes to walls
                  and floors.
                </li>
                <li>
                  Repaint and repair small defects early, before they grow.
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
                Why Consider MTBOSS as Your Residential Architect for Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Design starts with your family:</strong> We study your
                  plot, family and budget before proposing a plan.
                </li>
                <li>
                  <strong>Architect, interior and construction under one
                  roof:</strong>{" "}
                  Design, kitchens, interiors, building and finishing planned
                  together.
                </li>
                <li>
                  <strong>Designs that can be built:</strong> Plans consider
                  structure, services, climate and cost.
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
                <li>
                  <strong>Transparent estimates:</strong> Written, itemised
                  quotes with scope stated clearly.
                </li>
                <li>
                  <strong>Free Budget Calculator:</strong> A simple starting
                  estimate for your construction budget.
                </li>
                <li>
                  <strong>Single point of contact:</strong> One team handles
                  design, execution and handover.
                </li>
                <li>
                  <strong>On-time delivery focus:</strong> Work is scheduled in
                  sequence to avoid repeat visits.
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
                Contact MTBOSS: Residential Architect for Rampur
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
                If you are looking for a residential architect in Rampur, MTBOSS
                offers a single point of contact for house design, construction
                and handover, supported by a free budget calculator and a simple
                online quote request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does a residential architect in Rampur
                  do?</strong>
                  <br />
                  A residential architect studies your plot and family needs,
                  plans rooms and circulation, designs the elevation, prepares
                  drawings, coordinates structure and services, supports
                  approvals where applicable and can supervise construction. The
                  exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide residential architecture and
                  home construction for Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Home owners in Rampur can
                  contact the team with project details to confirm scope and
                  arrangements.
                </li>
                <li>
                  <strong>Q3. How do I design a house on a small plot?</strong>
                  <br />
                  Use vertical planning, light wells or courtyards, compact
                  stairs and stacked bathrooms and kitchens. Plan parking
                  carefully and make sure each room gets light and air. An
                  architect can test options on your actual plot.
                </li>
                <li>
                  <strong>Q4. Can I add floors to my existing house?</strong>
                  <br />
                  It depends on the existing structure, foundation and local
                  rules. A structural assessment and proper design are needed
                  before adding floors.
                </li>
                <li>
                  <strong>Q5. What drawings will I receive?</strong>
                  <br />
                  Typically concept plans, elevations, working drawings, and
                  where included, interior drawings, structural coordination
                  drawings and services layouts. Confirm the list in the
                  agreement.
                </li>
                <li>
                  <strong>Q6. Do you design interiors and kitchens too?</strong>
                  <br />
                  MTBOSS lists Architecture &amp; Interior and Modular Kitchen
                  among its Quick Home Services. Share your project with the
                  team to confirm scope.
                </li>
                <li>
                  <strong>Q7. How do I keep my home cool in summer?</strong>
                  <br />
                  Good orientation, shaded windows, cross-ventilation, a
                  well-detailed roof and reflective or insulated finishes all
                  help. Plan these at the design stage.
                </li>
                <li>
                  <strong>Q8. How can I prevent leaks and termites in a new
                  house?</strong>
                  <br />
                  Plan waterproofing for the roof, bathrooms and walls, ensure
                  good drainage and consider anti-termite treatment during
                  construction. MTBOSS also offers waterproofing and pest
                  control services.
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