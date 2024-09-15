// Concept of Classes in JS

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    return this.width * this.height;
  }

  paint() {
    console.log(`the paint color is:" ${this.color}`);
  }

  destroy() {

  }
}

const rect = new Rectangle(80, 40, "Yellow");
let area = rect.area();
console.log(area);
rect.paint();
