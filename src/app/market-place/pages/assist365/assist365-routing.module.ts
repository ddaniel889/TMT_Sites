import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Assist365Component } from './assist365.component';

const routes: Routes = [{ path: '', component: Assist365Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Assist365RoutingModule { }
