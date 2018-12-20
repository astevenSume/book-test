class Mammal {
    breathe() {
        return "I'm alive!";
    }
}
class WingeAnimal {
    fly() {
        return "I can fly!";
    }
}
class Bat {
    say() {
        return "saying..";
    }
}
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name != 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
let bat = new Bat();
console.log(bat.breathe());
console.log(bat.fly());
console.log(bat.say());
