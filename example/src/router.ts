export class RouteInfo {
    public path: string;
    public componentTag?: string;
    public text?: string;

    constructor(args: RouteInfo) {
        this.path = args.path;
        this.componentTag = args.componentTag;
        this.text = args.text;
    }
}

export class Router {
    private _routes: { [path: string]: RouteInfo } = {};
    private _routerHatch: HTMLElement;

    constructor(elementId: string, private componentView: any) {
        this._routerHatch = document.getElementById(elementId);
        this.listenForPathChange();
    }

    addRoute(routeInfo: RouteInfo) {
        this._routes[routeInfo.path] = routeInfo;
    }

    addRoutes(routeInfoCollection: RouteInfo[]) {
        routeInfoCollection.forEach(rI => {
            this._routes[rI.path] = rI;
        });
    }

    removeRoute(path: string) {
        delete this._routes[path];
    }

    onRouteChange() {
        // Current route url (getting rid of '#' in hash as well)
        const url = location.hash.slice(1) || '/';
        // Get route by url
        const routeInfo = this._routes[url];

        if (this._routerHatch && this.isValidRouteInfo(routeInfo)) {
            if (routeInfo.text) {
                this._routerHatch.innerText = routeInfo.text;
            }
            else {
                this.componentView(routeInfo.componentTag);
            }
        }
    }

    isValidRouteInfo(routeInfo: RouteInfo) {
        return routeInfo && (routeInfo.componentTag || routeInfo.text);
    }

    listenForPathChange() {
        // Listen on hash change:
        window.addEventListener('hashchange', () => { this.onRouteChange() });

        // Listen on page load:
        window.addEventListener('load', () => { this.onRouteChange() });
    }
}