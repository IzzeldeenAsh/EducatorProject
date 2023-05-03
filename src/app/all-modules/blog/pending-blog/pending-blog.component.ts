import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from '../../share-data.service';

@Component({
  selector: 'app-pending-blog',
  templateUrl: './pending-blog.component.html',
  styleUrls: ['./pending-blog.component.css']
})
export class PendingBlogComponent implements OnInit {
  pendings: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers1.subscribe((data: any) => {
      this.pendings = data
    })
   }

  ngOnInit(): void {
  }

}
