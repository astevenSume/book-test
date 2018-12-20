class Mam {
    breathe() {
        return "I'm alive!";
    }
}
class Wam {
    fly() {
        return "I can fly!";
    }
}
class Bts {
    say() {
        return "saying..";
    }
}
function applyMixinss(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name != 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
let bats = new Bts();
console.log(bats.breathe());
console.log(bats.fly());
console.log(bats.say());
