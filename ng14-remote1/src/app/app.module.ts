import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: []
})
export class AppModule {
  constructor(
    private injector: Injector,
  ) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });

    customElements.define('ng14-remote1', ce);
  }

}
