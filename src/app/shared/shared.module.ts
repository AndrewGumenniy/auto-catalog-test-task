import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';


@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
