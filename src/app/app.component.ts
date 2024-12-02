import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { IStaticMethods } from 'preline/preline'
import { Router, Event, NavigationEnd } from '@angular/router'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit()
        }, 100)
      }
    })
  }
}
