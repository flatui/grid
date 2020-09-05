import { IGridColumn } from "./interface";

export class GsGrid extends HTMLElement {
    col: IGridColumn[];
    constructor() {
        super();
    }

    connectedCallback() {
    }
}

customElements.define('gs-grid', GsGrid);