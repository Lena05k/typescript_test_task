import { Point } from "./Point";

export type Size = {
    width: number;
    height: number;
};

export type Rect = {
    position: Point;
    size: Size;
};
