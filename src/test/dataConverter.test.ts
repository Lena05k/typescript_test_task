import { createCanvas as nodeCreateCanvas, CanvasRenderingContext2D as NodeCanvasRenderingContext2D } from 'canvas';
import { isPerpendicular } from "../utils/geometry";
import { isOnRectangleBorder } from "../utils/geometry";
import { Rect } from "../types/Size";
import { Point } from "../types/Point";
import { ConnectionPoint } from "../types/ConnectionPoint";
import { dataConverter } from "../utils/dataConverter";
import { render } from "../main";

beforeEach(() => {
    const mockCanvas = document.createElement('canvas');

    mockCanvas.getContext = jest.fn().mockReturnValue({
        clearRect: jest.fn(),
        fillRect: jest.fn(),
        strokeRect: jest.fn(),
        beginPath: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        stroke: jest.fn(),
    });

    document.getElementById = jest.fn().mockReturnValue(mockCanvas);
});


test('isPerpendicular should return true for multiples of 90', () => {
    expect(isPerpendicular(90)).toBe(true);
    expect(isPerpendicular(180)).toBe(true);
    expect(isPerpendicular(270)).toBe(true);
    expect(isPerpendicular(45)).toBe(false);
    expect(isPerpendicular(30)).toBe(false);
});

test('isOnRectangleBorder should return true if the point is on the rectangle border', () => {
    const rect: Rect = { position: { x: 100, y: 100 }, size: { width: 80, height: 50 } };
    const pointOnBorder: Point = { x: 140, y: 100 };
    const pointNotOnBorder: Point = { x: 150, y: 150 };

    expect(isOnRectangleBorder(rect, pointOnBorder)).toBe(true);
    expect(isOnRectangleBorder(rect, pointNotOnBorder)).toBe(false);
});

test('dataConverter should return correct points for connection between two rectangles', () => {
    const rect1: Rect = { position: { x: 100, y: 100 }, size: { width: 80, height: 50 } };
    const rect2: Rect = { position: { x: 300, y: 100 }, size: { width: 80, height: 50 } };
    const cPoint1: ConnectionPoint = { point: { x: 140, y: 100 }, angle: 90 };
    const cPoint2: ConnectionPoint = { point: { x: 260, y: 100 }, angle: 90 };

    const result = dataConverter(rect1, rect2, cPoint1, cPoint2);

    expect(result).toEqual([
        { x: 140, y: 100 },
        { x: 200, y: 100 },
        { x: 200, y: 100 },
        { x: 260, y: 100 }
    ]);
});

test('render should work in Node.js environment', () => {
    const rect1 = { position: { x: 100, y: 100 }, size: { width: 80, height: 50 } };
    const rect2 = { position: { x: 300, y: 200 }, size: { width: 80, height: 50 } };
    const points = [
        { x: 140, y: 100 },
        { x: 200, y: 150 },
        { x: 260, y: 200 }
    ];

    const canvas = nodeCreateCanvas(500, 500);
    const ctx = canvas.getContext('2d') as NodeCanvasRenderingContext2D;

    expect(ctx).not.toBeNull();

    render(null, rect1, rect2, points);

    expect(ctx.clearRect).toBeDefined();
    expect(ctx.fillRect).toBeDefined();
    expect(ctx.strokeRect).toBeDefined();
});


