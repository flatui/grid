export interface IGridInstance {
    id: string;
    refreshGrid(delay?: number): Promise<boolean>;
    rebuildGrid(force: boolean): Promise<boolean>;
    updateData(data: any[]): Promise<boolean>;
    clearData(data: any[], showNoDataMessage: true, message: string): Promise<boolean>;
    hideColumn(field: string): void;
    showColumn(field: string): void;
    scrollToTop(): void;
    scrollToBottom(): void;
    scrollTo(position: number): void;
}