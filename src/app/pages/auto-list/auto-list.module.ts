import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoListComponent } from './auto-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AutoItemComponent } from './auto-item/auto-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutoListResolver } from 'src/app/core/resolvers/auto-list.resolver';

export const routes: Routes = [
  {
    path: '', component: AutoListComponent,
    resolve: {autoList: AutoListResolver}
  }
];

@NgModule({
  declarations: [AutoListComponent, AutoItemComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
})
export class AutoListModule { }
