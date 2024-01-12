// Helper Functions
function fillCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function strokeCircle(x, y, r) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
}
