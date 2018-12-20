function dose(i:number):Promise<string> {
    return new Promise((resolve ,reject)=>{
    // return Q.Promise((resolve, reject) => {
      console.log('involing...');
      setTimeout(function(){
        // return '234'; //return虽然不报错，但是不能正确返回值
        resolve('string');
      }, 2000);

    });
}

async function fn(): Promise<number> {
  console.log('abc');
  var i = await dose(3);
  console.log(i);
  return 123;
}

fn();


// dose(n) {
//   return new Promise(resolve, reject)=> {
//     resolve(3);
//   }
// }
// asyncOper = (n:number) => void {
//
// }

// async function fn() : Promise<number> {
//   var i = await asyncOper;
//   return 2;
// }
