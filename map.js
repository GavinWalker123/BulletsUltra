// File for Handling Map Elements

// Global Variables
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;

// Map Position
let map = {
  x: 0,
  y: 0,
};

// Out of Bounds
let borderTop = {
  x: -600,
  y: -500,
};

let borderLeft = {
  x: -600,
  y: 0,
};

let borderBottom = {
  x: -600,
  y: 2200,
};

let borderRight = {
  x: 2500,
  y: 0,
};

// Grid Lines
// Vertical Lines
let vertLines = [];

for (i = 0; i < 50; i++) {
  x1 += 50;
  x2 += 50;
  vertLines.push({ x1: x1, y1: 0, x2: x2, y2: 2200 });
}

// Horizontal Lines
let horizLines = [];
for (i = 0; i < 44; i++) {
  y1 += 50;
  y2 += 50;
  vertLines.push({ x1: 0, y1: y1, x2: 2500, y2: y2 });
}
