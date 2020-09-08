import * as gsGridEvent from '../dist/model/grid-events';

(function demoInit() {
    var state = {};

    state.gridConfig = {
        test: 'testValue'
    }

    var gridSetupEvent = new CustomEvent('x-gs-config-setup', {
        bubbles: true,
        composed: true,
        detail: {
            gridConfig: state.gridConfig
        }
    });

    setTimeout(function() {
        // let grid render before we fetch & trigger event.
        var gridNode = document.querySelector('gs-grid');
        gridNode.dispatchEvent(gridSetupEvent);
    }, 3000);

    window.gridDemo = state;
})();