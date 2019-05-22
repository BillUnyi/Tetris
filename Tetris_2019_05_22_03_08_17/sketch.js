new p5();

function setup() {
  createCanvas(360, 540);
}

class Block {
  
  constructor(x, y, size, c) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.c = c;
  }
  
  drawBlock() {
    fill(this.c);
    rect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
  
  moveLeft() {
    this.x -= 1;
  }
  
  moveDown() {
    this.y += 1;
  }
  
  moveRight() {
    this.x += 1;
  }
  
  checkLeft() {
    if(this.x - 1 <= 0) {
       return false;
    }
    return true;
  }
  
  checkDown(height, size) {
    if(this.y + 1 >= height / size) {
       return false;
    }
    return true;
  }
  
  checkRight() {
    if(this.x + 1 >= 12) {
       return false;
    }
    return true;
  }
  
}

class Piece {
  
  constructor(c) {
    this.c = c
  }
  
  
}

w = 360;
h = 540;
size = 20;
time = 0;
previousTime = 0;
move = true;
start = true;
b1 = new Block(1, 0, size, color(255, 0, 0));

function draw() {
  if(start) {
    background(0);
  }
  else {
    background(0);
    fill(100);
    drawColumn(0);
    drawColumn(12);
    drawHalfCol(13, 0, 2);
    drawHalfCol(13, 8, h / size);
    drawHalfCol(14, 0, 2);
    drawHalfCol(14, 8, h / size);
    drawHalfCol(15, 0, 2);
    drawHalfCol(15, 8, h / size);
    drawHalfCol(16, 0, 2);
    drawHalfCol(16, 8, h / size);
    drawColumn(17);
    if(millis() - previousTime >= 1000) {
      move = true;  
    }
    if(move) {
      move = false;
      previousTime = millis();
      if(b1.checkDown(h, size)) {
         b1.moveDown();
      }
    }
    b1.drawBlock();
  }
}
function keyReleased() {
  if(start) {
    if(keyCode === ENTER) {
      start = false;
    }
  }
  else {
    if(keyCode === LEFT_ARROW) {
      if(b1.checkLeft()) {
        b1.moveLeft();
      }
    }
    else {
      if(keyCode === RIGHT_ARROW) {
        if(b1.checkRight()) {
          b1.moveRight();
        }
      }
      else {
        if(keyCode === DOWN_ARROW) {
          if(b1.checkDown(h, size)) {
            b1.moveDown();
          }
        }
      }
    }
  }
}

function drawColumn(num) {
  for(i = 0; i <= h - size; i += size) {
    rect(num * size, i, size, size);
  }
}

function drawHalfCol(num, start, end) {
  for(i = start * size; i <= end * size - size; i += size) {
    rect(num * size, i, size, size);
  }
}
