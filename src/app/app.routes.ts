import { Routes } from '@angular/router'
import { AllComponent } from './dashboard/quotes/all/all.component'
import { HomeComponent } from './dashboard/home/home.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { CreateComponent } from './dashboard/quotes/create/create.component'
import { PendingComponent } from './dashboard/quotes/pending/pending.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ApprovedComponent } from './dashboard/quotes/approved/approved.component'
import { RejectedComponent } from './dashboard/quotes/rejected/rejected.component'

export const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: '',
    component: DashboardComponent,
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
          {
            path: 'approved',
            component: ApprovedComponent,
          },
          {
            path: 'pending',
            component: PendingComponent,
          },
          {
            path: 'rejected',
            component: RejectedComponent,
          },
        ],
      },
    ],
  },
]
