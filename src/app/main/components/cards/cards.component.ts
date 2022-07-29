import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { Card } from 'src/app/core/models/card';
import { PagedData } from 'src/app/core/models/paged-data';
import { CardService } from 'src/app/core/services/card.service';
import { ComponentMessageService } from 'src/app/core/services/component-message.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pagedData: PagedData<Card> = new PagedData<Card>();
  searchItem: string = '';

  constructor(
    private cardService: CardService,
    private messageService: ComponentMessageService
  ) { }

  ngOnInit(): void {
    this.getPage(this.searchItem);

    this.messageService.listen().subscribe((m:any) => {
      console.log(m)
      if(m.message === 'searchUpdated') {
        this.searchItem = 'name:' + m.search;
        this.getPage(this.searchItem);
      }
    })
  }

  ngAfterViewInit(): void {
    this.paginator?.page.pipe(tap(() => this.getPage(this.searchItem)))
    .subscribe();
  }

  getPage(searchItem: string) {
    this.pagedData.page = this.paginator ? this.paginator.pageIndex + 1 : 1;
    this.cardService.getCards(this.pagedData, searchItem).subscribe((pagedDataResult) => {
      this.pagedData = pagedDataResult;
   });
  }
}
