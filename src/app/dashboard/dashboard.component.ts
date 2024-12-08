import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [NgClass, RouterLink, RouterOutlet],
})
export class DashboardComponent {
  currentRoute: string = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url
    })
  }

  isActive(link: string): boolean {
    return this.currentRoute.includes(link)
  }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
