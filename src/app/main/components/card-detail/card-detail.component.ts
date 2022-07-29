import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CardDetail } from 'src/app/core/models/card-detail';
import { CardService } from 'src/app/core/services/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  id: string = '';
  card: CardDetail | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') as string;
    });
    this.cardService.getCard(this.id).subscribe((cardResult) => {
      this.card = cardResult.data;
    });
  }
}
