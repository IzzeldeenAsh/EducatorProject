import { Component, OnInit, NgZone, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@HostListener("window: resize", ["$event"])
@Component({
  selector: "app-holiday",
  templateUrl: "./holiday.component.html",
  styleUrls: ["./holiday.component.css"],
})
export class HolidayComponent implements OnInit {
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

  ngOnInit() {
    // Page Content Height
    if ($(".page-wrapper").length > 0) {
      var height:any = $(window).height();
      $(".page-wrapper").css("min-height", height);
    }

    // Page Content Height Resize

    $(window).resize(function () {
      if ($(".page-wrapper").length > 0) {
        var height:any = $(window).height();
        $(".page-wrapper").css("min-height", height);
      }
    });
    this.router.navigateByUrl("/layout/holiday/holiday-main");
  }
  onResize(event:any) {
    this.innerHeight = event.target.innerHeight + "px";
  }
}
