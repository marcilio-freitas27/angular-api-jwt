import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  jwtauth: string;
  constructor(private http:HttpClient) {
    this.jwtauth = "http://localhost:2000";
   }

   getClientes(): Observable<any>{
    let token = localStorage.getItem('access_token')!;
    const headers = {
    'content-type': 'application/json',
    'x-access-token': token
    }
    return this.http.get<any>(`${this.jwtauth}/clientes`,{
      'headers': new HttpHeaders(headers)
    });
  }
}
