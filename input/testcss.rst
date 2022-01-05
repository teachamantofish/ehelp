************************************************
Test CSS
************************************************

css experiment


.. raw:: html

  <!--These styles must only apply to content in 'main' -->
  <link rel="stylesheet" href="_static/calculator/mvp.css" />
  <link rel="stylesheet" href="_static/calculator/calculator.css" />
  <script defer type="text/javascript" src="_static/calculator/powercalc.js"/>

   <main>
      <section class="right">
        <header>
          <h2>Step 1</h2>
          <p>Enter pilot data to determine theoretical energy to goal.</p>
        </header>
        <table class="input">
          <thead>
            <tr>
              <th></th>
              <th>Weight (kg)</th>
              <th>Glide ratio</th>
              <th>Climb speed</th>
              <th>Altitude goal (ft)</th>
              <th>Time to goal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pilot and wing data</th>
              <td><input id="C3" placeholder="0" value="300" /></td>
              <td><input id="D3" placeholder="0" value="12" /></td>
              <td><input id="E3" placeholder="0" value="25" /></td>
              <td><input id="F3" placeholder="0" value="1000" /></td>
              <td><input id="G3" placeholder="0" value="5" /></td>
            </tr>
            <tr>
              <th>Metric</th>
              <td id="C4"></td>
              <td id="D4"></td>
              <td id="E4"></td>
              <td id="F4"></td>
              <td id="G4"></td>
            </tr>
          </tbody>
        </table>
        <table class="results">
          <tbody>
            <tr>
              <th rowspan="2">Theoretical energy</th>
              <td id="F6"></td>
              <td>kwh</td>
            </tr>
            <tr>
              <td id="F7"></td>
              <td>Newtons</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="right">
        <header>
          <h2>Step 2</h2>
          <p>
            Adjust required energy based on the efficiency of power train
            components.
          </p>
        </header>
        <table class="input">
          <thead>
            <tr>
              <th></th>
              <th>Propeller</th>
              <th>Motor</th>
              <th>Batteries</th>
              <th>All Else</th>
              <th>1-(1/glide ratio)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Efficiency reduction (%)</th>
              <td><input id="C11" placeholder="0" value="45" /></td>
              <td><input id="D11" placeholder="0" value="90" /></td>
              <td><input id="E11" placeholder="0" value="95" /></td>
              <td><input id="F11" placeholder="0" value="95" /></td>
              <td><input id="G11" placeholder="0" value="92" /></td>
            </tr>
          </tbody>
        </table>
        <table class="results">
          <tbody>
            <tr>
              <th>Efficiency</th>
              <td id="F13"></td>
              <td>%</td>
            </tr>
            <tr>
              <th>Adjusted energy</th>
              <td id="F14"></td>
              <td>kwh</td>
            </tr>
            <tr>
              <th>Power rate based on fpm climb</th>
              <td id="F15"></td>
              <td>kw battery draw</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="right">
        <header>
          <h2>Step 3</h2>
          <p>
            At the required power draw, determine flight time based on battery
            choice.
          </p>
        </header>
        <table class="input">
          <thead>
            <tr>
              <th></th>
              <th>S rating (volts)</th>
              <th>Capacity (mAh)</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Battery</th>
              <td><input id="C19" placeholder="0" value="6" /></td>
              <td><input id="D19" placeholder="0" value="22000" /></td>
              <td><input id="E19" placeholder="0" value="2" /></td>
            </tr>
          </tbody>
        </table>
        <table class="results">
          <tbody>
            <tr>
              <th>Available watts</th>
              <td id="F19"></td>
              <td>W</td>
            </tr>
            <tr>
              <th>Projected flight time</th>
              <td id="F21"></td>
              <td>minutes</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>