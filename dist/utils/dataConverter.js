"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataConverter = void 0;
const geometry_1 = require("./geometry");
const dataConverter = (rect1, rect2, cPoint1, cPoint2) => {
    if (!(0, geometry_1.isOnRectangleBorder)(rect1, cPoint1.point) || !(0, geometry_1.isOnRectangleBorder)(rect2, cPoint2.point)) {
        throw new Error("Точка подсоединения не лежит на середине грани прямоугольника.");
    }
    if (!(0, geometry_1.isPerpendicular)(cPoint1.angle) || !(0, geometry_1.isPerpendicular)(cPoint2.angle)) {
        throw new Error("Угол подсоединения не перпендикулярен.");
    }
    const points = [];
    points.push(cPoint1.point);
    const midX = (cPoint1.point.x + cPoint2.point.x) / 2;
    points.push({ x: midX, y: cPoint1.point.y });
    points.push({ x: midX, y: cPoint2.point.y });
    points.push(cPoint2.point);
    return points;
};
exports.dataConverter = dataConverter;
