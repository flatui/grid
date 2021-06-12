import { BehaviorSubject } from "rxjs";
import { IGridScrollPosition } from "../interface";
import { GridScrollPosition } from "../model/grid-scroll-position";

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
     * Drag start callback of scroll utilities.
     */
    private dragStartCallback = (event:MouseEvent) => { this.dragStart(event) };

    /**
     * Drag end callback of scroll utilities.
     */
    private dragEndCallback = (event: MouseEvent) => {this.dragEnd(event)};

    /**
     * Drag callback of scroll utilities.
     */
    private dragCallback = (event: MouseEvent) => {this.drag(event)};

    /**
     * Scroll move complete publisher.
     */
    public scrollMoveComplete$: BehaviorSubject<IGridScrollPosition>;

    /**
     * Creates an instance of scroll utilities.
     */
    constructor(shadowRoot: ShadowRoot) {
        this.shadowRoot = shadowRoot;
        this.setScrollBounds();
        this.scrollMoveComplete$ = new BehaviorSubject<IGridScrollPosition>(new GridScrollPosition(0, 0, 100));
    }

    /**
     * Registers smart scroll events.
     */
    registerSmartScrollEvents(): void {
        const scrollContainer = this.getGridScrollContainer();
        const viewportContainer = this.getGridViewport();

        scrollContainer.addEventListener("touchstart", this.dragStartCallback, false);
        document.addEventListener("touchend", this.dragEndCallback, false);
        document.addEventListener("touchmove", this.dragCallback, false);

        scrollContainer.addEventListener("mousedown", this.dragStartCallback, false);
        document.addEventListener("mouseup", this.dragEndCallback, false);
        document.addEventListener("mousemove", this.dragCallback, false);

        scrollContainer.onwheel = (event: WheelEvent) => {
            this.onScrollContainerWheel(event);
        };

        scrollContainer.onclick = (event: MouseEvent) => {
            this.onScrollContainerClick(event);
        };

        viewportContainer.onwheel = (event: WheelEvent) => {
            this.onScrollContainerWheel(event);
        };
    }

    /**
     * register smart scroll events.
     */
    unRegisterSmartScrollEvents(): void {
        const scrollContainer = this.getGridScrollContainer();
        const viewportContainer = this.getGridViewport();

        scrollContainer.removeEventListener("touchstart", this.dragStartCallback, false);
        document.removeEventListener("touchend", this.dragEndCallback, false);
        document.removeEventListener("touchmove", this.dragCallback, false);

        scrollContainer.removeEventListener("mousedown", this.dragStartCallback, false);
        document.removeEventListener("mouseup", this.dragEndCallback, false);
        document.removeEventListener("mousemove", this.dragCallback, false);

        scrollContainer.onclick = null;
        scrollContainer.onwheel = null;
        viewportContainer.onwheel = null;
    }

    /**
     * Drags start event.
     * @param event Mouse event.
     */
    dragStart(event: MouseEvent): void {
        if (event.type === "touchstart" || event.type === 'mousedown') {
            this.setScrollBounds();
            this.setScrollVisibility();
            const scrollBar = this.getGridScrollBar();

            if (event.target === scrollBar) {
                this.isScrollBarActivated = true;
            }
        }
    }

    /**
     * Drags end event.
     * @param event Mouse event.
     */
    dragEnd(event: MouseEvent): void {
        this.isScrollBarActivated = false;
        this.resetScrollVisibility();
        const scrollBar = this.getGridScrollBar();
        this.scrollMoveComplete$.next(new GridScrollPosition(this.yMin, scrollBar.getBoundingClientRect().y, this.yMax));
    }

    /**
     * Drags scroll utilities.
     * @param event Mouse event.
     */
    drag(event: MouseEvent): void {
        if((event.type === "touchmove" || event.type === 'mousemove') 
            && this.isScrollBarActivated
            && this.isPositionInBounds(event.clientY)) 
        {
            event.preventDefault();
            event.stopImmediatePropagation();
            const scrollBar = this.getGridScrollBar();
            const relativeY = event.clientY - this.yMin;
            scrollBar.style.top = relativeY + 'px';
        }
    }

    /**
     * Wheel event on scroll container.
     * @param event Wheel event.
     */
    onScrollContainerWheel(event: WheelEvent): void {
        this.setScrollBounds();
        const scrollTarget = (event.target as HTMLElement);
      
        event.preventDefault();
        event.stopImmediatePropagation();

        const isPositiveRoll = event.deltaY > 0;
        const scrollStep = 10;
        let nextPosition = 0;
        const scrollBar = this.getGridScrollBar();
        const scrollBarTop = scrollBar.getBoundingClientRect().y;

        if (isPositiveRoll) {
            nextPosition = scrollBarTop + scrollStep;
        } else {
            nextPosition = scrollBarTop - scrollStep;
        }

        if (this.isPositionInBounds(nextPosition)) {
            scrollBar.style.top = nextPosition - this.yMin + 'px';
            this.scrollMoveComplete$.next(new GridScrollPosition(this.yMin, nextPosition, this.yMax));
        }
    }

    /**
     * Click event on scroll container.
     * @param event Click event.
     */
    onScrollContainerClick(event: MouseEvent): void {
        // Dispatch mock drag event for every click as mousemove event.
        this.isScrollBarActivated = true;
        this.setScrollBounds();
        this.enableSmoothScroll();
        this.setScrollVisibility();
        this.drag(new MouseEvent('mousemove', event));
        this.isScrollBarActivated = false;
        this.disableSmoothScroll();
        this.resetScrollVisibility();
    }

    /**
     * Gets scroll element.
     * @returns scroll element;
     */
    private getGridScrollBar(): HTMLElement {
        return this.shadowRoot.querySelector('.scroll-bar');
    }

    /**
     * Gets grid scroll container.
     * @returns grid scroll container.
     */
    private getGridScrollContainer(): HTMLElement {
        return this.shadowRoot.querySelector('.smart-scroll');
    }

    private getGridViewport(): HTMLElement {
        return this.shadowRoot.querySelector('.data-viewport');
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
        const scrollBar = this.getGridScrollBar();
        this.yMin = elementContainer.getBoundingClientRect().top;
        this.yMax = elementContainer.getBoundingClientRect().bottom;
        this.scrollBarHeight = scrollBar.getBoundingClientRect().height;
    }

    /**
     * Sets scroll visibility.
     */
    private setScrollVisibility() {
        const scrollContainer = this.getGridScrollContainer();
        scrollContainer.classList.add('scrolling');
    }

    /**
     * Resets scroll visibility to default behavior.
     */
    private resetScrollVisibility() {
        const scrollContainer = this.getGridScrollContainer();
        setTimeout(() => {
            scrollContainer.classList.remove('scrolling');
        }, 500);
    }

    /**
     * Enables smooth scroll with transitions.
     */
    private enableSmoothScroll() {
        const scrollContainer = this.getGridScrollContainer();
        scrollContainer.classList.add('smooth-scroll');
    }

    /**
     * Disables smooth scroll.
     */
    private disableSmoothScroll() {
        const scrollContainer = this.getGridScrollContainer();
        setTimeout(() => {
            scrollContainer.classList.remove('smooth-scroll');
        }, 500);
    }
}