/**
 * 获取元素距离窗口左侧和顶部距离的方法
 * @param {Object} element
 * @param {String} direction
 */
function getElementDistance(element, direction) {
    var attr = 'offset' + direction;
    var actualDistance = element[attr];
    var current = element.offsetParent;

    while (current != null) {
        actualDistance += current[attr];
        current = current.offsetParent;
    }

    return actualDistance;
}

// 示例（假设该元素外层还有元素）
var box = document.getElementById('#box');
var actualLeft = getElementDistance(box, 'left');
var actualTop = getElementDistance(box, 'top');