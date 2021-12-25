************************************************
Motors
************************************************

.. image:: images/uc1.gif

Top considerations
==========================


 * Higher voltage and lower current is more efficient as electrical losses (heat) is proportional to the square of the current.
 * Speed increases approximately proportionally with the operating voltage.
 * Torque increases approximately proportionally with the current consumed, increasing.


Manufacturers
================================

todo: fix width, add sort

.. raw:: html

    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTZ5drQYvvp4srNMViieF0J0stG8gvPEdH_B7djQA4lOQ53DEMxsOmvscQ4TEEQP2fW-wIQpMl-eO5L/pubhtml?widget=true&amp;headers=false" width="100%" height="600px"></iframe>

Sensored versus sensorless
=============================

You don't need a sensored motor. While sensorless brushless motors perform poorly at low speed, their performance at flying speeds is excellent. ESC manufactures improve efficiency and performance by using  sensorless synchronization at high speed to alter the timing for the sequence of power pulses sent to the motors windings. Sensorless motors are lighter, less complicated, and less prone to failure.

Mating with a prop
============================

Criteria: 

#. one
#. two
#. three


The `e-props folks <https://ppg.e-props.fr/index.php?cPath=1>`_ match multiple props to each specific motor. It's worth checking out to get an idea of acceptable combinations.


Duty cycle-Max continuous power
===============================


There is also a suggestion that the lower the no load kv value of the motor the greater the 100% duty cycle reduction factor. Probably useful to know if one of the larger diameter 35kv or 27kv motors marketed for use on paramotors is being considered.

KV reduction
========================

.. image:: images/kvreduction.png

Custom motors
======================

Custom rewinds change the KV rating and RPM.

* `Rewind your own motor <https://www.youtube.com/watch?v=-sIVpOLYoqg&t=144sA>`_
* MAD motor and Alien Power Systems will motors rewind for low cost.
* Charles Allen reports that APS made him a custom motor with a hollow shaft for ~$25 extra so I could have a rod go through to articulate a variable pitch prop. 


Notes, todo, not reviewed
=================================

https://www.geigerengineering.de/en/avionics/downloads
https://community.openppg.com/uploads/short-url/z9MJbg8s0FVoaRLhLJGppvysBao.pdf
https://community.openppg.com/uploads/short-url/20r15azC5ZyuEw0qG1rehnrVrVY.pdf
https://community.openppg.com/uploads/short-url/AmbK6TvFtUvk00lRsNZhH0MNywT.pdf



INFO: https://forum.hanggliding.org/viewtopic.php?t=35303

Joe Stapleton: Open frame motors provide much better airflow. The MAD m50 I'm testing for my trike is extremely well made, but I don't think it uses super thin stator lams so efficiency will start to suffer if pushed to too high an ERPM exactly the same as the APS/Freerchobby motors (0.35mm lams). Basically thin stator lams are very expensive and therefore not used on cheap motors except for the Rotomax 150 (0.2mm lams) for some reason. Eddy losses in the iron stator core induced by the magnetic field switching as the rotor magnets fly past are proportional to the square of the lamination thickness x the square of the rpm. This why motors with thick lams can suddenly slam into an RPM wall and just turn into heaters and not go any faster.

MAD motor quality issues: https://community.openppg.com/t/electric-ppg-one-motor-project/2596/26

From Lehner: 

The achievable engine power increases approximately proportionally with the speed. This means that the highest power can only be used at maximum speed.

TorQstar 7040 at 20.000 U/min approx. 20 KW (bei ŋ / Pmax)
TorQstar 7050 at 20.000 U/min approx. 24 KW (bei ŋ / Pmax)

The speed increases approximately proportionally with the operating voltage.

The torque increases approximately proportionally with the current consumed.


Paul Martin: 
-------------

If you want a quick sizing guide. 

14s set up coupled to a 75/300A controller coupled to 

* a 120100 80 to 85kv and a 40D18P propeller will get you between 200 and 250 fpm climb. 
* 15470 even with it limited to 55kv ( though I reckon you could get it rewound) of 16s li-Po you'd have more torque and still have 3700 rpm. A bigger prop would be handy but it might be custom even so with the 40D20P you would be around 48kgf thrust on 250A draw which equates to about 38kgf at 12m/s which gives you over 400 fpm climb rate. Hope that helps



https://www.youtube.com/watch?v=WqlQJw9YXhE
Spec: motor resistance (ohms) waste heat = P=I*I*R
lower KV = more windings = supports higher voltage = smaller wire = more resistance (and waste heat/power loss) = same power at less amps. 

https://www.youtube.com/watch?v=xi7jxIkX2vY
Kt = 1/kv (torque constant) not the same as actual torque: Torque = kt*I
the same motor at different Kvs doesn't change the output torque. Volt and amps can change, but V*I won't change.

https://www.youtube.com/watch?v=k2VDvL4wtJs
Diameter vs length
T = F*D, 
so a bigger diameter produces more torque (basically more leverage)
longer motors also produce more torque


