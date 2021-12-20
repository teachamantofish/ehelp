.. _spec:

************************************************
Specing out a System (Sizing)
************************************************


.. image:: images/uc1.gif

Navigating to final choices and a working system is difficult and time consuming. Until the eHelp harness idea is more widespread, advice will be scattered and design principles scattered across various Facebook pages and forums with pioneers helping where they can. With luck, the concepts here will gain enough traction that the hang gliding community can emulate what's happening with `OpenPPG <https://openppg.com/>`_ 

Until then, moving forward is a bit of work. 

Decision path
=====================



Determine what you need
==================================



Method 1: Copy others
==========================



Method 2: Do the math
==============================


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
