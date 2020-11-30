import { Component, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank-list',
  templateUrl: 'app-rank-list.html',
  styleUrls: ['app-rank-list.scss']
})
export class AppRankListComponent implements OnChanges {
  @Input()
  allCards: any = [];
  @Input()
  currency = 'usd';
  @Input()
  rankFlag = 'altas';

  @Output()
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    public navCtrl: NavController, 
    private router: Router
  ) {}

  ngOnChanges() {
    console.log(this.allCards);
    console.log(this.currency);
    console.log(this.rankFlag);
  }

  goToCardDetails() {
    // this.navCtrl.navigateForward('/adicionar-creditos');
  }
}
