/**
 * grid scroll position interface.
 */
export interface IGridScrollPosition {
    /**
     * y minimum.
     */
    yMin: number;

    /**
     * y maximum.
     */
    yMax: number;

    /**
     * y position.
     */
    y: number;

    /**
     * get percentage of y position.
     * @returns y percent.
     */
    getYPercent(): number;
}