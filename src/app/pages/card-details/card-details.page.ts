import { format } from 'date-fns';
import { EndpointService } from './../../service/endpoint.service';
import Swal from 'sweetalert2';
import { ToastService } from '../../service/toast.service';
import { NavController } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-card-details',
  templateUrl: 'card-details.page.html',
  styleUrls: ['card-details.page.scss'],
})
export class CardDetailsPage {
  card: any = {};
  cardDetails: any = {};
  currency = 'usd';
  chart: any;

  @ViewChild('lineChart') lineChart;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private endpoint: EndpointService,
    private router: Router,
    private toast: ToastService,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.card = this.router.getCurrentNavigation().extras.state.card;
        this.currency = this.router.getCurrentNavigation().extras.state.currency;
      }
    });
  }

  ionViewDidEnter() {
    this.endpoint.getCardById(this.card._id).then(
      (response: any) => {
        this.cardDetails = response.card[0];
        this.createBarChart();
      }, error => {
        console.log(error);
      }
    );
  }

  openAdvencedSearchModal(event) {
    this.redirectToAdvancedSearch(event.searchInput);
  }

  redirectToAdvancedSearch(cardName) {
    const navigationExtras: NavigationExtras = {
      state: { 
        cardName: cardName,
        currency: this.currency
      }
    };
    this.router.navigate(['advanced-search'], navigationExtras);
  }

  redirectToGraphDetails() {
    const navigationExtras: NavigationExtras = {
      state: { 
        cardDetails: this.cardDetails,
        currency: this.currency
      }
    };
    this.router.navigate(['dashboard'], navigationExtras);
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
              beginAtZero: true,
              stepSize: 0.5
            }
          }]
        }
      }
    });
  }
}
