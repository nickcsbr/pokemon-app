import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { Card } from 'src/app/core/models/card';
import { PagedData } from 'src/app/core/models/paged-data';
import { CardService } from 'src/app/core/services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pagedData: PagedData<Card> = new PagedData<Card>();

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  ngAfterViewInit(): void {
    this.paginator?.page.pipe(tap(() => this.getPage()))
    .subscribe();
  }

  getPage() {
    this.pagedData.page = this.paginator ? this.paginator.pageIndex + 1 : 1;
    this.cardService.getCards(this.pagedData, 'name:pikachu').subscribe((pagedDataResult) => {
      this.pagedData = pagedDataResult;
   });
  }

  nextPage() {
    this.pagedData.page++;
    console.log(this.pagedData);
  }
}
