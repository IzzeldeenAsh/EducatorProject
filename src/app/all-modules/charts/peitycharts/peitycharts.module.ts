import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeitychartsComponent } from './peitycharts.component';
import { PeitychartsRoutingModule } from './peitycharts-routing.module';




@NgModule({
  declarations: [
    PeitychartsComponent
  ],
  imports: [
    CommonModule,
    PeitychartsRoutingModule
  ]
})
export class PeitychartsModule { }
