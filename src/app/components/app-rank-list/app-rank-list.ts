import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank-list',
  templateUrl: 'app-rank-list.html',
  styleUrls: ['app-rank-list.scss']
})
export class AppRankListComponent {
  @Input()
  cardList: any = [];
  @Input()
  tipo = 1 // 1 é altas e 2 é baixas

  @Output()
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    public navCtrl: NavController, 
    private router: Router
  ) {}

  goToCardDetails() {
    // this.navCtrl.navigateForward('/adicionar-creditos');
  }
}
