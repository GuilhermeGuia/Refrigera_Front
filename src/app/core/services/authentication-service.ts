import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { LoginRequest } from '../models/login/LoginRequest';
import { LoginResponse } from '../models/login/LoginResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  private readonly controller = "Authentication";

  constructor(
  private apiService: ApiService
  ) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.apiService.post<LoginResponse>(`${this.controller}/Login`, credentials);
  }
}
