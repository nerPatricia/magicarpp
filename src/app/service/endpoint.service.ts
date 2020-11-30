import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  url = environment.url;

  constructor(public http: HttpClient) {}
  // name, collection, usd_max, eur_max, usd_min, eur_min, cmc, rarity, legalities, power, toughness, keywords
  async searchCard(card: any) {
    const url = this.url + '/mongo/search?&name='+card.name+'&collection='+card.collection+'&cmc='+card.cmc+'&rarity='+card.rarity+
    '&legalities='+card.legalities+'&power='+card.power+'&toughness='+card.toughness+'&keywords='+card.keywords+
    '&usd_max='+card.usd_max+'&usd_min='+card.usd_min+'&eur_max='+card.eur_max+'&eur_min='+card.eur_min+'&colors='+card.color+'&limit=100';
    console.log(url);
    return this.http.get(url).toPromise();
  }

  async rankUp() {
    const url = this.url + '/rank/up';
    return this.http.get(url).toPromise();
  }

  async rankDown() {
    const url = this.url + '/rank/down';
    return this.http.get(url).toPromise();
  }

  async getCardById(cardId) {
    const url = this.url + '/mongo/card/' + cardId;
    return this.http.get(url).toPromise();
  }
}
