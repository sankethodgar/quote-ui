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
  template: `
    <header
      class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px]"
    >
      <nav class="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
        <div class="me-5 lg:me-0 lg:hidden">
          <button
            type="button"
            class="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-application-sidebar"
            aria-label="Toggle navigation"
            data-hs-overlay="#hs-application-sidebar"
          >
            <span class="sr-only">Toggle Navigation</span>
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M15 3v18" />
              <path d="m8 9 3 3-3 3" />
            </svg>
          </button>
        </div>
        <div
          class="w-full flex items-center justify-end ms-auto gap-x-1 md:gap-x-3"
        >
          <div class="flex flex-row items-center justify-end gap-1">
            <button
              type="button"
              class="flex shrink-0 justify-center items-center gap-2 p-1 px-2 text-sm rounded-md border border-transparent bg-blue-500 text-white focus:outline-none"
            >
              Sign Out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="shrink-0 size-4"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
    <div class="-mt-px">
      <div
        id="hs-application-sidebar"
        class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
        role="dialog"
        tabindex="-1"
        aria-label="Sidebar"
      >
        <div class="relative flex flex-col h-full max-h-full">
          <div class="px-6 pt-4 pb-[6px] border-b">
            <span class="rounded-xl text-xl inline-block font-semibold">
              Sales Quote
            </span>
          </div>
          <div
            class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            <nav
              class="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul class="flex flex-col space-y-1">
                <li>
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-grey-800 hover:text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                    [ngClass]="{ 'bg-blue-500 text-white': isActive('home') }"
                    [routerLink]="['/home']"
                  >
                    <svg
                      class="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm hover:text-white rounded-lg hover:bg-blue-500"
                    [ngClass]="{
                      'bg-blue-500 text-white': isActive('quotes/create')
                    }"
                    [routerLink]="['/quotes/create']"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="shrink-0 size-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                    Create Quote
                  </a>
                </li>
                <li class="hs-accordion" id="users-accordion">
                  <button
                    type="button"
                    class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 hover:text-white rounded-lg hover:bg-blue-500"
                    aria-expanded="true"
                    aria-controls="users-accordion-child"
                  >
                    <svg
                      class="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      />
                      <path d="M12 11h4" />
                      <path d="M12 16h4" />
                      <path d="M8 11h.01" />
                      <path d="M8 16h.01" />
                    </svg>
                    Quotes
                    <svg
                      class="hs-accordion-active:block ms-auto hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      class="hs-accordion-active:hidden ms-auto block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    id="users-accordion-child"
                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="users-accordion"
                  >
                    <ul class="ps-8 pt-1 space-y-1">
                      <li>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm hover:text-white rounded-lg hover:bg-blue-500"
                          [ngClass]="{
                            'bg-blue-500 text-white': isActive('quotes/all')
                          }"
                          [routerLink]="['/quotes/all']"
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm hover:text-white rounded-lg hover:bg-blue-500"
                          [ngClass]="{
                            'bg-blue-500 text-white':
                              isActive('quotes/approved')
                          }"
                          [routerLink]="['/quotes/approved']"
                        >
                          Approved
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm hover:text-white rounded-lg hover:bg-blue-500"
                          [ngClass]="{
                            'bg-blue-500 text-white': isActive('quotes/pending')
                          }"
                          [routerLink]="['/quotes/pending']"
                        >
                          Pending
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm hover:text-white rounded-lg hover:bg-blue-500"
                          [ngClass]="{
                            'bg-blue-500 text-white':
                              isActive('quotes/rejected')
                          }"
                          [routerLink]="['/quotes/rejected']"
                        >
                          Rejected
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="w-full lg:ps-64">
        <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styles: ``,
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
