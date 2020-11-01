import { IGridConfig, IGridScrollPosition } from "../interface";

/**
 * Virtualize core.
 */
export class Virtualize {

    /**
     * Available grid height of virtualize.
     */
    private availableGridHeight: number;

    /**
     * Data set of virtualize.
     */
    private dataSet: any[];

    /**
     * Gets rows per index.
     */
    private get rowsPerIndex(): number {
        return this.availableGridHeight / this.gridConfig.rowHeight;
    }

    /**
     * Creates an instance of virtualize.
     * @param gridConfig grid configuration.
     * @param shadowRoot shadow root.
     */
    constructor(private gridConfig: IGridConfig, private shadowRoot: ShadowRoot) {
        this.availableGridHeight = 200;
        this.dataSet = [...this.gridConfig.data];
        this.setGridHeight();
    }

    /**
     * Callback on grid scroll position change.
     * @param scrollYPos scroll position.
     */
    public OnGridScrollPositionChange(scrollYPos: IGridScrollPosition) {
    }

    /**
     * Gets data set for index.
     */
    private getDataSetForIndex(scrollIndex: number) {
        const index = scrollIndex * this.rowsPerIndex;
        return this.dataSet.slice(index, index + this.rowsPerIndex);
    }

    /**
     * Sets grid height using shadow root.
     */
    private setGridHeight() {
        const viewport = this.getViewport();
        viewport.style.height = `${this.availableGridHeight}px`;
    }

    /**
     * Gets viewport element.
     * @returns viewport element.
     */
    private getViewport(): HTMLElement {
        return this.shadowRoot.querySelector('.data-viewport');
    }
}