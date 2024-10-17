import { Rect } from '../types/Size';

export const drawRectangle = (ctx: CanvasRenderingContext2D, rect: Rect) => {
    const { x, y } = rect.position;
    const { width, height } = rect.size;

    ctx.fillStyle = '#b2dcf4';
    ctx.fillRect(x - width / 2, y - height / 2, width, height);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.strokeRect(x - width / 2, y - height / 2, width, height);
};
