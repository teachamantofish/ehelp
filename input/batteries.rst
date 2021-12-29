************************************************
Batteries
************************************************

.. image:: images/uc2.gif

Battery considerations 
==========================

Before you spec your system, you need to understand volts, amps, S rating, C rating, and kilowatts. Here's a start: 

* **Kwh or mAH**: Available battery energy (how much gas is in the tank) is Kwh = volts * amps. (S rating * 3.7 * mAH). Divide available Kwh by how any Kw you need per minute to determine how long you can run your motor. 
* **Voltage**: The S rating indicates the total voltagle. It is the number of cells times the cell voltage (3.7 for LiPO). Most systems use 44.4 volts and higher. You'll may need multiple batteries. Wired in series, voltage is cumulative. Connected in parallel, voltage stays the same. 
* **Amperage-Capacity**: The C rating tells you the flow rate of electricty in and out of the battery. Your battery must be able to supply enough amps (current) to power your motor, and since the motor will try to draw what it needs, you need to use batteries which have a higher dicharge capacity than will be used during max draw (climb). Multiply the C rating by the amp hours to find the max amps. A 16000mAH battery is 16AH. A 10C rating means you can draw 10*16 (160) amps. Wired in series, amperage stays the same. Connected in parallel, amperage is additive. It's a good idea to spec your batteries as well as the ESC with 60-100% headroom (or double what you might need). eHelp drives can pull well over 100 amps.
* **P rating**: The P rating indicates how many parallel strings exist in the battery. Adding parallel strings increases available amperage out of a battery (a higher C rating). For example, 14.8V 5000 mAh 4S2P is a 4-cell  battery consisting of 2 strings of 2500 mAh capacity cells wired in parallel to provide a combined 5000 mAh rating. While a higher P rating increases capacity and discharge rates, it may lower reliability and recharge cycles.

The math is easy, but here's a calculator: https://power-calculation.com/battery-storage-calculator.php

.. tip:: Some of the working examples in this document use 2 12S 22000mAH batteries. 

**Research links**

* https://www.genstattu.com/bw/
* https://rightbattery.com/tag/p-rating/

Type
---------------

LiPO batteries are currently the first choice for a number of reasons, including their energy density, high discharge rate, lifespan, and so on. 

.. note:: It's worth reading this `forum snippet <./resources/batterycomparison.pdf>`_ as well as the entire `thread here <https://community.openppg.com/t/new-battery-option-better-power-density/2274/42>`_.

LiPO
^^^^^^^^^^^^^^^^^^^

* Premium: `Tattu, Tattuplus (smart batteries) <https://www.genstattu.com/6s-22-2-v-lipo-battery.html?sort=pricedesc>`_
* Bonkas (see OpenPPG)
* DIY build your own: Extra work, but 1/2 the cost. `See OpenPPG <https://community.openppg.com/t/building-a-14sx15p-18650-battery-pack/2251/22>`_
* Budget batteries: Example: Zeee are about 1/2 the cost of Tattu. 

LiPO graphene
^^^^^^^^^^^^^^^^^^^

* Some advantages, but not weight
* link
* todo

Semi solid state LiPO:
^^^^^^^^^^^^^^^^^^^^^^^^^

The technology is rapidly evolving. Manufacturer's claim a higher energy density, lighter weight, higher discharge rates, and a longer cycle life. For example, a 7s 1kw Foxtech setup is around 3 lbs lighter than a Tattu 6s Lipo setup. The C rating is likely two low unless run in parallel.

* `Foxtech spec charts <https://www.foxtechfpv.com/foxtech-diamond-6s-22000mah-semi-solid-state-li-ion-battery.html>`_
* See also Welion, YANGDA Thunder Stone

LiCo
^^^^^^^^^^^^^^^^^^^^^^^^

tbd: https://hobbyking.com/en_us/turnigy-nano-tech-5000mah-8s-65-130c-lipo-pack-xt90.html?queryID=d0c1dc6dde899982bc604d4f4b1f2511&objectID=71442&indexName=hbk_live_products_analytics


Size
--------------

Your flying consumes kilowatt hours: Kwh = volts X amps. For example, two 6s (22.2 volts) 22000mAH batteries will = about 1 Kw. How much and what kind of flying you can do with 1 Kwh can't be known until you've gone through the steps in :ref:`spec`.

Price
------------------

Cheap batteries can kill you, have short lifespans, or perform poorly. Be careful.

Worthwhile reading
============================

* Care, use, selection: https://www.rchelicopterfun.com/lipo-batteries.html
* Forum discussion: https://endless-sphere.com/forums/viewtopic.php?t=110570
* `Determining an accurate (real world) C rating <https://www.youtube.com/watch?v=xwxFQy-jqZ0>`_
* add vid link: why choose a high C value battery. 
* add vid link: why high voltage is better


Notes, todo, not reviewed
=================================



