// Snatched from https://www.typescriptlang.org/docs/handbook/2/classes.html
var Point = /** @class */ (function () {
    // Normal signature with defaults
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    return Point;
}());
var p1 = new Point(10, 12); // x=10, y=12
var p2 = new Point(10); // x=10, y=0
var p3 = new Point(); // x=0, y=0
console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());
