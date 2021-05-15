import {createAction, createFeatureSelector, createSelector} from '@ngrx/store';
import {getCurrentRoute} from '../../store/router/router.selector';
import {usersAdapter, UsersState} from './users.state';
export const USER_STATE_NAME = 'users';
const getUsersState = createFeatureSelector<UsersState>(USER_STATE_NAME);
export const usersSelectors = usersAdapter.getSelectors();

export const getUsers = createSelector(getUsersState, usersSelectors.selectAll);
export const getUserEntities = createSelector(getUsersState, usersSelectors.selectEntities);

export const getUserById = createSelector(
  getUserEntities,
  getCurrentRoute,
  (users, route) => {
    return users ? users[route.params['id']] : null;
  });
