import React from "react";
import LandingEnquiry from "../../components/home/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Hotel Construction Cost Rampur: Know Where Every Rupee Goes Before You Build
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                A hotel is a business plan made of concrete. Every extra lakh in
                construction has to be earned back through room rents, so the cost of
                building matters far more than it does for a family home. Owners who
                start with only a total figure often discover later that the budget has
                to cover far more than walls and roofs: lifts, air conditioning, fire
                systems, kitchens, parking, furniture, approvals and a reserve for
                surprises.
              </p>
              <p className="mt-3">
                MTBoss is a construction and design company based at Harthala, Kanth
                Road, Moradabad. Our website lists hotel and hospitality among its
                construction categories, alongside architecture and interior design,
                waterproofing, electrician, plumber, false ceiling, tile and marble,
                painter and more. Planning a hotel in Rampur? Click{" "}
                <strong>&quot;Get a Construction Quote&quot;</strong> on{" "}
                <a
                  href="https://www.mtboss.in"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mtboss.in
                </a>{" "}
                or call +91 94584 10866 with your plot details, room count and budget
                range, and we will prepare an itemised estimate.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Service Details and Benefits
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Rate Snapshot
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Guest house or lodge specification:</strong> from ₹[X] to
                  ₹[Y] per sq ft of built-up area, covering [inclusions]
                </li>
                <li>
                  <strong>Budget and business hotel specification:</strong> from ₹[X]
                  to ₹[Y] per sq ft, or ₹[X] to ₹[Y] per room, covering [inclusions]
                </li>
                <li>
                  <strong>Mid-range family hotel specification:</strong> from ₹[X] to
                  ₹[Y] per sq ft, covering [inclusions]
                </li>
                <li>
                  <strong>Banquet hall attached to a hotel:</strong> priced separately,
                  from ₹[X] per sq ft
                </li>
                <li>
                  <strong>Rates exclude:</strong> [furniture, kitchen equipment,
                  authority fees, land, taxes if extra]
                </li>
                <li>
                  <strong>Rates valid until:</strong> [date, or &quot;subject to
                  changes in material prices&quot;]
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost Components in a Hotel Project
              </h3>
              <p className="mb-3">
                A clear estimate breaks the project into parts you can check.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Site preparation and foundations, including soil work and excavation
                </li>
                <li>
                  Structure: columns, beams, slabs, staircases and lift shafts
                </li>
                <li>Masonry, plaster and external finishing</li>
                <li>
                  Waterproofing, especially bathrooms, terraces and basements
                </li>
                <li>
                  Electrical work: wiring, panels, backup supply, lighting and data
                  cabling
                </li>
                <li>
                  Plumbing and drainage, including hot water and sewage handling
                </li>
                <li>Air conditioning and ventilation</li>
                <li>Lifts</li>
                <li>
                  Fire safety systems, as the approved design requires
                </li>
                <li>Flooring, tiling and bathroom finishes</li>
                <li>Doors, windows and joinery</li>
                <li>Ceilings, painting and wall finishes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Thinking in Cost Per Room
              </h3>
              <p>
                A per-room view connects building cost to income. Divide the
                construction budget by the number of rooms, then compare it with what
                each room can earn over a year at a realistic occupancy and rate.
                Remember that rooms share the cost of the lobby, corridors, kitchen,
                parking, lift and plant, so adding rooms does not raise cost in a
                straight line. At some point, a lift or an extra floor becomes
                economical, and below that point it is not. A local market check on
                room rates and demand makes this calculation honest.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Factors That Push Cost Up or Down
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Number and size of rooms:</strong> larger rooms and more
                  suites raise the rate per room
                </li>
                <li>
                  <strong>Finish level:</strong> tiles, sanitary ware, joinery,
                  ceilings and lighting vary widely in price
                </li>
                <li>
                  <strong>Number of floors and lifts:</strong> height adds structure,
                  stairs, lift and fire-safety cost
                </li>
                <li>
                  <strong>Structural span:</strong> banquet halls and wide dining areas
                  need heavier structure
                </li>
                <li>
                  <strong>Services standard:</strong> central air conditioning costs
                  more than split units, and backup power adds capacity cost
                </li>
                <li>
                  <strong>Kitchen and banquet scale:</strong> these add area,
                  equipment, exhaust and drainage
                </li>
                <li>
                  <strong>Site conditions:</strong> soft soil, a high water table or a
                  sloping plot raise foundation cost
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost Behaviour by Hotel Type
              </h3>
              <p className="mb-3">
                These notes describe how cost behaves, not what it is.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Guest house or lodge:</strong> a smaller building with simple
                  services and fewer staff, so cost per room can be modest, but it
                  rises quickly if you add a kitchen, lift or banquet hall
                </li>
                <li>
                  <strong>Budget and business hotel:</strong> a repeated room module
                  and efficient corridors keep cost controlled, with money going into
                  good bathrooms, soundproofing and air conditioning
                </li>
                <li>
                  <strong>Mid-range family hotel:</strong> larger rooms, a restaurant,
                  parking and some leisure space raise the total, and the kitchen and
                  public areas carry a bigger share
                </li>
                <li>
                  <strong>Hotel with a banquet hall:</strong> the hall, its kitchen,
                  parking and noise control can rival the rest of the building in cost
                </li>
                <li>
                  <strong>Highway hotel:</strong> parking, easy vehicle access and
                  quick-service dining shape the budget
                </li>
              </ul>
              <p className="mt-3">
                Tell us your type and target guests, and we will show where your money
                goes.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Worked Example With Placeholders
              </h3>
              <p className="mb-3">
                This illustration uses placeholders, not real prices. Please replace
                them with actual rates before publishing.
              </p>
              <p className="mb-3">
                Suppose a 30-room hotel with 15,000 sq ft of built-up area.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Foundations and structure: ₹[A]</li>
                <li>Masonry, plaster and external finishing: ₹[B]</li>
                <li>Waterproofing and bathrooms: ₹[C]</li>
                <li>Electrical and backup supply: ₹[D]</li>
                <li>Plumbing, hot water and drainage: ₹[E]</li>
                <li>Air conditioning and ventilation: ₹[F]</li>
                <li>Lift: ₹[G]</li>
                <li>Fire safety systems: ₹[H]</li>
                <li>Design, approvals and fees: ₹[L]</li>
                <li>Furniture, fittings and linen: ₹[M]</li>
                <li>Contingency reserve: ₹[N]</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Hidden Costs That Surprise Hotel Owners
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Items excluded and discussed late, such as lifts, air conditioning,
                  kitchen equipment or generators
                </li>
                <li>
                  Long-lead equipment that must be ordered early, with price changes
                  while you wait
                </li>
                <li>Soil and foundation surprises found after excavation</li>
                <li>
                  Approval and licence costs, including fire, food safety and trade
                  licences
                </li>
                <li>Connection charges for electricity, water and sewer</li>
                <li>
                  Furniture, mattresses, linen, crockery and operating supplies, often
                  forgotten in the construction budget
                </li>
                <li>Taxes shown only at the end</li>
              </ul>
              <p className="mt-3">
                A good proposal names exclusions and the rates for extras up front.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Ways to Control Cost Without Weakening the Hotel
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Fix the brief before design:</strong> target guests, price
                  band and room count drive everything
                </li>
                <li>
                  <strong>Test the typical room early,</strong> since a small flaw
                  repeated in every room is expensive to fix
                </li>
                <li>
                  <strong>Choose simple, repeating plans:</strong> a regular grid saves
                  structure, services and finishing
                </li>
                <li>
                  <strong>Compare itemised quotations, not totals</strong>
                </li>
                <li>
                  <strong>Order long-lead items early,</strong> to avoid delay and
                  price rise
                </li>
                <li>
                  <strong>Phase the build,</strong> if funds are tight
                </li>
                <li>
                  <strong>Keep a contingency reserve,</strong> and treat it as part of
                  the budget
                </li>
                <li>
                  <strong>Record every approved change in writing</strong>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Phasing the Build to Match Funding
              </h3>
              <p>
                Many owners open in stages. A sensible sequence builds the main block,
                reception, kitchen, parking and a first set of floors, then adds more
                floors, a banquet hall or leisure areas. Foundations, lift shafts,
                service risers and plant space should be sized for the full building
                from the start, so later phases do not force a shutdown. Rooms that
                open early earn income and can help fund later phases.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Timeline and Its Effect on Cost
              </h3>
              <p>
                Time is a cost in a hotel. Every month of delay adds loan interest,
                staff costs and lost bookings, so schedule and budget belong together.
                Good planning means a written programme with dates and responsibilities,
                early orders for lifts, air conditioning, generators and special
                glazing, protection of work from the monsoon and agreed testing and
                commissioning before opening. We give honest timeline estimates after
                the site visit and tell you promptly if they change.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Payments and Agreements
              </h3>
              <p>
                Fair payments follow completed and inspected work. A typical pattern is
                a modest advance to begin, instalments when defined stages are finished
                and a final payment after commissioning and correction of snags. Ask
                for a tax invoice with every payment, and be careful with demands for
                most of the money upfront. A sound agreement states the scope,
                specification, price, exclusions, schedule, payment stages, how changes
                are priced and approved and the defects period after handover. Have a
                qualified legal professional review any agreement before you sign.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Information That Gets You a Faster, Sharper Estimate
              </h3>
              <p className="mb-3">
                You do not need everything, but the more you share, the better our
                first reply.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A location pin of your plot</li>
                <li>
                  Plot size, shape and photographs from all sides and the road
                </li>
                <li>Plot papers or a map showing dimensions</li>
                <li>
                  Number of rooms you have in mind and your target guests
                </li>
                <li>
                  Whether you want a restaurant, banquet hall or both
                </li>
                <li>Your budget range and target opening date</li>
                <li>
                  Any drawings or brand standards you already have
                </li>
              </ul>
              <p className="mt-3">
                Send these on WhatsApp to +91 94584 10866 or through the{" "}
                <strong>&quot;Get a Construction Quote&quot;</strong> button on{" "}
                <a
                  href="https://www.mtboss.in"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mtboss.in
                </a>
                .
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Building in Rampur: Local Conditions That Affect Cost
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Monsoon:</strong> heavy rain delays excavation and
                  concreting, so schedules and protection of open work affect cost
                </li>
                <li>
                  <strong>Soil:</strong> soil varies from plot to plot, and a soil test
                  on a larger building avoids foundation surprises
                </li>
                <li>
                  <strong>Summer heat:</strong> hot weather raises cooling load, and
                  curing needs extra care
                </li>
                <li>
                  <strong>Access:</strong> narrow roads limit trucks and storage, which
                  can raise handling costs
                </li>
                <li>
                  <strong>Wedding and festival seasons:</strong> labour and material
                  availability can tighten, so plan around them
                </li>
                <li>
                  <strong>Local rules:</strong> depending on your plot&apos;s location,
                  the relevant development authority or local body sets rules on
                  coverage, parking and height, and hotels often need further
                  permissions
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Approvals That Affect Budget
              </h3>
              <p>
                A hotel may need building plan sanction, fire clearance, pollution
                control consent where applicable, food safety licences for the kitchen,
                trade and local licences, electricity and water connections and, if you
                want it, tourism department registration or classification.
                Requirements and costs depend on the authorities and change over time,
                so confirm each one for your project. We cannot promise approval or any
                star rating, because only the authorities decide.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Warning Signs in a Hotel Cost Quotation
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  A single per-room or per-square-foot figure with no list of
                  inclusions
                </li>
                <li>
                  A price far below every other quotation, with no explanation
                </li>
                <li>
                  Lifts, air conditioning, fire systems or kitchens missing without
                  comment
                </li>
                <li>
                  &quot;Standard material&quot; with no grades named
                </li>
                <li>
                  No schedule, or a schedule that ignores long-lead items
                </li>
                <li>
                  A large advance demanded before any paperwork
                </li>
                <li>No written agreement</li>
                <li>No named engineer or supervisor</li>
              </ul>
              <p className="mt-3">
                Any one of these is a reason to ask more questions.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Questions to Put to Any Builder Before You Sign
              </h3>
              <p>
                Ask what is included and excluded, which area or room count the rate is
                based on, how long the rate stays valid, how payments are linked to
                progress, how changes and long-lead items are handled and who
                supervises the work. A confident builder answers plainly and puts the
                answers in writing.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Choose MTBoss
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Hotel and hospitality on our website.</strong> MTBoss lists
                  hotel and hospitality among its construction categories, alongside
                  residential, commercial, industrial and infrastructure work.
                </li>
                <li>
                  <strong>Itemised, written estimates.</strong> You see quantities,
                  materials, labour, timeline and payment stages before you commit, not
                  just a total.
                </li>
                <li>
                  <strong>Design and construction under one team.</strong> Our design
                  team can prepare drawings, so layout, structure and cost are checked
                  together.
                </li>
                <li>
                  <strong>Every trade under one brand.</strong> Our website lists
                  waterproofing, electrician, plumber, false ceiling, tile and marble,
                  painter, carpenter, door and window installation and more, so one
                  team can coordinate the work.
                </li>
                <li>
                  <strong>Early budget guidance.</strong> The Budget Calculator on our
                  website gives a quick idea of cost before you spend anything.
                </li>
                <li>
                  <strong>Flexible contracts.</strong> Choose turnkey, material plus
                  labour, labour only or item rate, whichever suits your budget and
                  time.
                </li>
                <li>
                  <strong>Honest about promises.</strong> We do not guarantee approvals
                  or star ratings, and we do not claim registrations or rankings we
                  cannot show. Our office is in Moradabad, and we serve Rampur through
                  site visits and regular updates.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Call to Action (CTA)
              </h3>
              <p className="mb-3">
                Ready to turn a rough budget into an itemised hotel estimate? Start
                your enquiry with MTBoss today.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Phone / WhatsApp:</strong>{" "}
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
                    href="mailto:mtboss2016@gmail.com"
                    className="text-blue-600 underline"
                  >
                    mtboss2016@gmail.com
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
                  </a>{" "}
                  (click{" "}
                  <strong>&quot;Get a Construction Quote&quot;</strong>)
                </li>
                <li>
                  <strong>Office:</strong> Harthala, Kanth Road, Moradabad (behind KR
                  Collection, near Domino&apos;s)
                </li>
              </ul>
              <p className="mt-3">
                Send your plot location, room count, target guests and budget range,
                and we will arrange a site visit and a written estimate.
              </p>
              <p className="mt-3">
                <strong>
                  Budget your hotel with MTBoss: itemised costs, named inclusions and
                  no surprises on the bill.
                </strong>
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions (FAQs)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. What is the hotel construction cost in Rampur?</strong>
                  <br />
                  It depends on rooms, finish, services and site. We give an itemised
                  estimate after a visit [add range if published].
                </li>
                <li>
                  <strong>Q2. Do you have an office in Rampur?</strong>
                  <br />
                  No. We serve Rampur through visits, shared drawings and updates.
                </li>
                <li>
                  <strong>Q3. Is cost quoted per room or per sq ft?</strong>
                  <br />
                  We show both, with inclusions and exclusions listed in writing.
                </li>
                <li>
                  <strong>Q4. What costs sit outside the construction rate?</strong>
                  <br />
                  Furniture, kitchen equipment, authority fees, connections and
                  pre-opening costs.
                </li>
                <li>
                  <strong>Q5. Do lifts, air conditioning and fire systems cost
                  extra?</strong>
                  <br />
                  They are priced as separate lines, so you can see each clearly.
                </li>
                <li>
                  <strong>Q6. Can I build in phases?</strong>
                  <br />
                  Yes. We plan foundations and services for the full building.
                </li>
                <li>
                  <strong>Q7. How are payments structured?</strong>
                  <br />
                  In stages linked to completed work, with a tax invoice for each
                  payment.
                </li>
                <li>
                  <strong>Q8. Can I check the cost first?</strong>
                  <br />
                  Yes. Use the Budget Calculator on{" "}
                  <a
                    href="https://www.mtboss.in"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mtboss.in
                  </a>{" "}
                  for an early idea.
                </li>
                <li>
                  <strong>Q9. How do I contact MTBoss?</strong>
                  <br />
                  Call or WhatsApp +91 94584 10866, or use{" "}
                  <strong>&quot;Get a Construction Quote&quot;</strong> on{" "}
                  <a
                    href="https://www.mtboss.in"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mtboss.in
                  </a>
                  .
                </li>
                <li>
                  <strong>Q10. Which areas do you serve?</strong>
                  <br />
                  Moradabad, Bareilly and nearby areas. Confirm Rampur when you first
                  contact us.
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