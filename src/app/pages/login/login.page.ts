import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageType, ValidatorMessagesType } from './types';

import es from '../../../assets/i18n/es.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  es: any = es;
  formLogin: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rememberPassword: [false]
  });
  isSubmitted: boolean = false;
  validatorMessages: ValidatorMessagesType = {
    email: [
      { type: 'required', message: this.es.emailRequired },
      { type: 'pattern', message: this.es.emailPattern }
    ],
    password: [
      { type: 'required', message: this.es.passwordRequired },
      { type: 'minlength', message: this.es.passwordMinlength }
    ]
  };
  constructor(private readonly formBuilder: FormBuilder, private alertController: AlertController) { }

  async doLogin () {
    this.isSubmitted = true;
    if (this.formLogin.valid) {
      const alert = await this.alertController.create({
        header: this.es.title,
        subHeader: this.es.loginOK,
        message: this.formLogin.value.rememberPassword ? this.es.passwordSaved : "",
        buttons: [this.es.accept],
      });
  
      await alert.present();
    }
  }

  fieldValidator(field: string): string {
    let errorMessage: MessageType | undefined;
    const control = this.formLogin.controls[field];
    if ((this.isSubmitted || (this.isSubmitted && control.touched))) {
      errorMessage = this.validatorMessages[field as keyof ValidatorMessagesType].find(error => control.hasError(error.type));
    }
    return errorMessage ? errorMessage.message : '';
  }
}
