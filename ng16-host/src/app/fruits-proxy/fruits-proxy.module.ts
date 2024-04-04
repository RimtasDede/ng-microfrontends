import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsProxyRoutingModule } from './fruits-proxy-routing.module';
import { FruitsProxyComponent } from './fruits-proxy/fruits-proxy.component';


@NgModule({
  declarations: [
    FruitsProxyComponent
  ],
  imports: [
    CommonModule,
    FruitsProxyRoutingModule
  ]
})
export class FruitsProxyModule { }
