import {AuthUser} from '../../models/authUser.model';

export interface AuthState {
  user: AuthUser | null;
}

export const initialState: AuthState = {
  user: null
};
