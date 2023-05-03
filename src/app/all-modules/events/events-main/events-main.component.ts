import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

declare const $: any;
@Component({
  selector: "app-events-main",
  templateUrl: "./events-main.component.html",
  styleUrls: ["./events-main.component.css"],
})
export class EventsMainComponent implements OnInit {
  constructor(
  ) {
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.loadStyleScript("assets/plugins/fullcalendar/fullcalendar.min.css")
    this.loadBasicStyleScript("styles.css")
    this.loadmoment("assets/js/moment.min.js")
    this.loadJquery("assets/js/jquery-3.5.1.min.js")
    this.loadPopperjs("assets/js/popper.min.js")
    this.loadBootstarpjs("assets/plugins/bootstrap/js/bootstrap.min.js")
    this.loadDynmicallyScript("assets/js/jquery-ui.min.js");
    this.loadFirstScript("assets/plugins/fullcalendar/fullcalendar.min.js")
    this.loadSecondScript("assets/plugins/fullcalendar/jquery.fullcalendar.js")
  }
  loadBasicStyleScript(js:any) {
    var script = document.createElement('link');
    script.href = js;
    script.rel = "stylesheet"
    // script.async = false;
    document.head.appendChild(script);
  }
  loadDynmicallyScript(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadFirstScript(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadSecondScript(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadStyleScript(js:any) {
    var script = document.createElement('link');
    script.href = js;
    script.rel = "stylesheet"
    // script.async = false;
    document.head.appendChild(script);
  }
  loadJquery(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadmoment(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadBootstarpjs(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadPopperjs(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }

}
