import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AllModulesService } from '../../all-modules.service';
import { ShareDataService } from '../../share-data.service';
declare const $: any;

@Component({
  selector: 'app-invoices-paid',
  templateUrl: './invoices-paid.component.html',
  styleUrls: ['./invoices-paid.component.css']
})
export class InvoicesPaidComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public PaidInvoicesList!: any;
  public url: any = "paidInvoices";


  constructor(private dataService: ShareDataService) { }

  ngOnInit(): void {

    this.loadPaidInvoices();
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };

     //Filter Dropdown
     if($('.SortBy').length > 0) {
      var show = true;
      var checkbox1:any = document.getElementById("checkBox");
      $('.selectBoxes').on("click", function() {

        if (show) {
          checkbox1.style.display = "block";
          show = false;
        } else {
          checkbox1.style.display = "none";
          show = true;
        }
      });
    }

    $('.app-listing .selectBox').on("click", function(this:any) {
        $(this).parent().find('#checkBoxes').fadeToggle();
        $(this).parent().parent().siblings().find('#checkBoxes').fadeOut();
    });

    $('.invoices-main-form .selectBox').on("click", function(this:any) {
        $(this).parent().find('#checkBoxes-one').fadeToggle();
        $(this).parent().parent().siblings().find('#checkBoxes-one').fadeOut();
    });
  }
  // Get Invoices List  Api Call
  loadPaidInvoices() {
    this.PaidInvoicesList = this.dataService.paidInvoices
    
  }
  // destroy data table when leaving
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  public delete(){
    $('#delete_paid').modal('hide');
  }

}
