测试书中从函数开始的实例

一、 测试步骤：
  1 , 在当前目录的命令行中执行 gulp
  2 ,  gulp会把test中所有**.test.ts文件编译成js到temp/test目录中
  3 ， 改变 temp/test/index.html 中的 js的引用即可测试生成的js

  4 , 当我们做测试的时候，gulpfile.js文件中一定不要把 lint放到browser-sync中 因为自动重启浏览器时一旦出错会影响到gulp命令断开，而无法再测试下去，这时候只要看console里的错误就好了 
