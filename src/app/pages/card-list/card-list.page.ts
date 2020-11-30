import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../service/toast.service';
import Swal from 'sweetalert2';

import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: 'card-list.page.html',
  styleUrls: ['card-list.page.scss'],
})
export class CardListPage implements OnInit {
  cardList = [];

  constructor(
    private navCtrl: NavController,  
    private toast: ToastService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cardList = this.router.getCurrentNavigation().extras.state.cardList;
      }
    });
  }

  ngOnInit() {}

  goToDetails(card) {
    this.navCtrl.navigateForward(['card-details']);
  }

  back() {
    this.navCtrl.navigateForward(['']);
  }
}
