import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffinityRoutingModule } from './affinity-routing.module';
import { AffinityComponent } from './affinity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AffinityComponent],
  imports: [
    CommonModule,
    AffinityRoutingModule,
    FormsModule, ReactiveFormsModule 
  ]
})
export class AffinityModule { }
