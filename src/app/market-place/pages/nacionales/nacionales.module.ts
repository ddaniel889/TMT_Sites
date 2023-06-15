import { NgModule } from '@angular/core';

import { NacionalesRoutingModule } from './nacionales-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { NacionalesComponent } from './nacionales.component';
import { BreadCrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HeaderStickyComponent } from './components/header-sticky/header-sticky.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { IzquierdoComponent } from './components/contenedor/izquierdo/izquierdo.component';
import { DerechoComponent } from './components/contenedor/derecho/derecho.component';
import { FrecuentesComponent } from './components/contenedor/izquierdo/frecuentes/frecuentes.component';
import { TabsListComponent } from './components/contenedor/izquierdo/tabs-list/tabs-list.component';
import { TabsComponent } from './components/contenedor/izquierdo/tabs/tabs.component';
import { TabDescripcionComponent } from './components/contenedor/izquierdo/tabs/tab-descripcion/tab-descripcion.component';
import { TabEspecificacionComponent } from './components/contenedor/izquierdo/tabs/tab-especificacion/tab-especificacion.component';
import { TabVendedorComponent } from './components/contenedor/izquierdo/tabs/tab-vendedor/tab-vendedor.component';
import { TabRevisionesComponent } from './components/contenedor/izquierdo/tabs/tab-revisiones/tab-revisiones.component';
import { TabPreguntasRespuestasComponent } from './components/contenedor/izquierdo/tabs/tab-preguntas-respuestas/tab-preguntas-respuestas.component';
import { SimilaresCompradosComponent } from './components/similares-comprados/similares-comprados.component';
import { RelacionadosComponent } from './components/relacionados/relacionados.component';

@NgModule({
  declarations: [
    NacionalesComponent,
    BreadCrumbComponent,
    HeaderStickyComponent,
    ContenedorComponent,
    IzquierdoComponent,
    DerechoComponent,
    FrecuentesComponent,
    TabsListComponent,
    TabsComponent,
    TabDescripcionComponent,
    TabEspecificacionComponent,
    TabVendedorComponent,
    TabRevisionesComponent,
    TabPreguntasRespuestasComponent,
    SimilaresCompradosComponent,
    RelacionadosComponent
  ],
  imports: [
    SharedModule,
    NacionalesRoutingModule
  ]
})
export class NacionalesModule { }
