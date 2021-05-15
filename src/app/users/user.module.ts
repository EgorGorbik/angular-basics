import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UsersComponent} from './userslist/users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {USER_STATE_NAME} from './state/users.selector';
import {usersReducer} from './state/users.reducer';
import {UsersEffects} from './state/users.effects';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UsersComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'edit/:id', component: EditUserComponent },
    ]
  }
];
@NgModule({
  declarations: [UsersComponent, AddUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(USER_STATE_NAME, usersReducer),
  ]
})

export class UsersModule {}
