import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/core/models/card';
import { CARDS } from 'src/app/mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Observable<Card[]> {
    const cards = of(CARDS);
    return cards;
  }
}
