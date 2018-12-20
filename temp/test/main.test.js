var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dose(i) {
    return new Promise((resolve, reject) => {
        console.log('involing...');
        setTimeout(function () {
            resolve('23aa');
        }, 2000);
    });
}
function fn() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('abc');
        var i = yield dose(3);
        console.log(i);
        return 123;
    });
}
fn();
