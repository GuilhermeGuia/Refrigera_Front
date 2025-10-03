import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthenticationService } from '../../../core/services/authentication-service';
import { LoginRequest } from '../../../core/models/login/LoginRequest';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, NzInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent implements OnInit
{
  loginForm!: FormGroup;
  messageError: string = "";

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {  
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['guilherme@gmail.com', [Validators.required, Validators.email]],
      senha: ['123456', [Validators.required, Validators.minLength(6)]]        
    });
  }

  onLogin(): void
  {
    if(this.loginForm.invalid)
    {
      this.loginForm.markAllAsTouched();
      return;
    }
    
    var credentials: LoginRequest = {
        email: this.loginForm.get('email')?.value,
        senha: this.loginForm.get('senha')?.value
    }

    this.authService.login(credentials).subscribe({
        next: (response: any) => {
            if (response) {
                this.router.navigate(['home']);
            } else {
              console.log(response)
            }
        },
        error: (err: any) => {
          console.log(err);
            // this.snackBar.open(err.error?.message || 'Erro no login', 'OK', { duration: 4000 });
        }
    })
    // .add(() => this.loading = false);
  }
}
