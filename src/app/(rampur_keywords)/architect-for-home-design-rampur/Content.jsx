import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Turn Your Ideas into a Home That Looks Good and Lives Well
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Everyone has a picture of their dream home. A cream and wood
                facade, a double-height living room, a jaali screen in the
                stairwell, a kitchen that opens to the dining area, a terrace
                garden. The picture is the easy part. The hard part is making it
                work on your plot, in Rampur&apos;s weather, with your
                family&apos;s routine and within your budget.
              </p>
              <p className="mt-3">
                An architect for home design in Rampur bridges that gap. Good
                home design is not only about how the house looks. It is about
                how the rooms connect, how light and air move, how the family
                lives day to day and how the house will age.
              </p>
              <p className="mt-3">
                This page walks through the design process: how to prepare, how
                a design develops, what styles and details to consider and how
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
                Home Design at a Glance
              </h3>
              <p className="mb-3">
                Design moves from big decisions to small ones.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Design stage
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What gets decided
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning priority
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Brief
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Needs, budget, priorities, style preferences
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Honest, clear priorities
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Site study
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plot shape, orientation, access, neighbours
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Light, air, privacy and approach
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Layout
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Rooms, stairs, parking, circulation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Daily routine and future needs
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Elevation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Facade, windows, balconies, entrance, materials
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Climate, style and street presence
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Detailing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Doors, windows, railings, niches, ceilings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfort, durability and cost
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Interiors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Furniture, storage, lighting, finishes, kitchen
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Function, mood and budget
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plumbing, electrical, ventilation, water, solar
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Planned before construction
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Review
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        2D and 3D views, changes, approval
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Decisions before drawings are final
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, family and budget matter more than any trend. MTBOSS
                helps you plan a design that suits your actual situation.
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
                Home Design Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your home project with the team to confirm scope and
                arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Design brief and requirement study:</strong> Turning
                  your ideas, family needs and budget into a clear brief.
                </li>
                <li>
                  <strong>Site and plot study:</strong> Understanding size,
                  shape, orientation, access and surroundings.
                </li>
                <li>
                  <strong>Custom floor plan design:</strong> Layouts shaped
                  around your family, not a standard template.
                </li>
                <li>
                  <strong>House elevation design:</strong> Facade, windows,
                  balconies, entrance and materials.
                </li>
                <li>
                  <strong>2D and 3D design views:</strong> Seeing your home
                  before it is built.
                </li>
                <li>
                  <strong>Interior design:</strong> Living areas, bedrooms,
                  wardrobes, ceilings, lighting and finishes.
                </li>
                <li>
                  <strong>Home construction and project management:</strong>{" "}
                  Execution to the approved design, with quality checks.
                </li>
                <li>
                  <strong>Renovation and remodelling design:</strong> Redesign
                  of existing homes.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting the home so the design lasts.
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
                Step 1: Prepare Your Design Brief
              </h3>
              <p className="mb-3">
                A clear brief saves time and money. Before you meet an
                architect, think about these points.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Family:</strong> Who will live in the house now, and
                  in ten years?
                </li>
                <li>
                  <strong>Daily routine:</strong> When do people wake, cook,
                  work, study, pray and entertain?
                </li>
                <li>
                  <strong>Rooms:</strong> Bedrooms, bathrooms, kitchen, living,
                  dining, study, prayer room, store room and guest room.
                </li>
                <li>
                  <strong>Parking and vehicles:</strong> How many cars and
                  two-wheelers now and later?
                </li>
                <li>
                  <strong>Storage:</strong> Wardrobes, pantry, utility space and
                  general storage.
                </li>
                <li>
                  <strong>Privacy:</strong> From neighbours, the street and
                  between family members.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Step 2: Let the Plot Guide the Design
              </h3>
              <p className="mb-3">
                A good home design begins with what the plot offers and demands.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Shape and size:</strong> Narrow, deep, corner or
                  irregular plots call for different solutions.
                </li>
                <li>
                  <strong>Orientation:</strong> Sun and wind direction affect
                  where to place living areas, bedrooms, kitchens and windows.
                </li>
                <li>
                  <strong>Road and entry:</strong> Position the gate, parking
                  and entrance for easy access.
                </li>
                <li>
                  <strong>Neighbouring buildings:</strong> They affect light,
                  privacy and where windows can open.
                </li>
                <li>
                  <strong>Levels and drainage:</strong> Plan plinth height and
                  rainwater flow.
                </li>
                <li>
                  <strong>Trees and existing structures:</strong> Decide what to
                  keep or remove.
                </li>
                <li>
                  <strong>Utilities:</strong> Plan water tank, sump, septic or
                  sewer, electrical meter and gas.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Step 3: Shape the Layout
              </h3>
              <p className="mb-3">
                The layout is the heart of the home. These principles help.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Group by function:</strong> Keep public areas such as
                  living and dining separate from private bedrooms.
                </li>
                <li>
                  <strong>Short, clear circulation:</strong> Avoid long passages
                  that waste area.
                </li>
                <li>
                  <strong>Smart stairs:</strong> Position the staircase where it
                  does not break up the main living space, and with good light.
                </li>
                <li>
                  <strong>Connect kitchen and dining:</strong> Make serving easy
                  and plan ventilation.
                </li>
                <li>
                  <strong>Place bathrooms together:</strong> Stack wet areas to
                  simplify plumbing.
                </li>
                <li>
                  <strong>Cross-ventilation:</strong> Place windows so air can
                  move through each room.
                </li>
                <li>
                  <strong>Natural light:</strong> Use windows, skylights, light
                  wells or courtyards where possible.
                </li>
                <li>
                  <strong>Flexibility:</strong> Create rooms that can serve more
                  than one purpose over time.
                </li>
                <li>
                  <strong>Storage built in:</strong> Plan wardrobes, niches and
                  pantry as part of the plan.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Step 4: Design the Elevation
              </h3>
              <p className="mb-3">
                The elevation is how your home greets the street. A good
                elevation also performs: it shades, ventilates and sheds rain.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Style Choices
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Modern minimal:</strong> Clean lines, flat surfaces,
                  large windows and a simple colour palette.
                </li>
                <li>
                  <strong>Contemporary:</strong> Mixed materials, bold forms and
                  varied textures.
                </li>
                <li>
                  <strong>Classic or traditional:</strong> Symmetry, arches,
                  columns and decorative details.
                </li>
                <li>
                  <strong>Local heritage inspired:</strong> Arches, jaali
                  patterns, balconies and detailing that reflect regional
                  character, applied thoughtfully rather than copied.
                </li>
                <li>
                  <strong>Fusion:</strong> A balance of modern forms with
                  traditional elements.
                </li>
              </ul>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Elevation Elements to Plan
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Entrance:</strong> Make it clear, welcoming and
                  protected from rain.
                </li>
                <li>
                  <strong>Windows and openings:</strong> Balance light,
                  ventilation, privacy and security.
                </li>
                <li>
                  <strong>Colours:</strong> Choose a palette that suits the
                  street and ages well in dust and sun.
                </li>
                <li>
                  <strong>Lighting:</strong> Plan exterior lights to highlight
                  features and add safety.
                </li>
                <li>
                  <strong>Boundary wall and gate:</strong> Make them part of the
                  overall design.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Step 5: Develop the Interiors
              </h3>
              <p className="mb-3">
                Good interiors make a home comfortable every day.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Living room:</strong> Plan seating, TV or media,
                  lighting and flow to the dining area.
                </li>
                <li>
                  <strong>Dining area:</strong> Choose table size and place it
                  close to the kitchen.
                </li>
                <li>
                  <strong>Kitchen:</strong> Plan layout, storage, chimney and
                  finishes. See our modular kitchen guidance.
                </li>
                <li>
                  <strong>Bedrooms:</strong> Plan bed position, wardrobes,
                  bedside storage, lighting and curtains.
                </li>
                <li>
                  <strong>Bathrooms:</strong> Choose fittings, tiles, storage
                  and ventilation with easy cleaning in mind.
                </li>
                <li>
                  <strong>Prayer or quiet space:</strong> Plan a calm corner or
                  room with appropriate light and privacy.
                </li>
                <li>
                  <strong>Study or work area:</strong> Plan desk space, power
                  points, lighting and quiet.
                </li>
                <li>
                  <strong>Ceilings and lighting:</strong> Combine general, task
                  and accent lighting, and consider false ceilings where they
                  help.
                </li>
                <li>
                  <strong>Flooring and finishes:</strong> Choose durable,
                  easy-to-clean materials that suit each room.
                </li>
                <li>
                  <strong>Furniture and storage:</strong> Plan built-in and
                  loose furniture to match the room sizes.
                </li>
                <li>
                  <strong>Colour and mood:</strong> Keep a consistent palette
                  across rooms, with variation for character.
                </li>
              </ul>
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
                  spaces bring light and air to inner rooms.
                </li>
                <li>
                  <strong>Roof design:</strong> Consider insulation, reflective
                  finishes and drainage.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Using 2D and 3D Views Well
              </h3>
              <p className="mb-3">
                Drawings and 3D views help you decide before construction starts.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Walk through the 2D plan:</strong> Imagine a typical
                  day. Where do you enter, cook, eat, sleep and store things?
                </li>
                <li>
                  <strong>Check furniture fit:</strong> Make sure beds, sofas,
                  tables and wardrobes fit with room to move.
                </li>
                <li>
                  <strong>Review the 3D views:</strong> Look at the facade,
                  windows, entrance and colours from the street.
                </li>
                <li>
                  <strong>Ask about materials:</strong> 3D views show style, but
                  you also need to know what material is used and how it will
                  age.
                </li>
                <li>
                  <strong>Make changes now:</strong> Changes on paper cost
                  little, while changes after construction cost a lot.
                </li>
                <li>
                  <strong>Confirm in writing:</strong> Approve the final
                  drawings and specifications before work begins.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                designing a home in Rampur and nearby areas.
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
                  compact. Vertical planning, light wells and smart storage
                  help.
                </li>
                <li>
                  <strong>Neighbours and privacy:</strong> Plan windows,
                  balconies and setbacks carefully.
                </li>
                <li>
                  <strong>Local character:</strong> Rampur has older, compact
                  neighbourhoods and newer colonies. A home should suit its
                  street and surroundings.
                </li>
                <li>
                  <strong>Joint families and growth:</strong> Many families plan
                  for several generations and future floors. Design structure
                  and services to allow this.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Building bye-laws,
                  setbacks and approvals vary by area. Check what applies to
                  your plot.
                </li>
                <li>
                  <strong>Household preferences:</strong> If you follow Vastu or
                  other preferences, tell the architect at the start so they can
                  be considered in the plan.
                </li>
                <li>
                  <strong>Material supply and labour:</strong> Plan the schedule
                  around material availability and the monsoon.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Home Design for Different Plots and Families
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Plot or family type
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Small or Narrow Plot
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Use vertical planning, light wells and compact stairs.
                        Stack bathrooms and kitchens. Use built-in storage, and
                        plan parking carefully.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Larger Plot
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Use open space for gardens, courtyards, parking and
                        future extensions. Orient rooms for light and breeze.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Corner Plot
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Take advantage of two street faces for light and a
                        strong elevation. Plan entry, parking and privacy
                        carefully.
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
                        Joint Family Home
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan separate living areas and privacy for each family
                        unit, shared spaces and a kitchen that works for more
                        than one cook.
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
                        Plan separate access, parking and noise separation
                        between business and family spaces.
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
                Choose Your Home Design Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept design package:</strong> Brief, plot study and
                  layout options.
                </li>
                <li>
                  <strong>House plan and elevation package:</strong> Floor
                  plans, elevation and working drawings.
                </li>
                <li>
                  <strong>3D design package:</strong> 3D views of the exterior
                  and key interior spaces for review.
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
                  <strong>Elevation materials:</strong> Stone, cladding, glass
                  and detailed work cost more than plain plaster and paint.
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
                Budget Priorities in Home Design
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
                  <strong>Sixth:</strong> Spend on the elements people see and
                  use every day, such as the entrance, kitchen and bathrooms.
                </li>
                <li>
                  <strong>Seventh:</strong> Upgrade later where it makes sense,
                  such as decorative elements and landscaping.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches Home Design
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact
                  MTBOSS through the website, phone or WhatsApp and share your
                  plot, family needs, style ideas and budget.
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
                <li>
                  <strong>Step 4: Design brief.</strong> You and the team talk
                  through family needs, rooms, parking, future plans, style and
                  budget.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Home Design Mistakes to Avoid
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Copying a house design from elsewhere without checking that it
                  fits your plot, orientation and family.
                </li>
                <li>
                  Choosing the facade first and the layout later.
                </li>
                <li>
                  Wasting area on long passages and oversized staircases.
                </li>
                <li>
                  Poor ventilation and light in bedrooms and bathrooms.
                </li>
                <li>
                  Too few sockets, switches and storage.
                </li>
                <li>
                  Ignoring plumbing and electrical planning until the walls are
                  built.
                </li>
                <li>
                  Choosing materials that look good in photos but do not suit
                  the climate or are hard to maintain.
                </li>
                <li>
                  Skipping soil checks, structural advice and approvals.
                </li>
                <li>
                  Weak waterproofing of the roof, bathrooms and walls.
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
                Why Consider MTBOSS as Your Architect for Home Design in Rampur
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
                  <strong>Look and function together:</strong> Elevation,
                  interiors, light, air and services are planned as one design.
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
                Contact MTBOSS: Architect for Home Design in Rampur
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
                    href="mailto:inquiry@mtboss.in"
                    className="text-blue-600 underline"
                  >
                    inquiry@mtboss.in
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
                If you are looking for an architect for home design in Rampur,
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
                  <strong>Q1. What does an architect do in home design?</strong>
                  <br />
                  An architect studies your plot and family needs, plans rooms
                  and circulation, designs the elevation and key interiors,
                  prepares drawings and specifications, coordinates structure
                  and services, supports approvals where applicable and can
                  supervise construction. The exact scope is written in the
                  agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide home design in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Home owners in Rampur can
                  contact the team with project details to confirm scope and
                  arrangements.
                </li>
                <li>
                  <strong>Q3. Can I see my home design before
                  construction?</strong>
                  <br />
                  A good design process includes 2D plans and, where included,
                  3D views, so you can review and change the design before
                  construction begins. Confirm this with the team at the start.
                </li>
                <li>
                  <strong>Q4. What if I already have a house plan from someone
                  else?</strong>
                  <br />
                  Share it with the team. They can review the layout and suggest
                  improvements, or prepare elevation and interior designs around
                  it. Confirm scope with the team.
                </li>
                <li>
                  <strong>Q5. How do I choose an elevation style?</strong>
                  <br />
                  Consider the street, your taste, your budget and the climate.
                  A good elevation is attractive, but also provides shade, sheds
                  rain and is easy to maintain. Reference photos help the
                  architect understand your taste.
                </li>
                <li>
                  <strong>Q6. Can you design the interiors and kitchen as
                  well?</strong>
                  <br />
                  MTBOSS lists Architecture &amp; Interior and Modular Kitchen
                  among its Quick Home Services. Share your project with the
                  team to confirm scope.
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