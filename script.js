"use strict";
// init
window.addEventListener("DOMContentLoader", init());

function init() {
  //
  console.log("Bonjour");
  fetchHEX();
}

//fetch hex input
function fetchHEX() {
  let valueHEX = document.getElementById("picker").value;
  displayHEX(valueHEX);
  showColorBox(valueHEX);
}

// display hex code for color
function displayHEX(valueHEX) {
  //
  console.log("Are you there");
  //
  document.getElementById("hex").textContent = ` ${valueHEX}`;
  console.log(valueHEX);
}

//change color of preview box
function showColorBox(valueHEX) {
  //
  document.getElementById("colorbox").style.backgroundColor = valueHEX;
  hex2RGB(valueHEX);
}

//display RGB code
function hex2RGB(valueHEX) {
  //
  let r = valueHEX.substring(1, 3);
  let g = valueHEX.substring(3, 5);
  let b = valueHEX.substring(5, 7);
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
  document.querySelector("#hsl").textContent = ` ${h}%,  ${s}%,  ${l}%`;
}
