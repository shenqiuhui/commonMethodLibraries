/**
 * 对任意功能函数实现函数柯里化
 * @param {Function} func
 * @param {Array} args
 */
function createCurry(func, args) {
    var arity = func.length;
    var args = args || [];

    return function () {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(_args, args);

        if(_args.length < arity) {
            return createCurry.call(this, func, _args);
        }

        return func.apply(this, _args);
    }
}


// 案例
function check(reg, targetString) {
    return reg.test(targetString);
}

// 柯里化把简单的问题复杂化，但却提高了自由度，可以根据正则规则的不同设计多个功能
var _check = createCurry(check);
var checkPhone = _check(/^1[34578]\d{9}$/);
var checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

// 调用
console.log(checkPhone('18888888888')); // true
console.log(checkEmail('pandashen821@163.com')); // true


// 案例
function _map(func, array) {
    return array.map(func);
}

var _getNewArray = createCurry(_map);
var getNewArray = _getNewArray(function(item) {
    return item * 100 + '%'
})

console.log(getNewArray([1, 2, 3, 0.12]));   // ['100%', '200%', '300%', '12%'];