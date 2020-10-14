/**
 * Scroll utilities.
 */
export class ScrollUtilities {
    /**
     * Shadow root of scroll utilities.
     */
    private shadowRoot: ShadowRoot;

    private isScrollBarActivated: boolean;

    private previousY: number;

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
        const scrollContainer = this.getGridScrollContainer();

        const dragStart = (event:MouseEvent) => { this.dragStart(event) };
        const dragEnd = (event: MouseEvent) => {this.dragEnd(event)};
        const drag = (event: MouseEvent) => {this.drag(event)};

        scrollContainer.addEventListener("touchstart", dragStart, false);
        scrollContainer.addEventListener("touchend", dragEnd, false);
        scrollContainer.addEventListener("touchmove", drag, false);

        scrollContainer.addEventListener("mousedown", dragStart, false);
        scrollContainer.addEventListener("mouseup", dragEnd, false);
        scrollContainer.addEventListener("mousemove", drag, false);
    }

    /**
     * register smart scroll events.
     */
    unRegisterSmartScrollEvents(): void {
    }

    dragStart(event: MouseEvent): void {
        const scrollBar = this.getGridScrollElement();

        if (event.type === "touchstart") {
          }
          else {
          }
        
          if (event.target === scrollBar) {
              this.isScrollBarActivated = true;
              this.previousY = event.clientY;
          }
    }

    dragEnd(event: MouseEvent): void {
        this.isScrollBarActivated = false;
        this.previousY = event.clientY;
    }

    drag(event: MouseEvent): void {
        const scrollBar = this.getGridScrollElement();

        if(this.isScrollBarActivated) {
            event.preventDefault();
    
            if (event.type === "touchmove") {
            } else {
                scrollBar.style.top = (event.clientY-this.previousY) + 'px';
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

    private getGridScrollContainer(): HTMLElement {
        return this.shadowRoot.querySelector('.smart-scroll');
    }
}