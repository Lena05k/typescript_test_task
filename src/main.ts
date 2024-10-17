import { createCanvas as nodeCreateCanvas, Canvas as NodeCanvas, CanvasRenderingContext2D as NodeCanvasRenderingContext2D } from 'canvas';
import { Rect } from './types/Size';
import { ConnectionPoint } from './types/ConnectionPoint';
import { dataConverter } from './utils/dataConverter';
import { drawRectangle } from './components/drawRectangle';
import { drawLine } from './components/drawLine';
import { Point } from './types/Point';

export const render = (canvasId: string | null, rect1: Rect, rect2: Rect, points: Point[]) => {
    let canvas: HTMLCanvasElement | NodeCanvas;
    let ctx: CanvasRenderingContext2D | NodeCanvasRenderingContext2D | null;

    if (typeof window === 'undefined') {
        canvas = nodeCreateCanvas(500, 500);
        ctx = canvas.getContext('2d') as NodeCanvasRenderingContext2D;
    } else {
        canvas = document.getElementById(canvasId!) as HTMLCanvasElement;
        ctx = canvas?.getContext('2d');
    }

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawRectangle(ctx as CanvasRenderingContext2D, rect1);
    drawRectangle(ctx as CanvasRenderingContext2D, rect2);
    drawLine(ctx as CanvasRenderingContext2D, points);
};

const rect1: Rect = { position: { x: 100, y: 100 }, size: { width: 80, height: 50 } };
const rect2: Rect = { position: { x: 300, y: 200 }, size: { width: 80, height: 50 } };
const cPoint1: ConnectionPoint = { point: { x: 140, y: 100 }, angle: 90 };
const cPoint2: ConnectionPoint = { point: { x: 260, y: 200 }, angle: 90 };

const points = dataConverter(rect1, rect2, cPoint1, cPoint2);
render("canvas", rect1, rect2, points);
