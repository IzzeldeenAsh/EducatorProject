import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboards',
  templateUrl: './clipboards.component.html',
  styleUrls: ['./clipboards.component.css']
})
export class ClipboardsComponent implements OnInit {

  copyInputMessage(inputElement:any){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  cutInputMessage(inputElement:any){
    inputElement.select();
    document.execCommand('cut');
    inputElement.setSelectionRange(0, 0);
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
