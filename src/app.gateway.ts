import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AppService } from './app.service';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  constructor(private readonly service: AppService) {
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: unknown): WsResponse<unknown> {
    this.server.emit('callback', 'Hello All');
    return { event: 'callback', data: 'Hello world!' };
  }

  afterInit(server: Server): any {
    console.log('init');
  }
}
