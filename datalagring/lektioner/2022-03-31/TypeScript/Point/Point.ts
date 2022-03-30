// Snatched from https://www.typescriptlang.org/docs/handbook/2/classes.html

class Point {
    x: number;
    y: number;
   
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }

  var p = new Point(10,12);
  console.log(p.toString());
