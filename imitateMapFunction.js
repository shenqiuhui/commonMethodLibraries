/**
 * 模拟数组 map 方法的实现
 * @param {Function} fn
 * @param {Object} obj
 */
Array.prototype._map = function (fn, obj) {
    var temp = [];

    if(typeof fn === 'function') {
        var len = this.length;

        for(var i = 0; i < len; i++) {
            temp.push(fn.call(obj, this[i], i, this));
        }

    } else {
        console.error('TypeError: ' + fn + 'is not a function');
    }

    return temp;
}


// 案例
var arr = [1, 2, 3, 4, 5];
var obj = {
    a: 1
};

arr._map(function (item, idx, arr) {
    console.log(item, idx, arr, this);
    return item + '%';
}, obj);

// 1 0 [ 1, 2, 3, 4, 5 ] { a: 1 }
// 2 1 [ 1, 2, 3, 4, 5 ] { a: 1 }
// 3 2 [ 1, 2, 3, 4, 5 ] { a: 1 }
// 4 3 [ 1, 2, 3, 4, 5 ] { a: 1 }
// 5 4 [ 1, 2, 3, 4, 5 ] { a: 1 }
// ['1%', '2%', '3%', '4%', '5%']