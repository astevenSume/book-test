let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator;
// declare interface R{
//   showName(s:string):void;
// }
// declare interface RL{
//   showName(s:string):void;
//
//   sy():void;
// }
//
// const c:any=4;
//
//
// export {RL,R,c};


//导出方式二
//export default "123";

/*
 * 导出方式一： 引用时 import { Mysus } from "./Mysus";
*/
// export class Mysus {
//     // protocol?:string;
//     isAcceptable(s: string) {
//         return s.length === 5 && parseInt(s).toString() === s;
//     }
// }
