import * as gsGrid from '../../../../src';
import { IGridColumn } from '../../../../src/interface';
import { GridConfig, GridEvents } from '../../../../src/model';

class DemoHome {
    usersList: any[] = [];

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
                headerName: 'User name'
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
                headerName: 'City',
                width: 120
            },
            {
                field: 'company.name',
                headerName: 'Company'
            },
            {
                field: 'address.zipcode',
                headerName: 'Zip',
                width: 100
            }
        ];
    }

    async setupGridAndApplyData() {
        const gridConfig = new GridConfig();
        gridConfig.columnDefs = this.buildGridColumns();
        gridConfig.rowHeight = 31;

        const usersList = await this.getUsers();

        for (let i = 0; i<=10; i ++) {
            this.usersList = this.usersList.concat([... usersList]);
        }

        gridConfig.data = this.usersList;
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