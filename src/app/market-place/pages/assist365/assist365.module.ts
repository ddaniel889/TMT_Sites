import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assist365Service  } from './services/assist365.service';
import { Assist365RoutingModule } from './assist365-routing.module';
import { Assist365Component } from './assist365.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RegionSelectedPipe } from './pipe/region-selected.pipe';

@NgModule({
  declarations: [Assist365Component,RegionSelectedPipe],
  imports: [
    CommonModule,
    Assist365RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      HttpClient,
      Assist365Service
  ]
})
export class Assist365Module { }
