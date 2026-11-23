import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan Floors That Work for People, Tenants and Running Costs
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                An office building is a machine for work. If the plan is good,
                people reach their desks easily, find meeting rooms without a
                search, enjoy daylight and fresh air and go home less tired. If
                the plan is poor, the building leaks money every day: columns in
                the middle of every room, a corridor that wastes a quarter of
                the floor, glare on every screen, a lift that makes everyone
                wait, an air conditioning system that is either too weak or too
                costly, and tenants who leave after the first lease because the
                floors cannot be divided.
              </p>
              <p className="mt-3">
                An architect for an office building in Rampur plans both the
                building and the way people use it. This page explains how an
                office building is planned, from the floor plate to the
                services, whether you are building for your own use, for rent or
                for both. It also shows how MTBOSS approaches office design and
                construction.
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
                Office Building Planning at a Glance
              </h3>
              <p className="mb-3">
                An office building balances several needs at once.
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
                        Plot and approach
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Entry, parking, visitor access, signage
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visibility, safety and capacity
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Entrance and reception
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Welcoming arrival, security, waiting area
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        First impression and access control
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Floor plates
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Regular, flexible space with few columns
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Efficiency and ease of letting or subdividing
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Workspaces
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Open areas, cabins, collaboration zones
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfort, light, privacy and flexibility
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Meeting and conference rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Acoustics, display, ventilation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Quiet, comfort and scheduling
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Circulation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Lifts, staircases, corridors, fire exits
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Easy movement and safety
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Support spaces
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Pantry, toilets, storage, server and utility rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Hygiene, convenience and technology
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Air conditioning, power, backup, data, plumbing, fire
                        safety
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Reliability and running cost
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Parking and loading
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Cars, two-wheelers, visitor parking, deliveries
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Capacity, ramps and traffic flow
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future change
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra floors, new layouts, new tenants
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure and services that can adapt
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, business and budget matter more than any template.
                MTBOSS helps you plan an office building that suits your actual
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
                Office Design and Construction Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your office project with the team to confirm scope,
                experience and arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Business and site study:</strong> Understanding your
                  organisation, staff numbers, plot or premises and budget.
                </li>
                <li>
                  <strong>Office building design:</strong> Plans, sections,
                  elevations and working drawings for a new office building.
                </li>
                <li>
                  <strong>Floor plate and layout planning:</strong> Arranging
                  workspaces, meeting rooms, reception, pantry and support
                  areas.
                </li>
                <li>
                  <strong>Facade and elevation design:</strong> Frontage,
                  glazing, entrance, signage and materials.
                </li>
                <li>
                  <strong>Office interior design and fit-out:</strong> Ceilings,
                  lighting, flooring, partitions, workstations, furniture and
                  finishes.
                </li>
                <li>
                  <strong>Co-working and flexible workspace planning:</strong>{" "}
                  Layouts for shared offices, hot desks and meeting pods.
                </li>
                <li>
                  <strong>Construction and project management:</strong>{" "}
                  Execution to the approved design, with quality checks.
                </li>
                <li>
                  <strong>Office renovation and remodelling:</strong> Updating
                  existing offices, floors and buildings.
                </li>
                <li>
                  <strong>Extra floors and extensions:</strong> Adding area to an
                  existing building.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting roofs, toilets, basements and pantries.
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
                Start With Who Will Use the Building
              </h3>
              <p className="mb-3">
                An office building begins with questions about people and money.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Is it for your own use, for rent, or both?</strong>{" "}
                  Owner-occupied offices are planned around one organisation.
                  Rental offices need flexible floors that suit many tenants.
                </li>
                <li>
                  <strong>How many people will work there now and in five
                  years?</strong>{" "}
                  Plan area and services for growth.
                </li>
                <li>
                  <strong>How do your people work?</strong> Desk-based,
                  meeting-heavy, client-facing, field-based, creative or mixed.
                </li>
                <li>
                  <strong>What do your clients and visitors expect?</strong>{" "}
                  Reception, waiting, meeting space and parking.
                </li>
                <li>
                  <strong>What type of organisation is it?</strong> Corporate,
                  professional firm, bank branch, coaching centre office,
                  government office, NGO, call centre or start-up.
                </li>
                <li>
                  <strong>What is your budget, and what return do you
                  expect?</strong>{" "}
                  Construction cost and income or savings should both guide the
                  plan.
                </li>
                <li>
                  <strong>What are your deadlines?</strong> Lease dates, loan
                  schedules or business plans may set the timeline.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What an Office Building Architect Should Deliver
              </h3>
              <p className="mb-3">
                A good architect gives you more than a pretty elevation. Expect
                these outputs, in stages.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>A clear brief:</strong> A written summary of your
                  business needs, headcount, budget and priorities.
                </li>
                <li>
                  <strong>Concept layouts:</strong> Options showing floor plates,
                  core, circulation and unit division.
                </li>
                <li>
                  <strong>Area and efficiency statement:</strong> How much of
                  the building is usable or rentable.
                </li>
                <li>
                  <strong>2D plans and, where useful, 3D views:</strong> So you
                  can see the design before it is built.
                </li>
                <li>
                  <strong>Elevations:</strong> How the building looks from the
                  road, with space for signage.
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
                  electrical, air conditioning, data and fire safety planning.
                </li>
                <li>
                  <strong>Material and finish schedule:</strong> Materials,
                  flooring, glazing, fittings and finishes.
                </li>
                <li>
                  <strong>Estimate and scope:</strong> A cost outline tied to
                  the drawings and specifications.
                </li>
                <li>
                  <strong>Site visits and checks:</strong> Confirming that
                  construction follows the drawings.
                </li>
              </ul>
              <p className="mt-3">
                If an architect cannot tell you what you will receive at each
                stage, ask before you start.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Principles for a Successful Office Building
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Efficient, Flexible Floor Plates
              </h4>
              <p className="mb-3">
                A regular floor plan with few columns, a compact core and
                sensible depth gives the most usable space. Plan so that floors
                can be used by one tenant or divided among several.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Daylight and Views
              </h4>
              <p className="mb-3">
                Natural light improves comfort and reduces lighting costs. Plan
                windows, light wells and layout so that people sit near daylight,
                and control glare on screens with shading.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Fresh Air and Comfort
              </h4>
              <p className="mb-3">
                Plan ventilation and air conditioning with the layout. Good
                airflow, comfortable temperature and humidity keep people alert.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Acoustics
              </h4>
              <p className="mb-3">
                Noise reduces focus. Plan meeting rooms, phone booths, ceilings,
                partitions and flooring to control sound, and place noisy areas
                away from quiet ones.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Easy Movement and Safety
              </h4>
              <p className="mb-3">
                Plan lifts, staircases, corridors and fire exits for daily use
                and emergencies, with qualified professionals and applicable
                rules.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                A Strong Entrance and Reception
              </h4>
              <p className="mb-3">
                First impressions matter to clients and staff. Plan a clear
                entrance, secure but welcoming reception and comfortable waiting
                space.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Reliable Services
              </h4>
              <p className="mb-3">
                Power, backup, data, air conditioning, water and drainage must
                be reliable and easy to maintain. Plan shafts, meter rooms and
                plant space early.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Durable, Low-Maintenance Finishes
              </h4>
              <p className="mb-3">
                Offices see daily use. Choose robust flooring, washable finishes
                and simple detailing, and protect the building with good
                waterproofing.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Room to Grow
              </h4>
              <p className="mb-3">
                Plan the structure, services and plot so that you can add
                floors, change layouts or divide floors later without major
                disruption.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Floors and Workspaces
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Open-Plan Areas
              </h4>
              <p className="mb-3">
                Efficient and sociable, with good daylight and flexibility. Plan
                acoustics, storage and quiet zones so they do not become noisy.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Private Cabins
              </h4>
              <p className="mb-3">
                Suit managers, confidential work and calls. Place cabins so they
                do not block daylight for the main floor.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Meeting and Conference Rooms
              </h4>
              <p className="mb-3">
                Plan different sizes, from small huddle rooms to a larger
                boardroom. Provide display, power, data, ventilation and good
                acoustics.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Reception and Waiting
              </h4>
              <p className="mb-3">
                Plan a clear entrance, reception desk, waiting seating and access
                control. Keep visitor and staff flows clear.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Collaboration and Breakout Spaces
              </h4>
              <p className="mb-3">
                Informal areas for discussion and rest can improve work. Plan
                them where they will not disturb focused work.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Pantry and Dining
              </h4>
              <p className="mb-3">
                Plan a clean, ventilated pantry with water, storage and seating.
                Keep food smells away from workspaces.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Toilets and Washrooms
              </h4>
              <p className="mb-3">
                Provide clean, ventilated, easily accessible toilets with good
                drainage and waterproofing, planned for the number of staff and
                visitors.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Server, Utility and Storage Rooms
              </h4>
              <p className="mb-3">
                Plan secure, ventilated, cooled spaces for servers, UPS, records
                and supplies, with power and data protection.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning for Different Office Types
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Office type
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Corporate or Professional Office
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan a polished reception, meeting rooms, private cabins
                        and open workspace, with strong data and power.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Rental Office Building
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan flexible floors, shared toilets and lifts, parking,
                        signage zones, separate metering and a facade that
                        attracts tenants.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Co-Working or Flexible Workspace
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan open work areas, private rooms, meeting pods,
                        lounge and pantry, with flexible furniture and services.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Bank Branch or Financial Office
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan secure entrance, counters, strong rooms, queueing
                        and customer waiting, following the organisation&apos;s
                        design and security guidelines.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Coaching Centre or Training Office
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan classrooms or training rooms, waiting areas, admin
                        offices, toilets and parking, with good ventilation and
                        crowd control.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Government or Institutional Office
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan public counters, waiting areas, records,
                        accessibility and security, following applicable
                        guidelines.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Call Centre or IT Office
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan dense workspace, strong power and cooling, reliable
                        data, backup power, acoustics and rest areas.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Medical or Professional Chambers
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan consultation rooms, waiting areas, privacy, hygiene
                        and parking.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Mixed-Use Building with Offices Above Shops
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan separate entrances, stairs and lifts, services and
                        noise separation.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning an office building in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean cooling, shading, glazing choices, roof
                  drainage and moisture control are important.
                </li>
                <li>
                  <strong>Glass and heat:</strong> Large glass facades look
                  modern but can overheat offices and raise cooling costs in
                  summer. Plan shading and suitable glazing.
                </li>
                <li>
                  <strong>Street and access:</strong> Study the road, traffic and
                  visibility, because they affect entrance, parking and signage.
                </li>
                <li>
                  <strong>Parking:</strong> Staff and visitors need parking. Plan
                  capacity, ramps, turning space and two-wheeler parking early.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan slopes, outlets,
                  basement waterproofing and drainage.
                </li>
                <li>
                  <strong>Local demand:</strong> If you plan to rent, consider
                  which businesses and unit sizes the area supports, and plan
                  floors that can adapt.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Building bye-laws,
                  parking norms and fire requirements vary. Check what applies
                  to your project with the right authorities and professionals.
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
                Choose Your Office Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept and feasibility package:</strong> Business
                  study, space requirements and layout options.
                </li>
                <li>
                  <strong>Office building design package:</strong> Plans,
                  elevation and working drawings for a new office building.
                </li>
                <li>
                  <strong>Co-working package:</strong> Layout and fit-out for
                  shared and flexible workspaces.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Turnkey office package:</strong> Design, construction,
                  fit-out and handover as one managed project.
                </li>
                <li>
                  <strong>Renovation and refresh package:</strong> Updating an
                  existing office&apos;s layout, look and services.
                </li>
                <li>
                  <strong>Extension package:</strong> Adding floors or area to an
                  existing building.
                </li>
                <li>
                  <strong>Phase-wise plan:</strong> One complete design built in
                  stages to match your budget and leasing.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Office Building Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure, lifts and services.
                </li>
                <li>
                  <strong>Floor plate and structure:</strong> Large open floors
                  and heavy loads need stronger structure.
                </li>
                <li>
                  <strong>Facade and glazing:</strong> Glass, cladding and
                  special facades cost more than plain finishes.
                </li>
                <li>
                  <strong>Services:</strong> Air conditioning, power load,
                  backup, data, plumbing, fire safety and lifts.
                </li>
                <li>
                  <strong>Basement and parking:</strong> Excavation,
                  waterproofing, ramps and ventilation add to cost.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring,
                  ceilings, doors, partitions and fittings all affect cost.
                </li>
                <li>
                  <strong>Interior fit-out:</strong> Workstations, cabins,
                  furniture and lighting may be separate from the building cost.
                </li>
                <li>
                  <strong>Design changes:</strong> Changes after approval or
                  tenant requests during construction can add cost and delay.
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
                Budget Priorities for an Office Building
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Define your business plan and total
                  budget, including fit-out, furniture and services.
                </li>
                <li>
                  <strong>Second:</strong> Get the floor plate and layout right.
                  Efficient, flexible floors drive value more than expensive
                  finishes.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure and services right.
                  Foundation, structure, power, air conditioning and fire safety
                  are costly to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Plan parking and circulation. They
                  affect staff, visitors and tenants every day.
                </li>
                <li>
                  <strong>Fifth:</strong> Protect the building. Waterproofing,
                  drainage and durable finishes reduce running costs.
                </li>
                <li>
                  <strong>Sixth:</strong> Invest in comfort. Good light,
                  ventilation and acoustics improve work and reduce complaints.
                </li>
                <li>
                  <strong>Seventh:</strong> Phase upgrades and extra floors if
                  needed, with structure and services ready for growth.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches an Office Building Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your
                  organisation, plot or premises, needs and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free calculator
                  on our website gives a starting estimate for the construction
                  budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share plot
                  or premises dimensions, location, photos and any existing
                  buildings, and the team studies the site. For Rampur, the team
                  will confirm arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 4: Requirements and priorities.</strong> You and
                  the team talk through staff numbers, work style, unit mix,
                  parking, growth plans and budget.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Note how many people will work in the building now and
                  in five years.</strong>
                </li>
                <li>
                  <strong>Describe how your teams work and which spaces they
                  need.</strong>
                </li>
                <li>
                  <strong>Decide whether the building is for your use, for rent
                  or for both.</strong>
                </li>
                <li>
                  <strong>Estimate the area, number of floors and parking you
                  want.</strong>
                </li>
                <li>
                  <strong>Decide your realistic budget range, including
                  interiors, furniture and services.</strong>
                </li>
                <li>
                  <strong>Collect plot or premises details:</strong> Dimensions,
                  documents, photos and any existing structure.
                </li>
                <li>
                  <strong>Note road width, visibility, traffic and parking
                  possibilities.</strong>
                </li>
                <li>
                  <strong>Check what licences, approvals and rules apply to your
                  type of building.</strong>
                </li>
                <li>
                  <strong>Think about technology needs:</strong> Data, servers,
                  security and backup power.
                </li>
                <li>
                  <strong>Gather reference photos of offices you like and
                  dislike.</strong>
                </li>
                <li>
                  <strong>Decide who in the organisation or family will make
                  final decisions.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning an Office Building
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Designing the facade first and the floor plan later.
                </li>
                <li>
                  Floor plates with too many columns, odd shapes or wasted
                  corridors.
                </li>
                <li>
                  Poor daylight and glare on screens.
                </li>
                <li>
                  Noisy meeting areas next to quiet work zones.
                </li>
                <li>
                  Weak planning for air conditioning, power and backup.
                </li>
                <li>
                  Too little parking and poor visitor access.
                </li>
                <li>
                  Poorly placed toilets and pantries.
                </li>
                <li>
                  Ignoring heat from large glass facades.
                </li>
                <li>
                  Skipping soil checks, structural advice, fire safety and
                  approvals.
                </li>
                <li>
                  Not planning for expansion, changing layouts or new tenants.
                </li>
                <li>
                  Weak waterproofing of roofs, basements and toilets.
                </li>
                <li>
                  Splitting design, construction and fit-out among agencies and
                  managing them alone.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Share at Your First Consultation
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Project type:</strong> New office building, fit-out of
                  a rented space, renovation or extension.
                </li>
                <li>
                  <strong>Location:</strong> Locality in Rampur or nearby, with a
                  map pin if possible.
                </li>
                <li>
                  <strong>Plot or premises details:</strong> Size, shape,
                  frontage, floors, road width and photos.
                </li>
                <li>
                  <strong>Organisation details:</strong> Type of office, number
                  of staff and how teams work.
                </li>
                <li>
                  <strong>Budget range and phasing:</strong> The amount you are
                  comfortable spending and when.
                </li>
                <li>
                  <strong>Licences and approvals:</strong> What you already have
                  and what is pending.
                </li>
                <li>
                  <strong>Timeline:</strong> The date you aim to occupy or open.
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
                Why Consider MTBOSS as Your Architect for an Office Building in
                Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Design starts with how your people work:</strong> We
                  study your organisation, plot and budget before proposing a
                  layout.
                </li>
                <li>
                  <strong>Building, interior and fit-out under one roof:</strong>{" "}
                  Structure, facade, interiors and finishing planned together.
                </li>
                <li>
                  <strong>Designs that can be built:</strong> Plans consider
                  structure, services, climate and cost.
                </li>
                <li>
                  <strong>Attention to heat, leaks and pests:</strong> Glazing,
                  waterproofing and pest-proofing are part of the plan, not an
                  afterthought.
                </li>
                <li>
                  <strong>Flexibility for growth and tenants:</strong> We plan
                  floors, services and structure that can adapt.
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
                Rampur city, Civil Lines and surrounding commercial areas, and
                nearby towns such as Bilaspur, Milak, Shahabad, Swar and Tanda.
                Share your project location with the team, and they will confirm
                availability and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect for Office Building in Rampur
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
                If you are looking for an architect for an office building in
                Rampur, MTBOSS offers a single point of contact for design,
                construction, fit-out and handover, supported by a free budget
                calculator and a simple online quote request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does an architect do for an office
                  building?</strong>
                  <br />
                  An architect studies your organisation, plot and budget, plans
                  floors, circulation, parking and facade, designs interiors,
                  prepares drawings, coordinates structure and services, supports
                  approvals where applicable and can supervise construction. The
                  exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide office building design and
                  construction in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly, including commercial work.
                  Business owners in Rampur can contact the team with project
                  details to confirm scope, experience and arrangements.
                </li>
                <li>
                  <strong>Q3. How do I plan an office building for rent?</strong>
                  <br />
                  Plan regular, flexible floors, shared lifts, stairs and
                  toilets, adequate parking, separate metering and signage zones.
                  Consider which unit sizes the local market needs, and keep
                  floors easy to divide.
                </li>
                <li>
                  <strong>Q4. How much space do I need per employee?</strong>
                  <br />
                  It depends on how people work, whether you use open plan or
                  cabins, and meeting and support space. An architect can test
                  layouts against your headcount and plan for growth.
                </li>
                <li>
                  <strong>Q5. Are glass facades a good idea in Rampur?</strong>
                  <br />
                  They look modern, but can overheat offices and raise cooling
                  costs in summer. Plan shading and suitable glazing, and use
                  glass where it adds real value.
                </li>
                <li>
                  <strong>Q6. Can you design just the interior of a rented
                  office?</strong>
                  <br />
                  Interior and fit-out design is possible for rented spaces,
                  subject to what the owner permits. Share your premises details
                  with the team to confirm scope.
                </li>
                <li>
                  <strong>Q7. Can I add floors to my existing office
                  building?</strong>
                  <br />
                  It depends on the existing structure, foundation and local
                  rules. A structural assessment and proper design are needed
                  before adding floors.
                </li>
                <li>
                  <strong>Q8. Do you plan for power backup, data and air
                  conditioning?</strong>
                  <br />
                  These services should be planned with the layout and qualified
                  services engineers. Ask the team what is included in the scope.
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