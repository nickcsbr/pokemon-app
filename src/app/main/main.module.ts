import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule
  ]
})
export class MainModule { }
