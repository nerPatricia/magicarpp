import { EndpointService } from './../../service/endpoint.service';
import { AdvancedSearchPage } from './../advanced-search/advanced-search.page';
import { IonSlides, ModalController, NavController } from '@ionic/angular';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  allRanks = {
    altas: {
      usd: [],
      eur: []
    },
    baixas: {
      usd: [],
      eur: []
    }
  };
  currency = 'usd';
  segmentFlag = 1;
  @ViewChild('slides') slides: IonSlides;

  constructor(
    private modalCtrl: ModalController,
    private endpointService: EndpointService,
    private navCtrl: NavController,
    private verifica: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.endpointService.rankUp().then(
      (response: any) => {
        this.allRanks.altas.usd = response.usd;
        this.allRanks.altas.eur = response.eur;
      }, (error) => {
        console.log(error);
      }
    );

    this.endpointService.rankDown().then(
      (response: any) => {
        this.allRanks.baixas.usd = response.usd;
        this.allRanks.baixas.eur = response.eur;
      }, (error) => {
        console.log(error);
      }
    );
  }

  async segmentChanged(ev: any) {
    if (await this.slides.getActiveIndex() == 0) {
      this.slides.slideNext();
    } else {
      this.slides.slidePrev();
    }
  }

  reloadRanksByCurrency(event) {
    if(event.currency != this.currency) {
      this.currency = event.currency;
      this.verifica.detectChanges();
    }
  }

  openAdvencedSearchModal(event) {
    this.presentModal(event.searchInput);
  }

  async presentModal(cardName) {
    const modal = await this.modalCtrl.create({
      component: AdvancedSearchPage,
      cssClass: 'default-modal',
      componentProps: {
        cardName: cardName,
        currency: this.currency
      }
    });
    return await modal.present();
  }
}
