import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { FooterComponent } from '../../components/footer/footer.component';
import { LogoLoginComponent } from 'src/app/components/logo-login/logo-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage, FooterComponent, LogoLoginComponent]
})
export class LoginPageModule { }
