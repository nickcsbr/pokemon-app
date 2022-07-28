import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TypePipe } from './pipes/type.pipe';

@NgModule({
  declarations: [
    TypePipe,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    TypePipe,
    OrderByPipe,
    AppMaterialModule
  ]
})
export class SharedModule { }
