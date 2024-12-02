import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SidebarComponent } from './sidebar/sidebar.component'

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <app-sidebar />
    <router-outlet />
  `,
  styles: ``,
})
export class DashboardComponent {}
