import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NacionalesComponent } from './nacionales.component';

const routes: Routes = [{ path: ':paqueteURL', component: NacionalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NacionalesRoutingModule { }
