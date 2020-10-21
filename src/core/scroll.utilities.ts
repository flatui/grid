/**
 * Scroll utilities.
 */
export class ScrollUtilities {
    /**
     * Shadow root of scroll utilities.
     */
    private shadowRoot: ShadowRoot;

    /**
     * Determines whether scroll bar activated.
     */
    private isScrollBarActivated: boolean;

    /**
     * Y max of scroll utilities.
     */
    private yMax: number;

    /**
     * Y min of scroll utilities.
     */
    private yMin: number;

    /**
     * Scroll bar height of scroll utilities.
     */
    private scrollBarHeight: number;

    /**
     * Creates an instance of scroll utilities.
     */
    constructor(shadowRoot: ShadowRoot) {
        this.shadowRoot = shadowRoot;
        this.setScrollBounds();
    }

    /**
     * Registers smart scroll events.
     */
    registerSmartScrollEvents(): void {
        const scrollContainer = this.getGridScrollContainer();

        const dragStart = (event:MouseEvent) => { this.dragStart(event) };
        const dragEnd = (event: MouseEvent) => {this.dragEnd(event)};
        const drag = (event: MouseEvent) => {this.drag(event)};

        scrollContainer.addEventListener("touchstart", dragStart, false);
        document.addEventListener("touchend", dragEnd, false);
        document.addEventListener("touchmove", drag, false);

        scrollContainer.addEventListener("mousedown", dragStart, false);
        document.addEventListener("mouseup", dragEnd, false);
        document.addEventListener("mousemove", drag, false);
    }

    /**
     * register smart scroll events.
     */
    unRegisterSmartScrollEvents(): void {
    }

    /**
     * Drags start event.
     * @param event Mouse event.
     */
    dragStart(event: MouseEvent): void {
        this.setScrollBounds();
        const scrollBar = this.getGridScrollElement();

        if (event.type === "touchstart") {
          }
          else {
          }
        
          if (event.target === scrollBar) {
            this.isScrollBarActivated = true;
          }
    }

    /**
     * Drags end event.
     * @param event Mouse event.
     */
    dragEnd(event: MouseEvent): void {
        this.isScrollBarActivated = false;
    }

    /**
     * Drags scroll utilities.
     * @param event Mouse event.
     */
    drag(event: MouseEvent): void {
        const scrollBar = this.getGridScrollElement();

        if(this.isScrollBarActivated) {
            event.preventDefault();

            if (event.type === "touchmove") {
            } else {
                if (this.isPositionInBounds(event.clientY)) {
                    const relativeY = event.clientY - this.yMin;
                    scrollBar.style.top = relativeY + 'px';
                }
            }
        }
    }

    /**
     * Gets scroll element.
     * @returns scroll element
     */
    private getGridScrollElement(): HTMLElement {
        return this.shadowRoot.querySelector('.scroll-bar');
    }

    /**
     * Gets grid scroll container.
     * @returns grid scroll container.
     */
    private getGridScrollContainer(): HTMLElement {
        return this.shadowRoot.querySelector('.smart-scroll');
    }

    /**
     * Determines whether position is in bounds.
     * @param yPosition position from event.
     * @returns true if in bounds.
     */
    private isPositionInBounds(yPosition: number) {
        return (yPosition >= this.yMin) && (yPosition + this.scrollBarHeight <= this.yMax);
    }

    /**
     * Sets scroll bounds.
     */
    private setScrollBounds() {
        const elementContainer = this.getGridScrollContainer();
        const scrollBar = this.getGridScrollElement();
        this.yMin = elementContainer.getBoundingClientRect().top;
        this.yMax = elementContainer.getBoundingClientRect().bottom;
        this.scrollBarHeight = scrollBar.getBoundingClientRect().height;
    }
}