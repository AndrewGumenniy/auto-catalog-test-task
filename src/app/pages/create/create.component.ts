import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAutoService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public createForm: FormGroup;
  public hide = true;

  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private createAutoService: CreateAutoService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      image: new FormControl('', Validators.compose([
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')
      ])),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      details: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.createForm.controls[controlName].hasError(errorName);
  }

  public onSubmit() {
    this.createAutoService.createNewAuto(this.createForm.value).subscribe();
    this.router.navigate(['/auto-list']);
  }

}
