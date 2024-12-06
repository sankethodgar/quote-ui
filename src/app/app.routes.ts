import { Routes } from '@angular/router'

import { AuthGuard } from './auth.guard'

import { AllComponent } from './dashboard/quotes/all/all.component'
import { HomeComponent } from './dashboard/home/home.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { CreateComponent } from './dashboard/quotes/create/create.component'
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'quotes',
        children: [
          {
            path: 'create',
            component: CreateComponent,
          },
          {
            path: 'all',
            component: AllComponent,
          },
        ],
      },
    ],
  },
]
