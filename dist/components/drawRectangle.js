"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawRectangle = void 0;
const drawRectangle = (ctx, rect) => {
    const { x, y } = rect.position;
    const { width, height } = rect.size;
    ctx.fillStyle = '#b2dcf4';
    ctx.fillRect(x - width / 2, y - height / 2, width, height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.strokeRect(x - width / 2, y - height / 2, width, height);
};
exports.drawRectangle = drawRectangle;
