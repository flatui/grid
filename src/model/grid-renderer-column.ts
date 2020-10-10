import { IGridRenderColumn } from "../interface";
import { CellWidth } from "./grid-constants";

/**
 * Grid renderer column model.
 */
export class GridRendererColumn implements IGridRenderColumn {
    /**
     * Field of grid renderer column.
     */
    field: string;

    /**
     * Display name of grid renderer column.
     */
    displayName: string;

    /**
     * Value of grid renderer column, optional.
     */
    value?: string;

    /**
     * Width  of grid renderer column
     */
    width: string | CellWidth;

    /**
     * Min width of grid renderer column
     */
    minWidth: string | CellWidth;

    /**
     * Creates an instance of grid renderer column.
     * @param args 
     */
    constructor(args: IGridRenderColumn) {
        this.field = args.field;
        this.displayName = args.displayName;
        this.value = args.value ? args.value : null;
        this.width = args.width ? args.value : CellWidth.Auto;
        this.minWidth = args.minWidth ? args.minWidth : CellWidth.Auto;
    }
}