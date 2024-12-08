import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { CommonModule } from '@angular/common'
import { Component, OnInit, ViewChild } from '@angular/core'
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
export class HomeComponent implements OnInit {
  loading = true
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/stats`).subscribe((data) => {
      const responseData = data as any
      this.stats = responseData.overview.map((item: any) => ({
        label: item.label,
        value: item.value,
      }))
      this.chartOptions.series = [
        {
          name: 'Quotes',
          data: responseData.month,
        },
      ]
      this.loading = false
    })
  }

  stats: any = []

  @ViewChild(ChartComponent) chart!: ChartComponent
  public chartOptions: ChartOptions = {
    series: [],
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
