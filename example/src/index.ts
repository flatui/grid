import * as ko from 'knockout';
import { ComponentRegistry } from './components/component-registry';

class GridAppViewModel {
    constructor() {
        ComponentRegistry.registerAppComponents(ko);
    }
}

ko.applyBindings(new GridAppViewModel(), document.getElementById('gridApp'));