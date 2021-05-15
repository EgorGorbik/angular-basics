import {createReducer, on} from '@ngrx/store';
import {initialState, usersAdapter} from './users.state';
import {addUserSuccess, deleteUserSuccess, loadUsers, loadUsersSuccess, updateUserSuccess} from './users.action';

const _usersReducer = createReducer(
  initialState,
  on(addUserSuccess, (state, action) => {
    return usersAdapter.addOne(action.user, state);
  }),
  on(updateUserSuccess, (state, action) => {
    return usersAdapter.updateOne(action.user, state);
  }),
  on(deleteUserSuccess, (state, { id }) => {
    return usersAdapter.removeOne(id, state);
  }),
  on(loadUsersSuccess, (state, action) => {
    return usersAdapter.setAll(action.users, state);
  })
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}
