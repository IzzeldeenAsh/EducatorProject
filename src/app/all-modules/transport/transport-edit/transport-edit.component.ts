import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-transport-edit",
  templateUrl: "./transport-edit.component.html",
  styleUrls: ["./transport-edit.component.css"],
})
export class TransportEditComponent implements OnInit {
  public editId:any
  public editTransportForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "transport";
  public lstTransport:any
  public obj:any
  public setDate:any
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private srvModuleService: AllModulesService,
    private dataService: ShareDataService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadTransport();
    //getting edit id of selected transport list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //edittransport form validation
    this.editTransportForm = this.formBuilder.group({
      routeName: ["", [Validators.required]],
      vehicleNumber: ["", [Validators.required]],
      driverName: ["", [Validators.required]],
      licenseNumber: ["", [Validators.required]],
      contactNumber: ["", [Validators.required]],
      driverAddress: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get transport List  Api Call
  loadTransport() {
    this.lstTransport = this.dataService.transport
  }

  // Edit transport Submit call
  editTransport() {
    if (isNaN(this.editId)) {
      this.obj = {
        routeName: this.editTransportForm.value.routeName,
        vehicleNumber: this.editTransportForm.value.vehicleNumber,
        driverName: this.editTransportForm.value.driverName,
        driverLicense: this.editTransportForm.value.licenseNumber,
        contactNumber: this.editTransportForm.value.contactNumber,
        driverAddress: this.editTransportForm.value.driverAddress,
        id: 1,
      };
    } else {
      this.obj = {
        routeName: this.editTransportForm.value.routeName,
        vehicleNumber: this.editTransportForm.value.vehicleNumber,
        driverName: this.editTransportForm.value.driverName,
        driverLicense: this.editTransportForm.value.licenseNumber,
        contactNumber: this.editTransportForm.value.contactNumber,
        driverAddress: this.editTransportForm.value.driverAddress,
        id: this.editId,
      };
    }

    if (this.editTransportForm.valid) {
      this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
        this.router.navigate(["/transport/transport-main"]);
        this.toastr.success("Transport edited sucessfully...!", "Success");
      });
    } else {
      this.toastr.warning("Mandatory fields are required...!", "Warning");
    }
  }

  // set values to transport form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstTransport.findIndex((item:any) => {
        return item.id === 1;
      });
      let toSetValues = this.lstTransport[index];
      this.editTransportForm.patchValue({
        routeName: toSetValues.routeName,
        vehicleNumber: toSetValues.vehicleNumber,
        driverName: toSetValues.driverName,
        licenseNumber: toSetValues.driverLicense,
        contactNumber: toSetValues.contactNumber,
        driverAddress: toSetValues.driverAddress,
      });
    } else {
      const index = this.lstTransport.findIndex((item:any) => {
        return item.id === this.editId;
      });
      let toSetValues = this.lstTransport[index];
      this.editTransportForm.patchValue({
        routeName: toSetValues.routeName,
        vehicleNumber: toSetValues.vehicleNumber,
        driverName: toSetValues.driverName,
        licenseNumber: toSetValues.driverLicense,
        contactNumber: toSetValues.contactNumber,
        driverAddress: toSetValues.driverAddress,
      });
    }
  }
}
