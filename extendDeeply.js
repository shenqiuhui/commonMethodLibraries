/**
 * 深复制对象
 * @param {Object} options
 * @param {Object} target
 */
function extendDeeply(options, target) {
    var target = target || {};

    for(var prop in options) {
        if(typeof options[prop] == 'object') {
            target[prop] = options[prop] instanceof Array ? [] : {};
            arguments.callee(options[prop], target[prop]);
        } else {
            target[prop] = options[prop];
        }
    }

    return target;
}


// 示例
var obj = {
    name: 'panda',
    subObj: {
        age: 20,
        fn: function () {
            console.log(1);
        }
    },
    hobby: ['basketball', 'swim'],
    f: function () {
        console.log(2);
    }
};

var newObj = extendDeeply(obj);
console.log(newObj);
console.log(newObj === obj);    // false
console.log(newObj.subObj === obj.subObj);  // false
console.log(newObj.hobby === obj.hobby);    // false
console.log(newObj.subObj.fn === obj.subObj.fn);    // true
console.log(newObj.f === obj.f);    // true