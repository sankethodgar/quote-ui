import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  constructor(private router: Router) {}

  reload() {
    const currentUrl = this.router.url
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl])
    })
  }
}
