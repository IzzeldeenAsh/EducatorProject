import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

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
      // Invoices Add More
  
      $(".links-info-one").on('click','.service-trash', function () {
        $(this).closest('.links-cont').remove();
        return false;
        });
  
        $(document).on("click",".add-links",function () {
        var experiencecontent = '<div class="links-cont">' +
          '<div class="service-amount">' +
            '<div><a href="javascript:void(0)" class="service-trash"><i class="feather feather-minus-circle me-1"></i></a>Service Charge</div> <span>$ 4</span' +
          '</div>' +
        '</div>';
  
            $(".links-info-one").append(experiencecontent);
            return false;
        });
  
         $(".links-info-discount").on('click','.service-trash-one', function () {
        $(this).closest('.links-cont-discount').remove();
        return false;
        });
  
        $(document).on("click",".add-links-one",function () {
        var experiencecontent = '<div class="links-cont-discount">' +
          '<div class="service-amount">' +
            '<div><a href="javascript:void(0)" class="service-trash-one"><i class="feather feather-minus-circle me-1"></i></a>Offer new</div><span>$ 4 %</span' +
          '</div>' +
        '</div>';
  
            $(".links-info-discount").append(experiencecontent);
            return false;
        });
  
        // Invoices Table Add More
  
        $(".add-table-items").on('click','.remove-btn', function () {
        $(this).closest('.add-row').remove();
        return false;
        });
  
        $(document).on("click",".add-btn",function () {
        var experiencecontent = '<tr class="add-row">' +
          '<td>' +
            '<input type="text" class="form-control">' +
          '</td>' +
          '<td>' +
            '<input type="text" class="form-control">' +
          '</td>' +
          '<td>' +
            '<input type="text" class="form-control">' +
          '</td>' +
          '<td>' +
            '<input type="text" class="form-control">' +
          '</td>' +
          '<td>' +
            '<input type="text" class="form-control">' +
          '</td>' +
          '<td>' +
            '<input type="text" class="form-control">' +
          '</td>' +
          '<td class="add-remove text-end">' +
            '<a href="javascript:void(0);" class="add-btn me-2"><i class="fas fa-plus-circle"></i></a> ' +
            '<a href="javascript:void(0)" class="copy-btn me-2"><i class="feather feather-copy"></i></a>' +
            '<a href="javascript:void(0);" class="remove-btn"><i class="feather feather-trash-2"></i></a>' +
          '</td>' +
        '</tr>';
  
            $(".add-table-items").append(experiencecontent);
            return false;
        });
  }

}
