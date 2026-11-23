import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Plan the Layout, the Building and the Civil Work Around Your Process
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A factory is built around a process. Raw material comes in,
                machines turn it into a product, workers move between stations,
                finished goods go out and waste, water, power and heat have to
                be managed all along the way. The building is only successful if
                it serves that flow. A shed that looks fine on paper but forces
                trucks to reverse across the loading area, puts the stores far
                from the line, traps heat under the roof or cannot take the next
                machine you buy is a costly mistake that you live with every day.
              </p>
              <p className="mt-3">
                An architect for a factory in Rampur starts with your process,
                products and growth plans, and plans the site, the buildings and
                the civil works around them. This page explains how a factory is
                planned, how structure, utilities and safety fit together, who
                does what in an industrial project and how MTBOSS approaches the
                design and civil construction side.
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
                An Important Note on Industrial Safety and Regulation
              </h3>
              <p className="mb-3">
                Factories are subject to rules on building, fire safety, worker
                safety, environment, electrical installations, hazardous
                materials and more. Requirements depend on the type of industry,
                the size of the unit, the materials handled and the location,
                and they change over time.
              </p>
              <p className="mb-3">
                This page is general guidance only. It does not set out any
                specific rule, distance, load or specification. Process design,
                machinery layout, hazardous-area classification, effluent and
                emission systems, boilers, pressure systems and similar
                technical areas must be handled by qualified process, safety and
                environmental professionals and approved by the right
                authorities. Share your project with the MTBOSS team to confirm
                which parts of the design and civil work they can support.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factory Planning at a Glance
              </h3>
              <p className="mb-3">
                A factory site brings many functions together.
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
                        Plot and access
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Road frontage, gate, truck entry and exit, turning space
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Smooth movement of vehicles and goods
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Production hall
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clear span, height, strong floor, daylight, ventilation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Process flow, machine layout and future change
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Raw material and finished goods stores
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Space, loading, protection from weather and pests
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Efficient material handling
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Loading and unloading
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Docks, platforms, truck parking, weighbridge if needed
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safe, fast truck handling
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Utilities
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Power, backup, water, compressed air, drainage
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Reliability and capacity
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Administration and offices
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Staff, management, visitors, records
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visibility, comfort and separation from noise
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Worker welfare
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Toilets, canteen, rest areas, drinking water, first aid
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Health, safety and legal requirements
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Safety and fire protection
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Exits, fire systems, signage, assembly points
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Protecting people and property
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Waste and environment
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Waste storage, drainage, effluent handling where needed
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Compliance and cleanliness
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Security
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Boundary, gate, cameras, lighting
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Protection of goods and equipment
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Future expansion
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Extra bays, machines, floors or buildings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Structure, utilities and land that can grow
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your products, process and budget matter more than any template.
                MTBOSS helps you plan the parts of the project that suit your
                actual situation.
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
                Design and Civil Services MTBOSS Can Discuss for Factory
                Projects
              </h3>
              <p className="mb-3">
                Share your project with the team to confirm scope, experience
                and arrangements for Rampur. Process design, machinery,
                specialised utilities and some approvals are normally handled by
                process engineers, equipment suppliers and specialist
                consultants.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Business and site study:</strong> Understanding your
                  products, process, production plans, plot and budget.
                </li>
                <li>
                  <strong>Site and master planning support:</strong> Arranging
                  buildings, roads, parking, yards and future expansion on your
                  plot.
                </li>
                <li>
                  <strong>Factory building design:</strong> Plans, sections,
                  elevations and working drawings for production halls, stores
                  and ancillary buildings.
                </li>
                <li>
                  <strong>Structural coordination:</strong> Working with
                  structural engineers on foundations, columns, trusses or
                  portal frames, floors and roofs.
                </li>
                <li>
                  <strong>Civil construction:</strong> Foundations, floors,
                  walls, roads, drains, boundary walls and finishing, as scoped.
                </li>
                <li>
                  <strong>Administration block and welfare buildings:</strong>{" "}
                  Offices, canteen, toilets, rest rooms and security cabins.
                </li>
                <li>
                  <strong>Interior design and fit-out for offices and
                  showrooms:</strong> For the admin block and any display or
                  sales area.
                </li>
                <li>
                  <strong>Estimate and budget planning:</strong> An item-wise
                  cost outline for design and civil works, supported by the free
                  Budget Calculator.
                </li>
                <li>
                  <strong>Project management and quality checks:</strong>{" "}
                  Execution to the approved drawings, with checks at key stages.
                </li>
                <li>
                  <strong>Renovation, extension and repair:</strong> Upgrading
                  existing sheds, floors, roofs and buildings.
                </li>
                <li>
                  <strong>Waterproofing, repair and pest-proofing:</strong>{" "}
                  Protecting roofs, stores, toilets and water tanks.
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
                Who Does What in a Factory Project
              </h3>
              <p className="mb-3">
                A factory is a team effort. Understanding the roles helps you
                plan.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Owner or promoter:</strong> Holds the land, the
                  business plan and the responsibility for approvals and
                  operations.
                </li>
                <li>
                  <strong>Process or industrial engineer:</strong> Plans the
                  production process, machine layout and material flow.
                </li>
                <li>
                  <strong>Architect or design team:</strong> Plans the site,
                  buildings, circulation and welfare facilities, and coordinates
                  drawings with the process requirements.
                </li>
                <li>
                  <strong>Structural engineer:</strong> Designs foundations,
                  frames, floors and roofs for loads, spans and equipment.
                </li>
                <li>
                  <strong>MEP and utilities engineers:</strong> Plan power,
                  water, drainage, ventilation, compressed air and fire
                  protection.
                </li>
                <li>
                  <strong>Safety and environmental consultants:</strong> Advise
                  on worker safety, fire, effluent, emissions and compliance.
                </li>
                <li>
                  <strong>Equipment suppliers:</strong> Supply and install
                  machinery and specialised systems.
                </li>
                <li>
                  <strong>Pre-engineered building (PEB) supplier, where
                  used:</strong> Designs and supplies the steel frame and
                  sheeting.
                </li>
                <li>
                  <strong>Civil contractor:</strong> Builds foundations, floors,
                  walls, drains, roads and finishes.
                </li>
                <li>
                  <strong>Authorities and regulators:</strong> Approvals,
                  licences and inspections.
                </li>
              </ul>
              <p className="mt-3">
                A good architect or company helps coordinate these parties and
                makes sure that the building and civil work fit the process and
                approvals.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Start With Your Process and Your Growth Plan
              </h3>
              <p className="mb-3">
                A factory begins with questions about production, not about
                walls.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>What do you make, and how?</strong> Steps, machines,
                  materials and quality needs.
                </li>
                <li>
                  <strong>What is your production volume now and in five
                  years?</strong>{" "}
                  Plan space, utilities and structure for growth.
                </li>
                <li>
                  <strong>How do materials move?</strong> From truck to store to
                  line to dispatch. Shorter, simpler paths save money every day.
                </li>
                <li>
                  <strong>What equipment will you install?</strong> Weight, size,
                  height, vibration, power and services.
                </li>
                <li>
                  <strong>What are the working conditions?</strong> Heat, noise,
                  dust, fumes, cleanliness and daylight.
                </li>
                <li>
                  <strong>How many workers will you have?</strong> Plan welfare,
                  safety, parking and circulation.
                </li>
                <li>
                  <strong>What storage do you need?</strong> Raw material, work
                  in progress and finished goods.
                </li>
                <li>
                  <strong>What vehicles will visit?</strong> Cars, small trucks,
                  large trucks, tankers or containers.
                </li>
                <li>
                  <strong>What approvals and rules apply?</strong> Industrial
                  area rules, environment and safety.
                </li>
                <li>
                  <strong>What is your budget and timeline?</strong> Phasing can
                  ease cash flow and speed up opening.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Principles for a Good Factory Building
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Process Flow Comes First
              </h4>
              <p className="mb-3">
                The layout should follow the flow of materials from entry to
                dispatch, with minimal backtracking and crossing of paths.
                Buildings should serve the flow, not interrupt it.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Clear Spans and Adequate Height
              </h4>
              <p className="mb-3">
                Production halls need column-free or well-spaced columns, enough
                height for machines, cranes or stacking and flexibility for
                future layouts.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Strong, Suitable Floors
              </h4>
              <p className="mb-3">
                Floors take heavy loads, impact, wear, chemicals and sometimes
                moisture. Choose a floor design and finish suited to your
                process, with advice from a structural engineer.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Good Roof, Light and Ventilation
              </h4>
              <p className="mb-3">
                Industrial roofs get very hot in summer. Plan roof insulation,
                ventilation, natural light and cooling to improve comfort,
                safety and productivity.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Safe Movement of People and Vehicles
              </h4>
              <p className="mb-3">
                Separate pedestrians from vehicles where possible. Plan marked
                walkways, gates, turning space and clear sightlines.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Safety and Fire Protection
              </h4>
              <p className="mb-3">
                Plan exits, fire systems, signage, assembly points and access
                for emergency vehicles with qualified professionals and
                applicable rules.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Reliable Utilities
              </h4>
              <p className="mb-3">
                Power, backup, water, drainage and compressed air must be
                reliable and sized for growth. Plan routes, rooms and shafts
                early.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Easy Maintenance and Cleaning
              </h4>
              <p className="mb-3">
                Choose durable, easy-to-clean finishes and simple detailing,
                with good drainage and waterproofing for roofs, toilets and
                stores.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Room to Expand
              </h4>
              <p className="mb-3">
                Leave space and structural provision for additional bays,
                machines, buildings or floors.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choosing the Structure: RCC, PEB or Combination
              </h3>
              <p className="mb-3">
                Factory structures commonly use one of a few approaches. The
                right choice depends on span, height, load, speed, budget and
                use.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Approach
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Typical use
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Things to consider
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Pre-engineered building (PEB) steel frame
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Large production halls, warehouses, sheds
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Fast construction, long spans, supplier design and
                        erection, roof insulation
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Conventional steel structure
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Special spans, heavy loads, customised design
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Fabrication, erection, corrosion protection
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        RCC (reinforced concrete) frame
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Multi-storey units, heavy machinery floors, admin blocks
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Time, formwork, load capacity and durability
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Combination
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        PEB hall with RCC admin block, mezzanines or heavy
                        floors
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Coordination between systems and approvals
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Ask a structural engineer and, where relevant, the PEB supplier
                to advise on the best approach for your project.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Main Areas
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Production Hall
              </h4>
              <p className="mb-3">
                Plan machine layout, aisles, services, lighting, ventilation,
                heat control and safe working conditions. Keep flexibility for
                new machines and layouts.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Raw Material and Finished Goods Stores
              </h4>
              <p className="mb-3">
                Plan easy truck access, loading docks, racking space and
                protection from rain, damp and pests. Keep fast-moving goods
                close to dispatch.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Loading and Unloading Areas
              </h4>
              <p className="mb-3">
                Plan dock height, canopy, turning space, queueing and truck
                parking. Consider weighbridge needs and safe separation from
                pedestrians.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Administration Block
              </h4>
              <p className="mb-3">
                Plan offices, meeting rooms, reception and records, with good
                light and quiet, and clear visibility of the gate and yard if
                useful.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Worker Welfare
              </h4>
              <p className="mb-3">
                Plan clean toilets and washing areas, drinking water, canteen or
                dining space, rest areas, first aid and changing rooms, with
                good ventilation and drainage.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Utilities and Plant Rooms
              </h4>
              <p className="mb-3">
                Plan electrical rooms, transformers or panels, generators, water
                storage and treatment, and compressor or boiler rooms, in line
                with applicable safety rules and engineer design.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Roads, Yards and Parking
              </h4>
              <p className="mb-3">
                Plan internal roads for the heaviest vehicles, turning radii,
                parking for staff and visitors and drainage.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Boundary, Gate and Security
              </h4>
              <p className="mb-3">
                Plan boundary walls, gates, guard rooms, lighting and cameras.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning the Civil Works
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Foundations and structure:</strong> Based on soil
                  conditions, loads and structural design.
                </li>
                <li>
                  <strong>Industrial flooring:</strong> Strong slabs, joints,
                  finishes and slopes designed for your process.
                </li>
                <li>
                  <strong>Walls and cladding:</strong> Masonry, sheeting or
                  other systems suited to heat, noise and security.
                </li>
                <li>
                  <strong>Roof and drainage:</strong> Slopes, gutters, downpipes
                  and rainwater handling, with insulation and waterproofing
                  where needed.
                </li>
                <li>
                  <strong>Internal roads and paving:</strong> Strong surfaces
                  for trucks, with drainage and edge protection.
                </li>
                <li>
                  <strong>Drains and chambers:</strong> Surface water and
                  process drainage, planned with environmental and safety rules.
                </li>
                <li>
                  <strong>Water supply and storage:</strong> Tanks, pumps and
                  plumbing for welfare and process needs.
                </li>
                <li>
                  <strong>Boundary walls and gates:</strong> Security and
                  appearance.
                </li>
                <li>
                  <strong>Retaining walls and levelling:</strong> Where the plot
                  has level differences.
                </li>
                <li>
                  <strong>Waterproofing:</strong> Roofs, toilets, tanks and
                  basements.
                </li>
                <li>
                  <strong>Landscaping and finishing:</strong> Trees, planting
                  and external finishes that improve conditions and are easy to
                  maintain.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Considerations for Rampur
              </h3>
              <p className="mb-3">
                Every location has its own conditions. Keep these in mind when
                planning a factory in Rampur and nearby areas.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate:</strong> Hot summers, a monsoon season and
                  foggy winters make roof heat, ventilation, drainage and
                  moisture control important.
                </li>
                <li>
                  <strong>Roof heat:</strong> Metal sheet roofs can get very
                  hot. Plan insulation, ventilation, light panels and, where
                  possible, shading.
                </li>
                <li>
                  <strong>Rain and drainage:</strong> Plan slopes, gutters,
                  drains and site grading so that water leaves the site and does
                  not enter stores or production areas.
                </li>
                <li>
                  <strong>Soil and foundation:</strong> Ask for proper soil
                  assessment and structural advice, especially for heavy
                  machinery, large spans and multi-storey blocks.
                </li>
                <li>
                  <strong>Road and truck access:</strong> Study the road,
                  approach, turning space and gate position for heavy vehicles.
                </li>
                <li>
                  <strong>Workforce and welfare:</strong> Plan facilities for
                  local workers, including toilets, drinking water and rest
                  areas.
                </li>
                <li>
                  <strong>Power and water:</strong> Plan reliable supply, backup
                  and storage.
                </li>
                <li>
                  <strong>Surroundings:</strong> Nearby homes, farmland or other
                  industries may affect design, noise and approvals.
                </li>
                <li>
                  <strong>Local rules and approvals:</strong> Industrial area
                  rules, building bye-laws, pollution control and safety
                  requirements vary. Check what applies to your project with the
                  right authorities and professionals.
                </li>
                <li>
                  <strong>Material supply and labour:</strong> Plan the schedule
                  around steel, cement and labour availability and the monsoon.
                </li>
                <li>
                  <strong>Household and community preferences:</strong> If you
                  follow Vastu or other preferences, tell the architect at the
                  start. Factory layouts are largely governed by process, safety
                  and approvals, so these preferences may only be possible for
                  some elements.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of Industrial Project
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Industrial project type
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Planning note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Manufacturing Unit
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan around the process, with a production hall, stores,
                        utilities, admin block, welfare and expansion space.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Warehouse or Godown
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan truck access, loading docks, racking, ventilation,
                        fire safety, drainage and pest control.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Cold Storage or Temperature-Controlled Facility
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Needs specialised insulation, refrigeration, structure
                        and power, with specialist design.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Food Processing or Agro Unit
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan hygiene, cleanable finishes, drainage, ventilation,
                        pest control and compliance with food safety rules, with
                        specialist advice.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Small-Scale or Cottage Industry Unit
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan compact, efficient layouts with room to grow,
                        simple structure and budget control.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Workshop or Fabrication Unit
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan strong floors, ventilation, crane or lifting needs,
                        material storage and safety.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Industrial Shed for Rent
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Plan flexible bays, common access, utilities, truck
                        movement and facilities for several tenants.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Renovation or Expansion of an Existing Factory
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Study the structure, roof, floors, drainage and
                        utilities. Plan additions in phases so that production
                        can continue where possible, and in line with safety
                        rules.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Industrial Project Package
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Site study and concept package:</strong> Requirement
                  study, plot review and layout options.
                </li>
                <li>
                  <strong>Factory building design package:</strong> Plans,
                  elevation and working drawings for halls, stores and ancillary
                  buildings.
                </li>
                <li>
                  <strong>Admin and welfare building package:</strong> Offices,
                  canteen, toilets and security cabins.
                </li>
                <li>
                  <strong>Civil construction package:</strong> Foundations,
                  floors, walls, roads, drains and boundary, as scoped.
                </li>
                <li>
                  <strong>Roof and waterproofing package:</strong> Roof repair,
                  insulation, waterproofing and drainage improvements.
                </li>
                <li>
                  <strong>Design and build package for buildings and civil
                  works:</strong> Design, estimate and construction under one
                  team and one scope.
                </li>
                <li>
                  <strong>Phase-wise development plan:</strong> Build the first
                  bay and essentials first, and add bays and facilities later.
                </li>
                <li>
                  <strong>Renovation and extension package:</strong> Upgrade or
                  extend existing sheds, stores and offices.
                </li>
                <li>
                  <strong>Maintenance and protection add-on:</strong>{" "}
                  Waterproofing, repair and pest-proofing for industrial
                  buildings.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included. Process equipment,
                machinery and specialised utilities are normally outside a
                general architect or contractor&apos;s scope.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Factory Construction Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Built-up area and number of floors:</strong> More area
                  and floors add structure and services.
                </li>
                <li>
                  <strong>Structure type:</strong> PEB, steel, RCC or a
                  combination have different cost and speed.
                </li>
                <li>
                  <strong>Span, height and loads:</strong> Wide spans, tall
                  buildings, cranes and heavy machines increase structure cost.
                </li>
                <li>
                  <strong>Flooring:</strong> Heavy-duty or special floors cost
                  more than standard ones.
                </li>
                <li>
                  <strong>Roof and cladding:</strong> Insulation, light panels,
                  ventilation and special sheeting affect price.
                </li>
                <li>
                  <strong>Utilities and services:</strong> Power, backup, water,
                  drainage, compressed air and fire protection.
                </li>
                <li>
                  <strong>Site conditions:</strong> Soil, levels, access and
                  neighbouring buildings.
                </li>
                <li>
                  <strong>Design changes:</strong> Changes after approval or
                  equipment changes during construction can add cost and delay.
                </li>
                <li>
                  <strong>Material prices and timing:</strong> Market rates,
                  steel prices and the monsoon season affect planning.
                </li>
              </ul>
              <p className="mt-3">
                Your actual quote depends on the project and scope. Use the free
                MTBOSS Budget Calculator on the website for a starting estimate
                for the building and civil portions of your project, and request
                a detailed proposal after a discussion.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Budget Priorities for a Factory Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Define your process, production plan
                  and total budget, including machinery and utilities, which are
                  usually budgeted separately.
                </li>
                <li>
                  <strong>Second:</strong> Get the site layout and material flow
                  right. A good layout saves money every day.
                </li>
                <li>
                  <strong>Third:</strong> Get the structure, floor and roof
                  right. Foundations, frames, floors and roofs are costly to fix
                  later.
                </li>
                <li>
                  <strong>Fourth:</strong> Plan utilities and safety carefully.
                  Power, water, drainage and fire protection must be reliable
                  and compliant.
                </li>
                <li>
                  <strong>Fifth:</strong> Invest in worker welfare. Clean
                  facilities and a comfortable environment improve safety and
                  productivity.
                </li>
                <li>
                  <strong>Sixth:</strong> Protect the buildings. Waterproofing,
                  drainage and durable finishes reduce long-term costs.
                </li>
                <li>
                  <strong>Seventh:</strong> Phase additional bays, offices and
                  facilities, with structure, utilities and land ready for
                  growth.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches a Factory Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact MTBOSS
                  through the website, phone or WhatsApp and share your project,
                  products, plot, approvals status and budget.
                </li>
                <li>
                  <strong>Step 2: Scope confirmation.</strong> The team discusses
                  which parts of design and civil construction it can support,
                  and which parts must be handled by process engineers,
                  specialist consultants, equipment suppliers and authorities.
                </li>
                <li>
                  <strong>Step 3: Budget Calculator.</strong> The free calculator
                  on our website gives a starting estimate for building and
                  civil works.
                </li>
                <li>
                  <strong>Step 4: Site details and study.</strong> You share plot
                  dimensions, location, photos and approvals documents, and the
                  team studies the site. For Rampur, the team will confirm
                  arrangements for visits and meetings.
                </li>
                <li>
                  <strong>Step 5: Process and requirements.</strong> You and the
                  team talk through the process, production plan, material flow,
                  machines, workforce and growth plans.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Prepare Before You Meet an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Describe your product, process and production volume
                  now and in five years.</strong>
                </li>
                <li>
                  <strong>Share the process flow, machine list and dimensions,
                  if available.</strong>
                </li>
                <li>
                  <strong>Decide your realistic budget, and separate machinery
                  and utilities from building and civil works.</strong>
                </li>
                <li>
                  <strong>Collect plot details:</strong> Dimensions, documents,
                  photos, road access and any existing structure.
                </li>
                <li>
                  <strong>Note the type and size of vehicles that will visit,
                  and the number of workers.</strong>
                </li>
                <li>
                  <strong>Check which approvals, licences and rules apply to
                  your industry and location, and who will handle them.</strong>
                </li>
                <li>
                  <strong>Think about power, water, waste and environmental
                  needs.</strong>
                </li>
                <li>
                  <strong>Decide your target date to start production.</strong>
                </li>
                <li>
                  <strong>Think about future expansion:</strong> Extra bays,
                  machines or buildings.
                </li>
                <li>
                  <strong>Decide who in the company or family will make final
                  decisions.</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Planning a Factory
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Designing the building before understanding the process and
                  material flow.
                </li>
                <li>
                  Under-planning truck access, turning space and loading areas.
                </li>
                <li>
                  Poor roof design, leading to heat, leaks and noise.
                </li>
                <li>
                  Weak floors that crack under loads or machines.
                </li>
                <li>
                  Ignoring drainage and site levels, so water enters stores and
                  production areas.
                </li>
                <li>
                  Not planning for expansion, so each new machine means major
                  changes.
                </li>
                <li>
                  Underestimating utilities such as power, water and backup.
                </li>
                <li>
                  Weak worker welfare facilities.
                </li>
                <li>
                  Skipping soil checks, structural advice, fire safety and
                  approvals.
                </li>
                <li>
                  Mixing uncoordinated PEB supplier, civil contractor and
                  equipment installers without a single plan.
                </li>
                <li>
                  Not planning for pest control and storage hygiene.
                </li>
                <li>
                  Splitting design, construction and finishing among agencies
                  without coordination.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Share at Your First Consultation
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Project type:</strong> New factory, warehouse, shed,
                  extension, renovation or civil work only.
                </li>
                <li>
                  <strong>Location:</strong> Locality in Rampur or nearby, with a
                  map pin if possible.
                </li>
                <li>
                  <strong>Plot details:</strong> Size, shape, road frontage,
                  levels and photos.
                </li>
                <li>
                  <strong>Process and products:</strong> What you make, volume
                  and a simple process flow.
                </li>
                <li>
                  <strong>Machines and utilities:</strong> Major equipment,
                  power load, water and other needs.
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
                  <strong>Timeline:</strong> The date you aim to start
                  production.
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
                Why Consider MTBOSS for the Design and Civil Side of Your
                Factory in Rampur
              </h3>
              <p className="mb-3">
                Judge us on the same checklist as everyone else. Here is what
                we focus on.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Honest about scope:</strong> We say clearly which
                  parts we can support and which parts must be handled by
                  process engineers, specialist consultants, equipment suppliers
                  and authorities.
                </li>
                <li>
                  <strong>Planning starts with your process and plot:</strong>{" "}
                  We study your products, material flow, approvals status and
                  budget before proposing building and civil work.
                </li>
                <li>
                  <strong>Design and civil construction under one scope:</strong>{" "}
                  Buildings, floors, roads, drains and finishing coordinated by
                  one team, as scoped.
                </li>
                <li>
                  <strong>Attention to roof heat, drainage and durability:</strong>{" "}
                  Design choices consider heat, rain, wear and maintenance.
                </li>
                <li>
                  <strong>Written scope and specifications:</strong>{" "}
                  Deliverables, materials, phasing, timeline and payment terms
                  are documented before work begins.
                </li>
                <li>
                  <strong>Single point of contact:</strong> One team handles
                  design, execution and handover for the agreed scope.
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
                Rampur city, nearby industrial and commercial areas, highways
                and nearby towns such as Bilaspur, Milak, Shahabad, Swar and
                Tanda. Share your project location with the team, and they will
                confirm availability and arrangements.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect for Factory Projects in Rampur
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
                If you are looking for an architect for a factory in Rampur,
                MTBOSS can discuss the design and civil construction side of
                your project, supported by a free budget calculator and a simple
                online quote request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What does an architect do for a factory
                  project?</strong>
                  <br />
                  An architect studies your process, plot and budget, plans the
                  site layout, buildings and facilities around the material
                  flow, coordinates drawings with structural, process and
                  services engineers and supports construction. The exact scope
                  is written in the agreement.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide factory design and
                  construction in Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Clients in Rampur can contact
                  the team with project details to confirm which parts of the
                  design and civil work it can support.
                </li>
                <li>
                  <strong>Q3. Should I choose a PEB or an RCC building for my
                  factory?</strong>
                  <br />
                  It depends on span, height, loads, speed, budget and use. PEB
                  steel structures are common for large halls and warehouses,
                  while RCC suits multi-storey and heavy-floor buildings. A
                  structural engineer and the PEB supplier should advise on your
                  project.
                </li>
                <li>
                  <strong>Q4. Does the architect design the machine layout?</strong>
                  <br />
                  Machine layout and process design are usually done by process
                  or industrial engineers. The architect coordinates the
                  building, circulation and services with that layout.
                </li>
                <li>
                  <strong>Q5. How can I keep a factory shed cool in summer?</strong>
                  <br />
                  Roof insulation, ventilation, light panels, shading, good
                  orientation and suitable cladding all help. Plan these at the
                  design stage, with engineer advice.
                </li>
                <li>
                  <strong>Q6. Can I expand my factory later?</strong>
                  <br />
                  Yes, if the master plan, structure, utilities and land are
                  planned for it. Tell the architect about future bays, machines
                  or buildings at the start.
                </li>
                <li>
                  <strong>Q7. Do you help with approvals?</strong>
                  <br />
                  Requirements vary by industry, size and location. Ask the team
                  what support is included, and confirm the rules that apply to
                  your unit with the authorities.
                </li>
                <li>
                  <strong>Q8. Can an existing factory be renovated or extended
                  while it runs?</strong>
                  <br />
                  Often partly yes, with phased work, safe separation of work
                  areas and careful scheduling. Plan this with the architect and
                  your operations team at the start.
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