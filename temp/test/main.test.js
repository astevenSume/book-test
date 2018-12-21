"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model = require("./model.test");
let u = new model.User();
u.say();
class Mes {
    say() {
        console.log(9);
    }
}
