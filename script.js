// Plan and Create Project by Gavin - Bullets challenge ULTRA

// Setup Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 800;

// Global Varibles
let speed = 3;
let mouseX;
let mouseY;
let team = 1;

// Objects on Map

// Player Position
let player = {
  x: 600,
  y: 400,
};

// Create Object to Store Pressed Key Data
let keyPressed = {};

// Key Event Listeners
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

// Create Functions To Store Kep Pressed Data In Object
function keyDownHandler(event) {
  keyPressed[event.code] = true;
}

function keyUpHandler(event) {
  keyPressed[event.code] = false;
}

// Call Draw Function
window.addEventListener("load", draw);

function draw() {
  // Clear Canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Logic
  // Draw Line To Mouse From Player
  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();

  // Stop Player on Contact With Wall
  if (map.y > player.y - 35) {
    keyPressed.KeyW = false;
  }
  if (map.y + 2200 < player.y + 35) {
    keyPressed.KeyS = false;
  }
  if (map.x > player.x - 35) {
    keyPressed.KeyA = false;
  }
  if (map.x + 2500 < player.x + 35) {
    keyPressed.KeyD = false;
  }

  // Move Map to Simulate Player Movement
  if (keyPressed["KeyW"]) {
    map.y += speed;
    borderTop.y += speed;
    borderLeft.y += speed;
    borderBottom.y += speed;
    borderRight.y += speed;
    for (i = 0; i < vertLines.length; i++) {
      vertLines[i].y1 += speed;
      vertLines[i].y2 += speed;
    }
  }
  if (keyPressed["KeyA"]) {
    map.x += speed;
    borderTop.x += speed;
    borderLeft.x += speed;
    borderBottom.x += speed;
    borderRight.x += speed;
    for (i = 0; i < vertLines.length; i++) {
      vertLines[i].x1 += speed;
      vertLines[i].x2 += speed;
    }
  }
  if (keyPressed["KeyS"]) {
    map.y += -speed;
    borderTop.y += -speed;
    borderLeft.y += -speed;
    borderBottom.y += -speed;
    borderRight.y += -speed;
    for (i = 0; i < vertLines.length; i++) {
      vertLines[i].y1 += -speed;
      vertLines[i].y2 += -speed;
    }
  }
  if (keyPressed["KeyD"]) {
    map.x += -speed;
    borderTop.x += -speed;
    borderLeft.x += -speed;
    borderBottom.x += -speed;
    borderRight.x += -speed;
    for (i = 0; i < vertLines.length; i++) {
      vertLines[i].x1 += -speed;
      vertLines[i].x2 += -speed;
    }
  }

  // Drawing

  // Draw Grid Lines
  // Vertical
  for (i = 0; i < vertLines.length; i++) {
    ctx.beginPath();
    ctx.moveTo(vertLines[i].x1, vertLines[i].y1);
    ctx.lineTo(vertLines[i].x2, vertLines[i].y2);
    ctx.stroke();
  }

  // Draw Out of Bounds
  ctx.fillStyle = "rgba(105, 105, 105, 0.6)";
  ctx.fillRect(borderTop.x, borderTop.y, 3700, 500);
  ctx.fillRect(borderLeft.x, borderLeft.y, 600, 2200);
  ctx.fillRect(borderBottom.x, borderBottom.y, 3700, 500);
  ctx.fillRect(borderRight.x, borderRight.y, 600, 2200);

  // Draw Map Borders
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 4;
  ctx.strokeRect(map.x, map.y, 2500, 2200);

  // Draw Player
  ctx.fillStyle = "red";
  fillCircle(player.x, player.y, 35);
  ctx.strokeStyle = "grey";
  strokeCircle(player.x, player.y, 35);

  // Request Another Animation Frame
  requestAnimationFrame(draw);
}

// Mouse Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}
