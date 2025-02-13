import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempserviceService {

  constructor(private http:HttpClient) { }

  apiUrl = "https://jsonplaceholder.typicode.com/todos";

  data: any[];


  getData():Observable<any>{
    return  this.http.get(this.apiUrl);
  }
}
