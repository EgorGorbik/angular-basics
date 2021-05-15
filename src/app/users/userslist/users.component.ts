import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/User.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {getUsers} from '../state/users.selector';
import {deleteUser, loadUsers} from '../state/users.action';
import {autoLogin} from '../../auth/state/auth.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users = this.store.select(getUsers);
    this.store.dispatch(loadUsers());
  }

  onDeleteUser(id: string): void {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deleteUser({ id }));
    }
  }

}
