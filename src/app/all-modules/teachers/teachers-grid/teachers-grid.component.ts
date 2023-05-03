import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from '../../share-data.service';

@Component({
  selector: 'app-teachers-grid',
  templateUrl: './teachers-grid.component.html',
  styleUrls: ['./teachers-grid.component.css']
})
export class TeachersGridComponent implements OnInit {
  teachgrids: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers4.subscribe((data: any) => {
      this.teachgrids = data
    })
   }
  ngOnInit(): void {
  }

}
