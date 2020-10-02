import { CellWidth, PinColumn } from "../model";

/**
 * Grid column interface.
 */
export interface IGridColumn {
    field: string;
    headerName: string;
    valueFn?: () => string | number;
    enableSort?: boolean;
    enableFilter?: boolean;
    pinColumn?: PinColumn;
    width?: number | string | CellWidth;
    minWidth?: number | string;
}