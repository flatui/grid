import { IGridConfig, IGridColumn, IGridInstance } from "../interface";
import {Observable, Subject, BehaviorSubject} from 'rxjs';

/**
 * Grid configuration class.
 */
export class GridConfig<T> implements IGridConfig {
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
     * Row height of grid config.
     */
    rowHeight: number;

    /**
     * Instance  of grid config
     */
    instance: IGridInstance;

    /**
     * Data of grid config
     */
    data?: T[];

    /**
     * Creates an instance of grid config.
     */
    constructor(){
        this.renderCompleteSubscription = new BehaviorSubject(false);
        this.rowHeight = 40;
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