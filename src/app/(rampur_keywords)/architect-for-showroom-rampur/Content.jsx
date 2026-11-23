import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Design a Space That Draws People In and Helps Products Sell
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A showroom has one job: to make a visitor want to buy. Everything
                that a customer sees and feels, from the road, through the door
                and across the floor, either supports that job or works against
                it. A beautiful facade that nobody notices from the road, a dark
                corner where the best product sits, a narrow entrance that makes
                visitors hesitate, a floor plan that sends customers in circles,
                a ceiling too low for the lights. These are design problems, and
                each one costs sales.
              </p>
              <p className="mt-3">
                An architect for a showroom in Rampur plans the whole experience:
                the approach, the frontage, the entrance, the display, the
                lighting, the movement, the back-of-house and the services.
              </p>
              <p className="mt-3">
                This page explains how a showroom is planned, how different
                showroom types need different layouts and how MTBOSS approaches
                showroom design and construction.
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
                Showroom Planning at a Glance
              </h3>
              <p className="mb-3">
                A showroom brings several areas together, each with its own job.
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
                        Frontage and facade
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visibility, large glass, signage, entrance
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Being seen and understood from the road
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Entrance and first impression
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Welcoming door, clear sightline, space to pause
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Making visitors feel invited
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Display and sales floor
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Product display, lighting, circulation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Showing products well and guiding movement
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Reception and consultation areas
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Seating, desks, privacy for discussion
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfortable, unhurried conversations
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Billing and delivery
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Counter, documentation, handover area
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Smooth, clear completion of the sale
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Storage and back-of-house
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Stock, packaging, staff areas, cleaning
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Efficiency without clutter on the floor
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Parking and loading
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Customer parking, delivery access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Easy arrival and stock handling
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Lighting, air conditioning, power, security, fire safety
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfort, safety and running cost
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Branding
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Signage, colours, materials, brand guidelines
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Consistency and recognition
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future changes
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Layout changes, expansion, new product lines
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Flexible floors and services
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your products, plot and budget matter more than any template.
                MTBOSS helps you plan a showroom that suits your actual
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
                Showroom Design and Construction Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your showroom project with the team to confirm scope,
                experience and arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Business and site study:</strong> Understanding your
                  products, customers, plot or premises and budget.
                </li>
                <li>
                  <strong>Showroom layout planning:</strong> Arranging display,
                  circulation, consultation, billing and storage.
                </li>
                <li>
                  <strong>Showroom building design:</strong> Plans, sections,
                  elevations and working drawings for a new showroom building.
                </li>
                <li>
                  <strong>Facade and elevation design:</strong> Frontage,
                  glazing, entrance, signage zones and materials.
                </li>
                <li>
                  <strong>Air conditioning and services coordination:</strong>{" "}
                  Planning with qualified services engineers.
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
                  <strong>Showroom renovation and refresh:</strong> Updating an
                  existing showroom&apos;s look, layout and services.
                </li>
                <li>
                  <strong>Extra floors and extensions:</strong> Adding area to an
                  existing commercial building.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting roofs, toilets and storage areas.
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
                Start With the Customer Journey
              </h3>
              <p className="mb-3">
                A good showroom follows the path a customer takes.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>See it:</strong> From the road, the showroom should be
                  visible, recognisable and inviting. Facade, signage, lighting
                  and parking all matter.
                </li>
                <li>
                  <strong>Enter it:</strong> The entrance should be easy,
                  unobstructed and welcoming. Avoid cluttered thresholds and
                  hidden doors.
                </li>
                <li>
                  <strong>Pause and look:</strong> Just inside, a clear space
                  lets visitors take in the showroom. Put your strongest display
                  or message in the line of sight.
                </li>
                <li>
                  <strong>Discuss:</strong> Provide comfortable seating and a
                  quiet area for conversation, comparing options and decisions.
                </li>
                <li>
                  <strong>Decide and pay:</strong> Make billing, documentation
                  and finance discussion clear and easy to reach.
                </li>
                <li>
                  <strong>Receive:</strong> If the product is delivered on site,
                  such as a vehicle, plan a clean, well-lit handover area.
                </li>
                <li>
                  <strong>Leave happy:</strong> Easy exit, clear parking and a
                  good last impression bring customers back.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of Showroom
              </h3>
              <p className="mb-3">
                Different products need different layouts.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Showroom type
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Car and Two-Wheeler Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan large glass frontage, high ceilings, strong
                        lighting, a spacious display floor, a customer lounge, a
                        delivery area, parking and often a service or workshop
                        link with separate access. Follow the brand&apos;s
                        guidelines for layout and finishes.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Furniture and Home Decor Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan room-like display settings, wide aisles, good
                        lighting, space for large items and storage. Allow
                        customers to imagine products in their homes.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Tiles, Sanitaryware and Building Materials Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan display walls and sample boards, bathroom or
                        kitchen set-ups, consultation desks and storage for
                        catalogues and samples. Plan strong floors and lighting
                        that shows colour and texture accurately.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Electronics and Appliance Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan secure displays, demonstration areas, strong power
                        and data cabling, cooling, queueing and a clear billing
                        and delivery process.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Jewellery Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan security, controlled access, consultation seating,
                        display lighting, strong rooms and discreet back areas.
                        Security and lighting are critical here.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Clothing, Footwear and Fashion Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan flexible display, trial rooms, mirrors, lighting,
                        storage and a smooth billing area.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Mobile and Gadget Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan compact, well-lit displays, demonstration points,
                        secure storage, a service desk and strong power and
                        data.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Medical, Optical and Specialty Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan consultation, fitting or testing areas, privacy,
                        hygiene and secure storage.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Multi-Brand or Large-Format Showroom
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan clear zones, signage, flexible display, wide
                        circulation and central consultation and billing points.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Principles for a Successful Showroom
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Visibility and Frontage
              </h4>
              <p className="mb-3">
                Customers should see the showroom from the road. Plan facade,
                glazing, signage, lighting and a clear entrance that read well
                day and night.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Easy Access and Parking
              </h4>
              <p className="mb-3">
                Customers avoid places that are hard to reach. Plan entrance,
                parking, turning space and, if needed, delivery or vehicle
                access.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Lighting That Sells
              </h4>
              <p className="mb-3">
                Good lighting makes products look their best. Plan general,
                display and accent lighting, and consider how daylight changes
                through the day.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Ceiling Height and Volume
              </h4>
              <p className="mb-3">
                Higher ceilings give a premium feel and suit large products.
                Mezzanines can add storage or display where height allows.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Flexible Floors
              </h4>
              <p className="mb-3">
                Products and displays change often. Plan open floors, flexible
                lighting and power points, and movable display units.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Circulation and Comfort
              </h4>
              <p className="mb-3">
                Wide, clear aisles, comfortable temperature, good air quality
                and seating make visitors stay longer.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Back-of-House Efficiency
              </h4>
              <p className="mb-3">
                Storage, packing, staff rooms and cleaning should be out of
                sight but easy to use.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Security and Safety
              </h4>
              <p className="mb-3">
                Plan secure doors, cameras, lighting, safe exits and fire safety
                with qualified professionals and applicable rules.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Durable, Easy-to-Clean Finishes
              </h4>
              <p className="mb-3">
                Showrooms see heavy foot traffic. Choose robust flooring,
                easy-to-clean surfaces and simple detailing, and protect the
                building with good waterproofing.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Showroom Interiors and Fit-Out
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Flooring:</strong> Choose a durable, attractive surface
                  suited to your products and traffic, such as tile, stone or
                  other options. Heavy items like vehicles or machines need
                  strong floors.
                </li>
                <li>
                  <strong>Ceilings:</strong> False ceilings can hide services and
                  shape lighting, but should suit the ceiling height and fire
                  safety needs.
                </li>
                <li>
                  <strong>Counters and reception:</strong> Make them visible and
                  welcoming, with space for staff, screens and papers.
                </li>
                <li>
                  <strong>Seating and lounge:</strong> Comfortable seating, a
                  quiet corner, drinking water and clean toilets.
                </li>
                <li>
                  <strong>Colours and materials:</strong> Align with your brand
                  and with the products. Keep the setting from overpowering the
                  display.
                </li>
                <li>
                  <strong>Signage and graphics:</strong> Plan positions during
                  design, not after finishing.
                </li>
                <li>
                  <strong>Air conditioning and ventilation:</strong> Plan with
                  the layout, not as an afterthought.
                </li>
                <li>
                  <strong>Power and data:</strong> Plan outlets for displays,
                  billing, screens, chargers and demonstration equipment.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a showroom in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Street and footfall:</strong> Study the road, nearby
                  shops, traffic and customer movement, because they affect
                  frontage, entrance and signage.
                </li>
                <li>
                  <strong>Parking and access:</strong> Many commercial areas are
                  crowded. Plan customer parking, delivery access and safe
                  pedestrian entry early.
                </li>
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean cooling, shading, glazing choices, roof
                  drainage and moisture control are important.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Ask for proper soil
                  assessment and structural advice, especially for multi-storey
                  buildings and large spans.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan slopes, outlets and
                  waterproofing from the start.
                </li>
                <li>
                  <strong>Local demand:</strong> Consider what your customers
                  expect and the price points in the area, and plan the showroom
                  accordingly.
                </li>
                <li>
                  <strong>Seasonal trade:</strong> Wedding, festival and harvest
                  seasons affect sales. Plan opening dates and construction
                  timelines around them.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Building bye-laws,
                  parking norms, signage rules and fire requirements vary. Check
                  what applies to your project with the right authorities and
                  professionals.
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
                Choose Your Showroom Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept and layout package:</strong> Business study,
                  customer journey and layout options.
                </li>
                <li>
                  <strong>Showroom building design package:</strong> Plans,
                  elevation and working drawings for a new showroom.
                </li>
                <li>
                  <strong>Facade and signage package:</strong> Frontage, glazing,
                  entrance and signage zones.
                </li>
                <li>
                  <strong>Interior design and fit-out package:</strong>{" "}
                  Ceilings, lighting, flooring, display units, counters and
                  finishes.
                </li>
                <li>
                  <strong>Turnkey showroom package:</strong> Design,
                  construction, fit-out and handover as one managed project.
                </li>
                <li>
                  <strong>Renovation and refresh package:</strong> Updating an
                  existing showroom&apos;s layout, look and services.
                </li>
                <li>
                  <strong>Extension package:</strong> Adding floors or area to an
                  existing building.
                </li>
                <li>
                  <strong>Phase-wise plan:</strong> One complete design built in
                  stages to match your budget and opening plan.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Showroom Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure, stairs and services.
                </li>
                <li>
                  <strong>Type of showroom:</strong> Vehicle, jewellery,
                  electronics and furniture showrooms have very different needs.
                </li>
                <li>
                  <strong>Frontage and glazing:</strong> Large glass, special
                  facade materials and signage structures add cost.
                </li>
                <li>
                  <strong>Structure and spans:</strong> Large open floors and
                  heavy loads need stronger structure.
                </li>
                <li>
                  <strong>Ceiling and lighting:</strong> False ceilings, display
                  lighting and special effects add to the budget.
                </li>
                <li>
                  <strong>Design changes:</strong> Changes after approval or
                  brand revisions during construction can add cost and delay.
                </li>
                <li>
                  <strong>Material prices and timing:</strong> Market rates,
                  lead times and the monsoon season affect planning.
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
                Budget Priorities for a Showroom Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Define your business plan and total
                  budget, including fit-out, display, signage and opening costs.
                </li>
                <li>
                  <strong>Second:</strong> Get the frontage and layout right.
                  Visibility, access and flow drive sales more than expensive
                  finishes.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure and services right.
                  Foundation, structure, power, air conditioning and fire safety
                  are costly to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Invest in lighting and display. They
                  are what customers see and what make products attractive.
                </li>
                <li>
                  <strong>Fifth:</strong> Protect the building. Waterproofing,
                  drainage and durable finishes reduce running costs.
                </li>
                <li>
                  <strong>Sixth:</strong> Choose finishes that look good and
                  last, and match your brand.
                </li>
                <li>
                  <strong>Seventh:</strong> Phase upgrades and extra floors if
                  needed, with structure and services ready for growth.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a Showroom Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your business,
                  products, plot or premises and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free calculator
                  on our website gives a starting estimate for the construction
                  budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share plot
                  or premises dimensions, location, photos and any brand
                  guidelines, and the team studies the site. For Rampur, the team
                  will confirm arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 4: Customer journey and requirements.</strong> You
                  and the team talk through products, customers, display,
                  consultation, billing, storage, parking and growth plans.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Describe your products, price range and target
                  customers.</strong>
                </li>
                <li>
                  <strong>Collect any brand or franchise design guidelines and
                  approved layouts.</strong>
                </li>
                <li>
                  <strong>Estimate the area you need for display, consultation,
                  storage, billing and parking.</strong>
                </li>
                <li>
                  <strong>Decide your realistic budget range, including fit-out,
                  furniture and signage.</strong>
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
                  type of business.</strong>
                </li>
                <li>
                  <strong>Think about your target opening date, and any seasonal
                  peak you want to catch.</strong>
                </li>
                <li>
                  <strong>Gather reference photos of showrooms you like and
                  dislike.</strong>
                </li>
                <li>
                  <strong>Decide who in the business or family will make final
                  decisions.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning a Showroom
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Designing the interior first and thinking about frontage and
                  visibility later.
                </li>
                <li>
                  Hidden or cluttered entrances that make customers hesitate.
                </li>
                <li>
                  Poor lighting that dulls products and creates glare.
                </li>
                <li>
                  Narrow aisles and dead-end corners.
                </li>
                <li>
                  Skipping soil checks, structural advice, fire safety and
                  approvals.
                </li>
                <li>
                  Choosing finishes that are hard to clean or maintain.
                </li>
                <li>
                  Ignoring brand guidelines until the building is half built.
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
                  <strong>Project type:</strong> New showroom, fit-out of a
                  rented space, renovation or extension.
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
                  <strong>Business details:</strong> Products, price range,
                  target customers and brand or franchise.
                </li>
                <li>
                  <strong>Brand guidelines:</strong> Any design standards or
                  approved layouts.
                </li>
                <li>
                  <strong>Area and spaces needed:</strong> Display,
                  consultation, billing, storage, delivery, parking and others.
                </li>
                <li>
                  <strong>Existing building:</strong> Drawings, photos and
                  condition, if renovating or extending.
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
                Why Consider MTBOSS as Your Architect for a Showroom in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Design starts with your customer:</strong> We study
                  your products, customers and plot before proposing a layout.
                </li>
                <li>
                  <strong>Facade, interiors and building under one roof:</strong>{" "}
                  Frontage, fit-out, construction and finishing planned together.
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
                  <strong>Free Budget Calculator:</strong> A simple starting
                  estimate for your construction budget.
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
                Rampur city, Civil Lines and surrounding commercial areas, and
                nearby towns such as Bilaspur, Milak, Shahabad, Swar and Tanda.
                Share your project location with the team, and they will confirm
                availability and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect for Showroom in Rampur
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
                If you are looking for an architect for a showroom in Rampur,
                MTBOSS offers a single point of contact for design, construction,
                fit-out and handover, supported by a free budget calculator and a
                simple online quote request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does an architect do for a showroom?</strong>
                  <br />
                  An architect studies your business, products and premises,
                  plans the layout, frontage, display, circulation and services,
                  designs the facade and interiors, prepares drawings,
                  coordinates structure and services, supports approvals where
                  applicable and can supervise construction. The exact scope is
                  written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide showroom design and
                  construction in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly, including commercial work.
                  Business owners in Rampur can contact the team with project
                  details to confirm scope, experience and arrangements.
                </li>
                <li>
                  <strong>Q3. Can you work with my brand&apos;s design
                  guidelines?</strong>
                  <br />
                  If your brand or franchise has design standards, share them
                  with the team at the start. They can be coordinated with the
                  layout and fit-out. Confirm scope with the team.
                </li>
                <li>
                  <strong>Q4. How can I make my showroom visible from the
                  road?</strong>
                  <br />
                  Plan a clear facade, good glazing, strong lighting, readable
                  signage, a welcoming entrance and easy parking. An architect
                  can test options on your actual premises.
                </li>
                <li>
                  <strong>Q5. Are large glass fronts a good idea in Rampur?</strong>
                  <br />
                  They can attract attention, but may overheat displays and raise
                  cooling costs in summer. Plan shading and suitable glazing.
                </li>
                <li>
                  <strong>Q6. Can you design just the interior of a rented
                  showroom?</strong>
                  <br />
                  Interior and fit-out design is possible for rented spaces,
                  subject to what the owner permits. Share your premises details
                  with the team to confirm scope.
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