import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeSliderRoutingModule } from './range-slider-routing.module';
import { RangeSliderComponent } from './range-slider.component';


@NgModule({
  declarations: [
    RangeSliderComponent
  ],
  imports: [
    CommonModule,
    RangeSliderRoutingModule
  ]
})
export class RangeSliderModule { }
