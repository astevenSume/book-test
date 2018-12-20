class Mammal {
  breathe(): string {
    return "I'm alive!";
  }
}
class WingeAnimal {
  fly(): string {
    return "I can fly!";
  }
}

class Bat implements Mammal, WingeAnimal {
  breathe: () => string;
  fly : () => string;

  say():string{
    return "saying..";
  }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor=>{
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name=>{
      if (name != 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}

// applyMixins(Bat, [Mammal, WingeAnimal]);

let bat = new Bat();
console.log(bat.breathe());
console.log(bat.fly());
console.log(bat.say());
