import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-departments-edit",
  templateUrl: "./departments-edit.component.html",
  styleUrls: ["./departments-edit.component.css"],
})
export class DepartmentsEditComponent implements OnInit {
  public editId:any
  public editDepartmentsForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "departmentsList";
  public lstDepartments:any
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
    this.departments();
    //getting edit id of selected department list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //editdepartments form validation
    this.editDepartmentsForm = this.formBuilder.group({
      departmentId: ["", [Validators.required]],
      departmentName: ["", [Validators.required]],
      hod: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      noOfStudents: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get Departments List  Api Call
  departments() {
    this.lstDepartments = this.dataService.departmentsList
  }

  // Edit Departments Submit call
  editDepartments() {
    let newDate = this.editDepartmentsForm.value.startDate.split("-");
    let year = newDate[0];
    if (isNaN(this.editId)) {
      this.obj = {
        idNo: this.editDepartmentsForm.value.departmentId,
        name: this.editDepartmentsForm.value.departmentName,
        hod: this.editDepartmentsForm.value.hod,
        startedYear: year,
        noOfStudents: this.editDepartmentsForm.value.noOfStudents,
        id: 1,
      };
    } else {
      this.obj = {
        idNo: this.editDepartmentsForm.value.departmentId,
        name: this.editDepartmentsForm.value.departmentName,
        hod: this.editDepartmentsForm.value.hod,
        startedYear: year,
        noOfStudents: this.editDepartmentsForm.value.noOfStudents,
        id: this.editId,
      };
    }

    if (this.editDepartmentsForm.valid) {
      this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
        this.router.navigate(["/layout/departments/departments-list"]);
        this.toastr.success("Departments edited sucessfully...!", "Success");
      });
    } else {
      this.toastr.warning("Mandatory fields are required...!", "Warning");
    }
  }

  // set values to departments form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstDepartments.findIndex((item:any) => {
        return item.id === 1;
      });
      let toSetValues = this.lstDepartments[index];
      this.editDepartmentsForm.patchValue({
        departmentId: toSetValues.idNo,
        departmentName: toSetValues.name,
        hod: toSetValues.hod,
        startDate: toSetValues.startedYear,
        noOfStudents: toSetValues.noOfStudents,
      });
      this.setDate = toSetValues.startedYear;
    } else {
      const index = this.lstDepartments.findIndex((item:any) => {
        return item.id === this.editId;
      });
      let toSetValues = this.lstDepartments[index];
      this.editDepartmentsForm.patchValue({
        departmentId: toSetValues.idNo,
        departmentName: toSetValues.name,
        hod: toSetValues.hod,
        startDate: toSetValues.startedYear,
        noOfStudents: toSetValues.noOfStudents,
      });
      this.setDate = toSetValues.startedYear;
    }
  }
}
