// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));




import { PlatformRef, enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (!(window as any).shell && environment.production) {
  enableProdMode();
}

// platformBrowser().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core'];
(window as any).plattform = (window as any).plattform || {};
let platform: PlatformRef = (window as any).plattform[ngVersion];

if (!platform) {
  platform = platformBrowser();
  console.log('platform', platform);
  (window as any).plattform[ngVersion] = platform;
}

platform.bootstrapModule(AppModule, { ngZone: (window as any).ngZone })
  .catch(err => console.error(err))
