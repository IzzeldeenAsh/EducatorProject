import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TextEditorComponent } from './text-editor.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { HelloComponent } from './hello.component';



@NgModule({
  declarations: [
    TextEditorComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    TextEditorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule

  ]
})
export class TextEditorModule { }
