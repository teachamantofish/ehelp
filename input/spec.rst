.. _spec:

************************************************
Specing out a System
************************************************

.. figure:: images/uc2.gif
   :scale: 40%

   Under construction

Navigating a working system is difficult and time consuming. Until the eHelp harness idea is more widespread, design principles will remain relatively inaccessible while advice is scattered across various Facebook pages and forums with pioneers helping where they can. With luck, the eHelp paradigm will gain enough traction that the hang gliding community can emulate aspects of `OpenPPG <https://openppg.com/>`_ and create its own easy-to-traverse path.

Until then, moving forward is a bit of work. 

Margins are thin with electric powered aircraft primarily due to battery low energy density. While HG trike and paramotor systems can carry several KWH of batteries, HG harness systems are limited by what a pilot is willing to carry (e.g. sub 2 KWHs). Powered flight time is measured in minutes--often 10 to 20. Couple these limitations with a wide range of wing specs and pilot weights, and it becomes apparent that optimizing the power train requires some minimal number crunching. At a 200 fpm climb, there's a big altitude difference between 5 minutes and 10 minutes.

Decision path
=====================

You'll often hear that system design starts with the prop. However, the performance of system components is so intimately intertwined that the specification of any piece has ramifications for all the others. Your choice of batteries, motor, electronic speed controller, or prop must inform your choices across the system. Failure to balance and tune the design holistically can easily result in a dangerous or inadequate eHelp system.

Realistically, it doesn't matter where you start as long as the entire system produces the desired result. For example: 

* *Batteries*: How much weight you're willing to have on board determines available power. Do you want to stay under 60 volts due to a wider array of available products or for safety reasons? Or should you choose 24S (88-100V) system so you push less amps and produce less heat for the same power?
* *Motors*: Motors must be rated for the voltage you choose. They'll need to be able to drive your propeller at enough thrust while handling the continuous amperage during climb without overheating. In other words, they must be spec'd to handle the battery input power while delivering enough output power to the prop.
* *Propeller*: The prop pushes you into the sky with thrust. Larger diameters and slower speeds are more efficient, but the motor must be capable of turning the prop at the required speed and torque. Ground, feet, and keel limit prop size, and within the standard 36-44 inch range there are hundreds of choices (diameter, pitch, blade number, and material). Volts determine speed, but amps determine torque.

.. list-table:: Top considerations
   :widths: 30 70 
   :header-rows: 1

   * - What?
     - So What?
   * - Total power is power minus heat. Heat is bad. 
     - Design for less heat: higher volts, less amps, larger wires, lots of headroom in all components, cooling, etc.
   * - Higher volrent is more efficient as electrical losses (heat) is proportional to the square of the current.
     - Choose the highest voltage your willing to work with and carry. In Europe, 60v is a mandated max. More volts is more dangerous. Higher voltages mean you have fewer battery choices. 
   * - Torque increases proportionally with the current consumed.  
     - Current = amps. But amps create heat. Design requires balancing volts and amps via your choice of motor and prop. 
   * - Speed increases proportionally with the operating voltage. Engine power increases approximately proportionally with the speed. The highest power can only be used at maximum speed.
     - However, large, slow propellers are more efficient. You're limited by a keel and ground. Tip speed should also stay below .8 mach. 

TBD: insert diagram

The tradeoff game
===========================

