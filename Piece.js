class Piece {
  
  constructor(b1, b2, b3, b4, c) {
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.b4 = b4;
    this.c = c;
    this.b1.setColor(this.c);
    this.b2.setColor(this.c);
    this.b3.setColor(this.c);
    this.b4.setColor(this.c);
    this.reflect = false;
  }
  
  drawPiece() {
    this.b1.drawBlock();
    this.b2.drawBlock();
    this.b3.drawBlock();
    this.b4.drawBlock();
  }
  
  display(x, y, size) {
    fill(this.c);
    rect(x * size, y * size, size, size);
    rect((x - (this.b1.x - this.b2.x)) * size, (y - (this.b1.y - this.b2.y)) * size, size, size);
    rect((x - (this.b1.x - this.b3.x)) * size, (y - (this.b1.y - this.b3.y)) * size, size, size);
    rect((x - (this.b1.x - this.b4.x)) * size, (y - (this.b1.y - this.b4.y)) * size, size, size);
  }
  
  moveLeft(array) {
    if(this.checkLeft(array)) {
      this.b1.moveLeft();
      this.b2.moveLeft();
      this.b3.moveLeft();
      this.b4.moveLeft();
    }
  }
  
  moveDown(array, h, size) {
    if(this.checkDown(array, h, size)) {
      this.b1.moveDown();
      this.b2.moveDown();
      this.b3.moveDown();
      this.b4.moveDown();
      return true;
    }
    return false;
  }
  
  moveRight(array) {
    if(this.checkRight(array)) {
      this.b1.moveRight();
      this.b2.moveRight();
      this.b3.moveRight();
      this.b4.moveRight();
    }
  }
  
  checkLeft(array) {
    if(this.b1.checkLeft(array)) {
      if(this.b2.checkLeft(array)) {
        if(this.b3.checkLeft(array)) {
          if(this.b4.checkLeft(array)) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  checkDown(array, h, size) {
    if(this.b1.checkDown(array, h, size)) {
      if(this.b2.checkDown(array, h, size)) {
        if(this.b3.checkDown(array, h, size)) {
          if(this.b4.checkDown(array, h, size)) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  checkRight(array) {
    if(this.b1.checkRight(array)) {
      if(this.b2.checkRight(array)) {
        if(this.b3.checkRight(array)) {
          if(this.b4.checkRight(array)) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  rotate(array, h, size) { // fix, blocks diagonal to the center won't rotate properly
    var x2;
    var y2;
    var x3;
    var y3;
    var x4;
    var y4;
    if(this.reflect) {
      x2 = this.b1.x + (this.b2.y - this.b1.y);
      y2 = this.b1.y + (this.b2.x - this.b1.x);
      x3 = this.b1.x + (this.b3.y - this.b1.y);
      y3 = this.b1.y + (this.b3.x - this.b1.x);
      x4 = this.b1.x + (this.b4.y - this.b1.y);
      y4 = this.b1.y + (this.b4.x - this.b1.x);
      this.reflect = false;
    }
    else {
      x2 = this.b1.x - (this.b2.y - this.b1.y);
      y2 = this.b1.y - (this.b2.x - this.b1.x);
      x3 = this.b1.x - (this.b3.y - this.b1.y);
      y3 = this.b1.y - (this.b3.x - this.b1.x);
      x4 = this.b1.x - (this.b4.y - this.b1.y);
      y4 = this.b1.y - (this.b4.x - this.b1.x);
      this.reflect = true;
    }
    if(this.checkRotate(array, x2, y2, x3, y3, x4, y4, h, size)) {
      this.b2.x = x2;
      this.b2.y = y2;
      this.b3.x = x3;
      this.b3.y = y3;
      this.b4.x = x4;
      this.b4.y = y4;
    }
  }
  
  checkRotate(array, x2, y2, x3, y3, x4, y4, h, size) {
    var c1 = false;
    var c2 = false;
    var c3 = false;
    var c4 = false;
    if(((this.b1 <= 0 || this.b1 >= 12) || (x2 <= 0 || x2 >= 12) || (x3 <= 0 || x3 >= 12) || (x4 <= 0 || x4 >= 12)) || (this.b1.y > h / size || y2 > h / size || y3 > h / size || y4 > h / size)) {
      return false;
    }
    if(this.b1.y < 0){
      c1 = true;
    }
    else {
      if(array[this.b1.x][this.b1.y].invisible) {
        c1 = true;
      }
    }
    if(y2 < 0){
      c2 = true;
    }
    else {
      if(array[x2][y2].invisible) {
        c2 = true;
      }
    }
    if(y3 < 0){
      c3 = true;
    }
    else {
      if(array[x3][y3].invisible) {
        c3 = true;
      }
    }
    if(y4 < 0){
      c4 = true;
    }
    else {
      if(array[x4][y4].invisible) {
        c4 = true;
      }
    }
    if(c1 && c2 && c3 && c4) {
      return true;
    }
    return false;
  }
}