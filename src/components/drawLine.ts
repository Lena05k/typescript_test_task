import { Point } from '../types/Point';

export const drawLine = (ctx: CanvasRenderingContext2D, points: Point[]) => {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    points.slice(1).forEach(point => {
        ctx.lineTo(point.x, point.y);
    });

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
};
