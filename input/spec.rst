.. _spec:

************************************************
Specing out a System (Sizing)
************************************************

.. figure:: images/uc2.gif
   :scale: 40%

   Under construction

Navigating a working system is difficult and time consuming. Until the eHelp harness idea is more widespread, design principles will remain relatively inaccessible while advice is scattered across various Facebook pages and forums with pioneers helping where they can. With luck, the ehelp paradigm will gain enough traction that the hang gliding community can emulate aspects of `OpenPPG <https://openppg.com/>`_ and create its own easy-to-traverse path.

Until then, moving forward is a bit of work. 

Margins are thin with electric powered aircraft primarily due to the low battery energy density. While HG trike and paramotor systems can carry several KWH of batteries, HG harness systems are usually limited to sub 2 KWHs. Powered flight time is measured in minutes--often 10 to 20. Couple these limitations with a wide range of wing specs and pilot weights, and it becomes apparent that optimizing the power train requires some minimal number crunching. At a 200 fpm climb, there's a big altitude difference between 5 minutes and 10 minutes.

Decision path
=====================

You'll often hear that system design starts with the prop. However, it's certainly true that the performance of system components is so intimately intertwined that the specification of any piece has ramifications for all the others. We're talking about the electronic speed controller, batteries, motors, and the prop here. It's reasonable to start with any of the latter three as long as the entire system produces the desired result. For example: 

* *Batteries*: How much weight you're willing to have on board determines your available power. Do you want to stay under 60 volts due to a wider array of available products or for safety reasons? Or should you choose 24S (88-100V) system so you push less amps and produce less heat with more speed?
* *Motors*: Motors must be rated for the voltage you choose. They'll need to be able to drive your propeller at enough thrust while handling the continuous amperage during climb without overheating. 
* *Propeller*: The prop pushes you into the sky with thrust. Larger diameters and slower speeds are more efficient, but the motor must be capable of turning the prop at the required speed and torque. Ground, feet, and keel limit prop size, and even within the standard 36-44 inch range there are hundreds of choices (diameter, pitch, blade number, and material). Volts determine speed, but amps determine torque.

.. list-table:: Top considerations
   :widths: 30 70 
   :header-rows: 1

   * - What?
     - So What?
   * - Total power is power minus heat. Heat is bad. 
     - Design for less heat: higher volts, less amps, largers wires, lots of headroom in all components, cooling, etc.
   * - Higher voltage and lower current is more efficient as electrical losses (heat) is proportional to the square of the current.
     - Choose the highest voltage your willing to work with and carry. In Europe, 60v is a mandated max. More volts is more dangerous. Higher voltages mean you have fewer battery choices. 
   * - Torque increases proportionally with the current consumed.  
     - Current = amps. But amps create heat. Design requires balancing volts and amps via your choice of motor and prop. 
   * - Speed increases proportionally with the operating voltage. Engine power increases approximately proportionally with the speed. The highest power can only be used at maximum speed.
     - However, large, slow propellers are more efficient. You're limited by a keel and ground. Tip speed should also stay below .8 mach. 

TBD: insert diagram

The tradeoff game
===========================

