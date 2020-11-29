import { IonSlides, NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rankListAltas = [
    {
      cardName: '',
      price: ''
    }
  ];
  rankListBaixas = [
    {
      cardName: '',
      price: ''
    }
  ];
  @ViewChild('slides') slides: IonSlides;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  async segmentChanged(ev: any) {
    if (await this.slides.getActiveIndex() == 0) {
      this.slides.slideNext();
    } else {
      this.slides.slidePrev();
    }
  }

  async slideChanged(event) {
    
  }
}
