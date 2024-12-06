import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, RouterLink, RouterOutlet],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  currentRoute: string = ''

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url
    })
  }

  isActive(link: string): boolean {
    return this.currentRoute.includes(link)
  }
}
