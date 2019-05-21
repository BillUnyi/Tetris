new p5();

function setup() {
  createCanvas(360, 640);
}

class Block {
  
  constructor(x, y, size, c) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.c = c;
  }
  
  drawBlock() {
    fill(c);
    rect(x * size, y * size, size, size);
  }
  
}

width = 360;
height = 640;
size = 20;
b1 = new Block(1, 0, size, color(255, 0, 0));

function draw() {
  background(0);
  fill(150);
  drawColumn(0);
  drawColumn(12);
  drawHalfCol(13, 0, 2);
  drawHalfCol(13, 8, height / size);
  drawHalfCol(14, 0, 2);
  drawHalfCol(14, 8, height / size);
  drawHalfCol(15, 0, 2);
  drawHalfCol(15, 8, height / size);
  drawHalfCol(16, 0, 2);
  drawHalfCol(16, 8, height / size);
  drawColumn(17);
  b1.drawBlock();
}

function drawColumn(num) {
  for(i = 0; i <= height - size; i += size) {
    rect(num * size, i, size, size);
  }
}

function drawHalfCol(num, start, end) {
  for(i = start * size; i <= end * size - size; i += size) {
    rect(num * size, i, size, size);
  }
}