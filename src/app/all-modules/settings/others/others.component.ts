import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
declare const $: any;

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OthersComponent implements OnInit {

  editor: Editor = new Editor
  html!: '';

toolbar: Toolbar = [['bold', 'italic'], ['link']];


  constructor() {}

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
