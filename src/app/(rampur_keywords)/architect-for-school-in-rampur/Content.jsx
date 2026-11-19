import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan Safe, Bright and Practical Learning Spaces
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A school building does a different job from a house or a shop.
                Hundreds of children arrive within a few minutes in the morning
                and leave together in the afternoon. They climb stairs, run in
                corridors, sit for hours in classrooms and play outdoors in the
                heat and rain. Teachers need to hear and be heard. Parents need
                a safe drop-off point. Management needs a building that is
                affordable to run and can grow as admissions increase.
              </p>
              <p className="mt-3">
                A good architect for a school in Rampur plans for all of this
                before the first brick is laid. This page explains how school
                buildings are planned, what to ask an architect, how to phase
                construction and budget and how MTBOSS approaches institutional
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
                School Planning at a Glance
              </h3>
              <p className="mb-3">
                A school plan brings many spaces together. Here is what to
                consider for each.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Space
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
                        Classrooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Daylight, ventilation, acoustics, space for desks and
                        movement
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Orientation, window design, comfortable seating
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Corridors and staircases
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Wide, safe circulation, strong railings, clear exits
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Crowd movement and safety
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Entrance and drop-off
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safe vehicle and pedestrian separation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Parking, queuing, gate control
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Playground and open areas
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safe surfaces, shade, drainage
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Space for play, assembly and events
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Laboratories and activity rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Services, storage, ventilation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safety, water, electrical and gas planning
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Library and computer room
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Quiet, light, power and cabling
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfort and future technology
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Assembly hall or multipurpose room
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Large span, acoustics, exits
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure, ventilation and flexibility
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Toilets and drinking water
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Hygiene, privacy, easy cleaning
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Water supply, drainage and maintenance
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Staff room and administration
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visibility, storage, privacy
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Supervision and parent meetings
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future expansion
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure and services that can grow
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra classrooms or floors
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, students and budget matter more than any template.
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
                School Projects
              </h3>
              <p className="mb-3">
                Share your school project with the team to confirm scope and
                arrangements.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement study and site review:</strong>{" "}
                  Understanding your student numbers, grades, programme, plot
                  and budget.
                </li>
                <li>
                  <strong>School master planning:</strong> Arranging blocks,
                  playground, parking, entrance and future expansion on your
                  plot.
                </li>
                <li>
                  <strong>Building design and drawings:</strong> Plans,
                  sections, elevations and working drawings for school
                  buildings.
                </li>
                <li>
                  <strong>Classroom and activity space planning:</strong>{" "}
                  Layouts for classrooms, labs, library, computer rooms and
                  activity areas.
                </li>
                <li>
                  <strong>Building elevation design:</strong> An exterior that
                  suits the school and the neighbourhood.
                </li>
                <li>
                  <strong>Interior design for school spaces:</strong>{" "}
                  Reception, staff room, library, labs, ceilings, lighting and
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
                  <strong>Renovation and extension:</strong> Adding classrooms,
                  floors or facilities to an existing school.
                </li>
                <li>
                  <strong>Waterproofing, repair and finishing:</strong>{" "}
                  Protecting roofs, walls, toilets and water tanks.
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
                Design Principles for a Good School Building
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Daylight and Ventilation
              </h4>
              <p className="mb-3">
                Children learn better in bright, comfortable rooms. Classrooms
                should have good natural light without glare, and
                cross-ventilation to manage heat and stuffiness. Orientation,
                window size, shading and fans or air movement all need planning.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Acoustics and Quiet
              </h4>
              <p className="mb-3">
                Noise travels in schools. Plan classroom placement away from the
                playground, assembly hall and busy roads where possible. Use
                ceilings, finishes and room layout to reduce echo.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Safety First
              </h4>
              <p className="mb-3">
                Wide corridors, strong staircases, safe railings, non-slip
                floors, rounded corners where possible and clear exits all
                matter. Plan fire safety, emergency exits and assembly points
                with qualified professionals and local requirements in mind.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Easy Supervision
              </h4>
              <p className="mb-3">
                A layout that lets teachers and staff see corridors, entrances
                and open areas makes supervision simpler. Avoid hidden corners
                and long, blind passages.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Comfort for All Children
              </h4>
              <p className="mb-3">
                Ramps, accessible toilets, comfortable furniture heights and
                easy movement help children of different ages and abilities.
                Consider the needs of younger children, who need special
                attention to safety and scale.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Durability and Low Maintenance
              </h4>
              <p className="mb-3">
                School buildings take heavy daily use. Choose strong,
                easy-to-clean finishes, durable flooring and simple detailing.
                Good waterproofing and drainage protect the building and reduce
                repair costs.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Flexibility and Growth
              </h4>
              <p className="mb-3">
                Schools grow. Plan structure, services and the plot layout so
                that you can add classrooms, floors or facilities later without
                major disruption.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Hygiene and Sanitation
              </h4>
              <p className="mb-3">
                Toilets, hand-wash areas and drinking water need good drainage,
                ventilation, supply and easy cleaning. Plan their location,
                number and maintenance carefully.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning Classrooms
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Size and layout:</strong> Plan for the number of
                  students, desks, teacher movement and display space.
                </li>
                <li>
                  <strong>Orientation and daylight:</strong> Position windows
                  for good light without direct glare or too much heat.
                </li>
                <li>
                  <strong>Ventilation:</strong> Cross-ventilation and fans or
                  other measures for hot months.
                </li>
                <li>
                  <strong>Seating and visibility:</strong> Make sure every child
                  can see the board and hear the teacher.
                </li>
                <li>
                  <strong>Storage:</strong> Space for bags, books and teaching
                  materials.
                </li>
                <li>
                  <strong>Wall and floor finishes:</strong> Durable, washable
                  surfaces.
                </li>
                <li>
                  <strong>Electrical points and lighting:</strong> Enough
                  lights, switches and sockets for current and future needs.
                </li>
                <li>
                  <strong>Doors and windows:</strong> Safe, easy to operate and
                  suitable for the climate.
                </li>
                <li>
                  <strong>Noise control:</strong> Placement away from noisy
                  areas and the use of ceilings and finishes.
                </li>
                <li>
                  <strong>Technology:</strong> Space and wiring for projectors,
                  smart boards or computers if planned.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning Corridors, Staircases and Exits
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Width and flow:</strong> Corridors and stairs must
                  handle the movement of many students at once.
                </li>
                <li>
                  <strong>Staircase design:</strong> Safe steps, strong
                  railings, non-slip surfaces and good lighting.
                </li>
                <li>
                  <strong>Separation of flows:</strong> Avoid junctions where
                  large groups meet.
                </li>
                <li>
                  <strong>Emergency exits:</strong> Clear, marked and
                  unobstructed routes.
                </li>
                <li>
                  <strong>Handrails and safety features:</strong> Suitable for
                  the age of the students.
                </li>
                <li>
                  <strong>Ramps and accessibility:</strong> Support for children
                  and staff who need them.
                </li>
                <li>
                  <strong>Fire safety and assembly points:</strong> Plan in line
                  with qualified advice and applicable rules.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Campus, Entrance and Drop-Off
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Safe entrance:</strong> A gate and approach that
                  separate pedestrians from vehicles.
                </li>
                <li>
                  <strong>Drop-off and pick-up area:</strong> Space for buses,
                  vans, cars and two-wheelers without blocking the road.
                </li>
                <li>
                  <strong>Parking:</strong> For staff, visitors and, if needed,
                  school transport.
                </li>
                <li>
                  <strong>Security and visibility:</strong> Gate control,
                  boundary walls, lighting and sightlines.
                </li>
                <li>
                  <strong>Playground and open areas:</strong> Safe surfaces,
                  shade, drainage and space for assembly and sports.
                </li>
                <li>
                  <strong>Landscaping:</strong> Trees and shaded areas help with
                  heat and comfort. Choose plants and layout with care.
                </li>
                <li>
                  <strong>Water, drainage and rainwater:</strong> Plan slopes,
                  drains and water storage so the campus stays usable in the
                  monsoon.
                </li>
                <li>
                  <strong>Future blocks:</strong> Reserve space for extra
                  classrooms, labs or halls.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Specialist Spaces to Plan Early
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Science and computer laboratories:</strong> Services,
                  ventilation, storage, safety and furniture.
                </li>
                <li>
                  <strong>Library and reading room:</strong> Light, quiet,
                  shelving and comfortable seating.
                </li>
                <li>
                  <strong>Art, music and activity rooms:</strong> Space,
                  storage and sound control.
                </li>
                <li>
                  <strong>Assembly hall or multipurpose room:</strong> Large
                  span, ventilation, acoustics, stage and exits.
                </li>
                <li>
                  <strong>Staff room and administration:</strong> Meeting
                  space, storage and privacy.
                </li>
                <li>
                  <strong>Medical or first-aid room:</strong> Easy access,
                  basic facilities and privacy.
                </li>
                <li>
                  <strong>Canteen or kitchen, if planned:</strong> Hygiene,
                  ventilation, storage and waste handling.
                </li>
                <li>
                  <strong>Water tank and plant rooms:</strong> Access for
                  maintenance and protection from leaks.
                </li>
              </ul>
              <p className="mt-3">
                Tell the architect early which of these you need now and which
                you plan later.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a school in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean cross-ventilation, shaded openings, covered
                  corridors and roof drainage are important.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan slopes, outlets, roof
                  waterproofing and campus drainage from the start.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Ask for proper soil
                  assessment and structural advice, especially for multi-storey
                  blocks and halls.
                </li>
                <li>
                  <strong>Plot and access:</strong> Road width, nearby traffic
                  and the approach for buses and vans affect the layout.
                </li>
                <li>
                  <strong>Neighbourhood:</strong> Consider noise, nearby
                  buildings and how the school will fit into the area.
                </li>
                <li>
                  <strong>Student growth:</strong> Plan for future admissions
                  and facilities.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Education board
                  norms, building bye-laws and approvals vary. Check what
                  applies to your school with the right authorities and
                  professionals.
                </li>
                <li>
                  <strong>Material supply and labour:</strong> Plan the schedule
                  around material availability and the monsoon.
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
                Planning Construction Around the School Year
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Build before the session:</strong> Aim to finish major
                  work before the academic year begins.
                </li>
                <li>
                  <strong>Phase the project:</strong> Complete classroom blocks
                  first, then halls, labs and other facilities.
                </li>
                <li>
                  <strong>Keep students safe during work:</strong> If building
                  next to an operating school, separate the site, control access
                  and schedule noisy work outside class hours.
                </li>
                <li>
                  <strong>Plan holidays and breaks:</strong> Use summer break
                  and other holidays for sensitive work such as roof and floor
                  repairs.
                </li>
                <li>
                  <strong>Allow for the monsoon:</strong> Plan roofing,
                  plastering and waterproofing around the rains.
                </li>
                <li>
                  <strong>Coordinate approvals:</strong> Allow time for
                  approvals and inspections.
                </li>
                <li>
                  <strong>Plan finishing and handover:</strong> Leave time for
                  painting, furniture, cleaning and final checks before students
                  arrive.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of School Project
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
                        New School Building
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Start with a master plan for the whole plot, then build
                        in phases. Keep space for growth.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Additional Classrooms or Floors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Check the existing structure, foundation and approvals
                        before adding. Plan staircases, services and safe access
                        during work.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Pre-Primary and Primary Section
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan for younger children: low windows, safe corners,
                        child-sized toilets, easy supervision and play areas.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Secondary and Senior Section
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan labs, library, computer rooms, activity rooms and
                        larger classrooms.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Hostel or Residential Facility
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan safe rooms, dining, laundry, supervision, hygiene
                        and emergency access.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Coaching Centre or Training Institute
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan flexible classrooms, waiting areas, parking and
                        good ventilation within a smaller footprint.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Renovation of an Existing School
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Study structure, services and safety. Plan repair,
                        waterproofing, toilets, electrical upgrades and
                        classroom improvements in phases.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your School Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept and master plan package:</strong> Requirement
                  study, site planning and layout options for the campus.
                </li>
                <li>
                  <strong>School building design package:</strong> Plans,
                  elevation and working drawings for classroom blocks and
                  facilities.
                </li>
                <li>
                  <strong>Interior and finishing design package:</strong>{" "}
                  Reception, library, labs, staff room, ceilings, lighting and
                  finishes.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Phase-wise construction package:</strong> One plan
                  carried out in stages to match your budget and admissions.
                </li>
                <li>
                  <strong>Extension package:</strong> Additional classrooms,
                  floors or facilities for an existing school.
                </li>
                <li>
                  <strong>Renovation and repair package:</strong> Repair,
                  waterproofing, toilets, electrical and finishing upgrades.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect School Construction Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure and services.
                </li>
                <li>
                  <strong>Type of spaces:</strong> Labs, halls, libraries and
                  kitchens cost more per area than simple classrooms.
                </li>
                <li>
                  <strong>Structure and spans:</strong> Halls and larger rooms
                  need heavier structure.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring, doors,
                  windows, paint, ceilings and furniture all affect cost.
                </li>
                <li>
                  <strong>Services:</strong> Plumbing, drainage, electrical,
                  ventilation, fire safety and data cabling.
                </li>
                <li>
                  <strong>Site and external works:</strong> Boundary walls,
                  gates, playground, drainage, paving and landscaping.
                </li>
                <li>
                  <strong>Safety features:</strong> Railings, exits, fire safety
                  systems and security features.
                </li>
                <li>
                  <strong>Phasing:</strong> Staging work can ease cash flow but
                  may affect overall cost and site management.
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
                Budget Priorities for a School Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Decide what must be ready for the
                  first session. Classrooms, toilets, drinking water, safe
                  stairs and exits come first.
                </li>
                <li>
                  <strong>Second:</strong> Get the master plan right. A good
                  plan allows you to build in phases without waste.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure right. Foundation,
                  columns, slabs and staircases are costly to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Plan services early. Water, drainage
                  and electrical systems should match the plan and future needs.
                </li>
                <li>
                  <strong>Fifth:</strong> Protect the building. Waterproofing,
                  drainage and durable finishes reduce long-term costs.
                </li>
                <li>
                  <strong>Sixth:</strong> Add facilities in phases. Labs, halls,
                  libraries and playground improvements can follow as funds
                  allow.
                </li>
                <li>
                  <strong>Seventh:</strong> Keep changes under control. Late
                  changes cost more than early decisions.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a School Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact
                  MTBOSS through the website, phone or WhatsApp and share your
                  school type, student numbers, plot and budget.
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
                  the team talk through grades, student numbers, facilities,
                  growth plans, safety and budget.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Note your school type, board or curriculum, grades and
                  expected student numbers now and in five years.</strong>
                </li>
                <li>
                  <strong>List the spaces you need:</strong> Classrooms, labs,
                  library, hall, staff room, toilets, canteen and playground.
                </li>
                <li>
                  <strong>Decide your realistic budget range and how you will
                  phase construction.</strong>
                </li>
                <li>
                  <strong>Collect plot details:</strong> Dimensions, documents,
                  photos and any existing buildings.
                </li>
                <li>
                  <strong>Note road width, nearby traffic and bus or van
                  access.</strong>
                </li>
                <li>
                  <strong>Check what approvals, recognition requirements and
                  building rules apply.</strong>
                </li>
                <li>
                  <strong>Think about safety needs:</strong> Exits, railings,
                  fire safety and security.
                </li>
                <li>
                  <strong>Decide opening timelines and the session you are
                  aiming for.</strong>
                </li>
                <li>
                  <strong>Decide who in the management will make final
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
                Common Mistakes When Planning a School Building
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Building classrooms first without a master plan for the plot.
                </li>
                <li>Ignoring growth in student numbers.</li>
                <li>
                  Under-planning corridors, staircases and exits.
                </li>
                <li>
                  Poor orientation, causing hot, dark or noisy classrooms.
                </li>
                <li>
                  Forgetting drop-off, parking and bus access.
                </li>
                <li>
                  Too few or poorly located toilets and drinking water points.
                </li>
                <li>
                  Skipping soil checks, structural advice and approvals.
                </li>
                <li>
                  Ignoring drainage and waterproofing, especially in the
                  monsoon.
                </li>
                <li>
                  Choosing finishes that are hard to maintain.
                </li>
                <li>
                  Not planning for construction around an operating school.
                </li>
                <li>
                  Splitting design, construction and finishing among agencies
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
                  <strong>School type and board:</strong> Pre-primary, primary,
                  secondary, senior secondary, coaching or hostel.
                </li>
                <li>
                  <strong>Student numbers:</strong> Current and planned over the
                  next few years.
                </li>
                <li>
                  <strong>Spaces needed:</strong> Classrooms, labs, library,
                  hall, staff room, canteen, playground and others.
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
                  <strong>Existing buildings:</strong> Drawings, photos and
                  condition, if extending or renovating.
                </li>
                <li>
                  <strong>Budget range and phasing:</strong> The amount you are
                  comfortable spending and when.
                </li>
                <li>
                  <strong>Approvals and recognition status:</strong> What you
                  already have and what is pending.
                </li>
                <li>
                  <strong>Timeline:</strong> The session or date you aim to
                  open.
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
                Why Consider MTBOSS as Your Architect for a School in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Planning starts with your school:</strong> We study
                  your students, programme, plot and budget before proposing a
                  plan.
                </li>
                <li>
                  <strong>Design and construction under one scope:</strong>{" "}
                  Planning, building, finishing and protection coordinated by
                  one team.
                </li>
                <li>
                  <strong>Attention to safety, light and ventilation:</strong>{" "}
                  Design choices consider children&apos;s comfort and movement.
                </li>
                <li>
                  <strong>Phase-wise planning:</strong> We can plan a master
                  layout and build in stages to match your budget and
                  admissions.
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
                <li>
                  <strong>Related services in-house:</strong> Waterproofing,
                  painting, plumbing, electrical, carpentry and pest control
                  through the same company.
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
                Contact MTBOSS: Architect for School Projects in Rampur
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
                If you are looking for an architect for a school in Rampur,
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
                  <strong>Q1. What does an architect do for a school
                  project?</strong>
                  <br />
                  An architect studies your plot and requirements, prepares the
                  campus master plan, designs classrooms and facilities, creates
                  drawings, coordinates structure and services, supports
                  approvals where applicable and can supervise construction. The
                  exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide architecture and construction
                  for schools in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Schools in Rampur can contact
                  the team with project details to confirm scope, experience and
                  arrangements.
                </li>
                <li>
                  <strong>Q3. How do I plan a school building in phases?</strong>
                  <br />
                  Start with a master plan for the whole plot, then build the
                  essential classrooms, toilets, water and safe circulation
                  first. Add halls, labs and other facilities later, while
                  keeping structure and services ready for growth.
                </li>
                <li>
                  <strong>Q4. How can a school classroom be made comfortable in
                  hot weather?</strong>
                  <br />
                  Good orientation, shaded windows, cross-ventilation, suitable
                  roof finishes and fans or other cooling measures help. Plan
                  these at the design stage.
                </li>
                <li>
                  <strong>Q5. What safety features should be planned in a school
                  building?</strong>
                  <br />
                  Wide corridors, strong staircases and railings, non-slip
                  floors, clear emergency exits, fire safety, good lighting and
                  supervision lines are key. Plan them with qualified
                  professionals and applicable rules in mind.
                </li>
                <li>
                  <strong>Q6. Can classrooms or floors be added to an existing
                  school?</strong>
                  <br />
                  It depends on the existing structure, foundation and approvals.
                  A structural assessment and proper design are needed before
                  extending.
                </li>
                <li>
                  <strong>Q7. Can construction be done while the school is
                  running?</strong>
                  <br />
                  It is possible with careful planning: separate site access,
                  safety barriers, noisy work outside class hours and use of
                  holidays for sensitive work. Plan this with the architect at
                  the start.
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