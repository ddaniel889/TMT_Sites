import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffinityComponent } from './affinity.component';

const routes: Routes = [{ path: '', component: AffinityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffinityRoutingModule { }
