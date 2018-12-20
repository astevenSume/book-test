class Mam {
  breathe(): string {
    return "I'm alive!";
  }
}
class Wam {
  fly(): string {
    return "I can fly!";
  }
}

class Bts implements Mam, Wam {
  breathe: () => string;
  fly : () => string;

  say():string{
    return "saying..";
  }
}

function applyMixinss(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor=>{
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name=>{
      if (name != 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}

// applyMixinss(Bts, [Mam, Wam]);

let bats = new Bts();
console.log(bats.breathe());
console.log(bats.fly());
console.log(bats.say());
