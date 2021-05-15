import {User} from '../../models/User.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export interface UsersState extends EntityState<User>{}

export const usersAdapter = createEntityAdapter<User>();

export const initialState: UsersState = usersAdapter.getInitialState({});
