import { IGridConfig, IGridColumn, IGridInstance } from "../interface";
import {Observable, Subject, BehaviorSubject} from 'rxjs';

export class GridConfig implements IGridConfig {
    private instanceReady: boolean;
    private renderCompleteSubscription: Subject<boolean>;

    constructor(){
        this.renderCompleteSubscription = new BehaviorSubject(false);
    }

    columnDefs: IGridColumn[];
    instance: IGridInstance;

    IsInstanceReady(): boolean {
        return this.instanceReady;
    }

    IsRenderComplete(): Observable<boolean> {
        return this.renderCompleteSubscription;
    }
}