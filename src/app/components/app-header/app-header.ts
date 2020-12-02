import { ToastService } from './../../service/toast.service';
import { EndpointService } from './../../service/endpoint.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

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
  title: string = 'BUSCA AVANÇADA';
  @Input()
  iconTitle: string = '';

  currency = 'usd';
  card: any = {
    name: ' ',
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

  @Output()
  public eventEmitter: EventEmitter<any> = new EventEmitter();
  @Output()
  public changeCurrencyEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    public navCtrl: NavController, 
    private router: Router,
    private endpoint: EndpointService,
    private toast: ToastService
  ) {}

  goToHome() {
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
    this.changeCurrencyEmitter.emit({
      currency: this.currency
    });
  }

  search() {
    this.endpoint.searchCard(this.card).then(
      (response: any) => {
        const navigationExtras: NavigationExtras = {
          state: { 
            cardList: response,
            currency: this.currency
          }
        };
        this.router.navigate(['card-list'], navigationExtras);
      }, error => {
        this.toast.present({ message: 'Nenhum resultado encontrado' });
        console.log(error);
      }
    );
  }
}
