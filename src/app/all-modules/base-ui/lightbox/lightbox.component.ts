import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  constructor() {}
  images = [
    {
      path: 'assets/img/img-01.jpg',
    },
    {
      path: 'assets/img/img-02.jpg'
    }
  ]
  images2 = [
    {
      path: 'assets/img/img-03.jpg',
    },
    {
      path: 'assets/img/img-04.jpg'
    },
    {
      path: 'assets/img/img-05.jpg',
    },
  ]

  ngOnInit(): void {
  }

}
