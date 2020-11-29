import { environment } from './../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;
  public token;

  constructor(private storage: Storage, private http: HttpClient) { }

  async login(email, senha) {
    const url = this.url + '/login';
    return this.http.post(url, { email, senha },).toPromise();
  }

  async registerUser(userData) {
    const url = this.url + '/cadastrar-usuario';
    return this.http.post(url, userData,).toPromise();
  }

  async saveAuth(authData) {
    await this.storage.set('authData', authData);
  }

  async getAuthData() {
    return await this.storage.get('authData');
  }

  async deleteAuthData() {
    await this.storage.remove('authData');
  }

}
