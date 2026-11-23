import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan Safe, Comfortable and Easy-to-Run Rooms for Residents and Owners
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A hostel has two customers. Residents want a safe, clean, quiet
                place to sleep and study, with working water, power and Wi-Fi.
                The owner wants rooms that fill quickly, stay occupied and cost
                little to maintain. A hostel that satisfies only one of them
                struggles. Rooms that are too dark, bathrooms that leak, noisy
                corridors and a weak mess area lose residents. Layouts that
                waste area, finishes that wear out in a year and services that
                keep failing eat into income.
              </p>
              <p className="mt-3">
                An architect for a hostel in Rampur plans the building so that
                both sides win. This page explains how a hostel or PG building
                is planned, what to ask an architect and how MTBOSS approaches
                hostel design and construction.
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
                Hostel Planning at a Glance
              </h3>
              <p className="mb-3">
                A hostel brings several areas together, each with its own job.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Area
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
                        Entrance and reception
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Controlled entry, warden or manager desk, visitor area
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Security and supervision
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Single, double, triple or dormitory beds, storage, light
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfort, privacy and bed count
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Bathrooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Enough fittings, ventilation, drainage, waterproofing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Hygiene and low maintenance
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Study and common rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Quiet space, seating, Wi-Fi
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfort and noise control
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Mess and kitchen
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Dining, cooking, storage, ventilation, waste
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Hygiene and capacity
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Laundry and drying
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Washing, drying, access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Convenience and damp control
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Circulation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Corridors, stairs, lift if needed, fire exits
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safety and easy movement
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Water, power backup, internet, drainage, fire safety
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Reliability
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Outdoor and parking
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Two-wheeler parking, entry, open space
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Access and neighbourhood impact
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future expansion
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra rooms or floors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure and services that can grow
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, residents and budget matter more than any template.
                MTBOSS helps you plan a hostel that suits your actual situation.
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
                  Architecture &amp; Interior, Building Contractor and Building
                  Renovation are listed among the Quick Home Services on our
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
                Hostel Design and Construction Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your hostel project with the team to confirm scope,
                experience and arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Business and site study:</strong> Understanding your
                  residents, bed count, plot and budget.
                </li>
                <li>
                  <strong>Hostel building design:</strong> Plans, sections,
                  elevations and working drawings.
                </li>
                <li>
                  <strong>Room and layout planning:</strong> Room types,
                  bathrooms, circulation and common areas.
                </li>
                <li>
                  <strong>Interior design and furniture planning:</strong> Beds,
                  storage, study areas, lighting and finishes.
                </li>
                <li>
                  <strong>Mess and kitchen planning:</strong> Dining, cooking
                  and storage layouts.
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
                  <strong>Renovation and conversion:</strong> Turning an
                  existing house or building into a hostel or PG, or upgrading
                  an existing one.
                </li>
                <li>
                  <strong>Extra floors and extensions:</strong> Adding rooms to
                  an existing building.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting bathrooms, roofs, kitchens and walls.
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
                Start With the Residents and the Business
              </h3>
              <p className="mb-3">
                A hostel begins with questions about people, money and
                management.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Who will stay?</strong> Students, working
                  professionals, trainees, men, women or families, because each
                  group has different needs.
                </li>
                <li>
                  <strong>Where will you be located?</strong> Near colleges,
                  coaching centres, offices, hospitals or transport.
                </li>
                <li>
                  <strong>What room mix sells?</strong> Single rooms, double
                  sharing, triple sharing or dormitory beds, in your area and
                  price range.
                </li>
                <li>
                  <strong>What facilities do residents expect?</strong> Mess,
                  Wi-Fi, laundry, study room, power backup, hot water and
                  security.
                </li>
                <li>
                  <strong>How will you manage it?</strong> Owner-run, warden,
                  caretaker or operator, which affects reception, supervision
                  and staff rooms.
                </li>
                <li>
                  <strong>What is your budget and expected occupancy?</strong>{" "}
                  The plan must serve both construction cost and income.
                </li>
                <li>
                  <strong>What are your deadlines?</strong> Many hostels aim to
                  open before an academic session or admission season.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Principles for a Good Hostel
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Safety and Security
              </h4>
              <p className="mb-3">
                Plan a single controlled entrance, a visible reception or warden
                room, good lighting, safe stairs, clear fire exits and, where
                suitable, CCTV cabling. For women&apos;s hostels, privacy and
                secure visitor areas are especially important. Plan fire safety
                with qualified professionals and applicable rules.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Comfortable Rooms
              </h4>
              <p className="mb-3">
                Every room needs daylight, cross-ventilation, a bed and storage
                for each resident and space to move. Avoid dark inner rooms and
                rooms opening onto noisy corridors.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Hygiene and Bathrooms
              </h4>
              <p className="mb-3">
                Plan enough bathrooms and toilets for the number of residents,
                with good ventilation, non-slip floors, strong waterproofing and
                easy cleaning. Stack bathrooms to simplify plumbing.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Noise Control
              </h4>
              <p className="mb-3">
                Separate study and sleeping areas from noisy spaces such as the
                mess, common room and street, using layout, doors and finishes.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Durable, Low-Maintenance Finishes
              </h4>
              <p className="mb-3">
                Hostels see heavy use. Choose strong flooring, washable paint,
                sturdy fittings and simple detailing.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Reliable Services
              </h4>
              <p className="mb-3">
                Plan water storage, hot water, power backup, internet cabling
                and drainage with the layout, with capacity for full occupancy.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Efficient Layout
              </h4>
              <p className="mb-3">
                Short corridors, repeated room sizes and a compact core make the
                building cheaper to build and easier to manage.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Room to Grow
              </h4>
              <p className="mb-3">
                Plan structure and services so that you can add rooms or floors
                later.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning Rooms and Shared Spaces
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Rooms
              </h4>
              <p className="mb-3">
                Decide the room mix early. For each room, plan bed positions,
                study table, storage, window, fan or cooling and electrical
                points. Standard repeated layouts save cost.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Bathrooms
              </h4>
              <p className="mb-3">
                Plan attached or shared bathrooms based on your price range, and
                make sure there are enough fittings for peak hours. Plan hot
                water and drainage.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Study and Common Rooms
              </h4>
              <p className="mb-3">
                A quiet study space, a common lounge and good internet make a
                hostel more attractive.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Mess and Kitchen
              </h4>
              <p className="mb-3">
                Plan a kitchen with ventilation, storage, easy cleaning and
                waste handling, and a dining area sized for meal times. Plan
                separate delivery and waste routes where possible.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Laundry and Drying
              </h4>
              <p className="mb-3">
                Plan washing and drying space with drainage and ventilation, so
                that damp does not spread into rooms.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Warden, Reception and Visitor Area
              </h4>
              <p className="mb-3">
                Plan a desk with a clear view of the entrance, a separate
                visitor sitting area and space for records.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Staircases, Lifts and Exits
              </h4>
              <p className="mb-3">
                Plan wide, safe stairs and clear exits. For taller buildings,
                consider a lift or space for one.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Outdoor and Parking
              </h4>
              <p className="mb-3">
                Plan two-wheeler and cycle parking, a gate, drop-off and open
                space without blocking the road.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a hostel in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean cross-ventilation, shaded openings, roof
                  drainage and moisture control are important. Plan cooling for
                  rooms.
                </li>
                <li>
                  <strong>Location and access:</strong> Consider nearby colleges,
                  coaching centres, offices and transport, and how residents
                  will arrive.
                </li>
                <li>
                  <strong>Plot shape and size:</strong> Many plots are narrow or
                  compact. Efficient room layouts and vertical planning help.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan roof slopes, outlets,
                  bathrooms and waterproofing from the start.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Ask for proper soil
                  assessment and structural advice, especially for multi-storey
                  buildings.
                </li>
                <li>
                  <strong>Neighbourhood:</strong> Consider noise, parking and
                  the effect on neighbours.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Building bye-laws,
                  use permissions, fire requirements and any hostel or PG
                  registration rules vary. Check what applies to your project
                  with the right authorities.
                </li>
                <li>
                  <strong>Seasonal demand:</strong> Admission and exam seasons
                  affect occupancy. Plan the opening date accordingly.
                </li>
                <li>
                  <strong>Household and community preferences:</strong> If you
                  follow Vastu or other preferences, tell the architect at the
                  start so they can be considered in the plan.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of Hostel Project
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Hostel project type
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Boys&apos; or Girls&apos; Student Hostel
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan security, study space, mess and privacy suited to
                        the residents.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        PG for Working Professionals
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan more private rooms, better bathrooms, flexible meal
                        options and parking.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Coaching-Centre Hostel
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan quiet study areas, larger capacity and a link to
                        the institute.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Dormitory-Style Hostel
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan bunk or bed layouts, lockers, ventilation and
                        shared bathrooms.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Conversion of an Existing House
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Check the structure, plumbing, electrical and approvals
                        before adding rooms and bathrooms.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Extension or Extra Floor
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Check the existing foundation and structure before
                        adding beds.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Renovation of an Existing Hostel
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Repair bathrooms, waterproofing, wiring, finishes and
                        services, in phases where possible.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Hostel Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept and feasibility package:</strong> Resident
                  study, room mix and layout options.
                </li>
                <li>
                  <strong>Hostel building design package:</strong> Plans,
                  elevation and working drawings.
                </li>
                <li>
                  <strong>Interior and furniture package:</strong> Room layouts,
                  beds, storage, lighting and finishes.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Conversion package:</strong> Converting an existing
                  building into a hostel or PG.
                </li>
                <li>
                  <strong>Renovation and refresh package:</strong> Upgrading
                  rooms, bathrooms, waterproofing and finishes.
                </li>
                <li>
                  <strong>Extension package:</strong> Adding rooms or floors to
                  an existing building.
                </li>
                <li>
                  <strong>Phase-wise plan:</strong> One complete design built in
                  stages to match your budget and intake.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Hostel Construction Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure, stairs and services.
                </li>
                <li>
                  <strong>Number of rooms, beds and bathrooms:</strong> More
                  fittings mean more plumbing and finishing.
                </li>
                <li>
                  <strong>Room type:</strong> Attached bathrooms and cooling
                  cost more than shared ones.
                </li>
                <li>
                  <strong>Mess and kitchen:</strong> Equipment, ventilation and
                  drainage add to the budget.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring, doors,
                  windows, paint and fittings.
                </li>
                <li>
                  <strong>Services:</strong> Plumbing, hot water, electrical
                  load, power backup, internet and fire safety.
                </li>
                <li>
                  <strong>Furniture and fit-out:</strong> Beds, storage and
                  study tables are often priced separately.
                </li>
                <li>
                  <strong>Waterproofing and protection:</strong> Bathrooms,
                  roofs and external walls.
                </li>
                <li>
                  <strong>Site conditions:</strong> Soil, levels, access and
                  neighbouring buildings.
                </li>
                <li>
                  <strong>Phasing and design changes:</strong> Staging can ease
                  cash flow, but changes after approval add cost and delay.
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
                Budget Priorities for a Hostel Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Decide your residents, room mix and
                  total budget, including furniture and services.
                </li>
                <li>
                  <strong>Second:</strong> Get the layout right. Efficient,
                  repeatable rooms save money and fill faster.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure and bathrooms right.
                  Foundation, structure, plumbing and waterproofing are costly
                  to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Plan services early. Water, power
                  backup, internet and drainage should match full occupancy.
                </li>
                <li>
                  <strong>Fifth:</strong> Invest in safety. Secure entry,
                  lighting, stairs and fire exits matter to residents and
                  parents.
                </li>
                <li>
                  <strong>Sixth:</strong> Choose durable finishes, and keep
                  decorative extras modest.
                </li>
                <li>
                  <strong>Seventh:</strong> Phase extra floors or facilities,
                  with structure and services ready for growth.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a Hostel Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your hostel
                  type, bed count, plot and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free calculator
                  on our website gives a starting estimate for the construction
                  budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share plot
                  dimensions, location, photos and any existing building. For
                  Rampur, the team will confirm arrangements for visits and
                  meetings.
                </li>
                <li>
                  <strong>Step 4: Requirements and priorities.</strong> You and
                  the team talk through residents, room mix, facilities,
                  management and growth plans.
                </li>
                <li>
                  <strong>Step 5: Concept layout and options.</strong> Layouts
                  are prepared and refined with your feedback.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Decide who the hostel is for and where residents will
                  come from.</strong>
                </li>
                <li>
                  <strong>Estimate the number of beds and the room mix you
                  want.</strong>
                </li>
                <li>
                  <strong>Decide your realistic budget, including furniture and
                  services, and your target occupancy.</strong>
                </li>
                <li>
                  <strong>Collect plot details:</strong> Dimensions, documents,
                  photos and any existing structure.
                </li>
                <li>
                  <strong>Check which approvals, registrations and rules apply
                  to your hostel or PG.</strong>
                </li>
                <li>
                  <strong>Decide how the hostel will be managed, and what staff
                  areas you need.</strong>
                </li>
                <li>
                  <strong>Think about food:</strong> In-house mess, tie-up or no
                  meals.
                </li>
                <li>
                  <strong>Decide your opening date, such as before an admission
                  season.</strong>
                </li>
                <li>
                  <strong>Gather reference photos of hostels you like and
                  dislike.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning a Hostel
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Fitting too many beds without light, ventilation or storage.
                </li>
                <li>
                  Too few bathrooms for peak hours.
                </li>
                <li>
                  Weak waterproofing, leading to leaks and damp rooms.
                </li>
                <li>
                  Poor security planning and no controlled entry.
                </li>
                <li>
                  Weak water supply, power backup or internet.
                </li>
                <li>
                  Noisy rooms next to the mess, stairs or street.
                </li>
                <li>
                  Finishes that wear out quickly.
                </li>
                <li>
                  Skipping soil checks, structural advice, fire safety and
                  approvals.
                </li>
                <li>
                  Not planning pest control and kitchen hygiene.
                </li>
                <li>
                  Not planning for growth.
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
                  <strong>Project type:</strong> New hostel, PG, conversion,
                  extension or renovation.
                </li>
                <li>
                  <strong>Location:</strong> Locality in Rampur or nearby, with a
                  map pin if possible.
                </li>
                <li>
                  <strong>Plot or building details:</strong> Size, shape,
                  floors, road width and photos.
                </li>
                <li>
                  <strong>Budget range and phasing:</strong> The amount you are
                  comfortable spending and when.
                </li>
                <li>
                  <strong>Approvals status:</strong> What you already have and
                  what is pending.
                </li>
                <li>
                  <strong>Timeline:</strong> The date you aim to open.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                MTBOSS Services for Building Owners
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Architecture and interior:</strong> Design and
                  planning for homes and commercial spaces.
                </li>
                <li>
                  <strong>Construction and renovation:</strong> New buildings,
                  extra floors, remodelling, repairs and waterproofing.
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
                Why Consider MTBOSS as Your Architect for a Hostel in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Planning starts with residents and income:</strong> We
                  study your residents, room mix and budget before proposing a
                  layout.
                </li>
                <li>
                  <strong>Design, construction and interiors under one
                  roof:</strong> Structure, bathrooms, kitchen, interiors and
                  finishing planned together.
                </li>
                <li>
                  <strong>Attention to bathrooms, leaks and pests:</strong>{" "}
                  Waterproofing, plumbing and pest-proofing are part of the
                  plan, not an afterthought.
                </li>
                <li>
                  <strong>Efficient, repeatable layouts:</strong> Rooms and
                  bathrooms planned to save cost and simplify maintenance.
                </li>
                <li>
                  <strong>Written scope and specifications:</strong>{" "}
                  Deliverables, materials, timeline and payment terms are
                  documented before work begins.
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
                Rampur city, Civil Lines and surrounding areas, and nearby towns
                such as Bilaspur, Milak, Shahabad, Swar and Tanda. Share your
                project location with the team, and they will confirm
                availability and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect for Hostel in Rampur
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
                If you are looking for an architect for a hostel in Rampur,
                MTBOSS offers a single point of contact for design, construction
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
                  <strong>Q1. What does an architect do for a hostel?</strong>
                  <br />
                  An architect studies your residents, plot and budget, plans
                  rooms, bathrooms, common areas and circulation, prepares
                  drawings, coordinates structure and services, supports
                  approvals where applicable and can supervise construction. The
                  exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide hostel design and construction
                  in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Hostel owners in Rampur can
                  contact the team with project details to confirm scope,
                  experience and arrangements.
                </li>
                <li>
                  <strong>Q3. Can an existing house be converted into a hostel
                  or PG?</strong>
                  <br />
                  Often yes, but the structure, plumbing, electrical load, fire
                  safety and local permissions must be checked first. Share your
                  building details with the team to confirm scope.
                </li>
                <li>
                  <strong>Q4. How many bathrooms does a hostel need?</strong>
                  <br />
                  It depends on the number of residents, room type and local
                  requirements. An architect can plan fittings for peak-hour
                  use. Check any rules that apply to your hostel.
                </li>
                <li>
                  <strong>Q5. How can I keep hostel rooms cool in summer?</strong>
                  <br />
                  Good orientation, cross-ventilation, shading, roof insulation
                  and fans or other cooling help. Plan these at the design
                  stage.
                </li>
                <li>
                  <strong>Q6. How do I improve safety in a hostel?</strong>
                  <br />
                  Plan a single controlled entrance, a visible warden or
                  reception desk, good lighting, safe stairs, clear fire exits
                  and cabling for CCTV where suitable. Follow qualified advice
                  and applicable rules.
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