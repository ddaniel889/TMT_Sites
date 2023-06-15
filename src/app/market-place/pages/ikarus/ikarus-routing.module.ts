import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IkarusComponent } from './ikarus.component';

const routes: Routes = [{ path: '', component: IkarusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IkarusRoutingModule { }
