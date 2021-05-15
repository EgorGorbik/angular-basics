import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {getUserById} from '../state/users.selector';
import {updateUser} from '../state/users.action';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  userSubscription: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createForm();
    this.userSubscription = this.store
      .select(getUserById)
      .subscribe((user) => {
        if (user) {
          this.user = user;
          this.userForm.patchValue({
            name: user.name,
            surname: user.surname,
            age: user.age
          });
        }
      });
  }

  createForm(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      surname: new FormControl(null, [
        Validators.required
      ]),
      age: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit(): void {
    if (!this.userForm.valid) {
      return;
    }

    const name = this.userForm.value.name;
    const surname = this.userForm.value.surname;
    const age = this.userForm.value.age;

    const user: User = {
      id: this.user.id,
      name,
      surname,
      age
    };

    this.store.dispatch(updateUser({ user }));
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
