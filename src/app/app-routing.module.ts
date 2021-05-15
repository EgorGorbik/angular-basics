import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {
    path: 'users',
    loadChildren: () =>
      import('./users/user.module').then((m) => m.UsersModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
