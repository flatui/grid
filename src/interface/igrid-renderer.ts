/**
 * Grid renderer interface.
 */
export interface IGridRenderer {
    /**
     * non render method, fire & forget.
     */
    render(data?: any): HTMLElement;

    /**
     * Sync renderer, renders & resolves promise once done.
     * @returns boolean promise, true once complete.
     */
    queueRender(): Promise<HTMLElement>;

    /**
     * Render and insert into viewport.
     */
    renderIntoViewport(data?: any): void;
}