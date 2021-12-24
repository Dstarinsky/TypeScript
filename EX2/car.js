var Car = /** @class */ (function () {
    //---ctor---
    function Car(val) {
        this._gas = val;
    }
    Object.defineProperty(Car.prototype, "gas", {
        get: function () {
            return this._gas;
        },
        set: function (val) {
            this._gas = val;
        },
        enumerable: false,
        configurable: true
    });
    //---methods---
    Car.prototype.refuel = function (val) {
        this.gas = this.gas + val;
        return true;
    };
    Car.prototype.drive = function () {
        if (this.gas > 0) {
            console.log("Driving!");
        }
    };
    return Car;
}());
