import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-teachers-edit",
  templateUrl: "./teachers-edit.component.html",
  styleUrls: ["./teachers-edit.component.css"],
})
export class TeachersEditComponent implements OnInit {
  public editId:any
  public editTeachersForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "teachersList";
  public lstTeachers:any
  public obj:any
  public setDate = "2 Feb 2002";
  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private srvModuleService: AllModulesService,
    private dataService: ShareDataService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadTeachers();
    //getting edit id of selected teachers list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //edit teachers  form validation
    this.editTeachersForm = this.formBuilder.group({
      teacherId: ["", [Validators.required]],
      teacherName: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      address: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }
  // Get teachers List  Api Call
  loadTeachers() {
    this.lstTeachers = this.dataService.teachersList
    
  }

  // Edit teachers Submit call
  editTeachers() {
    if (isNaN(this.editId)) {
      this.obj = {
        idNo: this.editTeachersForm.value.teacherId,
        teacherName: this.editTeachersForm.value.name,
        mobileNumber: this.editTeachersForm.value.mobile,
        address: this.editTeachersForm.value.address,
        id: 1,
      };
    } else {
      this.obj = {
        idNo: this.editTeachersForm.value.teacherId,
        teacherName: this.editTeachersForm.value.teacherName,
        mobileNumber: this.editTeachersForm.value.mobile,
        address: this.editTeachersForm.value.address,
        id: this.editId,
      };
    }

    if (this.editTeachersForm.valid) {
      this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
        this.router.navigate(["/layout/teachers/teachers-list"]);
        this.toastr.success("Teachers edited sucessfully...!", "Success");
      });
    } else {
      this.toastr.warning("Mandatory fields are required...!", "Warning");
    }
  }

  // set values to teachers form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstTeachers.findIndex((item:any) => {
        return item.id === 1;
      });
      let toSetValues = this.lstTeachers[index];
      this.editTeachersForm.patchValue({
        teacherId: toSetValues.idNo,
        name: toSetValues.name,
        gender: toSetValues.gender,
        mobile: toSetValues.mobileNumber,
        address: toSetValues.address,
      });
    } else {
      const index = this.lstTeachers.findIndex((item:any) => {
        return item.id === this.editId;
      });
      let toSetValues = this.lstTeachers[index];
      this.editTeachersForm.patchValue({
        teacherId: toSetValues.idNo,
        name: toSetValues.name,
        gender: toSetValues.gender,
        mobile: toSetValues.mobileNumber,
        address: toSetValues.address,
      });
    }
  }
}
