import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserAuth } from 'src/app/shared/models/userAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl + 'auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    // fake autorization
    localStorage.setItem('token', 'xxxxx.yyyyy.zzzzz');

    // should be with api
    return this.http.post(this.baseUrl + 'login', model);
    // .pipe(
    //   map((responce: any) => {
    //     const user: UserAuth = responce;
    //     if (user) {
    //       localStorage.setItem('token', user.token);
    //     }
    //   })
    // );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return token;
  }
}
