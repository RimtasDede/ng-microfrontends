import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatcher, UrlSegment } from '@angular/router';

import { WrapperComponent } from './wrapper.component';

function startsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
      const fullUrl = url.map(u => u.path).join('/');
      if (fullUrl.startsWith(prefix)) {
          return ({ consumed: url});
      }
      return null;
  };
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('ng16-remote1/Module').then(m => m.FruitsModule),
    pathMatch: 'full'
  },
  {
    path: 'fruits-proxy',
    loadChildren: () => import('./fruits-proxy/fruits-proxy.module').then(m => m.FruitsProxyModule),
  },
  {
    path: 'pokemon/aaa',
    // matcher: startsWith('pokemon'),
    component: WrapperComponent,
    data: { importName: 'ng14-remote1', elementName: 'ng14-remote1' },
  },
  // {
  //   path: 'pokemon',
  //   loadChildren: () => import('ng14-remote1/Component').then(m => m.PokemonModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
