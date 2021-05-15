import { AppState } from './../../store/app.state';
import { getUsers } from './users.selector';
import { Store } from '@ngrx/store';
import { User } from './../../models/User.model';
import {
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

import { UsersService } from './../../services/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {ROUTER_NAVIGATION, RouterNavigatedAction} from '@ngrx/router-store';
import {Update} from '@ngrx/entity';
import {dummyAction} from '../../auth/state/auth.actions';
import {
  addUser,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
  loadUsers,
  loadUsersSuccess,
  updateUser,
  updateUserSuccess
} from './users.action';
import {Router} from '@angular/router';


@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  loadUsers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadUsers),
        withLatestFrom(this.store.select(getUsers)),
        mergeMap(([action, users]) => {
            if(!users.length) {
              return this.usersService.getUsers().pipe(
                map((users) => {
                  return loadUsersSuccess({ users });
                })
              );
            }
          return of(dummyAction());
        })
      );
    }
  );

  addUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addUser),
      mergeMap((action) => {
        return this.usersService.addUser(action.user).pipe(
          map((data) => {
            const user = { ...action.user, id: data.name };
            this.router.navigate(['users']);
            return addUserSuccess({ user });
          })
        );
      })
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUser),
      switchMap((action) => {
        return this.usersService.updateUser(action.user).pipe(
          map((data) => {
            const updatedUser: Update<User> = {
              id: action.user.id,
              changes: {
                ...action.user,
              },
            };
            this.router.navigate(['users']);
            return updateUserSuccess({ user: updatedUser });
          })
        );
      })
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUser),
      switchMap((action) => {
        return this.usersService.deleteUser(action.id).pipe(
          map((data) => {
            return deleteUserSuccess({ id: action.id });
          })
        );
      })
    );
  });

  /*






  getSinglePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/posts/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getPosts)),
      switchMap(([id, posts]) => {
        if(!posts.length) {
          return this.postsService.getPosts().pipe(
            map((post) => {
              const postData = [{ ...post, id }];
              return loadPostsSuccess({ posts: post });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });*/
}
