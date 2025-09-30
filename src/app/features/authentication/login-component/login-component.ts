import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, NzInputModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(
   private auth: AuthService
  ) {  
  }

  onLogin(): void
  {
    if(this.email && this.password)
    {
      console.log('teste')
    }
  }
}
