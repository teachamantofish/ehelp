.. _spec:

************************************************
Specing out a System (Sizing)
************************************************

Navigating to final choices and a working system is difficult and time consuming. Until the eHelp harness idea is more widespread, design principles will remain relatively inaccessible while advice is scattered across various Facebook pages and forums with pioneers helping where they can. With luck, the ehelp paradigm will gain enough traction that the hang gliding community can emulate aspects of `OpenPPG <https://openppg.com/>`_ and create its own easy-to-traverse path.

Until then, moving forward is a bit of work. 

Decision path
=====================

TBD

Required power: Method 1
===================================

Margins are thin with electric powered aircraft primarily due to the low battery energy density. Powered flight time is measured in minutes, with 10 or 20 available for many systems. Couple that with a wide range of wing specs and pilot weights, and it should be obvious that some minimal number crunching is required. At a 300 fpm climb, there's a big difference between 5 minutes and 10 minutes.

todo: total rewrite. From: https://endless-sphere.com/forums/viewtopic.php?t=110570#p1626972

Example: HG + Joey Pilot and gear = 300lbs (136Kg). How many kilowatts will it take to climb at 200fpm to 1000'?

Theoretical energy
------------------------

The first step is to calculate the theoretical energy required with 100% efficiency for all components. If a stone was at 1000', how much energy does it store? 

Note that the forumulas are metric (newtons, joules, and gravity (m/s squared). The formula is: 

:: 

   kwh=weight X 9.81 (gravity) X feet/3.28 (convert to meters) X 1000 watts X 36000 (sec. per hour) 

So, the energy needed to get Joey to 1000' is ``136*9.81*1000/(3.28 * 3600000) = 0.113 kWh``. 

Adjust for inefficiency
---------------------------

While .113 kwh is the theoretical energy, we have to adjusting for reality since no part of the system is 100% efficient. Some reasonable guesstimates:  

* Glide ratio (L/D): 12
* Prop efficiency: 70%
* Motor efficiency: 90%
* Battery efficiency: 95%
* Everything else: 95%

So multiply the efficiency of all components to get the correction factor: ``((1-1/12)*.7*.9*.9*.95*.95) = .469``

Then divide your theoretical Kwh by that number: ``0.113/.469 = .241 kwh``

Add the energy rate
--------------------------

.241 is ?????, which tells you ????. You now need to calculate the rate of energy usage. The formula is XXXXX. For the example above, the total kilowatts consumed at various rates of  climb to 1000' is as follows: 

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

This can't be right because the longer it takes to get to 1000' should not take less watts: 

* .241 kwh/ 6 minutes of flight time/60 minutes in an hour. = 2.4 kw  
* .241 kwh/ 10 minutes of flight time/60 minutes in an hour. = 1.5 kw


**notes**

E =f*d

electrical : P*T

kwh: energy

power = watts/ energy rate

Power is F*v, so while the force is m*g/(L/D), the drag losses are m*g/(L/D) * v. The v term is going to always be around 25m/s, almost independent of the glider.

Required power: Method 2
===================================

TBD

System design: Copy others
==========================

TBD

System design: DIY
==========================

TBD

Notes, todo, not reviewed
=================================

tbd: Is this correct?: find the prop/RPM combination that will give you both the thrust and efficiency you want, then work backwards from there to determine how much motor power is required and what motor KV/battery voltage you want to use. Then source the motor and controller.

As a rough guideline look for a motor/battery configuration that has a no-load RPM that is 125% of your target full-throttle RPM. 

what percent of continuous power to use for a 5 minute climb?

------------------

Here's some more thinking: Since I know higher V means less amps for the same power, I wanted to look at two motors that can handle diff V's and compare.

Below you can see the M30 w/ 2 higher AH batteries can't run as long, create way more heat, and have a higher RPM than the M40. Same battery price. Seems safer, quieter, longer flight time (and that's at full climb--cruise would be even better). Tradeoff is the moter is 250 more and the batteries weigh 1lb more.

Is my thinking correct? More batteries in a series is better?


https://www.mad-motor.com/products/mad-components-m30-pro.html
Mad30: 14s 75% throttle 123 amps for 30kg thrust w/ 40x13 80kv 3440
2 22.2V 22AH batteries=.98 kw 944.00 11.7 lbs and runs for 11 minutes

https://www.mad-motor.com/products/mad-components-m40c30-pro-ipe.html
Mad40  24s 60% throttle 50.4 amps for 30kg thrust w/ 47x13 43kv RPM 2455
4 22.2v 12AH batteries=1kw 1040.00 12.8 lbs and last 14 minutes
