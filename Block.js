class Block {
  
  constructor(x, y, size, i) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.c = color(255);
    this.invisible = i;
  }
  
  drawBlock() {
    if(!(this.invisible)) {
      fill(this.c);
      rect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
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
  
  checkLeft(array) {
    if(this.y + 1 <= 0) {
      return true;
    }
    else {
      if(this.x - 1 <= 0) {
        return false;
      }
      else {
        if(!(array[this.x - 1][this.y].invisible)) {
          return false;
        }
      }
    }
    return true;
  }
  
  checkDown(array, h, size) {
    if(this.y + 1 < 0) {
      return true;
    }
    else {
      if(this.y + 1 >= h / size) {
        return false;
      }
      else {
        if(!(array[this.x][this.y + 1].invisible)) {
          return false;
        }
      }
    }
    return true;
  }
  
  checkRight(array) {
    if(this.y + 1 <= 0) {
      return true;
    }
    else {
      if(this.x + 1 >= 12) {
        return false;
      }
      else {
        if(!(array[this.x + 1][this.y].invisible)) {
          return false;
        }
      }
    }
    return true;
  }
  
  setColor(c) {
    this.c = c;
  }
  
}