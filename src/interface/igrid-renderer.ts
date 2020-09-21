/**
 * Grid renderer interface.
 */
export interface IGridRenderer {
    /**
     * non render method, fire & forget.
     */
    render(): void;

    /**
     * Sync renderer, renders & resolves promise once done.
     * @returns boolean promise, true once complete.
     */
    queueRender(): Promise<boolean>;
}