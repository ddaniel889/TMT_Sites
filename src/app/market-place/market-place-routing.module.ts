import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketPlaceComponent } from './market-place.component';
import { InicioComponent } from './pages/praia/inicio.component'; 
import { RodoviaComponent } from './pages/autobuses/components/rodovia/rodovia.component';

const routes: Routes = [
  {
    path: '', component: MarketPlaceComponent, children: [
      { path: '', component: InicioComponent, pathMatch: 'full' },
      { path: 'paquetes/nacionales', loadChildren: () => import('./pages/nacionales/nacionales.module').then(m => m.NacionalesModule) },
      { path: 'paquetes/internacionales', loadChildren: () => import('./pages/internacionales/internacionales.module').then(m => m.InternacionalesModule) },
      { path: 'buses', loadChildren: () => import('./pages/autobuses/autobuses.module').then(m => m.AutobusesModule) },
      { path: 'rental', loadChildren: () => import('./pages/alquileres/alquileres.module').then(m => m.AlquileresModule) },
      { path: 'news', loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasModule) },
      { path: 'publish', loadChildren: () => import('./pages/publicar/publicar.module').then(m => m.PublicarModule) },
      { path: 'assist365', loadChildren: () => import('./pages/assist365/assist365.module').then(m => m.Assist365Module) },
      { path: 'affinity', loadChildren: () => import('./pages/affinity/affinity.module').then(m => m.AffinityModule) },
      { path: 'ikarus', loadChildren: () => import('./pages/ikarus/ikarus.module').then(m => m.IkarusModule) },
      { path:'rodovia', component: RodoviaComponent},
      { path: '**', loadChildren: () => import('./pages/pagina404/pagina404.module').then(m => m.Pagina404Module), pathMatch: 'full' }
    ]
  },
  { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
  
 

 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketPlaceRoutingModule { }
