import { IGridColumn, IGridConfig } from "./interface";

export class GsGrid extends HTMLElement {
    gridConfig: IGridConfig;
    private _scrollIndexer: number[];
    private _currentScrollIndex: number;

    constructor() {
        super();
    }

    connectedCallback() {
        this.initPropsFromAttrs();
        console.log(this.gridConfig);
    }

    private initPropsFromAttrs() {
        this.gridConfig = this.getAttribute('config') || null;
    }
}

customElements.define('gs-grid', GsGrid);