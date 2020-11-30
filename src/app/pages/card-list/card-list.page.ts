import { AdvancedSearchPage } from './../advanced-search/advanced-search.page';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ToastService } from '../../service/toast.service';
import Swal from 'sweetalert2';

import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: 'card-list.page.html',
  styleUrls: ['card-list.page.scss'],
})
export class CardListPage implements OnInit {
  cardList: any = [];
  currency = 'usd';

  constructor(
    private navCtrl: NavController,  
    private toast: ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter(){
    console.log(this.cardList);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cardList = this.router.getCurrentNavigation().extras.state.cardList;
        this.currency = this.router.getCurrentNavigation().extras.state.currency;
      }
    });
  }

  goToDetails(card) {
    const navigationExtras: NavigationExtras = {
      state: { 
        card: card,
        currency: this.currency
      }
    };
    this.navCtrl.navigateForward(['card-details'], navigationExtras);
  }

  back() {
    this.navCtrl.navigateForward(['']);
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
}
