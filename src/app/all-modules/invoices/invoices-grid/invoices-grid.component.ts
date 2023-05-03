import { Component, OnInit } from '@angular/core';
import { AllModulesService } from '../../all-modules.service';
import { ShareDataService } from '../../share-data.service';

@Component({
  selector: 'app-invoices-grid',
  templateUrl: './invoices-grid.component.html',
  styleUrls: ['./invoices-grid.component.css']
})
export class InvoicesGridComponent implements OnInit {

  public invoicesList!: any;
  public url: any = "invoicesList";


  constructor(private dataService: ShareDataService) { }

  ngOnInit(): void {
    this.loadInvoices();
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

    $('.app-listing .selectBox').on("click", function() {
        $(this).parent().find('#checkBoxes').fadeToggle();
        $(this).parent().parent().siblings().find('#checkBoxes').fadeOut();
    });

    $('.invoices-main-form .selectBox').on("click", function() {
        $(this).parent().find('#checkBoxes-one').fadeToggle();
        $(this).parent().parent().siblings().find('#checkBoxes-one').fadeOut();
    });
  }

  // Get Invoices List  Api Call
  loadInvoices() {
    this.invoicesList = this.dataService.invoicesList
  }

}
