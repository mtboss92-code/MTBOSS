import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            What Sets Good Architects Apart and How to Shortlist One
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A search for the top architect in Rampur will give you a list
                of names, rankings and badges. Most of them tell you very
                little about what actually matters: will this person understand
                your plot, respect your budget, communicate clearly and deliver
                a house that works?
              </p>
              <p className="mt-3">
                Reputation is useful, but it is only a starting point. What
                separates a top architect from an average one is visible in how
                they work, how they explain and what they have built.
              </p>
              <p className="mt-3">
                This page helps you move from a list of names to a confident
                decision. You will see the habits of strong architects, a
                method to build a shortlist, ways to read references and
                reviews, and a simple decision matrix. It also explains how
                MTBOSS Construction Private Limited approaches design.
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
                What Sets a Top Architect Apart: At a Glance
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Habit
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What it looks like
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Why it matters
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Asks before drawing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Detailed questions about family, routines and budget
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        The design fits you, not a template
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Studies the site
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visits the plot, notes light, road, slope and
                        surroundings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Prevents orientation and access mistakes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Explains reasons
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Gives clear logic for each decision
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        You understand what you are paying for
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Designs within budget
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Keeps construction cost in view
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        You can actually build the design
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Coordinates the team
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Works with structural engineer and services
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Fewer clashes on site
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Documents clearly
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Complete drawings and specifications
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Builders know what to build
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Communicates honestly
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Flags limits, risks and trade-offs early
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        No unpleasant surprises
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Stays involved
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Reviews work and answers site queries
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Design survives construction
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Shows real work
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Completed projects, plans and references
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Quality is verifiable
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Respects your decisions
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Advises, but does not impose
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        The home remains yours
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Your plot, family and budget matter more than any ranking.
                MTBOSS helps you plan a home that fits your land and your life.
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
                Why &quot;Top&quot; Needs Careful Reading
              </h3>
              <p className="mb-3">
                Rankings and badges can mislead. Keep these points in mind.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Online lists are often paid or self-reported:</strong>{" "}
                  A name at the top of a list does not prove quality.
                </li>
                <li>
                  <strong>Reviews can be selective:</strong> A handful of
                  ratings says little about consistency.
                </li>
                <li>
                  <strong>Awards may not match your needs:</strong> A design
                  award for a commercial building says little about a family
                  house on a narrow plot.
                </li>
                <li>
                  <strong>Size is not quality:</strong> A large firm is not
                  automatically better than a small studio, and the reverse is
                  also true.
                </li>
                <li>
                  <strong>Style is not skill:</strong> A fashionable look can
                  hide weak planning.
                </li>
                <li>
                  <strong>Fame is not fit:</strong> The most famous architect
                  may not suit your budget, timeline or taste.
                </li>
              </ul>
              <p className="mt-3">
                Treat rankings as a way to find names, and use evidence to
                decide.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Step One: Build Your Shortlist
              </h3>
              <p className="mb-3">
                Start broad, then narrow down using facts.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Ask people who have built recently:</strong> Friends,
                  relatives and neighbours can tell you about communication,
                  delays and costs.
                </li>
                <li>
                  <strong>Visit completed houses:</strong> Walk through homes
                  in Rampur or nearby that you admire, and ask who designed
                  them.
                </li>
                <li>
                  <strong>Check portfolios online:</strong> Look for work
                  similar to yours in size, budget and style.
                </li>
                <li>
                  <strong>Verify registration:</strong> Confirm Council of
                  Architecture registration for anyone calling themselves an
                  architect.
                </li>
                <li>
                  <strong>Note response quality:</strong> Observe how quickly
                  and clearly each name responds to your first message.
                </li>
                <li>
                  <strong>Aim for three:</strong> Two is too few for
                  comparison, and more than four becomes confusing.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Step Two: Read References and Reviews Properly
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Ask for two or three past clients you can speak
                  to:</strong> A confident architect will provide them.
                </li>
                <li>
                  <strong>Ask clients about communication:</strong> Did the
                  architect reply, listen and explain?
                </li>
                <li>
                  <strong>Ask about budget behaviour:</strong> Did the final
                  cost match the plan, and why or why not?
                </li>
                <li>
                  <strong>Ask about timelines:</strong> Were design and
                  construction support delivered on time?
                </li>
                <li>
                  <strong>Ask about problems:</strong> How were mistakes and
                  disagreements handled?
                </li>
                <li>
                  <strong>Ask about the finished house:</strong> How does it
                  work in daily life, in summer, monsoon and winter?
                </li>
                <li>
                  <strong>Check reviews for detail:</strong> Detailed reviews
                  carry more weight than short praise.
                </li>
                <li>
                  <strong>Notice patterns:</strong> The same complaint repeated
                  by several clients is a signal.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Step Three: The First Meeting
              </h3>
              <p className="mb-3">
                A good first meeting tells you most of what you need to know.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Does the architect ask more than they tell?</strong>{" "}
                  Good design starts with understanding.
                </li>
                <li>
                  <strong>Do they discuss your budget openly?</strong> Avoiding
                  the subject is a warning sign.
                </li>
                <li>
                  <strong>Do they explain how they work?</strong> Stages,
                  timelines and deliverables should be clear.
                </li>
                <li>
                  <strong>Do they speak plainly?</strong> Heavy jargon that
                  confuses you is not a good sign.
                </li>
                <li>
                  <strong>Do they raise concerns about your plot or plan?</strong>{" "}
                  Honest feedback is valuable.
                </li>
                <li>
                  <strong>Do you feel comfortable?</strong> You will work
                  together for months, so rapport matters.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Ask Each Shortlisted Architect
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
                  How do you handle my budget during design? Ask for a rough
                  cost range.
                </li>
                <li>
                  Do you help with approvals, and what do I need to provide?
                  Ask for specifics.
                </li>
                <li>
                  How often will you visit the site during construction? Ask
                  for stages.
                </li>
                <li>
                  Can I speak to past clients and see completed projects?
                  References matter.
                </li>
                <li>
                  What could go wrong with my plot or plan? Honest answers show
                  experience.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Decision Matrix: Compare Your Shortlist
              </h3>
              <p className="mb-3">
                Score each architect from one to five on each factor, then
                total.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Factor
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Weight
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Architect A
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Architect B
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Architect C
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Credentials and registration
                      </td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Understanding of my needs
                      </td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Site visit and site study
                      </td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Design reasoning and quality
                      </td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Budget awareness
                      </td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Structural and services coordination
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Medium
                      </td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Clarity of scope, fee and deliverables
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Medium
                      </td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Past work and references
                      </td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Communication and responsiveness
                      </td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Site involvement during construction
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Medium
                      </td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        Personal comfort and trust
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Medium
                      </td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                If two architects score closely, choose the one whose
                communication and honesty you trust more. A design is a long
                conversation, and clarity helps every stage.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What a Good Architect Actually Does
              </h3>
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
                Warning Signs of a Weak Architect or Design Service
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Claims to be &quot;top&quot; or &quot;number one&quot; but
                  cannot show completed work.
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
                <li>
                  Avoids giving references or showing completed projects.
                </li>
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
                From Design to Construction: How the Process Flows
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-left text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Stage
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        What happens
                      </th>
                      <th className="border border-gray-200 px-4 py-3 font-semibold">
                        Why it matters
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        1. Brief and plot study
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Needs, budget and land are understood
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Everything depends on a clear brief
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        2. Concept design
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Layout options are explored
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        You choose a direction before details
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        3. Detailed design
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Rooms, sizes, elevations and 3D views developed
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        You see what you will get
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        4. Approval drawings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Drawings prepared for submission
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Needed before construction where required
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        5. Structural and services design
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Engineer and service plans coordinated
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Safe, buildable structure and clean services
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        6. Working drawings and specifications
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Details, materials and finishes defined
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Builders know exactly what to build
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        7. Estimate and selection of builder
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Costs outlined, builder or contractor selected
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Budget and quality are agreed
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        8. Construction
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Building proceeds with checks against drawings
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Design turns into reality
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        9. Interiors and finishing
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Ceilings, carpentry, flooring and painting
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        The home becomes liveable
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">
                        10. Handover
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Final inspection and documents
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        You receive a finished, checked home
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Approvals and Documents: What to Expect
              </h3>
              <p className="mb-3">
                Building rules differ by location and project type. In general,
                you can expect the following to matter.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Ownership and plot documents:</strong> Proof of
                  ownership and plot details.
                </li>
                <li>
                  <strong>Land use and zoning:</strong> Whether the plot is
                  approved for residential or other use.
                </li>
                <li>
                  <strong>Building plan approval:</strong> Drawings submitted
                  to the relevant local authority where required.
                </li>
                <li>
                  <strong>Setbacks and height limits:</strong> Rules on
                  distance from boundaries, built-up area and floors.
                </li>
                <li>
                  <strong>Structural design:</strong> A qualified structural
                  engineer&apos;s design and safety checks.
                </li>
                <li>
                  <strong>Utility connections:</strong> Water, electricity and
                  drainage approvals and connections.
                </li>
                <li>
                  <strong>Completion and occupancy documents:</strong> Where
                  required by local rules.
                </li>
              </ul>
              <p className="mt-3">
                Rules change, so check requirements with the local authority
                and your architect before starting. No architect can guarantee
                an approval.
              </p>
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
                  <strong>Reputation and experience:</strong> More experienced
                  architects may charge more, and it should show in the quality
                  of reasoning and results.
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
                Fees may be a percentage of project cost, a rate per area, a
                fixed fee or hourly for consultation. Ask which method is used
                and how payments are staged. Use the free MTBOSS Budget
                Calculator on the website for a starting estimate of
                construction cost.
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
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Mistakes When Shortlisting an Architect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Choosing from a &quot;top&quot; list without checking work,
                  registration or references.
                </li>
                <li>
                  Judging only by glossy photos and not by plans and built
                  results.
                </li>
                <li>Choosing only on fee without comparing scope.</li>
                <li>Not speaking to any past client.</li>
                <li>
                  Choosing an architect whose style you like but whose budget
                  awareness is poor.
                </li>
                <li>
                  Appointing without a written scope and staged payments.
                </li>
                <li>
                  Starting construction before design and drawings are
                  finalised.
                </li>
                <li>Skipping structural design or relying on guesswork.</li>
                <li>Not comparing at least two or three architects.</li>
                <li>
                  Ignoring how comfortable you feel communicating with the
                  person.
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
                If you are looking for a top architect in Rampur, build your
                shortlist with the steps on this page and compare every option
                on the same checklist. MTBOSS offers a single point of contact
                for planning, design, construction guidance and handover,
                supported by a free budget calculator and a simple online quote
                request.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. How do I identify a top architect in
                  Rampur?</strong>
                  <br />
                  Look beyond rankings. Verify registration, check completed
                  projects and drawings, speak to past clients, and compare two
                  or three architects on the same checklist.
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
                  <strong>Q3. Is a well-known architect always the better
                  choice?</strong>
                  <br />
                  Not necessarily. Fame and size do not guarantee a good fit.
                  Budget awareness, communication, understanding of your plot
                  and reliable follow-through matter more for most homes.
                </li>
                <li>
                  <strong>Q4. How can I verify an architect&apos;s
                  credentials?</strong>
                  <br />
                  Ask for the Council of Architecture registration number and
                  verify it through official channels before appointing.
                </li>
                <li>
                  <strong>Q5. What should I look for in an architect&apos;s
                  past work?</strong>
                  <br />
                  Look at floor plans as well as photographs, check light and
                  ventilation, circulation, detailing and finishing, and ask
                  which images show completed buildings.
                </li>
                <li>
                  <strong>Q6. Should I speak to past clients?</strong>
                  <br />
                  Yes. Ask about communication, budget, timelines, how problems
                  were handled and how the home works in daily life.
                </li>
                <li>
                  <strong>Q7. How much do top architects charge in Rampur?</strong>
                  <br />
                  Fees depend on project size, scope, experience and services.
                  They may be a percentage of project cost, a rate per area or
                  a fixed fee. Ask for a written scope and fee structure, and
                  compare what is included. Use the free MTBOSS Budget
                  Calculator for a starting estimate of construction cost.
                </li>
                <li>
                  <strong>Q8. Can an architect guarantee building plan
                  approval?</strong>
                  <br />
                  No. Approval depends on local rules and authorities. A
                  well-prepared drawing set that follows the rules makes
                  approval smoother, but no one can guarantee it.
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