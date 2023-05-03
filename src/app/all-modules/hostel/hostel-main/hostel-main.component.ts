import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { AllModulesService } from "../../all-modules.service";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-hostel-main",
  templateUrl: "./hostel-main.component.html",
  styleUrls: ["./hostel-main.component.css"],
})
export class HostelMainComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstHostel!: any[];
  public url: any = "hostel";
  constructor(private dataService: ShareDataService) {}

  ngOnInit() {
    this.loadHostel();
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
  }

  // Get hostel List  Api Call
  loadHostel() {
    this.lstHostel = this.dataService.hostel
  }
  // destroy data table when leaving
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
