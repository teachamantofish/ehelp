************************************************
Electronic Speed Controller
************************************************

.. figure:: images/uc2.gif
   :scale: 50%

   Under construction


Choose an ESC
=============================


Sizing
-----------------------------


Current Rating : There are 2 current ratings to an ESC: continuous and burst. 

Features
---------------------------------

Location
---------------------

* Placing the ESC in a cooling airstream is a good idea. 
* Wire inductance will kill ESC mosfets and may even blow the capacitors. Try to  keep battery wires as short as practical and less than 12". To mitigate this problem for longer wire scenarios, install an `inline capacitor <https://shop.powerdrives.net/?product=capacitor-bank&fbclid=IwAR345aKaj9M2BJzZwV_NAd3vLRXp9YmLa2eXJmiUIgXKAgl6n67gCPUVgts>`_.

Wiring
------------------------

* Choose a gauge that can easily handle the max amperage. See TBD. 
* Choose a wire type. Silicone wire is more flexible, heat resistant, and lighter than PVC,  but it is also more expensive. `Compare <https://www.warwickts.com/4739/Guide-on-PVC-vs-Silicone-Test-Lead-Cables>`_. 
* Keep the wires as short as possible. 
* Twist the wires in a spiral fashion from the ESC to the motor. 
* Connectors: TBD



Throttle
==============

Throttle-power disconnect
------------------------------------

Vendors
-------------------------

* PPG 49.00 palm throttle: https://minne.us/shop/throttle/
* https://alienpowersystem.com/product-category/electric-throttle/
* https://ppgsmoke.com/products/smart-throttle
* PPG 250.00 with LCD: https://epowerhobby.com/product/electric-paramotor-throttle/

 VESC 75/300 controller which includes RPM limit, battery amps limit,


Worthwhile reads
================================

* Larger is better: 

  * https://www.youtube.com/watch?v=PgBSfwIY578
  * https://oscarliang.com/choose-esc-racing-drones/
* 
* `Forum discussion regarding sizing, bms, dangers <https://community.openppg.com/t/high-power-esc-challenges/3452/4>`_`
* `Wire length to and from ESC <https://www.rcgroups.com/forums/showthread.php?952523-too-long-battery-wires-will-kill-ESC-over-time-precautions-solutions-workarounds>`_


Notes, todo, not reviewed
=================================


INFO: https://forum.hanggliding.org/viewtopic.php?t=35303

Lipo batteries may ignite if mistreated. Mistreated means; overcharged, overdischarged, badly damaged. These batteries must never be allowed to drop below 2.9v per cell. If this happens, there is the fire risk if high current is still being pulled through it, and a battery overdischarged in this way will never take a full charge again, and may visibly 'swell'. Therefore it's critical when using lipo batteries to use a speed control that has an automatic lipo cutoff, ideally one which you can set. When I have the option, I always set my lipo cutoff to 3.1v per cell. (so when a 2s (2 cell) 7.4v battery reaches 6.2v, the ESC stops the power to prevent battery damage). 


https://www.facebook.com/groups/904566026835865/posts/953632555262545/?comment_id=953778331914634&notif_id=1639477775250202&ref=notif&notif_t=group_comment_mention

Joe Stapleton
Ben Rogers Geiger MC300 will be excellent but a bit overkill for an e-help. Everything cheap and anything designed for rc models will burn at some point as they have no hardware protection. I build my own VESC FOC controllers now but that is a bit involved. If you use a trapezoidal controller rather than FOC/4Quadrant then the much simplified lower frequency switching reduces the chances of burning. I think some people have even used the super cheapo Flier controllers that are made by Freerchobby (rebadged FRC) and also rebadged by Alien in the UK.
I used to recommend the yongitech VESC hardware available from apiexpress/makerx/flipsky/freerchobby but I literally had one turn to plasma two weeks ago, albeit this is the first failure I've had like this.
The specs (max voltage and continuous current) are usually constructed from the capacitor and mosfet datasheets the manufacturer used. This may lead to accurate max voltage (you must still allow a margin as inductive spikes from the motor will be greater than the battery voltage) but the current specs will be totally wrong and massively overstated. Personally I would de-rate any of the cheaper ESC to a max of 50% of their continuous current rating. Pay zero attention to any peak current rating it is meaningless.

xxx

hello, all you need is a standard throttle or cameleon 2/3 and connect it to a linear potentiometer. a tension spring and a return spring depending on how the handling should be.

xxx

things you could care about: specify things like magnet type, bearing type, or make, type of core lamination (thinner stator plates equal increased efficiency though reduced eddycurrents) whether they are single wound, bifiliar or trifiliar, even expected service life. 