To avoid iframes: 

1: open the container file and add: 

.. raw:: html

  :file: html/calculator_power.html

2: Add the file contents: 

<style>
  #calc-power-needed {
    /* Layout */
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 1rem;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    /* Headers */
    /* Nav */
    /* Nav Dropdown */
    /* Typography */
    /* Links */
    /* Images */
    /* Forms */
    /* Tables */
    /* Quotes */
    justify-content: end;
  }

  #calc-power-needed div header {
    padding-top: 0;
  }
  #calc-power-needed header {
    text-align: center;
  }

  #calc-power-needed h2 {
    line-height: 1.5;
  }
  #calc-power-needed p {
    margin: 0.75rem 0;
    padding: 0;
    width: 100%;
  }

  #calc-power-needed input:disabled {
    background: #e9e9e9;
    border-color: #e9e9e9;
    color: #999;
    cursor: not-allowed;
  }
  #calc-power-needed input {
    display: block;
    font-size: inherit;
    max-width: 800px;
  }
  #calc-power-needed input {
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 0.4rem 0.8rem;
  }
  #calc-power-needed table {
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    border-spacing: 0;
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    padding: 0;
    white-space: nowrap;
  }
  #calc-power-needed table td,
  #calc-power-needed table th,
  #calc-power-needed table tr {
    padding: 0.2rem;
    text-align: center;
  }
  #calc-power-needed table thead {
    background-color: #118bee;
    border-collapse: collapse;
    border-radius: 5px;
    color: #fff;
    margin: 0;
    padding: 0;
  }
  #calc-power-needed table thead th:first-child {
    border-top-left-radius: 5px;
  }
  #calc-power-needed table thead th:last-child {
    border-top-right-radius: 5px;
  }
  #calc-power-needed table thead th:first-child,
  #calc-power-needed table tr td:first-child {
    text-align: left;
  }
  #calc-power-needed table tr:nth-child(even) {
    background-color: #118bee15;
  }
  #calc-power-needed input {
    margin-bottom: 0;
    max-width: 80px;
  }
  #calc-power-needed table.input {
    width: 100%;
  }
  #calc-power-needed table {
    margin-bottom: 0.5rem;
  }
  #calc-power-needed table.input td,
  #calc-power-needed table.input th,
  #calc-power-needed table.input tr {
    width: 100%;
    text-align: left;
  }
  #calc-power-needed thead > tr:first-of-type > th {
    text-align: center;
  }
  #calc-power-needed table.results th,
  #calc-power-needed table.results th + td {
    vertical-align: baseline;
    text-align: right;
  }
  #calc-power-needed table.results th + td + td {
    width: 100%;
  }
  #calc-power-needed table.results td {
    text-align: left;
  }
  #calc-power-needed table.results th,
  #calc-power-needed td {
    font-size: 1rem;
  }
  #calc-power-needed h2,
  #calc-power-needed p {
    margin: 0;
  }

  #calc-power-needed header {
    padding: 0;
  }
  #calc-power-needed table tr:nth-child(2n) {
    background-color: transparent;
  }
</style>
<div id="calc-power-needed">
  <table class="input">
    <thead>
      <tr>
        <th colspan="6">
          <b>Step 1: </b>
          Enter pilot data to determine theoretical energy to goal.
        </th>
      </tr>
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
  <table class="input">
    <thead>
      <tr>
        <th colspan="6">
          <b>Step 2: </b>
          Adjust required energy based on the efficiency of power train
          components.
        </th>
      </tr>
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
        <td id="G11"></td>
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
  <header>
    <h2></h2>
    <p></p>
  </header>
  <table class="input">
    <thead>
      <tr>
        <th colspan="4">
          <b>Step 3: </b>
          At the required power draw, determine flight time based on battery
          choice.
        </th>
      </tr>
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
</div>
<script>
  'use strict'
  const calcPowerNeeded = document.querySelector('#calc-power-needed')
  function calc() {
    const data = inputs.reduce((data, input) => {
      const value =
        (input.value || '0')
          .match(/(\d|\.)+/g)
          .join('')
          .replace(/^0+/g, '') || 0
      input.value = value
      data[input.id] = +value
      return data
    }, {})
    const C4 = data.C3 / 2.205,
      E4 = data.E3 / 2.237,
      F4 = data.F3 / 3.28,
      F6 = (C4 * 9.8 * F4) / 3600000,
      F7 = C4 * 9.8,
      G11 = (1 - 1 / data.D3) * 100,
      F13 = (data.C11 * data.D11 * data.E11 * data.F11 * G11) / 100 ** 4,
      F14 = F6 / (F13 / 100),
      F15 = F14 / (data.G3 / 60),
      F19 = data.C19 * (data.D19 / 1000) * data.E19,
      F21 = F19 / ((F15 / 60) * 1000),
      results = { C4, E4, F4, F6, F7, G11, F13, F14, F15, F19, F21 }
    for (const [key, value] of Object.entries(results)) {
      /** @type {HTMLTableCellElement} */
      const item = calcPowerNeeded.querySelector('#' + key)
      item.innerText = value.toLocaleString('en-US', {
        maximumFractionDigits: 2,
      })
    }
  }
  const inputs = Array.from(calcPowerNeeded.querySelectorAll('input'))
  inputs.forEach((input) => (input.oninput = () => calc()))
  calc()
</script>