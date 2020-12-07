import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models';
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User>('/users');
    }

    signUp(user: string) {
        const header = new HttpHeaders()
        .set('Content-type', 'application/json');
        const body = user;
        return this.http.post<any>('https://localhost:44377/register', body, { headers: header} )
    }
   
}