"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawLine = void 0;
const drawLine = (ctx, points) => {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.slice(1).forEach(point => {
        ctx.lineTo(point.x, point.y);
    });
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
};
exports.drawLine = drawLine;
