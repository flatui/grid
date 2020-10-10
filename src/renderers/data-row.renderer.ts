import { CellUtilities } from "../core/cell.utilities";
import { IGridRenderColumn, IGridRenderer } from "../interface";

/**
 * Flex data row renderer.
 */
export class FlexDataRowRenderer implements IGridRenderer {
    /**
     * Render cols of flex column renderer.
     */
    private _renderCols: IGridRenderColumn[];

    /**
     * Cell utils of flex header renderer
     */
    private _cellUtils: CellUtilities;
    
    /**
     * Creates an instance of flex column renderer.
     * @param columns 
     */
    constructor(columns: IGridRenderColumn[], cellUtils: CellUtilities) {
        this._renderCols = columns;
        this._cellUtils = cellUtils;
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
     * Queues render.
     * @returns render 
     */
    queueRender(): Promise<HTMLElement> {
        return Promise.resolve(this.render());
    }

    cellTemplateFragmentFn(field: string, data: any): string {
        const cellUtils = this._cellUtils.getCellUtilsByFieldName(field);
        const cellValue = this.getCellValue(field, data);
        return `<div title="${cellValue}" class="cell-column" style="width: ${cellUtils.renderWidth}"><div class="cell-content">${cellValue}</div></div>`;
    }

    rowTemplateFragmentFn(cellTemplate: string): HTMLElement {
        const dataRowContainer = document.createElement('div');
        dataRowContainer.classList.add('data-row');
        dataRowContainer.innerHTML = cellTemplate;
        return dataRowContainer;
    }

    getCellValue(field: string, data: any) {
        const isDotNotated = field.indexOf('.');

        if(isDotNotated > -1) {
            // if field is dot notated reduce it to final value.
            const fieldAsKeys = field.split('.');
            return fieldAsKeys.reduce((p, c) => { return p[c] }, data);
        }

        return data[field];
    }
}