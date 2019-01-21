import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName: String;
  serverCreated = false;
  servers: String[] = [];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
   }

  ngOnInit() {
  }

  onChangeServerCreationStatus(event: Event ) {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created successfully name is ' + this.serverName;
    const serverName = (<HTMLInputElement>event.target).value;
    this.servers.push(serverName);
  }

}
