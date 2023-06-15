import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { MarketPlaceRoutingModule } from './market-place-routing.module';
import { MarketPlaceComponent } from './market-place.component';
import { HeaderPromotionComponent } from './components/header-promotion/header-promotion.component';
import { NewletterComponent } from './components/newletter/newletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { PraiaModule } from './pages/praia/praia.module';
import {AutobusesModule} from './pages/autobuses/autobuses.module';
import { HeaderTresComponent } from './components/header/header-tres/header-tres.component';
import { HeaderMobileTresComponent } from './components/header-mobile/header-mobile-tres/header-mobile-tres.component';

@NgModule({
  declarations: [
    MarketPlaceComponent,
    HeaderPromotionComponent,
    NewletterComponent,
    FooterComponent,
    HeaderTresComponent,
    HeaderMobileTresComponent,
  ],
  imports: [
    MarketPlaceRoutingModule,
    SharedModule,
    PraiaModule,
    AutobusesModule
  ]
})
export class MarketPlaceModule { }
