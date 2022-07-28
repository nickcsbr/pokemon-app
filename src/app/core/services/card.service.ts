import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card';
import { environment } from 'src/environments/environment';

import { CardDetail } from '../models/card-detail';
import { Data } from '../models/data';
import { PagedData } from '../models/paged-data';

const CARDS_DATA = 'id,name,types,images';

const SINGLE_CARD_DATA = 'id,name,types,images,resistances,attacks,weaknesses'

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = environment.apiHost;

  constructor(private httpClient: HttpClient) {}

  getCards(pageInfo: PagedData<Card>, searchQuery: string = ''): Observable<PagedData<Card>> {
    let params = new HttpParams()
      .set('pageSize', pageInfo.pageSize)
      .set('page', pageInfo.page)
      .set('select', CARDS_DATA)
      .set('q', searchQuery);

    let headers = new HttpHeaders();
    headers = headers.set('X-Api-Key', environment.apiKey);

    return this.httpClient.get<PagedData<Card>>(this.apiUrl, { params: params, headers: headers });
  }

  getCard(cardId: string): Observable<Data<CardDetail>> {
    let params = new HttpParams()
      .set('select', SINGLE_CARD_DATA);

    let headers = new HttpHeaders();
    headers = headers.set('X-Api-Key', environment.apiKey);

    return this.httpClient.get<Data<CardDetail>>(this.apiUrl + cardId, { params: params, headers: headers });
  }
}
