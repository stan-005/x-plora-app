import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../core/validators/custom-validators';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink, FormsModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: CustomValidators.mustMatch('password', 'confirmPassword') });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      let role = 'user';
      this.authService.register({ name, email, password, role }).subscribe(
        response => {
          // Handle successful registration
          localStorage.setItem('token', response.token);
          this.notificationService.notify('Registration successful', 'success');
          this.router.navigate(['/login']);
        },
        error => {
          // Handle registration error
          this.notificationService.notify('Registration failed', 'error');
        }
      );
    }
  }
}