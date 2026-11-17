import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan a Compact, Safe and Efficient Healthcare Building
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A nursing home is a hospital that has to do a lot with a little.
                It may have ten, twenty or thirty beds, a small plot, a tight
                budget and a doctor-owner who needs it open as soon as possible.
                Yet it must still handle patients, relatives, staff, ambulances,
                medicines, laboratory samples, linen and waste without confusion
                or risk. Every square foot counts, and every design mistake is
                expensive: a corridor that is too narrow for a stretcher, a ward
                without ventilation, a theatre far from the ICU, an ambulance
                that cannot reach the entrance, a building that cannot add beds
                when demand grows.
              </p>
              <p className="mt-3">
                An architect for a nursing home in Rampur plans the compact
                building so that clinical work flows, patients are comfortable
                and the owner can phase the investment. This page explains how a
                nursing home is planned, how it differs from a large hospital,
                how an existing building can be converted and how MTBOSS
                approaches healthcare buildings.
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
                An Important Note on Regulation and Clinical Planning
              </h3>
              <p className="mb-3">
                Healthcare buildings are regulated. Registration, building and
                fire requirements, medical waste handling, radiology safety,
                minimum facilities and other rules depend on the type and size
                of the facility and on state and local laws, and they change.
              </p>
              <p className="mb-3">
                This page is general guidance only. It does not set out any
                specific rule, size or specification. Clinical planning, medical
                gases, theatre and ICU services and similar technical areas must
                be planned with the doctors, a medical planner where needed,
                qualified services engineers and the relevant authorities. Share
                your project with the MTBOSS team to confirm which parts of the
                design and construction they can support.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Nursing Home Planning at a Glance
              </h3>
              <p className="mb-3">
                A nursing home brings several areas together, each with its own
                job.
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
                        Easy wayfinding and comfort
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Outpatient clinic
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Consultation and examination rooms, waiting
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Patient flow and privacy
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
                        Speed and access
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Wards and rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        General, semi-private and private beds, nursing station
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visibility, hygiene and comfort
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Operation theatre
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clean zone, scrub, recovery, services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Specialist planning
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Labour room and nursery, if offered
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Privacy, hygiene, nearby theatre
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Careful design with doctors
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        ICU or high-dependency beds, if offered
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Close supervision, services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Specialist planning
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Diagnostics and pharmacy
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Lab, imaging, medicine store
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Access, security and supply flow
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Support spaces
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Laundry, kitchen, waste, store, staff rooms
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Discreet routes and hygiene
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Power backup, water, drainage, ventilation, fire safety,
                        lift
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
                        Extra beds, floors, departments
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
                MTBOSS helps you plan a nursing home that suits your actual
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
                Nursing Home Design and Construction Services Offered by MTBOSS
              </h3>
              <p className="mb-3">
                Share your project with the team to confirm scope, experience
                and arrangements for Rampur.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Requirement study and site review:</strong>{" "}
                  Understanding your services, bed count, plot and budget.
                </li>
                <li>
                  <strong>Concept and compact planning:</strong> Arranging
                  departments, circulation and entrances on your plot.
                </li>
                <li>
                  <strong>Building design and drawings:</strong> Plans, sections,
                  elevations and working drawings.
                </li>
                <li>
                  <strong>Coordination with doctors, medical planners and
                  engineers:</strong> Working alongside the professionals who
                  plan clinical, medical gas, electrical, ventilation and fire
                  safety systems.
                </li>
                <li>
                  <strong>Conversion planning:</strong> Converting an existing
                  house, clinic or commercial building into a nursing home.
                </li>
                <li>
                  <strong>Interior design for healthcare spaces:</strong>{" "}
                  Reception, waiting areas, wards, corridors, ceilings, lighting
                  and easy-to-clean finishes.
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
                  <strong>Extension and renovation:</strong> Adding floors, beds
                  or departments, and upgrading existing facilities.
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
                How a Nursing Home Differs From a Large Hospital
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Smaller scale:</strong> Fewer beds and departments, so
                  each space must work harder.
                </li>
                <li>
                  <strong>Tighter budgets:</strong> Owners often phase
                  construction and equipment.
                </li>
                <li>
                  <strong>Smaller plots:</strong> Many nursing homes sit on
                  compact plots in towns, where parking and ambulance access are
                  tight.
                </li>
                <li>
                  <strong>Owner-doctor involvement:</strong> The doctor-owner
                  often shapes the plan closely, so the architect needs to
                  understand how they work.
                </li>
                <li>
                  <strong>Conversion is common:</strong> Many nursing homes
                  start in converted houses or buildings, with their structural
                  and services limits.
                </li>
                <li>
                  <strong>Growth in stages:</strong> Many begin with a few beds
                  and add floors, theatres or ICU later.
                </li>
                <li>
                  <strong>Same duty of safety:</strong> Even a small facility
                  must meet hygiene, safety and regulatory standards.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Start With Your Services and Your Doctors
              </h3>
              <p className="mb-3">
                A nursing home plan begins with how care will be delivered.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Which services will you offer?</strong> General
                  medicine, surgery, maternity, orthopaedics, paediatrics, eye
                  care, dialysis or others.
                </li>
                <li>
                  <strong>How many beds now and later?</strong> Plan for growth,
                  but do not overbuild.
                </li>
                <li>
                  <strong>What mix of rooms?</strong> General ward beds,
                  semi-private rooms and private rooms.
                </li>
                <li>
                  <strong>Which departments do you need from day one?</strong>{" "}
                  OPD, emergency, theatre, labour room, ICU, laboratory, imaging,
                  pharmacy.
                </li>
                <li>
                  <strong>How will patients, staff and supplies move?</strong>{" "}
                  The shorter and clearer the routes, the better.
                </li>
                <li>
                  <strong>Who will work there?</strong> Doctors, nurses,
                  technicians and support staff, and the rooms and facilities
                  they need.
                </li>
                <li>
                  <strong>What is your budget, and what will you phase?</strong>{" "}
                  Many owners build the shell first and add equipment and
                  departments over time.
                </li>
                <li>
                  <strong>What approvals are needed, and when?</strong>{" "}
                  Registration, fire and waste approvals often shape the
                  timeline.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Principles for a Compact Nursing Home
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Simple, Clear Layout
              </h4>
              <p className="mb-3">
                Patients and relatives should find their way easily. Keep
                entrances, reception, OPD, emergency and wards in a clear
                sequence, with signage that is easy to read.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Separation of Flows
              </h4>
              <p className="mb-3">
                Keep clean and dirty movement, visitors and staff, and ambulance
                and public traffic apart where possible. On a small plot this
                takes careful planning.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Infection Control and Hygiene
              </h4>
              <p className="mb-3">
                Choose smooth, durable, easy-to-clean finishes, plan hand-wash
                points and ventilation, and separate waste routes. Plan
                sensitive areas with the doctors and specialists.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Comfort and Dignity
              </h4>
              <p className="mb-3">
                Bright, calm rooms, privacy in consultation and wards,
                comfortable seating for relatives and good ventilation matter to
                patients and families.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Safety and Emergency Readiness
              </h4>
              <p className="mb-3">
                Plan fire exits, stairs, ramps or a lift for stretchers,
                emergency lighting, power backup and evacuation routes with
                qualified professionals and applicable rules.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Accessibility
              </h4>
              <p className="mb-3">
                Wide doors, ramps, a stretcher-sized lift where there are upper
                floors, accessible toilets and easy movement for wheelchairs and
                trolleys are essential.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Reliable Services
              </h4>
              <p className="mb-3">
                Water, power, backup, ventilation, air conditioning where needed
                and medical gas systems must be reliable and easy to maintain.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Durable, Low-Maintenance Building
              </h4>
              <p className="mb-3">
                Choose strong floors, washable finishes and good waterproofing
                and drainage, especially in toilets, theatres, kitchens and
                roofs.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Room to Grow
              </h4>
              <p className="mb-3">
                Plan structure, services and the plot so that you can add beds,
                floors or departments later with limited disruption.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Main Spaces
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Entrance, Reception and Waiting
              </h4>
              <p className="mb-3">
                Plan an accessible entrance, registration and billing counter,
                seating, toilets and drinking water. Keep ambulance access
                separate from the main entrance.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                OPD and Consultation Rooms
              </h4>
              <p className="mb-3">
                Group rooms around a waiting area, with privacy, examination
                space and easy access to diagnostics and pharmacy.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Emergency
              </h4>
              <p className="mb-3">
                Provide direct, covered ambulance access, space for a trolley to
                turn, a triage area and quick routes to the theatre and wards.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Wards and Patient Rooms
              </h4>
              <p className="mb-3">
                Plan a nursing station with good visibility, beds with space for
                care and relatives, attached or nearby toilets, natural light
                and ventilation.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Operation Theatre and Recovery
              </h4>
              <p className="mb-3">
                Plan access control, scrub area, recovery space and services
                with qualified specialists. Keep it close to wards or ICU where
                possible.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Labour Room and Nursery
              </h4>
              <p className="mb-3">
                If offered, plan privacy, hygiene and a close link to the
                theatre.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                ICU or High-Dependency Unit
              </h4>
              <p className="mb-3">
                If offered, plan close supervision, special services and strict
                infection control with specialists.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Laboratory, Imaging and Pharmacy
              </h4>
              <p className="mb-3">
                Plan sample flow, equipment space, power, water and safety.
                Radiology rooms may need shielding and approvals.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Support Areas
              </h4>
              <p className="mb-3">
                Plan laundry, kitchen or pantry, waste storage, stores, plant
                rooms, staff rooms and a mortuary where applicable, with
                discreet routes.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Converting an Existing Building Into a Nursing Home
              </h3>
              <p className="mb-3">
                Many nursing homes begin in converted buildings. Before you
                commit, check:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Structure and floor loads:</strong> Can the building
                  take wards, equipment and a lift?
                </li>
                <li>
                  <strong>Layout fit:</strong> Can rooms, corridors and doors be
                  widened or rearranged safely?
                </li>
                <li>
                  <strong>Plumbing and drainage:</strong> Can they support many
                  bathrooms, theatres and kitchens?
                </li>
                <li>
                  <strong>Electrical load and backup:</strong> Is there capacity,
                  and space for a generator?
                </li>
                <li>
                  <strong>Ambulance and stretcher access:</strong> Is there a
                  ramp or lift, and is the entrance wide enough?
                </li>
                <li>
                  <strong>Ventilation and light:</strong> Do wards and rooms get
                  fresh air and daylight?
                </li>
                <li>
                  <strong>Fire safety and exits:</strong> Can stairs and exits
                  be made suitable?
                </li>
                <li>
                  <strong>Local permissions:</strong> Is a change of use
                  permitted, and what approvals are needed?
                </li>
                <li>
                  <strong>Cost versus new build:</strong> Sometimes a new
                  building costs less than heavy conversion.
                </li>
              </ul>
              <p className="mt-3">
                An architect and structural engineer can assess the building
                before you commit.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every city has its own conditions. Keep these in mind when
                planning a nursing home in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters mean cooling, ventilation, moisture control and
                  roof drainage are important in a building used day and night.
                </li>
                <li>
                  <strong>Catchment and services:</strong> Think about who you
                  will serve and which departments are most needed locally.
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
                  <strong>Rain and drainage:</strong> Plan slopes, outlets and
                  waterproofing carefully.
                </li>
                <li>
                  <strong>Local rules, registration and approvals:</strong>{" "}
                  Building bye-laws, fire, clinical establishment registration
                  and waste rules vary. Check what applies with the right
                  authorities and professionals.
                </li>
                <li>
                  <strong>Staff and operations:</strong> Plan duty rooms,
                  changing rooms and service routes for efficient operation.
                </li>
                <li>
                  <strong>Household and community preferences:</strong> If you
                  follow Vastu or other preferences, tell the architect at the
                  start. Healthcare layouts are largely governed by function,
                  safety and approvals, so these preferences may only be
                  possible for some elements.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Nursing Home Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Concept and feasibility package:</strong> Requirement
                  study, plot or building review and layout options.
                </li>
                <li>
                  <strong>Nursing home design package:</strong> Plans, elevation
                  and working drawings, coordinated with doctors and engineers.
                </li>
                <li>
                  <strong>Conversion package:</strong> Assessment, design and
                  works for turning an existing building into a nursing home.
                </li>
                <li>
                  <strong>Interior and finishing design package:</strong>{" "}
                  Reception, wards, corridors, ceilings, lighting and finishes.
                </li>
                <li>
                  <strong>Design and build package:</strong> Design, estimate
                  and construction under one team and one scope.
                </li>
                <li>
                  <strong>Phase-wise development plan:</strong> Open with
                  essential departments first, and add beds, floors or services
                  later.
                </li>
                <li>
                  <strong>Extension and upgrade package:</strong> Add floors or
                  beds, and upgrade toilets, waterproofing and finishes.
                </li>
                <li>
                  <strong>Maintenance and protection add-on:</strong>{" "}
                  Waterproofing, repair and pest-proofing.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included. Medical equipment
                is usually outside a general architect or contractor&apos;s
                scope.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Nursing Home Construction Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure, stairs, a lift and services.
                </li>
                <li>
                  <strong>Type and number of departments:</strong> Theatres,
                  ICU, labour room and imaging cost more per area than general
                  wards and OPD.
                </li>
                <li>
                  <strong>Services complexity:</strong> Air conditioning, medical
                  gases, power backup, plumbing, drainage and fire systems.
                </li>
                <li>
                  <strong>New build or conversion:</strong> Conversion may need
                  strengthening, new plumbing and electrical work.
                </li>
                <li>
                  <strong>Specifications and finishes:</strong> Flooring, wall
                  finishes, doors, ceilings and fittings in clinical areas have
                  special requirements.
                </li>
                <li>
                  <strong>Lift:</strong> A stretcher lift adds cost, but is often
                  essential above the ground floor.
                </li>
                <li>
                  <strong>Equipment and furniture:</strong> Medical equipment and
                  beds are usually budgeted separately.
                </li>
                <li>
                  <strong>Approvals and compliance:</strong> Requirements can
                  affect design and cost.
                </li>
                <li>
                  <strong>Phasing:</strong> Staging work can ease cash flow, but
                  may affect overall cost and site management.
                </li>
                <li>
                  <strong>Site conditions:</strong> Soil, levels, access and
                  neighbouring buildings.
                </li>
                <li>
                  <strong>Design changes:</strong> Changes after approval can add
                  cost and delay.
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
                Budget Priorities for a Nursing Home Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Define services, beds and a realistic
                  total budget, including equipment, which is usually separate.
                </li>
                <li>
                  <strong>Second:</strong> Get the layout and flows right. A
                  compact, clear plan saves staff time every day.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure and services right.
                  Foundation, structure, power, water, drainage, ventilation and
                  fire safety are costly to fix later.
                </li>
                <li>
                  <strong>Fourth:</strong> Invest in hygiene and durability.
                  Easy-to-clean finishes and strong waterproofing reduce
                  long-term costs and risks.
                </li>
                <li>
                  <strong>Fifth:</strong> Plan critical areas carefully.
                  Emergency, theatre, ICU and diagnostics need specialist input.
                </li>
                <li>
                  <strong>Sixth:</strong> Phase non-critical areas. Add beds,
                  departments or finishes in stages, while keeping structure and
                  services ready.
                </li>
                <li>
                  <strong>Seventh:</strong> Keep changes under control. Late
                  changes in a healthcare building are expensive.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a Nursing Home Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your
                  services, bed count, plot or building and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free calculator
                  on our website gives a starting estimate for the construction
                  budget.
                </li>
                <li>
                  <strong>Step 3: Site details and study.</strong> You share plot
                  or building details, location, photos and any drawings. For
                  Rampur, the team will confirm arrangements for visits and
                  meetings.
                </li>
                <li>
                  <strong>Step 4: Requirements and priorities.</strong> You and
                  the team talk through services, departments, flows, growth
                  plans and budget. The team will advise where medical planners
                  or specialist engineers should be involved.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning a Nursing Home
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Starting design without clear services, bed numbers and doctor
                  input.
                </li>
                <li>
                  Corridors, doors and lifts too small for stretchers and
                  trolleys.
                </li>
                <li>
                  Weak ambulance access and no covered drop-off.
                </li>
                <li>
                  Wards with poor light, ventilation or nursing visibility.
                </li>
                <li>
                  Mixing clean and dirty routes.
                </li>
                <li>
                  Under-planning power backup, water and drainage.
                </li>
                <li>
                  Weak waterproofing in toilets, theatres and roofs.
                </li>
                <li>
                  Converting a building without a structural and services check.
                </li>
                <li>
                  Skipping soil checks, structural advice, fire safety and
                  approvals.
                </li>
                <li>
                  Not planning for pest control and hygiene.
                </li>
                <li>
                  Not planning for growth, so adding beds means major
                  rebuilding.
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
                  <strong>Project type:</strong> New nursing home, conversion,
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
                  <strong>Services and departments:</strong> What you plan to
                  offer now and later.
                </li>
                <li>
                  <strong>Bed numbers and room mix:</strong> Current and
                  planned.
                </li>
                <li>
                  <strong>Existing drawings or building condition:</strong> If
                  converting or extending.
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
                  <strong>Timeline:</strong> The date you aim to open.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Consider MTBOSS as Your Architect for a Nursing Home in
                Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Planning starts with your services and plot:</strong>{" "}
                  We study your facility, flows, plot or building and budget
                  before proposing a plan.
                </li>
                <li>
                  <strong>Honest about specialists:</strong> For clinical
                  planning, medical gases and specialised services, we recommend
                  involving doctors, medical planners and engineers.
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
                Rampur city, Civil Lines and surrounding areas, and nearby towns
                such as Bilaspur, Milak, Shahabad, Swar and Tanda. Share your
                project location with the team, and they will confirm
                availability and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect for Nursing Home in Rampur
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
                If you are looking for an architect for a nursing home in
                Rampur, MTBOSS offers a single point of contact for planning,
                design, construction and handover, supported by a free budget
                calculator and a simple online quote request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does an architect do for a nursing home?</strong>
                  <br />
                  An architect studies your services, plot and budget, plans
                  departments, wards and circulation, prepares drawings,
                  coordinates with doctors, medical planners and engineers,
                  supports approvals where applicable and can supervise
                  construction. The exact scope is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide nursing home design and
                  construction in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Doctors and owners in Rampur
                  can contact the team with project details to confirm scope,
                  experience and arrangements.
                </li>
                <li>
                  <strong>Q3. Can I convert an existing house or building into a
                  nursing home?</strong>
                  <br />
                  Often yes, but the structure, plumbing, electrical load, fire
                  safety, ambulance access and local permissions must be checked
                  first. An architect and structural engineer can assess the
                  building.
                </li>
                <li>
                  <strong>Q4. Do I need a lift in a small nursing home?</strong>
                  <br />
                  If patients are on upper floors, a stretcher-sized lift or
                  suitable ramp is usually essential. Check what rules apply to
                  your facility.
                </li>
                <li>
                  <strong>Q5. Can I build in phases?</strong>
                  <br />
                  Yes, if the master plan, structure and services are planned
                  for it. For example, you can open with OPD, wards and a small
                  theatre, and add ICU, extra beds or floors later.
                </li>
                <li>
                  <strong>Q6. Do I need a medical planner as well as an
                  architect?</strong>
                  <br />
                  For specialised departments, a medical planner or healthcare
                  consultant and services engineers are strongly advised. For a
                  very small facility, the need depends on the services offered.
                  Ask the architect to advise.
                </li>
                <li>
                  <strong>Q7. How do I keep a nursing home comfortable in hot
                  weather?</strong>
                  <br />
                  Good orientation, cross-ventilation, shading, roof insulation
                  and suitable cooling help. Plan these at the design stage with
                  the services engineer.
                </li>
                <li>
                  <strong>Q8. Do you help with registration and approvals?</strong>
                  <br />
                  Requirements vary by facility, size and area. Ask the team
                  what support is included, and confirm the rules that apply
                  with the authorities.
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