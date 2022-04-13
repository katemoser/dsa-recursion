"use strict";

const square1 = [0, 0, 1, 0];
const square2 = [1, 1, [0, 1, 0, 0], 0];
const square3 = 0;
const square4 = 1;

const badSquare1 = 3;
const badSquare2 = [1, 0, 1];
const badSquare3 = [1, 1, [0, 0, 0], 1];

function dump(square) {
  if (square === 0 || square === 1) {
    console.log(square);
  } else {
    for (let subSquare of square) {
      dump(subSquare);
    }
  }
}
