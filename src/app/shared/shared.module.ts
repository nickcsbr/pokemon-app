import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TypePipe } from './pipes/type.pipe';
import { ImageSpinnerComponent } from './components/image-spinner/image-spinner.component';
import { AttributeComponent } from './components/attribute/attribute.component';

@NgModule({
  declarations: [
    TypePipe,
    OrderByPipe,
    ImageSpinnerComponent,
    AttributeComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    TypePipe,
    OrderByPipe,
    AppMaterialModule,
    ImageSpinnerComponent,
    AttributeComponent
  ]
})
export class SharedModule { }
