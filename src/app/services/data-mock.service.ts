import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AppItem} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  constructor() { 
    
  }

  public loadAppItems() : Observable<AppItem[]>{
     const items = [];
     return null;
  }

}
