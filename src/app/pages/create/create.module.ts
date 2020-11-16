import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateAutoService } from './create.service';

export const routes: Routes = [
  {
    path: '', component: CreateComponent
  }
];

@NgModule({
  declarations: [CreateComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [
    CreateAutoService
  ],
})
export class CreateModule { }
