import { Point } from "../types/Point";
import { Rect } from "../types/Size";

export const isPerpendicular = (angle: number): boolean => {
    return angle % 90 === 0;
};

export const isOnRectangleBorder = (rect: Rect, point: Point): boolean => {
    const left = rect.position.x - rect.size.width / 2;
    const right = rect.position.x + rect.size.width / 2;
    const top = rect.position.y - rect.size.height / 2;
    const bottom = rect.position.y + rect.size.height / 2;
    const centerX = rect.position.x;
    const centerY = rect.position.y;

    return (
        (point.x === centerX && (point.y === top || point.y === bottom)) ||
        (point.y === centerY && (point.x === left || point.x === right))
    );
};
