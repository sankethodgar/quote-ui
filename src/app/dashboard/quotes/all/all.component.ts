import { NgFor } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-all',
  imports: [NgFor],
  templateUrl: './all.component.html',
})
export class AllComponent {
  quotes: any[] = [
    {
      id: 1001,
      customerName: 'Acme Corp',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      status: 'approved',
    },
    {
      id: 1002,
      customerName: 'TechGlobal Ltd',
      validFrom: '2024-02-01',
      validTo: '2024-07-31',
      status: 'pending',
    },
    {
      id: 1003,
      customerName: 'Euro Solutions',
      validFrom: '2024-03-01',
      validTo: '2024-08-31',
      status: 'rejected',
    },
  ]

  trackById(index: number, quote: any): number {
    return quote.id
  }

  getStatusClass(status: string): string {
    const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full'
    switch (status.toLowerCase()) {
      case 'approved':
        return `${baseClasses} bg-green-100 text-green-800`
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`
      case 'rejected':
        return `${baseClasses} bg-red-100 text-red-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }
}
