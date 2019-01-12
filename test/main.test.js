var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(s) {
        this.pname = 'obs';
        this.pname = s;
    }
    Person.prototype.getWorld = function () {
        alert(0);
    };
    return Person;
}());
var superMan = (function (_super) {
    __extends(superMan, _super);
    function superMan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return superMan;
}(Person));
var person = new Person('nnn');
console.log(Person.prototype);
console.log(Person);
console.log(person);
