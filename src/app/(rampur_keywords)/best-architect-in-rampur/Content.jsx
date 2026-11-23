import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            How to Choose One Before You Sign Anything
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Everyone who designs houses calls themselves the best. The word
                costs nothing, and it appears on every visiting card, banner and
                social media page. What you actually need is proof: an architect
                who studies your plot before drawing, explains why each room
                sits where it does, works within your budget, coordinates with
                the structural engineer and stays reachable when construction
                starts.
              </p>
              <p className="mt-3">
                A house is the biggest purchase most families make, and the
                design decides how comfortable, how expensive and how flexible
                it will be for the next thirty years.
              </p>
              <p className="mt-3">
                If you are looking for the best architect in Rampur, this page
                gives you a practical way to judge any architect, including us:
                a scorecard, portfolio checks, first-meeting questions, fee
                models and red flags. It also explains how MTBOSS Construction
                Private Limited approaches design.
              </p>
              <p className="mt-3">
                MTBOSS is an architect, interior designer and construction
                company based on Kanth Road, Moradabad. It offers architecture,
                interior design, construction, renovation, waterproofing and
                other home services with transparent pricing and on-time
                delivery.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Makes an Architect &quot;Best&quot;? The Scorecard
              </h3>
              <p className="mb-3">
                A good architect scores well on all of these points, not only
                one.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Quality
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What to look for
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        How to test it
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Credentials
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Council of Architecture registration
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ask for the registration number and verify it
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Listening
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Asks about your family, routines and budget
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Notice how many questions are asked in the first meeting
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Site study
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visits and studies the plot
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ask whether a site visit is included
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Design thinking
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Explains light, air, privacy and flow
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ask why rooms are placed where they are
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Buildability
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Designs that fit your budget and local practice
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ask for a rough construction cost range
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Coordination
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Works with structural engineer and services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ask who prepares structural drawings
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Documentation
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clear drawings and specifications
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ask what drawings you will receive
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Communication
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Prompt, clear, honest replies
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Notice response time before you commit
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Track record
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Completed projects you can see
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ask for photos, drawings or visits
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Site involvement
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Reviews work against drawings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ask how often site visits happen
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Give each point a mark out of five when you speak to two or
                three architects. The total tells you more than any
                advertisement.
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
                  A project gallery and blog on the website let prospective
                  clients review completed work.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Architecture and Design Services Offered by MTBOSS
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Plot study and requirement discussion:</strong>{" "}
                  Understanding plot, surroundings, family needs and budget.
                </li>
                <li>
                  <strong>House planning and layout design:</strong> Room
                  positions, sizes, movement and zoning.
                </li>
                <li>
                  <strong>Elevation and exterior design:</strong> The look of
                  the building from outside.
                </li>
                <li>
                  <strong>3D views:</strong> A picture of the finished building
                  before construction, where included.
                </li>
                <li>
                  <strong>Interior design:</strong> Furniture layouts,
                  ceilings, lighting, storage and finishes.
                </li>
                <li>
                  <strong>Structure and services coordination:</strong>{" "}
                  Working with structural, plumbing and electrical plans.
                </li>
                <li>
                  <strong>Approval support:</strong> Guidance on drawings and
                  documents for local approvals.
                </li>
                <li>
                  <strong>Construction services:</strong> Building the home
                  from foundation to finish, where taken up.
                </li>
                <li>
                  <strong>Renovation and remodelling:</strong> Redesigning and
                  upgrading existing homes.
                </li>
                <li>
                  <strong>Waterproofing and repair planning:</strong>{" "}
                  Protection for roofs, walls and wet areas.
                </li>
                <li>
                  <strong>Related home services:</strong> Painter, electrician,
                  plumber, carpenter, tile and marble, false ceiling and other
                  services through the same company.
                </li>
              </ul>
              <p className="mt-3">
                Final scope for each project is discussed and confirmed with
                the MTBOSS team before work begins.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Ten Tests to Find the Best Architect in Rampur
              </h3>

              <p className="font-semibold text-gray-900">
                1. The credentials test
              </p>
              <p className="mb-3">
                Ask for the Council of Architecture registration number and
                verify it. The title &quot;architect&quot; is regulated in
                India, so this is a basic check.
              </p>

              <p className="font-semibold text-gray-900">
                2. The first-meeting test
              </p>
              <p className="mb-3">
                Does the architect ask about your family, routines, plot,
                budget and future plans, or start by showing a catalogue of
                plans? Good design begins with questions.
              </p>

              <p className="font-semibold text-gray-900">
                3. The site visit test
              </p>
              <p className="mb-3">
                Will the architect visit your plot before designing? Plans made
                without seeing the land miss slope, neighbours, road access and
                orientation.
              </p>

              <p className="font-semibold text-gray-900">
                4. The reasoning test
              </p>
              <p className="mb-3">
                Ask why the kitchen is on this side, the staircase there, the
                bedroom facing that way. A good architect gives reasons based
                on light, air, privacy and use.
              </p>

              <p className="font-semibold text-gray-900">
                5. The budget test
              </p>
              <p className="mb-3">
                Ask for a rough cost range to build the design. A beautiful
                plan that costs double your budget is not a good plan.
              </p>

              <p className="font-semibold text-gray-900">
                6. The structure test
              </p>
              <p className="mb-3">
                Ask who designs the structure and how it is coordinated with
                the architecture. Structural design should come from a
                qualified structural engineer.
              </p>

              <p className="font-semibold text-gray-900">
                7. The drawings test
              </p>
              <p className="mb-3">
                Ask exactly what drawings and documents you will receive, and
                in what format. Clear drawings protect you during construction.
              </p>

              <p className="font-semibold text-gray-900">
                8. The portfolio test
              </p>
              <p className="mb-3">
                Ask to see completed projects and drawings, not only photos.
                Check whether the built result matches the plan.
              </p>

              <p className="font-semibold text-gray-900">
                9. The honesty test
              </p>
              <p className="mb-3">
                Ask what could go wrong with your plot or plan. A trustworthy
                architect points out limits and risks early.
              </p>

              <p className="font-semibold text-gray-900">
                10. The aftercare test
              </p>
              <p className="mb-3">
                Ask what support continues during construction and after. Site
                visits and clarifications matter when builders have questions.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What a Good Architect Actually Does
              </h3>
              <p className="mb-3">
                The job is more than drawing rooms inside a boundary. A
                reliable architect follows a sequence, and you should expect to
                see it.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Listens first:</strong> Understands your family,
                  routines, budget and expectations.
                </li>
                <li>
                  <strong>Studies the plot:</strong> Considers shape, size,
                  direction, road, neighbours, slope and soil conditions.
                </li>
                <li>
                  <strong>Plans light and air:</strong> Positions rooms and
                  openings for comfort and efficiency.
                </li>
                <li>
                  <strong>Plans circulation and privacy:</strong> Keeps
                  movement efficient and zones separate.
                </li>
                <li>
                  <strong>Develops options:</strong> Shows layout alternatives
                  and explains trade-offs.
                </li>
                <li>
                  <strong>Designs within budget:</strong> Keeps cost in view
                  throughout design.
                </li>
                <li>
                  <strong>Coordinates structure and services:</strong> Aligns
                  architecture with structural, plumbing and electrical plans.
                </li>
                <li>
                  <strong>Prepares clear drawings:</strong> Plans, sections,
                  elevations and details for approvals and construction.
                </li>
                <li>
                  <strong>Supports approvals:</strong> Helps prepare drawings
                  and documents for local submission.
                </li>
                <li>
                  <strong>Guides the build:</strong> Answers site queries and
                  checks work against drawings.
                </li>
                <li>
                  <strong>Considers the future:</strong> Plans for extra
                  floors, changing needs and maintenance.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Portfolio Check: How to Read an Architect&apos;s Work
              </h3>
              <p className="mb-3">
                A portfolio can be impressive and still tell you little. Look
                closely.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Variety and relevance:</strong> Are there houses
                  similar in size and budget to yours?
                </li>
                <li>
                  <strong>Plans, not just photos:</strong> Ask to see floor
                  plans alongside photographs.
                </li>
                <li>
                  <strong>Light and ventilation:</strong> Do the photographs
                  show well-lit, airy rooms?
                </li>
                <li>
                  <strong>Use of space:</strong> Are circulation spaces
                  efficient, or are there long, wasted passages?
                </li>
                <li>
                  <strong>Detailing:</strong> Look at staircases, windows,
                  balconies, kitchens and bathrooms.
                </li>
                <li>
                  <strong>Finishing quality:</strong> Check how edges, joints
                  and junctions look in photos.
                </li>
                <li>
                  <strong>Built versus rendered:</strong> Ask which images are
                  of completed buildings and which are only visuals.
                </li>
                <li>
                  <strong>Client feedback:</strong> If possible, speak to a
                  past client about communication, budget and timelines.
                </li>
                <li>
                  <strong>Consistency:</strong> Does the work show thought, or
                  only copied styles?
                </li>
              </ul>
              <p className="mt-3">
                Visiting one completed house, even briefly, tells you more than
                a hundred images.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Ask in Your First Meeting
              </h3>
              <p className="mb-3">
                Use these questions with any architect, including us.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Are you registered with the Council of Architecture, and what
                  is your registration number? Verify it.
                </li>
                <li>
                  Will you visit the plot before designing? The answer should
                  be yes.
                </li>
                <li>
                  What stages and deliverables are included in your fee? Ask
                  for a written scope.
                </li>
                <li>
                  How many design options and revisions are included? Clarify
                  limits.
                </li>
                <li>
                  Who prepares the structural design, and how is it
                  coordinated? Ask for the process.
                </li>
                <li>
                  Do you help with approvals, and what do I need to provide?
                  Ask for specifics.
                </li>
                <li>
                  Can you estimate the construction cost range for my
                  requirements? Ask for a rough range.
                </li>
                <li>
                  Do you also do interiors, and are they included? Clarify
                  scope.
                </li>
                <li>
                  How often will you visit the site during construction? Ask
                  for stages.
                </li>
                <li>
                  Can I see completed projects and drawings? Photos and a
                  project gallery help you judge quality.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Understanding Architect Fee Models
              </h3>
              <p className="mb-3">
                Fees vary, and the cheapest is not always the best value. Ask
                which model is used and what it covers.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Fee model
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        How it works
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Good for
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Watch out for
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Percentage of project cost
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Fee is a share of total construction cost
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Larger projects with full services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Check what services the percentage includes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Rate per area
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Fee per square foot of built-up area
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Defined-area residential work
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Confirm how area is measured
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Fixed fee
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        One amount for a defined scope
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clearly defined projects
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Confirm limits on revisions and extra work
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Hourly or consultation fee
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Paid for time spent
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Advice and short reviews
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Confirm scope and time limits
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Design and build
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Design and construction handled together
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Clients wanting a single point of responsibility
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Confirm design and construction are clearly itemised
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Ask for payments to be staged against deliverables, such as
                concept design, detailed drawings and approval drawings,
                instead of paying the full amount upfront.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Warning Signs of a Weak Architect or Design Service
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Claims to be &quot;the best&quot; or &quot;number one&quot;
                  but cannot show completed work.
                </li>
                <li>Offers a standard plan copied from another house.</li>
                <li>
                  Gives a design without visiting the plot or understanding
                  your needs.
                </li>
                <li>
                  Cannot show a Council of Architecture registration number
                  where claiming to be an architect.
                </li>
                <li>
                  Promises building plan approval, which no designer can
                  guarantee.
                </li>
                <li>
                  Ignores your budget and designs something you cannot build.
                </li>
                <li>Has no written scope of work, fee or timeline.</li>
                <li>
                  Does not mention structural coordination, services or
                  approvals.
                </li>
                <li>Cannot explain why rooms are placed where they are.</li>
                <li>Asks for the entire fee upfront.</li>
                <li>Is unreachable once drawings are delivered.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Architect Alone, Contractor Alone or Design and Build?
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Option
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What you get
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Advantages
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Challenges
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Architect only
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Design, drawings and site guidance
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Independent design, you choose the builder
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        You manage contractor selection and coordination
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Contractor only
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Construction based on a plan you provide
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Possibly lower upfront cost
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Quality of the plan and coordination depends on you
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Design and build
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Design and construction by one company
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Single responsibility, smoother coordination
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Make sure design and construction scopes and costs are
                        clearly separated
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Choose the arrangement that matches your time, experience and
                comfort with managing a project. A written scope matters in all
                three.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Type of Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>New House or Villa:</strong> Full plot study, layout,
                  elevation, interiors and services coordination.
                </li>
                <li>
                  <strong>Duplex or Multi-Storey Home:</strong> Careful
                  planning of stairs, structure and future floors.
                </li>
                <li>
                  <strong>Independent Floor or Flat Interior:</strong>{" "}
                  Efficient layouts and interiors within a fixed envelope.
                </li>
                <li>
                  <strong>Renovation and Remodelling:</strong> Redesigning
                  existing homes for better light, flow and storage.
                </li>
                <li>
                  <strong>Extension and Additional Floors:</strong> Planning
                  extra rooms or floors on existing buildings, subject to
                  structural checks and approvals.
                </li>
                <li>
                  <strong>Commercial Space:</strong> Shops, showrooms, clinics
                  and offices with layouts that suit business needs.
                </li>
                <li>
                  <strong>Interior-Only Projects:</strong> Layouts, ceilings,
                  lighting, carpentry and finishes for homes and offices.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Rampur Planning Notes
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Hot summers:</strong> Plan shading, ventilation,
                  insulation and light-coloured roofs and walls to reduce heat.
                </li>
                <li>
                  <strong>Monsoon rain and humidity:</strong> Plan roof slope,
                  drainage, waterproofing and moisture-resistant materials from
                  the start.
                </li>
                <li>
                  <strong>Winter fog and cold mornings:</strong> Plan sunny
                  spaces and adequate natural light in living areas and
                  bedrooms.
                </li>
                <li>
                  <strong>Soil and groundwater:</strong> Ground conditions
                  affect foundations, so a soil assessment and structural
                  design matter.
                </li>
                <li>
                  <strong>Plot shapes and sizes:</strong> Narrow, irregular or
                  corner plots need careful planning to use space well.
                </li>
                <li>
                  <strong>Joint family living:</strong> Plan multiple bedrooms,
                  shared areas and room for future growth.
                </li>
                <li>
                  <strong>Parking and street access:</strong> Plan entrance,
                  gate and vehicle movement within the plot.
                </li>
                <li>
                  <strong>Local materials and labour:</strong> Planning with
                  locally available materials and skills helps control cost.
                </li>
                <li>
                  <strong>Future floors:</strong> Plan structure and stairs to
                  allow extra floors later where permitted.
                </li>
                <li>
                  <strong>Water and power cuts:</strong> Plan overhead tanks,
                  borewell or sump positions, and backup provisions.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choose Your Architecture Service Plan
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Consultation plan:</strong> One or more discussions
                  for planning advice and feedback on existing ideas.
                </li>
                <li>
                  <strong>House planning plan:</strong> Plot study, layout
                  design, elevation and drawings.
                </li>
                <li>
                  <strong>Design and 3D plan:</strong> Planning plus 3D views
                  to visualise the finished home.
                </li>
                <li>
                  <strong>Approval-ready drawing plan:</strong> Drawings
                  prepared for local approval submission.
                </li>
                <li>
                  <strong>Full design plan:</strong> Planning, structural
                  coordination, interiors and working drawings.
                </li>
                <li>
                  <strong>Design and build plan:</strong> Design and
                  construction handled by one team, where taken up.
                </li>
                <li>
                  <strong>Interior design plan:</strong> Layouts, ceilings,
                  lighting, carpentry and finishes.
                </li>
                <li>
                  <strong>Renovation design plan:</strong> Redesign and upgrade
                  of existing homes.
                </li>
                <li>
                  <strong>Phase-wise plan:</strong> One complete design carried
                  out in stages to match your budget.
                </li>
              </ul>
              <p className="mt-3">
                Scope and specifications are agreed in writing before work
                begins, so you know exactly what is included.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Affect Architect Fees and Project Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Plot size and built-up area:</strong> Larger projects
                  need more design work.
                </li>
                <li>
                  <strong>Project type:</strong> A simple house, a duplex, a
                  commercial space and a renovation differ in effort.
                </li>
                <li>
                  <strong>Scope of services:</strong> Planning only, or
                  planning with interiors, structure coordination and site
                  visits.
                </li>
                <li>
                  <strong>Number of design options and revisions:</strong> More
                  iterations mean more time.
                </li>
                <li>
                  <strong>Level of detail:</strong> Working drawings and
                  specifications take more time than concept plans.
                </li>
                <li>
                  <strong>3D visuals and presentations:</strong> Extra
                  deliverables add effort.
                </li>
                <li>
                  <strong>Approvals support:</strong> Preparing and following
                  up on documents adds time.
                </li>
                <li>
                  <strong>Site visits and supervision:</strong> Regular visits
                  during construction add to the scope.
                </li>
                <li>
                  <strong>Complexity:</strong> Irregular plots, difficult sites
                  and special requirements need more design time.
                </li>
                <li>
                  <strong>Material and finish choices:</strong> These shape the
                  final construction cost.
                </li>
                <li>
                  <strong>Timeline:</strong> Faster schedules can change the
                  price.
                </li>
              </ul>
              <p className="mt-3">
                Use the free MTBOSS Budget Calculator on the website for a
                starting estimate of construction cost, and request details
                about design services after a consultation.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Budget Priorities When Planning a Home
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>First:</strong> Plot study and a clear brief. A good
                  start prevents expensive changes.
                </li>
                <li>
                  <strong>Second:</strong> Structure and safety. A sound
                  structure comes before decoration.
                </li>
                <li>
                  <strong>Third:</strong> Layout and circulation. Efficient
                  planning saves area and cost.
                </li>
                <li>
                  <strong>Fourth:</strong> Services and water management.
                  Plumbing, drainage and waterproofing protect the building.
                </li>
                <li>
                  <strong>Fifth:</strong> Kitchen and bathrooms. They deliver
                  the most daily value.
                </li>
                <li>
                  <strong>Sixth:</strong> Light and ventilation. They improve
                  comfort and reduce running costs.
                </li>
                <li>
                  <strong>Seventh:</strong> Finishes and decor. They can be
                  improved gradually over time.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                How MTBOSS Approaches an Architecture Project
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Step 1: Enquiry and discussion.</strong> Contact
                  MTBOSS through the website, phone or WhatsApp and share your
                  plot details, family needs and budget.
                </li>
                <li>
                  <strong>Step 2: Budget Calculator.</strong> The free
                  calculator on our website gives a starting estimate of
                  construction cost.
                </li>
                <li>
                  <strong>Step 3: Plot details and documents.</strong> Share
                  plot size, shape, direction, surroundings and any existing
                  drawings. Share your location in Rampur, and the team will
                  confirm arrangements for your area.
                </li>
                <li>
                  <strong>Step 4: Site study.</strong> The team studies the
                  plot or existing building, access, orientation and
                  surroundings.
                </li>
                <li>
                  <strong>Step 5: Brief and requirements.</strong> You and the
                  team discuss rooms, family routines, storage, parking, style
                  and future needs.
                </li>
                <li>
                  <strong>Step 6: Concept design.</strong> The team prepares
                  layout options and explains the reasoning.
                </li>
                <li>
                  <strong>Step 7: Design development.</strong> The chosen
                  concept is developed into detailed plans, elevations and 3D
                  views, where included.
                </li>
                <li>
                  <strong>Step 8: Structure and services coordination.</strong>{" "}
                  The design is coordinated with structural and services
                  requirements.
                </li>
                <li>
                  <strong>Step 9: Drawings and specifications.</strong> Working
                  drawings and specifications are prepared for approvals and
                  construction.
                </li>
                <li>
                  <strong>Step 10: Estimate and agreement.</strong> Current
                  material rates and a clear scope help prepare a realistic
                  cost outline, and terms are written down before work begins.
                </li>
                <li>
                  <strong>Step 11: Construction or execution.</strong> Where
                  taken up, construction proceeds in sequence, checked against
                  drawings.
                </li>
                <li>
                  <strong>Step 12: Interiors and finishing.</strong> Ceilings,
                  flooring, carpentry, painting and lighting are completed.
                </li>
                <li>
                  <strong>Step 13: Inspection and handover.</strong> A final
                  walk-through checks the work, small defects are corrected and
                  documents are handed over.
                </li>
                <li>
                  <strong>Step 14: After-handover support.</strong> Painter,
                  plumber, electrician, carpenter and waterproofing services
                  are available if you need them.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Choosing an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Trusting words like &quot;best&quot; and &quot;number
                  one&quot; without checking work and credentials.
                </li>
                <li>Choosing only on the lowest fee without comparing scope.</li>
                <li>Not verifying registration.</li>
                <li>Not visiting any completed work.</li>
                <li>
                  Appointing an architect without a written scope and staged
                  payments.
                </li>
                <li>
                  Starting construction before design and drawings are
                  finalised.
                </li>
                <li>Skipping structural design or relying on guesswork.</li>
                <li>
                  Ignoring budget during design, then cutting quality during
                  construction.
                </li>
                <li>Asking for many design changes late in the process.</li>
                <li>Not comparing at least two or three architects.</li>
                <li>
                  Ignoring how well you communicate with the person you will
                  work with.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What to Prepare Before Your First Meeting
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Plot details:</strong> Location in Rampur, size,
                  shape, direction, road width and surroundings.
                </li>
                <li>
                  <strong>Ownership and land documents:</strong> Papers showing
                  plot details and ownership.
                </li>
                <li>
                  <strong>Photos and videos:</strong> The plot, existing
                  building and neighbouring structures.
                </li>
                <li>
                  <strong>Family details:</strong> Number of members, ages,
                  elders, children and future plans.
                </li>
                <li>
                  <strong>Room requirements:</strong> Bedrooms, bathrooms,
                  kitchen, pooja, parking, store and guest areas.
                </li>
                <li>
                  <strong>Floors planned:</strong> Number of floors now, and
                  any future expansion.
                </li>
                <li>
                  <strong>Style preferences:</strong> Examples of homes you
                  like, and what you like about them.
                </li>
                <li>
                  <strong>Budget range:</strong> The amount you are comfortable
                  spending, and how firm it is.
                </li>
                <li>
                  <strong>Timeline:</strong> Any target dates for starting or
                  moving in.
                </li>
                <li>
                  <strong>Existing drawings:</strong> Any previous plans or
                  approvals.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                MTBOSS Services for Homeowners and Building Owners
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Construction and renovation:</strong> New homes,
                  extra floors, remodelling, repairs and waterproofing.
                </li>
                <li>
                  <strong>Architecture and interior:</strong> Planned design
                  for kitchens, bedrooms, living areas and offices.
                </li>
                <li>
                  <strong>Doorstep home services:</strong> Carpenter, painter,
                  electrician, plumber, tile and marble, false ceiling and
                  more.
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
                Why Consider MTBOSS Among Your Options
              </h3>
              <p className="mb-3">
                We do not ask you to take our word for it. We ask you to run
                the tests above and compare. Here is what you can check with
                us.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Plan before build:</strong> We study the plot and
                  your needs before suggesting a design.
                </li>
                <li>
                  <strong>Design and construction under one roof:</strong>{" "}
                  Planning, building, interiors and finishing can be handled by
                  one team.
                </li>
                <li>
                  <strong>Buildable designs:</strong> We keep your budget and
                  local building practice in view.
                </li>
                <li>
                  <strong>Free Budget Calculator:</strong> A simple starting
                  estimate before you commit.
                </li>
                <li>
                  <strong>Transparent estimates:</strong> Written, itemised
                  quotes with scope and specifications stated clearly.
                </li>
                <li>
                  <strong>Clear stages and deliverables:</strong> You know what
                  you receive at each step.
                </li>
                <li>
                  <strong>Single point of contact:</strong> One team handles
                  design, coordination and handover.
                </li>
                <li>
                  <strong>Based in Moradabad:</strong> A company on Kanth Road,
                  Moradabad, serving Moradabad and Bareilly.
                </li>
                <li>
                  <strong>Visible track record:</strong> A project gallery and
                  blog on our website.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Areas We Can Discuss in and Around Rampur
              </h3>
              <p>
                MTBOSS is based in Moradabad, and Rampur is a nearby city.
                Share your plot or property location in Rampur, and the team
                will confirm availability and arrangements for your area.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Contact MTBOSS: Architect for Rampur Clients
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
                  India.
                </li>
                <li>
                  <strong>Free Quote:</strong> Use the &quot;Get a Construction
                  Quote&quot; option on the website, or contact the team
                  directly by phone or WhatsApp.
                </li>
              </ul>
              <p className="mt-3">
                If you are looking for the best architect in Rampur for your
                home, run the checklist on this page with every option you
                consider. MTBOSS offers a single point of contact for planning,
                design, construction guidance and handover, supported by a free
                budget calculator and a simple online quote request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. How do I find the best architect in Rampur?</strong>
                  <br />
                  Compare two or three architects using the same checklist:
                  registration, site visit, listening, design reasoning, budget
                  awareness, structural coordination, drawings, past work and
                  site involvement. The one who scores well across all points
                  is usually the best fit.
                </li>
                <li>
                  <strong>Q2. Does MTBOSS provide architect services for
                  Rampur?</strong>
                  <br />
                  MTBOSS Construction Private Limited is based in Moradabad and
                  serves Moradabad and Bareilly. Share your plot location in
                  Rampur and your requirements with the team to confirm whether
                  and how services can be provided for your area.
                </li>
                <li>
                  <strong>Q3. What should I check before hiring an
                  architect?</strong>
                  <br />
                  Check Council of Architecture registration, completed
                  projects and drawings, the written scope and fee, how
                  structural coordination is handled, and whether a site visit
                  is included.
                </li>
                <li>
                  <strong>Q4. Is the cheapest architect a good choice?</strong>
                  <br />
                  Not always. A very low fee may mean limited scope, few
                  revisions or little site involvement. Compare what is
                  included, not only the fee.
                </li>
                <li>
                  <strong>Q5. How are architect fees charged?</strong>
                  <br />
                  Fees may be a percentage of project cost, a rate per area, a
                  fixed fee or hourly for consultation. Ask which method is
                  used, what it covers and how payments are staged.
                </li>
                <li>
                  <strong>Q6. Do I need both an architect and a structural
                  engineer?</strong>
                  <br />
                  Yes. The architect plans and designs the building, and a
                  qualified structural engineer designs the structure. The two
                  should be coordinated.
                </li>
                <li>
                  <strong>Q7. Can an architect help me stay within my
                  budget?</strong>
                  <br />
                  A good architect designs with your budget in view and can
                  give a rough construction cost range. Final costs depend on
                  materials, finishes and site conditions.
                </li>
                <li>
                  <strong>Q8. How long does design take?</strong>
                  <br />
                  Concept designs can take a short time, while detailed
                  drawings, 3D views and approval sets take longer. The
                  timeline depends on project size, revisions and how quickly
                  decisions are made, and it is confirmed in your agreement.
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