import { Rect } from '../types/Size';
import { ConnectionPoint } from '../types/ConnectionPoint';
import { Point } from '../types/Point';
import { isOnRectangleBorder, isPerpendicular } from './geometry';

export const dataConverter = (
    rect1: Rect,
    rect2: Rect,
    cPoint1: ConnectionPoint,
    cPoint2: ConnectionPoint
): Point[] => {
    if (!isOnRectangleBorder(rect1, cPoint1.point) || !isOnRectangleBorder(rect2, cPoint2.point)) {
        throw new Error("Точка подсоединения не лежит на середине грани прямоугольника.");
    }

    if (!isPerpendicular(cPoint1.angle) || !isPerpendicular(cPoint2.angle)) {
        throw new Error("Угол подсоединения не перпендикулярен.");
    }

    const points: Point[] = [];

    points.push(cPoint1.point);

    const midX = (cPoint1.point.x + cPoint2.point.x) / 2;
    points.push({ x: midX, y: cPoint1.point.y });
    points.push({ x: midX, y: cPoint2.point.y });

    points.push(cPoint2.point);

    return points;
};
