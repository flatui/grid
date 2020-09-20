import { Observable } from "rxjs";
import { IGridColumn, IGridInstance } from ".";

export interface IGridConfig {
    /**
     * Column defs of grid config
     */
    columnDefs: IGridColumn[];

    /**
     * Instance  of grid config
     */
    instance: IGridInstance;

    /**
     * Determines whether instance ready is
     * @returns true if instance ready 
     */
    IsInstanceReady(): boolean;

    /**
     * Determines whether render is complete.
     * @returns render complete subscription.
     */
    IsRenderComplete(): Observable<boolean>
}