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
     * Creates an instance of flex column renderer.
     * @param columns 
     */
    constructor(columns: IGridRenderColumn[]) {
        this._renderCols = columns;
    }

    /**
     * Renders flex column renderer.
     */
    render(renderOptions?: any): HTMLElement {
        const dataViewport = document.createElement('div');
        dataViewport.classList.add('data-viewport');

        // get header cell width map.
        const boundingRectMap = this.getHeaderContainerCellBoundingRect(renderOptions);

        if(renderOptions.data && renderOptions.data.length > 0) {
            (renderOptions.data as any[]).forEach(dataRow => {
                let colTemplate = '';
                this._renderCols.forEach(col => {
                    const boundingRect = boundingRectMap.find(x => x.field === col.field);
                    colTemplate += this.cellTemplateFragmentFn(col.field, dataRow, boundingRect ? boundingRect.map.width: '');
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

    cellTemplateFragmentFn(field: string, data: any, width: string): string {
        const cellValue = this.getCellValue(field, data);
        return `<div title="${cellValue}" class="cell-column" style="width: ${width}px"><div class="cell-content">${cellValue}</div></div>`;
    }

    rowTemplateFragmentFn(cellTemplate: string): HTMLElement {
        const dataRowContainer = document.createElement('div');
        dataRowContainer.classList.add('data-row');
        dataRowContainer.innerHTML = cellTemplate;
        return dataRowContainer;
    }

    private getHeaderContainerCellBoundingRect(renderOptions: any) {
        const boundingRectMap: any[] = [];
        if(renderOptions.headerContainer) {
            this._renderCols.forEach(col => {
                const headerCol = renderOptions.headerContainer.querySelector(`div[data-field="${col.field}"]`);
                if(headerCol) {
                    const boundingRect: any = {};
                    boundingRect.field = col.field;
                    boundingRect.map = headerCol.getBoundingClientRect();
                    boundingRectMap.push(boundingRect);
                }
            });
        }

        return boundingRectMap;
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