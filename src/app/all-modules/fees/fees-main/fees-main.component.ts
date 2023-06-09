import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { AllModulesService } from "../../all-modules.service";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-fees-main",
  templateUrl: "./fees-main.component.html",
  styleUrls: ["./fees-main.component.css"],
})
export class FeesMainComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstFees!: any[];
  public url: any = "feesList";
  constructor(private dataService: ShareDataService) {}

  ngOnInit() {
    this.loadFees();
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
  }

  // Get Fees List  Api Call
  loadFees() {
    this.lstFees = this.dataService.feesList
  }
  // destroy data table when leaving
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
