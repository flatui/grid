import { IGridRenderColumn, IGridRenderer } from "../interface";

/**
 * Flex column renderer
 */
export class FlexColumnRenderer implements IGridRenderer {
    /**
     * Render cols of flex column renderer
     */
    private _renderCols: IGridRenderColumn[];
    
    /**
     * Creates an instance of flex column renderer.
     * @param columns 
     */
    constructor(columns: IGridRenderColumn[]) {
        this._renderCols = columns;
    }

    /**
     * Renders flex column renderer
     */
    render(): HTMLElement {
        return document.createElement('div');
    }

    /**
     * Queues render
     * @returns render 
     */
    queueRender(): Promise<HTMLElement> {
        return Promise.resolve(this.render());
    }
}