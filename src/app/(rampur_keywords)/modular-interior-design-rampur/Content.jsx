import React from "react";
import LandingEnquiry from "../../components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Modular Interior Design Rampur – Modular Kitchens, Wardrobes and Storage by
            MTBOSS
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
            <section>
              <p>
                Walk into a well-finished modern home and you will often notice the same
                things: kitchen cabinets with neat, even gaps, wardrobes with smooth
                doors, TV units with hidden storage and drawers that close silently. Much
                of this comes from modular design, a way of planning interiors as a set of
                precisely measured units that are made to a standard system and fitted
                together on site.
              </p>
              <p className="mt-3">
                Modular design has become popular because it is neat, planned and
                efficient. But it is not magic, and not every modular product is good.
                MTBOSS Construction Private Limited is an architecture, interior and
                construction company serving Rampur, Moradabad and Bareilly. We design and
                execute modular interiors for homes, shops and offices, and this page
                explains what modular design really means, where it works best and how to
                choose it wisely.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                What Is Modular Interior Design?
              </h3>
              <p>
                In modular interior design, furniture and storage are planned as separate
                units, called modules, built to consistent sizes and joined together to
                fit the room. Each module, such as a base cabinet, a wall cabinet, a
                drawer unit, a wardrobe shutter or a TV unit, is made with accurate
                cutting, standard hardware and a uniform finish.
              </p>
              <p className="mt-3">
                The idea is simple: instead of building everything from scratch on site,
                you plan a set of well-made modules and arrange them to suit the room.
                This gives better precision, cleaner finishing and often faster
                installation. It also makes later changes easier, because individual
                modules can be repaired, replaced or added.
              </p>
              <p className="mt-3">
                Modular design is best known in kitchens, but it works equally well in
                wardrobes, TV walls, study units, shoe racks, crockery units, vanity units
                and storage systems.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Our Modular Interior Services
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Modular kitchens in straight, L-shaped, U-shaped, parallel and island
                  layouts
                </li>
                <li>Modular wardrobes with sliding or hinged shutters</li>
                <li>Modular TV units and entertainment walls</li>
                <li>Study tables and bookshelves</li>
                <li>Crockery units and bar units</li>
                <li>Shoe racks and entrance storage</li>
                <li>Vanity and bathroom storage units</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Modular vs Carpenter-Made Interiors: An Honest Comparison
              </h3>
              <p className="mb-3">
                Both approaches have strengths, and the best choice depends on your room
                and expectations.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-3 py-2 font-semibold">
                        Factor
                      </th>
                      <th className="border border-gray-200 px-3 py-2 font-semibold">
                        Modular Approach
                      </th>
                      <th className="border border-gray-200 px-3 py-2 font-semibold">
                        Site-Made Carpentry
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Precision and neatness
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        High, due to accurate cutting and standard parts
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Depends greatly on the carpenter&rsquo;s skill
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Finish quality
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Uniform, with consistent edges and laminates
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Varies with workmanship
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Speed on site
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Usually faster, with less dust and noise
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Slower, with more on-site cutting
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Customisation
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Good within module sizes, with filler panels for gaps
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Very flexible for unusual shapes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">Hardware</td>
                      <td className="border border-gray-200 px-3 py-2">
                        Standard, tested systems
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Varies by choice
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Repair and replacement
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Individual modules can be replaced
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Often requires rebuilding sections
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">Cost</td>
                      <td className="border border-gray-200 px-3 py-2">
                        Can be higher or similar, depending on materials
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Can be lower for simple work, higher for complex
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Odd corners and uneven walls
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Needs careful measurement and fillers
                      </td>
                      <td className="border border-gray-200 px-3 py-2">
                        Easier to adapt on site
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                A balanced approach often works best: modular units for kitchens,
                wardrobes and storage, and site-made carpentry for special features such
                as curved panels, unusual niches and decorative walls. MTBOSS can combine
                both in one plan.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Where Modular Design Works Best
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Kitchens:</strong> Kitchens are the strongest case for modular
                  design. Base units, wall units, tall units, drawers and accessories are
                  planned around the cooking routine. Standard hardware, such as
                  soft-close drawers, pull-out baskets and corner units, makes daily use
                  easy.
                </li>
                <li>
                  <strong>Wardrobes:</strong> Modular wardrobes use well-made carcasses,
                  shutters and inside accessories. You can mix hanging space, shelves,
                  drawers and lofts to match your clothes.
                </li>
                <li>
                  <strong>TV Units and Living Room Storage:</strong> Modular units can
                  form clean TV walls with open shelves, closed cabinets and concealed
                  wiring. They give a tidy look and make it easier to adjust later.
                </li>
                <li>
                  <strong>Study and Work Corners:</strong> Desks, shelves and drawer units
                  can be arranged to fit a bedroom corner, a spare room or a dedicated
                  study.
                </li>
                <li>
                  <strong>Kids&rsquo; Rooms:</strong> Modular furniture can adapt as
                  children grow. Shelves and desks can be added or replaced without
                  redoing the whole room.
                </li>
                <li>
                  <strong>Shops and Offices:</strong> Modular counters, shelving and
                  cabinets help shops and offices look neat and allow quick changes when
                  needs change.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Where Modular Needs Extra Care
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Uneven walls and odd shapes:</strong> Old buildings often have
                  walls that are not straight or corners that are not square. Modular
                  units can still work, but need accurate measurement, filler panels and
                  sometimes wall correction.
                </li>
                <li>
                  <strong>Very custom designs:</strong> Curved walls, unusual niches and
                  carved panels may be better made on site.
                </li>
                <li>
                  <strong>Heavy decoration:</strong> Highly ornate designs usually need
                  hand-crafted work.
                </li>
                <li>
                  <strong>Humid and damp walls:</strong> Any board-based furniture can
                  suffer in damp conditions, so moisture problems must be fixed first.
                </li>
              </ul>
              <p className="mt-3">
                A good designer tells you honestly where modular is the right choice and
                where it is not.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Quality: What Really Matters in Modular Interiors
              </h3>
              <p className="mb-3">
                Two modular kitchens can look identical in photos and perform very
                differently after a few years. Quality depends on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>The Board Used for the Carcass:</strong> Moisture-resistant
                  plywood is a popular choice for kitchens and humid areas. Other boards,
                  such as MDF, HDF and particle board, differ in strength, moisture
                  behaviour and cost. Thickness and grade matter, so ask for them in
                  writing.
                </li>
                <li>
                  <strong>The Shutter and Finish:</strong> Laminates, acrylic, veneer, PU
                  and glass each look and wear differently. Edge finishing, such as proper
                  edge banding, protects against moisture and chipping.
                </li>
                <li>
                  <strong>The Hardware:</strong> Hinges, drawer channels, handles,
                  baskets and lifts decide how smoothly everything works. Soft-close
                  hinges and drawer systems reduce noise and wear. Quality hardware often
                  matters more than extra decoration.
                </li>
                <li>
                  <strong>The Installation:</strong> Level, plumb and aligned installation
                  keeps doors straight and gaps even. Sealed edges around sinks and walls
                  reduce water damage. Good installers take time to adjust doors, drawers
                  and joints.
                </li>
                <li>
                  <strong>Planning and Measurement:</strong> Accurate site measurement
                  prevents gaps and misfits. Coordination with plumbing, electrical and
                  tile work avoids clashes.
                </li>
              </ul>
              <p className="mt-3">
                We explain these points openly and show you samples so that you can judge
                quality yourself.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Modular Kitchen Planning in Detail
              </h3>
              <p className="mb-3">
                The kitchen is the most common modular project, so it deserves extra
                attention.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Layout:</strong> We choose a layout, such as straight, L, U,
                  parallel or island, based on the room shape, doors and windows, and your
                  cooking habits.
                </li>
                <li>
                  <strong>Work triangle:</strong> Sink, stove and refrigerator should form
                  an efficient triangle, with enough counter space between them.
                </li>
                <li>
                  <strong>Storage zones:</strong> Group items by use: cooking,
                  preparation, cleaning, storage and serving. Drawers are often more
                  convenient than shelves for pots and pans.
                </li>
                <li>
                  <strong>Tall units:</strong> Pantry units, oven towers and refrigerator
                  surrounds use vertical space well.
                </li>
                <li>
                  <strong>Corner solutions:</strong> Magic corners, carousel units or
                  pull-outs make awkward corners useful.
                </li>
                <li>
                  <strong>Countertop:</strong> Stone, quartz, solid surface and tile
                  options differ in cost, stain resistance and heat tolerance.
                </li>
                <li>
                  <strong>Backsplash:</strong> Tiles, glass or other finishes protect the
                  wall from splashes and are easy to clean.
                </li>
                <li>
                  <strong>Ventilation:</strong> A chimney or exhaust must be planned with
                  ducting and electrical provisions.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Modular Wardrobe Planning
              </h3>
              <p className="mb-3">
                A modular wardrobe uses the same careful approach.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Divide the wardrobe into hanging, shelf, drawer, locker and loft zones.
                </li>
                <li>
                  Use standard widths and heights, with filler panels to fit your wall
                  exactly.
                </li>
                <li>
                  Choose sliding or hinged shutters based on your room and clearance.
                </li>
                <li>
                  Add accessories such as trouser racks, tie holders and pull-out
                  baskets.
                </li>
                <li>Plan sensor lighting inside, if you want it.</li>
                <li>
                  Match the finish to the bedroom, so the room looks unified.
                </li>
              </ul>
              <p className="mt-3">
                We show a 3D view, so you can see exactly how it will look and work in
                your room.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Design Styles in Modular Interiors
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Modern minimal:</strong> Flat shutters, handleless designs and
                  simple colours.
                </li>
                <li>
                  <strong>Warm contemporary:</strong> Wood-look laminates, soft lighting
                  and textured details.
                </li>
                <li>
                  <strong>Glossy and sleek:</strong> Acrylic or glass shutters, bright
                  colours and reflective surfaces.
                </li>
                <li>
                  <strong>Classic:</strong> Framed shutters, handle details and
                  traditional colours.
                </li>
                <li>
                  <strong>Two-tone combinations:</strong> Light upper cabinets with darker
                  lower cabinets, or contrasting colours for visual interest.
                </li>
                <li>
                  <strong>Indo-contemporary:</strong> Modern units with jaali panels,
                  brass handles or carved elements.
                </li>
              </ul>
              <p className="mt-3">
                We help you choose a style that suits your home and ages well.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Our Modular Interior Process
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Meeting and requirement study:</strong> We discuss your needs,
                  style, budget and timeline.
                </li>
                <li>
                  <strong>Site visit and measurement:</strong> We measure walls, check
                  plumbing and electrical points and look for moisture or uneven surfaces.
                </li>
                <li>
                  <strong>Layout and 3D design:</strong> We prepare a layout and 3D views
                  for each area, and revise them with you.
                </li>
                <li>
                  <strong>Material, finish and hardware selection:</strong> You choose
                  boards, shutters, countertops, handles and accessories, with samples
                  where possible.
                </li>
                <li>
                  <strong>Quotation and agreement:</strong> You receive an itemised
                  estimate with materials and hardware specified, along with a schedule
                  and payment stages.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Cost Factors in Modular Interiors
              </h3>
              <p className="mb-3">
                Modular interior cost depends on specification, so we avoid quoting fixed
                rates without seeing your space. Key factors include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Total running length or area of units</li>
                <li>Carcass material and thickness</li>
                <li>
                  Shutter finish, such as laminate, acrylic, veneer, PU or glass
                </li>
                <li>Quality of hinges, channels and accessories</li>
                <li>Countertop type and area</li>
                <li>Number of drawers, tall units and special fittings</li>
              </ul>
              <p className="mt-3">Budget tips:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Spend more on carcass quality and hardware, since these decide how long
                  the units last.
                </li>
                <li>
                  Use a simple, durable shutter finish, and add decorative touches later.
                </li>
                <li>Choose drawers and pull-outs where you work most.</li>
                <li>
                  Plan appliances and utilities first, so that units fit them.
                </li>
                <li>Keep a reserve of 8 to 10% for changes.</li>
                <li>
                  Compare quotations by material, thickness, hardware brand and scope.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Care and Maintenance of Modular Units
              </h3>
              <p className="mb-3">
                Modular interiors last longer with simple care.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wipe spills quickly, especially near sinks and stoves.</li>
                <li>Avoid soaking cabinet edges with water.</li>
                <li>
                  Use mild cleaners, and avoid harsh chemicals on laminates and acrylic.
                </li>
                <li>
                  Do not overload shelves and drawers beyond their rated capacity.
                </li>
                <li>Keep drawer channels and sliding tracks clean.</li>
                <li>
                  Tighten loose screws and adjust hinges when doors drift.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Modular Interiors in Rampur: Local Considerations
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Humid monsoon months:</strong> Moisture-resistant boards, sealed
                  edges, good ventilation and dry walls protect modular units.
                </li>
                <li>
                  <strong>Hot summers:</strong> Heat and cooking can affect finishes, so
                  durable laminates and proper ventilation matter.
                </li>
                <li>
                  <strong>Older homes:</strong> Many houses have uneven walls, old
                  plumbing and weak plaster, so measurement and preparation are especially
                  important.
                </li>
                <li>
                  <strong>Family cooking:</strong> Many households cook elaborate meals
                  and use heavy utensils, so strong drawers, deep storage and good
                  ventilation are valuable.
                </li>
                <li>
                  <strong>Festive and wedding seasons:</strong> Families often renovate
                  kitchens and wardrobes before big events, so plan enough time and avoid
                  last-minute rushing.
                </li>
              </ul>
              <p className="mt-3">
                We serve homes in Rampur, including Civil Lines and other residential
                areas, as well as Moradabad and Bareilly.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Why Do Families Choose MTBOSS for Modular Interiors?
              </h3>
              <p>
                Families choose us because we combine modular planning with construction
                experience. MTBOSS handles interior design, carpentry, ceilings, tile
                work, painting, electrical coordination and civil support under one team,
                so the modular units fit properly with plumbing, tiles and wiring. We
                measure carefully, specify materials and hardware in writing and give 3D
                designs and itemised quotations before work begins. When a wall is damp or
                uneven, we say so and fix it, instead of hiding the problem behind new
                cabinets.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Common Modular Interior Mistakes
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Choosing only by photos:</strong> Always check material samples
                  and hardware in person.
                </li>
                <li>
                  <strong>Poor measurement:</strong> Gaps, misfits and misaligned doors
                  come from rushed measurement.
                </li>
                <li>
                  <strong>Ignoring plumbing and electrical planning:</strong> Late changes
                  damage finished units.
                </li>
                <li>
                  <strong>Weak boards in wet areas:</strong> Swelling and peeling appear
                  quickly in kitchens and bathrooms.
                </li>
                <li>
                  <strong>Cheap hardware:</strong> Drawers and hinges fail early.
                </li>
                <li>
                  <strong>Too many accessories:</strong> Unused fittings raise cost
                  without adding value.
                </li>
                <li>
                  <strong>Skipping wall repair:</strong> Damp and uneven walls cause
                  long-term damage.
                </li>
                <li>
                  <strong>Overcrowded layouts:</strong> Units that block movement or doors
                  reduce comfort.
                </li>
                <li>
                  <strong>Comparing prices without comparing specifications:</strong> Two
                  quotes may use very different materials.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Is Modular Design Always Better Than Carpenter-Made Furniture?
              </h3>
              <p>
                Not always. Modular design is usually better when you want neat finishing,
                consistent quality, standard hardware and faster installation, especially
                in kitchens, wardrobes and storage units. Carpenter-made furniture can be
                better for unusual shapes, curved or carved details, and walls that are
                very uneven. Many good homes combine both. The best result comes from
                honest planning, accurate measurement and good materials, whichever method
                you choose. We will tell you where each approach makes sense in your home,
                even if the answer is a mix.
              </p>
            </section>

            <section>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Plan Your Modular Interiors with MTBOSS
              </h3>
              <p className="mb-3">
                Ready to plan neat, practical and long-lasting interiors? Share your room
                sizes, photos, storage needs and budget range. Our team will visit,
                measure, discuss options and give you a clear design direction, quotation
                and schedule.
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
                  <strong>Q1. What is modular interior design?</strong>
                  <br />
                  Modular interior design plans furniture and storage as precisely made
                  units, such as kitchen cabinets and wardrobes, that are arranged and
                  installed to fit your room.
                </li>
                <li>
                  <strong>Q2. What can be made modular in a home?</strong>
                  <br />
                  Kitchens, wardrobes, TV units, study desks, shoe racks, crockery units,
                  vanity units and kids&rsquo; storage can all be designed in a modular
                  way.
                </li>
                <li>
                  <strong>Q3. Is modular interior better than carpenter-made?</strong>
                  <br />
                  It depends on the work. Modular gives neat, consistent results and
                  faster installation, while site-made carpentry suits unusual shapes and
                  decorative features. Many homes use both.
                </li>
                <li>
                  <strong>Q4. Can modular units fit uneven walls?</strong>
                  <br />
                  Yes, with accurate measurement, filler panels and sometimes wall
                  correction. We check walls during the site visit and advise honestly.
                </li>
                <li>
                  <strong>Q5. Which material is best for modular kitchens?</strong>
                  <br />
                  Moisture-resistant plywood is a popular choice for carcasses, with
                  durable laminates or other finishes for shutters. We recommend based on
                  your budget and usage.
                </li>
                <li>
                  <strong>Q6. How long do modular interiors last?</strong>
                  <br />
                  It depends on material, hardware, installation and care. Good boards,
                  quality hardware, correct installation and regular maintenance help
                  units last for many years.
                </li>
                <li>
                  <strong>Q7. Can I replace one part later?</strong>
                  <br />
                  Often yes. One advantage of modular design is that individual modules,
                  shutters or accessories can be repaired or replaced.
                </li>
                <li>
                  <strong>Q8. Do you provide 3D designs?</strong>
                  <br />
                  Yes. You can see visuals before work begins and request changes.
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