************************************************
Calculators
************************************************

Required power
===================================

todo: convert to HG example

To raise 400 kg takeoff weight to 1000', the energy needed is U(kWh) = 400*9.81*1000/(3.28 * 3600000) = 0.332 kWh. Assuming a glide ratio of 30 (will be less while the motor is out) and a prop efficiency of 70%, motor of 90%, inverter of 90%, battery of 95%, and everything else at 95%, you get energy needed:

0.332 / ((1-1/30)*.7*.9*.9*.95*.95) = .332/.494 = 0.67 kWh. At the rate of 1000' per 6 mins, power required would be 6.7 kW.

In a post above I calculated the power needed for 170 fpm climb. Let's say MTOW is 300 kg and 250 fpm is required.

The energy required is 0.25 kWh. After correcting for the losses, you get 0.5 kWh gross energy. Power required for 250 fpm will be 0.5 * 60 * 250 / 1000 = 7.5 kW.

It appears you are seeking about 2 kWh of storage. The Samsung 21700 48G unit weight is 4 kg/kWh. With a 20% pack overhead, the 2kWh pack will weigh 10 kg. At 7.3C,the pack can supply 14.5 kW power. But you only need 7.5 kW of power. Even at 10 kW, you are well below the C limit of 14.5 kW.


Power is F*v, so while the force is m*g/(L/D), the drag losses are m*g/(L/D) * v. The v term is going to always be around 25m/s, almost independent of the glider.

Propeller
==========================

Prop pitch
-----------------------------

http://www.culverprops.com/pitchselection.htm

Static thrust
----------------------------------

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