import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthenticationService } from '../../../core/services/authentication-service';
import { LoginRequest } from '../../../core/models/login/LoginRequest';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, NzInputModule, ReactiveFormsModule, CommonModule, NzButtonModule, NzIconModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  messageError = "";
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['guilherme@gmail.com', [Validators.required, Validators.email]],
      senha: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    var credentials: LoginRequest = {
      email: this.loginForm.get('email')?.value,
      senha: this.loginForm.get('senha')?.value
    }
  
    this.authService.login(credentials)
    .pipe(
      finalize(() => {
        this.loading = false
        this.cdr.detectChanges();
      })
    )
    .subscribe({
      next: (response) => {
        console.log(response)
        if (response && response.success) {
          this.router.navigate(['home']);
        }
      },
      error: (err) => {
        const [error] = err?.error.errors;
        this.messageError = error;
      }
    })
  }
}
