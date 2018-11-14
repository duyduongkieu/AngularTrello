import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Imodels } from '../models/imodels';
const data = 'http://localhost:3000/group/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  getData(): Observable<Imodels> {
    return this.http.get<Imodels>(data);
  }
  getDataId(id: string): Observable<Imodels> {
    return this.http.get<Imodels>(`${data}${id}`);
  }
  // ....
  updated(group: Imodels): Observable<Imodels> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.put<Imodels>(`${data}${group.id}`, group, httpOptions);
  }
  // ...........
  addNewData(group: Partial<Imodels>) {
    // tslint:disable-next-line:prefer-const
    let id: string;
    if (!group.id) {
      group.id = uuid();
    }
    if (!group.item) {
      group.item = {};
    }
    return this.http.post(data, group);
  }
}
