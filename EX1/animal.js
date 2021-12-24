var Animal = /** @class */ (function () {
    //---Ctor---
    function Animal(val) {
        this._name = val;
    }
    Animal.prototype.setName = function (val) {
        this._name = val;
    };
    Animal.prototype.getName = function () {
        return this._name;
    };
    return Animal;
}());
