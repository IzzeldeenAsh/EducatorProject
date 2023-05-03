import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorrischartsComponent } from './morrischarts.component';
import { MorrischartsRoutingModule } from './morrischarts-routing.module';


@NgModule({
  declarations: [
    MorrischartsComponent
  ],
  imports: [
    CommonModule,
    MorrischartsRoutingModule
  ]
})
export class MorrischartsModule { }
