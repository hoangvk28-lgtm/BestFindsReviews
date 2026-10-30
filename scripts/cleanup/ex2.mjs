import fs from "fs";
const E={
b0b1m88hbv:" Before you buy, measure the narrowest strip you plan to aerate and compare it with the stated working width.",
b0g3hflx9s:" Treat any claim about turbo power with some caution, and read the battery details on the listing before ordering.",
b0b1txsfmk:" Wipe the blade dry after each use and keep the battery on a charger indoors, so the tool is ready when the next storm arrives. That small routine matters more than any spec.",
b0crvfz3bx:" It is not a lightweight machine, so think about where you will store it and whether the garage floor is level enough to roll it out safely. A short test run in autumn avoids surprises in January.",
b08jqgk737:" Think about storage too, because the batteries should stay in a heated space while the machine waits in the garage. Owners with steep driveways should still make sure the self-propelled drive feels controllable.",
b0fhb23qhh:" The earplugs in the box suggest the unit is loud at full speed, so use them. Dual batteries and an extended nozzle make it a decent starter kit for someone with a small patio, balcony or workshop to keep clean. Buyers should still keep expectations modest about how much it can move.",
b0fd8y71tj:" Wear gloves and eye protection, and never reach near the wedge while the ram is moving. Check that your outlet circuit can supply a full 15 amps, because a shared circuit may trip. Keep the stand on level ground so logs sit steadily.",
b0gv1y5g2b:" Keep the splitter on firm, level ground and chock the wheels before splitting. Older users should plan on a second person for lifting it into a truck or onto a shed floor, since the steel chassis adds weight. Check hydraulic fluid levels regularly.",
b0h1q47l45:" Older buyers should think about whether they can roll it over grass, gravel or a slope without help. A flat concrete pad near an outlet is the ideal place to use it. Check hydraulic oil level before each season.",
b0bl8zw228:" Because few spec details are provided, ask yourself whether you need a stand, wheels, or a longer cord. Those missing features may matter more than the ram force. Buy from a seller with a clear return policy.",
b09b75r66q:" Because it lacks a stand, a stable low bench or log holder helps you avoid bending too far. Use a heavy-duty outdoor extension cord of the right gauge, and keep the connection off wet ground. Always wear gloves and eye protection while splitting.",
b0chlrypk1:" Check whether batteries and charger are included in the listing you choose. It is also worth confirming your driveway length against the stated clearing capacity, so you know whether a single charge will cover the job.",
b0ch8364sc:" Keep a spare charged battery in the house during long storms, and let the machine warm to room temperature before storing it away. That habit protects the cells and keeps runtime close to what the listing promises.",
b0c7ybz4pr:" A sweeper will not replace a snow blower on a driveway that gets deep drifts, so think about the typical snowfall where you live. It is a useful tool in cities and suburbs where storms are modest but frequent, and it can double as a leaf sweeper in autumn.",
b074y94fnc:" The eight speeds let you choose a slower pace in deep snow or a faster one on a light dusting. The tall rubber tires grip well on packed snow, but ice can still be tricky, so keep ice melt nearby. Look at the warranty terms before you buy. This is the one to choose if you want maximum clearing power for the money, as long as you can handle the weight and maintenance.",
b0fylk6cqs:" The remote chute control is helpful because you can redirect snow without taking a hand off the handle. A 99cc engine is modest, so do not expect it to push through the end-of-driveway plow pile. Pour fresh fuel at the beginning of each winter. For people who just want a simple, lightweight machine for a short driveway, it is a worthwhile and affordable choice."
};
const d=JSON.parse(fs.readFileSync("rw-2b.json"));
for(const f in d)for(const i in d[f])if(E[i])d[f][i].description+=E[i];
fs.writeFileSync("rw-2b.json",JSON.stringify(d,null,1));
for(const f in d)for(const i in d[f]){const w=d[f][i].description.split(/\s+/).length;if(w<175)console.log(f,i,w)}
