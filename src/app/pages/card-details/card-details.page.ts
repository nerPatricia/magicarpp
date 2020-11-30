import Swal from 'sweetalert2';
import { ToastService } from '../../service/toast.service';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: 'card-details.page.html',
  styleUrls: ['card-details.page.scss'],
})
export class CardDetailsPage {
  carroData: any;
  estacionarData: any = {
    placa_carro: '',
    id_vaga: '',
    duracao: ''
  };
  saldo = 0;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.carroData = this.router.getCurrentNavigation().extras.state.carroData;
        this.saldo = this.router.getCurrentNavigation().extras.state.saldo;

        this.estacionarData.placa_carro = this.carroData.placa;
      }
    });
  }

  ionViewDidEnter() {}

  back() {
    this.navCtrl.navigateForward(['dashboard']);
  }

  avancar() {
    if (this.saldo < (this.estacionarData.duracao * 3)) {
      this.toast.present({ message : 'Você não possui saldo suficiente. Adicione créditos e tente novamente.' });
      return;
    } 

    console.log(this.estacionarData);


  }  
}
