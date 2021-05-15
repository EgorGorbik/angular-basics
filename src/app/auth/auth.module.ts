import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthEffects} from './state/auth.effects';
import {EffectsModule} from '@ngrx/effects';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', children: [
      {path: '', redirectTo: 'login'},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
    ]}
];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature()
  ]
})

export class AuthModule {}
