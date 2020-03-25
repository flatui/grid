export class GsGrid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
      this.innerHTML = `<h1>Hello world</h1>`;
    }
}

debugger;
customElements.define('gs-grid', GsGrid);