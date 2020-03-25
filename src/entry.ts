export class GsGrid extends HTMLElement {
    col: any;
    constructor() {
        super();
    }

    connectedCallback() {
      this.innerHTML = `Hello world 44d`;
    }
}

customElements.define('gs-grid', GsGrid);