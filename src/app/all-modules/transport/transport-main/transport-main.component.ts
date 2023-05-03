import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { AllModulesService } from "../../all-modules.service";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-transport-main",
  templateUrl: "./transport-main.component.html",
  styleUrls: ["./transport-main.component.css"],
})
export class TransportMainComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement!: DataTableDirective;
  public dtOptions: any = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstTransport!: any[];
  public url: any = "transport";
  constructor(private dataService: ShareDataService) {}

  ngOnInit() {
    this.loadTransport();
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
  }
  // Get transport List  Api Call
  loadTransport() {
    this.lstTransport = this.dataService.transport
  }
  // destroy data table when leaving
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
