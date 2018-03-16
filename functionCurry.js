/**
 * 对任意功能函数实现函数柯里化
 * @param {Function} func
 * @param {Array} args
 */
function creatCurry(func, args) {
    var arity = func.length;
    var args = args || [];

    return function () {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(_args, args);

        if(_args.length < arity) {
            return creatCurry.call(this, func, _args);
        }

        return func.apply(this, _args);
    }
}


// 案例
function check(reg, targetString) {
    return reg.test(targetString);
}

// 柯里化把简单的问题复杂化，但却提高了自由度，可以根据正则规则的不同设计多个功能
var _check = creatCurry(check);
var checkPhone = _check(/^1[34578]\d{9}$/);
var checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

// 调用
console.log(checkPhone('18888888888')); // true
console.log(checkEmail('pandashen821@163.com')); // true