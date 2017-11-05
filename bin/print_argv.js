console.log(process.argv);

// process.stdin.resume();

// 为什么只使用data呢，有点奇怪了已经
// process.stdin.on('data', (data) => {
//     process.stdout.write('read from console: ' + data.toString());
// })

function somethingComplicated(args) {
    setTimeout(function() {
        console.log("我是一个耗时任务，1秒才执行完成");
    }, 1000);
}

function doSomething(args, callback) {
    somethingComplicated(args);
    process.nextTick(callback);
}

doSomething("hello", () => {
    console.trace("这是来自于nextTick事件，在一下次事件循环进行响应");
});

class Base {
    constructor() {
        this.name = "base";
        this.base = 1991;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }

    showName() {
        console.log(`show name: ${this.name}`);
    }
}

class Sub extends Base {
    constructor() {
        super();
        this.name = "Sub";
    }
}

/**
 * 以前古董的创建类的方法！！！
 * function Base() {
 *  this.name = 'base';
 * }
 * 看起来真的很奇怪的，没办法呀，我是初学者，这Style有点过于自由了
 */

// class需要new关键字才可以创建出来，如果使用function()创建的类就不需要这样子操作
let objBase = new Base();

objBase.showName();
objBase.sayHello();

console.log(`objBase: ${objBase}`);

let objSub = new Sub();
objSub.showName();

/**
 * 这个类似于Swift的extension扩展，可以动态给一个类添加一些属性
 */
Base.prototype.hello = () => {
    console.log("Are you ok?");
};

objBase.hello();

import util from "util";
util.inspect(objBase, true, 2, true);

import { EventEmitter } from "events";

let emitter = new EventEmitter();
emitter.on("someEvent", () => {
    console.log("this is from someEvent");
});

emitter.emit("someEvent");
