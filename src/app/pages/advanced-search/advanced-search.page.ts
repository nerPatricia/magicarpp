import { ToastService } from '../../service/toast.service';
import Swal from 'sweetalert2';
import { UtilitiesService } from '../../service/utilities.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: 'advanced-search.page.html',
  styleUrls: ['advanced-search.page.scss'],
})
export class AdvancedSearchPage implements OnInit {
  placaData: any = {
    placa: '',
    tipo: '',
    marca: '',
    modelo: ''
  };

  constructor(private navCtrl: NavController, private utilitiesService: UtilitiesService, private toast: ToastService) {}

  ngOnInit() {}

  getTipo(tipo) {
    this.placaData.tipo = tipo;
  }

  cadastrar() {
    if (this.placaData.placa == '' || this.placaData.tipo == '' || this.placaData.marca == '' || this.placaData.modelo == '') {
      this.toast.present({ message : 'Preencha todos os campos para continuar.' });
      return;
    }

    this.utilitiesService.cadCarros(this.placaData).then(
      (response) => {
        Swal.fire('Sucesso', 'Carro cadastrado com sucesso.', 'success').then(
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
