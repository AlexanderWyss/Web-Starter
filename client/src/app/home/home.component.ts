import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private client: ClientService, private socket: WebsocketService) { }

  ngOnInit(): void {
    console.log('init');
  }
}
