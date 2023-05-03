import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  elem=document.documentElement
  constructor(public router: Router) {}

  ngOnInit() {}

  Logout() {
    localStorage.removeItem("LoginData");
    this.router.navigate(["/login"]);
  }
  
  fullscreen() {
    if(!document.fullscreenElement) {
      this.elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }
}
