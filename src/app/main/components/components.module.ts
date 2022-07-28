import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CardsComponent,
    CardItemComponent,
  ]
})
export class ComponentsModule { }
