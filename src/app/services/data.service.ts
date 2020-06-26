import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { AppItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public loadAppItems(): Observable<AppItem[]> {
    const url = '';
    return this.httpClient.get<AppItem[]>(url);
  }

}
