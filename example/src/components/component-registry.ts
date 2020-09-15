import demoHome from "./demo-home/demo-home";
import devEngage from "./dev-engage/dev-engage";
import getStarted from "./get-started/get-started";
import gridIntro from "./grid-intro/grid-intro";
import topNav from "./top-nav/top-nav";
import whatWhy from "./what-why/what-why";

export class ComponentRegistry {
    constructor() {
    }

    static registerAppComponents(ko: any) {
        ko.components.register('top-nav', topNav);
        ko.components.register('grid-intro', gridIntro);
        ko.components.register('dev-engage', devEngage);
        ko.components.register('home', { template: '<grid-intro></grid-intro><dev-engage></dev-engage>' });
        ko.components.register('demo', demoHome)
        ko.components.register('get-started', getStarted)
        ko.components.register('what-and-why', whatWhy)
    }
}