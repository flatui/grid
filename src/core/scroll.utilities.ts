/**
 * Scroll utilities.
 */
export class ScrollUtilities {
    /**
     * Shadow root of scroll utilities.
     */
    private shadowRoot: ShadowRoot;

    /**
     * Creates an instance of scroll utilities.
     */
    constructor(shadowRoot: ShadowRoot) {
        this.shadowRoot = shadowRoot;
    }

    /**
     * Registers smart scroll events.
     */
    registerSmartScrollEvents(): void {
        const element = this.getGridScrollContainer();
    }

    /**
     * register smart scroll events.
     */
    unRegisterSmartScrollEvents(): void {
    }

    /**
     * Determines whether mouse up on.
     * @param event event object.
     */
    private onMouseUp(event: Event) {
    }

    /**
     * Determines whether mouse down on.
     * @param event event object.
     */
    private onMouseDown(event: Event) {
        event.preventDefault();
        const element = this.getGridScrollContainer();
    }

    /**
     * Determines whether mouse move on.
     * @param event event object.
     */
    private onMouseMove(event: Event) {

    }

    /**
     * Gets scroll element.
     * @returns scroll element
     */
    private getGridScrollElement(): HTMLElement {
        return this.shadowRoot.querySelector('.scroll-bar');
    }

    private getGridScrollContainer(): HTMLElement {
        return this.shadowRoot.querySelector('.smart-scroll');
    }
}