/**
 * 模拟 new 关键字方法一
 * @param {Function} fn
 */
function New(fn) {
    return function () {
        var obj = {
            __proto__: fn.prototype
        }
        fn.apply(obj, arguments);
        return obj;
    }
}

// 案例
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = New(Person)('peter', 20);
var p2 = new Person('lucy', 18);
console.log(p1);    // Person { name: 'peter', age: 20 }
console.log(p2);    // Person { name: 'lucy', age: 18 }
console.log(p1 instanceof Person); // true
console.log(p2 instanceof Person); // true
console.log(p1.__proto__ === p2.__proto__); // true



/**
 * 模拟 new 关键字方法二
 * @param {Function} func
 */
function New(func) {
    var obj = {};

    if(func.prototype !== null) {
        obj.__proto__ = func.prototype;
    }

    // 如果构造函数指定了返回值的对象，返回 _obj, 否则返回 obj
    var _obj = func.apply(obj, Array.prototype.slice.call(arguments, 1));

    if((typeof _obj === 'object' || typeof _obj === 'function') && _obj !== null) {
        return _obj;
    }

    return obj;
}


// 案例
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = New(Person, 'peter', 20);
var p2 = new Person('lucy', 18);
console.log(p1);    // Person { name: 'peter', age: 20 }
console.log(p2);    // Person { name: 'lucy', age: 18 }
console.log(p1 instanceof Person); // true
console.log(p2 instanceof Person); // true
console.log(p1.__proto__ === p2.__proto__); // true