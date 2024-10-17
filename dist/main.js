"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const canvas_1 = require("canvas");
const dataConverter_1 = require("./utils/dataConverter");
const drawRectangle_1 = require("./components/drawRectangle");
const drawLine_1 = require("./components/drawLine");
const render = (canvasId, rect1, rect2, points) => {
    let canvas;
    let ctx;
    if (typeof window === 'undefined') {
        canvas = (0, canvas_1.createCanvas)(500, 500);
        ctx = canvas.getContext('2d');
    }
    else {
        canvas = document.getElementById(canvasId);
        ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    }
    if (!ctx)
        return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    (0, drawRectangle_1.drawRectangle)(ctx, rect1);
    (0, drawRectangle_1.drawRectangle)(ctx, rect2);
    (0, drawLine_1.drawLine)(ctx, points);
};
exports.render = render;
const rect1 = { position: { x: 100, y: 100 }, size: { width: 80, height: 50 } };
const rect2 = { position: { x: 300, y: 200 }, size: { width: 80, height: 50 } };
const cPoint1 = { point: { x: 140, y: 100 }, angle: 90 };
const cPoint2 = { point: { x: 260, y: 200 }, angle: 90 };
const points = (0, dataConverter_1.dataConverter)(rect1, rect2, cPoint1, cPoint2);
(0, exports.render)("canvas", rect1, rect2, points);
