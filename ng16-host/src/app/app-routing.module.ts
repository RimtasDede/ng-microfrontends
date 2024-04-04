import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('ng16-remote1/Module').then(m => m.FruitsModule),
    pathMatch: 'full'
  },
  {
    path: 'fruits-proxy',
    loadChildren: () => import('./fruits-proxy/fruits-proxy.module').then(m => m.FruitsProxyModule),
    // pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
