import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternacionalesComponent } from './internacionales.component';

const routes: Routes = [{ path: ':id', component: InternacionalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternacionalesRoutingModule { }
