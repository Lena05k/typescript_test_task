"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
const geometry_1 = require("../utils/geometry");
const geometry_2 = require("../utils/geometry");
const dataConverter_1 = require("../utils/dataConverter");
const main_1 = require("../main");
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
    expect((0, geometry_1.isPerpendicular)(90)).toBe(true);
    expect((0, geometry_1.isPerpendicular)(180)).toBe(true);
    expect((0, geometry_1.isPerpendicular)(270)).toBe(true);
    expect((0, geometry_1.isPerpendicular)(45)).toBe(false);
    expect((0, geometry_1.isPerpendicular)(30)).toBe(false);
});
test('isOnRectangleBorder should return true if the point is on the rectangle border', () => {
    const rect = { position: { x: 100, y: 100 }, size: { width: 80, height: 50 } };
    const pointOnBorder = { x: 140, y: 100 };
    const pointNotOnBorder = { x: 150, y: 150 };
    expect((0, geometry_2.isOnRectangleBorder)(rect, pointOnBorder)).toBe(true);
    expect((0, geometry_2.isOnRectangleBorder)(rect, pointNotOnBorder)).toBe(false);
});
test('dataConverter should return correct points for connection between two rectangles', () => {
    const rect1 = { position: { x: 100, y: 100 }, size: { width: 80, height: 50 } };
    const rect2 = { position: { x: 300, y: 100 }, size: { width: 80, height: 50 } };
    const cPoint1 = { point: { x: 140, y: 100 }, angle: 90 };
    const cPoint2 = { point: { x: 260, y: 100 }, angle: 90 };
    const result = (0, dataConverter_1.dataConverter)(rect1, rect2, cPoint1, cPoint2);
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
    const canvas = (0, canvas_1.createCanvas)(500, 500);
    const ctx = canvas.getContext('2d');
    expect(ctx).not.toBeNull();
    (0, main_1.render)(null, rect1, rect2, points);
    expect(ctx.clearRect).toBeDefined();
    expect(ctx.fillRect).toBeDefined();
    expect(ctx.strokeRect).toBeDefined();
});
