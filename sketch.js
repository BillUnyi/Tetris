new p5();

function setup() {
  createCanvas(400, 540);
}

w = 400;
h = 540;
size = 20;
displayX = 0;
displayY = 0;
time = 0;
previousTime = 0;
speed = 1000;
move = false;
start = true;
first = true;
newPiece = true;
array = [];
for(i = 0; i < w / size; i++) {
  array[i] = [];
  for(j = 0; j < h / size; j++) {
    array[i][j] = new Block(i, j, size, true);
  }
}

makePiece();

function draw() {
  if(start) {
    background(0, 0, 50);
    fill(255);
    textSize(96);
    text('TETRIS', 25, 200);
    fill(100);
    textSize(32);
    text('Press Enter To Start', 50, 250);
  }
  else {
    background(0, 0, 100);
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
    drawHalfCol(17, 0, 2);
    drawHalfCol(17, 8, h / size);
    drawHalfCol(18, 0, 2);
    drawHalfCol(18, 8, h / size);
    drawColumn(19);
    if(millis() - previousTime >= speed) {
      move = true;  
    }
    if(move) {
      move = false;
      previousTime = millis();
      newPiece = !(p.moveDown(array, h, size));
    }
    if(newPiece) {
      array[p.b1.x][p.b1.y] = p.b1;
      array[p.b2.x][p.b2.y] = p.b2;
      array[p.b3.x][p.b3.y] = p.b3;
      array[p.b4.x][p.b4.y] = p.b4;
      newPiece = false;
      makePiece();
    }
    //clearRows(); // clears a whole row
    for(i = 0; i < w / size; i++) {
      for(j = 0; j < h / size; j++) {
        array[i][j].drawBlock();
      }
    }
    p.drawPiece();
    p2.display(displayX, displayY, size);
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
      p.moveLeft(array);
    }
    else {
      if(keyCode === RIGHT_ARROW) {
        p.moveRight(array);
      }
      else {
        if(keyCode === DOWN_ARROW) {
          newPiece = !(p.moveDown(array, h, size))
        }
        else {
          if(keyCode === UP_ARROW) {
            p.rotate(array, h, size);
          }
        }
      }
    }
  }
}

function drawColumn(num) {
  for(i = 0; i <= h / size - 1; i++) {
    array[num][i] = new Block(num, i, size, false);
    array[num][i].setColor(color(100, 100, 100));
  }
}

function drawHalfCol(num, start, end) {
  for(i = start; i <= end - 1; i++) {
    array[num][i] = new Block(num, i, size, false);
    array[num][i].setColor(color(100, 100, 100));
  }
}

function clearRows() {
  for(i = 0; i < h / size; i++) {
    r = true;
    for(j = 1; j < 12; j++) {
      if(array[i][j].invisible) {
        r = false;
      }
    }
    if(r) {
      for(k = i - 1; k < 1; k--) {
        for(l = 1; l < 12; l++) {
          array[k + 1][l] = array[k][l];
        }
      }
    }
    for(x = 1; j < 12; j++) {
      array[1][x] = new Block(x, 1, size, true);
    }
  }
}

function makePiece() {
  if(first) {
    num = random(0, 7);
    getPiece(num);
    first = false;
  }
  p = p2;
  num = random(0, 7);
  getPiece(num);
}

function getPiece(num) {
  if(num < 1) {
     p2 = new TPiece(new Block(6, -2, size, false), new Block(6, -3, size, false), new Block(5, -2, size, false), new Block(7, -2, size, false));
    displayX = 15.5;
    displayY = 5;
  }
  else {
    if(num < 2) {
      p2 = new JPiece(new Block(6, -3, size, false), new Block(6, -4, size, false), new Block(6, -2, size, false), new Block(7, -4, size, false));
      displayX = 15;
      displayY = 4.5;
    }
    else {
      if(num < 3) {
        p2 = new LPiece(new Block(7, -3, size, false), new Block(7, -4, size, false), new Block(7, -2, size, false), new Block(6, -4, size, false));
        displayX = 16;
        displayY = 4.5;
      }
      else {
        if(num < 4) {
          p2 = new SPiece(new Block(7, -3, size, false), new Block(6, -3, size, false), new Block(7, -2, size, false), new Block(6, -4, size, false));
          displayX = 16;
          displayY = 4.5;
        }
        else {
          if(num < 5) {
            p2 = new ZPiece(new Block(6, -3, size, false), new Block(7, -3, size, false), new Block(6, -2, size, false), new Block(7, -4, size, false));
            displayX = 15;
            displayY = 4.5;
          }
          else {
            if(num < 6) {
              p2 = new SquarePiece(new Block(6, -3, size, false), new Block(7, -3, size, false), new Block(6, -2, size, false), new Block(7, -2, size, false));
          displayX = 15;
          displayY = 4;
            }
            else {
              p2 = new LinePiece(new Block(6, -2, size, false), new Block(5, -2, size, false), new Block(7, -2, size, false), new Block(8, -2, size, false));
          displayX = 15;
          displayY = 4.5;
            }
          }
        }
      }
    }
  }
}