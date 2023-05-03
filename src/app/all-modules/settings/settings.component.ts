import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public innerHeight: any;

  constructor(private ngZone: NgZone, private router: Router) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
   }

   getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }

  ngOnInit(): void {
    // Page Content Height

    if ($('.page-wrapper').length > 0) {
      var height:any = $(window).height();
      $(".page-wrapper").css("min-height", height);
    }

    // Page Content Height Resize

    $(window).resize(function () {
      if ($('.page-wrapper').length > 0) {
        var height:any = $(window).height();
        $(".page-wrapper").css("min-height", height);
      }
    });
  }
  onResize(event:any) {
    this.innerHeight = event.target.innerHeight + "px";
  }

}
