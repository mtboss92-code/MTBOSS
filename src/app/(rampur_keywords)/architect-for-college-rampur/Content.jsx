import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan a Campus That Teaches Well, Runs Smoothly and Can Grow
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A college is a small town that fills up every morning. Hundreds
                or thousands of students, teachers and staff arrive, move
                between lecture halls, labs, the library and the canteen, and
                leave again within a few hours. If the campus is planned well,
                movement is easy, classrooms are bright and quiet, labs work
                safely and the buildings can grow with admissions. If it is
                planned badly, the college lives with crowded corridors, hot
                lecture halls, a library nobody wants to use, too little parking
                and an expansion that needs the whole building to be broken
                open.
              </p>
              <p className="mt-3">
                An architect for a college in Rampur plans the whole campus
                before the first block is built. This page explains how a
                college campus is planned, what to ask an architect, how to
                phase construction and how MTBOSS approaches institutional
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
                College Planning at a Glance
              </h3>
              <p className="mb-3">
                A college campus brings several areas together, each with its
                own job.
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
                        Campus entry and parking
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Gate, drop-off, parking, safe pedestrian paths
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Traffic flow and safety
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Academic block
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Classrooms, lecture halls, staff rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Daylight, ventilation, acoustics
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Laboratories
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Services, storage, safety, ventilation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Specialist planning for each discipline
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Library and learning centre
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Quiet, light, seating, books, digital access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Comfort and growth
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Administration
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Offices, reception, records, meeting rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visibility and public access
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Auditorium and seminar hall
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Large span, acoustics, exits
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure, safety and crowd flow
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Canteen and common areas
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Dining, kitchen, seating, toilets
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Hygiene and capacity
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Hostels and staff housing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Rooms, mess, security
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safety and privacy
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Sports and open spaces
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Grounds, courts, gardens
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Drainage, shade and safety
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Power, backup, water, drainage, internet, fire safety
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Reliability
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future expansion
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        New blocks, floors, courses
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Master plan and structure that can grow
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your campus, courses and budget matter more than any template.
                MTBOSS helps you plan a college that suits your actual
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
                College Design and Construction Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your college project with the team to confirm scope,
                experience and arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement study and site review:</strong>{" "}
                  Understanding your courses, student numbers, plot and budget.
                </li>
                <li>
                  <strong>Campus master planning:</strong> Arranging blocks,
                  roads, parking, open space and future expansion on your plot.
                </li>
                <li>
                  <strong>Building design and drawings:</strong> Plans, sections,
                  elevations and working drawings for academic and support
                  buildings.
                </li>
                <li>
                  <strong>Classroom, lab and library planning:</strong> Layouts
                  for teaching, practical and study spaces.
                </li>
                <li>
                  <strong>Auditorium and seminar hall design:</strong> Large-span
                  spaces with acoustics and safe exits.
                </li>
                <li>
                  <strong>Construction and project management:</strong>{" "}
                  Execution to the approved design, with quality checks.
                </li>
                <li>
                  <strong>Renovation and extension:</strong> Adding floors,
                  blocks or facilities to an existing college.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting roofs, toilets and water tanks.
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
                Start With Courses, Numbers and Rules
              </h3>
              <p className="mb-3">
                A campus plan begins with the institution, not the building.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Which courses will you run now and later?</strong>{" "}
                  Arts, commerce, science, engineering, management, nursing,
                  teacher training or others each need different spaces.
                </li>
                <li>
                  <strong>How many students and staff?</strong> Plan area and
                  services for the numbers you expect, not just the first year.
                </li>
                <li>
                  <strong>What do affiliation and regulation require?</strong>{" "}
                  Affiliating universities and regulatory bodies often set norms
                  for built-up area, laboratories, library and facilities.
                  Confirm these with your advisers before the design is fixed.
                </li>
                <li>
                  <strong>How will you phase construction?</strong> Many colleges
                  build one block first and add others as admissions grow.
                </li>
                <li>
                  <strong>What is the budget, and who funds it?</strong> Trust,
                  society, company or loan, each with its own timeline.
                </li>
                <li>
                  <strong>When must the first block be ready?</strong> Many
                  colleges aim for an academic session or approval deadline.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Principles for a Good College Campus
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                A Clear Campus Layout
              </h4>
              <p className="mb-3">
                Plan a logical arrangement of blocks, with a clear entry, main
                axis or walkway, open spaces and easy wayfinding. Keep noisy
                areas such as sports and the canteen away from classrooms and
                the library.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Bright, Comfortable, Quiet Classrooms
              </h4>
              <p className="mb-3">
                Plan orientation, windows, shading, ventilation and acoustics.
                Hot, dark or noisy classrooms hurt learning.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Flexible Teaching Spaces
              </h4>
              <p className="mb-3">
                Courses and class sizes change. Plan classrooms that can be
                combined or divided, and rooms for seminars, tutorials and
                group work.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Safe Movement
              </h4>
              <p className="mb-3">
                Plan wide corridors, stairs, lifts where needed, ramps and clear
                exits for peak movement and emergencies, with qualified
                professionals and applicable rules.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Purpose-Built Laboratories
              </h4>
              <p className="mb-3">
                Labs need services, ventilation, storage, safety and strong
                floors. Plan them with subject experts and services engineers.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                A Library People Want to Use
              </h4>
              <p className="mb-3">
                Plan good light, quiet, comfortable seating, digital access and
                room for growth.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Hygiene and Welfare
              </h4>
              <p className="mb-3">
                Plan clean toilets, drinking water, a canteen, rest areas and
                first aid, with good drainage and easy cleaning.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Durable, Low-Maintenance Buildings
              </h4>
              <p className="mb-3">
                Campuses see heavy use. Choose strong floors, washable finishes,
                simple detailing and good waterproofing and drainage.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Room to Grow
              </h4>
              <p className="mb-3">
                Plan structure, utilities and land so that you can add blocks,
                floors or courses later.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Main Buildings
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Academic Block
              </h4>
              <p className="mb-3">
                Plan classrooms of varied sizes, lecture halls, staff rooms,
                department offices and toilets on each floor. Group related
                departments and keep circulation short.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Laboratories and Workshops
              </h4>
              <p className="mb-3">
                Plan each lab with its equipment, services and safety needs.
                Computer labs need cooling, power and cabling. Science and
                engineering labs may need special water, drainage, gas or
                ventilation planned with specialists.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Library and Learning Centre
              </h4>
              <p className="mb-3">
                Plan reading areas, stacks, digital zones, group study and staff
                areas, with strong floors for books and good lighting.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Administration and Entrance
              </h4>
              <p className="mb-3">
                Plan a clear, welcoming entrance, reception, principal&apos;s
                office, accounts, admissions and records, close to the gate and
                visitor parking.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Auditorium and Seminar Hall
              </h4>
              <p className="mb-3">
                Plan a large span, acoustics, stage, lighting, ventilation,
                exits and parking. Crowd safety matters.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Canteen and Common Areas
              </h4>
              <p className="mb-3">
                Plan a hygienic kitchen, dining space, waste handling, toilets
                and seating for peak times.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Hostels and Staff Quarters
              </h4>
              <p className="mb-3">
                Plan secure entry, comfortable rooms, bathrooms, mess and warden
                areas. See our hostel design guidance.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Sports, Open Spaces and Landscape
              </h4>
              <p className="mb-3">
                Plan grounds, courts, shade, drainage and planting. Trees and
                shaded areas improve comfort and are easy to plan early.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a college in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean shaded corridors, cross-ventilation, roof
                  drainage and moisture control are important.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan slopes, outlets, roof
                  waterproofing and campus drainage from the start.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Ask for proper soil
                  assessment and structural advice, especially for multi-storey
                  blocks, halls and libraries.
                </li>
                <li>
                  <strong>Plot and access:</strong> Road width, traffic, bus
                  access and pedestrian safety shape the layout.
                </li>
                <li>
                  <strong>Neighbourhood:</strong> Consider noise, parking and
                  the effect on nearby buildings.
                </li>
                <li>
                  <strong>Student mix:</strong> Many colleges serve local and
                  nearby-town students. Plan parking, transport and hostel needs
                  accordingly.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Building bye-laws,
                  fire requirements, affiliation, regulatory and recognition
                  norms vary. Check what applies to your college with the right
                  authorities and advisers.
                </li>
                <li>
                  <strong>Seasonal timing:</strong> Admission and exam cycles
                  affect construction schedules. Plan major works around
                  holidays and the monsoon.
                </li>
                <li>
                  <strong>Household and community preferences:</strong> If you
                  follow Vastu or other preferences, tell the architect at the
                  start, so they can be considered where possible.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of College Project
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        College project type
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        New Campus on a Fresh Plot
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Start with a master plan, then build in phases.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Single-Block College in a Town
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan compact, efficient floors, shared facilities and
                        parking.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Professional or Technical College
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan labs, workshops, seminar spaces and strong
                        services.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Girls&apos; or Women&apos;s College
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan secure entry, safe movement, comfortable common
                        areas and privacy.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Teacher Training or Nursing College
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan practical rooms, demonstration spaces, library and
                        hostels.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Extension or Extra Floors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Check the existing structure, foundation and approvals
                        before adding.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Renovation of an Existing College
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Repair roofs, toilets and finishes, upgrade services and
                        add facilities in phases.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your College Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Campus master plan package:</strong> Requirement study,
                  site planning and block layouts.
                </li>
                <li>
                  <strong>Academic building design package:</strong> Plans,
                  elevation and working drawings for classroom, lab and admin
                  blocks.
                </li>
                <li>
                  <strong>Specialist buildings package:</strong> Library,
                  auditorium, canteen and hostel design.
                </li>
                <li>
                  <strong>Interior design package:</strong> Reception, offices,
                  library and seminar rooms.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Phase-wise development plan:</strong> Build the first
                  block and essentials first, and add blocks later.
                </li>
                <li>
                  <strong>Extension and renovation package:</strong> Upgrade or
                  extend existing buildings.
                </li>
                <li>
                  <strong>Maintenance and protection add-on:</strong>{" "}
                  Waterproofing, repair and pest-proofing.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect College Construction Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure, stairs, lifts and services.
                </li>
                <li>
                  <strong>Type of spaces:</strong> Labs, auditoriums and
                  libraries cost more per area than plain classrooms.
                </li>
                <li>
                  <strong>Structure and spans:</strong> Halls and large rooms
                  need heavier structure.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring, doors,
                  windows, paint, ceilings and fittings.
                </li>
                <li>
                  <strong>Services:</strong> Plumbing, drainage, electrical,
                  ventilation, air conditioning, fire safety and internet.
                </li>
                <li>
                  <strong>Site conditions:</strong> Soil, levels, access and
                  neighbouring buildings.
                </li>
                <li>
                  <strong>Design changes and compliance:</strong> Changes after
                  approval or new regulatory requirements can add cost and
                  delay.
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
                Budget Priorities for a College Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Confirm courses, norms and total
                  budget, including furniture, equipment and services.
                </li>
                <li>
                  <strong>Second:</strong> Get the master plan right. A good
                  plan lets you build in phases without waste.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure and services right.
                  Foundation, structure, power, water and drainage are costly to
                  fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Build what you need for the first
                  session. Classrooms, toilets, drinking water, admin, library
                  space and safe circulation come first.
                </li>
                <li>
                  <strong>Fifth:</strong> Protect the buildings. Waterproofing
                  and drainage reduce long-term costs.
                </li>
                <li>
                  <strong>Sixth:</strong> Add labs, halls, hostels and sports
                  facilities in phases as funds and admissions allow.
                </li>
                <li>
                  <strong>Seventh:</strong> Keep changes under control. Late
                  changes cost more than early decisions.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a College Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your college
                  type, courses, plot and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free calculator
                  on our website gives a starting estimate for the construction
                  budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share plot
                  dimensions, location, photos and any existing buildings. For
                  Rampur, the team will confirm arrangements for visits and
                  meetings.
                </li>
                <li>
                  <strong>Step 4: Requirements and norms.</strong> You and the
                  team talk through courses, student numbers, facilities, growth
                  plans and the norms your advisers have identified.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning a College Building
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Designing one block without a master plan for the whole campus.
                </li>
                <li>
                  Ignoring affiliation and regulatory norms until late in the
                  design.
                </li>
                <li>
                  Poor orientation, causing hot, dark or noisy classrooms.
                </li>
                <li>
                  Narrow corridors and stairs that jam at class change.
                </li>
                <li>
                  Too little parking and poor bus access.
                </li>
                <li>
                  Under-planning labs, library and services for future courses.
                </li>
                <li>
                  Weak waterproofing and drainage.
                </li>
                <li>
                  Skipping soil checks, structural advice, fire safety and
                  approvals.
                </li>
                <li>
                  Not planning for construction around a running college.
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
                  <strong>Project type:</strong> New college, new block,
                  extension, hostel or renovation.
                </li>
                <li>
                  <strong>Location:</strong> Locality in Rampur or nearby, with a
                  map pin if possible.
                </li>
                <li>
                  <strong>Plot details:</strong> Size, shape, road frontage and
                  photos.
                </li>
                <li>
                  <strong>Courses and numbers:</strong> Present and planned
                  courses, students and staff.
                </li>
                <li>
                  <strong>Affiliation and norms:</strong> The university or body
                  you are affiliated to, and any requirements known.
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
                  <strong>Approvals status:</strong> What you already have and
                  what is pending.
                </li>
                <li>
                  <strong>Timeline:</strong> The session or date you aim to
                  open.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Consider MTBOSS as Your Architect for a College in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Planning starts with your courses and campus:</strong>{" "}
                  We study your institution, plot and budget before proposing a
                  plan.
                </li>
                <li>
                  <strong>Honest about specialists:</strong> For laboratories,
                  auditoriums and special services, we recommend involving the
                  right specialists and engineers.
                </li>
                <li>
                  <strong>Design and construction under one scope:</strong>{" "}
                  Planning, building, finishing and protection coordinated by
                  one team.
                </li>
                <li>
                  <strong>Phase-wise planning:</strong> We can plan a master
                  layout and build in stages to match your admissions and
                  budget.
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
                Rampur city, Civil Lines and surrounding areas, and nearby towns
                such as Bilaspur, Milak, Shahabad, Swar and Tanda. Share your
                project location with the team, and they will confirm
                availability and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect for College in Rampur
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
                If you are looking for an architect for a college in Rampur,
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
                  <strong>Q1. What does an architect do for a college
                  project?</strong>
                  <br />
                  An architect studies your courses, plot and budget, prepares
                  the campus master plan, designs classrooms, labs, library and
                  other buildings, coordinates structure and services, supports
                  approvals where applicable and can supervise construction. The
                  exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide college design and
                  construction in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Colleges in Rampur can contact
                  the team with project details to confirm scope, experience and
                  arrangements.
                </li>
                <li>
                  <strong>Q3. How do I plan a college campus in phases?</strong>
                  <br />
                  Start with a master plan for the whole plot. Build the first
                  academic block and essentials, such as toilets, drinking
                  water, admin and parking, first, and add labs, halls, hostels
                  and sports facilities later, keeping structure, services and
                  land ready for growth.
                </li>
                <li>
                  <strong>Q4. Do I need to follow affiliation and regulatory
                  norms in the design?</strong>
                  <br />
                  Affiliating universities and regulatory bodies often set norms
                  for built-up area, labs, library and facilities. Confirm them
                  with your advisers before the design is fixed, and share them
                  with the architect.
                </li>
                <li>
                  <strong>Q5. How can classrooms be kept comfortable in
                  summer?</strong>
                  <br />
                  Good orientation, shaded windows, cross-ventilation, roof
                  insulation and fans or other cooling help. Plan these at the
                  design stage.
                </li>
                <li>
                  <strong>Q6. Can a new block be added to an existing
                  college?</strong>
                  <br />
                  Yes, if the plot, services and approvals allow. Plan
                  connections to existing buildings, circulation, parking and
                  services, and minimise disturbance to classes.
                </li>
                <li>
                  <strong>Q7. Can construction continue while the college is
                  running?</strong>
                  <br />
                  It is possible with careful planning: separate site access,
                  safety barriers, noisy work outside class hours and use of
                  holidays for sensitive work.
                </li>
                <li>
                  <strong>Q8. Do you help with approvals?</strong>
                  <br />
                  Requirements vary by college type, university and area. Ask
                  the team what support is included, and confirm the rules that
                  apply with the authorities.
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