import { ICellConfig } from "../interface";
import { CellWidth } from "../model";

/**
 * Cell utilities.
 */
export class CellUtilities {
    /**
     * Cell config cache.
     */
    private _cellConfigCache: ICellConfig[];

    /**
     * Grid width of cell utilities
     */
    private gridWidth: number;

    /**
     * Creates an instance of cell utilities.
     * @param [gridWidth] available grid width.
     */
    constructor(gridWidth?: number) {
        this._cellConfigCache = [];
        this.gridWidth = gridWidth;
    }

    /**
     * Computes cell essentials.
     * @param cells columns of grid config, represents cell of a field.
     * @param forceCalc if true, recalculates width again.
     * @param gridWidth width of grid body. 
     * @returns computed grid column widths.
     */
    computeCellEssentials(cells: ICellConfig[], forceCalc: boolean) {
        if(forceCalc) {
            this._cellConfigCache = [];
        }

        if(this._cellConfigCache.length > 0) {
            return this._cellConfigCache;
        }

        let totalCellWidth = 0;

        // calculate total consumed width and set up render width for cells that have user defined widths.
        cells.forEach((cell, index) => {
            if (cell.width !== CellWidth.Auto && !isNaN(cell.width as number)) {
                totalCellWidth += cell.width as number;
                cell.renderWidth = cell.width as number + 'px';
            }
        });

        // need to calculate individual cell widths.
        // percentage -> /^[0-9]+%/g
        // px -> /^[0-9]+px/g
        let availableWidthToSpawn = this.gridWidth - totalCellWidth;

        // FIXME: Need to find a way for cell width other than Auto.
        const autoCellsAvailable = cells.filter(c => c.width === CellWidth.Auto || c.width === CellWidth.FitToContent || CellWidth.Flexible).length;

        // set calculated width for each cell & reduce available width for Auto columns.
        cells.forEach((cell, index) => {
            if(/^[0-9]+%/g.test(cell.width.toString())) {
                const renderedWidth = ((Number(cell.width.toString().slice(0, -1)) / 100) * availableWidthToSpawn);
                cell.renderWidth = renderedWidth + 'px';
                availableWidthToSpawn -= renderedWidth;
            }

            if(/^[0-9]+px/g.test(cell.width.toString())) {
                cell.renderWidth = cell.width.toString();
                availableWidthToSpawn -= Number(cell.width.toString().slice(0, -2));
            }
        });

        // span remaining width to auto cells.
        const individualCellWidthForAutoColumns = availableWidthToSpawn / autoCellsAvailable;

        // set calculated widths for Auto cell.
        cells.forEach((cell, index) => {
            if(cell.width === CellWidth.Auto) {
                cell.renderWidth = individualCellWidthForAutoColumns + 'px';
            }
        });

        this._cellConfigCache = [...cells];
    }

    /**
     * Gets all cell utils.
     * @returns all cell utils.
     */
    getAllCellUtils(): ICellConfig[] {
        return this._cellConfigCache;
    }

    /**
     * Gets cell utils by field name
     * @param field search by field name.
     * @returns cell utils.
     */
    getCellUtilsByFieldName(field: string): ICellConfig {
        return this._cellConfigCache.find(c => c.field === field);
    }
}