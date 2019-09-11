export declare function Point2D(x: number, y: number): Point2D;
export declare class Point2D {
    x: number;
    y: number;
    constructor(x: number, y: number);
}


// instead of
//
// export interface Point2D {
//    x: number;
//    y: number;
// }
// export declare var Point2D: {
//     (x: number, y: number): Point2D;
//     new (x: number, y: number): Point2D;
// }