import { PinColumn } from "../model";

export interface IGridColumn {
    field: string;
    headerName: string;
    valueFn?: () => string | number;
    enableSort?: boolean;
    enableFilter?: boolean;
    pinColumn?: PinColumn;
}