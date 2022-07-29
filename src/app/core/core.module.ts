import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { HeaderComponent } from './header/header.component';
import { ComponentMessageService } from './services/component-message.service';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ComponentMessageService
  ]
})
export class CoreModule { }
