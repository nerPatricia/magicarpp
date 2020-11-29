import { ToastService } from '../../service/toast.service';
import Swal from 'sweetalert2';
import { UtilitiesService } from '../../service/utilities.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: 'card-list.page.html',
  styleUrls: ['card-list.page.scss'],
})
export class CardListPage implements OnInit {
  credito = 0;
  saldo = 0;

  constructor(private navCtrl: NavController, private utilitiesService: UtilitiesService, private toast: ToastService) {}

  ngOnInit() {
    this.utilitiesService.getSaldo().then(
      (response: any) => {
        this.saldo = response.saldo;
      }, error => {
        console.log(error);
      }
    );
  }

  getValor(valor) {
    this.credito = valor;

    console.log(valor);
    console.log(this.credito);
  }

  adicionar() {
    if (this.credito == 0) {
      this.toast.present({ message : 'Selecione um valor para continuar' });
      return;
    }

    this.utilitiesService.addCreditos(this.credito).then(
      (response) => {
        Swal.fire('Sucesso', 'Creditos adicionados com sucesso.', 'success').then(
          () => {
            this.navCtrl.navigateForward(['dashboard']);
          }
        );
      }, error => {
        console.log(error);
      }
    );
  }

  back() {
    this.navCtrl.navigateForward(['dashboard']);
  }
}
