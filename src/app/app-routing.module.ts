import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketPlaceComponent } from './market-place/market-place.component';
import { InicioComponent } from './market-place/pages/praia/inicio.component';

const routes: Routes = [
  { path: '', component: MarketPlaceComponent, children: [
    { path: '', component: InicioComponent, pathMatch: 'full' },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
