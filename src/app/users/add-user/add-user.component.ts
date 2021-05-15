import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {User} from '../../models/User.model';
import {addUser, loadUsers} from '../state/users.action';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
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

  onAddUser(): void {
    if (!this.userForm.valid) {
      return;
    }

    const user: User = {
      name: this.userForm.value.name,
      surname: this.userForm.value.surname,
      age: this.userForm.value.age,
    };

    this.store.dispatch(addUser({ user }));
  }

  /*showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm.touched && !descriptionForm.valid) {
      if(descriptionForm.errors.required) {
        return 'Description is required';
      }

      if(descriptionForm.errors.minlength) {
        return 'Description should be of minimum 10 characters length';
      }
    }
  }*/

}
