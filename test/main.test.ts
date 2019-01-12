class Person {
  pname: string = 'obs';
  constructor(s:string){
    this.pname = s;
  }
  getWorld(){
    alert(0);
  }
}
class superMan extends Person {

}

let person = new Person('nnn');
console.log(Person.prototype);
console.log(Person);
console.log(person);
// console.log(Person.getPrototypeOf());
// console.log(Person.__proto__);
