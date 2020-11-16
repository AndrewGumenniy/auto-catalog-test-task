import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'auto-list',
    loadChildren: () => import('./pages/auto-list/auto-list.module').then(m => m.AutoListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auto-card/:id',
    loadChildren: () => import('./pages/auto-card/auto-card.module').then((m) => m.AutoCardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then(m => m.CreateModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auto-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
