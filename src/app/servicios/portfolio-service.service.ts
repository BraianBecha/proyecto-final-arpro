import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http:HttpClient) {this.obtenerDatos() }
  obtenerDatos():Observable<any>{
    return this.http.get('././assets/data/data.json') ;       
  }
}
