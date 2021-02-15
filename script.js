"use strict";
// init
window.addEventListener("DOMContentLoader", init());

function init() {
  //
  const input = document.querySelector("input");
  input.addEventListener("input", fetchHEX);
  //
  console.log("Bonjour");
  //
  fetchHEX(input);
}

//fetch hex input
function fetchHEX(input) {
  //
  console.log("Are you there");
  //
  input = document.querySelector("input");
  let valueHex = input.value;
  // make the box the same color as hoover
  document.querySelector("#colorbox").style.backgroundColor = `${valueHex}`;

  displayHEX(valueHex);
}

// display hex code for color
function displayHEX(valueHex) {
  //
  console.log("This is working");
  //
  document.getElementById("hex").textContent = ` ${valueHex}`;
  console.log(valueHex);
  //
  hex2RGB(valueHex);
}

//display RGB code
function hex2RGB(valueHex) {
  //
  let r = valueHex.substring(1, 3);
  let g = valueHex.substring(3, 5);
  let b = valueHex.substring(5, 7);
  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  document.getElementById("rgb").textContent = ` ${r}, ${g}, ${b}`;
  //
  console.log(` ${r}, ${g}, ${b}`);
  //
  getHSLvalue(r, g, b);
}

//black box
//display HSL Code
function getHSLvalue(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  displayHSL(h, s, l);
}

//display hsl code for color
function displayHSL(h, s, l) {
  //
  console.log("This is done");
  document.querySelector("#hsl").textContent = ` ${h.toFixed(2)},  ${s.toFixed(
    2
  )}%,  ${l.toFixed(2)}%`;
}
