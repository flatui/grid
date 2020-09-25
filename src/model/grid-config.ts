import { IGridConfig, IGridColumn, IGridInstance } from "../interface";
import {Observable, Subject, BehaviorSubject} from 'rxjs';

/**
 * Grid configuration class.
 */
export class GridConfig implements IGridConfig {
    /**
     * Is grid instance ready.
     */
    private instanceReady: boolean;

    /**
     * Render complete subscription of grid config.
     */
    private renderCompleteSubscription: Subject<boolean>;
    
    /**
     * Column defs of grid config
     */
    columnDefs: IGridColumn[];

    /**
     * Instance  of grid config
     */
    instance: IGridInstance;

    /**
     * Data of grid config
     */
    data?: any[];

    /**
     * Creates an instance of grid config.
     */
    constructor(){
        this.renderCompleteSubscription = new BehaviorSubject(false);
    }

    /**
     * Determines whether instance ready is
     * @returns true if instance ready 
     */
    IsInstanceReady(): boolean {
        return this.instanceReady;
    }

    /**
     * Determines whether render is complete.
     * @returns render complete subscription.
     */
    IsRenderComplete(): Observable<boolean> {
        return this.renderCompleteSubscription;
    }
}