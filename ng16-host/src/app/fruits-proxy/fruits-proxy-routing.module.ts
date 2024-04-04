import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FruitsProxyComponent } from './fruits-proxy/fruits-proxy.component';

const routes: Routes = [
  {
    path: '',
    component: FruitsProxyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsProxyRoutingModule { }
