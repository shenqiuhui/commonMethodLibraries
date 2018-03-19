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