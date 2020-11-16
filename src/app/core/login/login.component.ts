import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hide = true;

  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public onSubmit() {
    this.authService.login(this.loginForm.value).subscribe();
    this.router.navigate(['/auto-list']);
  }
}
