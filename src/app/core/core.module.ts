import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarketPlaceModule } from 'src/app/market-place/market-place.module';

@NgModule({
  exports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  imports: [
    MarketPlaceModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) { throw new Error('CorelModule ya esta cargado. Importelo solamente en AppModule.'); }
  }
}
