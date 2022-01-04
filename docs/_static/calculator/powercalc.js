'use strict'

let lastD3 = 0
function calc() {
  const data = inputs.reduce((data, input) => {
    const value = (input.value || '').match(/(\d|\.)+/g).join('') || 0
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
    F13 = (data.C11 * data.D11 * data.E11 * data.F11 * data.G11) / 100 ** 5,
    F14 = F6 / F13,
    F15 = F14 / (data.G3 / 60),
    F19 = data.C19 * 3.7 * (data.D19 / 1000) * 2,
    F21 = F19 / ((F15 / 60) * 1000),
    results = { C4, E4, F4, F6, F7, F13: F13 * 100, F14, F15, F19, F21 }
  if (data.D3 != lastD3) results['G11'] = G11
  for (const [key, value] of Object.entries(results)) {
    /** @type {HTMLTableCellElement | HTMLInputElement} */
    const item = document.querySelector('#' + key)
    const text = value.toLocaleString('en-US', { maximumFractionDigits: 2 })
    if (item instanceof HTMLInputElement) item.value = text
    else item.innerText = text
  }
  lastD3 = data.D3
}

const inputs = Array.from(document.querySelectorAll('input'))
inputs.forEach((input) => (input.oninput = () => calc()))
calc()
