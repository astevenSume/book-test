/*
 * Promise又叫许诺类型
 * awarit等待答应的返回再执行下面的函数 完成同步的效果
 * 解释：  系统调用fn()函数不会阻塞，因为fn前标有async function ,
          fn 函数内部会等待dose执行完后，即 dose中的 resolve方法执行后才会执行console.log('after await');
*/
function dose(i:number):Promise<string> {
    return new Promise((resolve ,reject)=>{
    // return Q.Promise((resolve, reject) => {
      console.log('involing...');
      setTimeout(function(){
        // return '234'; //return虽然不报错，但是不能正确返回值
        resolve('string');
      }, 6000);

    });
}

async function fn(): Promise<number> {
  console.log('pre await');
  var i = await dose(3);
  console.log(i);

  console.log('after await');
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
