import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { LoginRequest } from '../models/login/LoginRequest';
import { LoginResponse } from '../models/login/LoginResponse';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  private readonly controller = "Authentication";
  private tokenKey = 'token';

  constructor(
  private apiService: ApiService,
  private router: Router
  ) {}

  login(credentials: LoginRequest) {
    return this.apiService
      .post<LoginResponse>(`${this.controller}/Login`, credentials)
      .pipe(
        tap((res) => {
          if (res.success && res.result.token) {
            localStorage.setItem(this.tokenKey, res.result.token);
          }
        })
      );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) return false;

    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp ? decodedToken.exp > currentTime : false;
    } catch (error) {
      console.error('Erro ao decodificar token', error);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
