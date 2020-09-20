import { IGridConfig } from "../interface";
import { IGridEvents } from "../interface/grid-events";

/**
 * Grid events class.
 */
export class GridEvents implements IGridEvents {
    constructor() {
    }

    /**
     * Params grid events
     * @param instanceId Grid instance id from instance-id attribute from grid.
     * @param gridConfig Grid config object.
     */
    static setupGridConfig(instanceId: string, gridConfig: IGridConfig): void {
        const gridNode = document.querySelector(`gs-grid[instance-id="${instanceId}"]`);

        const gridSetupEvent = new CustomEvent('x-gs-config-setup', {
            bubbles: true,
            composed: true,
            detail: {
                gridConfig
            }
        });

        gridNode.dispatchEvent(gridSetupEvent);
    }
}