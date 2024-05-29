import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { endsWith } from './router.utils';

const routes: Routes = [
  {
    // path: '',
    matcher: endsWith('aaa'),
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
