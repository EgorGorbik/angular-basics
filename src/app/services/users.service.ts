import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../models/User.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb.json`)
      .pipe(
        map((data) => {
          const users: User[] = [];
          for(let key in data) {
            users.push({ ...data[key], id: key });
          }
          return users;
        })
      );
  }

  addUser(post: User): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb.json`,
      post
    );
  }

  updateUser(user: User) {
    const userData = {
      [user.id]: { name: user.name, surname: user.surname, age: user.age },
    };
    return this.http.patch(
      `https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb.json`,
      userData
    );
  }

  deleteUser(id: string) {
    return this.http.delete(
      `https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb/${id}.json`
    );
  }

 /* getUserById(id: string): Observable<User> {
    console.log('details')
    return this.http.get<User>(
      `https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb/${id}.json`
    );
  }





  */
}
