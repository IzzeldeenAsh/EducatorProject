import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from '../../share-data.service';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.css']
})
export class StudentsGridComponent implements OnInit {
  grids: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers2.subscribe((data: any) => {
      this.grids = data
    })
   }
  ngOnInit(): void {
  }

}
