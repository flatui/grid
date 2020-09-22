import { IGridRenderColumn, IGridRenderer } from "../interface";

/**
 * Flex header renderer
 */
export class FlexHeaderRenderer implements IGridRenderer {
    /**
     * Render cols of flex header renderer
     */
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
    render(): HTMLElement {
        let colTemplate = '';
        this._renderCols.forEach(col => {
            colTemplate += this.cellTemplateFragmentFn(col.displayName);
        });

        return this.rowTemplateFragmentFn(colTemplate);
    }

    /**
     * Queues render
     * @returns render 
     */
    async queueRender(): Promise<HTMLElement> {
        return await Promise.resolve(this.render());
    }

    cellTemplateFragmentFn(cellValue: string): string {
        return `<div class="header-column">${cellValue}</div>`;
    }

    rowTemplateFragmentFn(cellTemplate: string): HTMLElement {
        const headerContainer = document.createElement('div')
        headerContainer.classList.add('header-row');
        headerContainer.innerHTML = cellTemplate;
        return headerContainer;
    }
}