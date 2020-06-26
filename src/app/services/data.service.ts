import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { AppInfo } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public loadAppItems(): Observable<AppInfo> {
    const url = 'assets/data.json';
    return this.httpClient.get<AppInfo>(url);
  }

}
