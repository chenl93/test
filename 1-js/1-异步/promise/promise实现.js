/**
 * 功能可实现多数（then catch all race resolve reject），一步一步理清思路。
 * 1、实现resolve、reject方法，then方法和状态机制
 * 根据使用方法我们可以知道，Promise是一个需要接受一个执行器的构造函数，
 * 执行器提供两个方法，内部有状态机制，原型链上有then方法。
 * 2、实现异步
 * 3、处理错误
 * 4、实现then的链式调用（难点）
 *  */ 

function Promise(excutor){

}