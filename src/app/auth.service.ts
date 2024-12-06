import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'user'

  constructor() {}

  login(email: string, password: string): boolean {
    if (email === 'admin@mail.com' && password === 'Admin@123') {
      const user = { email }
      sessionStorage.setItem(this.USER_KEY, JSON.stringify(user))

      return true
    }

    return false
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(this.USER_KEY)
  }

  logout(): void {
    sessionStorage.removeItem(this.USER_KEY)
  }

  getUser(): any {
    return JSON.parse(sessionStorage.getItem(this.USER_KEY) || '{}')
  }
}
