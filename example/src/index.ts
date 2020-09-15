import * as ko from 'knockout';
import { ComponentRegistry } from './components/component-registry';
import { RouteInfo, Router } from './router';

class GridAppViewModel {
    routerHatchId = 'koRouterHatch';
    router: Router;
    routes: RouteInfo[];
    componentView: ko.Observable;

    constructor() {
        ComponentRegistry.registerAppComponents(ko);
        ko.components.register('home', {
            template: '<grid-intro></grid-intro><dev-engage></dev-engage>'
        });
        this.componentView = ko.observable('home');
        this.initializeRouter();
    }

    initializeRouter() {
        this.router = new Router(this.routerHatchId, this.componentView);
        this.router.addRoutes(this.getRoutes());
    }

    getRoutes() {
        return [
            new RouteInfo(
                {
                    path: '/grid-intro',
                    componentTag: 'grid-intro'
                }
            )
        ];
    }
}

ko.applyBindings(new GridAppViewModel(), document.getElementById('gridApp'));