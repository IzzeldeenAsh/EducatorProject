import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-subjects-edit",
  templateUrl: "./subjects-edit.component.html",
  styleUrls: ["./subjects-edit.component.css"],
})
export class SubjectsEditComponent implements OnInit {
  public editId:any
  public editSubjectsForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "subjectsList";
  public lstSubjects:any
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
    this.loadsubjects();
    //getting edit id of selected subject list
    this.editId = parseInt(this.route.snapshot.queryParams["id"]);
    //editsubject form validation
    this.editSubjectsForm = this.formBuilder.group({
      subjectId: ["", [Validators.required]],
      subjectName: ["", [Validators.required]],
      class: ["", [Validators.required]],
    });
    setTimeout(() => {
      //<<<---using ()=> syntax
      this.edit();
    }, 1000);
  }

  // Get Subjects List  Api Call
  loadsubjects() {
    this.lstSubjects = this.dataService.subjectsList
    
  }

  // Edit subject Submit call
  editSubjects() {
    if (isNaN(this.editId)) {
      this.obj = {
        idNo: this.editSubjectsForm.value.subjectId,
        name: this.editSubjectsForm.value.subjectName,
        class: this.editSubjectsForm.value.class,
        id: 1,
      };
    } else {
      this.obj = {
        idNo: this.editSubjectsForm.value.subjectId,
        name: this.editSubjectsForm.value.subjectName,
        class: this.editSubjectsForm.value.class,
        id: this.editId,
      };
    }

    if (this.editSubjectsForm.valid) {
      this.srvModuleService.update(this.obj, this.url).subscribe((data) => {
        this.router.navigate(["/layout/subjects/subjects-list"]);
        this.toastr.success("Subjects edited sucessfully...!", "Success");
      });
    } else {
      this.toastr.warning("Mandatory fields are required...!", "Warning");
    }
  }

  // set values to subject form
  edit() {
    if (isNaN(this.editId)) {
      const index = this.lstSubjects.findIndex((item:any) => {
        return item.id === 1;
      });
      let toSetValues = this.lstSubjects[index];
      this.editSubjectsForm.patchValue({
        subjectId: toSetValues.idNo,
        subjectName: toSetValues.name,
        class: toSetValues.class,
      });
    } else {
      const index = this.lstSubjects.findIndex((item:any) => {
        return item.id === this.editId;
      });
      let toSetValues = this.lstSubjects[index];
      this.editSubjectsForm.patchValue({
        subjectId: toSetValues.idNo,
        subjectName: toSetValues.name,
        class: toSetValues.class,
      });
    }
  }
}
