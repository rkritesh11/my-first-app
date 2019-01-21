import { Component } from '@angular/core';


@Component({
    // selector: '[app-server]',
    // selector: '.app-server',
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss']
})
export class ServerComponent {
    serverId: Number = 10;
    serverStatus: String = 'Offline';


    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

}
