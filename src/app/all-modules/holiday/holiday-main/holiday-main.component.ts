import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { AllModulesService } from "../../all-modules.service";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-holiday-main",
  templateUrl: "./holiday-main.component.html",
  styleUrls: ["./holiday-main.component.css"],
})
export class HolidayMainComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstHoliday!: any[];
  public url: any = "holidayList";
  constructor(private dataService: ShareDataService) {}

  ngOnInit() {
    this.loadHoliday();
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
  }
  // Get Holiday List  Api Call
  loadHoliday() {
    this.lstHoliday = this.dataService.holidayList
      }
  // destroy data table when leaving
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
