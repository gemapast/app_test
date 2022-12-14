import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-login',
  templateUrl: './logo-login.component.html',
  styleUrls: ['./logo-login.component.scss'],
})
export class LogoLoginComponent {

  @Input() title: string = '';

  constructor() { }

}
