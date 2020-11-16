import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCardComponent } from './auto-card.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutoCardResolver } from 'src/app/core/resolvers/auto-card.resolver';

export const routes: Routes = [
  {
    path: '', component: AutoCardComponent,
    resolve: {auto: AutoCardResolver}
  }
];

@NgModule({
  declarations: [AutoCardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class AutoCardModule { }
