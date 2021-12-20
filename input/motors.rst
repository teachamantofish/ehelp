************************************************
Motors
************************************************

.. image:: images/uc1.gif

Top considerations
==========================


 Higher voltage lower current will be more efficient as electrical losses (heat) is proportional to the square of the current.


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

Mike Z Dillon: Nearly everything you might need or want to know about the Geiger products is in their handbook - https://www.geigerengineering.de/.../Handbuch_Manual_E...GEIGERENGINEERING.DE


Mike Z Dillon
This is one of my favorite Geiger documents - https://www.geigerengineering.de/.../Intertec_UN_38_3...


INFO: https://forum.hanggliding.org/viewtopic.php?t=35303

Joe Stapleton: Open frame motors provide much better airflow. The MAD m50 I'm testing for my trike is extremely well made, but I don't think it uses super thin stator lams so efficiency will start to suffer if pushed to too high an ERPM exactly the same as the APS/Freerchobby motors (0.35mm lams). Basically thin stator lams are very expensive and therefore not used on cheap motors except for the Rotomax 150 (0.2mm lams) for some reason. Eddy losses in the iron stator core induced by the magnetic field switching as the rotor magnets fly past are proportional to the square of the lamination thickness x the square of the rpm. This why motors with thick lams can suddenly slam into an RPM wall and just turn into heaters and not go any faster.