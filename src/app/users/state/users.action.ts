import {createAction, props} from '@ngrx/store';
import {User} from '../../models/User.model';
import {Update} from '@ngrx/entity';

export const ADD_USER_ACTION = '[users page] add user';
export const ADD_USER_SUCCESS = '[users page] add user success';
export const UPDATE_USER_ACTION = '[users page] update user';
export const UPDATE_USER_SUCCESS = '[users page] update user success';
export const DELETE_USER_ACTION = '[users page] delete user';
export const DELETE_USER_SUCCESS = '[users page] delete user success';
export const LOAD_USERS = '[users page] load users';
export const LOAD_USERS_SUCCESS = '[users page] load users success';

export const addUser = createAction(ADD_USER_ACTION, props<{user: User}>());
export const addUserSuccess = createAction(ADD_USER_SUCCESS, props<{user: User}>());
export const updateUser = createAction(UPDATE_USER_ACTION, props<{user: User}>());
export const updateUserSuccess = createAction(UPDATE_USER_SUCCESS, props<{ user: Update<User> }>());
export const deleteUser = createAction(DELETE_USER_ACTION, props<{id: string}>());
export const deleteUserSuccess = createAction(DELETE_USER_SUCCESS, props<{id: string}>());

export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSuccess = createAction(LOAD_USERS_SUCCESS, props<{ users: User[] }>());
