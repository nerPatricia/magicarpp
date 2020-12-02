import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { format, isBefore } from 'date-fns';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  currency = 'usd';
  chart: any;
  cardDetails: any = {};

  @ViewChild('lineChart') lineChart;

  constructor(
    private navCtrl: NavController, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cardDetails = this.router.getCurrentNavigation().extras.state.cardDetails;
        this.currency = this.router.getCurrentNavigation().extras.state.currency;
      }
    });
  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.createBarChart();

  }

  createBarChart() {
    let labels = [];
    let prices = [];
    this.cardDetails.prices.forEach(element => {
      labels.push(format(new Date(element.created_at), "dd-MM-yyyy")); 
      prices.push(element.usd);
    });
    this.chart = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Variação do Preço',
          data: prices,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
  }
}
