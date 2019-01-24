测试书中从函数开始的实例

一、 测试步骤：
  1 , 在当前目录的命令行中执行 gulp
  2 ,  gulp会把test中所有**.test.ts文件编译成js到temp/test目录中
  3 ， 改变 temp/test/index.html 中的 js的引用即可测试生成的js

  4 ,  gulp使用gulp-util进行错误捕获，而不中断browser的重启
