import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html',
  styleUrls: ['app-header.scss']
})
export class AppHeaderComponent {
  searchInput: string = '';
  @Input()
  showButtonBack = false;
  @Input()
  allOptions = true;
  @Input()
  logo = true;
  @Input()
  showSelectCurrency: boolean = true;
  @Input()
  title: string;
  @Input()
  iconTitle: string = '';

  currency = 'usd';

  @Output()
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    public navCtrl: NavController, 
    private router: Router
  ) {}

  helpModal() {
    this.navCtrl.navigateForward('/');
  }

  goToAddCredits() {
    this.navCtrl.navigateForward('/adicionar-creditos');
  }

  sendSearchInputToModal() {
    this.eventEmitter.emit({
      searchInput: this.searchInput
    });
  }

  changeCurrency(event) {
    this.eventEmitter.emit({
      currency: this.currency
    });
  }

  onInput(event) {

  }

  onCancel(event) {
    
  }

}
