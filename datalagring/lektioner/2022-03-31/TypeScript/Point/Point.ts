// Snatched from https://www.typescriptlang.org/docs/handbook/2/classes.html

class Point {
    x: number;
    y: number;
   
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return `(${this.x}, ${this.y})`;
    }
  }

  var p1 = new Point(10,12); // x=10, y=12
  var p2 = new Point(10);    // x=10, y=0
  var p3 = new Point();      // x=0, y=0
  
  console.log(p1.toString());
  console.log(p2.toString());
  console.log(p3.toString());
