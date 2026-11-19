import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan Guest Comfort, Smooth Operations and a Building That Earns
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A hotel is a building that has to work for two groups at once.
                Guests want comfort, quiet, clean rooms, easy check-in and a
                feeling that the place is well run. The owner and staff need a
                building that is efficient to operate, simple to clean and
                maintain and flexible enough to earn from rooms, food and
                events.
              </p>
              <p className="mt-3">
                When a hotel is designed well, guests notice the comfort and
                staff notice the ease. When it is designed badly, guests
                complain about noise, damp and long walks to the lift, and
                staff spend every day working around design mistakes.
              </p>
              <p className="mt-3">
                A good architect for a hotel in Rampur plans both sides before
                the first brick is laid. This page explains how hotel and guest
                house buildings are planned, what to ask an architect, how to
                budget and phase the work and how MTBOSS approaches hospitality
                projects.
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
                Hotel Planning at a Glance
              </h3>
              <p className="mb-3">
                A hotel brings many functions together. Here is what each
                needs.
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
                        Entrance and lobby
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        A clear, welcoming arrival, reception and waiting space
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        First impression, signage, security
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Guest rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfort, privacy, quiet, light and a good bathroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Room size, layout, soundproofing, ventilation
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Corridors, stairs and lifts
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Easy movement, safe exits, luggage handling
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Circulation, fire safety, accessibility
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Restaurant and kitchen
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Guest dining, hygiene, ventilation, service access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Kitchen layout, exhaust, waste and deliveries
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Banquet or event space
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Large span, acoustics, services, separate access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure, parking, exits, kitchen link
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Back-of-house
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Laundry, store, staff rooms, housekeeping, maintenance
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Efficiency, hygiene and discreet service routes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Parking and drop-off
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Space for cars, taxis, buses and luggage
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Traffic flow, safety and capacity
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services and utilities
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Water, drainage, power backup, HVAC, fire systems
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Reliability and easy maintenance
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future expansion
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra rooms, floors or facilities
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure and plot planning
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, guests and budget matter more than any template.
                MTBOSS helps you plan a design that suits your actual situation.
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
                Architecture and Construction Services Offered by MTBOSS for
                Hotel Projects
              </h3>
              <p className="mb-3">
                Share your hotel or guest house project with the team to confirm
                scope and arrangements.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement study and site review:</strong>{" "}
                  Understanding your guests, room count, facilities, plot and
                  budget.
                </li>
                <li>
                  <strong>Concept and master planning:</strong> Arranging rooms,
                  lobby, dining, parking and future expansion on your plot.
                </li>
                <li>
                  <strong>Hotel and guest house design:</strong> Plans,
                  sections, elevations and working drawings.
                </li>
                <li>
                  <strong>Room and layout planning:</strong> Room types,
                  bathrooms, circulation, lifts and staircases.
                </li>
                <li>
                  <strong>Restaurant, kitchen and banquet planning:</strong>{" "}
                  Layout, services, ventilation and access.
                </li>
                <li>
                  <strong>Building elevation design:</strong> A facade that
                  attracts guests and suits the area.
                </li>
                <li>
                  <strong>Interior design for hospitality spaces:</strong>{" "}
                  Lobby, rooms, corridors, restaurant, ceilings, lighting and
                  finishes.
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
                  <strong>Renovation and upgrade of existing hotels:</strong>{" "}
                  Room refresh, facade, bathrooms, waterproofing and services.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting roofs, bathrooms, kitchens and basements.
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
                Design Principles for a Successful Hotel Building
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                A Clear Arrival Experience
              </h4>
              <p className="mb-3">
                Guests form an opinion in the first minute. A visible entrance,
                easy parking or drop-off, a clean, welcoming lobby and a
                reception that is easy to find set the tone.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Comfortable, Quiet Rooms
              </h4>
              <p className="mb-3">
                Guests judge a hotel by its rooms. Plan room size, bed and
                furniture layout, light, ventilation and a bathroom that is
                comfortable and easy to clean. Plan wall and floor construction,
                windows and doors to reduce noise from corridors, neighbouring
                rooms and the street.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Smart Room Mix
              </h4>
              <p className="mb-3">
                Decide how many standard, deluxe, family and suite rooms you
                need. A good mix serves your expected guests, such as business
                visitors, families, wedding parties or pilgrims, without leaving
                too many rooms underused.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Efficient Circulation
              </h4>
              <p className="mb-3">
                Staff and guests should move easily. Plan corridors, staircases,
                lifts, luggage routes and service routes so that housekeeping
                and food service do not cross guest paths.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Safety and Security
              </h4>
              <p className="mb-3">
                Plan fire exits, staircases, fire protection and emergency
                lighting with qualified professionals and applicable rules. Plan
                reception visibility, entrances, lighting and, where needed,
                security systems.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Back-of-House That Works
              </h4>
              <p className="mb-3">
                Laundry, linen, stores, staff areas, kitchen deliveries and
                waste handling should work smoothly and stay out of guests&apos;
                sight.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Durable, Easy-to-Maintain Finishes
              </h4>
              <p className="mb-3">
                Hotels see heavy use. Choose strong flooring, washable wall
                finishes, quality fittings and simple detailing, especially in
                bathrooms and corridors.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Flexibility and Growth
              </h4>
              <p className="mb-3">
                Plan the structure, services and plot so you can add rooms,
                floors or facilities later without major disruption.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Guest Rooms
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Room sizes and types:</strong> Match them to your
                  guest profile and price range.
                </li>
                <li>
                  <strong>Bed and furniture layout:</strong> Make sure guests
                  can move around, open luggage and use the desk or seating.
                </li>
                <li>
                  <strong>Windows and light:</strong> Natural light and a
                  pleasant view add value. Plan curtains or blinds for privacy.
                </li>
                <li>
                  <strong>Ventilation and cooling:</strong> Plan air
                  conditioning, fans and fresh air with qualified services
                  design.
                </li>
                <li>
                  <strong>Soundproofing:</strong> Consider wall build-up, door
                  sealing, flooring and window quality.
                </li>
                <li>
                  <strong>Bathrooms:</strong> Good layout, ventilation, drainage,
                  non-slip floors, hot water and waterproofing protect comfort
                  and the building.
                </li>
                <li>
                  <strong>Storage:</strong> Wardrobe, luggage space and a place
                  for personal items.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Lobby, Reception and Public Areas
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Entrance and signage:</strong> Visible from the road,
                  with a clear name and approach.
                </li>
                <li>
                  <strong>Reception:</strong> Positioned to see the entrance,
                  lift and stairs, with space for luggage and waiting.
                </li>
                <li>
                  <strong>Seating and waiting:</strong> Comfortable space for
                  guests and visitors.
                </li>
                <li>
                  <strong>Lifts and staircases:</strong> Easy to find, with
                  enough capacity for peak use.
                </li>
                <li>
                  <strong>Public toilets:</strong> Clean, easy to reach and well
                  ventilated.
                </li>
                <li>
                  <strong>Lighting and décor:</strong> A welcoming first
                  impression that matches the hotel&apos;s identity.
                </li>
                <li>
                  <strong>Security and visibility:</strong> Clear sightlines and
                  lighting.
                </li>
                <li>
                  <strong>Accessibility:</strong> Ramps, wide doors and easy
                  movement for all guests.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Restaurant, Kitchen and Banquet
              </h3>
              <p className="mb-3">
                Food and events are often a major source of income, and also the
                most demanding spaces to design.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Restaurant layout:</strong> Seating, service flow,
                  storage and ambience.
                </li>
                <li>
                  <strong>Kitchen design:</strong> Work zones for preparation,
                  cooking, washing and storage, with good ventilation and
                  hygiene.
                </li>
                <li>
                  <strong>Exhaust and fresh air:</strong> Plan chimney or
                  exhaust systems, duct routes and make-up air.
                </li>
                <li>
                  <strong>Deliveries and waste:</strong> Separate service
                  access, storage and waste handling.
                </li>
                <li>
                  <strong>Banquet or event hall:</strong> Large span structure,
                  ventilation, acoustics, stage, lighting, exits and parking.
                </li>
                <li>
                  <strong>Link to the kitchen:</strong> A banquet needs a smooth
                  service route from the kitchen.
                </li>
                <li>
                  <strong>Guest and service separation:</strong> Keep guest
                  areas and kitchen services apart.
                </li>
                <li>
                  <strong>Licences and hygiene rules:</strong> Food and event
                  licences vary. Check what applies with the authorities, and
                  plan the layout to meet them.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning Services, Utilities and Maintenance
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Water supply and storage:</strong> Reliable supply,
                  tanks, pumps and hot water.
                </li>
                <li>
                  <strong>Drainage and sewage:</strong> Properly sized, easy to
                  maintain and protected from blockage.
                </li>
                <li>
                  <strong>Electrical load and backup:</strong> Power for lights,
                  cooling, kitchen, lifts and a backup for outages.
                </li>
                <li>
                  <strong>Air conditioning and ventilation:</strong> Planned
                  with the layout, not added later.
                </li>
                <li>
                  <strong>Fire safety systems:</strong> Detection, alarms,
                  extinguishers and exits, planned with qualified advice.
                </li>
                <li>
                  <strong>Internet and data:</strong> Cabling for Wi-Fi,
                  reception systems and CCTV.
                </li>
                <li>
                  <strong>Waste handling:</strong> A clean route and storage
                  area that stays away from guests.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a hotel in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean cooling, shaded openings, roof drainage and
                  moisture control are important.
                </li>
                <li>
                  <strong>Guest profile:</strong> Think about who stays:
                  business visitors, families, wedding guests, pilgrims, transit
                  travellers or tourists. Room mix and facilities should match.
                </li>
                <li>
                  <strong>Weddings and events:</strong> Banquet space and
                  parking are often key in this region. Plan capacity, access
                  and noise carefully.
                </li>
                <li>
                  <strong>Local character:</strong> Rampur has a rich local
                  heritage and older neighbourhoods. A design can reflect local
                  character while still working for modern guests.
                </li>
                <li>
                  <strong>Plot and access:</strong> Road width, traffic, parking
                  and visibility affect the layout and business.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Ask for proper soil
                  assessment and structural advice, especially for multi-storey
                  buildings and halls.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan slopes, outlets,
                  waterproofing and campus drainage from the start.
                </li>
                <li>
                  <strong>Local rules, licences and approvals:</strong> Building
                  bye-laws, fire requirements, hotel and food licences vary.
                  Check what applies to your project with the right authorities
                  and professionals.
                </li>
                <li>
                  <strong>Staffing and operations:</strong> Plan staff areas,
                  service routes and housekeeping for efficient operation.
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
                Planning by Type of Hospitality Project
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Project type
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Hotel
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        A full-service building with rooms, lobby, restaurant
                        and often banquet space. Plan the room mix, circulation,
                        back-of-house and services together.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Guest House or Lodge
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Smaller scale, with simple, efficient rooms, a modest
                        lobby and perhaps a small dining area. Keep operations
                        simple and costs controlled.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Banquet Hall and Marriage Lawn
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Focus on capacity, parking, kitchen access, acoustics,
                        toilets, lighting and exits. Plan separate guest and
                        service flows.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Resort or Farmhouse Stay
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan cottages, landscaping, common areas, pools if any,
                        drainage and sustainable water use.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Dharamshala, Hostel and Budget Stay
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan durable, easy-to-clean rooms, shared facilities,
                        hygiene, supervision and low maintenance.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Restaurant or Cafe within a Building
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan kitchen, ventilation, seating, entrance and
                        separation from other uses.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Renovation of an Existing Hotel
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Study the structure, services and guest flow. Plan room
                        upgrades, bathrooms, facade, waterproofing and finishes
                        in phases so that part of the hotel can keep operating
                        where possible.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Hotel Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept and master plan package:</strong> Requirement
                  study, site planning and layout options.
                </li>
                <li>
                  <strong>Hotel design package:</strong> Plans, elevation and
                  working drawings for rooms, lobby, dining and services.
                </li>
                <li>
                  <strong>Interior design package:</strong> Lobby, rooms,
                  corridors, restaurant, ceilings, lighting and finishes.
                </li>
                <li>
                  <strong>Banquet and event space package:</strong> Planning for
                  halls, lawns, parking and kitchen links.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Phase-wise construction package:</strong> One plan
                  built in stages, such as rooms first and banquet later.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Hotel Construction Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure, lifts and services.
                </li>
                <li>
                  <strong>Number and type of rooms:</strong> Larger or
                  higher-category rooms cost more.
                </li>
                <li>
                  <strong>Facilities:</strong> Restaurants, kitchens, banquet
                  halls, lifts and parking add to the budget.
                </li>
                <li>
                  <strong>Structure and spans:</strong> Halls, large dining
                  areas and basements need heavier structure.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring,
                  bathrooms, fittings, furniture, ceilings and facade materials
                  all affect cost.
                </li>
                <li>
                  <strong>Services:</strong> Air conditioning, plumbing,
                  drainage, electrical, power backup, fire safety and data
                  cabling.
                </li>
                <li>
                  <strong>External works:</strong> Boundary walls, gates,
                  paving, landscaping and signage.
                </li>
                <li>
                  <strong>Design complexity:</strong> Special elevations, custom
                  interiors and unusual layouts add cost.
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
                Budget Priorities for a Hotel Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Define your target guests and room
                  mix. This guides every other decision.
                </li>
                <li>
                  <strong>Second:</strong> Get the plan and circulation right.
                  Good flow saves money in daily operations.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure and services right.
                  Foundation, structure, plumbing, drainage and power are costly
                  to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Invest in bathrooms, waterproofing
                  and quiet rooms. They affect guest satisfaction and repair
                  costs.
                </li>
                <li>
                  <strong>Fifth:</strong> Plan the kitchen and ventilation
                  properly. They affect hygiene, comfort and running costs.
                </li>
                <li>
                  <strong>Sixth:</strong> Choose finishes that look good and
                  last. Upgrade selected areas later if needed.
                </li>
                <li>
                  <strong>Seventh:</strong> Phase facilities such as banquet
                  halls or extra floors if budget requires, while keeping
                  structure and services ready.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a Hotel Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact
                  MTBOSS through the website, phone or WhatsApp and share your
                  hotel type, room count, facilities, plot and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free
                  calculator on our website gives a starting estimate for the
                  construction budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share
                  plot dimensions, location, photos and any existing buildings,
                  and the team studies the site. For Rampur, the team will
                  confirm arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 4: Requirements and priorities.</strong> You and
                  the team talk through guest profile, room mix, facilities,
                  growth plans and budget.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Define your concept:</strong> Hotel, guest house,
                  banquet, resort or a mix, and your target guests.
                </li>
                <li>
                  <strong>List the facilities you want now and those you may add
                  later.</strong>
                </li>
                <li>
                  <strong>Estimate the number and type of rooms, and the
                  capacity of the restaurant and banquet.</strong>
                </li>
                <li>
                  <strong>Decide your realistic budget range, and how you will
                  phase the project.</strong>
                </li>
                <li>
                  <strong>Collect plot details:</strong> Dimensions, documents,
                  photos and any existing structure.
                </li>
                <li>
                  <strong>Note road width, visibility, traffic and parking
                  possibilities.</strong>
                </li>
                <li>
                  <strong>Check what licences, approvals and rules apply to your
                  type of property.</strong>
                </li>
                <li>
                  <strong>Think about operations:</strong> Staff, housekeeping,
                  laundry, kitchen and maintenance.
                </li>
                <li>
                  <strong>Gather reference photos of hotels you like and
                  dislike.</strong>
                </li>
                <li>
                  <strong>Decide who in the family or management will make final
                  decisions.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning a Hotel
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Starting design without a clear guest profile and room mix.
                </li>
                <li>
                  Making rooms look good but noisy, dark or hard to ventilate.
                </li>
                <li>
                  Poor bathroom design and weak waterproofing, leading to leaks
                  and complaints.
                </li>
                <li>
                  Forgetting back-of-house, laundry, storage and staff routes.
                </li>
                <li>
                  Under-planning parking, drop-off and banquet access.
                </li>
                <li>
                  A kitchen with poor ventilation or an awkward link to the
                  restaurant and banquet.
                </li>
                <li>
                  Ignoring power backup, water storage and drainage capacity.
                </li>
                <li>
                  Skipping soil checks, structural advice, fire safety and
                  approvals.
                </li>
                <li>
                  Choosing finishes that are expensive to maintain.
                </li>
                <li>
                  Not planning for expansion or phased opening.
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
                  <strong>Project type:</strong> New hotel, guest house,
                  banquet, resort, extension or renovation.
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
                  <strong>Concept and guests:</strong> Who you want to serve and
                  your price range.
                </li>
                <li>
                  <strong>Facilities:</strong> Number of rooms, restaurant,
                  banquet, parking and others.
                </li>
                <li>
                  <strong>Existing building:</strong> Drawings, photos and
                  condition, if renovating.
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
                  <strong>Timeline:</strong> The date or season you aim to open.
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
                Why Consider MTBOSS as Your Architect for a Hotel in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Planning starts with your guests and business:</strong>{" "}
                  We study your guest profile, facilities, plot and budget before
                  proposing a plan.
                </li>
                <li>
                  <strong>Design and construction under one scope:</strong>{" "}
                  Planning, building, interiors, finishing and protection
                  coordinated by one team.
                </li>
                <li>
                  <strong>Attention to bathrooms, waterproofing and pests:</strong>{" "}
                  Design choices consider leaks, damp and hygiene, which matter a
                  lot in hotels.
                </li>
                <li>
                  <strong>Phase-wise planning:</strong> We can plan a master
                  layout and build in stages to match your budget and opening
                  plans.
                </li>
                <li>
                  <strong>Written scope and specifications:</strong>{" "}
                  Deliverables, materials, phasing, timeline and payment terms
                  are documented before work begins.
                </li>
                <li>
                  <strong>Transparent estimates:</strong> Written, itemised
                  quotes with scope stated clearly.
                </li>
                <li>
                  <strong>Free Budget Calculator:</strong> A simple starting
                  estimate for your construction budget.
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
                Contact MTBOSS: Architect for Hotel Projects in Rampur
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
                If you are looking for an architect for a hotel in Rampur,
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
                  <strong>Q1. What does an architect do for a hotel
                  project?</strong>
                  <br />
                  An architect studies your plot and business needs, plans
                  rooms, lobby, dining, banquet and services, prepares drawings,
                  coordinates structure and services, supports approvals where
                  applicable and can supervise construction. The exact scope is
                  written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide architecture and construction
                  for hotels in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Hotel owners in Rampur can
                  contact the team with project details to confirm scope,
                  experience and arrangements.
                </li>
                <li>
                  <strong>Q3. How many rooms should my hotel have?</strong>
                  <br />
                  It depends on your plot, budget, target guests and local
                  demand. An architect can help you test room counts and mixes
                  against your plot and budget. Local demand research is best
                  done with market professionals.
                </li>
                <li>
                  <strong>Q4. Should I build the banquet hall first or the rooms
                  first?</strong>
                  <br />
                  Both can earn, but they need different investments and
                  approvals. Phase-wise planning lets you start with one and add
                  the other later, if the structure, services and plot are
                  planned for it.
                </li>
                <li>
                  <strong>Q5. How can I reduce noise between hotel rooms?</strong>
                  <br />
                  Plan wall and floor construction, door sealing, windows,
                  corridor layout and room positions with noise in mind. Discuss
                  options with the architect early, because they are hard to add
                  later.
                </li>
                <li>
                  <strong>Q6. How can I avoid leaks in hotel bathrooms and
                  roofs?</strong>
                  <br />
                  Plan good waterproofing, drainage, slopes and quality fittings
                  from the start, and check work at stages. MTBOSS also offers
                  waterproofing services.
                </li>
                <li>
                  <strong>Q7. Can an existing hotel be renovated while it
                  operates?</strong>
                  <br />
                  Often partly yes, with phased work, separated work zones, and
                  noisy work scheduled at off-peak times. Plan this with the
                  architect at the start.
                </li>
                <li>
                  <strong>Q8. Do you help with approvals and licences?</strong>
                  <br />
                  Requirements vary by project and area. Ask the team what
                  support is included, and confirm the rules that apply to your
                  property with the authorities.
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