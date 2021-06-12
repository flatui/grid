import { CellUtilities } from "../core";
import { IGridConfig, IGridRenderColumn, IGridRenderer } from "../interface";

/**
 * Flex data row renderer.
 */
export class FlexDataRowRenderer implements IGridRenderer {
    /**
     * Creates an instance of flex column renderer.
     * @param columns grid columns.
     * @param cellUtils cell utilities.
     * @param gridConfig grid config.
     */
    constructor(private _renderCols: IGridRenderColumn[], 
                private _cellUtils: CellUtilities, 
                private gridConfig: IGridConfig,
                private shadowRoot: ShadowRoot) 
    {
    }

    /**
     * Renders flex column renderer.
     */
    render(renderOptions?: any): HTMLElement {
        const dataViewport = document.createElement('div');
        dataViewport.classList.add('data-viewport');

        if(renderOptions.data && renderOptions.data.length > 0) {
            (renderOptions.data as any[]).forEach(dataRow => {
                let colTemplate = '';
                this._renderCols.forEach(col => {
                    colTemplate += this.cellTemplateFragmentFn(col.field, dataRow);
                });
                dataViewport.append(this.rowTemplateFragmentFn(colTemplate));
            });
        }
        
        return dataViewport;
    }

    /**
     * Renders into viewport.
     * @param [renderOptions] render options.
     */
    renderIntoViewport(renderOptions?: any): void {
        if (this.shadowRoot) {
            this.shadowRoot.append(this.render({ data: this.gridConfig.data }));
        }
    }

    updateViewportRowsUp(renderOptions?: any): void {
        const viewport = this.shadowRoot.querySelector('.data-viewport');

        if (viewport.innerHTML.length > 0) {
            viewport.classList.add('scrolling-viewport');
            viewport.innerHTML = this.renderNewRows(renderOptions.data);
            viewport.classList.remove('scrolling-viewport');
        }
    }

    updateViewportRowsDown(renderOptions: any): void {
    }

    renderNewRows(data: any[]) {
        let colTemplate = '';
        if(data && data.length > 0) {
            data.forEach(dataRow => {
                this._renderCols.forEach(col => {
                    colTemplate += this.cellTemplateFragmentFn(col.field, dataRow);
                });
            });
        }

        return colTemplate;
    }

    /**
     * Queues render async.
     * @returns render.
     */
    queueRender(): Promise<HTMLElement> {
        return Promise.resolve(this.render());
    }

    /**
     * Cells template fragment method.
     * @param field cell field.
     * @param data field data.
     * @returns template fragment method.
     */
    private cellTemplateFragmentFn(field: string, data: any): string {
        const cellUtils = this._cellUtils.getCellUtilsByFieldName(field);
        const cellValue = this.getCellValue(field, data);
        return `<div title="${cellValue}" class="cell-column" style="width: ${cellUtils.renderWidth}; height: ${this.gridConfig.rowHeight}px"><div class="cell-content">${cellValue}</div></div>`;
    }

    /**
     * Rows template fragment method.
     * @param cellTemplate cell template string.
     * @returns template fragment method.
     */
    private rowTemplateFragmentFn(cellTemplate: string): HTMLElement {
        const dataRowContainer = document.createElement('div');
        dataRowContainer.classList.add('data-row');
        dataRowContainer.innerHTML = cellTemplate;
        return dataRowContainer;
    }

    /**
     * Gets cell value for field, including nested dot syntax.
     * @param field cell field.
     * @param data row data object.
     * @returns cell data.
     */
    private getCellValue(field: string, data: any) {
        const isDotNotated = field.indexOf('.');

        if(isDotNotated > -1) {
            // if field is dot notated reduce it to final value.
            const fieldAsKeys = field.split('.');
            return fieldAsKeys.reduce((p, c) => { return p[c] }, data);
        }

        return data[field];
    }
}