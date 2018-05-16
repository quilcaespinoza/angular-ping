import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Eping} from './models/eping';

const ApiPing = 'http://localhost:8000/api/ping';
@Injectable()
export class PingService {

  constructor(private http: HttpClient) { }
  getPing(): Observable<Eping> {
    return this.http.get<Eping>(ApiPing);
  }
}
