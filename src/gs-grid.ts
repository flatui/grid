import { CellUtilities } from "./core";
import { IGridConfig, IGridRenderer } from "./interface";
import { GridColumn } from "./model";
import { FlexHeaderRenderer, FlexDataRowRenderer, ScrollRenderer } from "./renderers";
import { ScrollUtilities } from './core';

/**
 * Gs grid component class.
 */
export class GsGrid extends HTMLElement {
    /**
     * Grid configuration object of gs-grid.
     */
    gridConfig: IGridConfig;

    /**
     * Scroll indexer of gs-grid.
     */
    private _scrollIndexer: number[];

    /**
     * Current scroll index of gs-grid.
     */
    private _currentScrollIndex: number;

    /**
     * Instance id of gs-grid that is set on instance-id attribute.
     */
    private instanceId: string;

    /**
     * Header renderer of gs grid.
     */
    private headerRenderer: IGridRenderer;

    /**
     * Data row renderer of gs grid.
     */
    private dataRowRenderer: IGridRenderer;

    /**
     * Scroll renderer of gs grid.
     */
    private scrollRenderer: IGridRenderer;

    /**
     * Cell utils of gs grid.
     */
    private cellUtils: CellUtilities;

    /**
     * Creates an instance of gs-grid.
     */
    constructor() {
        super();
        this.instanceId = this.generateInstanceId();
        this.registerGridEventCallback();
    }

    /**
     * Connected callback of gs-grid component.
     */
    connectedCallback() {
        this.initPropsFromAttrs();
        this.attachShadow({mode: 'open'});
    }

    /**
     * Initialize all attributes of gs-grid component.
     */
    private initPropsFromAttrs() {
        this.setAttribute('instance-id', this.instanceId);
    }

    /**
     * Generates a UUID for instance id.
     * (RFC 4122) Implemented from https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
     * @returns A unique identifier (UUID)
     */
    private generateInstanceId(): string {
        const s = new Array(36);
        const hexDigits = "0123456789abcdef";

        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }

        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";

        return s.join("");
    }

    /**
     * Registers all component event handlers.
     */
    private registerGridEventCallback() {
        this.addEventListener('x-gs-config-setup', (event: CustomEvent) => {
            const { gridConfig } = event.detail;
            this.onGridConfigSet(gridConfig);
        });
    }

    /**
     * Callback to set event config.
     * @param gridConfig grid config param.
     */
    private onGridConfigSet(gridConfig: IGridConfig) {
        this.gridConfig = gridConfig;
        this.gridConfig.columnDefs = gridConfig.columnDefs.map(c => new GridColumn(c));

        // Initialize Cell utils with params.
        this.cellUtils = new CellUtilities(this.getAvailableWidth());
        
        // Register all renderers.
        this.registerRenderers(this.gridConfig);

        // Initialize styles.
        this.initializeStyles();

        // Render grid header.
        this.initializeHeader();

        // Render data rows.
        this.initializeViewport();

        // Render scroll bar.
        this.initializeScrollBar();

        // Init smart scroll.
        var smartScroll = new ScrollUtilities(this.shadowRoot);
        setTimeout(() => {
            smartScroll.registerSmartScrollEvents();
        }, 2000);
    }

    /**
     * Registers renderers of header & column of grid.
     * @param gridConfig 
     */
    registerRenderers(gridConfig: IGridConfig) {
        const rendererDataSet = gridConfig.columnDefs.map(x => {
            return { displayName: x.headerName, field: x.field, width: x.width, minWidth: x.minWidth }
        });

        // Register header renderer.
        this.headerRenderer = new FlexHeaderRenderer(rendererDataSet, this.cellUtils);

        // Register data row renderer.
        this.dataRowRenderer = new FlexDataRowRenderer(rendererDataSet, this.cellUtils);

        // Register viewport scroll renderer.
        this.scrollRenderer = new ScrollRenderer();
    }

    /**
     * Initializes header.
     */
    private initializeHeader() {
        this.shadowRoot.appendChild(this.headerRenderer.render().cloneNode(true));
    }

    /**
     * Initializes viewport.
     */
    private initializeViewport() {
        this.shadowRoot.append(this.dataRowRenderer.render({ data: this.gridConfig.data }));
    }

    /**
     * Initializes scroll bar for viewport.
     */
    private initializeScrollBar() {
        const viewport = this.shadowRoot.querySelector('.data-viewport');
        if (viewport) {
            viewport.append(this.scrollRenderer.render());
        }
    }

    /**
     * Initializes styles.
     */
    private initializeStyles() {
        const styleRoot = document.createElement('style');
        const gsGridStyles = require('./styles/gs-grid.scss').default[0][1];
        styleRoot.innerText = gsGridStyles.replace(/\n|\r/g, "");
        this.shadowRoot.appendChild(styleRoot);
    }

    /**
     * Gets available width for grid.
     * @returns available width for grid, either itself or parent.
     */
    private getAvailableWidth(): number {
        return this.clientWidth || this.parentElement.clientWidth;
    }
}

customElements.define('gs-grid', GsGrid);