/**
 * Grid renderer interface.
 */
export interface IGridRenderer {
    /**
     * non render method, fire & forget.
     */
    render(): HTMLElement;

    /**
     * Sync renderer, renders & resolves promise once done.
     * @returns boolean promise, true once complete.
     */
    queueRender(): Promise<HTMLElement>;
}