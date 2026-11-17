import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan Safe, Clean and Efficient Healthcare Buildings
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A hospital is one of the most demanding buildings anyone can
                design. It has to run day and night. It has to move patients,
                doctors, nurses, visitors, ambulances, equipment, supplies and
                waste through the same building without confusion or risk. It
                has to stay clean, cool, well lit and quiet in places and fully
                equipped and ready in others.
              </p>
              <p className="mt-3">
                If a layout is poor, patients wait in the wrong corridors, staff
                waste time walking long distances and infection control becomes
                harder. If services fail, the consequences are serious.
              </p>
              <p className="mt-3">
                A good architect for a hospital in Rampur plans this complexity
                before the first brick is laid. This page explains how hospital,
                clinic and nursing home buildings are planned, which
                professionals work together, what to ask an architect, how to
                budget and phase the project and how MTBOSS approaches
                healthcare buildings.
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
                Hospital Planning at a Glance
              </h3>
              <p className="mb-3">
                A healthcare building brings many functions together. Here is
                what each needs.
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
                        Entrance, reception and waiting
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clear arrival, registration, seating, accessibility
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Easy wayfinding and patient comfort
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Outpatient department (OPD)
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Consultation rooms, waiting areas, queues, privacy
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Patient flow and comfort
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Emergency and casualty
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Direct ambulance access, quick triage, trolley movement
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Speed, access and separation from OPD
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Inpatient wards and rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Beds, nursing stations, toilets, ventilation, privacy
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Patient comfort, supervision and hygiene
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Intensive care units
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Close supervision, services, infection control
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Careful design with medical planners
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Operation theatres
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clean zones, controlled access, special services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Strict design with qualified specialists
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Diagnostics and imaging
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Labs, radiology rooms, shielding where needed
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safety, services and approvals
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Pharmacy and stores
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Secure storage, easy access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Supply flow and security
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Support services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Laundry, kitchen, waste, mortuary, plant rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Hygiene, discreet routes and compliance
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Parking and access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ambulance, visitor, staff and emergency vehicle access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Traffic flow and safety
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future expansion
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra beds, floors or departments
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure and services that can grow
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, services and budget matter more than any template.
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
                Healthcare Projects
              </h3>
              <p className="mb-3">
                Share your hospital, clinic or nursing home project with the
                team to confirm scope, experience and arrangements.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement study and site review:</strong>{" "}
                  Understanding your services, bed count, departments, plot and
                  budget.
                </li>
                <li>
                  <strong>Concept and master planning:</strong> Arranging
                  buildings, access, parking and future expansion on your plot.
                </li>
                <li>
                  <strong>Building design and drawings:</strong> Plans,
                  sections, elevations and working drawings.
                </li>
                <li>
                  <strong>Coordination with medical planners and engineers:</strong>{" "}
                  Working alongside the professionals who plan clinical, medical
                  gas, electrical, air conditioning and fire safety systems.
                </li>
                <li>
                  <strong>Circulation and zoning:</strong> Separating patient,
                  visitor, staff, ambulance and service flows.
                </li>
                <li>
                  <strong>Building elevation design:</strong> An exterior that
                  is clear, welcoming and suited to the area.
                </li>
                <li>
                  <strong>Interior design for healthcare spaces:</strong>{" "}
                  Reception, waiting areas, wards, corridors, ceilings, lighting
                  and durable, easy-to-clean finishes.
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
                  <strong>Renovation and extension of existing hospitals and
                  clinics:</strong>{" "}
                  Adding floors, wards or departments, and upgrading finishes
                  and services.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting roofs, toilets, plant rooms and kitchens.
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
                Who Plans a Hospital? Building the Right Team
              </h3>
              <p className="mb-3">
                A hospital is not designed by an architect alone. Plan to
                involve the right specialists early.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Hospital owner and doctors:</strong> Define the
                  services, specialities, bed numbers and how the hospital will
                  operate.
                </li>
                <li>
                  <strong>Architect:</strong> Plans the layout, circulation,
                  elevation, spaces and finishes, and coordinates the team.
                </li>
                <li>
                  <strong>Medical planner or healthcare consultant:</strong>{" "}
                  Advises on clinical planning, departments, equipment and
                  workflows, where the project requires it.
                </li>
                <li>
                  <strong>Structural engineer:</strong> Designs foundation,
                  columns, beams and slabs, including loads from equipment and
                  expansion.
                </li>
                <li>
                  <strong>MEP and services engineers:</strong> Plan air
                  conditioning, ventilation, plumbing, drainage, electrical
                  systems, power backup, medical gases, lifts and fire safety.
                </li>
                <li>
                  <strong>Specialist consultants:</strong> For radiology
                  shielding, operation theatre services, waste handling and
                  similar needs, as applicable.
                </li>
                <li>
                  <strong>Contractor and project manager:</strong> Builds to the
                  drawings with quality control and safety.
                </li>
                <li>
                  <strong>Authorities and regulators:</strong> Registration,
                  approvals and inspections.
                </li>
              </ul>
              <p className="mt-3">
                A good architect firm or company helps you coordinate this team.
                Ask any firm how they work with medical planners and engineers.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Principles for a Good Healthcare Building
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Clear Patient Flow
              </h4>
              <p className="mb-3">
                Patients should be able to find their way without confusion.
                Plan clear entrances, signage, short routes between related
                departments and separate paths for emergency patients,
                outpatients and inpatients.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Separation of Flows
              </h4>
              <p className="mb-3">
                Keep clean and dirty routes, visitors and staff, and ambulance
                and public traffic apart where possible. Good separation
                improves safety, hygiene and privacy.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Infection Control
              </h4>
              <p className="mb-3">
                Choose surfaces that are smooth, durable and easy to clean. Plan
                hand-wash points, ventilation, waste routes, laundry and
                separation of sensitive areas, with specialist advice.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Comfort and Dignity
              </h4>
              <p className="mb-3">
                Bright, calm waiting areas, privacy in consultation and wards,
                comfortable seating and thoughtful finishes help patients and
                families during stressful times.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Safety and Emergency Readiness
              </h4>
              <p className="mb-3">
                Plan fire exits, staircases, ramps, lifts, emergency lighting,
                power backup and evacuation routes with qualified professionals
                and applicable rules.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Accessibility
              </h4>
              <p className="mb-3">
                Ramps, wide doors, lifts, accessible toilets and easy movement
                for wheelchairs, stretchers and trolleys are essential, not
                optional.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Reliable Services
              </h4>
              <p className="mb-3">
                Water, power, ventilation, air conditioning and medical gas
                systems must be reliable and easy to maintain. Plan plant rooms,
                shafts and access early.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Flexibility and Growth
              </h4>
              <p className="mb-3">
                Medicine and technology change. Plan structure, services and the
                plot so that you can add beds, departments or equipment later
                without major disruption.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Main Departments
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Entrance, Reception and Waiting
              </h4>
              <p className="mb-3">
                Plan a visible, accessible entrance, registration counters,
                billing, seating, toilets, drinking water and signage. Keep
                ambulance access separate from the main entrance.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Outpatient Department
              </h4>
              <p className="mb-3">
                Group consultation rooms around waiting areas, with space for
                queues, privacy, examination and nearby diagnostics and
                pharmacy.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Emergency and Casualty
              </h4>
              <p className="mb-3">
                Provide direct, covered ambulance access, a clear triage area,
                space for trolleys and quick access to diagnostics, theatres
                and wards.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Inpatient Wards and Rooms
              </h4>
              <p className="mb-3">
                Plan nursing stations with good visibility, comfortable rooms
                and wards, attached toilets, ventilation, natural light where
                possible and space for visitors.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Intensive Care and Critical Care
              </h4>
              <p className="mb-3">
                These areas need close supervision, special services and strict
                infection control. Plan them with medical planners and services
                engineers.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Operation Theatres and Procedure Rooms
              </h4>
              <p className="mb-3">
                Plan access control, clean zones, scrub areas, recovery,
                services and ventilation with qualified specialists.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Diagnostics, Laboratory and Imaging
              </h4>
              <p className="mb-3">
                Plan sample flow, equipment space, power, water, ventilation and
                safety. Radiology rooms may need shielding and approvals, so
                involve the right experts.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Pharmacy and Stores
              </h4>
              <p className="mb-3">
                Plan secure storage, easy access for staff and patients and
                smooth delivery routes.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Support Services
              </h4>
              <p className="mb-3">
                Plan laundry, kitchen, linen, waste handling, mortuary, plant
                rooms and staff areas with discreet routes and good hygiene.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a hospital or clinic in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean cooling, ventilation, moisture control and
                  roof drainage are important in a building used day and night.
                </li>
                <li>
                  <strong>Catchment and services:</strong> Think about who you
                  will serve, the departments they need and how the hospital
                  will grow.
                </li>
                <li>
                  <strong>Plot and access:</strong> Road width, traffic and
                  ambulance access affect the layout. Clear, uncongested access
                  is vital.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Ask for proper soil
                  assessment and structural advice, especially for multi-storey
                  buildings and heavy equipment.
                </li>
                <li>
                  <strong>Power and water reliability:</strong> Plan power
                  backup, water storage and treatment from the start.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan slopes, outlets,
                  waterproofing and campus drainage carefully.
                </li>
                <li>
                  <strong>Local rules, registration and approvals:</strong>{" "}
                  Building bye-laws, fire requirements, clinical establishment
                  registration, biomedical waste rules and other approvals vary.
                  Check what applies to your project with the right authorities
                  and professionals.
                </li>
                <li>
                  <strong>Staff and operations:</strong> Plan staff areas, duty
                  rooms, changing rooms and service routes for efficient
                  operation.
                </li>
                <li>
                  <strong>Neighbourhood:</strong> Consider noise, parking and
                  the impact on nearby buildings.
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
                Planning by Type of Healthcare Project
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
                        Hospital or Nursing Home
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        A multi-department building with OPD, emergency, wards,
                        diagnostics, theatres and support services. Plan master
                        layout, circulation, structure and services together,
                        and build in phases if needed.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Clinic or Polyclinic
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Smaller scale, with consultation rooms, waiting area,
                        minor procedure space and pharmacy. Focus on patient
                        flow, privacy and efficient use of space.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Diagnostic Centre or Laboratory
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan sample flow, equipment space, shielding where
                        needed, power, water and waiting areas.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Dental, Eye or Specialty Clinic
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan specialised rooms, equipment layouts, services and
                        patient comfort.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Maternity, Child Care or Day-Care Facility
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan comfort, safety, privacy and hygiene, with
                        attention to the needs of mothers and children.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Rehabilitation or Elderly Care Facility
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan accessibility, safe movement, comfortable rooms and
                        common areas.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Pharmacy and Medical Store
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan storage, access, visibility and security.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Renovation or Extension of an Existing Facility
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Study the structure and services. Plan floors, wards or
                        departments in phases so that part of the facility can
                        keep running where possible.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Healthcare Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept and master plan package:</strong> Requirement
                  study, site planning and layout options.
                </li>
                <li>
                  <strong>Building design package:</strong> Plans, elevation and
                  working drawings, coordinated with medical planners and
                  engineers.
                </li>
                <li>
                  <strong>Interior and finishing design package:</strong>{" "}
                  Reception, waiting areas, wards, corridors, ceilings, lighting
                  and finishes.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Phase-wise construction package:</strong> One plan
                  built in stages, such as OPD and wards first and additional
                  departments later.
                </li>
                <li>
                  <strong>Clinic package:</strong> Planning and fit-out of
                  smaller healthcare spaces.
                </li>
                <li>
                  <strong>Extension package:</strong> Adding floors, wards or
                  departments to an existing building.
                </li>
                <li>
                  <strong>Renovation and upgrade package:</strong> Finishes,
                  toilets, waterproofing, electrical and plumbing upgrades.
                </li>
                <li>
                  <strong>Turnkey package:</strong> Design, construction,
                  finishing and handover as one managed project.
                </li>
                <li>
                  <strong>Maintenance and protection add-on:</strong>{" "}
                  Waterproofing, repair and pest-proofing for healthcare
                  buildings.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Hospital Construction Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure, lifts and services.
                </li>
                <li>
                  <strong>Type and number of departments:</strong> Operation
                  theatres, ICUs and imaging cost far more per area than general
                  wards and OPD.
                </li>
                <li>
                  <strong>Services complexity:</strong> Air conditioning,
                  medical gases, power backup, plumbing, drainage and fire
                  systems are a large part of the budget.
                </li>
                <li>
                  <strong>Structure and loads:</strong> Heavy equipment, large
                  spans and future expansion affect structural design.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring, wall
                  finishes, doors, ceilings and fittings in clinical areas have
                  special requirements.
                </li>
                <li>
                  <strong>Equipment and furniture:</strong> Medical equipment is
                  often budgeted separately from construction.
                </li>
                <li>
                  <strong>External works:</strong> Boundary walls, gates,
                  parking, ambulance access, drainage and landscaping.
                </li>
                <li>
                  <strong>Approvals and compliance:</strong> Requirements can
                  affect design and cost.
                </li>
                <li>
                  <strong>Phasing:</strong> Staging work can ease cash flow but
                  may affect overall cost and site management.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Budget Priorities for a Hospital Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Define services, bed numbers and
                  departments clearly with your medical team. This guides every
                  other decision.
                </li>
                <li>
                  <strong>Second:</strong> Get the master plan and circulation
                  right. A good plan saves money and effort for years.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure and services right.
                  Foundation, structure, power, water, drainage, ventilation and
                  fire safety are costly to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Invest in hygiene and durability.
                  Easy-to-clean finishes, good waterproofing and drainage reduce
                  long-term costs and risks.
                </li>
                <li>
                  <strong>Fifth:</strong> Plan critical areas carefully.
                  Emergency, ICU, theatres and diagnostics need specialist
                  input.
                </li>
                <li>
                  <strong>Sixth:</strong> Phase non-critical areas. Add
                  additional wards, departments or finishes in stages if the
                  budget requires, while keeping structure and services ready.
                </li>
                <li>
                  <strong>Seventh:</strong> Keep changes under control. Late
                  changes in a hospital are expensive.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a Healthcare Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact
                  MTBOSS through the website, phone or WhatsApp and share your
                  facility type, services, bed count, plot and budget.
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
                  the team talk through services, departments, growth plans and
                  budget. The team will advise where medical planners or
                  specialist consultants should be involved.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Define your vision:</strong> Hospital, nursing home,
                  clinic or diagnostic centre, and the services you plan to
                  offer.
                </li>
                <li>
                  <strong>Estimate bed numbers and departments now and in the
                  next five years.</strong>
                </li>
                <li>
                  <strong>Discuss with your doctors and medical team how they
                  expect the facility to run.</strong>
                </li>
                <li>
                  <strong>Decide your realistic budget range, equipment budget
                  and how you will phase the project.</strong>
                </li>
                <li>
                  <strong>Collect plot details:</strong> Dimensions, documents,
                  photos and any existing structure.
                </li>
                <li>
                  <strong>Note road width, traffic, ambulance access and parking
                  possibilities.</strong>
                </li>
                <li>
                  <strong>Check what registration, approvals and rules apply to
                  your type of facility.</strong>
                </li>
                <li>
                  <strong>Think about power backup, water supply and waste
                  handling.</strong>
                </li>
                <li>
                  <strong>Gather reference photos of healthcare buildings you
                  like and dislike.</strong>
                </li>
                <li>
                  <strong>Decide who in the management will make final
                  decisions.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning a Hospital
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Starting design without clear services, departments and bed
                  numbers.
                </li>
                <li>
                  Skipping medical planner and services engineer input.
                </li>
                <li>
                  Poor patient flow, confusing entrances and shared routes for
                  clean and dirty movement.
                </li>
                <li>
                  Weak ambulance access and parking.
                </li>
                <li>
                  Under-planning structure and services for equipment and future
                  growth.
                </li>
                <li>
                  Ignoring ventilation, air conditioning and power backup.
                </li>
                <li>
                  Choosing finishes that are hard to clean and maintain.
                </li>
                <li>
                  Weak waterproofing in toilets, roofs and plant rooms.
                </li>
                <li>
                  Skipping soil checks, structural advice, fire safety and
                  approvals.
                </li>
                <li>
                  Not planning for phased opening or expansion.
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
                  <strong>Project type:</strong> New hospital, nursing home,
                  clinic, diagnostic centre, extension or renovation.
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
                  <strong>Services and departments:</strong> What you plan to
                  offer now and later.
                </li>
                <li>
                  <strong>Bed numbers and capacity:</strong> Current and
                  planned.
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
                  <strong>Registrations and approvals:</strong> What you already
                  have and what is pending.
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
                Why Consider MTBOSS as Your Architect for a Hospital in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Planning starts with your services:</strong> We study
                  your facility, departments, plot and budget before proposing a
                  plan.
                </li>
                <li>
                  <strong>Honest about specialists:</strong> For clinical
                  planning, medical gases and specialised services, we recommend
                  involving the right medical planners and engineers.
                </li>
                <li>
                  <strong>Design and construction under one scope:</strong>{" "}
                  Planning, building, finishing and protection coordinated by
                  one team.
                </li>
                <li>
                  <strong>Attention to hygiene and durability:</strong> Design
                  choices consider cleaning, waterproofing, drainage and
                  pest-proofing.
                </li>
                <li>
                  <strong>Phase-wise planning:</strong> We can plan a master
                  layout and build in stages to match your budget and opening
                  plans.
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
                Contact MTBOSS: Architect for Hospital Projects in Rampur
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
                If you are looking for an architect for a hospital in Rampur,
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
                  <strong>Q1. What does an architect do for a hospital
                  project?</strong>
                  <br />
                  An architect studies your plot and requirements, plans
                  departments and circulation, prepares drawings, coordinates
                  with structural, services and medical planning professionals,
                  supports approvals where applicable and can supervise
                  construction. The exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide architecture and construction
                  for hospitals in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Healthcare owners in Rampur can
                  contact the team with project details to confirm scope,
                  experience and arrangements.
                </li>
                <li>
                  <strong>Q3. Do I need a medical planner as well as an
                  architect?</strong>
                  <br />
                  For larger hospitals and specialised departments, a medical
                  planner or healthcare consultant is strongly advised, along
                  with services engineers. For smaller clinics, the need depends
                  on the services offered. Ask the architect to advise.
                </li>
                <li>
                  <strong>Q4. How do I plan a hospital in phases?</strong>
                  <br />
                  Start with a master plan for the whole plot. Build the
                  essential departments first, such as OPD, emergency and wards,
                  and add other departments later, while keeping structure,
                  services and access ready for expansion.
                </li>
                <li>
                  <strong>Q5. What makes a hospital building easier to keep
                  clean?</strong>
                  <br />
                  Smooth, durable, easy-to-clean finishes, good ventilation,
                  well-planned waterproofing and drainage, separate routes for
                  clean and dirty movement and careful pest control all help.
                  Discuss these with the architect and medical team.
                </li>
                <li>
                  <strong>Q6. Can an existing clinic or hospital be extended
                  while it operates?</strong>
                  <br />
                  Often partly yes, with phased work, separated work zones,
                  controlled dust and noise and careful scheduling. Plan this
                  with the architect and the medical team at the start.
                </li>
                <li>
                  <strong>Q7. What registrations and approvals will I need?</strong>
                  <br />
                  Requirements vary by type of facility, size and area. They may
                  include building, fire, health establishment registration and
                  waste-related approvals. Ask the team what support is
                  included, and confirm the rules that apply with the
                  authorities.
                </li>
                <li>
                  <strong>Q8. How important are power backup and water
                  planning?</strong>
                  <br />
                  They are essential. A hospital must keep running during
                  outages, so plan power backup, water storage and plant rooms
                  from the start.
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