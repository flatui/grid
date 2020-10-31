import { CellUtilities } from "../core";
import { ICellConfig, IGridRenderColumn, IGridRenderer } from "../interface";

/**
 * Flex header renderer.
 */
export class FlexHeaderRenderer implements IGridRenderer {
    /**
     * Render cols of flex header renderer.
     */
    private _renderCols: IGridRenderColumn[];

    /**
     * Cell utils of flex header renderer.
     */
    private _cellUtils: CellUtilities;

    /**
     * Creates an instance of flex header renderer.
     * @param columns 
     * @param cellUtils 
     */
    constructor(columns: IGridRenderColumn[], cellUtils: CellUtilities) {
        this._renderCols = columns;
        this._cellUtils = cellUtils;
    }

    /**
     * Renders flex header renderer.
     */
    render(): HTMLElement {
        const cellConfigItems: ICellConfig[] = this._renderCols.map(c => { return {field: c.field, width: c.width, renderWidth: ''}});
        this._cellUtils.computeCellEssentials(cellConfigItems, true);
        let colTemplate = '';
        this._renderCols.forEach(col => {
            colTemplate += this.cellTemplateFragmentFn(col.displayName, col.field);
        });

        return this.rowTemplateFragmentFn(colTemplate);
    }

    /**
     * Queues render async.
     * @returns render.
     */
    async queueRender(): Promise<HTMLElement> {
        return await Promise.resolve(this.render());
    }

    /**
     * Cells template fragment method.
     * @param cellValue cell value.
     * @param field cell field.
     * @returns template fragment method.
     */
    private cellTemplateFragmentFn(cellValue: string, field: string): string {
        const cellUtil = this._cellUtils.getCellUtilsByFieldName(field);
        return `<div title="${cellValue}" style="width: ${cellUtil.renderWidth}" class="header-column" data-field="${field}"><div class="cell-content">${cellValue}</div></div>`;
    }

    /**
     * Rows template fragment method.
     * @param cellTemplate template string.
     * @returns row template fragment element.
     */
    private rowTemplateFragmentFn(cellTemplate: string): HTMLElement {
        const headerContainer = document.createElement('div')
        headerContainer.classList.add('header-row');
        headerContainer.innerHTML = cellTemplate;
        return headerContainer;
    }
}