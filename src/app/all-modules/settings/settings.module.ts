import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { LocalizationComponent } from './localization/localization.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { SocialmediaLoginComponent } from './socialmedia-login/socialmedia-login.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { SeoSettingsComponent } from './seo-settings/seo-settings.component';
import { OthersComponent } from './others/others.component';
import { NgxEditorModule } from 'ngx-editor';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SettingsComponent,
    GeneralSettingsComponent,
    LocalizationComponent,
    PaymentSettingsComponent,
    EmailSettingsComponent,
    SocialmediaLoginComponent,
    SocialLinksComponent,
    SeoSettingsComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule
  ]
})
export class SettingsModule { }
