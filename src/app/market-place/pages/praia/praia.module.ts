import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { InicioComponent } from './inicio.component';
import { EstadoMostradorComponent } from './components/mostrador/estado-mostrador/estado-mostrador.component';
import { MostradorComponent } from './components/mostrador/mostrador.component';
import { MostradorCuadriculaComponent } from './components/mostrador/mostrador-cuadricula/mostrador-cuadricula.component';
import { BannerComponent } from './components/banner/banner.component';
import { PaginacionComponent } from './components/mostrador/paginacion/paginacion.component';
import { SelectorPaquetesComponent } from './components/mostrador/selector-paquetes/selector-paquetes.component';

@NgModule({
  declarations: [
    InicioComponent,
    EstadoMostradorComponent,
    MostradorComponent,
    MostradorCuadriculaComponent,
    BannerComponent,
    PaginacionComponent,
    SelectorPaquetesComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PraiaModule { }
