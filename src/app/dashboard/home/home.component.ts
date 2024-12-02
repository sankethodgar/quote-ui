import { Component, ViewChild } from '@angular/core'
import { NgFor } from '@angular/common'
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule,
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  dataLabels: ApexDataLabels
  grid: ApexGrid
  stroke: ApexStroke
  fill: ApexFill
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgApexchartsModule],
  template: `
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div
        *ngFor="let stat of stats"
        class="flex flex-col bg-white border shadow-sm rounded-xl"
      >
        <div class="p-4 md:p-5">
          <div class="flex items-center gap-x-2">
            <p class="text-xs uppercase tracking-wide text-gray-500">
              {{ stat.label }}
            </p>
          </div>
          <div class="mt-1 flex items-center gap-x-2">
            <h3 class="text-xl sm:text-2xl font-medium text-gray-800">
              {{ stat.value }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 pt-4 flex flex-col bg-white border shadow-sm rounded-xl">
      <div class="flex justify-between items-center">
        <div>
          <p class="pl-4 text-xl sm:text-2xl font-medium text-gray-800">
            Insights
          </p>
        </div>
      </div>
      <div id="hs-single-area-chart">
        <apx-chart
          [series]="chartOptions.series"
          [chart]="chartOptions.chart"
          [xaxis]="chartOptions.xaxis"
          [dataLabels]="chartOptions.dataLabels"
          [grid]="chartOptions.grid"
          [stroke]="chartOptions.stroke"
        ></apx-chart>
      </div>
    </div>
  `,
})
export class HomeComponent {
  stats = [
    { label: 'All Quotes', value: '92,913' },
    { label: 'Pending', value: '913' },
    { label: 'Approved', value: '2,913' },
    { label: 'Rejected', value: '213' },
  ]

  @ViewChild(ChartComponent) chart!: ChartComponent
  public chartOptions: ChartOptions = {
    series: [
      {
        name: 'Quotes',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 150, 200],
      },
    ],
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    grid: {
      strokeDashArray: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.8,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  }
}
