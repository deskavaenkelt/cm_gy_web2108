var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// En class kan ärvas och byggas ut av andra klasser. Då ändras inte huvudklassen, så man
// behåller kompatibiliteten i projektet men kan ändå lägga till nya funktioner.
var hairyMamal = /** @class */ (function () {
    function hairyMamal() {
    }
    hairyMamal.prototype.toString = function () {
        var retVal = this.isHairy
            ? 'this mamal is hairy!!!'
            : 'this critter is bald!';
        return retVal;
    };
    return hairyMamal;
}());
// Vi kan inte ärva (extend) två klasser! 
// Men vi kan implementera (implements) många interfaces.
var platypus = /** @class */ (function (_super) {
    __extends(platypus, _super);
    function platypus(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.isHairy = true;
        return _this;
    }
    platypus.prototype.growl = function () {
        console.log('Grrrrrrr');
    };
    platypus.prototype.quack = function () {
        console.log('Quack');
    };
    // Standard sätt att skriva ut innehållet i classen.
    platypus.prototype.toString = function () {
        var retVal = this.name + ' is a platypus and ';
        retVal += _super.prototype.toString.call(this);
        return retVal;
    };
    return platypus;
}(hairyMamal));
var pl = new platypus('Duckie');
console.log(pl.toString());
