import { NgIf } from '@angular/common'
import { Router } from '@angular/router'
import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

import { AuthService } from '../auth.service'

@Component({
  imports: [NgIf, ReactiveFormsModule],
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  signInForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  get email() {
    return this.signInForm.get('email')
  }

  get password() {
    return this.signInForm.get('password')
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home'])
    }
  }

  onSubmit() {
    if (this.signInForm.invalid) {
      return
    }

    const { email, password } = this.signInForm.value
    const isAuthenticated = this.authService.login(email, password)

    if (isAuthenticated) {
      this.router.navigate(['/home'])
    } else {
      alert('Invalid credentials')
    }
  }
}
