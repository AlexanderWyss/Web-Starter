import { Injectable } from '@angular/core';
import { getProtocol, getUrl } from './util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly URL = getProtocol() + getUrl() + '/api';

  constructor(private http: HttpClient) {
  }
}
