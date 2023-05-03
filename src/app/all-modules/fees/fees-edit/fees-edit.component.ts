import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-fees-edit",
  templateUrl: "./fees-edit.component.html",
  styleUrls: ["./fees-edit.component.css"],
})
export class FeesEditComponent implements OnInit {
  public editId:any
  public editFeesForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "feesList";
  public lstFees:any
  public obj:any
  public setDate:any
  public startDate:any
  public endDate:any
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private srvModuleService: AllModulesService,
    private dataService: ShareDataService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadFees();
    //getting edit id of selected fees list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //editfees form validation
    this.editFeesForm = this.formBuilder.group({
      feesId: ["", [Validators.required]],
      feesType: ["", [Validators.required]],
      gender: [""],
      amount: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get Fees List  Api Call
  loadFees() {
    this.lstFees = this.dataService.feesList
   }

  // Edit fees Submit call
  editFees() {
    let startDate = this.pipe.transform(
      this.editFeesForm.value.startDate,
      "d MMM y"
    );
    let endDate = this.pipe.transform(
      this.editFeesForm.value.endDate,
      "d MMM y"
    );
    if (isNaN(this.editId)) {
      this.obj = {
        idNo: this.editFeesForm.value.feesId,
        feesName: this.editFeesForm.value.feesType,
        class: "9",
        amount: this.editFeesForm.value.amount,
        startDate: startDate,
        endDate: endDate,
        id: 1,
      };
    } else {
      this.obj = {
        idNo: this.editFeesForm.value.feesId,
        feesName: this.editFeesForm.value.feesType,
        class: "9",
        amount: this.editFeesForm.value.amount,
        startDate: startDate,
        endDate: endDate,
        id: this.editId,
      };
    }

    if (this.editFeesForm.valid) {
      this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
        this.router.navigate(["/fees/fees-main"]);
        this.toastr.success("Fees edited sucessfully...!", "Success");
      });
    } else {
      this.toastr.warning("Mandatory fields are required...!", "Warning");
    }
  }

  // set values to fees form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstFees.findIndex((item:any) => {
        return item.id === 1;
      });
      let toSetValues = this.lstFees[index];
      this.editFeesForm.patchValue({
        feesId: toSetValues.idNo,
        feesType: toSetValues.feesName,
        gender: "Male",
        amount: toSetValues.amount,
        startDate: toSetValues.startDate,
        endDate: toSetValues.endDate,
      });
      this.startDate = toSetValues.startDate;
      this.endDate = toSetValues.endDate;
    } else {
      const index = this.lstFees.findIndex((item:any) => {
        return item.id === this.editId;
      });
      let toSetValues = this.lstFees[index];
      this.editFeesForm.patchValue({
        feesId: toSetValues.idNo,
        feesType: toSetValues.feesName,
        gender: "Male",
        amount: toSetValues.amount,
        startDate: toSetValues.startDate,
        endDate: toSetValues.endDate,
      });
      this.startDate = toSetValues.startDate;
      this.endDate = toSetValues.endDate;
    }
  }
}
