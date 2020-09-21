import { IGridRenderColumn, IGridRenderer } from "../interface";

/**
 * Flex header renderer
 */
export class FlexHeaderRenderer implements IGridRenderer {
    private _renderCols: IGridRenderColumn[];

    /**
     * Creates an instance of flex header renderer.
     * @param columns 
     */
    constructor(columns: IGridRenderColumn[]) {
        this._renderCols = columns;
    }

    /**
     * Renders flex header renderer
     */
    render() {
    }

    /**
     * Queues render
     * @returns render 
     */
    async queueRender(): Promise<boolean> {
        return await Promise.resolve(true);
    }
}