TBD: 

 higher V means less amps for the same power, I wanted to look at two motors that can handle diff V's and compare. Below you can see the M30 w/ 2 higher AH batteries can't run as long, create way more heat, and have a higher RPM than the M40. Same battery price. Seems safer, quieter, longer flight time (and that's at full climb--cruise would be even better). Tradeoff is the motor is 250 more and the batteries weigh 1lb more.

.. note:: Before buying anything, however, a logical first step is figuring out how what it will take to get your butt into the sky. . . 

Calculator: energy and flight time
============================================


**Theoretical power x efficiency**: This approach calculates the theoretical energy  to transport you to an altitude within a given time frame and then adjusts for power train efficiency. For example: If Joey Pilot with is Sport 3 Race and and gear weighs 300lbs, how many kilowatts of battery power will it take to climb at 200 fpm to 1000'?

.. raw:: html

   <iframe src="resources/calculator_power.html" id="calctheory" scrolling="no"  frameBorder="0"></iframe>


**Calculation walk-through** 

1. The first step calculates the theoretical energy required when the power train is 100% efficient. If a stone was hanging out at 1000 feet, how much energy does it store? Note that the formulas are metric (newtons, joules, and Earth's gravitational constant (9.8 m/s squared), so we convert 1000 feet to meters by dividing by 3.28. 

The formula is: ``kwh=weight X 9.81 (gravity) X feet/3.28 (convert to meters) X 1000 watts X 36000 (sec. per hour)`` 

1. Next, we adjust for reality since no part of the system is 100% efficient. The calculator provides some reasonable guesstimates. Multiply the efficiency of all components to get the correction factor. 
2. We can now calculate needed energy and power: 
 
  * Energy: Obtain the needed kwh by dividing the previously calculated theoretical Kwh by the efficiency correction factor. 
  * Power: Determine the rate of the power draw by dividing the total needed kwh by number of climb minutes by 60 minutes in an hour: ``kwh/(climb time/60)``. A 5 minute climb to 1000' is simply a 200 fpm climb rate.

4. Now pick some batteries and calculate how long you can draw power at the specified rate. These fields require knowing whether your system is wired in series, parallel, or both. 

  * System voltage is the voltage sent to the motor. Add the voltage of batteries connected in series. 
  * milliamp hours is the amp rating you can draw: Add the amps of any batteries in parallel. 
  * By default, the calculator uses a common set up of 2 6s 22000mah batteries (22v) in series. That's one string of batteries with a 44v and 22000mAH output.

Calculator: How much thrust?
===================================

**Prop and thrust**: This approach arrives at required Kwh to an altitude based on a desired climb rate and the amount of power it takes given calculated drag and coefficient of lift. These calculations follow Paul Martin's approach outline in his detailed docs on TBD.

.. tip:: Live version coming soon!

.. raw:: html

   <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTNk3d16kUlG7Y17k-Ii-QV9PyIXVCnGImD2lEwtXD6sR2HUV1zLu5W5cmfS6Fer3r2_RfJyQ8oOVRR/pubhtml?widget=true&amp;headers=false" width="525px" height="600px" scrolling="no"  frameBorder="0"></iframe>

**Calculation walk-through** 

#. one
#. two
#. tbd

Calculator: Motor adjustments
===================================

TBD

Main points:

* As a rough guideline look for a motor/battery configuration that has a no-load RPM that is 125% of your target full-throttle RPM. 
* Use a low heat percent of continuous power for the desired climb time. 
* Kv reduction calculations
* Kt

.. tip:: Live version coming soon! `Source <https://docs.google.com/spreadsheets/d/14JkkG8W6YqgOgw4RBCtJ8gWNFApiGTVdzc8_fM5dktQ/edit#gid=1953445286>`_

.. raw:: html

   <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5kZukKClZuK3vd4xq2fWymW4ljcXMrFy3haxn-PWlDgJMyB_0KBTAJcFyggVRj-QapMsSguDg47e-/pubhtml?widget=true&amp;headers=false" width="550px" height="570px" scrolling="no"  frameBorder="0"></iframe>

**Calculation walk-through** 

#. one
#. two
#. tbd

Calculator: Prop diameter and pitch
=========================================

TBD

tbd: Find the prop/RPM combination that will give you both the thrust and efficiency you want, then work backwards from there to determine how much motor power is required and what motor KV/battery voltage you want to use. Then source the motor and controller.



**Calculation walk-through** 

#. one
#. two
#. tbd

Calculator: Prop tip speed
===========================

Propeller efficiency reduces as the tip speed approaches the speed of sound.  Beyond 80% of the speed of sound, increasing RPM has 
little affect on thrust. Ideally, keep tip speeds below 75%-80% of Mach. 

Optimum efficiency and less noise stems from tip speeds less than 700 feet per second or 475 mph. Over that, and air compression in front of the prop leading edge begins occurring which rapidly degrades propeller performance.

tbd: To determine how fast your propeller can theoretically push or pull you through the air at a given rpm and pitch, multiply your propeller's pitch in inches (usually measured at 75 percent of the prop disk radius) times the RPM. Then multiply that figure times .000947 which gives you your speed in miles per hour. Then multiply this figure by .85 if your aircraft is reasonably aerodynamically clean or by .80 or .75 if your aircraft is somewhat "draggy". This last operation compensates for propeller slippage and some aircraft drag. The end result should be a reasonably accurate estimate of your aircraft's airspeed potential. Use this process to help determine the amount of propeller pitch you need for your particular aircraft. Use the `Prop tip speed calculator <https://www.warpdriveprops.com/propspd2.html>`_


Calculator: Prop power
===============================

* input power
* output power
* tip speed
* continuous thrust

TBD

**Calculation walk-through** 

#. one
#. two
#. tbd

Putting it all together
============================

TBD