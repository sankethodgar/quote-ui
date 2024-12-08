import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { environment } from '../../../../environments/environment'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  loading = true

  customers: any = []
  shipTo: any = []
  employee: any = []
  materials: any = []

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/customers`).subscribe((data) => {
      this.customers = data
      this.loading = false
    })
    this.http.get(`${environment.apiUrl}/ship-to`).subscribe((data) => {
      this.shipTo = data
    })
    this.http.get(`${environment.apiUrl}/employee`).subscribe((data) => {
      this.employee = data
    })
    this.http.get(`${environment.apiUrl}/materials`).subscribe((data) => {
      this.materials = data
    })
  }

  today: Date = new Date()
  customerEnquiryNo: string = ''
  selectedCustomer: any = ''
  shipToCustomer: any = ''
  customerPriceProcedure: string = ''
  deliveryDate: string = ''
  validFromDate: string = ''
  validToDate: string = ''
  salesEmployee: any = ''

  onCustomerSelect() {
    this.selectedCustomer = this.customers.find(
      (customer: any) => customer.customernumber === this.selectedCustomer
    )
    // if (this.selectedCustomer) {
    //   const randomEmployee =
    //     this.employee[Math.floor(Math.random() * this.employee.length)]
    //   this.salesEmployee = randomEmployee.employeeno
    // }
  }

  onShipToSelect() {
    this.shipToCustomer = this.shipTo.find(
      (shipTo: any) => shipTo.customernumber === this.shipToCustomer
    )
  }

  onSalesEmployeeSelect() {
    this.salesEmployee = this.employee.find(
      (employee: any) => employee.employeeno === this.salesEmployee
    )
  }

  reload() {
    const currentUrl = this.router.url
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl])
    })
  }
}
