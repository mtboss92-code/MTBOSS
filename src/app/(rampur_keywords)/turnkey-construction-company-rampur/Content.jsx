import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Turnkey Construction Company  Rampur – One Team, One Agreement, from Plot to Possession
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Most people who plan a building do not want to become a project
                manager. They do not want to hire an architect, then a structural
                engineer, then a contractor, then a plumber, an electrician, a tile
                worker, a carpenter and a painter, and then spend months coordinating
                them, comparing bills and settling arguments about who was responsible
                for what.
              </p>
              <p className="mt-3">
                Turnkey construction exists for these people. You share your
                requirements, and one company takes responsibility for delivering a
                finished building, ready for you to use. MTBOSS Construction Private
                Limited is an architecture, interior and construction company serving
                Rampur, Moradabad and Bareilly. We build homes, villas, apartments,
                commercial buildings, factories, warehouses, hospitals and schools on a
                turnkey basis, with design, construction, interiors, waterproofing and
                handover managed by one team.
              </p>
              <p className="mt-3">
                📞 Want one team to handle your whole project? Call or WhatsApp +91
                94584 10866 for a free consultation.
              </p>
              <p className="mt-3">
                <a
                  href="https://wa.me/9458410866"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Call Now
                </a>{" "}
                |{" "}
                <a
                  href="https://wa.me/9458410866"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Your Plot Details on WhatsApp
                </a>
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What &quot;Turnkey&quot; Really Means
              </h3>
              <p className="mb-3">
                In a turnkey project, one company is responsible for taking a project
                from brief to completion. The name comes from the idea that when the
                work is finished, the owner can simply &quot;turn the key&quot; and
                start using the building.
              </p>
              <p className="mb-3">
                A typical turnkey project includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Understanding your requirements and preparing a design brief</li>
                <li>Architectural planning and layout</li>
                <li>Structural and services design coordination</li>
                <li>Support with approvals and drawings</li>
                <li>Construction of foundation, structure and civil work</li>
                <li>Electrical, plumbing and drainage work</li>
                <li>Waterproofing and finishing</li>
                <li>Interiors and fit-out where agreed</li>
                <li>Quality checks and project management</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Is Usually Not Included
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Land cost and registration</li>
                <li>Statutory fees, taxes and deposits</li>
                <li>Utility connection charges from authorities</li>
                <li>
                  Loose furniture, appliances and decor (unless agreed)
                </li>
                <li>
                  Landscaping and exterior extras beyond the agreed scope
                </li>
                <li>Changes requested after the design is approved</li>
                <li>Finance costs and insurance</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Turnkey vs Other Ways of Hiring
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-2 font-semibold">
                        Factor
                      </th>
                      <th className="border border-gray-200 px-4 py-2 font-semibold">
                        Turnkey
                      </th>
                      <th className="border border-gray-200 px-4 py-2 font-semibold">
                        Separate Vendors
                      </th>
                      <th className="border border-gray-200 px-4 py-2 font-semibold">
                        Labour Contract
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Who coordinates trades
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        The turnkey company
                      </td>
                      <td className="border border-gray-200 px-4 py-2">You</td>
                      <td className="border border-gray-200 px-4 py-2">You</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Responsibility for clashes between trades
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        One company
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Divided or disputed
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Mostly yours
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Cost clarity
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Defined scope and price
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Many separate quotes
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Rates for labour, with materials bought by you
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Time and effort for the owner
                      </td>
                      <td className="border border-gray-200 px-4 py-2">Lower</td>
                      <td className="border border-gray-200 px-4 py-2">High</td>
                      <td className="border border-gray-200 px-4 py-2">High</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Control over materials
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Specified in the agreement
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Fully yours
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Fully yours
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Risk of delay from poor coordination
                      </td>
                      <td className="border border-gray-200 px-4 py-2">Lower</td>
                      <td className="border border-gray-200 px-4 py-2">Higher</td>
                      <td className="border border-gray-200 px-4 py-2">Higher</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Best for</td>
                      <td className="border border-gray-200 px-4 py-2">
                        Owners who want a managed result
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Owners with time and construction knowledge
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Experienced owners who can manage purchasing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What We Build on a Turnkey Basis
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Homes
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Independent houses, duplexes and villas</li>
                <li>Builder floors and apartment buildings</li>
                <li>Home renovation and extensions</li>
              </ul>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Commercial Buildings
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Offices, shops and showrooms</li>
                <li>Shopping complexes and mixed-use buildings</li>
                <li>Restaurants, cafés and hotels</li>
              </ul>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Industrial and Storage
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Factories and industrial sheds</li>
                <li>Warehouses and godowns</li>
              </ul>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Institutional and Healthcare
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Schools, play schools and coaching centres</li>
                <li>Hospitals, nursing homes and clinics</li>
              </ul>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Interiors
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Complete home and commercial interiors, delivered with the building or
                  after it
                </li>
              </ul>
              <p className="mt-3">
                If your project type is not listed, tell us what you need, and we will
                discuss whether it suits a turnkey approach.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                The Benefits of Turnkey Construction
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                One Point of Responsibility
              </h4>
              <p>
                You deal with one team, one agreement and one person to call. This
                reduces confusion and blame-shifting.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Cost Clarity
              </h4>
              <p>
                With a well-defined scope and specification, you know the cost
                structure before work starts. Changes are priced and approved in
                writing.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Time Savings for You
              </h4>
              <p>
                You do not need to hire and manage many vendors, compare dozens of
                quotes or attend every trade meeting.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Better Coordination
              </h4>
              <p>
                Structure, services, ceilings, flooring and finishes are planned
                together, so conflicts are solved on paper, not on site.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Consistent Quality
              </h4>
              <p>
                One company sets the standards for materials, workmanship and finishing
                across all trades.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Faster Delivery
              </h4>
              <p>
                Design, procurement and construction can overlap sensibly, and trades
                follow a planned sequence.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Where Turnkey Projects Go Wrong, and How We Avoid It
              </h3>
              <p className="mb-3">
                Turnkey is not magic. Projects can fail when the arrangement is loose.
                Here are the common problems and our approach.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-2 font-semibold">
                        Common Problem
                      </th>
                      <th className="border border-gray-200 px-4 py-2 font-semibold">
                        How We Address It
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Vague scope
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        We write a detailed scope and exclusions before work starts
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Poor specifications
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        We list materials, grades, brands or equivalents and finishes in
                        writing
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Unclear changes
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Every change is priced and approved in writing before work
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Hidden exclusions
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        We highlight common exclusions and discuss them with you
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Weak supervision
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Site engineers and supervisors track progress and quality
                        regularly
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Payment before progress
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Payments are linked to completed stages
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Delays from late decisions
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        We set decision deadlines and share the schedule
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How a Turnkey Project Works With MTBOSS
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Step 1: Brief and Site Visit
              </h4>
              <p>
                We listen to your needs, budget and timeline, visit the site and note
                conditions such as soil, access, surroundings and existing structures.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Step 2: Concept and Layout
              </h4>
              <p>
                We prepare layout options and 3D views where relevant, and refine them
                with you.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Step 3: Detailed Design and Specifications
              </h4>
              <p>
                We prepare structural, services and finishing drawings in coordination
                with qualified engineers, along with a material specification list.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Step 4: Approvals Support
              </h4>
              <p>
                We help you understand the drawings and documents needed for approvals.
                Requirements vary by project and location, so please confirm them with
                the concerned authorities.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4">
                Step 5: Itemised Proposal and Agreement
              </h4>
              <p>
                You receive a clear estimate with scope, specifications, exclusions,
                schedule and payment stages, and we sign a written agreement.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What You Need to Do for Turnkey to Work Well
              </h3>
              <p className="mb-3">
                Turnkey reduces your workload, but it does not remove your role.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Share your needs honestly, including budget range, priorities and
                  preferences.
                </li>
                <li>
                  Approve designs and specifications on time. Delays in decisions are
                  the most common cause of delay in any project.
                </li>
                <li>
                  Provide access and documents, such as plot papers, existing drawings
                  and approvals you hold.
                </li>
                <li>Ask questions. A good company welcomes them.</li>
                <li>
                  Keep payments aligned with the schedule. Delays in agreed payments can
                  slow the work.
                </li>
                <li>
                  Avoid changes after work begins. If a change is necessary, discuss its
                  cost and time effect first.
                </li>
                <li>
                  Visit the site or review updates regularly. Even a short check helps.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Turnkey for Owners Who Cannot Be on Site
              </h3>
              <p className="mb-3">
                Many property owners cannot visit often. They may work in another city,
                run a business or manage a busy schedule. Turnkey suits them well, if
                the company communicates clearly. With MTBOSS, you can expect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Regular written updates with photographs of progress</li>
                <li>Milestone reviews over phone or WhatsApp</li>
                <li>
                  Clear approvals for key decisions, recorded in writing
                </li>
                <li>A single point of contact who knows your project</li>
                <li>
                  Visits when you are available, or a trusted family member can visit on
                  your behalf
                </li>
              </ul>
              <p className="mt-3">
                You should never feel that your project has disappeared into silence.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How to Judge a Turnkey Proposal
              </h3>
              <p className="mb-3">
                Use this checklist with any turnkey company, including us.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-2 font-semibold">
                        Check
                      </th>
                      <th className="border border-gray-200 px-4 py-2 font-semibold">
                        What to Look For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Scope</td>
                      <td className="border border-gray-200 px-4 py-2">
                        A clear list of what is included, room by room or area by area
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Specifications
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Materials, grades and finishes written clearly
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Exclusions</td>
                      <td className="border border-gray-200 px-4 py-2">
                        A clear list of what is not included
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Schedule</td>
                      <td className="border border-gray-200 px-4 py-2">
                        Milestones and a realistic total duration
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Payment stages
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Linked to progress, with a final portion held until snags are
                        fixed
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Change process
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        A written process for pricing and approving changes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Team</td>
                      <td className="border border-gray-200 px-4 py-2">
                        Named engineers and supervisors, and how often they visit
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        Quality checks
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Checkpoints for hidden work
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">
                        After-handover support
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        What help is available, and for how long
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">References</td>
                      <td className="border border-gray-200 px-4 py-2">
                        Completed projects you can see, and clients you can speak to
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                A reliable company answers clearly and in writing.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Is Turnkey Construction More Expensive Than Hiring Separate
                Contractors?
              </h3>
              <p>
                Not necessarily. A turnkey price may look higher at first, because it
                includes coordination, supervision and responsibility. But separate
                contractors also have costs that are easy to miss: your own time, delays
                between trades, rework caused by poor coordination and the risk of
                disputes. Turnkey can also reduce wasted material and repeated site
                setup. The best way to compare is to ask each option to quote the same
                scope and specifications, and then add the cost of your own time and
                risk. For simple, small jobs, separate vendors may be cheaper. For
                larger, multi-trade projects, turnkey often provides better value and
                peace of mind. We can help you compare both routes honestly.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost Factors in Turnkey Construction
              </h3>
              <p className="mb-3">
                Turnkey cost depends on the project, so we avoid quoting a single rate
                without a brief and a site visit. Key factors include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Built-up area and number of floors</li>
                <li>Type of building and its complexity</li>
                <li>Structural requirements and foundation conditions</li>
                <li>Quality of materials and finishes</li>
                <li>Interiors included in the scope</li>
                <li>
                  Electrical, plumbing, HVAC and fire safety systems
                </li>
                <li>Site conditions and access</li>
                <li>Phasing and construction sequence</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Turnkey Projects in Rampur: Local Notes
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Busy owners and families.</strong> Many owners balance work,
                  family and other commitments, and prefer a managed process.
                </li>
                <li>
                  <strong>Owners living outside Rampur.</strong> Property owners based
                  elsewhere need clear updates and a single contact point.
                </li>
                <li>
                  <strong>Seasonal timing.</strong> Monsoon, weddings and festivals
                  affect schedules and labour availability, so planning early helps.
                </li>
                <li>
                  <strong>Hot summers and humid monsoon.</strong> Ventilation,
                  waterproofing and moisture-resistant materials protect buildings.
                </li>
                <li>
                  <strong>Growing city and local needs.</strong> Homes, shops, clinics,
                  schools and storage buildings are all in demand, so planning for
                  future expansion is wise.
                </li>
              </ul>
              <p className="mt-3">
                We serve projects in Rampur, including Civil Lines and other areas, as
                well as Moradabad and Bareilly.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Do Owners Choose MTBOSS for Turnkey Construction?
              </h3>
              <p>
                Owners choose us because we combine design, construction and interiors
                under one team, and we are honest about scope. MTBOSS manages
                architecture, structure, civil work, waterproofing, ceilings, electrical
                and plumbing coordination, carpentry, painting and finishing, so you do
                not have to coordinate separate vendors. We put scope, specifications
                and exclusions in writing, price changes before they happen and share
                progress openly. And after handover, you can call the same team for
                repair, painting, waterproofing and other building services.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Choosing a Turnkey Company
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Judging only by the total price.</strong> Check scope and
                  specifications first.
                </li>
                <li>
                  <strong>Accepting a vague agreement.</strong> Everything important
                  belongs in writing.
                </li>
                <li>
                  <strong>Ignoring exclusions.</strong> Hidden extras surprise owners
                  later.
                </li>
                <li>
                  <strong>Paying ahead of progress.</strong> Payments should follow
                  completed work.
                </li>
                <li>
                  <strong>Not asking for references.</strong> Visit completed or running
                  sites when possible.
                </li>
                <li>
                  <strong>Changing decisions after work begins.</strong> This is the
                  biggest source of cost and delay.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Happens When You Enquire
              </h3>
              <p className="mb-3">
                We keep the first steps simple.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1 –</strong> You contact us by call, WhatsApp or the
                  enquiry form.
                </li>
                <li>
                  <strong>Step 2 – First conversation.</strong> We listen to your plan,
                  answer basic questions and note your requirements.
                </li>
                <li>
                  <strong>Step 3 – Site visit.</strong> We study the plot or building,
                  access, soil and conditions.
                </li>
                <li>
                  <strong>Step 4 – Planning discussion.</strong> We discuss layout,
                  scope, phasing and schedule options.
                </li>
                <li>
                  <strong>Step 5 – Proposal.</strong> You receive an itemised estimate
                  with scope, specifications, exclusions, schedule and payment stages.
                </li>
              </ol>
              <p className="mt-3">
                There is no obligation after the first conversation or site visit.
              </p>
              <p className="mt-3">
                <strong>What to send with your enquiry:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Your name and phone number</li>
                <li>
                  Project type, such as house, villa, shop, office, factory, warehouse,
                  clinic or school
                </li>
                <li>
                  Plot location and approximate size, or the existing building address
                </li>
                <li>Number of floors planned</li>
                <li>Whether you want interiors included</li>
                <li>Target start and completion dates</li>
                <li>Approximate budget range</li>
                <li>Drawings or photographs, if available</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Start Your Turnkey Project with MTBOSS
              </h3>
              <p className="mb-3">
                Ready to hand your project to one team? Call or message us today, share
                your plan and get honest guidance on scope, schedule and budget.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Call:</strong>{" "}
                  <a
                    href="https://wa.me/9458410866"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    +91 94584 10866
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:MTBOSS2016@gmail.com"
                    className="text-blue-600 underline"
                  >
                    MTBOSS2016@gmail.com
                  </a>
                </li>
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
              </ul>
              <p className="mt-3">
                <a
                  href="https://wa.me/9458410866"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Call Now
                </a>{" "}
                |{" "}
                <a
                  href="https://wa.me/9458410866"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>{" "}
                |{" "}
                <a
                  href="https://www.mtboss.in"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Turnkey Consultation
                </a>
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What is turnkey construction?</strong>
                  <br />
                  Turnkey construction means one company takes responsibility for
                  delivering a project from design to handover, so the owner receives a
                  completed building ready for use.
                </li>
                <li>
                  <strong>Q2. What does a turnkey package include?</strong>
                  <br />
                  It usually includes design coordination, approvals support,
                  construction, services, finishing and handover, and may include
                  interiors if agreed. Exclusions such as land, statutory fees, loose
                  furniture and specialised equipment should be listed in writing.
                </li>
                <li>
                  <strong>Q3. Is turnkey construction suitable for small projects?</strong>
                  <br />
                  Yes. Many homes, shops and small commercial buildings are built on a
                  turnkey basis. For very small, simple jobs, a single contractor may be
                  enough.
                </li>
                <li>
                  <strong>Q4. How is the price fixed in a turnkey project?</strong>
                  <br />
                  Usually through a clear scope and specification, with an itemised
                  estimate and payment stages. Changes are priced and approved in
                  writing before they are carried out.
                </li>
                <li>
                  <strong>Q5. What if I want to change something during
                  construction?</strong>
                  <br />
                  Small changes are often possible. We explain the effect on cost and
                  time in writing before proceeding, because late changes can be
                  expensive.
                </li>
                <li>
                  <strong>Q6. How do I stay informed if I cannot visit the site
                  often?</strong>
                  <br />
                  We provide regular updates with photographs, milestone reviews and a
                  single point of contact, and you or a trusted person can visit when
                  convenient.
                </li>
                <li>
                  <strong>Q7. Do you handle approvals?</strong>
                  <br />
                  We prepare technical drawings and coordinate the building with
                  approval needs. Please confirm current requirements with the concerned
                  authorities.
                </li>
                <li>
                  <strong>Q8. Can you build commercial, industrial and institutional
                  buildings on a turnkey basis?</strong>
                  <br />
                  Yes. We can discuss turnkey construction for shops, offices,
                  warehouses, factories, schools, clinics and hospitals, depending on
                  the scope.
                </li>
                <li>
                  <strong>Q9. How can I get a quotation?</strong>
                  <br />
                  Contact us with your project details, and we will arrange a site
                  visit. After reviewing your brief, we prepare an itemised quotation.
                  You can also use our online construction calculator for a starting
                  idea.
                </li>
                <li>
                  <strong>Q10. Do you serve Rampur and nearby cities?</strong>
                  <br />
                  Yes. We serve Rampur, Moradabad and Bareilly and can discuss nearby
                  locations.
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