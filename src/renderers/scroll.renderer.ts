import { IGridRenderer } from "../interface";

/**
 * Scroll renderer.
 */
export class ScrollRenderer implements IGridRenderer {

    /**
     * Creates an instance of scroll renderer.
     */
    constructor() {
    }

    /**
     * Renders into viewport.
     * @param [data] render rows.
     */
    renderIntoViewport(data?: any): void {
        throw new Error("Method not implemented.");
    }

    /**
     * Renders scroll renderer.
     * @param [data] render data.
     * @returns Element to render.
     */
    render(data?: any): HTMLElement {
        return this.getSmartScroll();
    }

    /**
     * Queues render async.
     * @returns Element to render async.
     */
    queueRender(): Promise<HTMLElement> {
        return Promise.resolve(this.render());
    }

    /**
     * Gets scroll bar template.
     * @param [options] render options.
     * @returns scroll bar template.
     */
    private getScrollBarTemplate(options?: any): string {
        return `<div class="scroll-bar" />`;
    }

    /**
     * Gets smart scroll element.
     * @returns smart scroll.
     */
    private getSmartScroll(): HTMLElement {
        const scrollElem = document.createElement('div');
        scrollElem.classList.add('smart-scroll');
        scrollElem.innerHTML = this.getScrollBarTemplate();
        return scrollElem;
    }
}