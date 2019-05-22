class Block {
  
  constructor(x, y, size, color c) {
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