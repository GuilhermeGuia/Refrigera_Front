import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  // ALTERAR DEPOIS
  private readonly BASE_URL = "https://localhost:7034/";

  constructor(
    private http: HttpClient
  ) {}

  private getHeaders(): HttpHeaders
  {
    const token = localStorage.getItem("token");

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    if(token)
      headers.set("Authorization", `Bearer ${token}`)

    return headers;
  }

  public get<T>(endpoint: string): Observable<T>
  {
    return this.http.get<T>(endpoint, { headers: this.getHeaders()});
  }

  public post<T>(endpoint: string, body: {}): Observable<T>
  {
    return this.http.post<T>(endpoint, body, { headers: this.getHeaders()});
  }
}
