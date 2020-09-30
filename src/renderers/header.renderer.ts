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
            colTemplate += this.cellTemplateFragmentFn(col.displayName, col.field);
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

    cellTemplateFragmentFn(cellValue: string, field: string): string {
        return `<div title="${cellValue}" class="header-column" data-field="${field}"><div class="cell-content">${cellValue}</div></div>`;
    }

    rowTemplateFragmentFn(cellTemplate: string): HTMLElement {
        const headerContainer = document.createElement('div')
        headerContainer.classList.add('header-row');
        headerContainer.innerHTML = cellTemplate;
        return headerContainer;
    }
}