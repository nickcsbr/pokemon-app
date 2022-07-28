import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { CardService } from 'src/app/core/services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.cards = cards;
    });
  }
}
