import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChartjsComponent } from './chartjs.component';
import { ChartjsRoutingModule } from './chartjs-routing.module';



@NgModule({
  declarations: [
    ChartjsComponent
  ],
  imports: [
    CommonModule,
    ChartjsRoutingModule,


  ]
})
export class ChartjsModule { }
