import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitsComponent } from './fruits/fruits.component';


@NgModule({
  declarations: [
    FruitsComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ]
})
export class FruitsModule { }
