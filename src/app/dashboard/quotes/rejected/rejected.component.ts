import { NgFor } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-rejected',
  imports: [NgFor],
  template: `
    <h2 class="text-xl font-semibold text-gray-800 mb-5 ml-1">
      Rejected Quotes
    </h2>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="border rounded-lg overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Customer Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Valid From
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Valid To
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr *ngFor="let quote of quotes; trackBy: trackById">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    {{ quote.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {{ quote.customerName }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {{ quote.validFrom }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {{ quote.validTo }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {{ quote.country }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {{ quote.currency }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    <span [class]="getStatusClass(quote.status)">
                      {{ quote.status }}
                    </span>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                  >
                    <button
                      type="button"
                      class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      View</button
                    ><span class="mx-2">|</span
                    ><button
                      type="button"
                      class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RejectedComponent {
  quotes: any[] = [
    {
      id: 1001,
      customerName: 'Acme Corp',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      country: 'USA',
      currency: 'USD',
      status: 'rejected',
    },
    {
      id: 1002,
      customerName: 'TechGlobal Ltd',
      validFrom: '2024-02-01',
      validTo: '2024-07-31',
      country: 'UK',
      currency: 'GBP',
      status: 'rejected',
    },
    {
      id: 1003,
      customerName: 'Euro Solutions',
      validFrom: '2024-03-01',
      validTo: '2024-08-31',
      country: 'Germany',
      currency: 'EUR',
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