import { IGridInstance } from "../interface";

/**
 * Grid instance to handle operations on rendered grid.
 */
export class GridInstance implements IGridInstance {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    refreshGrid(delay?: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    rebuildGrid(force: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    updateData(data: any[]): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    clearData(data: any[], showNoDataMessage: true, message: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    hideColumn(field: string): void {
        throw new Error("Method not implemented.");
    }

    showColumn(field: string): void {
        throw new Error("Method not implemented.");
    }

    scrollToTop(): void {
        throw new Error("Method not implemented.");
    }

    scrollToBottom(): void {
        throw new Error("Method not implemented.");
    }

    scrollTo(position: number): void {
        throw new Error("Method not implemented.");
    }
}