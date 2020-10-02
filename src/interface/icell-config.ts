import { CellWidth } from "../model";

export interface ICellConfig {
    field: string;
    width: number | string | CellWidth;
    renderWidth: string;
}