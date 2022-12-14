import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valid login with correct credentials', () => {
    component.formLogin.controls['email'].setValue('test@test.com');
    component.formLogin.controls['password'].setValue('12345678');
    component.doLogin();
    fixture.detectChanges();
    expect(component.formLogin.value.email).toEqual('test@test.com');
    expect(component.formLogin.value.password).toEqual('12345678');
    expect(component.formLogin.valid).toBeTruthy();
  });

  it('login with correct credentials and remember password', () => {
    component.formLogin.controls['email'].setValue('test@test.com');
    component.formLogin.controls['password'].setValue('12345678');
    component.formLogin.controls['rememberPassword'].setValue(true);

    component.doLogin();
    fixture.detectChanges();
    expect(component.formLogin.value.email).toEqual('test@test.com');
    expect(component.formLogin.value.password).toEqual('12345678');
    expect(component.formLogin.value.rememberPassword).toBeTrue();
  });

  it('invalid email', () => {
    component.formLogin.controls['email'].setValue('test');

    component.doLogin();
    fixture.detectChanges();
    expect(component.formLogin.controls['email'].hasError('pattern')).toBeTruthy();
    expect(component.formLogin.controls['password'].hasError('required')).toBeTruthy();
  });

  it('invalid password', () => {
    component.formLogin.controls['password'].setValue('123');

    component.doLogin();
    fixture.detectChanges();
    expect(component.formLogin.controls['email'].hasError('required')).toBeTruthy();
    expect(component.formLogin.controls['password'].hasError('minlength')).toBeTruthy();
  });

});



