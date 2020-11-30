import { LoadingService } from './../../service/loading.service';
import { NavigationExtras, Router } from '@angular/router';
import { EndpointService } from './../../service/endpoint.service';
import Swal from 'sweetalert2';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.page.html',
  styleUrls: ['./advanced-search.page.scss'],
})
export class AdvancedSearchPage {
  card: any = {
    name: '',
    collection: '', // um select a partir de um getAllCollections
    usd_max: '',
    eur_max: '',
    usd_min: '',
    eur_min: '',
    cmc: '',
    rarity: '', // raridades são valores fixos
    legalities: '', // legalities são valores fixos
    power: '',
    toughness: '',
    keywords: '',
    color: '' // W U B R G Z (colorless)
  };
  currency = 'usd';

  constructor(
    private navParams: NavParams, 
    private modalCtrl: ModalController,
    private endpoint: EndpointService,
    private router: Router,
    private loading: LoadingService
  ) {
    this.card.name = this.navParams.get('cardName');
    this.currency = this.navParams.get('currency');
  }

  search() {
    if(this.card.usd_min == 0) {
      this.card.usd_min = '';
    }
    if(this.card.usd_max == 0) {
      this.card.usd_max = '';
    }
    if(this.card.eur_max == 0) {
      this.card.eur_max = '';
    }
    if(this.card.eur_min == 0) {
      this.card.eur_min = '';
    }

    if (this.card.usd_max < this.card.usd_min) {
      Swal.fire({
        title: 'Atenção',
        text: 'O Valor Minimo não pode ser maior que o Valor Máximo',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    console.log(this.card);
    this.loading.present();

    this.endpoint.searchCard(this.card).then(
      (response: any) => {
        this.loading.dismiss();
        const navigationExtras: NavigationExtras = {
          state: { 
            cardList: response
          }
        };
        this.router.navigate(['card-list'], navigationExtras);
      }, error => {
        this.loading.dismiss();
        console.log(error);
      }
    );
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
