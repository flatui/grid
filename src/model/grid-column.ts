import { IGridColumn } from "../interface";
import { PinColumn } from ".";

export class GridColumn implements IGridColumn {
    field: string;
    headerName: string;
    valueFn?: () => string | number;
    enableSort?: boolean;
    enableFilter?: boolean;
    pinColumn?: PinColumn;

    constructor(args: IGridColumn) {
        this.field = args.field;
        this.headerName = args.headerName;
        this.valueFn = args.valueFn || null;
        this.enableSort = args.enableSort || false;
        this.enableFilter = args.enableFilter || false;
        this.pinColumn = args.pinColumn || PinColumn.None;
    }
}