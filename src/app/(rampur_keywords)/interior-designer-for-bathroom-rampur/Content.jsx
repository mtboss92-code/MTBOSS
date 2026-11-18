import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Interior Designer for Bathroom Rampur – Bathroom Makeovers and Renovation by
            MTBOSS
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Nobody wakes up wanting a new bathroom. People start thinking about it
                when something annoys them: a leak that stains the wall below, tiles that
                crack, water that never drains, a smell that will not go away or a room
                so cramped that two people cannot stand in it at once.
              </p>
              <p className="mt-3">
                MTBOSS Construction Private Limited is an architecture, interior and
                construction company serving Rampur, Moradabad and Bareilly. We design
                and renovate bathrooms and washrooms, with waterproofing, plumbing
                coordination, tiling, fittings, ceilings and finishing handled by one
                team.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Our Bathroom Services
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Complete bathroom design and renovation</li>
                <li>Waterproofing and leakage treatment</li>
                <li>Plumbing and drainage coordination</li>
                <li>Floor and wall tile selection and installation</li>
                <li>
                  Sanitaryware, tap and shower selection and fitting
                </li>
                <li>Vanity, mirror and storage design</li>
                <li>Shower partitions and glass screens</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Refresh, Renovate or Rebuild: What Does Your Bathroom Need?
              </h3>
              <p className="mb-3">
                Most bathrooms fall into one of three situations. Knowing which one you
                are in saves money and prevents regret.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                A Refresh
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>When it fits:</strong> The structure, plumbing and
                  waterproofing are sound, but the look is tired.
                </li>
                <li>
                  <strong>What it includes:</strong> New paint or wall finishes where
                  suitable, new mirror and lights, new taps and accessories, a new vanity
                  or storage unit, fresh grouting and a thorough clean.
                </li>
                <li>
                  <strong>What it does not fix:</strong> Hidden leaks, damaged pipes or a
                  poor floor slope.
                </li>
              </ul>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                A Renovation
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>When it fits:</strong> Tiles are old or damaged, fittings are
                  worn out, but the layout is acceptable.
                </li>
                <li>
                  <strong>What it includes:</strong> Removing old tiles and fittings,
                  repairing plumbing where needed, new waterproofing, new tiles, new
                  sanitaryware and fittings, new lighting and ventilation.
                </li>
                <li>
                  <strong>What it delivers:</strong> A new bathroom in the same
                  footprint, with proper waterproofing and drainage.
                </li>
              </ul>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                A Rebuild
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>When it fits:</strong> Pipes are corroded or badly placed,
                  leakage has damaged walls or slabs, the layout is awkward or you want
                  to move fixtures or enlarge the room.
                </li>
                <li>
                  <strong>What it includes:</strong> Everything in a renovation, plus
                  changes to walls, doors, drains and pipe routes, and any structural or
                  civil repairs.
                </li>
                <li>
                  <strong>What it delivers:</strong> A bathroom that works better and
                  solves the root problem.
                </li>
              </ul>
              <p className="mt-3">
                We inspect first and tell you honestly which level is appropriate, even
                if the answer is the smaller one.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Bathroom Problems and What Causes Them
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Leakage and Damp Patches on Walls or Ceilings
              </h4>
              <p>
                <strong>Likely causes:</strong> Failed waterproofing, damaged pipes
                behind the wall, poorly sealed joints around fittings, or a floor with no
                proper slope or protection.
              </p>
              <p>
                <strong>Solution:</strong> Find the source first. Depending on the cause,
                the answer may be pipe repair, re-sealing, new waterproofing or a full
                re-tiling. Painting over damp patches does not fix them.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Water Standing on the Floor
              </h4>
              <p>
                <strong>Likely causes:</strong> Wrong slope, blocked drain or a drain
                placed at the wrong level.
              </p>
              <p>
                <strong>Solution:</strong> Correct the slope during re-tiling, and fit a
                suitable drain and trap.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Bad Smell from the Drain
              </h4>
              <p>
                <strong>Likely causes:</strong> Dry or missing water trap, poor
                ventilation of the drain line or a partial blockage.
              </p>
              <p>
                <strong>Solution:</strong> Install or repair proper traps, check venting
                and clean or clear the drain.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Slippery Floors
              </h4>
              <p>
                <strong>Likely causes:</strong> Glossy tiles, soap film or moss in damp
                areas.
              </p>
              <p>
                <strong>Solution:</strong> Use anti-skid tiles or finishes, and clean
                regularly.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                White Scale on Tiles, Taps and Glass
              </h4>
              <p>
                <strong>Likely causes:</strong> Hard water leaving mineral deposits.
              </p>
              <p>
                <strong>Solution:</strong> Use easy-clean finishes, clean regularly with
                suitable products and consider water treatment options where appropriate.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Mould and Black Patches
              </h4>
              <p>
                <strong>Likely causes:</strong> Poor ventilation, constant moisture and
                leaks.
              </p>
              <p>
                <strong>Solution:</strong> Improve ventilation, fix leaks, clean with
                suitable products and use moisture-resistant finishes.
              </p>
              
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Planning by Bathroom Size
              </h3>
              <p className="mb-3">
                The sizes below are only rough guides. We plan from your actual
                dimensions.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Small Bathroom:</strong> A compact room needs careful planning.
                  Consider a wall-hung or compact toilet, a slim basin or wall-mounted
                  vanity, a glass screen instead of a curtain, light-coloured tiles and a
                  large mirror. Use niches for storage instead of bulky shelves. An
                  outward-opening or sliding door can save space.
                </li>
                <li>
                  <strong>Medium Bathroom:</strong> A medium room can include a toilet, a
                  vanity with storage, a shower area with partition and some wall niches.
                  Keep walking space clear and the wet area separate from the dry area.
                </li>
                <li>
                  <strong>Large Bathroom:</strong> More space allows a double vanity, a
                  separate shower enclosure, a bathtub, a seating bench or a dressing
                  corner. Larger rooms need stronger lighting plans and good ventilation,
                  since they can feel cold or empty if not designed carefully.
                </li>
                <li>
                  <strong>Powder Room or Guest Washroom:</strong> A small room with a
                  basin, toilet and stylish mirror can make a strong impression. Use a
                  feature tile or wall and good lighting.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Wet Area and Dry Area Planning
              </h3>
              <p className="mb-3">
                Separating the zones keeps the bathroom safer and cleaner.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Wet zone:</strong> Shower, bathtub and the drain area.
                </li>
                <li>
                  <strong>Dry zone:</strong> Toilet, basin, storage and mirror.
                </li>
                <li>
                  <strong>Dividers:</strong> Glass screens, curtains or a slight level
                  change.
                </li>
                <li>
                  <strong>Floor slope:</strong> Water should flow gently toward the
                  drain, away from doors and dry areas.
                </li>
                <li>
                  <strong>Door position:</strong> Avoid placing the door directly in the
                  line of the shower spray.
                </li>
                <li>
                  <strong>Hooks and rods:</strong> Place them where towels will stay dry.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Fixture Heights: A Rough Guide
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Wash basin:</strong> The rim is often around 32 to 34 inches
                  from the floor, with adjustments for children or tall users.
                </li>
                <li>
                  <strong>Mirror:</strong> The bottom edge is often around four feet from
                  the floor, with height set to suit the people using it.
                </li>
                <li>
                  <strong>Shower head:</strong> Often fixed around six and a half to
                  seven feet from the floor, higher for taller users.
                </li>
                <li>
                  <strong>Towel rod:</strong> Around four to four and a half feet from
                  the floor, away from direct splashes.
                </li>
                <li>
                  <strong>Toilet paper holder:</strong> Within easy reach of the seated
                  user.
                </li>
                <li>
                  <strong>Grab bars:</strong> Placed securely at heights suited to the
                  user&rsquo;s needs.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Style Directions for Bathrooms
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Modern Minimal:</strong> Large tiles, few joints, wall-hung
                  fixtures, a simple vanity and a neutral palette. It looks clean and is
                  easy to maintain.
                </li>
                <li>
                  <strong>Warm Stone-Look:</strong> Textured tiles in stone-like
                  patterns, warm lighting and wooden-look accessories create a calm,
                  spa-like feel.
                </li>
                <li>
                  <strong>Classic and Elegant:</strong> Patterned floor tiles, framed
                  mirrors, brass-like fittings and soft colours give a traditional look.
                </li>
                <li>
                  <strong>Bright and Fresh:</strong> Light tiles, a feature wall in a
                  soft colour and plenty of light make small bathrooms feel open.
                </li>
                <li>
                  <strong>Bold Feature:</strong> A single dramatic wall, such as
                  patterned tiles or a deep colour, can give character without
                  overwhelming the room.
                </li>
                <li>
                  <strong>Practical Family Style:</strong> Durable, anti-skid,
                  easy-clean finishes with simple fittings. This is often the best choice
                  for busy households, and it can still look good.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Choosing Tile and Colour Combinations
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
             
                <li>
                  Large tiles reduce grout lines and cleaning effort. In small bathrooms,
                  they can make the room feel more spacious.
                </li>
                <li>
                  Mosaic or small tiles give grip and suit sloped shower areas, but have
                  more joints to keep clean.
                </li>
                <li>
                  Matte or textured finishes are safer on floors. Glossy finishes work
                  better on walls.
                </li>
                <li>
                  Feature wall behind the vanity or in the shower can add colour and
                  pattern while the rest stays simple.
                </li>
                <li>
                  Grout colour should match or blend with the tile to hide stains.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Storage Ideas That Keep the Bathroom Tidy
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wall niches inside the shower for shampoo and soap</li>
                <li>Mirror cabinet for small daily items</li>
                <li>Vanity with drawers for towels and toiletries</li>
                <li>Open shelf for decorative items and spare towels</li>
                <li>Over-toilet cabinet in small rooms</li>
                <li>Tall slim unit for supplies and cleaning items</li>
                <li>Hooks and rods in dry zones for towels and clothes</li>
                <li>Laundry basket space, if there is room</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Lighting and Ventilation
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Even general light keeps the room safe and clear.</li>
                <li>
                  Mirror lighting on both sides or above the mirror helps with grooming.
                </li>
                <li>
                  Moisture-rated fittings should be used in wet zones.
                </li>
                <li>
                  Warm lights feel relaxing, while very cold lights can feel harsh.
                </li>
                <li>
                  Night light near the floor helps late-night visits.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Living Without Your Bathroom During Renovation
              </h3>
              <p className="mb-3">
                A bathroom renovation usually takes some days, and the bathroom is
                unusable during that time. A little planning makes it easier.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use a second bathroom if you have one.</li>
                <li>Arrange temporary facilities if needed.</li>
                <li>Keep valuables and clothes away from the work area.</li>
                <li>Check progress regularly with the supervisor.</li>
                <li>
                  Allow curing time for waterproofing and tile adhesive, since rushing
                  this stage causes problems later.
                </li>
                <li>
                  Tell us your constraints, and we will plan the schedule around your
                  family.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost Factors
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Size of the bathroom and wall height</li>
                <li>
                  Condition of existing pipes, drains and waterproofing
                </li>
                <li>Level of work: refresh, renovation or rebuild</li>
                <li>Tile size, quality and pattern</li>
                <li>Type and quality of sanitaryware and fittings</li>
                <li>Vanity, mirror and storage units</li>
              </ul>
              <p className="mt-3">Budget tips:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Spend first on waterproofing, plumbing and drainage, which protect the
                  building.
                </li>
                <li>
                  Choose quality taps, flush systems and mixers, because they are used
                  constantly.
                </li>
                <li>
                  Use one feature wall and keep the rest simple.
                </li>
                <li>
                  Select anti-skid floors and easy-clean wall finishes.
                </li>
                <li>
                  Keep a reserve of 8 to 10%, because hidden problems may appear when old
                  tiles are removed.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Daily and Weekly Care Routine
              </h3>
              <p className="mb-3">
                A few simple habits keep a bathroom looking new.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Squeegee or wipe shower glass and tiles after use.</li>
                <li>Keep the exhaust fan on for a short time after showers.</li>
                <li>Clean the floor drain and remove hair regularly.</li>
                <li>
                  Check silicone and grout lines for gaps, and repair them early.
                </li>
                <li>Fix dripping taps and running cisterns quickly.</li>
                <li>Keep towels and mats dry and aired.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Bathrooms in Rampur Homes
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Monsoon humidity:</strong> Good ventilation and quick drying
                  help prevent mould and smell.
                </li>
                <li>
                  <strong>Hard water:</strong> In many areas, scale builds up on tiles
                  and fittings, so choose easy-clean finishes and regular maintenance.
                </li>
                <li>
                  <strong>Summer heat:</strong> Light tiles and good airflow keep
                  bathrooms fresher.
                </li>
                <li>
                  <strong>Older houses:</strong> Old pipes and weak waterproofing are
                  common, so inspection before renovation is especially valuable.
                </li>
                <li>
                  <strong>Shared family use:</strong> Bathrooms used by many people need
                  strong anti-skid floors, durable fittings and simple, wipeable
                  surfaces.
                </li>
              </ul>
              <p className="mt-3">
                We serve homes in Rampur, including Civil Lines and other residential
                areas, as well as Moradabad and Bareilly.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Do Homeowners Choose MTBOSS for Bathroom Work?
              </h3>
              <p>
                Homeowners choose us because we deal with the cause, not just the
                surface. MTBOSS combines waterproofing, plumbing coordination, tiling,
                carpentry, ceilings, electrical support and finishing under one team, so
                there are fewer gaps between trades. We inspect first, explain what we
                find and give an itemised quotation.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Bathroom Renovation Mistakes
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Tiling over old problems:</strong> Hidden leaks and weak
                  waterproofing return.
                </li>
                <li>
                  <strong>Skipping the leak test:</strong> Water problems appear after
                  tiling, when repairs are costly.
                </li>
                <li>
                  <strong>Choosing glossy floor tiles:</strong> They are slippery when
                  wet.
                </li>
                <li>
                  <strong>Ignoring ventilation:</strong> Damp and mould follow.
                </li>
                <li>
                  <strong>Cheap fittings:</strong> Leaks and breakages become regular
                  annoyances.
                </li>
                <li>
                  <strong>Wrong fixture heights:</strong> Basins, showers and mirrors
                  that do not suit the users cause daily discomfort.
                </li>
                <li>
                  <strong>No storage plan:</strong> The room fills with bottles and
                  clutter.
                </li>
                <li>
                  <strong>Switches and sockets too close to water:</strong> This is
                  unsafe.
                </li>
                <li>
                  <strong>Hiring only on the lowest price:</strong> Cheap quotes often
                  leave out waterproofing, drainage or quality materials.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Is It Worth Renovating an Old Bathroom Instead of Moving the Fixtures?
              </h3>
              <p>
                Often yes. Keeping fixtures in their existing positions saves plumbing
                and drainage work, which are among the costliest parts of a bathroom. If
                the layout works for your family, a renovation with new waterproofing,
                tiles and fittings usually gives good value. Moving fixtures makes sense
                when the layout is awkward, the room is unsafe or you want a bigger
                change. In that case, planning pipe routes and floor levels carefully
                avoids new problems. We can compare both options for your bathroom and
                explain the likely cost and time of each.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Plan Your Bathroom with MTBOSS
              </h3>
              <p className="mb-3">
                Ready to fix, upgrade or redesign your bathroom? Share your bathroom
                size, photos, current problems and budget range. Our team will visit,
                inspect, discuss options and give you a clear plan, quotation and
                schedule.
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
                  href="https://www.mtboss.in"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Quote
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
                  Estimate Your Budget
                </a>
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Q1. How do I know whether my bathroom needs a refresh or a
                  full renovation?</strong>
                  <br />
                  If the structure, plumbing and waterproofing are sound and only the
                  look is tired, a refresh may be enough. If you see leaks, damp patches,
                  cracked tiles or drainage problems, a renovation or rebuild is wiser.
                  An inspection gives a clear answer.
                </li>
                <li>
                  <strong>Q2. Why does my bathroom wall have damp patches?</strong>
                  <br />
                  Common causes include failed waterproofing, leaking pipes, poor sealing
                  around fittings or a floor without proper slope. The source must be
                  found and fixed before repainting.
                </li>
                <li>
                  <strong>Q3. How can I stop the bad smell from my bathroom drain?</strong>
                  <br />
                  Check that the water trap is working, the drain line is vented properly
                  and there is no blockage. Good ventilation also helps.
                </li>
                <li>
                  <strong>Q4. Which tiles are best for a small bathroom?</strong>
                  <br />
                  Light-coloured, large-format wall tiles and anti-skid floor tiles
                  usually work well, since they make the room feel larger and reduce
                  grout lines.
                </li>
                <li>
                  <strong>Q5. How do I remove white scale from taps and tiles?</strong>
                  <br />
                  Regular wiping and suitable cleaning products help. Choosing easy-clean
                  fittings and considering water treatment options can also reduce scale
                  over time.
                </li>
                <li>
                  <strong>Q6. Can you add storage to a very small bathroom?</strong>
                  <br />
                  Yes. Wall niches, mirror cabinets, slim vertical units and hooks make
                  good use of limited space without crowding the room.
                </li>
                <li>
                  <strong>Q7. Is a glass partition better than a shower curtain?</strong>
                  <br />
                  Glass looks cleaner, keeps splashes in and makes small rooms feel
                  larger, but needs regular cleaning. Curtains are cheaper and simple but
                  need more care to avoid mould.
                </li>
                <li>
                  <strong>Q8. How long does a bathroom renovation take?</strong>
                  <br />
                  It depends on the level of work, size and curing time for waterproofing
                  and tiles. We give a schedule with the quotation after an inspection.
                </li>
                <li>
                  <strong>Q9. Do you supply sanitaryware and fittings?</strong>
                  <br />
                  We help you choose suitable fittings and coordinate installation.
                  Please confirm the supply scope with us during the quotation.
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