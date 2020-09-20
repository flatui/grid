import * as gsGrid from '../../../../src';
import { IGridColumn, IGridConfig } from '../../../../src/interface';
import { GridConfig, GridEvents } from '../../../../src/model';

class DemoHome {
    usersList: any;

    constructor() {
        const gsGridRef = gsGrid;
        
        // setup grid config.
        this.setupGridAndApplyData();
    }

    buildGridColumns(): IGridColumn[] {
        return [
            {
                field: 'name',
                headerName: 'Name'
            },
            {
                field: 'username',
                headerName: 'Header name'
            },
            {
                field: 'email',
                headerName: 'Email'
            },
            {
                field: 'phone',
                headerName: 'Phone'
            },
            {
                field: 'website',
                headerName: 'Website'
            },
            {
                field: 'address.city',
                headerName: 'City'
            },
            {
                field: 'company.name',
                headerName: 'Company'
            },
            {
                field: 'address.zipcode',
                headerName: 'Zip'
            }
        ];
    }

    async setupGridAndApplyData() {
        const gridConfig = new GridConfig();
        gridConfig.columnDefs = this.buildGridColumns();

        this.usersList = await this.getUsers();
        const gridEl = document.querySelector('gs-grid');
        if (gridEl) {
            GridEvents.setupGridConfig(gridEl.getAttribute('instance-id'), gridConfig);
        }
    }

    async getUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    }
}

export default { viewModel: DemoHome, template: require('./demo-home.html') }