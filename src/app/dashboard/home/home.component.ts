import { CommonModule } from '@angular/common'
import { Component, ViewChild } from '@angular/core'
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
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './home.component.html',
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
