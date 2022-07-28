import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: ':id', component: CardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
