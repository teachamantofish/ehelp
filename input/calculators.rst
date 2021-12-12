************************************************
Calculators
************************************************

Required power
===================================

https://endless-sphere.com/forums/viewtopic.php?t=110570#p1626972

todo: convert to HG example

Example: HG + pilot and gear = 300lbs or 136Kg

At 100% efficiency for all components, to raise 136 kg takeoff weight to 1000', the energy needed is U(kWh) = 136*9.81*1000/(3.28 * 3600000) = 0.113 kWh. 

Adjusting for reality: 

* Glide ratio: 10
* Prop efficiency: 70%
* Motor efficiency: 90%
* Battery efficiency: 95%
* Everything else: 95%

Then: 

0.113 / ((1-1/10)*.7*.9*.9*.95*.95) = .332/.494 = 0.67 kWh. At the rate of 1000' per 6 mins, power required would be 6.7 kW.

In a post above I calculated the power needed for 170 fpm climb. Let's say MTOW is 300 kg and 250 fpm is required.

The energy required is 0.25 kWh. After correcting for the losses, you get 0.5 kWh gross energy. Power required for 250 fpm will be 0.5 * 60 * 250 / 1000 = 7.5 kW.

It appears you are seeking about 2 kWh of storage. The Samsung 21700 48G unit weight is 4 kg/kWh. With a 20% pack overhead, the 2kWh pack will weigh 10 kg. At 7.3C,the pack can supply 14.5 kW power. But you only need 7.5 kW of power. Even at 10 kW, you are well below the C limit of 14.5 kW.


Power is F*v, so while the force is m*g/(L/D), the drag losses are m*g/(L/D) * v. The v term is going to always be around 25m/s, almost independent of the glider.


Propeller
==========================

Prop pitch
-----------------------------

`Prop pitch recommendation <http://www.culverprops.com/pitchselection.htm`_ based on RPM, airspeed, and prop length. You can also view the `tables <http://www.culverprops.com/viewpitchtable.htm>`_

Tip speed
--------------------------

The efficiency of a propeller is reduced as the tip speed approaches the speed of sound.  Beyond 80% of the speed of sound, increasing RPM has little affect on thrust. Ideally, keep tip speeds below 75%-80% of Mach. 

Optimum efficiency and less noise stems from tip speeds less than 700 feet per second or 475 mph. Over that, and air compression in front of the prop leading edge begins occuring which rapidly degrades propeller performance.

TBD: Link to calculator. 

Theoretical speed
---------------------------

See https://www.warpdriveprops.com/propspd2.html

To determine how fast your propeller can theoretically push or pull you through the air at a given rpm and pitch, multiply your propeller's pitch in inches (usually measured at 75 percent of the prop disk radius) times the RPM. Then multiply that figure times .000947 which gives you your speed in miles per hour. Then multiply this figure by .85 if your aircraft is reasonably aerodynamically clean or by .80 or .75 if your aircraft is somewhat "draggy". This last operation compensates for propeller slippage and some aircraft drag. The end result should be a reasonably accurate estimate of your aircraft's airspeed potential. Use this process to help determine the amount of propeller pitch you need for your particular aircraft. Use the Theoretical Speed Calculator below.


Static thrust: required engine power
------------------------------------------



https://www.poweredparagliders.com.au/Calculators/Static_Thrust_Calculator.htm

Static thrust and horsepower
----------------------------------

http://www.csgnetwork.com/directhpthrustcalc.html

Tip speed 
----------------

https://warpdriveprops.com/propspd2.html

Theoretical speed
-------------------------

https://warpdriveprops.com/propspd2.html

Other
---------------------

https://www.mejzlik.eu/technical-data/propeller_calculator

Disk loading
Dynamic thrust
Static thrust


kv(v) = rpm 

max kw - (.30) = max continuous power
max power for batteries: (s rating)(voltage)(amps)



`Aviation Converters and Calculators <http://www.csgnetwork.com/aviationconverters.html>`_ 

Materials
===================

Metal components
-----------------------

https://www.onlinemetals.com/en/weight-calculator

TBD: RC whole system?
=========================

https://www.ecalc.ch/motorcalc.php
https://www.ecalc.ch/motorcalc_mobile.php?hacker&lang=en
https://www.kolins.cz/share/ecalc1/motorcalc_e9a45.htm