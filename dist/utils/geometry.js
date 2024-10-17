"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnRectangleBorder = exports.isPerpendicular = void 0;
const isPerpendicular = (angle) => {
    return angle % 90 === 0;
};
exports.isPerpendicular = isPerpendicular;
const isOnRectangleBorder = (rect, point) => {
    const left = rect.position.x - rect.size.width / 2;
    const right = rect.position.x + rect.size.width / 2;
    const top = rect.position.y - rect.size.height / 2;
    const bottom = rect.position.y + rect.size.height / 2;
    const centerX = rect.position.x;
    const centerY = rect.position.y;
    return ((point.x === centerX && (point.y === top || point.y === bottom)) ||
        (point.y === centerY && (point.x === left || point.x === right)));
};
exports.isOnRectangleBorder = isOnRectangleBorder;
