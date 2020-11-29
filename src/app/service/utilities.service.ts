import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  url = environment.url;

  constructor(public http: HttpClient, private authService: AuthService) {}

  async getSaldo() {
    const auth = await this.authService.getAuthData();
    const url = this.url + '/get-saldo';
    const headers = new HttpHeaders({ 'token': auth.token });
    return this.http.get(url, { headers }).toPromise();
  }

  async getCarros() {
    const auth = await this.authService.getAuthData();
    const url = this.url + '/get-carros';
    const headers = new HttpHeaders({ 'token': auth.token });
    return this.http.get(url, { headers }).toPromise();
  }

  async cadCarros(carroData) {
    const auth = await this.authService.getAuthData();
    const url = this.url + '/cadastrar-carro';
    const headers = new HttpHeaders({ 'token': auth.token });
    return this.http.post(url, carroData, { headers }).toPromise();
  }

  async estacionar(estacionarData) {
    const auth = await this.authService.getAuthData();
    const url = this.url + '/estacionar';
    const headers = new HttpHeaders({ 'token': auth.token });
    return this.http.post(url, estacionarData, { headers }).toPromise();
  }

  async getTempoVaga() {
    const auth = await this.authService.getAuthData();
    const url = this.url + '/add-credito'; // TODO: arrumar a rota aqui
    const headers = new HttpHeaders({ 'token': auth.token });
    return this.http.get(url, { headers }).toPromise();
  }

  async addCreditos(credito) {
    const auth = await this.authService.getAuthData();
    const url = this.url + '/add-creditos';
    const headers = new HttpHeaders({ 'token': auth.token });
    return this.http.post(url, { credito }, { headers }).toPromise();
  }
}
