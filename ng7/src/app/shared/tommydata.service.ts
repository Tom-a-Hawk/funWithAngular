import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TommydataService {

  constructor(private http: HttpClient) { }

  public getTommyData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')

   }
}
