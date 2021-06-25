let textbox = document.querySelector('#quote');
let svg = document.querySelector('#plane');
let svg2 = document.querySelector('#plane-wheel');
let btn = document.querySelector('#LandPage');
let btn2 = document.querySelector('#WaterPage');
let btn3 = document.querySelector('#AirPage');
let btnContainer = document.querySelector('#links');

function LandPage () {
console.log(textbox.innerHTML);
textbox.style.background
textbox.innerHTML = "<h1>Land Transport</h1><p>Land transport covers all land-based transportation systems that provide for the movement of people, goods and services. Land transport plays a vital role in linking communities to each other. Land transport is a key factor in urban planning. It consists of 2 kinds, rail and road. They are as follows</p><p>Rail transport is a means of conveyance of passengers and goods by way of wheeled vehicles running on rail track, known as a railway or railroad. The rails are anchored perpendicular to railroad train consists of one or more connected vehicles that run on the rails. Propulsion is commonly provided by a locomotive, that hauls a series of unpowered cars, that can carry passengers or freight. The locomotive can be powered by steam, diesel or by electricity supplied by trackside systems. Alternatively, some or all the cars can be powered, known as a multiple unit. Also, a train can be powered by horses, cables, gravity, pneumatics and gas turbines. Railed vehicles move with much less friction than rubber tires on paved roads, making trains more energy efficient, though not as efficient as ships.</p><p>A road is an identifiable route of travel, usually surfaced with gravel, asphalt or concrete, and supporting land passage by foot or by a number of vehicles.</p><p>The most common road vehicle in the developed world is the automobile, a wheeled passenger vehicle that carries its own motor. As of 2002, there were 591 million automobiles worldwide. Other users of roads include motorcars, motorcycles, buses, trucks, bicycles and pedestrians, and special provisions are sometimes made for each of these. For example, the use of bus lanes give priority for public transport, and cycle lanes provide special areas of road for bicycles to use.</p>";
svg.src = 'images/train.svg';
svg2.src = 'images/wheel.svg';
}

function WaterPage() {
  console.log(textbox.innerHTML);
  textbox.innerHTML = "<h1>Water Transport</h1><p>Water transport is the process of transport that a watercraft, such as a bart, ship or sailboat, makes over a body of water, such as a sea, ocean, lake, canal or river. If a boat or other vessel can successfully pass through a waterway it is known as a navigable waterway. The need for buoyancy unites watercraft, and makes the hull a dominant aspect of its construction, maintenance and appearance. When a boat is floating on the water the hull of the boat is pushing aside water where the hull now is, this is known as displacement.</p><p>In the 1800s, the first steamboats were developed, using a steam engine to drive a paddle wheel or propeller to move the ship. The steam was produced using wood or coal. Now, most ships have an engine using a slightly refined type of petroleum called bunker fuel. Some ships, such as submarines, use nuclear power to produce the steam. Recreational or educational craft still use wind power, while some smaller craft use internal combustion engines to drive one or more propellers, or in the case of jet boats, an inboard water jet. In shallow draft areas, hovercraft are propelled by large pusher-prop fans.</p><p>Although slow, modern sea transport is a highly effective method of transporting large quantities of non-perishable goods. Commercial vessels, nearly 35,000 in number, carried 7.4 billion tons of cargo in 2007. Transport by water is significantly less costly than air transport for transcontinental shipping; short sea shipping and ferries remain viable in coastal areas.</p>";
  svg.src = 'images/yatch.svg';
  svg2.src = 'images/Captains_wheel.svg';
}

function AirPage() {
  console.log(textbox.innerHTML);
  textbox.innerHTML = "<h1>Air Transport</h1><p>A fixed-wing aircraft, typically airplane, is a heavier-than-air flying vehicle, in which the special geometry of the wings generates lift and then lifts the whole vehicle. Fixed-wing aircraft range from small trainers and recreational aircraft to large airliners and military cargo aircraft. For short distances or in places without runways, helicopters can be operable.</p><p>Air transport is the fastest method of transport, Commercial jets reach speeds of up to 955 kilometres per hour (593 mph) and a considerably higher ground speed if there is a jet stream tailwind, while piston-powered general aviation aircraft may reach up to 555 kilometres per hour (345 mph) or more. This celerity comes with higher cost and energy use, and aviation's impacts to the environment and particularly the global climate require consideration when comparing modes of transportation.</p><p>The Intergovernmental Panel on Climate Change (IPCC) estimates a commercial jet's flight to have some 2-4 times the effect on the climate than if the same CO2 emissions were made at ground level, because of different atmospheric chemistry and radiative forcing effects at the higher altitude.</p><p>U.S. airlines alone burned about 16.2 billion gallons of fuel during the twelve months between October 2013 and September 2014.[5] WHO estimates that globally as many as 500,000 people at a time are on planes.</p>";
  svg.src = 'images/plane.svg';
  svg2.src = 'images/Plane-wheel.svg';
}

btn.addEventListener('click', LandPage, false)
btn2.addEventListener('click', WaterPage, false)
btn3.addEventListener('click', AirPage, false)
