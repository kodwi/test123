import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexModule} from '@angular/flex-layout';
import {HeaderModule} from './shared/modules/header/header.module';
import {entitiesInit} from './shared/inits/entities-init';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    HeaderModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: entitiesInit,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
