import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".settings-form").on('click','.trash', function () {
      $(this).closest('.links-cont').remove();
      return false;
      });
  
      $(document).on("click",".add-links",function () {
      var experiencecontent = '<div class="row form-row links-cont">' +
        '<div class="form-group d-flex">' +
          '<button class="btn social-icon"><i class="feather-github"></i></button>' +
          '<input type="text" class="form-control" placeholder="Social Link">' +
          '<div><a href="javascript:void(0)" class="btn trash"><i class="feather-trash-2"></i></a></div>' +
        '</div>' +
      '</div>';
      
          $(".settings-form").append(experiencecontent);
          return false;
      });
  }

}
