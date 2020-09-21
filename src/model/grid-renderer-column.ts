import { IGridRenderColumn } from "../interface";

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
     * Creates an instance of grid renderer column.
     * @param args 
     */
    constructor(args: IGridRenderColumn) {
        this.field = args.field;
        this.displayName = args.displayName;
        this.value = args.value ? args.value : null;
    }
}