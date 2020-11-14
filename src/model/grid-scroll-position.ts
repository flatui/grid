import { IGridScrollPosition } from "../interface";

/**
 * Grid scroll position.
 */
export class GridScrollPosition implements IGridScrollPosition {

    /**
     * Creates an instance of grid scroll position.
     * @param args init args.
     */
    constructor(yMin: number, y:number, yMax: number) {
        this.yMin = yMin;
        this.y = y;
        this.yMax = yMax;
    }

    /**
     * Y min of grid scroll position.
     */
    yMin: number;
    /**
     * Y max of grid scroll position.
     */
    yMax: number;

    /**
     * Y of grid scroll position.
     */
    y: number;

    /**
     * Gets y percent.
     * @returns y percent.
     */
    getYPercent(): number {
        return ((this.y - this.yMin) / (this.yMax - this.yMin)) * 100;
    }
}