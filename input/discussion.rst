
Joe Stapleton: https://www.facebook.com/groups/904566026835865/permalink/946245972667870/?comment_id=952365935389207&notif_id=1639134326519757&notif_t=group_comment&ref=notif

There is some extreme confusion going on here, you really can't use KV (no load RPM per volt) to try and determine prop RPM directly. KV is simply the inverse of KT the torque constant. KT tells you how much torque your motor will produce per amp. Applying a specific torque to your prop will generate a specific thrust, irrespective of airspeed. All that happens as your airspeed increases if you keep the torque/current the same is the RPM increases and therefore the power since power = torque x RPM.

What you need to make any meaningful prediction is the torque to thrust curve for your prop, this is available from reputable prop manufactures such as e-prop.

To try an illustrate the relationship between KV, KT, torque, current, voltage and thrust please look at the example e-prop curves below I just picked some random 2 blade family. If you look at the lowest blue lines on both charts these represent the lowest pitch prop in that family. So say you decide you want 40kg of thrust from this prop, you read across the top chart and see you need to spin it at ~2800RPM. Now look at the lower chart and see that at 2800RPM you need ~25Nm of torque.

.. image:: images/kvvskt.png

So say we want use a 50KV motor, we convert from RPM/V to SI units (Radians per second per volt) then invert it to get KT. In one step you can do this by KT = 9.55/KV = 9.55/50 = 0.19Nm/A, i.e. for every amp we put through the motor it will produce 0.19Nm of torque.

So we can now calculate the phase current we need to produce 25Nm of torque which will spin our prop at 2800RPM and generate 40kg of thrust, simply 25/0.19 = 131A. Finally at 2800RPM our motor will be generating a back EMF of 2800/50 = 56V. So we need a battery of at least 56V to do this otherwise the system will never reach this RPM. If we are planning to fly then we need a higher voltage as the prop RPM will increase with airspeed.

Hopefully it is obvious that this is all true whether the motor is 1000kg electric train or a 10 gram rc model motor. This is why the continuous current, max voltage / max RPM of the motor are also important.

