var Mammal = /** @class */ (function () {
    function Mammal() {
    }
    Mammal.prototype.breathe = function () {
        return "I'm alive!";
    };
    return Mammal;
}());
var WingeAnimal = /** @class */ (function () {
    function WingeAnimal() {
    }
    WingeAnimal.prototype.fly = function () {
        return "I can fly!";
    };
    return WingeAnimal;
}());
var Bat = /** @class */ (function () {
    function Bat() {
    }
    Bat.prototype.say = function () {
        return "saying..";
    };
    return Bat;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name != 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
// applyMixins(Bat, [Mammal, WingeAnimal]);
var bat = new Bat();
console.log(bat.breathe());
console.log(bat.fly());
console.log(bat.say());
