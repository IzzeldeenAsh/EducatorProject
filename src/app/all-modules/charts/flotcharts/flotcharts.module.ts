import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlotchartsComponent } from './flotcharts.component';
import { FlotchartsRoutingModule } from './flotcharts-routing.module';


@NgModule({
  declarations: [
    FlotchartsComponent
  ],
  imports: [
    CommonModule,
    FlotchartsRoutingModule
  ]
})
export class FlotchartsModule { }
