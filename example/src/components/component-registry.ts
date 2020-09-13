import devEngage from "./dev-engage/dev-engage";
import gridIntro from "./grid-intro/grid-intro";
import topNav from "./top-nav/top-nav";

export class ComponentRegistry {
    constructor() {
    }

    static registerAppComponents(ko: any) {
        ko.components.register('top-nav', topNav);
        ko.components.register('grid-intro', gridIntro);
        ko.components.register('dev-engage', devEngage)
    }
}