TBD: 

 higher V means less amps for the same power, I wanted to look at two motors that can handle diff V's and compare. Below you can see the M30 w/ 2 higher AH batteries can't run as long, create way more heat, and have a higher RPM than the M40. Same battery price. Seems safer, quieter, longer flight time (and that's at full climb--cruise would be even better). Tradeoff is the moter is 250 more and the batteries weigh 1lb more.

.. note:: Before buying anything, however, a logical first step is figuring out how what it will take to get your butt into the sky. . . 

Calculator: energy and flight time
============================================


**Theoretical power x efficiency**: This approach calculates the theoretical energy  to transport you to an altitude within a given timeframe and then adjusts for power train efficiency. For example: If Joey Pilot with is Sport 3 Race and and gear weighs 300lbs, how many kilowatts of battery power will it take to climb at 200 fpm to 1000'?

.. raw:: html

  <!--`Copy this calculator <https://docs.google.com/spreadsheets/d/1QOWFBWTjYjzgTAwhfQpxgTqjzGBhD4zJOt-nyNrNo94/edit?usp=sharing?widget=true&amp;headers=false;rm=minimal&amp;>`_-->

.. raw:: html

   <iframe src="./resources/calculator_power.html" width="850px" height="750px" scrolling="no"  frameBorder="0"></iframe>

**Calculation walk-through** 


1. The first step calculates the theoretical energy required when the power train is 100% efficient. If a stone was hanging out at 1000 feet, how much energy does it store? Note that the forumulas are metric (newtons, joules, and Earth's gravitational constant (9.8 m/s squared), so we convert 1000 feet to meters by dividing by 3.28. 

The formula is:`` kwh=weight X 9.81 (gravity) X feet/3.28 (convert to meters) X 1000 watts X 36000 (sec. per hour)`` 

1. Next we adjust for reality since no part of the system is 100% efficient. The calculator provides some reasonable guesstimates. Multiply the efficiency of all components to get the correction factor. 
2. We can now calculate needed energy and power: 
 
  * Energy: Obtain the needed kwh by dividing the previously calculated theoretical Kwh by the efficiency correction factor. 
  * Power: Determine the rate of the power draw by dividing the total needed kwh by number of climb minutes by 60 minutes in an hour: ``kwh/(climb time/60)``. A 5 minute climb to 1000' is simply a 200 fpm climb rate.

4. Now pick some batteries and calculate how long you can draw power at the specified rate. These fields require knowing whether your system is wired in series, parallel, or both. 

  * System voltage is the voltage sent to the motor. Add the voltage of batteries connected in series. 
  * milliamp hours is the amp rating you can draw: Add the amps of any batteries in parallel. 
  * By default, the calculator uses a common set up of 2 6s 22000mah batteries (22v) in series. That's one string of batteries with a 44v and 22000mAH output.


Method 2: How much thrust?
===================================

**Prop and thrust**: This approach calculates TBD

tbd: Is this correct?: find the prop/RPM combination that will give you both the thrust and efficiency you want, then work backwards from there to determine how much motor power is required and what motor KV/battery voltage you want to use. Then source the motor and controller.

As a rough guideline look for a motor/battery configuration that has a no-load RPM that is 125% of your target full-throttle RPM. 

what percent of continuous power to use for a 5 minute climb?

.. note:: Calculations courtesy of Paul Martin. For a more detailed document, see `TBD his document <www.google.com>`_.


tbd: Power is F*v, so while the force is m*g/(L/D), the drag losses are m*g/(L/D) * v. The v term is going to always be around 25m/s, almost independent of the glider.

Determine required thrust
---------------------------------

TBD
-------------------



Method comparison
==============================================

Calculate the rate of energy usage. The formula is XXXXX. For the example above, the total kilowatts consumed at various rates of  climb to 1000' is as follows: 

.. list-table:: 
   :widths: 30 30 40 
   :header-rows: 1

   * - Rate of climb
     - kilowatts needed
     - Example battery
   * - 200fpm
     - tbd
     - x volts and y mAH
   * - 250fpm
     - tbd
     - x volts and y mAH
   * - 300fpm
     - tbd
     - x volts and y mAH



Method 3: Copycat
==========================

TBD: List power trains in use. Create sortable table based on community input 

TBD: 

* 14s set up coupled to a 75/300A controller coupled to a 120100 80 to 85kv and a 40D18P propeller will get you between 200 and 250 fpm climb (Paul Martin).
* 15470 even with it limited to 55kv ( though I reckon you could get it rewound) of 16s li-Po you'd have more torque and still have 3700 rpm. A bigger prop would be handy but it might be custom even so with the 40D20P you would be around 48kgf thrust on 250A draw which equates to about 38kgf at 12m/s which gives you over 400 fpm climb rate (Paul Martin).



Somewhere, "Over the Rainbow"
====================================

If we could wish up a star, we'd wish for detailed **and accurate** power train data, including: 

* Electrical power = Voltage x Current
* Mechanical power = Torque x Rotation speed
* Motor efficiency * = Mechanical power / Electrical power
* Propeller efficiency = Thrust / Mechanical power
* Powertrain efficiency = Thrust / Electrical power

These numbers are unlikely to ever come from manufacturers. 3rd parties such as  `Tyto Robotics <https://database.tytorobotics.com/>`_, pilots like Paul Martin (an engineer), and anecdotal reports on forums will probably provide additional insight into system performance. 

.. figure:: images/tyto1.png
   :scale: 80%

   Credit Tyto Robotics